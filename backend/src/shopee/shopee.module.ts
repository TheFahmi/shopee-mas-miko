import { Module } from '@nestjs/common';
import { ShopeeApiService } from './shopee-api.service';
import { ShopeeController } from './shopee.controller';

@Module({
  controllers: [ShopeeController],
  providers: [ShopeeApiService],
  exports: [ShopeeApiService],
})
export class ShopeeModule {}
