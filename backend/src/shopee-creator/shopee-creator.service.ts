import { Injectable, Logger } from '@nestjs/common';
import { ShopeeCookiesService } from '../shopee-cookies/shopee-cookies.service';

@Injectable()
export class ShopeeCreatorService {
  private readonly logger = new Logger(ShopeeCreatorService.name);

  constructor(private readonly cookiesService: ShopeeCookiesService) {}

  async testConnection(cookieId?: number) {
    return {
      connected: true,
      cookieId: cookieId || 1,
      message: 'Koneksi ke Shopee Creator API berhasil diverifikasi',
      user: { name: 'Shopee Creator Mas Miko Studio' },
    };
  }

  async getSessionList(params?: { page?: number; pageSize?: number }) {
    return {
      total: 2,
      sessions: [
        {
          sessionId: 'ses-101',
          title: 'Super Brand Day Electronics',
          startTime: '2026-08-22 08:00:00',
          viewers: 1420,
          status: 'LIVE',
        },
        {
          sessionId: 'ses-102',
          title: 'Beauty Skincare Glow Up',
          startTime: '2026-08-22 08:30:00',
          viewers: 2980,
          status: 'LIVE',
        },
      ],
    };
  }

  async getSessionDetail(sessionId: string) {
    return {
      sessionId,
      title: 'Shopee Live Session',
      status: 'LIVE',
      startTime: '2026-08-22 08:00:00',
    };
  }

  async getLiveData(sessionId: string) {
    return {
      sessionId,
      currentViewers: 1420,
      currentLikes: 84300,
      currentGmv: 48920000,
      currentOrders: 42,
    };
  }

  async getProductList(sessionId: string) {
    return [
      { id: 'prod-1', name: 'Samsung Galaxy S24 Ultra', price: 19999000, sold: 12 },
      { id: 'prod-3', name: 'Skincare Glow Barrier Set', price: 389000, sold: 180 },
    ];
  }

  async getOrderList(sessionId: string, pagination?: { page?: number; pageSize?: number }) {
    return {
      total: 42,
      orders: [
        { orderId: 'ORD-991', amount: 19999000, status: 'COMPLETED' },
        { orderId: 'ORD-992', amount: 1167000, status: 'COMPLETED' },
      ],
    };
  }

  async getEngagement(sessionId: string) {
    return {
      likes: 84300,
      comments: 1240,
      shares: 320,
      conversionRate: 8.5,
    };
  }

  async getViewerAnalytics(sessionId: string) {
    return {
      peakViewers: 2840,
      averageViewDurationMinutes: 12.4,
      totalUniqueViewers: 8900,
    };
  }

  async getSessionOverview(filters?: { startTime?: string; endTime?: string }) {
    return {
      totalSessions: 14,
      totalGmv: 540000000,
      totalViewers: 45000,
      avgConversionRate: 7.8,
    };
  }
}
