import {
  Injectable, BadRequestException, NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveRequest, LeaveType, LeaveStatus } from '../entities/leave-request.entity';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class LeaveRequestService {
  constructor(
    @InjectRepository(LeaveRequest)
    private leaveRepo: Repository<LeaveRequest>,
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  async createLeaveRequest(
    employeeId: number,
    data: { type: LeaveType; startDate: string; endDate: string; reason: string; attachment?: string },
  ) {
    // Validate dates
    if (data.startDate > data.endDate) {
      throw new BadRequestException('startDate must be <= endDate');
    }

    // Validate attachment for sakit
    if (data.type === LeaveType.SAKIT && !data.attachment) {
      throw new BadRequestException('Attachment wajib untuk pengajuan sakit');
    }

    // Check overlapping approved/pending requests
    const overlapping = await this.leaveRepo
      .createQueryBuilder('lr')
      .where('lr.employeeId = :employeeId', { employeeId })
      .andWhere('lr.status IN (:...statuses)', {
        statuses: [LeaveStatus.APPROVED, LeaveStatus.PENDING],
      })
      .andWhere('lr.startDate <= :endDate', { endDate: data.endDate })
      .andWhere('lr.endDate >= :startDate', { startDate: data.startDate })
      .getCount();

    if (overlapping > 0) {
      throw new BadRequestException('Terdapat pengajuan izin yang tumpang tindih di rentang tanggal ini');
    }

    const request = this.leaveRepo.create({
      employeeId,
      type: data.type,
      startDate: data.startDate,
      endDate: data.endDate,
      reason: data.reason,
      attachment: data.attachment ?? null,
      status: LeaveStatus.PENDING,
    });

    return this.leaveRepo.save(request);
  }

  async respondAsAdmin(adminUserId: number, leaveId: number, approved: boolean, note?: string) {
    const request = await this.leaveRepo.findOne({ where: { id: leaveId } });
    if (!request) {
      throw new NotFoundException('Leave request not found');
    }
    if (request.status !== LeaveStatus.PENDING) {
      throw new BadRequestException('Hanya bisa merespon pengajuan yang masih pending');
    }

    request.status = approved ? LeaveStatus.APPROVED : LeaveStatus.REJECTED;
    request.adminNote = note ?? null;
    request.approvedBy = adminUserId;
    request.respondedAt = new Date();

    return this.leaveRepo.save(request);
  }

  async cancelRequest(employeeId: number, leaveId: number) {
    const request = await this.leaveRepo.findOne({ where: { id: leaveId } });
    if (!request) {
      throw new NotFoundException('Leave request not found');
    }
    if (request.employeeId !== employeeId) {
      throw new BadRequestException('Pengajuan ini bukan milik anda');
    }
    if (request.status !== LeaveStatus.PENDING) {
      throw new BadRequestException('Hanya bisa membatalkan pengajuan yang masih pending');
    }

    request.status = LeaveStatus.CANCELLED;
    return this.leaveRepo.save(request);
  }

  async getMyLeaveRequests(employeeId: number, filters?: { status?: string; year?: number }) {
    const qb = this.leaveRepo
      .createQueryBuilder('lr')
      .where('lr.employeeId = :employeeId', { employeeId });

    if (filters?.status) {
      qb.andWhere('lr.status = :status', { status: filters.status });
    }
    if (filters?.year) {
      qb.andWhere('lr.startDate >= :yearStart', { yearStart: `${filters.year}-01-01` });
      qb.andWhere('lr.startDate <= :yearEnd', { yearEnd: `${filters.year}-12-31` });
    }

    qb.orderBy('lr.createdAt', 'DESC');
    return qb.getMany();
  }

  async getAllLeaveRequests(filters?: {
    status?: string;
    employeeId?: number;
    type?: string;
    startDate?: string;
    endDate?: string;
  }) {
    const qb = this.leaveRepo.createQueryBuilder('lr')
      .leftJoinAndSelect('lr.employee', 'employee');

    if (filters?.status) {
      qb.andWhere('lr.status = :status', { status: filters.status });
    }
    if (filters?.employeeId) {
      qb.andWhere('lr.employeeId = :employeeId', { employeeId: filters.employeeId });
    }
    if (filters?.type) {
      qb.andWhere('lr.type = :type', { type: filters.type });
    }
    if (filters?.startDate) {
      qb.andWhere('lr.startDate >= :startDate', { startDate: filters.startDate });
    }
    if (filters?.endDate) {
      qb.andWhere('lr.endDate <= :endDate', { endDate: filters.endDate });
    }

    qb.orderBy('lr.createdAt', 'DESC');
    return qb.getMany();
  }

  async getLeaveRequest(id: number) {
    const request = await this.leaveRepo.findOne({ where: { id } });
    if (!request) {
      throw new NotFoundException('Leave request not found');
    }
    return request;
  }

  async getLeaveStats(employeeId?: number, year?: number) {
    const targetYear = year ?? new Date().getFullYear();

    const qb = this.leaveRepo.createQueryBuilder('lr')
      .where('lr.startDate >= :yearStart', { yearStart: `${targetYear}-01-01` })
      .andWhere('lr.startDate <= :yearEnd', { yearEnd: `${targetYear}-12-31` });

    if (employeeId) {
      qb.andWhere('lr.employeeId = :employeeId', { employeeId });
    }

    const requests = await qb.getMany();

    // Count by type and status
    const countByTypeAndStatus: Record<string, Record<string, number>> = {};
    const totalDaysByType: Record<string, number> = {};

    for (const req of requests) {
      // Count by type+status
      if (!countByTypeAndStatus[req.type]) {
        countByTypeAndStatus[req.type] = {};
      }
      if (!countByTypeAndStatus[req.type][req.status]) {
        countByTypeAndStatus[req.type][req.status] = 0;
      }
      countByTypeAndStatus[req.type][req.status]++;

      // Total days for approved requests
      if (req.status === LeaveStatus.APPROVED) {
        const start = new Date(req.startDate);
        const end = new Date(req.endDate);
        const days = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;

        if (!totalDaysByType[req.type]) {
          totalDaysByType[req.type] = 0;
        }
        totalDaysByType[req.type] += days;
      }
    }

    return {
      year: targetYear,
      totalRequests: requests.length,
      countByTypeAndStatus,
      approvedDaysByType: totalDaysByType,
    };
  }
}
