import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AffiliateMonitoringService } from './affiliate-monitoring.service';

@Controller('affiliate-monitoring')
@UseGuards(AuthGuard('jwt'))
export class AffiliateMonitoringController {
  constructor(private service: AffiliateMonitoringService) {}

  // ==================== DASHBOARD ====================
  @Get('dashboard')
  getDashboard(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getDashboardOverview(startDate, endDate, studioId ? parseInt(studioId) : undefined);
  }
  // ==================== SOLD PRODUCTS ====================
  @Get('sold-products')
  getSoldProducts(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('category') category?: string,
    @Query('sellerId') sellerId?: string,
    @Query('affiliateId') affiliateId?: string,
    @Query('status') status?: string,
    @Query('sort') sort?: string,
    @Query('order') order?: string,
    @Query('page') page?: number,
    @Query('pageSize') pageSize?: number,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getSoldProducts({ startDate, endDate, category, sellerId, affiliateId, status, sort, order, page, pageSize, studioId: studioId ? parseInt(studioId) : undefined });
  }

  @Get('sold-products/stats')
  getSoldProductStats(
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getSoldProductStats(startDate, endDate, studioId ? parseInt(studioId) : undefined);
  }
  @Post('sold-products')
  createSoldProduct(@Body() data: any) {
    return this.service.createSoldProduct(data);
  }

  @Put('sold-products/:id')
  updateSoldProduct(@Param('id') id: number, @Body() data: any) {
    return this.service.updateSoldProduct(id, data);
  }

  @Delete('sold-products/:id')
  deleteSoldProduct(@Param('id') id: number) {
    return this.service.deleteSoldProduct(id);
  }

  // ==================== SELLER RECAP ====================
  @Get('seller-recaps')
  getSellerRecaps(
    @Query('period') period?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('status') status?: string,
    @Query('sort') sort?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getSellerRecaps({ period, startDate, endDate, status, sort, studioId: studioId ? parseInt(studioId) : undefined });
  }

  @Get('seller-recaps/stats')
  getSellerRecapStats(@Query('studioId') studioId?: string) {
    return this.service.getSellerRecapStats(studioId ? parseInt(studioId) : undefined);
  }
  @Post('seller-recaps')
  createSellerRecap(@Body() data: any) {
    return this.service.createSellerRecap(data);
  }

  @Put('seller-recaps/:id')
  updateSellerRecap(@Param('id') id: number, @Body() data: any) {
    return this.service.updateSellerRecap(id, data);
  }

  @Delete('seller-recaps/:id')
  deleteSellerRecap(@Param('id') id: number) {
    return this.service.deleteSellerRecap(id);
  }

  // ==================== SELLERS (Master Data) ====================
  @Get('sellers')
  getSellers(
    @Query('status') status?: string,
    @Query('search') search?: string,
  ) {
    return this.service.getSellers({ status, search });
  }

  @Post('sellers')
  createSeller(@Body() data: any) {
    return this.service.createSeller(data);
  }

  @Put('sellers/:id')
  updateSeller(@Param('id') id: number, @Body() data: any) {
    return this.service.updateSeller(id, data);
  }

  @Delete('sellers/:id')
  deleteSeller(@Param('id') id: number) {
    return this.service.deleteSeller(id);
  }

  // ==================== AFFILIATE COMMISSIONS ====================
  @Get('commissions')
  getAffiliateCommissions(
    @Query('period') period?: string,
    @Query('paymentStatus') paymentStatus?: string,
    @Query('affiliateId') affiliateId?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getAffiliateCommissions({ period, paymentStatus, affiliateId, startDate, endDate, studioId: studioId ? parseInt(studioId) : undefined });
  }

  @Get('commissions/stats')
  getAffiliateCommissionStats(@Query('studioId') studioId?: string) {
    return this.service.getAffiliateCommissionStats(studioId ? parseInt(studioId) : undefined);
  }
  @Post('commissions')
  createAffiliateCommission(@Body() data: any) {
    return this.service.createAffiliateCommission(data);
  }

  @Put('commissions/:id')
  updateAffiliateCommission(@Param('id') id: number, @Body() data: any) {
    return this.service.updateAffiliateCommission(id, data);
  }

  @Delete('commissions/:id')
  deleteAffiliateCommission(@Param('id') id: number) {
    return this.service.deleteAffiliateCommission(id);
  }

  // ==================== ALERTS ====================
  @Get('alerts')
  getAlerts(
    @Query('isRead') isRead?: string,
    @Query('severity') severity?: string,
    @Query('alertType') alertType?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.getAlerts({
      isRead: isRead !== undefined ? isRead === 'true' : undefined,
      severity,
      alertType,
      studioId: studioId ? parseInt(studioId) : undefined,
    });
  }

  @Put('alerts/:id/read')
  markAlertRead(@Param('id') id: number) {
    return this.service.markAlertRead(id);
  }

  @Put('alerts/read-all')
  markAllAlertsRead() {
    return this.service.markAllAlertsRead();
  }

  @Delete('alerts/:id')
  deleteAlert(@Param('id') id: number) {
    return this.service.deleteAlert(id);
  }

  // ==================== ACCESS CONFIG ====================
  @Get('access-configs')
  getAccessConfigs() {
    return this.service.getAccessConfigs();
  }

  @Get('access-configs/:userId')
  getAccessConfig(@Param('userId') userId: number) {
    return this.service.getAccessConfig(userId);
  }

  @Put('access-configs/:userId')
  upsertAccessConfig(@Param('userId') userId: number, @Body() data: any) {
    return this.service.upsertAccessConfig(userId, data);
  }

  @Delete('access-configs/:userId')
  deleteAccessConfig(@Param('userId') userId: number) {
    return this.service.deleteAccessConfig(userId);
  }

  // ==================== EXPORT (JSON for client-side XLSX processing) ====================
  @Get('export/sold-products')
  exportSoldProducts(
    @Query('format') format: string = 'json',
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('studioId') studioId?: string,
  ) {
    return this.service.exportSoldProducts(format, startDate, endDate, studioId ? parseInt(studioId) : undefined);
  }
  @Get('export/seller-recaps')
  exportSellerRecaps(
    @Query('format') format: string = 'json',
    @Query('studioId') studioId?: string,
  ) {
    return this.service.exportSellerRecaps(format, studioId ? parseInt(studioId) : undefined);
  }
  @Get('export/commissions')
  exportCommissions(
    @Query('format') format: string = 'json',
    @Query('studioId') studioId?: string,
  ) {
    return this.service.exportAffiliateCommissions(format, studioId ? parseInt(studioId) : undefined);
  }
}
