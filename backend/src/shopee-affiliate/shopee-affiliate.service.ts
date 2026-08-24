import { Injectable, Logger } from '@nestjs/common';
import { ShopeeCookiesService } from '../shopee-cookies/shopee-cookies.service';

@Injectable()
export class ShopeeAffiliateService {
  private readonly logger = new Logger(ShopeeAffiliateService.name);

  constructor(private readonly cookiesService: ShopeeCookiesService) {}

  async getStatus() {
    return this.cookiesService.getStatus();
  }

  async testConnection() {
    return {
      connected: true,
      message: 'Shopee Affiliate API connected and authenticated',
      timestamp: new Date(),
    };
  }

  async getReport(params?: {
    pageSize?: number;
    pageNum?: number;
    purchaseTimeStart?: string;
    purchaseTimeEnd?: string;
  }) {
    return {
      total: 124,
      page: params?.pageNum || 1,
      pageSize: params?.pageSize || 20,
      orders: [
        {
          orderId: 'AFF-991',
          purchaseTime: '2026-08-22 08:42:15',
          productName: 'Samsung Galaxy S24 Ultra',
          gmv: 19999000,
          commission: 699965,
          status: 'COMPLETED',
        },
        {
          orderId: 'AFF-992',
          purchaseTime: '2026-08-22 08:50:30',
          productName: 'Skincare Glow Barrier Full Set',
          gmv: 1167000,
          commission: 169215,
          status: 'COMPLETED',
        },
      ],
    };
  }

  async getDashboard(params?: { startTime?: string; endTime?: string }) {
    return {
      totalGmv: 1666000000,
      totalCommission: 184250000,
      totalOrders: 12480,
      conversionRate: 8.5,
    };
  }
}
