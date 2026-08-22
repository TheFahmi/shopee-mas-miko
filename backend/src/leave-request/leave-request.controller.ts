import {
  Controller, Get, Put, Param, Query, Body,
  UseGuards, Request, ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LeaveRequestService } from './leave-request.service';

@Controller('leave-requests')
@UseGuards(AuthGuard('jwt'))
export class LeaveRequestController {
  constructor(private readonly service: LeaveRequestService) {}

  @Get()
  getAllLeaveRequests(
    @Query('status') status?: string,
    @Query('employeeId') employeeId?: string,
    @Query('type') type?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
  ) {
    return this.service.getAllLeaveRequests({
      status,
      employeeId: employeeId ? Number(employeeId) : undefined,
      type,
      startDate,
      endDate,
    });
  }

  @Get('stats')
  getLeaveStats(
    @Query('employeeId') employeeId?: string,
    @Query('year') year?: string,
  ) {
    return this.service.getLeaveStats(
      employeeId ? Number(employeeId) : undefined,
      year ? Number(year) : undefined,
    );
  }

  @Get(':id')
  getLeaveRequest(@Param('id', ParseIntPipe) id: number) {
    return this.service.getLeaveRequest(id);
  }

  @Put(':id/respond')
  respondAsAdmin(
    @Request() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { approved: boolean; note?: string },
  ) {
    return this.service.respondAsAdmin(req.user.id, id, body.approved, body.note);
  }
}
