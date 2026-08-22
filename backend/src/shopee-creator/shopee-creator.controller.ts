import { AuthGuard } from '@nestjs/passport';
import { ShopeeCreatorService } from './shopee-creator.service';

@Controller('shopee-creator')
@UseGuards(AuthGuard('jwt'))
export class ShopeeCreatorController {
  constructor(private readonly creatorService: ShopeeCreatorService) {}

  // ========== STATUS & CONNECTION ==========

  @Get('status')
  async getStatus() {
    return this.creatorService.getStatus();
  }

  @Post('test-connection')
  async testConnection() {
    return this.creatorService.testConnection();
  }

  // ========== LIVE SESSION PROXY ENDPOINTS ==========

  @Get('sessions')
  async getSessionList(
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
    @Query('name') name?: string,
    @Query('orderBy') orderBy?: string,
    @Query('sort') sort?: string,
  ) {
    try {
      return await this.creatorService.getSessionList({
        page: page ? parseInt(page) : 1,
        pageSize: pageSize ? parseInt(pageSize) : 10,
        name: name || '',
        orderBy: orderBy || '',
        sort: sort || '',
      });
    } catch (error) {
      throw new HttpException(
        error instanceof Error ? error.message : 'Failed to fetch sessions',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('sessions/:sessionId')
  async getSessionDetail(@Param('sessionId') sessionId: string) {
    try {
      return await this.creatorService.getSessionDetail(sessionId);
    } catch (error) {
      throw new HttpException(
        error instanceof Error ? error.message : 'Failed to fetch session detail',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('sessions/:sessionId/live-data')
  async getRealtimeLiveData(@Param('sessionId') sessionId: string) {
    try {
      return await this.creatorService.getRealtimeLiveData(sessionId);
    } catch (error) {
      throw new HttpException(
        error instanceof Error ? error.message : 'Failed to fetch live data',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('sessions/:sessionId/products')
  async getProductPerformance(@Param('sessionId') sessionId: string) {
    try {
      return await this.creatorService.getProductPerformance(sessionId);
    } catch (error) {
      throw new HttpException(
        error instanceof Error
          ? error.message
          : 'Failed to fetch product performance',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('sessions/:sessionId/orders')
  async getOrderList(
    @Param('sessionId') sessionId: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    try {
      return await this.creatorService.getOrderList(sessionId, {
        page: page ? parseInt(page) : 1,
        pageSize: pageSize ? parseInt(pageSize) : 20,
      });
    } catch (error) {
      throw new HttpException(
        error instanceof Error ? error.message : 'Failed to fetch orders',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('sessions/:sessionId/engagement')
  async getEngagement(@Param('sessionId') sessionId: string) {
    try {
      return await this.creatorService.getEngagement(sessionId);
    } catch (error) {
      throw new HttpException(
        error instanceof Error ? error.message : 'Failed to fetch engagement',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('sessions/:sessionId/viewers')
  async getViewerAnalytics(@Param('sessionId') sessionId: string) {
    try {
      return await this.creatorService.getViewerAnalytics(sessionId);
    } catch (error) {
      throw new HttpException(
        error instanceof Error
          ? error.message
          : 'Failed to fetch viewer analytics',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }

  @Get('overview')
  async getSessionOverview(
    @Query('startTime') startTime?: string,
    @Query('endTime') endTime?: string,
  ) {
    try {
      return await this.creatorService.getSessionOverview({
        startTime,
        endTime,
      });
    } catch (error) �0��0Pљ+ԅΨ�̰%XL���r$5�����
        error instanceof Error ? error.message : 'Failed to fetch overview',
        HttpStatus.BAD_GATEWAY,
      );
    }
  }
}
