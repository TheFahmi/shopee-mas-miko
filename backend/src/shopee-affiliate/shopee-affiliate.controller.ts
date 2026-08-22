import { AuthGuard } from '@nestjs/passport';
import { ShopeeAffiliateService } from './shopee-affiliate.service';

@Controller('shopee-affiliate')
@UseGuards(AuthGuard('jwt'))
export class ShopeeAffiliateController {
  constructor(private readonly affiliateService: ShopeeAffiliateService) {}

  // ========== STATUS & CONNECTION ==========

  @Get('status')
  async getStatus() {
    return this.affiliateService.getStatus();
  }

  @Post('test-connection')
  async testConnection() {
    return this.affiliateService.testConnection();
  }

  // ========== REPORT PROXY ENDPOINTS ==========

  @Get('report')
  async getReportList(
    @Query('pageSize') pageSize?: string,
    @Query('pageNum') pageNum?: string,
    @Query('purchaseTimeStart') purchaseTimeStart?: string,
    @Query('purchaseTimeEnd') purchaseTimeEnd?: string,
    @Query('version') version?: string,
  ) {
    try {
      return await this.affiliateService.getReportList({
        pageSize: pageSize ? parseInt(pageSize) : 20,
        pageNum: pageNum ? parseInt(pageNum) : 1,
        purchaseTimeStart: purchaseTimeStart
          ? parseInt(purchaseTimeStart)
          : undefined,
        purchaseTimeEnd: purchaseTimeEnd
          ? parseInt(purchaseTimeEnd)
          : undefined,
        version: version ? parseInt(version) : 1,
      });
    } catch (error) {
      throw new HttpException(
        error instanceof Error
          ? error.message
          : 'Failed to fetch affiliate report',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('dashboard')
  async getDashboardDetail(
    @Query('startTime') startTime?: string,
    @Query('endTime') endTime?: string,
  ) {
    try {
      return await this.affiliateService.getDashboardDetail(
        startTime ? parseInt(startTime) : undefined,
        endTime ? parseInt(endTime) : undefined,
      );
    } catch (error) {
      throw new HttpException(
        error instanceof Error
          ? error.message
          : 'Failed to fetch affiliate dashboard',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
