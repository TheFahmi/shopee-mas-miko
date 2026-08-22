import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { LiveSnapshot } from '../entities/live-snapshot.entity';
import { ShopeeCookiesService } from '../shopee-cookies/shopee-cookies.service';
import { ShopeeCreatorService } from '../shopee-creator/shopee-creator.service';

const SLOT_HOURS = [0, 3, 6, 9, 12, 15, 18, 21];

@Injectable()
export class SnapshotService {
  private readonly logger = new Logger(SnapshotService.name);

  constructor(
    @InjectRepository(LiveSnapshot)
    private snapshotRepo: Repository<LiveSnapshot>,
    private cookiesService: ShopeeCookiesService,
    private creatorService: ShopeeCreatorService,
  ) {}

  // ========== SNAPSHOT CAPTURE ==========

  /**
   * Capture snapshots every 3 hours. No manual host mapping needed.
   * All sessions stored as-is, attribution happens during analytics.
   */
  @Cron(CronExpression.EVERY_3_HOURS)
  async scheduledCapture() {
    const now = new Date();
    const hour = now.getHours();
    // Find nearest slot hour
    const slotHour = [...SLOT_HOURS].reverse().find(h => h <= hour) ?? SLOT_HOURS[0];
    return this.captureSnapshots(slotHour);
  }

  async captureSnapshots(slotHour: number): Promise<{ captured: number }> {
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const slotIndex = SLOT_HOURS.indexOf(slotHour);
    const slotLabel = `${String(slotHour).padStart(2, '0')}:00`;
    this.logger.log(`[SNAPSHOT] Capturing snapshots for slot ${slotLabel} on ${today}`);

    let sessions: any[] = [];
    try {
      const activeCookie = await this.cookiesService.getActiveCookies();
      if (activeCookie) {
        try {
          const raw = await this.creatorService.getSessionList({ page: 1, pageSize: 100 });
          const list: any[] = (raw as any)?.data?.list || (raw as any)?.data || [];
          if (list.length > 0) { sessions = list; }
        } catch (e: any) {
          this.logger.warn(`Cookie ${activeCookie.id} failed: ${e.message}`);
        }
      }
    } catch (e: any) {
      this.logger.error(`Snapshot failed: ${e.message}`);
      return { captured: 0 };
    }

    if (sessions.length === 0) {
      this.logger.warn('No sessions from Creator API');
      return { captured: 0 };
    }

    let captured = 0;
    for (const session of sessions) {
      const sessionId = Number(session.sessionId);
      const existing = await this.snapshotRepo.findOne({ where: { sessionId } });
      if (existing) continue;

      const snapshot = this.snapshotRepo.create({
        snapshotDate: today,
        slot: slotIndex,
        slotLabel,
        sessionId,
        title: session.title || '',
        hostId: null, // auto-assigned during analytics
        startTime: session.startTime || 0,
        status: session.status || 0,
        conversionRate: session.conversionRate || 0,
        views: session.views || 0,
        viewers: session.viewers || 0,
        peakViewers: session.peakViewers || 0,
        likes: session.likes || 0,
        comments: session.comments || 0,
        atc: session.atc || 0,
        productClicks: session.productClicks || 0,
        placedOrders: session.placedOrders || 0,
        placedSales: session.placedSales || 0,
        confirmedOrders: session.confirmedOrders || 0,
        confirmedSales: session.confirmedSales || 0,
        followersGrowth: session.followersGrowth || 0,
        avgViewsDuration: session.avgViewsDuration || 0,
        rawData: JSON.stringify(session),
      });

      await this.snapshotRepo.save(snapshot);
      captured++;
    }

    this.logger.log(`[SNAPSHOT] Captured ${captured} sessions`);
    return { captured };
  }

  // ========== SNAPSHOT QUERIES ==========

  async getSnapshots(filters?: {
    startDate?: string;
    endDate?: string;
    page?: number;
    pageSize?: number;
  }) {
    const where: any = {};
    if (filters?.startDate && filters?.endDate) {
      where.snapshotDate = Between(f9�p͞��>�)نg|vGRQrx=]�][* rNe);
    } else if (filters?.startDate) {
      where.snapshotDate = filters.startDate;
    }

    const page = filters?.page || 1;
    const pageSize = filters?.pageSize || 20;
    const [data, total] = await this.snapshotRepo.findAndCount({
      where,
      order: { snapshotDate: 'DESC', slot: 'DESC' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return { data, total, page, pageSize };
  }

  async getOverview(startDate?: string, endDate?: string) {
    const where: any = {};
    if (startDate && endDate) where.snapshotDate = Between(startDate, endDate);

    const snapshots = await this.snapshotRepo.find({ where });

    const summary = snapshots.reduce(
      (acc, s) => ({
        totalSnapshots: acc.totalSnapshots + 1,
        totalViews: acc.totalViews + Number(s.views),
        totalViewers: acc.totalViewers + Number(s.viewers),
        totalLikes: acc.totalLikes + Number(s.likes),
        totalOrders: acc.totalOrders + Number(s.confirmedOrders),
        totalSales: acc.totalSales + Number(s.confirmedSales),
      }),
      { totalSnapshots: 0, totalViews: 0, totalViewers: 0, totalLikes: 0, totalOrders: 0, totalSales: 0 },
    );

    return { summary, totalSnapshots: snapshots.length };
  }

  // ========== SLOT ANALYTICS ==========

  async getSlotAnalytics(startDate?: string, endDate?: string) {
    const where: any = {};
    if (startDate && endDate) where.snapshotDate = Between(startDate, endDate);
    const snapshots = await this.snapshotRepo.find({ where });

    const slotStats = SLOT_HOURS.map((hour, i) => {
      const slotSnaps = snapshots.filter(s => s.slot === i);
      const totalSales = slotSnaps.reduce((sum, s) => sum + Number(s.confirmedSales || 0), 0);
      const totalOrders = slotSnaps.reduce((sum, s) => sum + Number(s.confirmedOrders || 0), 0);
      const totalViews = slotSnaps.reduce((sum, s) => sum + Number(s.views || 0), 0);
      const totalLikes = slotSnaps.reduce((sum, s) => sum + Number(s.likes || 0), 0);
      const avgConv = slotSnaps.length > 0
        ? slotSnaps.reduce((sum, s) => sum + Number(s.conversionRate || 0), 0) / slotSnaps.length
        : 0;

      return {
        slot: i, label: `${String(hour).padStart(2,'0')}:00 - ${String((hour+3)%24).padStart(2,'0')}:00`,
        count: slotSnaps.length,
        totalSales, totalOrders, totalViews, totalLikes,
        avgConvRate: avgConv,
        avgSales: slotSnaps.length > 0 ? totalSales / slotSnaps.length : 0,
        avgOrders: slotSnaps.length > 0 ? totalOrders / slotSnaps.length : 0,
      };
    });

    const bySales = [...slotStats].sort((a, b) => b.totalSales - a.totalSales);
    const byOrders = [...slotStats].sort((a, b) => b.totalOrders - a.totalOrders);

    const rankedSlots = slotStats.map(s => {
      const sRank = bySales.findIndex(x => x.slot === s.slot) + 1;
      const oRank = byOrders.findIndex(x => x.slot === s.slot) + 1;
      const avgRank = (sRank + oRank) / 2;
      return {
        ...s,
        salesRank: sRank, ordersRank: oRank, avgRank,
        tier: avgRank <= 3 ? 'rame' : avgRank <= 5 ? 'sedang' : 'sepi',
      };
    });

    // Day breakdown
    const dayBreakdown = Array.from({ length: 7 }, (_, d) => {
      const label = ['Minggu','Senin','Selasa','Raktu','Kamis','Jumat','Sabtu'][d];
      const daySnaps = snapshots.filter(s => new Date(s.snapshotDate).getDay() === d);
      return {
        day: d, label,
        sessions: daySnaps.length,
        totalSales: daySnaps.reduce((sum, s) => sum + Number(s.confirmedSales || 0), 0),
        totalOrders: daySnaps.reduce((sum, s) => sum + Number(s.confirmedOrders || 0), 0),
      };
    });

    return {
      totalSnapshots: snapshots.length,
      rankedSlots,
      rameSlots: rankedSlots.filter(s => s.tier === 'rame'),
      bySales,
      byOrders,
      dayBreakdown,
    };
  }

  // ========== MANUAL TRIGGER ==========
  async manualCapture(slotHour: number) {
    return this.captureSnapshots(slotHour);
  }
}
