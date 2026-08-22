import { AuthGuard } from '@nestjs/passport';
import { ScheduleSwapService } from './schedule-swap.service';

@Controller('schedule-swaps')
@UseGuards(AuthGuard('jwt'))
export class ScheduleSwapController {
  constructor(private readonly swapService: ScheduleSwapService) {}

  @Get()
  getAllSwapRequests(@Query('status') status?: string) {
    return this.swapService.getAllSwapRequests(status ? { status } : undefined);
  }

  @Get(':id')
  getSwapRequest(@Param('id', ParseIntPipe) id: number) {
    return this.swapService.getSwapRequest(id);
  }

  @Put(':id/admin-respond')
  respondAsAdmin(
    @Request() req: { user: { id: number } },
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { approved: boolean; note?: string },
  ) {
    return this.swapService.respondAsAdmin(req.user.id, id, body.approved, body.note);
  }
}
