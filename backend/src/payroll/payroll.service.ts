import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Payroll, PayrollStatus } from '../entities/payroll.entity';
import { Attendance, AttendanceStatus } from '../entities/attendance.entity';
import { Employee, EmployeeStatus } from '../entities/employee.entity';

@Injectable()
export class PayrollService {
  constructor(
    @InjectRepository(Payroll)
    private payrollRepo: Repository<Payroll>,
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  async findAll(filters?: {
    employeeId?: number;
    year?: number;
    month?: number;
    status?: string;
    studioId?: number;
  }) {
    const qb = this.payrollRepo.createQueryBuilder('p')
      .leftJoinAndSelect('p.employee', 'employee')
      .orderBy('employee.name', 'ASC');

    if (filters?.employeeId) {
      qb.andWhere('p.employeeId = :employeeId', { employeeId: filters.employeeId });
    }
    if (filters?.year) {
      qb.andWhere('p.year = :year', { year: filters.year });
    }
    if (filters?.month) {
      qb.andWhere('p.month = :month', { month: filters.month });
    }
    if (filters?.status) {
      qb.andWhere('p.status = :status', { status: filters.status });
    }
    if (filters?.studioId) {
      qb.andWhere('p.studioId = :studioId', { studioId: filters.studioId });
    }

    return qb.getMany();
  }

  async findOne(id: number) {
    const payroll = await this.payrollRepo.findOne({
      where: { id },
      relations: ['employee'],
    });
    if (!payroll) throw new NotFoundException('Payroll not found');
    return payroll;
  }

  async getSummary(year: number, month: number, studioId?: number) {
    const where: any = { year: Number(year), month: Number(month) };
    if (studioId) where.studioId = studioId;
    const payrolls = await this.payrollRepo.find({
      where,
    });

    const totalEmployees = payrolls.length;
    const totalNetSalary = payrolls.reduce((sum, p) => sum + Number(p.netSalary), 0);
    const totalEarnings = payrolls.reduce((sum, p) => sum + Number(p.totalEarnings), 0);
    const totalDeductions = payrolls.reduce((sum, p) => sum + Number(p.totalDeductions), 0);
    const averageSalary = totalEmployees > 0 ? totalNetSalary / totalEmployees : 0;
    const paidCount = payrolls.filter(p => p.status === PayrollStatus.PAID).length;
    const pendingCount = payrolls.filter(p => p.status !== PayrollStatus.PAID && p.status !== PayrollStatus.CANCELLED).length;

    return {
      totalEmployees,
      totalNetSalary,
      totalEarnings,
      totalDeductions,
      averageSalary,
      paidCount,
      pendingCount,
    };
  }

  async getReport(year: number, studioId?: number) {
    const months: { month: number; totalNetSalary: number; totalEarnings: number; totalDeductions: number; employeeCount: number }[] = [];
    for (let m = 1; m <= 12; m++) {
      const where: any = { year: Number(year), month: m };
      if (studioId) where.studioId = studioId;
      const payrolls = await this.payrollRepo.find({
        where,
      });

      months.push({
        month: m,
        totalNetSalary: payrolls.reduce((sum, p) => sum + Number(p.netSalary), 0),
        totalEarnings: payrolls.reduce((sum, p) => sum + Number(p.totalEarnings), 0),
        totalDeductions: payrolls.reduce((sum, p) => sum + Number(p.totalDeductions), 0),
        employeeCount: payrolls.length,
      });
    }
    return months;
  }

  async generate(year: number, month: number, employeeId?: number, studioId?: number) {
    // 1. Get active employees
    const whereCondition: any = { status: EmployeeStatus.ACTIVE };
    if (employeeId) {
      whereCondition.id = employeeId;
    }
    const employees = await this.employeeRepo.find({ where: whereCondition });

    // Calculate date range for the month
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;

    // Calculate total work days (weekdays in the month)
    let totalWorkDays = 0;
    for (let d = 1; d <= lastDay; d++) {
      const dayOfWeek = new Date(year, month - 1, d).getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        totalWorkDays++;
      }
    }

    const period = `${year}-${String(month).padStart(2, '0')}`;
    const generatedPayrolls: Payroll[] = [];

    for (const employee of employees) {
      // 2. Get attendance records for the month
      const attendances = await this.attendanceRepo.find({
        where: {
          employeeId: employee.id,
          date: Between(startDate, endDate),
        },
      });

      // 3. Count attendance stats
      const totalPresent = attendances.filter(
        a => a.status === AttendanceStatus.PRESENT || a.status === AttendanceStatus.LATE,
      ).length;
      const totalAbsent = attendances.filter(
        a => a.status === AttendanceStatus.ABSENT,
      ).length;
      const totalLate = attendances.filter(
        a => a.status === AttendanceStatus.LATE,
      ).length;
      const totalOvertimeHours = attendances.reduce(
        (sum, a) => sum + Number(a.overtimeHours || 0), 0,
      );

      // 4. Calculate payroll
      const baseSalary = Number(employee.baseSalary);
      const transportAllowance = Number(employee.transportAllowance);
      const mealAllowance = Number(employee.mealAllowance);
      const otherAllowance = Number(employee.otherAllowance);
      const overtimePay = totalOvertimeHours * (baseSalary / 173) * 1.5;
      const commission = 0;
      const bonus = 0;

      const absenceDeduction = totalWorkDays > 0
        ? totalAbsent * (baseSalary / totalWorkDays)
        : 0;
      const lateDeduction = totalLate * 25000;
      const otherDeduction = 0;

      const totalEarnings = baseSalary + transportAllowance + mealAllowance
        + otherAllowance + overtimePay + commission + bonus;
      const totalDeductions = absenceDeduction + lateDeduction + otherDeduction;
      const netSalary = totalEarnings - totalDeductions;

      // 5. Check if payroll already exists for this employee+period
      let payroll = await this.payrollRepo.findOne({
        where: { employeeId: employee.id, period },
      });

      const payrollData = {
        employeeId: employee.id,
        studioId: studioId || null,
        period,
        year,
        month,
        baseSalary,
        transportAllowance,
        mealAllowance,
        otherAllowance,
        overtimePay,
        commission,
        bonus,
        absenceDeduction,
        lateDeduction,
        otherDeduction,
        totalEarnings,
        totalDeductions,
        netSalary,
        totalWorkDays,
        totalPresent,
        totalAbsent,
        totalLate,
        totalOvertimeHours,
        status: PayrollStatus.CALCULATED,
      };

      if (payroll) {
        // Update existing
        Object.assign(payroll, payrollData);
      } else {
        // Create new
        payroll = this.payrollRepo.create(payrollData);
      }

      const saved = await this.payrollRepo.save(payroll);
      generatedPayrolls.push(saved);
    }

    return generatedPayrolls;
  }

  async update(id: number, data: Partial<Payroll>) {
    const payroll = await this.findOne(id);

    // Handle status changes
    if (data.status === PayrollStatus.APPROVED && payroll.status !== PayrollStatus.APPROVED) {
      data.approvedAt = new Date();
    }
    if (data.status === PayrollStatus.PAID && payroll.status !== PayrollStatus.PAID) {
      data.paidAt = new Date();
    }

    await this.payrollRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.payrollRepo.delete(id);
    return { message: 'Payroll deleted' };
  }
}
