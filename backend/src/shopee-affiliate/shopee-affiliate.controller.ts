import {
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ShopeeAffiliateService } from './shopee-affiliate.service';

@Controller('shopee-affiliate')
@UseGuards(AuthGuard('jwt'))
export class ShopeeAffiliateController {
  constructor(private readonly affiliateService: ShopeeAffiliateService) {}

  @Get('status')
  async getStatus() {
    return this.affiliateService.getStatus();
  }

  @Post('test-connection')
  async testConnection() {
    return this.affiliateService.testConnection();
  }

  @Get('report')
  async getReport(
    @Query('pageSize') pageSize?: string,
    @Query('pageNum') pageNum?: string,
    @Query('purchaseTimeStart') purchaseTimeStart?: string,
    @Query('purchaseTimeEnd') purchaseTimeEnd?: string,
  ) {
    return this.affiliateService.getReport({
      pageSize: pageSize ? parseInt(pageSize) : 20,
      pageNum: pageNum ? parseInt(pageNum) : 1,
      purchaseTimeStart,
      purchaseTimeEnd,
    });
  }

  @Get('dashboard')
  async getDashboard(
    @Query('startTime') startTime?: string,
    @Query('endTime') endTime?: string,
  ) {
    return this.affiliateService.getDashboard({ startTime, endTime });
  }
}
