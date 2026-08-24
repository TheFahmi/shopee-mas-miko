import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ScheduleService } from './schedule.service';
import { Schedule } from '../entities/schedule.entity';

@Controller('schedule')
@UseGuards(AuthGuard('jwt'))
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  findAll(
    @Query('employeeId') employeeId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.scheduleService.findAll({
      employeeId: employeeId ? parseInt(employeeId) : undefined,
      startDate,
      endDate,
      studioId: studioId ? parseInt(studioId) : undefined,
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.scheduleService.findOne(id);
  }

  @Get('employee/:employeeId')
  getEmployeeSchedule(
    @Param('employeeId', ParseIntPipe) employeeId: number,
    @Query('year') year?: string,
    @Query('month') month?: string,
  ) {
    const y = year ? parseInt(year) : new Date().getFullYear();
    const m = month ? parseInt(month) : new Date().getMonth() + 1;
    return this.scheduleService.getEmployeeSchedule(employeeId, y, m);
  }

  @Post()
  create(@Body() data: Partial<Schedule>) {
    return this.scheduleService.create(data);
  }

  @Post('bulk')
  bulkCreate(@Body() items: Partial<Schedule>[]) {
    return this.scheduleService.bulkCreate(items);
  }

  @Post('generate')
  generate(
    @Body('year') year: number,
    @Body('month') month: number,
    @Body('studioId') studioId?: number,
    @Body('clearExisting') clearExisting?: boolean,
  ) {
    return this.scheduleService.generate(year, month, { clearExisting, studioId });
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Schedule>) {
    return this.scheduleService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.scheduleService.remove(id);
  }
}
