import { AuthGuard } from '@nestjs/passport';
import { SnapshotService } from './snapshot.service';

@Controller('snapshots')
@UseGuards(AuthGuard('jwt'))
export class SnapshotController {
  constructor(private readonly snapshotService: SnapshotService) {}

  // ========== SNAPSHOTS ==========

  @Get()
  async getSnapshots(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('page') page?: string,
    @Query('pageSize') pageSize?: string,
  ) {
    return this.snapshotService.getSnapshots({
      startDate,
      endDate,
      page: page ? parseInt(page) : 1,
      pageSize: pageSize ? parseInt(pageSize) : 20,
    });
  }

  @Get('overview')
  async getOverview(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.snapshotService.getOverview(startDate, endDate);
  }

  @Get('slot-analytics')
  async getSlotAnalytics(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.snapshotService.getSlotAnalytics(startDate, endDate);
  }

  // ========== MANUAL CAPTURE ==========

  @Post('capture')
  async triggerCapture(@Query('slotHour') slotHour?: string) {
    const hour = slotHour ? parseInt(slotHour) : new Date().getHours();
    return this.snapshotService.manualCapture(hour);
  }
}
