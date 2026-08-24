import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ShopeeCreatorService } from './shopee-creator.service';

@Controller('shopee-creator')
@UseGuards(AuthGuard('jwt'))
export class ShopeeCreatorController {
  constructor(private readonly creatorService: ShopeeCreatorService) {}

  @Get('status')
  async getStatus() {
    return { status: 'OK', service: 'Shopee Creator Live Sync' };
  }

  @Post('test-connection')
  async testConnection(@Body('cookieId') cookieId?: number) {
    return this.creatorService.testConnection(cookieId);
  }

  @Get('sessions')
  async getSessions(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    return this.creatorService.getSessionList({
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : 20,
    });
  }

  @Get('sessions/:sessionId')
  async getSessionDetail(@Param('sessionId') sessionId: string) {
    return this.creatorService.getSessionDetail(sessionId);
  }

  @Get('sessions/:sessionId/live-data')
  async getLiveData(@Param('sessionId') sessionId: string) {
    return this.creatorService.getLiveData(sessionId);
  }

  @Get('sessions/:sessionId/products')
  async getProducts(@Param('sessionId') sessionId: string) {
    return this.creatorService.getProductList(sessionId);
  }

  @Get('sessions/:sessionId/orders')
  async getOrders(
    @Param('sessionId') sessionId: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    return this.creatorService.getOrderList(sessionId, {
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : 20,
    });
  }

  @Get('sessions/:sessionId/engagement')
  async getEngagement(@Param('sessionId') sessionId: string) {
    return this.creatorService.getEngagement(sessionId);
  }

  @Get('sessions/:sessionId/viewers')
  async getViewerAnalytics(@Param('sessionId') sessionId: string) {
    return this.creatorService.getViewerAnalytics(sessionId);
  }

  @Get('overview')
  async getOverview(
    @Query('startTime') startTime?: string,
    @Query('endTime') endTime?: string,
  ) {
    return this.creatorService.getSessionOverview({ startTime, endTime });
  }
}
