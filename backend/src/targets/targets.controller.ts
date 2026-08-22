import {
  Controller, Get, Post, Put, Delete,
  Query, Body, Param, UseGuards, ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TargetsService } from './targets.service';

@Controller('targets')
@UseGuards(AuthGuard('jwt'))
export class TargetsController {
  constructor(private readonly service: TargetsService) {}

  @Get()
  findAll(
    @Query('employeeId') employeeId?: number,
    @Query('year') year?: number,
    @Query('month') month?: number,
    @Query('status') status?: string,
    @Query('targetType') targetType?: string,
    @Query('studioId') studioId?: number,
  ) {
    return this.service.findAll({ employeeId, year, month, status, targetType, studioId });
  }

  @Get('stats')
  getStats(
    @Query('year') year?: number,
    @Query('month') month?: number,
    @Query('studioId') studioId?: number,
  ) {
    return this.service.getStats(year, month, studioId);
  }

  @Get('kpi/scores')
  getKpiScores(
    @Query('employeeId') employeeId?: number,
    @Query('year') year?: number,
    @Query('month') month?: number,
    @Query('studioId') studioId?: number,
  ) {
    return this.service.getKpiScores({ employeeId, year, month, studioId });
  }

  @Get('kpi/summary')
  getKpiSummary(
    @Query('year') year?: number,
    @Query('month') month?: number,
    @Query('studioId') studioId?: number,
  ) {
    return this.service.getKpiSummary(year, month, studioId);
  }

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Post('kpi/auto-calculate/:employeeId')
  autoCalculateKpi(@Param('employeeId', ParseIntPipe) employeeId: number) {
    return this.service.autoCalculateKpi(employeeId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.service.update(id, body);
  }

  @Put(':id/progress')
  updateProgress(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { currentValue: number },
  ) {
    return this.service.updateProgress(id, body.currentValue);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
