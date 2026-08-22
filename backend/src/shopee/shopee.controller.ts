import { AuthGuard } from '@nestjs/passport';
import { ShopeeApiService } from './shopee-api.service';
import { Roles, RolesGuard } from '../auth/roles.guard';
import { UserRole } from '../entities';

@Controller('shopee')
@UseGuards(AuthGuard('jwt'))
export class ShopeeController {
  constructor(private shopeeApiService: ShopeeApiService) {}

  @Get('performance')
  async getPerformance(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const end = endDate || new Date().toISOString().split('T')[0];
    return this.shopeeApiService.getAffiliatePerformance(start, end);
  }

  @Get('live-sessions')
  async getLiveSessions(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const end = endDate || new Date().toISOString().split('T')[0];
    return this.shopeeApiService.getLiveSessionMetrics(start, end);
  }

  @Get('videos')
  async getVideoMetrics(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const end = endDate || new Date().toISOString().split('T')[0];
    return this.shopeeApiService.getVideoMetrics(start, end);
  }

  @Get('social-media')
  async getSocialMediaMetrics(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const end = endDate || new Date().toISOString().split('T')[0];
    return this.shopeeApiService.getSocialMediaMetrics(start, end);
  }

  @Get('best-sellers')
  async getBestSellers(@Query('limit') limit?: string) {
    return this.shopeeApiService.getBestSellerProducts(limit ? parseInt(limit) : 20);
  }

  @Get('overview')
  async getOverview(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    const start = startDate || new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const end = endDate || new Date().toISOString().split('T')[0];

    const [performance, liveSessions, videos, socialMedia, bestSellers] = await Promise.all([
      this.shopeeApiService.getAffiliatePerformance(start, end),
      this.shopeeApiService.getLiveSessionMetrics(start, end),
      this.shopeeApiService.getVideoMetrics(start, end),
      this.shopeeApiService.getSocialMediaMetrics(start, end),
      this.shopeeApiService.getBestSellerProducts(10),
    ]);

    // Aggregate by source
    const liveTotal = {
      gmv: liveSessions.reduce((s, l) => s + l.gmv, 0),
      commission: liveSessions.reduce((s, l) => s + l.commission, 0),
      orders: liveSessions.reduce((s, l) => s + l.orders, 0),
      sessions: liveSessions.length,
      viewers: liveSessions.reduce((s, l) => s + l.viewers, 0),
    };

    const videoTotal = {
      gmv: videos.reduce((s, v) => s + v.gmv, 0),
      commission: videos.reduce((s, v) => s + v.commission, 0),
      orders: videos.reduce((s, v) => s + v.orders, 0),
      videos: videos.length,
      views: videos.reduce((s, v) => s + v.views, 0),
    };

    const socialTotal = {
      gmv: socialMedia.reduce((s, sm) => s + sm.gmv, 0),
      commission: socialMedia.reduce((s, sm) => s + sm.commission, 0),
      orders: socialMedia.reduce((s, sm) => s + sm.orders, 0),
      clicks: socialMedia.reduce((s, sm) => s + sm.clicks, 0),
    };

    const totalGmv = liveTotal.gmv + videoTotal.gmv + socialTotal.gmv;

    return {
      performance,
      channelBreakdown: {
        live: { ...liveTotal, percentage: totalGmv > 0 ? ((liveTotal.gmv / totalGmv) * 100).toFixed(1) : 0 },
        video: { ...videoTotal, percentage: totalGmv > 0 ? ((videoTotal.gmv / totalGmvx0u����=��+,-�μ��\$2V��D��   socialMedia: { ...socialTotal, percentage: totalGmv > 0 ? ((socialTotal.gmv / totalGmv) * 100).toFixed(1) : 0 },
      },
      liveSessions,
      videos,
      socialMedia,
      bestSellers,
    };
  }

  @Post('configure')
  @UseGuards(RolesGuard)
  @Roles(UserRole.ADMIN)
  async configureApi(@Body() config: {
    partnerId: number;
    partnerKey: string;
    shopId: number;
    accessToken: string;
    baseUrl?: string;
  }) {
    this.shopeeApiService.configure({
      ...config,
      baseUrl: config.baseUrl || 'https://partner.shopeemobile.com',
    });
    return { message: 'Shopee API configured successfully' };
  }

  @Get('status')
  getApiStatus() {
    return {
      configured: this.shopeeApiService.isConfigured(),
      message: this.shopeeApiService.isConfigured()
        ? 'Shopee API sudah terhubung'
        : 'Menggunakan data demo. Konfigurasi Shopee API untuk data real-time.',
    };
  }
}
