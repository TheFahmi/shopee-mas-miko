import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AffiliateReportsService } from './affiliate-reports.service';

@Controller('affiliate-reports')
@UseGuards(AuthGuard('jwt'))
export class AffiliateReportsController {
  constructor(private service: AffiliateReportsService) {}

  @Get('overview')
  getOverview(@Query('studioId') studioId?: string) {
    return this.service.getOverview(studioId ? parseInt(studioId) : undefined);
  }
  @Get('products')
  getProducts(
    @Query('status') status?: string,
    @Query('channel') channel?: string,
    @Query('sort') sort?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getProducts({ status, channel, sort, studioId: studioId ? parseInt(studioId) : undefined });
  }

  @Get('products/stats')
  getProductStats(@Query('studioId') studioId?: string) {
    return this.service.getProductStats(studioId ? parseInt(studioId) : undefined);
  }
  @Get('commissions')
  getCommissions(
    @Query('status') status?: string,
    @Query('channel') channel?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getCommissions({ status, channel, studioId: studioId ? parseInt(studioId) : undefined });
  }

  @Get('commissions/stats')
  getCommissionStats(@Query('studioId') studioId?: string) {
    return this.service.getCommissionStats(studioId ? parseInt(studioId) : undefined);
  }
  @Get('live')
  getLiveReports(@Query('studioId') studioId?: string) {
    return this.service.getLiveReports(studioId ? parseInt(studioId) : undefined);
  }
  @Get('live/stats')
  getLiveStats(@Query('studioId') studioId?: string) {
    return this.service.getLiveStats(studioId ? parseInt(studioId) : undefined);
  }
  @Get('video')
  getVideoReports(@Query('studioId') studioId?: string) {
    return this.service.getVideoReports(studioId ? parseInt(studioId) : undefined);
  }
  @Get('video/stats')
  getVideoStats(@Query('studioId') studioId?: string) {
    return this.service.getVideoStats(studioId ? parseInt(studioId) : undefined);
  }
  @Get('social')
  getSocialReports(@Query('platform') platform?: string, @Query('studioId') studioId?: string) {
    return this.service.getSocialReports({ platform, studioId: studioId ? parseInt(studioId) : undefined });
  }
  @Get('social/stats')
  getSocialStats(@Query('studioId') studioId?: string) {
    return this.service.getSocialStats(studioId ? parseInt(studioId) : undefined);
  }
}
