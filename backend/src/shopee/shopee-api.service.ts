import { Injectable, Logger } from '@nestjs/common';
import * as crypto from 'crypto';

export interface ShopeeApiConfig {
  partnerId: number;
  partnerKey: string;
  shopId: number;
  accessToken: string;
  baseUrl: string;
}

export interface AffiliatePerformance {
  sales: number;
  estCommission: number;
  orders: number;
  clicks: number;
  conversionRate: number;
  roi: number;
}

export interface LiveSessionMetrics {
  sessionId: string;
  title: string;
  startTime: Date;
  endTime: Date;
  viewers: number;
  likes: number;
  productsShown: number;
  orders: number;
  gmv: number;
  commission: number;
  clicks: number;
  conversionRate: number;
}

export interface VideoMetrics {
  videoId: string;
  title: string;
  views: number;
  likes: number;
  shares: number;
  orders: number;
  gmv: number;
  commission: number;
  clicks: number;
  conversionRate: number;
  publishDate: Date;
}

export interface SocialMediaMetrics {
  platform: string;
  clicks: number;
  orders: number;
  gmv: number;
  commission: number;
  conversionRate: number;
}

export interface BestSellerProduct {
  productId: string;
  productName: string;
  imageUrl: string;
  price: number;
  totalSold: number;
  gmv: number;
  commission: number;
  commissionRate: number;
  category: string;
  rating: number;
  source: string;
}

@Injectable()
export class ShopeeApiService {
  private readonly logger = new Logger(ShopeeApiService.name);
  private config: ShopeeApiConfig | null = null;

  configure(config: ShopeeApiConfig) {
    this.config = config;
    this.logger.log('Shopee API configured successfully');
  }

  isConfigured(): boolean {
    return this.config !== null;
  }

  private generateSign(path: string, timestamp: number): string {
    if (!this.config) throw new Error('Shopee API not configured');
    const baseString = `${this.config.partnerId}${path}${timestamp}${this.config.accessToken}${this.config.shopId}`;
    return crypto.createHmac('sha256', this.config.partnerKey).update(baseString).digest('hex');
  }

  private async apiRequest(path: string, params: Record<string, any> = {}): Promise<any> {
    if (!this.config) {
      return null;
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const sign = this.generateSign(path, timestamp);

    const queryParams = new URLSearchParams({
      partner_id: String(this.config.partnerId),
      timestamp: String(timestamp),
      access_token: this.config.accessToken,
      shop_id: String(this.config.shopId),
      sign,
      ...params,
    });

    const url = `${this.config.baseUrl}${path}?${queryParams.toString()}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.error) {
        this.logger.error(`Shopee API error: ${data.error} - ${data.message}`);
        return null;
      }
      return data.response;
    } catch (error) {
      this.logger.error(`Failed to call Shopee API: ${error}`);
      return null;
    }
  }

  async getAffiliatePerformance(startDate: string, endDate: string): Promise<AffiliatePerformance> {
    const data = await this.apiRequest('/api/v2/ams/get_affiliate_performance', {
      start_date: startDate,
      end_date: endDate,
    });

    if (data) {
      return {
        sales: data.sales || 0,
        estCommission: data.est_commission || 0,
        orders: data.orders || 0,
        clicks: data.clicks || 0,
        conversionRate: data.conversion_rate || 0,
        roi: data.roi || 0,
      };
    }

    return this.getMockAffiliatePerformance();
  }

  async getLiveSessionMetrics(startDate: string, endDate: string): Promise<LiveSessionMetrics[]> {
    const data = await this.apiRequest('/api/v2/livestream/get_session_list', {
      start_time: startDate,
      end_time: endDate,
    });

    if (data?.session_list) {
      return data.session_list.map((session: any) => ({
        sessionId: session.session_id,
        title: session.title,
        startTime: new Date(session.start_time * 1000),
        endTime: new Date(session.end_time * 1000),
        viewers: session.viewers || 0,
        likes: session.likes || 0,
        productsShown: session.products_shown || 0,
        orders: session.orders || 0,
        gmv: session.gmv || 0,
        commission: session.commission || 0,
        clicks: session.clicks || 0,
        conversionRate: session.conversion_rate || 0,
      }));
    }

    return this.getMockLiveSessions();
  }

  async getVideoMetrics(startDate: string, endDate: string): Promise<VideoMetrics[]> {
    const data = await this.apiRequest('/api/v2/video/get_video_list', {
      start_time: startDate,
      end_time: endDate,
    });

    if (data?.video_list) {
      return data.video_list.map((video: any) => ({
        videoId: video.video_id,
        title: video.title,
        views: video.views || 0,
        likes: video.likes || 0,
        shares: video.shares || 0,
        orders: video.orders || 0,
        gmv: video.gmv || 0,
        commission: video.commission || 0,
        clicks: video.clicks || 0,
        conversionRate: video.conversion_rate || 0,
        publishDate: new Date(video.publish_time * 1000),
      }));
    }

    return this.getMockVideoMetrics();
  }

  async getSocialMediaMetrics(startDate: string, endDate: string): Promise<SocialMediaMetrics[]> {
    const data = await this.apiRequest('/api/v2/ams/get_traffic_source', {
      start_date: startDate,
      end_date: endDate,
    });

    if (data?.sources) {
      return data.sources.map((source: any) => ({
        platform: source.platform,
        clicks: source.clicks || 0,
        orders: source.orders || 0,
        gmv: source.gmv || 0,
        commission: source.commission || 0,
        conversionRate: source.conversion_rate || 0,
      }));
    }

    return this.getMockSocialMediaMetrics();
  }

  async getBestSellerProducts(limit = 20): Promise<BestSellerProduct[]> {
    const data = await this.apiRequest('/api/v2/ams/get_top_products', {
      limit: String(limit),
      sort_by: 'gmv',
    });

    if (data?.products) {
      return data.products.map((prod: any) => ({
        productId: prod.product_id,
        productName: prod.product_name,
        imageUrl: prod.image_url,
        price: prod.price || 0,
        totalSold: prod.total_sold || 0,
        gmv: prod.gmv || 0,
        commission: prod.commission || 0,
        commissionRate: prod.commission_rate || 0,
        category: prod.category || 'General',
        rating: prod.rating || 5.0,
        source: prod.source || 'live',
      }));
    }

    return this.getMockBestSellers(limit);
  }

  private getMockAffiliatePerformance(): AffiliatePerformance {
    return {
      sales: 1666000000,
      estCommission: 184250000,
      orders: 12480,
      clicks: 145200,
      conversionRate: 8.5,
      roi: 4.8,
    };
  }

  private getMockLiveSessions(): LiveSessionMetrics[] {
    return [
      {
        sessionId: 'LS101',
        title: 'Super Brand Day - Gadget & Tech',
        startTime: new Date('2026-08-22T08:00:00Z'),
        endTime: new Date('2026-08-22T12:00:00Z'),
        viewers: 1420,
        likes: 84300,
        productsShown: 12,
        orders: 42,
        gmv: 48920000,
        commission: 1712200,
        clicks: 184,
        conversionRate: 2.8,
      },
      {
        sessionId: 'LS102',
        title: 'Beauty & Skincare Glow Flash Sale',
        startTime: new Date('2026-08-22T08:30:00Z'),
        endTime: new Date('2026-08-22T12:30:00Z'),
        viewers: 2980,
        likes: 195400,
        productsShown: 18,
        orders: 310,
        gmv: 76400000,
        commission: 9168000,
        clicks: 450,
        conversionRate: 10.4,
      },
    ];
  }

  private getMockVideoMetrics(): VideoMetrics[] {
    return [
      {
        videoId: 'VID-001',
        title: 'Review Skincare Barrier Gel SPF 50+',
        views: 24500,
        likes: 1800,
        shares: 420,
        orders: 180,
        gmv: 21420000,
        commission: 2570400,
        clicks: 890,
        conversionRate: 4.1,
        publishDate: new Date('2026-08-20'),
      },
    ];
  }

  private getMockSocialMediaMetrics(): SocialMediaMetrics[] {
    return [
      { platform: 'TikTok Bio Link', clicks: 14200, orders: 450, gmv: 85000000, commission: 8500000, conversionRate: 3.2 },
      { platform: 'Instagram Story Link', clicks: 8400, orders: 280, gmv: 52000000, commission: 5200000, conversionRate: 3.3 },
      { platform: 'YouTube Shorts', clicks: 4200, orders: 110, gmv: 29600000, commission: 2960000, conversionRate: 2.6 },
    ];
  }

  private getMockBestSellers(limit: number): BestSellerProduct[] {
    return [
      {
        productId: 'prod-1',
        productName: 'Samsung Galaxy S24 Ultra',
        imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200',
        price: 19999000,
        totalSold: 148,
        gmv: 2959852000,
        commission: 103594820,
        commissionRate: 3.5,
        category: 'Elektronik',
        rating: 4.9,
        source: 'live',
      },
      {
        productId: 'prod-3',
        productName: 'Skincare Glow Barrier Full Set',
        imageUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=200',
        price: 389000,
        totalSold: 2840,
        gmv: 1104760000,
        commission: 160190200,
        commissionRate: 14.5,
        category: 'Kecantikan',
        rating: 4.9,
        source: 'live',
      },
    ].slice(0, limit);
  }
}
