import {
  Injectable, BadRequestException, NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ScheduleSwapRequest, SwapStatus } from '../entities/schedule-swap.entity';
import { Schedule } from '../entities/schedule.entity';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class ScheduleSwapService {
  constructor(
    @InjectRepository(ScheduleSwapRequest)
    private swapRepo: Repository<ScheduleSwapRequest>,
    @InjectRepository(Schedule)
    private scheduleRepo: Repository<Schedule>,
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  async createSwapRequest(
    requesterId: number,
    data: {
      targetId: number;
      requesterScheduleId: number;
      targetScheduleId: number;
      reason?: string;
    },
  ): Promise<ScheduleSwapRequest> {
    if (requesterId === data.targetId) {
      throw new BadRequestException('Tidak bisa tukar jadwal dengan diri sendiri');
    }

    const requesterSchedule = await this.scheduleRepo.findOne({
      where: { id: data.requesterScheduleId },
    });
    if (!requesterSchedule || requesterSchedule.employeeId !== requesterId) {
      throw new BadRequestException('Jadwal requester tidak valid atau bukan milik anda');
    }

    const targetSchedule = await this.scheduleRepo.findOne({
      where: { id: data.targetScheduleId },
    });
    if (!targetSchedule || targetSchedule.employeeId !== data.targetId) {
      throw new BadRequestException('Jadwal target tidak valid atau bukan milik target');
    }

    // Consecutive days check for TARGET
    // After swap, target gets requester's schedule date (dateA) and loses their own (dateB)
    const dateA = requesterSchedule.date; // date target will gain
    const dateB = targetSchedule.date;    // date target will lose

    const dateAObj = new Date(dateA);
    const dayBefore = new Date(dateAObj);
    dayBefore.setDate(dayBefore.getDate() - 1);
    const dayAfter = new Date(dateAObj);
    dayAfter.setDate(dayAfter.getDate() + 1);

    const dayBeforeStr = dayBefore.toISOString().split('T')[0];
    const dayAfterStr = dayAfter.toISOString().split('T')[0];

    // Get target's schedules on adjacent days (excluding the date they're giving away)
    const targetSchedules = await this.scheduleRepo.find({
      where: { employeeId: data.targetId },
    });

    const hasAdjacentSchedule = targetSchedules.some(s => {
      // Exclude the schedule being swapped away
      if (s.date === dateB) return false;
      return s.date === dayBeforeStr || s.date === dayAfterStr;
    });

    if (hasAdjacentSchedule) {
      throw new BadRequestException(
        'Karyawan target akan memiliki jadwal berturut-turut',
      );
    }

    const swap = this.swapRepo.create({
      requesterId,
      targetId: data.targetId,
      requesterScheduleId: data.requesterScheduleId,
      targetScheduleId: data.targetScheduleId,
      reason: data.reason ?? null,
      status: SwapStatus.PENDING_PEER,
    });

    return this.swapRepo.save(swap);
  }

  async respondAsPeer(
    targetUserId: number,
    swapId: number,
    approved: boolean,
    note?: string,
  ): Promise<ScheduleSwapRequest> {
    const swap = await this.swapRepo.findOne({ where: { id: swapId } });
    if (!swap) {
      throw new NotFoundException('Swap request tidak ditemukan');
    }

    // Resolve employee from userId
    const employee = await this.employeeRepo.findOne({
      where: { userId: targetUserId },
    });
    if (!employee || employee.id !== swap.targetId) {
      throw new ForbiddenException('Anda bukan target dari swap request ini');
    }

    if (swap.status !== SwapStatus.PENDING_PEER) {
      throw new BadRequestException('Swap request tidak dalam status menunggu persetujuan teman');
    }

    swap.status = approved ? SwapStatus.PEER_APPROVED : SwapStatus.REJECTED_PEER;
    swap.peerNote = note ?? null;
    swap.peerRespondedAt = new Date();

    return this.swapRepo.save(swap);
  }

  async respondAsAdmin(
    adminUserId: number,
    swapId: number,
    approved: boolean,
    note?: string,
  ): Promise<ScheduleSwapRequest> {
    const swap = await this.swapRepo.findOne({ where: { id: swapId } });
    if (!swap) {
      throw new NotFoundException('Swap request tidak ditemukan');
    }

    if (swap.status !== SwapStatus.PEER_APPROVED) {
      throw new BadRequestException('Swap request belum disetujui oleh teman');
    }

    if (approved) {
      // Actually swap the schedules
      const requesterSchedule = await this.scheduleRepo.findOne({
        where: { id: swap.requesterScheduleId },
      });
      const targetSchedule = await this.scheduleRepo.findOne({
        where: { id: swap.targetScheduleId },
      });

      if (!requesterSchedule || !targetSchedule) {
        throw new BadRequestException('Jadwal yang akan ditukar tidak ditemukan');
      }

      // Swap employeeId
      requesterSchedule.employeeId = swap.targetId;
      targetSchedule.employeeId = swap.requesterId;

      await this.scheduleRepo.save(requesterSchedule);
      await this.scheduleRepo.save(targetSchedule);

      swap.status = SwapStatus.APPROVED;
    } else {
      swap.status = SwapStatus.REJECTED_ADMIN;
    }

    swap.adminNote = note ?? null;
    swap.adminRespondedAt = new Date();
    swap.approvedBy = adminUserId;

    return this.swapRepo.save(swap);
  }

  async cancelRequest(
    requesterUserId: number,
    swapId: number,
  ): Promise<ScheduleSwapRequest> {
    const swap = await this.swapRepo.findOne({ where: { id: swapId } });
    if (!swap) {
      throw new NotFoundException('Swap request tidak ditemukan');
    }

    // Resolve employee from userId
    const employee = await this.employeeRepo.findOne({
      where: { userId: requesterUserId },
    });
    if (!employee || employee.id !== swap.requesterId) {
      throw new ForbiddenException('Anda bukan requester dari swap request ini');
    }

    const cancellableStatuses: SwapStatus[] = [
      SwapStatus.PENDING_PEER,
      SwapStatus.PEER_APPROVED,
    ];
    if (!cancellableStatuses.includes(swap.status)) {
      throw new BadRequestException('Swap request tidak bisa dibatalkan dalam status ini');
    }

    swap.status = SwapStatus.CANCELLED;
    return this.swapRepo.save(swap);
  }

  async getMySwapRequests(userId: number): Promise<ScheduleSwapRequest[]> {
    const employee = await this.employeeRepo.findOne({
      where: { userId },
    });
    if (!employee) return [];

    return this.swapRepo.find({
      where: [
        { requesterId: employee.id },
        { targetId: employee.id },
      ],
      order: { createdAt: 'DESC' },
    });
  }

  async getPendingForMe(userId: number): Promise<ScheduleSwapRequest[]> {
    const employee = await this.employeeRepo.findOne({
      where: { userId },
    });
    if (!employee) return [];

    return this.swapRepo.find({
      where: { targetId: employee.id, status: SwapStatus.PENDING_PEER },
      order: { createdAt: 'DESC' },
    });
  }

  async getAllSwapRequests(filters?: {
    status?: string;
  }): Promise<ScheduleSwapRequest[]> {
    const where: Record<string, unknown> = {};
    if (filters?.status) {
      where.status = filters.status;
    }

    return this.swapRepo.find({
      where,
      order: { createdAt: 'DESC' },
    });
  }

  async getSwapRequest(id: number): Promise<ScheduleSwapRequest> {
    const swap = await this.swapRepo.findOne({ where: { id } });
    if (!swap) {
      throw new NotFoundException('Swap request tidak ditemukan');
    }
    return swap;
  }
}
