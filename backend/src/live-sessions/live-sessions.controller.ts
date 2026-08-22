import {
  Controller, Get, Post, Put, Delete,
  Query, Body, Param, UseGuards, ParseIntPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LiveSessionsService } from './live-sessions.service';

@Controller('live-sessions')
@UseGuards(AuthGuard('jwt'))
export class LiveSessionsController {
  constructor(private readonly service: LiveSessionsService) {}

  // Static routes MUST come before :id

  @Get('dashboard')
  getDashboard(@Query('studioId') studioId?: string) {
    return this.service.getDashboard(studioId ? parseInt(studioId) : undefined);
  }

  @Get('chart')
  getChart(@Query('days') days?: string, @Query('studioId') studioId?: string) {
    return this.service.getChart(days ? parseInt(days) : 30, studioId ? parseInt(studioId) : undefined);
  }

  @Get('ranking')
  getRanking(@Query('days') days?: string, @Query('studioId') studioId?: string) {
    return this.service.getRanking(days ? parseInt(days) : 30, studioId ? parseInt(studioId) : undefined);
  }

  @Get('host/:hostId/performance')
  getHostPerformance(
    @Param('hostId', ParseIntPipe) hostId: number,
    @Query('days') days?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getHostPerformance(hostId, days ? parseInt(days) : 30, studioId ? parseInt(studioId) : undefined);
  }

  @Get()
  findAll(
    @Query('hostId') hostId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('status') status?: string,
    @Query('platform') platform?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.findAll({
      hostId: hostId ? parseInt(hostId) : undefined,
      startDate,
      endDate,
      status,
      platform,
      studioId: studioId ? parseInt(studioId) : undefined,
    });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
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
