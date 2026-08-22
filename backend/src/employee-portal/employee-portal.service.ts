import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { Attendance, AttendanceStatus, CheckType } from '../entities/attendance.entity';
import { Payroll } from '../entities/payroll.entity';
import { Schedule } from '../entities/schedule.entity';
import { ScheduleSwapService } from '../schedule-swap/schedule-swap.service';
import { LeaveRequestService } from '../leave-request/leave-request.service';
import { LeaveType } from '../entities/leave-request.entity';
@Injectable()
export class EmployeePortalService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,
    @InjectRepository(Payroll)
    private payrollRepo: Repository<Payroll>,
    @InjectRepository(Schedule)
    private scheduleRepo: Repository<Schedule>,
    private readonly swapService: ScheduleSwapService,
    private readonly leaveRequestService: LeaveRequestService,
  ) {}

  // === PROFILE ===
  async getMyProfile(userId: number) {
    const employee = await this.employeeRepo.findOne({ where: { userId } });
    if (!employee) {
      throw new UnauthorizedException('No employee record linked to this account');
    }
    // Don't expose sensitive fields
    return {
      id: employee.id,
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      position: employee.position,
      status: employee.status,
      joinDate: employee.joinDate,
      bankName: employee.bankName,
      bankAccount: employee.bankAccount ? '****' + employee.bankAccount.slice(-4) : null,
      bankAccountName: employee.bankAccountName,
    };
  }

  private async getEmployeeId(userId: number): Promise<number> {
    const employee = await this.employeeRepo.findOne({ where: { userId } });
    if (!employee) {
      throw new UnauthorizedException('No employee record linked to this account');
    }
    return employee.id;
  }

  // === DASHBOARD ===
  async getDashboard(userId: number) {
    const employeeId = await this.getEmployeeId(userId);
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    // Today's attendance
    const todayAttendance = await this.attendanceRepo.findOne({
      where: { employeeId, date: today },
    });

    // Today's schedule
    const todaySchedule = await this.scheduleRepo.findOne({
      where: { employeeId, date: today },
    });

    // Latest payslip
    const latestPayroll = await this.payrollRepo.findOne({
      where: { employeeId },
      order: { year: 'DESC', month: 'DESC' },
    });

    // This month attendance summary
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;
    const monthAttendance = await this.attendanceRepo.find({
      where: { employeeId, date: Between(startDate, endDate) },
    });

    const presentCount = monthAttendance.filter(a => a.status === AttendanceStatus.PRESENT).length;
    const lateCount = monthAttendance.filter(a => a.status === AttendanceStatus.LATE).length;
    const absentCount = monthAttendance.filter(a => a.status === AttendanceStatus.ABSENT).length;

    return {
      today: {
        date: today,
        hasCheckedIn: !!(todayAttendance?.checkIn),
        hasCheckedOut: !!(todayAttendance?.checkOut),
        checkInTime: todayAttendance?.checkIn || null,
        checkOutTime: todayAttendance?.checkOut || null,
        status: todayAttendance?.status || null,
      },
      schedule: todaySchedule ? {
        shift: todaySchedule.shift,
        startTime: todaySchedule.startTime,
        endTime: todaySchedule.endTime,
        notes: todaySchedule.notes,
      } : null,
      latestPayroll: latestPayroll ? {
        period: latestPayroll.period,
        netSalary: latestPayroll.netSalary,
        status: latestPayroll.status,
      } : null,
      monthSummary: {
        year,
        month,
        present: presentCount,
        late: lateCount,
        absent: absentCount,
        total: monthAttendance.length,
      },
    };
  }

  // === ATTENDANCE ===
  async checkIn(userId: number, data: { lat?: number; lng?: number; address?: string; photo?: string }) {
    const employeeId = await this.getEmployeeId(userId);
    const today = new Date().toISOString().split('T')[0];

    const existing = await this.attendanceRepo.findOne({
      where: { employeeId, date: today },
    });

    if (existing && existing.checkIn) {
      throw new BadRequestException('Sudah check-in hari ini');
    }

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Late if after 09:00
    const isLate = hours > 9 || (hours === 9 && minutes > 0);
    const lateMinutes = isLate ? (hours - 9) * 60 + minutes : 0;

    const isGpsPhoto = data.lat != null && data.photo;

    if (existing) {
      existing.checkIn = now;
      existing.checkInLat = data.lat ?? null;
      existing.checkInLng = data.lng ?? null;
      existing.checkInAddress = data.address ?? null;
      existing.checkInPhoto = data.photo ?? null;
      existing.checkInType = isGpsPhoto ? CheckType.GPS_PHOTO : CheckType.MANUAL;
      existing.status = isLate ? AttendanceStatus.LATE : AttendanceStatus.PRESENT;
      existing.lateMinutes = lateMinutes;
      return this.attendanceRepo.save(existing);
    }

    const attendance = this.attendanceRepo.create({
      employeeId,
      date: today,
      checkIn: now,
      checkInLat: data.lat,
      checkInLng: data.lng,
      checkInAddress: data.address,
      checkInPhoto: data.photo,
      checkInType: isGpsPhoto ? CheckType.GPS_PHOTO : CheckType.MANUAL,
      status: isLate ? AttendanceStatus.LATE : AttendanceStatus.PRESENT,
      lateMinutes,
    });

    return this.attendanceRepo.save(attendance);
  }

  async checkOut(userId: number, data: { lat?: number; lng?: number; address?: string; photo?: string }) {
    const employeeId = await this.getEmployeeId(userId);
    const today = new Date().toISOString().split('T')[0];

    const existing = await this.attendanceRepo.findOne({
      where: { employeeId, date: today },
    });

    if (!existing || !existing.checkIn) {
      throw new BadRequestException('Belum check-in hari ini');
    }
    if (existing.checkOut) {
      throw new BadRequestException('Sudah check-out hari ini');
    }

    const now = new Date();
    const isGpsPhoto = data.lat != null && data.photo;

    existing.checkOut = now;
    existing.checkOutLat = data.lat ?? null;
    existing.checkOutLng = data.lng ?? null;
    existing.checkOutAddress = data.address ?? null;
    existing.checkOutPhoto = data.photo ?? null;
    existing.checkOutType = isGpsPhoto ? CheckType.GPS_PHOTO : CheckType.MANUAL;

    const diffMs = now.getTime() - new Date(existing.checkIn).getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    existing.workHours = Math.round(diffHours * 100) / 100;

    if (diffHours > 8) {
      existing.overtimeHours = Math.round((diffHours - 8) * 100) / 100;
    }

    return this.attendanceRepo.save(existing);
  }

  async getMyAttendance(userId: number, year: number, month: number) {
    const employeeId = await this.getEmployeeId(userId);
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;

    const records = await this.attendanceRepo.find({
      where: { employeeId, date: Between(startDate, endDate) },
      order: { date: 'ASC' },
    });

    // Strip photos from list
    return records.map(r => ({
      ...r,
      checkInPhoto: r.checkInPhoto ? '[has_photo]' : null,
      checkOutPhoto: r.checkOutPhoto ? '[has_photo]' : null,
    }));
  }

  // === PAYSLIPS ===
  async getMyPayslips(userId: number) {
    const employeeId = await this.getEmployeeId(userId);
    return this.payrollRepo.find({
      where: { employeeId },
      order: { year: 'DESC', month: 'DESC' },
    });
  }

  async getPayslipDetail(userId: number, payrollId: number) {
    const employeeId = await this.getEmployeeId(userId);
    const payroll = await this.payrollRepo.findOne({
      where: { id: payrollId, employeeId },
    });
    if (!payroll) {
      throw new UnauthorizedException('Payslip not found or not yours');
    }
    return payroll;
  }

  // === SCHEDULE ===
  async getMySchedule(userId: number, year: number, month: number) {
    const employeeId = await this.getEmployeeId(userId);
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;

    return this.scheduleRepo.find({
      where: { employeeId, date: Between(startDate, endDate) },
      order: { date: 'ASC' },
    });
  }

  // === SWAP REQUESTS ===
  async createSwapRequest(
    userId: number,
    data: { targetId: number; requesterScheduleId: number; targetScheduleId: number; reason?: string },
  ) {
    const employeeId = await this.getEmployeeId(userId);
    return this.swapService.createSwapRequest(employeeId, data);
  }

  async getMySwapRequests(userId: number) {
    return this.swapService.getMySwapRequests(userId);
  }

  async getPendingSwapRequests(userId: number) {
    return this.swapService.getPendingForMe(userId);
  }

  async respondToSwapRequest(userId: number, swapId: number, approved: boolean, note?: string) {
    return this.swapService.respondAsPeer(userId, swapId, approved, note);
  }

  async cancelSwapRequest(userId: number, swapId: number) {
    return this.swapService.cancelRequest(userId, swapId);
  }
  // === LEAVE REQUESTS ===
  async createLeaveRequest(
    userId: number,
    data: { type: LeaveType; startDate: string; endDate: string; reason: string; attachment?: string },
  ) {
    const employeeId = await this.getEmployeeId(userId);
    return this.leaveRequestService.createLeaveRequest(employeeId, data);
  }

  async getMyLeaveRequests(userId: number, filters?: { status?: string; year?: number }) {
    const employeeId = await this.getEmployeeId(userId);
    return this.leaveRequestService.getMyLeaveRequests(employeeId, filters);
  }

  async cancelLeaveRequest(userId: number, leaveId: number) {
    const employeeId = await this.getEmployeeId(userId);
    return this.leaveRequestService.cancelRequest(employeeId, leaveId);
  }
}
