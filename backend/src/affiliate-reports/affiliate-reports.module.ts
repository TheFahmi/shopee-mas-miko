import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AffiliateReportsController } from './affiliate-reports.controller';
import { AffiliateReportsService } from './affiliate-reports.service';
import {
  AffiliateProduct,
  AffiliateCommission,
  AffiliateLiveReport,
  AffiliateVideoReport,
  AffiliateSocialReport,
} from '../entities/affiliate-report.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AffiliateProduct,
      AffiliateCommission,
      AffiliateLiveReport,
      AffiliateVideoReport,
      AffiliateSocialReport,
    ]),
  ],
  controllers: [AffiliateReportsController],
  providers: [AffiliateReportsService],
  exports: [AffiliateReportsService],
})
export class AffiliateReportsModule {}
