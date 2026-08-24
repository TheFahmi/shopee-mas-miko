import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopeeCookie } from '../entities/shopee-cookie.entity';
import { ShopeeCookiesService } from './shopee-cookies.service';
import { ShopeeCookiesController } from './shopee-cookies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShopeeCookie])],
  controllers: [ShopeeCookiesController],
  providers: [ShopeeCookiesService],
  exports: [ShopeeCookiesService],
})
export class ShopeeCookiesModule {}
