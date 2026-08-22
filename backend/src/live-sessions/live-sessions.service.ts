import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, MoreThanOrEqual } from 'typeorm';
import { LiveSession } from '../entities/live-session.entity';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class LiveSessionsService {
  constructor(
    @InjectRepository(LiveSession)
    private repo: Repository<LiveSession>,
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  async findAll(filters?: {
    hostId?: number;
    startDate?: string;
    endDate?: string;
    status?: string;
    platform?: string;
    studioId?: number;
  }) {
    const where: any = {};
    if (filters?.hostId) where.hostId = filters.hostId;
    if (filters?.status) where.status = filters.status;
    if (filters?.platform) where.platform = filters.platform;
    if (filters?.studioId) where.studioId = filters.studioId;
    if (filters?.startDate && filters?.endDate) {
      where.startTime = Between(new Date(filters.startDate), new Date(filters.endDate + 'T23:59:59'));
    }
    return this.repo.find({ where, order: { startTime: 'DESC' }, take: 100 });
  }

  async findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async create(data: Partial<LiveSession>) {
    const session = this.repo.create(data);
    return this.repo.save(session);
  }

  async update(id: number, data: Partial<LiveSession>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { message: 'Session deleted' };
  }

  // ========== DASHBOARD ==========
  async getDashboard(studioId?: number) {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const where: any = {};
    if (studioId) where.studioId = studioId;
    const allSessions = await this.repo.find({ where });
    const monthlySessions = allSessions.filter(
      (s) => new Date(s.startTime) >= monthStart,
    );
    const todaySessions = allSessions.filter(
      (s) => new Date(s.startTime) >= todayStart,
    );

    const revenue = monthlySessions.reduce((sum, s) => sum + Number(s.totalRevenue || 0), 0);
    const commission = monthlySessions.reduce((sum, s) => sum + Number(s.totalCommission || 0), 0);
    const productsSold = monthlySessions.reduce((sum, s) => sum + (s.totalProductsSold || 0), 0);
    const orders = monthlySessions.reduce((sum, s) => sum + (s.totalOrders || 0), 0);
    const avgViewers = monthlySessions.length > 0
      ? Math.round(monthlySessions.reduce((sum, s) => sum + (s.averageViewers || 0), 0) / monthlySessions.length)
      : 0;
    const maxPeakViewers = monthlySessions.reduce((max, s) => Math.max(max, s.peakViewers || 0), 0);
    const avgEngagement = monthlySessions.length > 0
      ? (monthlySessions.reduce((sum, s) => sum + Number(s.engagementRate || 0), 0) / monthlySessions.length).toFixed(2)
      : '0.00';
    const avgConversion = monthlySessions.length > 0
      ? (monthlySessions.reduce((sum, s) => sum + Number(s.conversionRate || 0), 0) / monthlySessions.length).toFixed(2)
      : '0.00';

    return {
      totalSessions: allSessions.length,
      todaySessions: todaySessions.length,
      monthlyStats: {
        revenue,
        commission,
        productsSold,
        orders,
        avgViewers,
        maxPeakViewers,
        avgEngagement,
        avgConversion,
      },
    };
  }

  // ========== CHART ==========
  async getChart(days: number, studioId?: number) {
    const since = new Date();
    since.setDate(since.getDate() - days);
    since.setHours(0, 0, 0, 0);

    const where: any = { startTime: MoreThanOrEqual(since) };
    if (studioId) where.studioId = studioId;
    const sessions = await this.repo.find({
      where,
      order: { startTime: 'ASC' },
    });

    // Build daily map
    const dailyMap: Record<string, { revenue: number; commission: number; sessions: number }> = {};
    for (let i = 0; i < days; i++) {
      const d = new Date();
      d.setDate(d.getDate() - (days - 1 - i));
      const key = d.toISOString().split('T')[0];
      dailyMap[key] = { revenue: 0, commission: 0, sessions: 0 };
    }

    for (const s of sessions) {
      const key = new Date(s.startTime).toISOString().split('T')[0];
      if (dailyMap[key]) {
        dailyMap[key].revenue += Number(s.totalRevenue || 0);
        dailyMap[key].commission += Number(s.totalCommission || 0);
        dailyMap[key].sessions += 1;
      }
    }

    return Object.entries(dailyMap).map(([date, data]) => ({ date, ...data }));
  }

  // ========== RANKING ==========
  async getRanking(days: number, studioId?: number) {
    const since = new Date();
    since.setDate(since.getDate() - days);
    since.setHours(0, 0, 0, 0);

    const where: any = { startTime: MoreThanOrEqual(since) };
    if (studioId) where.studioId = studioId;

    const sessions = await this.repo.find({
      where,
    });

    // Group by hostId
    const hostMap: Record<number, {
      hostId: number;
      hostName: string;
      totalSessions: number;
      totalRevenue: number;
      totalProductsSold: number;
      totalViewers: number;
      totalEngagement: number;
      totalConversion: number;
    }> = {};

    for (const s of sessions) {
      if (!hostMap[s.hostId]) {
        hostMap[s.hostId] = {
          hostId: s.hostId,
          hostName: s.host?.name || `Host #${s.hostId}`,
          totalSessions: 0,
          totalRevenue: 0,
          totalProductsSold: 0,
          totalViewers: 0,
          totalEngagement: 0,
          totalConversion: 0,
        };
      }
      const h = hostMap[s.hostId];
      h.totalSessions++;
      h.totalRevenue += Number(s.totalRevenue || 0);
      h.totalProductsSold += s.totalProductsSold || 0;
      h.totalViewers += s.averageViewers || 0;
      h.totalEngagement += Number(s.engagementRate || 0);
      h.totalConversion += Number(s.conversionRate || 0);
    }

    return Object.values(hostMap)
      .map((h) => ({
        hostId: h.hostId,
        hostName: h.hostName,
        totalSessions: h.totalSessions,
        totalRevenue: h.totalRevenue,
        totalProductsSold: h.totalProductsSold,
        avgViewers: h.totalSessions > 0 ? Math.round(h.totalViewers / h.totalSessions) : 0,
        avgEngagement: h.totalSessions > 0 ? (h.totalEngagement / h.totalSessions).toFixed(2) : '0.00',
        avgConversion: h.totalSessions > 0 ? (h.totalConversion / h.totalSessions).toFixed(2) : '0.00',
      }))
      .sort((a, b) => b.totalRevenue - a.totalRevenue);
  }

  // ========== HOST PERFORMANCE ==========
  async getHostPerformance(hostId: number, days: number, studioId?: number) {
    const since = new Date();
    since.setDate(since.getDate() - days);
    since.setHours(0, 0, 0, 0);

    const where: any = { hostId, startTime: MoreThanOrEqual(since) };
    if (studioId) where.studioId = studioId;

    const sessions = await this.repo.find({
      where,
      order: { startTime: 'DESC' },
    });

    const totalRevenue = sessions.reduce((sum, s) => sum + Number(s.totalRevenue || 0), 0);
    const totalCommission = sessions.reduce((sum, s) => sum + Number(s.totalCommission || 0), 0);
    const totalOrders = sessions.reduce((sum, s) => sum + (s.totalOrders || 0), 0);
    const avgViewers = sessions.length > 0
      ? Math.round(sessions.reduce((sum, s) => sum + (s.averageViewers || 0), 0) / sessions.length)
      : 0;

    return {
      hostId,
      totalSessions: sessions.length,
      totalRevenue,
      totalCommission,
      totalOrders,
      avgViewers,
      sessions,
    };
  }
}
