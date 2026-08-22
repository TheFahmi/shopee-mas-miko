import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import { Attendance, AttendanceStatus, CheckType } from '../entities/attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private repo: Repository<Attendance>,
  ) {}

  async findAll(filters?: {
    employeeId?: number;
    startDate?: string;
    endDate?: string;
    status?: string;
    studioId?: number;
  }) {
    const qb = this.repo.createQueryBuilder('a')
      .leftJoinAndSelect('a.employee', 'employee')
      .orderBy('a.date', 'DESC')
      .addOrderBy('a.checkIn', 'DESC');

    if (filters?.employeeId) {
      qb.andWhere('a.employeeId = :employeeId', { employeeId: filters.employeeId });
    }
    if (filters?.startDate && filters?.endDate) {
      qb.andWhere('a.date BETWEEN :start AND :end', { start: filters.startDate, end: filters.endDate });
    } else if (filters?.startDate) {
      qb.andWhere('a.date >= :start', { start: filters.startDate });
    } else if (filters?.endDate) {
      qb.andWhere('a.date <= :end', { end: filters.endDate });
    }
    if (filters?.status) {
      qb.andWhere('a.status = :status', { status: filters.status });
    }
    if (filters?.studioId) {
      qb.andWhere('a.studioId = :studioId', { studioId: filters.studioId });
    }

    const results = await qb.getMany();
    // Strip photo data from list responses (too large)
    return results.map(r => ({
      ...r,
      checkInPhoto: r.checkInPhoto ? '[has_photo]' : null,
      checkOutPhoto: r.checkOutPhoto ? '[has_photo]' : null,
    }));
  }

  async findOne(id: number) {
    const att = await this.repo.findOne({ where: { id } });
    if (!att) throw new NotFoundException('Attendance not found');
    return att;
  }

  async getDaily(date: string, studioId?: number) {
    const where: any = { date };
    if (studioId) where.studioId = studioId;
    const results = await this.repo.find({
      where,
      relations: ['employee'],
      order: { checkIn: 'ASC' },
    });
    return results.map(r => ({
      ...r,
      checkInPhoto: r.checkInPhoto ? '[has_photo]' : null,
      checkOutPhoto: r.checkOutPhoto ? '[has_photo]' : null,
    }));
  }

  async getMonthly(employeeId: number, year: number, month: number) {
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;

    return this.repo.find({
      where: {
        employeeId,
        date: Between(startDate, endDate),
      },
      order: { date: 'ASC' },
    });
  }

  async checkIn(data: {
    employeeId: number;
    lat?: number;
    lng?: number;
    address?: string;
    photo?: string;
  }) {
    const today = new Date().toISOString().split('T')[0];

    // Check if already checked in today
    const existing = await this.repo.findOne({
      where: { employeeId: data.employeeId, date: today },
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
      // Update existing record
      existing.checkIn = now;
      existing.checkInLat = data.lat ?? null;
      existing.checkInLng = data.lng ?? null;
      existing.checkInAddress = data.address ?? null;
      existing.checkInPhoto = data.photo ?? null;
      existing.checkInType = isGpsPhoto ? CheckType.GPS_PHOTO : CheckType.MANUAL;
      existing.status = isLate ? AttendanceStatus.LATE : AttendanceStatus.PRESENT;
      existing.lateMinutes = lateMinutes;
      return this.repo.save(existing);
    }

    const attendance = this.repo.create({
      employeeId: data.employeeId,
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

    return this.repo.save(attendance);
  }

  async checkOut(data: {
    employeeId: number;
    lat?: number;
    lng?: number;
    address?: string;
    photo?: string;
  }) {
    const today = new Date().toISOString().split('T')[0];

    const existing = await this.repo.findOne({
      where: { employeeId: data.employeeId, date: today },
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

    // Calculate work hours
    const diffMs = now.getTime() - new Date(existing.checkIn).getTime();
    const diffHours = diffMs / (1000 * 60 * 60);
    existing.workHours = Math.round(diffHours * 100) / 100;

    // Overtime if > 8 hours
    if (diffHours > 8) {
      existing.overtimeHours = Math.round((diffHours - 8) * 100) / 100;
    }

    return this.repo.save(existing);
  }

  async create(data: Partial<Attendance>) {
    const attendance = this.repo.create(data);
    return this.repo.save(attendance);
  }

  async update(id: number, data: Partial<Attendance>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { message: 'Attendance deleted' };
  }

  async getPhoto(id: number, type: 'checkin' | 'checkout') {
    const att = await this.repo.findOne({ where: { id } });
    if (!att) throw new NotFoundException('Attendance not found');
    const photo = type === 'checkin' ? att.checkInPhoto : att.checkOutPhoto;
    if (!photo) throw new NotFoundException('No photo found');
    return { photo };
  }

  async getTodayStatus(employeeId: number) {
    const today = new Date().toISOString().split('T')[0];
    const att = await this.repo.findOne({
      where: { employeeId, date: today },
    });
    return {
      hasCheckedIn: !!(att?.checkIn),
      hasCheckedOut: !!(att?.checkOut),
      checkInTime: att?.checkIn || null,
      checkOutTime: att?.checkOut || null,
      status: att?.status || null,
    };
  }
}
