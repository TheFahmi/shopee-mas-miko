import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';
import {
  MonitoringSoldProduct,
  MonitoringSellerRecap,
  MonitoringAffiliateCommission,
  MonitoringCommissionAlert,
  MonitoringAccessConfig,
} from '../entities/affiliate-monitoring.entity';
import { Seller } from '../entities/seller.entity';

@Injectable()
export class AffiliateMonitoringService {
  constructor(
    @InjectRepository(MonitoringSoldProduct)
    private soldProductsRepo: Repository<MonitoringSoldProduct>,
    @InjectRepository(MonitoringSellerRecap)
    private sellerRecapsRepo: Repository<MonitoringSellerRecap>,
    @InjectRepository(MonitoringAffiliateCommission)
    private affiliateCommissionsRepo: Repository<MonitoringAffiliateCommission>,
    @InjectRepository(MonitoringCommissionAlert)
    private alertsRepo: Repository<MonitoringCommissionAlert>,
    @InjectRepository(MonitoringAccessConfig)
    private accessConfigRepo: Repository<MonitoringAccessConfig>,
    @InjectRepository(Seller)
    private sellersRepo: Repository<Seller>,
  ) {}

  // ==================== DASHBOARD OVERVIEW ====================
  async getDashboardOverview(startDate?: string, endDate?: string, studioId?: number) {
    const where: any = {};
    if (studioId) where.studioId = studioId;
    if (startDate && endDate) {
      where.transactionDate = Between(new Date(startDate), new Date(endDate));
    } else if (startDate) {
      where.transactionDate = MoreThanOrEqual(new Date(startDate));
    } else if (endDate) {
      where.transactionDate = LessThanOrEqual(new Date(endDate));
    }

    const products = await this.soldProductsRepo.find({ where });
    const totalProducts = products.length;
    const totalQuantity = products.reduce((s, p) => s + (p.quantitySold || 0), 0);
    const totalRevenue = products.reduce((s, p) => s + (p.totalRevenue || 0), 0);
    const totalCommission = products.reduce((s, p) => s + (p.commissionAmount || 0), 0);
    const avgCommissionRate = totalProducts > 0
      ? Math.round((products.reduce((s, p) => s + (p.commissionRate || 0), 0) / totalProducts) * 100) / 100
      : 0;

    const uniqueSellers = new Set(products.map(p => p.sellerId).filter(Boolean)).size;
    const uniqueAffiliates = new Set(products.map(p => p.affiliateId).filter(Boolean)).size;

    // Revenue by category
    const categoryMap: Record<string, { revenue: number; quantity: number }> = {};
    for (const p of products) {
      const cat = p.category || 'Lainnya';
      if (!categoryMap[cat]) categoryMap[cat] = { revenue: 0, quantity: 0 };
      categoryMap[cat].revenue += p.totalRevenue || 0;
      categoryMap[cat].quantity += p.quantitySold || 0;
    }

    // Revenue by traffic source
    const trafficMap: Record<string, { revenue: number; count: number }> = {};
    for (const p of products) {
      const src = p.trafficSource || 'direct';
      if (!trafficMap[src]) trafficMap[src] = { revenue: 0, count: 0 };
      trafficMap[src].revenue += p.totalRevenue || 0;
      trafficMap[src].count += 1;
    }

    // Daily revenue trend
    const dailyMap: Record<string, { revenue: number; commission: number; orders: number }> = {};
    for (const p of products) {
      const day = new Date(p.transactionDate).toISOString().split('T')[0];
      if (!dailyMap[day]) dailyMap[day] = { revenue: 0, commission: 0, orders: 0 };
      dailyMap[day].revenue += p.totalRevenue || 0;
      dailyMap[day].commission += p.commissionAmount || 0;
      dailyMap[day].orders += 1;
    }

    const dailyTrend = Object.entries(dailyMap)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([date, data]) => ({ date, ...data }));

    // Alerts count
    const unreadAlerts = await this.alertsRepo.count({ where: { isRead: false } });

    return {
      totalProducts,
      totalQuantity,
      totalRevenue,
      totalCommission,
      avgCommissionRate,
      uniqueSellers,
      uniqueAffiliates,
      byCategory: categoryMap,
      byTrafficSource: trafficMap,
      dailyTrend,
      unreadAlerts,
    };
  }

  // ==================== SOLD PRODUCTS ====================
  async getSoldProducts(params?: {
    startDate?: string;
    endDate?: string;
    category?: string;
    sellerId?: string;
    affiliateId?: string;
    status?: string;
    sort?: string;
    order?: string;
    page?: number;
    pageSize?: number;
    studioId?: number;
  }) {
    const qb = this.soldProductsRepo.createQueryBuilder('sp');

    if (params?.startDate) {
      qb.andWhere('sp.transactionDate >= :startDate', { startDate: params.startDate });
    }
    if (params?.endDate) {
      qb.andWhere('sp.transactionDate <= :endDate', { endDate: params.endDate });
    }
    if (params?.category) {
      qb.andWhere('sp.category = :category', { category: params.category });
    }
    if (params?.sellerId) {
      qb.andWhere('sp.sellerId = :sellerId', { sellerId: params.sellerId });
    }
    if (params?.affiliateId) {
      qb.andWhere('sp.affiliateId = :affiliateId', { affiliateId: params.affiliateId });
    }
    if (params?.status) {
      qb.andWhere('sp.status = :status', { status: params.status });
    }

    // Sorting
    const sortField = params?.sort || 'transactionDate';
    const sortOrder = (params?.order?.toUpperCase() === 'ASC' ? 'ASC' : 'DESC') as 'ASC' | 'DESC';
    qb.orderBy(`sp.${sortField}`, sortOrder);

    // Pagination
    const page = params?.page || 1;
    const pageSize = params?.pageSize || 50;
    qb.skip((page - 1) * pageSize).take(pageSize);

    const [data, total] = await qb.getManyAndCount();
    return { data, total, page, pageSize, totalPages: Math.ceil(total / pageSize) };
  }

  async createSoldProduct(data: Partial<MonitoringSoldProduct>) {
    const product = this.soldProductsRepo.create(data);
    const saved = await this.soldProductsRepo.save(product);
    // Check for commission alerts
    await this.checkCommissionAlerts('product', data.productId || '', data.productName || '', data.commissionAmount || 0);
    return saved;
  }

  async updateSoldProduct(id: number, data: Partial<MonitoringSoldProduct>) {
    await this.soldProductsRepo.update(id, data);
    return this.soldProductsRepo.findOneBy({ id });
  }

  async deleteSoldProduct(id: number) {
    await this.soldProductsRepo.delete(id);
    return { deleted: true };
  }

  async getSoldProductStats(startDate?: string, endDate?: string, studioId?: number) {
    const where: any = {};
    if (studioId) where.studioId = studioId;
    if (startDate && endDate) {
      where.transactionDate = Between(new Date(startDate), new Date(endDate));
    }
    const products = await this.soldProductsRepo.find({ where });
    
    const totalQuantity = products.reduce((s, p) => s + (p.quantitySold || 0), 0);
    const totalRevenue = products.reduce((s, p) => s + (p.totalRevenue || 0), 0);
    const totalCommission = products.reduce((s, p) => s + (p.commissionAmount || 0), 0);

    // Top products by revenue
    const productMap: Record<string, { name: string; revenue: number; quantity: number; commission: number }> = {};
    for (const p of products) {
      const key = p.productId || p.productName;
      if (!productMap[key]) productMap[key] = { name: p.productName, revenue: 0, quantity: 0, commission: 0 };
      productMap[key].revenue += p.totalRevenue || 0;
      productMap[key].quantity += p.quantitySold || 0;
      productMap[key].commission += p.commissionAmount || 0;
    }
    const topProducts = Object.values(productMap)
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 10);

    return { totalQuantity, totalRevenue, totalCommission, totalRecords: products.length, topProducts };
  }

  // ==================== SELLER RECAP ====================
  async getSellerRecaps(params?: {
    period?: string;
    startDate?: string;
    endDate?: string;
    status?: string;
    sort?: string;
    studioId?: number;
  }) {
    const qb = this.sellerRecapsRepo.createQueryBuilder('sr');
    if (params?.period) {
      qb.andWhere('sr.period = :period', { period: params.period });
    }
    if (params?.startDate) {
      qb.andWhere('sr.periodStart >= :startDate', { startDate: params.startDate });
    }
    if (params?.endDate) {
      qb.andWhere('sr.periodEnd <= :endDate', { endDate: params.endDate });
    }
    if (params?.status) {
      qb.andWhere('sr.status = :status', { status: params.status });
    }
    if (params?.studioId) {
      qb.andWhere('sr.studioId = :studioId', { studioId: params.studioId });
    }
    const sort = params?.sort || 'totalRevenue';
    qb.orderBy(`sr.${sort}`, 'DESC');
    return qb.getMany();
  }

  async createSellerRecap(data: Partial<MonitoringSellerRecap>) {
    const recap = this.sellerRecapsRepo.create(data);
    return this.sellerRecapsRepo.save(recap);
  }

  async updateSellerRecap(id: number, data: Partial<MonitoringSellerRecap>) {
    await this.sellerRecapsRepo.update(id, data);
    return this.sellerRecapsRepo.findOneBy({ id });
  }

  async deleteSellerRecap(id: number) {
    await this.sellerRecapsRepo.delete(id);
    return { deleted: true };
  }

  async getSellerRecapStats(studioId?: number) {
    const recaps = await this.sellerRecapsRepo.find(studioId ? { where: { studioId } } : {});
    const totalSellers = new Set(recaps.map(r => r.sellerId)).size;
    const totalRevenue = recaps.reduce((s, r) => s + (r.totalRevenue || 0), 0);
    const totalCommission = recaps.reduce((s, r) => s + (r.commissionAmount || 0), 0);
    const totalOrders = recaps.reduce((s, r) => s + (r.totalOrders || 0), 0);

    // Top sellers
    const sellerMap: Record<string, { name: string; revenue: number; orders: number; commission: number }> = {};
    for (const r of recaps) {
      if (!sellerMap[r.sellerId]) sellerMap[r.sellerId] = { name: r.sellerName, revenue: 0, orders: 0, commission: 0 };
      sellerMap[r.sellerId].revenue += r.totalRevenue || 0;
      sellerMap[r.sellerId].orders += r.totalOrders || 0;
      sellerMap[r.sellerId].commission += r.commissionAmount || 0;
    }
    const topSellers = Object.entries(sellerMap)
      .map(([id, data]) => ({ sellerId: id, ...data }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 10);

    return { totalSellers, totalRevenue, totalCommission, totalOrders, topSellers };
  }

  // ==================== SELLERS (Master Data) ====================
  async getSellers(params?: { status?: string; search?: string }) {
    const qb = this.sellersRepo.createQueryBuilder('s');
    if (params?.status) {
      qb.andWhere('s.status = :status', { status: params.status });
    }
    if (params?.search) {
      qb.andWhere('(s.name LIKE :search OR s.shopName LIKE :search)', { search: `%${params.search}%` });
    }
    qb.orderBy('s.totalRevenue', 'DESC');
    return qb.getMany();
  }

  async createSeller(data: Partial<Seller>) {
    const seller = this.sellersRepo.create(data);
    return this.sellersRepo.save(seller);
  }

  async updateSeller(id: number, data: Partial<Seller>) {
    await this.sellersRepo.update(id, data);
    return this.sellersRepo.findOneBy({ id });
  }

  async deleteSeller(id: number) {
    await this.sellersRepo.delete(id);
    return { deleted: true };
  }

  // ==================== AFFILIATE COMMISSIONS ====================
  async getAffiliateCommissions(params?: {
    period?: string;
    paymentStatus?: string;
    affiliateId?: string;
    startDate?: string;
    endDate?: string;
    studioId?: number;
  }) {
    const qb = this.affiliateCommissionsRepo.createQueryBuilder('ac');
    if (params?.period) {
      qb.andWhere('ac.period = :period', { period: params.period });
    }
    if (params?.paymentStatus) {
      qb.andWhere('ac.paymentStatus = :paymentStatus', { paymentStatus: params.paymentStatus });
    }
    if (params?.affiliateId) {
      qb.andWhere('ac.affiliateId = :affiliateId', { affiliateId: params.affiliateId });
    }
    if (params?.startDate) {
      qb.andWhere('ac.periodStart >= :startDate', { startDate: params.startDate });
    }
    if (params?.endDate) {
      qb.andWhere('ac.periodEnd <= :endDate', { endDate: params.endDate });
    }
    if (params?.studioId) {
      qb.andWhere('ac.studioId = :studioId', { studioId: params.studioId });
    }
    qb.orderBy('ac.createdAt', 'DESC');
    return qb.getMany();
  }

  async createAffiliateCommission(data: Partial<MonitoringAffiliateCommission>) {
    const commission = this.affiliateCommissionsRepo.create(data);
    const saved = await this.affiliateCommissionsRepo.save(commission);
    // Check for commission change alerts
    await this.checkCommissionAlerts('affiliate', data.affiliateId || '', data.affiliateName || '', data.totalCommission || 0);
    return saved;
  }

  async updateAffiliateCommission(id: number, data: Partial<MonitoringAffiliateCommission>) {
    await this.affiliateCommissionsRepo.update(id, data);
    return this.affiliateCommissionsRepo.findOneBy({ id });
  }

  async deleteAffiliateCommission(id: number) {
    await this.affiliateCommissionsRepo.delete(id);
    return { deleted: true };
  }

  async getAffiliateCommissionStats(studioId?: number) {
    const commissions = await this.affiliateCommissionsRepo.find(studioId ? { where: { studioId } } : {});
    const totalCommission = commissions.reduce((s, c) => s + (c.totalCommission || 0), 0);
    const paidAmount = commissions
      .filter(c => c.paymentStatus === 'paid')
      .reduce((s, c) => s + (c.paidAmount || 0), 0);
    const pendingAmount = commissions
      .filter(c => c.paymentStatus === 'pending')
      .reduce((s, c) => s + (c.pendingAmount || 0), 0);
    const processingAmount = commissions
      .filter(c => c.paymentStatus === 'processing')
      .reduce((s, c) => s + (c.totalCommission || 0), 0);

    const uniqueAffiliates = new Set(commissions.map(c => c.affiliateId)).size;

    // Channel breakdown
    const liveTotal = commissions.reduce((s, c) => s + (c.liveCommission || 0), 0);
    const videoTotal = commissions.reduce((s, c) => s + (c.videoCommission || 0), 0);
    const socialTotal = commissions.reduce((s, c) => s + (c.socialCommission || 0), 0);
    const directTotal = commissions.reduce((s, c) => s + (c.directCommission || 0), 0);

    return {
      totalCommission,
      paidAmount,
      pendingAmount,
      processingAmount,
      uniqueAffiliates,
      channelBreakdown: { live: liveTotal, video: videoTotal, social: socialTotal, direct: directTotal },
    };
  }

  // ==================== ALERTS ====================
  async getAlerts(params?: { isRead?: boolean; severity?: string; alertType?: string; studioId?: number }) {
    const qb = this.alertsRepo.createQueryBuilder('a');
    if (params?.isRead !== undefined) {
      qb.andWhere('a.isRead = :isRead', { isRead: params.isRead });
    }
    if (params?.severity) {
      qb.andWhere('a.severity = :severity', { severity: params.severity });
    }
    if (params?.alertType) {
      qb.andWhere('a.alertType = :alertType', { alertType: params.alertType });
    }
    if (params?.studioId) {
      qb.andWhere('a.studioId = :studioId', { studioId: params.studioId });
    }
    qb.orderBy('a.createdAt', 'DESC');
    return qb.getMany();
  }

  async markAlertRead(id: number) {
    await this.alertsRepo.update(id, { isRead: true });
    return this.alertsRepo.findOneBy({ id });
  }

  async markAllAlertsRead() {
    await this.alertsRepo.update({ isRead: false }, { isRead: true });
    return { success: true };
  }

  async deleteAlert(id: number) {
    await this.alertsRepo.delete(id);
    return { deleted: true };
  }

  // Auto-detect commission changes and create alerts
  private async checkCommissionAlerts(entityType: string, entityId: string, entityName: string, currentValue: number) {
    // Find previous records for comparison
    const qb = this.soldProductsRepo.createQueryBuilder('sp');
    if (entityType === 'product') {
      qb.where('sp.productId = :id', { id: entityId });
    } else {
      qb.where('sp.affiliateId = :id', { id: entityId });
    }
    qb.orderBy('sp.createdAt', 'DESC').take(2);
    const recent = await qb.getMany();

    if (recent.length >= 2) {
      const prev = recent[1].commissionAmount || 0;
      const curr = currentValue;
      if (prev > 0) {
        const changePct = ((curr - prev) / prev) * 100;
        if (Math.abs(changePct) >= 20) {
          await this.alertsRepo.save({
            title: `Perubahan Komisi ${Math.abs(changePct) >= 50 ? 'Signifikan' : 'Terdeteksi'}`,
            message: `Komisi ${entityName} berubah ${changePct > 0 ? 'naik' : 'turun'} ${Math.abs(changePct).toFixed(1)}% (dari Rp ${prev.toLocaleString()} ke Rp ${curr.toLocaleString()})`,
            alertType: changePct > 0 ? 'increase' : 'decrease',
            entityType,
            entityId,
            entityName,
            previousValue: prev,
            currentValue: curr,
            changePercent: changePct,
            severity: Math.abs(changePct) >= 50 ? 'critical' : Math.abs(changePct) >= 30 ? 'warning' : 'info',
          });
        }
      }
    }
  }

  // ==================== ACCESS CONFIG ====================
  async getAccessConfigs() {
    return this.accessConfigRepo.find();
  }

  async getAccessConfig(userId: number) {
    return this.accessConfigRepo.findOneBy({ userId });
  }

  async upsertAccessConfig(userId: number, data: Partial<MonitoringAccessConfig>) {
    const existing = await this.accessConfigRepo.findOneBy({ userId });
    if (existing) {
      await this.accessConfigRepo.update(existing.id, data);
      return this.accessConfigRepo.findOneBy({ id: existing.id });
    }
    const config = this.accessConfigRepo.create({ ...data, userId });
    return this.accessConfigRepo.save(config);
  }

  async deleteAccessConfig(userId: number) {
    await this.accessConfigRepo.delete({ userId });
    return { deleted: true };
  }

  // ==================== EXPORT DATA ====================
  async exportSoldProducts(format: string, startDate?: string, endDate?: string, studioId?: number) {
    const where: any = {};
    if (startDate && endDate) {
      where.transactionDate = Between(new Date(startDate), new Date(endDate));
    }
    if (studioId) {
      where.studioId = studioId;
    }
    const products = await this.soldProductsRepo.find({ where, order: { transactionDate: 'DESC' } });

    if (format === 'csv') {
      return this.toCSV(products, [
        'id', 'productName', 'productId', 'category', 'quantitySold', 'price',
        'totalRevenue', 'sellerName', 'sellerId', 'affiliateName', 'affiliateId',
        'commissionRate', 'commissionAmount', 'status', 'transactionDate', 'orderId', 'trafficSource',
      ]);
    }
    return products; // JSON for Excel processing on frontend
  }

  async exportSellerRecaps(format: string, studioId?: number) {
    const recaps = await this.sellerRecapsRepo.find({ where: studioId ? { studioId } : {}, order: { totalRevenue: 'DESC' } });
    if (format === 'csv') {
      return this.toCSV(recaps, [
        'id', 'sellerName', 'sellerId', 'shopName', 'totalProductsSold',
        'totalRevenue', 'commissionRate', 'commissionAmount', 'totalOrders',
        'averageOrderValue', 'topProduct', 'topCategory', 'status', 'period', 'periodStart', 'periodEnd',
      ]);
    }
    return recaps;
  }

  async exportAffiliateCommissions(format: string, studioId?: number) {
    const commissions = await this.affiliateCommissionsRepo.find({ where: studioId ? { studioId } : {}, order: { createdAt: 'DESC' } });
    if (format === 'csv') {
      return this.toCSV(commissions, [
        'id', 'affiliateName', 'affiliateId', 'totalCommission', 'commissionRate',
        'totalProductsSold', 'totalRevenue', 'paymentStatus', 'paymentDate',
        'paymentMethod', 'paidAmount', 'pendingAmount', 'period', 'periodStart', 'periodEnd',
        'liveCommission', 'videoCommission', 'socialCommission', 'directCommission',
      ]);
    }
    return commissions;
  }

  private toCSV(data: any[], columns: string[]): string {
    const header = columns.join(',');
    const rows = data.map(row =>
      columns.map(col => {
        const val = row[col];
        if (val === null || val === undefined) return '';
        const str = String(val);
        return str.includes(',') || str.includes('"') || str.includes('\n')
          ? `"${str.replace(/"/g, '""')}"`
          : str;
      }).join(','),
    );
    return [header, ...rows].join('\n');
  }
}
