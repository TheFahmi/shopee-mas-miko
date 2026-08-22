import * as crypto from 'crypto';

export interface ShopeeApiConfig {
  partnerId: number;
  partnerKey: string;
  shopId: number;
  accessToken: string;
  baseUrl: string; // e.g., https://partner.shopeemobile.com
}

export interface AffiliatePerformance {
  sales: number; // GMV
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
  platform: string; // facebook, instagram, tiktok, twitter
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
  source: string; // live, video, social_media
}

@Injectable()
export class ShopeeApiService {
  private readonly logger = new Logger(ShopeeApiService.name);
  private config: ShopeeApiConfig | null = null;

  /**
   * Configure the Shopee API credentials
   */
  configure(config: ShopeeApiConfig) {
    this.config = config;
    this.logger.log('Shopee API configured successfully');
  }

  isConfigured(): boolean {
    return this.config !== null;
  }

  /**
   * Generate HMAC-SHA256 signature for Shopee API
   */
  private generateSign(path: string, timestamp: number): string {
    if (!this.config) throw new Error('Shopee API not configured');
    const baseString = `${this.config.partnerId}${path}${timestamp}${this.config.accessToken}${this.config.shopId}`;
    return crypto.createHmac('sha256', this.config.partnerKey).update(baseString).digest('hex');
  }

  /**
   * Make authenticated request to Shopee API
   */
  private async apiRequest(path: string, params: Record<string, any> = {}): Promise<any> {
    if (!this.config) {
      this.logger.warn('Shopee API not configured, returning mock data');
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

  /**
   * Get affiliate performance metrics (GMV, commission, etc.)
   * API: v2.ams.get_affiliate_performance
   */
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

    // Return mock data if API not configured
    return this.getMockAffiliatePerformance();
  }

  6�x��"�-,�j����@���< m���-�ion metrics
   * Uses Livestream Management APIs
   */
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

  /**
   * Get video content metrics
   * Uses Shopee Video APIs
   */
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

  /**
   * Get social media traffic breakdown
   */
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

  /**
   * Get best seller products from affiliate
   * API: v2.ams.get_open_campaign_added_product
   */
  async getBestSellerProducts(limit = 20): Promise<BestSellerProduct[]> {
    const data = await this.apiRequest('/api/v2/ams/get_top_products', {
      limit: String(limit),
      sort_by: 'gmv',
      sort_type: 'DESC',
    });

    if (data?.products) {
      return data.products.map((p: any) => ({
        productId: p.product_id,
        productName: p.product_name,
        imageUrl: p.image_url,
        price: p.price,
        totalSold: p.total_sold,
        gmv: p.gmv,
        commission: p.commission,
        commissionRate: p.commission_rate,
        category: p.category_name,
        rating: p.rating,
        source: p.top_source || 'direct',
      }));
    }

    return this.getMockBestSellers();
  }

  // ========== MOCK DATA (for development/demo) ==========

  private getMockAffiliatePerformance(): AffiliatePerformance {
    return {
      sales: 185750000,
      estCommission: 9825000,
      orders: 342,
      clicks: 15670,
      conversionRate: 2.18,
      roi: 18.9,
    };
  }

  private getMockLiveSessions(): LiveSessionMetrics[] {
    const sessions: LiveSessionMetrics[] = [];
    for (let i = 0; i < 10; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      sessions.push({
        sessionId: `LS${1000 + i}`,
        title: `Live Shopping Session #${10 - i}`,
        startTime: new Date(date.setHours(19, 0, 0)),
        endTime: new Date(date.setHours(22, 0, 0)),
        viewers: Math.floor(Math.random() * 5000) + 500�d��Ͳh�%ܱ�%�}b�a4���T]c�,��.random() * 3000) + 200,
        productsShown: Math.floor(Math.random() * 20) + 5,
        orders: Math.floor(Math.random() * 50) + 10,
        gmv: Math.floor(Math.random() * 25000000) + 5000000,
        commission: Math.floor(Math.random() * 1500000) + 300000,
        clicks: Math.floor(Math.random() * 2000) + 300,
        conversionRate: Number((Math.random() * 5 + 1).toFixed(2)),
      });
    }
    return sessions;
  }

  private getMockVideoMetrics(): VideoMetrics[] {
    const videos: VideoMetrics[] = [];
    const titles = [
      'Review Samsung Galaxy S24 Ultra', 'Unboxing iPhone 15 Pro Max', 'Top 10 Skincare Terbaik',
      'Hoodie Oversize Kekinian', 'Tutorial Makeup Natural', 'Rekomendasi Gadget Murah',
      'OOTD Style Tips', 'Review Xiaomi Pad 6', 'Peralatan Dapur Wajib Punya', 'Snack Viral Terbaru',
    ];
    for (let i = 0; i < titles.length; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i * 3);
      videos.push({
        videoId: `VID${2000 + i}`,
        title: titles[i],
        views: Math.floor(Math.random() * 50000) + 5000,
        likes: Math.floor(Math.random() * 5000) + 500,
        shares: Math.floor(Math.random() * 1000) + 50,
        orders: Math.floor(Math.random() * 30) + 5,
        gmv: Math.floor(Math.random() * 15000000) + 2000000,
        commission: Math.floor(Math.random() * 900000) + 100000,
        clicks: Math.floor(Math.random() * 3000) + 400,
        conversionRate: Number((Math.random() * 3 + 0.5).toFixed(2)),
        publishDate: date,
      });
    }
    return videos;
  }

  private getMockSocialMediaMetrics(): SocialMediaMetrics[] {
    return [
      { platform: 'TikTok', clicks: 8500, orders: 185, gmv: 67500000, commission: 3800000, conversionRate: 2.18 },
      { platform: 'Instagram', clicks: 5200, orders: 98, gmv: 35200000, commission: 2100000, conversionRate: 1.88 },
      { platform: 'Facebook', clicks: 3100, orders: 52, gmv: 18500000, commission: 980000, conversionRate: 1.68 },
      { platform: 'Twitter/X', clicks: 1800, orders: 28, gmv: 9200000, commission: 520000, conversionRate: 1.56 },
      { platform: 'YouTube', clicks: 2400, orders: 45, gmv: 22800000, commission: 1350000, conversionRate: 1.88 },
      { platform: 'Telegram', clicks: 900, orders: 15, gmv: 5800000, commission: 340000, conversionRate: 1.67 },
    ];
  }

  private getMockBestSellers(): BestSellerProduct[] {
    return [
      { productId: 'P001', productName: 'Samsung Galaxy S24 Ultra 256GB', imageUrl: '', price: 19999000, totalSold: 45, gmv: 89995000, commission: 3149000, commissionRate: 3.5, category: 'Elektronik', rating: 4.9, source: 'live' },
      { productId: 'P002', productName: 'iPhone 15 Pro Max 256GB', imageUrl: '', price: 24999000, totalSold: 32, gmv: 79996800, commission: 2239000, commissionRate: 2.8, category: 'Elektronik', rating: 4.8, source: 'video' },
      { productId: 'P003', productName: 'Skincare Set Premium Bundle', imageUrl: '', price: 350000, totalSold: 189, gmv: 66150000, commission: 6615000, commissionRate: 10.0, category: 'Kecantikan', rating: 4.7, source: 'social_media' },
      { productId: 'P004', productName: 'Sunscreen SPF 50+ PA++++', imageUrl: '', price: 125000, totalSold: 256, gmv: 32000000, commission: 2880000, commissionRate: 9.0, category: 'Kecantikan', rating: 4.8, source: 'live' },
      { productId: 'P005', productName: 'Jaket Hoodie Oversize Premium', imageUrl: '', price: 199000, totalSold: 178, gmv: 35422000, commission: 2479000, commissionRate: 7.0, category: 'Fashion', rating: 4.6, source: 'video' },
      { productId: 'P006', productName: 'Xiaomi Pad 6 128GB', imageUrl: '', price: 4999000, totalSold: 28, gmv: 13997200, commission: 559000, commissionRate: 4.0, category: 'Elektronik', rating: 4.7, source: 'social_media' },
      { productId: 'P007', productName: 'Kopi Arabica Premium 200g', imageUrl: '', price: 75000, totalSold: 312, gmv: 23400000, commission: 2808000, commissionRate: 12.0, category: 'Makanan', rating: 4.9, source: 'live' },
      { productId: 'P008', productName: 'Kaos P�SL�e�nB(��jy��*���"�6�l: '', price: 89000, totalSold: 245, gmv: 21805000, commission: 1853000, commissionRate: 8.5, category: 'Fashion', rating: 4.5, source: 'social_media' },
    ];
  }
}
