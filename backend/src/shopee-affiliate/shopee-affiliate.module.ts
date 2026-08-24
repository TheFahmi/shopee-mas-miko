import { Module } from '@nestjs/common';
import { ShopeeCookiesModule } from '../shopee-cookies/shopee-cookies.module';
import { ShopeeAffiliateService } from './shopee-affiliate.service';
import { ShopeeAffiliateController } from './shopee-affiliate.controller';

@Module({
  imports: [ShopeeCookiesModule],
  controllers: [ShopeeAffiliateController],
  providers: [ShopeeAffiliateService],
  exports: [ShopeeAffiliateService],
})
export class ShopeeAffiliateModule {}
