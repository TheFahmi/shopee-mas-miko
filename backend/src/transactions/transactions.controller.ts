import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';

@Controller('transactions')
@UseGuards(AuthGuard('jwt'))
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  // Admin sees all transactions; other roles see only their own
  private getUserIdFilter(req: any): number | undefined {
    return req.user.role === 'admin' ? undefined : req.user.id;
  }

  @Get()
  findAll(
    @Request() req,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('status') status?: string,
    @Query('productId') productId?: string,
    @Query('trafficSource') trafficSource?: string,
    @Query('isManual') isManual?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.transactionsService.findAll(this.getUserIdFilter(req), {
      startDate,
      endDate,
      status,
      productId: productId ? parseInt(productId) : undefined,
      trafficSource: trafficSource || undefined,
      isManual: isManual !== undefined ? isManual === 'true' : undefined,
      studioId: studioId ? parseInt(studioId) : undefined,
    });
  }

  @Get('dashboard')
  getDashboardStats(@Request() req, @Query('studioId') studioId?: string) {
    return this.transactionsService.getDashboardStats(this.getUserIdFilter(req), studioId ? parseInt(studioId) : undefined);
  }
  @Get('chart')
  getRevenueChart(
    @Request() req,
    @Query('period') period: 'daily' | 'weekly' | 'monthly' = 'daily',
    @Query('days') days?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.transactionsService.getRevenueChart(this.getUserIdFilter(req), period, days ? parseInt(days) : 30, studioId ? parseInt(studioId) : undefined);
  }
  @Get('top-products')
  getTopProducts(@Request() req, @Query('limit') limit?: string, @Query('studioId') studioId?: string) {
    return this.transactionsService.getTopProducts(this.getUserIdFilter(req), limit ? parseInt(limit) : 10, studioId ? parseInt(studioId) : undefined);
  }
  @Get('report/:type')
  getReport(@Request() req, @Param('type') type: 'daily' | 'weekly' | 'monthly', @Query('studioId') studioId?: string) {
    return this.transactionsService.getReport(this.getUserIdFilter(req), type, studioId ? parseInt(studioId) : undefined);
  }
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.transactionsService.findOne(id);
  }

  @Post()
  create(@Request() req, @Body() dto: CreateTransactionDto) {
    return this.transactionsService.create(req.user.id, dto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateTransactionDto) {
    return this.transactionsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.transactionsService.remove(id);
  }
}
