import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LiveSnapshot } from '../entities/live-snapshot.entity';
import { SnapshotService } from './snapshot.service';
import { SnapshotController } from './snapshot.controller';
import { ShopeeCookiesModule } from '../shopee-cookies/shopee-cookies.module';
import { ShopeeCreatorModule } from '../shopee-creator/shopee-creator.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LiveSnapshot]),
    ShopeeCookiesModule,
    ShopeeCreatorModule,
  ],
  controllers: [SnapshotController],
  providers: [SnapshotService],
  exports: [SnapshotService],
})
export class SnapshotModule {}
