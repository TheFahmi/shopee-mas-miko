import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Target, TargetStatus, TargetType } from '../entities/target-kpi.entity';
import { KpiScore } from '../entities/target-kpi.entity';
import { Employee, EmployeeStatus } from '../entities/employee.entity';
import { Attendance, AttendanceStatus } from '../entities/attendance.entity';

@Injectable()
export class TargetsService {
  constructor(
    @InjectRepository(Target)
    private targetRepo: Repository<Target>,
    @InjectRepository(KpiScore)
    private kpiScoreRepo: Repository<KpiScore>,
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,
  ) {}

  async findAll(filters?: {
    employeeId?: number;
    year?: number;
    month?: number;
    status?: string;
    targetType?: string;
    studioId?: number;
  }) {
    const qb = this.targetRepo.createQueryBuilder('t')
      .leftJoinAndSelect('t.employee', 'employee')
      .orderBy('t.createdAt', 'DESC');

    if (filters?.employeeId) {
      qb.andWhere('t.employeeId = :employeeId', { employeeId: filters.employeeId });
    }
    if (filters?.year) {
      qb.andWhere('t.year = :year', { year: filters.year });
    }
    if (filters?.month) {
      qb.andWhere('t.month = :month', { month: filters.month });
    }
    if (filters?.status) {
      qb.andWhere('t.status = :status', { status: filters.status });
    }
    if (filters?.targetType) {
      qb.andWhere('t.targetType = :targetType', { targetType: filters.targetType });
    }
    if (filters?.studioId) {
      qb.andWhere('t.studioId = :studioId', { studioId: filters.studioId });
    }

    return qb.getMany();
  }

  async findOne(id: number) {
    const target = await this.targetRepo.findOne({
      where: { id },
      relations: ['employee'],
    });
    if (!target) throw new NotFoundException('Target not found');
    return target;
  }

  async getStats(year?: number, month?: number, studioId?: number) {
    const qb = this.targetRepo.createQueryBuilder('t');

    if (year) {
      qb.andWhere('t.year = :year', { year });
    }
    if (month) {
      qb.andWhere('t.month = :month', { month });
    }
    if (studioId) {
      qb.andWhere('t.studioId = :studioId', { studioId });
    }

    const targets = await qb.getMany();

    const total = targets.length;
    const achieved = targets.filter(t => t.status === TargetStatus.ACHIEVED).length;
    const active = targets.filter(t => t.status === TargetStatus.ACTIVE).length;
    const avgProgress = total > 0
      ? Math.round(targets.reduce((sum, t) => sum + Number(t.progressPercent), 0) / total)
      : 0;

    return { total, achieved, active, avgProgress };
  }

  async getKpiScores(filters?: {
    employeeId?: number;
    year?: number;
    month?: number;
    studioId?: number;
  }) {
    const qb = this.kpiScoreRepo.createQueryBuilder('k')
      .leftJoinAndSelect('k.employee', 'employee')
      .orderBy('k.overallScore', 'DESC');

    if (filters?.employeeId) {
      qb.andWhere('k.employeeId = :employeeId', { employeeId: filters.employeeId });
    }
    if (filters?.year) {
      qb.andWhere('k.year = :year', { year: filters.year });
    }
    if (filters?.month) {
      qb.andWhere('k.month = :month', { month: filters.month });
    }
    if (filters?.studioId) {
      qb.andWhere('k.studioId = :studioId', { studioId: filters.studioId });
    }

    return qb.getMany();
  }

  async getKpiSummary(year?: number, month?: number, studioId?: number) {
    const qb = this.kpiScoreRepo.createQueryBuilder('k')
      .leftJoinAndSelect('k.employee', 'employee');

    if (year) {
      qb.andWhere('k.year = :year', { year });
    }
    if (month) {
      qb.andWhere('k.month = :month', { month });
    }
    if (studioId) {
      qb.andWhere('k.studioId = :studioId', { studioId });
    }

    const scores = await qb.getMany();

    const avgScore = scores.length > 0
      ? Number((scores.reduce((sum, s) => sum + Number(s.overallScore), 0) / scores.length).toFixed(1))
      : 0;

    const gradeDistribution: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    for (const score of scores) {
      if (gradeDistribution[score.grade] !== undefined) {
        gradeDistribution[score.grade]++;
      }
    }

    const topPerformers = scores
      .sort((a, b) => Number(b.overallScore) - Number(a.overallScore))
      .slice(0, 10)
      .map(score => ({
        employeeId: score.employeeId,
        employeeName: score.employee?.name,
        score: Number(score.overallScore).toFixed(1),
        grade: score.grade,
      }));

    return { avgScore, gradeDistribution, topPerformers };
  }

  async create(data: Partial<Target>) {
    const progressPercent = data.targetValue && Number(data.targetValue) > 0
      ? Math.round((Number(data.currentValue || 0) / Number(data.targetValue)) * 100)
      : 0;

    const status = progressPercent >= 100 ? TargetStatus.ACHIEVED : (data.status || TargetStatus.ACTIVE);

    const target = this.targetRepo.create({
      ...data,
      progressPercent,
      status,
    });

    return this.targetRepo.save(target);
  }

  async update(id: number, data: Partial<Target>) {
    await this.findOne(id);
    await this.targetRepo.update(id, data);
    return this.findOne(id);
  }

  async updateProgress(id: number, currentValue: number) {
    const target = await this.findOne(id);

    target.currentValue = currentValue;
    target.progressPercent = Math.round((currentValue / Number(target.targetValue)) * 100);

    if (target.progressPercent >= 100) {
      target.status = TargetStatus.ACHIEVED;
    }

    return this.targetRepo.save(target);
  }

  async remove(id: number) {
    await this.targetRepo.delete(id);
    return { message: 'Target deleted' };
  }

  async autoCalculateKpi(employeeId: number) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;

    const employee = await this.employeeRepo.findOne({ where: { id: employeeId } });
    if (!employee) throw new NotFoundException('Employee not found');

    // Calculate attendance score
    const startDate = `${year}-${String(month).padStart(2, '0')}-01`;
    const lastDay = new Date(year, month, 0).getDate();
    const endDate = `${year}-${String(month).padStart(2, '0')}-${lastDay}`;

    let totalWorkDays = 0;
    for (let d = 1; d <= lastDay; d++) {
      const dayOfWeek = new Date(year, month - 1, d).getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        totalWorkDays++;
      }
    }

    const attendances = await this.attendanceRepo.find({
      where: {
        employeeId,
        date: Between(startDate, endDate),
      },
    });

    const presentDays = attendances.filter(
      a => a.status === AttendanceStatus.PRESENT || a.status === AttendanceStatus.LATE,
    ).length;

    const attendanceScore = totalWorkDays > 0
      ? Math.min((presentDays / totalWorkDays) * 100, 100)
      : 0;

    // Revenue score (placeholder)
    const revenueScore = 0;

    // Target score
    const targets = await this.targetRepo.find({
      where: { employeeId, year, month },
    });

    const targetScore = targets.length > 0
      ? Math.min(
          targets.reduce((sum, t) => sum + Number(t.progressPercent), 0) / targets.length,
          100,
        )
      : 0;

    // Live performance score (placeholder)
    const livePerformanceScore = 0;

    // Overall score (weighted)
    const overallScore = (attendanceScore * 0.3) + (revenueScore * 0.25) + (targetScore * 0.25) + (livePerformanceScore * 0.2);

    // Grade
    let grade: string;
    if (overallScore >= 90) grade = 'A';
    else if (overallScore >= 80) grade = 'B';
    else if (overallScore >= 70) grade = 'C';
    else if (overallScore >= 60) grade = 'D';
    else grade = 'E';

    // Upsert KPI score
    let kpiScore = await this.kpiScoreRepo.findOne({
      where: { employeeId, year, month },
    });

    const kpiData = {
      employeeId,
      year,
      month,
      attendanceScore,
      revenueScore,
      targetScore,
      livePerformanceScore,
      overallScore,
      grade,
    };

    if (kpiScore) {
      Object.assign(kpiScore, kpiData);
    } else {
      kpiScore = this.kpiScoreRepo.create(kpiData);
    }

    return this.kpiScoreRepo.save(kpiScore);
  }
}
