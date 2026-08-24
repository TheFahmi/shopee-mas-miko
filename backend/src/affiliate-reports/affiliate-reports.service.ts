import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  AffiliateProduct,
  AffiliateCommission,
  AffiliateLiveReport,
  AffiliateVideoReport,
  AffiliateSocialReport,
  AffiliateChannel,
} from '../entities/affiliate-report.entity';

@Injectable()
export class AffiliateReportsService {
  constructor(
    @InjectRepository(AffiliateProduct)
    private productsRepo: Repository<AffiliateProduct>,
    @InjectRepository(AffiliateCommission)
    private commissionsRepo: Repository<AffiliateCommission>,
    @InjectRepository(AffiliateLiveReport)
    private liveRepo: Repository<AffiliateLiveReport>,
    @InjectRepository(AffiliateVideoReport)
    private videoRepo: Repository<AffiliateVideoReport>,
    @InjectRepository(AffiliateSocialReport)
    private socialRepo: Repository<AffiliateSocialReport>,
  ) {}

  // ========== OVERVIEW ==========
  async getOverview(studioId?: number) {
    const [products, commissions, live, video, social] = await Promise.all([
      this.productsRepo.count(studioId ? { where: { studioId } } : {}),
      this.commissionsRepo.count(studioId ? { where: { studioId } } : {}),
      this.liveRepo.count(studioId ? { where: { studioId } } : {}),
      this.videoRepo.count(studioId ? { where: { studioId } } : {}),
      this.socialRepo.count(studioId ? { where: { studioId } } : {}),
    ]);
    return { products, commissions, live, video, social };
  }

  // ========== PRODUCTS ==========
  async getProducts(params?: { status?: string; channel?: string; sort?: string; studioId?: number }) {
    const qb = this.productsRepo.createQueryBuilder('p');
    if (params?.status) {
      qb.andWhere('p.status = :status', { status: params.status });
    }
    if (params?.studioId) {
      qb.andWhere('p.studioId = :studioId', { studioId: params.studioId });
    }
    if (params?.channel) {
      qb.andWhere('p.topChannel = :channel', { channel: params.channel });
    }
    if (params?.sort === 'revenue') {
      qb.orderBy('p.revenue', 'DESC');
    } else if (params?.sort === 'orders') {
      qb.orderBy('p.orders', 'DESC');
    } else if (params?.sort === 'clicks') {
      qb.orderBy('p.clicks', 'DESC');
    } else {
      qb.orderBy('p.revenue', 'DESC');
    }
    return qb.getMany();
  }

  async getProductStats(studioId?: number) {
    const products = await this.productsRepo.find(studioId ? { where: { studioId } } : {});
    const totalProducts = products.length;
    const totalClicks = products.reduce((s, p) => s + (p.clicks || 0), 0);
    const totalOrders = products.reduce((s, p) => s + (p.orders || 0), 0);
    const totalRevenue = products.reduce((s, p) => s + (p.revenue || 0), 0);

    const channelBreakdown = {
      live: products.reduce((s, p) => s + (p.liveOrders || 0), 0),
      video: products.reduce((s, p) => s + (p.videoOrders || 0), 0),
      social_media: products.reduce((s, p) => s + (p.socialOrders || 0), 0),
      link: products.reduce((s, p) => s + (p.linkOrders || 0), 0),
    };

    return { totalProducts, totalClicks, totalOrders, totalRevenue, channelBreakdown };
  }

  // ========== COMMISSIONS ==========
  async getCommissions(params?: { status?: string; channel?: string; studioId?: number }) {
    const qb = this.commissionsRepo.createQueryBuilder('c');
    if (params?.status) {
      qb.andWhere('c.status = :status', { status: params.status });
    }
    if (params?.channel) {
      qb.andWhere('c.channel = :channel', { channel: params.channel });
    }
    if (params?.studioId) {
      qb.andWhere('c.studioId = :studioId', { studioId: params.studioId });
    }
    qb.orderBy('c.createdAt', 'DESC');
    return qb.getMany();
  }

  async getCommissionStats(studioId?: number) {
    const commissions = await this.commissionsRepo.find(studioId ? { where: { studioId } } : {});
    const total = commissions.reduce((s, c) => s + (c.commissionAmount || 0), 0);
    const paid = commissions
      .filter((c) => c.status === 'paid')
      .reduce((s, c) => s + (c.commissionAmount || 0), 0);
    const confirmed = commissions
      .filter((c) => c.status === 'confirmed')
      .reduce((s, c) => s + (c.commissionAmount || 0), 0);
    const pending = commissions
      .filter((c) => c.status === 'pending')
      .reduce((s, c) => s + (c.commissionAmount || 0), 0);

    const byChannel: Record<string, { amount: number; orders: number }> = {};
    for (const c of commissions) {
      const ch = c.channel || 'link';
      if (!byChannel[ch]) byChannel[ch] = { amount: 0, orders: 0 };
      byChannel[ch].amount += c.commissionAmount || 0;
      byChannel[ch].orders += 1;
    }

    return { total, paid, confirmed, pending, byChannel };
  }

  // ========== LIVE ==========
  async getLiveReports(studioId?: number) {
    return this.liveRepo.find({ where: studioId ? { studioId } : {}, order: { createdAt: 'DESC' } });
  }

  async getLiveStats(studioId?: number) {
    const reports = await this.liveRepo.find(studioId ? { where: { studioId } } : {});
    const totalSessions = reports.length;
    const totalRevenue = reports.reduce((s, r) => s + (r.revenue || 0), 0);
    const totalViewers = reports.reduce((s, r) => s + (r.totalViewers || 0), 0);
    const totalOrders = reports.reduce((s, r) => s + (r.ordersGenerated || 0), 0);

    const avgEngagement = totalSessions > 0
      ? Math.round((reports.reduce((s, r) => s + (r.engagementRate || 0), 0) / totalSessions) * 100) / 100
      : 0;
    const avgViewers = totalSessions > 0
      ? Math.round(reports.reduce((s, r) => s + (r.avgViewers || 0), 0) / totalSessions)
      : 0;
    const avgRevenue = totalSessions > 0
      ? Math.round(totalRevenue / totalSessions)
      : 0;
    const avgConversion = totalSessions > 0
      ? Math.round((reports.reduce((s, r) => s + (r.conversionRate || 0), 0) / totalSessions) * 100) / 100
      : 0;

    return { totalSessions, totalRevenue, totalViewers, avgEngagement, avgViewers, avgRevenue, totalOrders, avgConversion };
  }

  // ========== VIDEO ==========
  async getVideoReports(studioId?: number) {
    return this.videoRepo.find({ where: studioId ? { studioId } : {}, order: { createdAt: 'DESC' } });
  }

  async getVideoStats(studioId?: number) {
    const reports = await this.videoRepo.find(studioId ? { where: { studioId } } : {});
    const totalVideos = reports.length;
    const totalViews = reports.reduce((s, r) => s + (r.views || 0), 0);
    const totalRevenue = reports.reduce((s, r) => s + (r.revenue || 0), 0);

    const avgEngagement = totalVideos > 0
      ? Math.round((reports.reduce((s, r) => s + (r.engagementRate || 0), 0) / totalVideos) * 100) / 100
      : 0;

    return { totalVideos, totalViews, totalRevenue, avgEngagement };
  }

  // ========== SOCIAL ==========
  async getSocialReports(params?: { platform?: string; studioId?: number }) {
    const qb = this.socialRepo.createQueryBuilder('s');
    if (params?.platform) {
      qb.andWhere('s.platform = :platform', { platform: params.platform });
    }
    if (params?.studioId) {
      qb.andWhere('s.studioId = :studioId', { studioId: params.studioId });
    }
    qb.orderBy('s.createdAt', 'DESC');
    return qb.getMany();
  }

  async getSocialStats(studioId?: number) {
    const reports = await this.socialRepo.find(studioId ? { where: { studioId } } : {});
    const totalPosts = reports.length;
    const totalImpressions = reports.reduce((s, r) => s + (r.impressions || 0), 0);
    const totalRevenue = reports.reduce((s, r) => s + (r.revenue || 0), 0);

    const avgEngagement = totalPosts > 0
      ? Math.round((reports.reduce((s, r) => s + (r.engagementRate || 0), 0) / totalPosts) * 100) / 100
      : 0;

    const byPlatform: Record<string, { revenue: number; count: number }> = {};
    for (const r of reports) {
      const p = r.platform || 'other';
      if (!byPlatform[p]) byPlatform[p] = { revenue: 0, count: 0 };
      byPlatform[p].revenue += r.revenue || 0;
      byPlatform[p].count += 1;
    }

    return { totalPosts, totalImpressions, totalRevenue, avgEngagement, byPlatform };
  }
}
