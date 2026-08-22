import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Schedule, ShiftType } from '../entities/schedule.entity';
import { Employee, EmployeePosition, EmployeeStatus, EmploymentType } from '../entities/employee.entity';
import { EmployeeStudio } from '../entities/studio.entity';

// 8 slots of 3 hours covering 24h
const SLOTS = [
  { start: '00:00', end: '03:00' }, // 0
  { start: '03:00', end: '06:00' }, // 1
  { start: '06:00', end: '09:00' }, // 2
  { start: '09:00', end: '12:00' }, // 3
  { start: '12:00', end: '15:00' }, // 4
  { start: '15:00', end: '18:00' }, // 5
  { start: '18:00', end: '21:00' }, // 6
  { start: '21:00', end: '24:00' }, // 7
];

// Valid slot pairs: 2 slots with min 1 slot gap (3h break) between them
// e.g. slot 0 + slot 2 OK (gap 00:00-03:00, break 03:00-06:00, work 06:00-09:00)
// e.g. slot 0 + slot 1 NOT OK (back-to-back = 6 jam langsung)
function getValidPairs(): [number, number][] {
  const pairs: [number, number][] = [];
  for (let a = 0; a < SLOTS.length; a++) {
    for (let b = a + 2; b < SLOTS.length; b++) {
      pairs.push([a, b]);
    }
  }
  return pairs;
}

function getShiftType(slotIndex: number): ShiftType {
  if (slotIndex <= 1) return ShiftType.MALAM; // 00:00-06:00
  if (slotIndex <= 3) return ShiftType.PAGI;   // 06:00-12:00
  if (slotIndex <= 5) return ShiftType.SIANG;  // 12:00-18:00
  return ShiftType.MALAM;                      // 18:00-24:00
}

function pad2(n: number) { return n.toString().padStart(2, '0'); }

const MONTH_NAMES = [
  '', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
];

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private repo: Repository<Schedule>,
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
    @InjectRepository(EmployeeStudio)
    private employeeStudioRepo: Repository<EmployeeStudio>,
  ) {}

  async findAll(filters?: { employeeId?: number; startDate?: string; endDate?: string; studioId?: number }) {
    const qb = this.repo.createQueryBuilder('s')
      .leftJoinAndSelect('s.employee', 'employee')
      .leftJoinAndSelect('s.studio', 'studio')
      .orderBy('s.date', 'ASC');

    if (filters?.employeeId) {
      qb.andWhere('s.employeeId = :employeeId', { employeeId: filters.employeeId });
    }
    if (filters?.startDate && filters?.endDate) {
      qb.andWhere('s.date BETWEEN :start AND :end', { start: filters.startDate, end: filters.endDate });
    } else if (filters?.startDate) {
      qb.andWhere('s.date >= :start', { start: filters.startDate });
    } else if (filters?.endDate) {
      qb.andWhere('s.date <= :end', { end: filters.endDate });
    }
    if (filters?.studioId) {
      qb.andWhere('s.studioId = :studioId', { studioId: filters.studioId });
    }

    return qb.getMany();
  }

  async findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getEmployeeSchedule(employeeId: number, year: number, month: number) {
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;

    return this.repo.find({
      where: {
        employeeId,
        date: Between(startDate, endDate),
      },
      relations: ['studio'],
      order: { date: 'ASC' },
    });
  }

  async create(data: Partial<Schedule>) {
    const schedule = this.repo.create(data);
    return this.repo.save(schedule);
  }

  async bulkCreate(items: Partial<Schedule>[]) {
    const schedules = this.repo.create(items);
    return this.repo.save(schedules);
  }

  async update(id: number, data: Partial<Schedule>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { message: 'Schedule deleted' };
  }

  /**
   * Auto-generate host schedules for a given month.
   * 
   * Rules:
   * - Only active hosts
   * - Permanent hosts work every day except 1 day off per week (rotating)
   * - Freelance hosts fill in for permanent hosts on their off-days
   * - 24h operation, 8 slots of 3h each
   * - Each host works 2 slots/day (6h total) with min 3h break between shifts
   * - Always 4 hosts working per day
   * - Existing host schedules in the period are deleted first
   */
  async generate(year: number, month: number, options?: { clearExisting?: boolean; studioId?: number }) {
    // When studioId provided, filter hosts to those assigned to that studio
    let studioEmployeeIds: number[] | null = null;
    if (options?.studioId) {
      const studioAssignments = await this.employeeStudioRepo.find({ where: { studioId: options.studioId } });
      studioEmployeeIds = studioAssignments.map(a => a.employeeId);
    }

    const allPermanent = await this.employeeRepo.find({
      where: { position: EmployeePosition.HOST, status: EmployeeStatus.ACTIVE, employmentType: EmploymentType.PERMANENT },
      order: { id: 'ASC' },
    });

    const allFreelance = await this.employeeRepo.find({
      where: { position: EmployeePosition.HOST, status: EmployeeStatus.ACTIVE, employmentType: EmploymentType.FREELANCE },
      order: { id: 'ASC' },
    });

    const permanentHosts = studioEmployeeIds
      ? allPermanent.filter(h => studioEmployeeIds!.includes(h.id))
      : allPermanent;

    const freelanceHosts = studioEmployeeIds
      ? allFreelance.filter(h => studioEmployeeIds!.includes(h.id))
      : allFreelance;

    if (permanentHosts.length < 4) {
      throw new BadRequestException(
        `Minimal 4 host tetap aktif diperlukan untuk generate jadwal 24 jam. Saat ini ada ${permanentHosts.length} host tetap aktif.`
      );
    }

    if (freelanceHosts.length === 0) {
      throw new BadRequestException(
        'Minimal 1 host freelance aktif diperlukan sebagai pengganti di hari libur host tetap.'
      );
    }

    const lastDay = new Date(year, month, 0).getDate();
    const startDate = `${year}-${pad2(month)}-01`;
    const endDate = `${year}-${pad2(month)}-${lastDay}`;

    // Clear existing host schedules for this month
    if (options?.clearExisting !== false) {
      const allHostIds = [...permanentHosts, ...freelanceHosts].map(h => h.id);
      const existing = await this.repo.createQueryBuilder('s')
        .where('s.date BETWEEN :start AND :end', { start: startDate, end: endDate })
        .andWhere('s.employeeId IN (:...hostIds)', { hostIds: allHostIds })
        .getMany();
      if (existing.length > 0) {
        await this.repo.remove(existing);
      }
    }

    const validPairs = getValidPairs();
    const schedules: Partial<Schedule>[] = [];

    // Pre-compute day-off schedule for permanent hosts:
    // Each permanent host gets 1 day off every 7 days, staggered.
    const offDayOffset = Math.max(1, Math.floor(7 / permanentHosts.length));

    // Track freelance usage per week to distribute evenly
    const freelanceWorkDays: Map<number, number> = new Map();
    for (const f of freelanceHosts) {
      freelanceWorkDays.set(f.id, 0);
    }

    for (let dayNum = 1; dayNum <= lastDay; dayNum++) {
      const dateStr = `${year}-${pad2(month)}-${pad2(dayNum)}`;

      const workingPermanent: typeof permanentHosts = [];
      const offPermanent: typeof permanentHosts = [];

      for (let i = 0; i < permanentHosts.length; i++) {
        const dayIndex = dayNum - 1;
        const hostOffset = i * offDayOffset;
        const isOff = (dayIndex + hostOffset) % 7 === 0;

        if (isOff) {
          offPermanent.push(permanentHosts[i]);
        } else {
          workingPermanent.push(permanentHosts[i]);
        }
      }

      // Create LIBUR entries for permanent hosts who are off
      for (const host of offPermanent) {
        schedules.push({
          employeeId: host.id,
          studioId: options?.studioId || undefined,
          date: dateStr,
          shift: ShiftType.LIBUR,
          startTime: null as any,
          endTime: null as any,
          notes: 'Hari libur mingguan',
        });
      }

      // Select freelance host(s) to replace off permanent hosts
      // Pick the freelance with least work days so far (round-robin fairness)
      const replacementHosts: typeof freelanceHosts = [];
      for (let r = 0; r < offPermanent.length; r++) {
        // Sort freelance by least-used first
        const available = freelanceHosts
          .filter(f => !replacementHosts.some(rh => rh.id === f.id))
          .sort((a, b) => (freelanceWorkDays.get(a.id) || 0) - (freelanceWorkDays.get(b.id) || 0));

        if (available.length > 0) {
          const chosen = available[0];
          replacementHosts.push(chosen);
          freelanceWorkDays.set(chosen.id, (freelanceWorkDays.get(chosen.id) || 0) + 1);
        }
      }

      // Build the full working host list: working permanent + freelance replacements
      const allWorkingHosts = [...workingPermanent, ...replacementHosts];

      // Assign 2 work slots to each working host
      const slotCoverage = new Array(8).fill(0);

      for (let i = 0; i < allWorkingHosts.length; i++) {
        const host = allWorkingHosts[i];

        // Pick a valid pair, rotate selection for variety
        const pairIndex = (dayNum - 1 + i * 3) % validPairs.length;

        // Find best pair prioritizing uncovered slots
        let bestPair: [number, number] | null = null;
        let bestScore = -Infinity;

        for (let p = 0; p < validPairs.length; p++) {
          const pair = validPairs[(pairIndex + p) % validPairs.length];
          const score =
            (slotCoverage[pair[0]] === 0 ? 100 : -slotCoverage[pair[0]] * 10) +
            (slotCoverage[pair[1]] === 0 ? 100 : -slotCoverage[pair[1]] * 10);

          if (score > bestScore) {
            bestScore = score;
            bestPair = pair;
          }
        }

        if (!bestPair) bestPair = validPairs[pairIndex % validPairs.length];

        slotCoverage[bestPair[0]]++;
        slotCoverage[bestPair[1]]++;

        const slot1 = SLOTS[bestPair[0]];
        const slot2 = SLOTS[bestPair[1]];
        const isFreelance = replacementHosts.some(rh => rh.id === host.id);

        // Shift 1
        schedules.push({
          employeeId: host.id,
          studioId: options?.studioId || undefined,
          date: dateStr,
          shift: getShiftType(bestPair[0]),
          startTime: slot1.start,
          endTime: slot1.end,
          notes: isFreelance ? 'Shift 1 (Pengganti)' : 'Shift 1',
        });

        // Shift 2
        schedules.push({
          employeeId: host.id,
          studioId: options?.studioId || undefined,
          date: dateStr,
          shift: getShiftType(bestPair[1]),
          startTime: slot2.start,
          endTime: slot2.end,
          notes: isFreelance ? 'Shift 2 (Pengganti)' : 'Shift 2',
        });
      }
    }

    // Save all
    const saved = await this.repo.save(this.repo.create(schedules));

    const workShifts = saved.filter(s => s.shift !== ShiftType.LIBUR).length;
    const dayOffs = saved.filter(s => s.shift === ShiftType.LIBUR).length;
    const freelanceShifts = saved.filter(s => 
      freelanceHosts.some(f => f.id === s.employeeId) && s.shift !== ShiftType.LIBUR
    ).length;

    return {
      message: `Jadwal berhasil di-generate untuk ${MONTH_NAMES[month]} ${year}`,
      totalSchedules: saved.length,
      permanentHostsCount: permanentHosts.length,
      freelanceHostsCount: freelanceHosts.length,
      daysGenerated: lastDay,
      summary: {
        workShifts,
        dayOffs,
        freelanceShifts,
        shiftsPerHostPerDay: 2,
        hoursPerShift: 3,
        breakBetweenShifts: '3 jam',
      },
    };
  }
}
