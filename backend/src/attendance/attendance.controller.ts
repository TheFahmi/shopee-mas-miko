import {
  Controller, Get, Post, Put, Delete,
  Query, Body, Param, UseGuards, ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AttendanceService } from './attendance.service';

@Controller('attendance')
@UseGuards(AuthGuard('jwt'))
export class AttendanceController {
  constructor(private readonly service: AttendanceService) {}

  @Get()
  findAll(
    @Query('employeeId') employeeId?: number,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('status') status?: string,
    @Query('studioId') studioId?: number,
  ) {
    return this.service.findAll({ employeeId, startDate, endDate, status, studioId });
  }

  @Get('daily/:date')
  getDaily(@Param('date') date: string, @Query('studioId') studioId?: number) {
    return this.service.getDaily(date, studioId);
  }

  @Get('monthly/:employeeId')
  getMonthly(
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @Query('year') year: number,
    @Query('month') month: number,
  ) {
    return this.service.getMonthly(employeeId, year, month);
  }

  @Get('today/:employeeId')
  getTodayStatus(@Param('employeeId', ParseIntPipe) employeeId: number) {
    return this.service.getTodayStatus(employeeId);
  }

  @Get('photo/:id/:type')
  getPhoto(
    @Param('id', ParseIntPipe) id: number,
    @Param('type') type: 'checkin' | 'checkout',
  ) {
    return this.service.getPhoto(id, type);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Post('check-in')
  checkIn(@Body() body: {
    employeeId: number;
    lat?: number;
    lng?: number;
    address?: string;
    photo?: string;
  }) {
    return this.service.checkIn(body);
  }

  @Post('check-out')
  checkOut(@Body() body: {
    employeeId: number;
    lat?: number;
    lng?: number;
    address?: string;
    photo?: string;
  }) {
    return this.service.checkOut(body);
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
