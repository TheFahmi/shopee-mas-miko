import {
  Controller, Get, Post, Put, Delete,
  Query, Body, Param, UseGuards, ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PayrollService } from './payroll.service';

@Controller('payroll')
@UseGuards(AuthGuard('jwt'))
export class PayrollController {
  constructor(private readonly service: PayrollService) {}

  @Get()
  findAll(
    @Query('employeeId') employeeId?: number,
    @Query('year') year?: number,
    @Query('month') month?: number,
    @Query('status') status?: string,
    @Query('studioId') studioId?: number,
  ) {
    return this.service.findAll({ employeeId, year, month, status, studioId });
  }

  @Get('summary')
  getSummary(
    @Query('year') year: number,
    @Query('month') month: number,
    @Query('studioId') studioId?: number,
  ) {
    return this.service.getSummary(year, month, studioId);
  }

  @Get('report/:year')
  getReport(@Param('year', ParseIntPipe) year: number, @Query('studioId') studioId?: number) {
    return this.service.getReport(year, studioId);
  }

  @Post('generate')
  generate(@Body() body: { year: number; month: number; employeeId?: number; studioId?: number }) {
    return this.service.generate(body.year, body.month, body.employeeId, body.studioId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
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
