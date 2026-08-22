import { Module } from '@nestjs/common';
import { ShopeeCookiesModule } from '../shopee-cookies/shopee-cookies.module';
import { ShopeeCreatorService } from './shopee-creator.service';
import { ShopeeCreatorController } from './shopee-creator.controller';

@Module({
  imports: [ShopeeCookiesModule],
  controllers: [ShopeeCreatorController],
  providers: [ShopeeCreatorService],
  exports: [ShopeeCreatorService],
})
export class ShopeeCreatorModule {}
