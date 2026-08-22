import {
  Controller, Get, Post, Put, Body, Param, Query,
  UseGuards, Request, ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { EmployeePortalService } from './employee-portal.service';
import { LeaveType } from '../entities/leave-request.entity';

@Controller('employee-portal')
@UseGuards(AuthGuard('jwt'))
export class EmployeePortalController {
  constructor(private readonly service: EmployeePortalService) {}

  @Get('me')
  getProfile(@Request() req: any) {
    return this.service.getMyProfile(req.user.id);
  }

  @Get('dashboard')
  getDashboard(@Request() req: any) {
    return this.service.getDashboard(req.user.id);
  }

  // === ATTENDANCE ===
  @Post('check-in')
  checkIn(
    @Request() req: any,
    @Body() body: { lat?: number; lng?: number; address?: string; photo?: string },
  ) {
    return this.service.checkIn(req.user.id, body);
  }

  @Post('check-out')
  checkOut(
    @Request() req: any,
    @Body() body: { lat?: number; lng?: number; address?: string; photo?: string },
  ) {
    return this.service.checkOut(req.user.id, body);
  }

  @Get('attendance')
  getMyAttendance(
    @Request() req: any,
    @Query('year') year: number,
    @Query('month') month: number,
  ) {
    const now = new Date();
    return this.service.getMyAttendance(
      req.user.id,
      year || now.getFullYear(),
      month || now.getMonth() + 1,
    );
  }

  // === PAYSLIPS ===
  @Get('payslips')
  getMyPayslips(@Request() req: any) {
    return this.service.getMyPayslips(req.user.id);
  }

  @Get('payslips/:id')
  getPayslipDetail(
    @Request() req: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.getPayslipDetail(req.user.id, id);
  }

  // === SCHEDULE ===
  @Get('schedule')
  getMySchedule(
    @Request() req: any,
    @Query('year') year: number,
    @Query('month') month: number,
  ) {
    const now = new Date();
    return this.service.getMySchedule(
      req.user.id,
      year || now.getFullYear(),
      month || now.getMonth() + 1,
    );
  }

  // === SWAP REQUESTS ===
  @Post('swap-requests')
  createSwapRequest(
    @Request() req: any,
    @Body() body: { targetId: number; requesterScheduleId: number; targetScheduleId: number; reason?: string },
  ) {
    return this.service.createSwapRequest(req.user.id, body);
  }

  @Get('swap-requests')
  getMySwapRequests(@Request() req: any) {
    return this.service.getMySwapRequests(req.user.id);
  }

  @Get('swap-requests/pending')
  getPendingSwapRequests(@Request() req: any) {
    return this.service.getPendingSwapRequests(req.user.id);
  }

  @Put('swap-requests/:id/respond')
  respondToSwapRequest(
    @Request() req: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { approved: boolean; note?: string },
  ) {
    return this.service.respondToSwapRequest(req.user.id, id, body.approved, body.note);
  }

  @Put('swap-requests/:id/cancel')
  cancelSwapRequest(
    @Request() req: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.cancelSwapRequest(req.user.id, id);
  }

  // === LEAVE REQUESTS ===
  @Post('leave-requests')
  createLeaveRequest(
    @Request() req: any,
    @Body() body: { type: LeaveType; startDate: string; endDate: string; reason: string; attachment?: string },
  ) {
    return this.service.createLeaveRequest(req.user.id, body);
  }

  @Get('leave-requests')
  getMyLeaveRequests(
    @Request() req: any,
    @Query('status') status?: string,
    @Query('year') year?: string,
  ) {
    return this.service.getMyLeaveRequests(req.user.id, {
      status,
      year: year ? Number(year) : undefined,
    });
  }

  @Put('leave-requests/:id/cancel')
  cancelLeaveRequest(
    @Request() req: any,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.service.cancelLeaveRequest(req.user.id, id);
  }
}
