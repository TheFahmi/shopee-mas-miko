import { TypeOrmModule } from '@nestjs/typeorm';
import { AffiliateMonitoringController } from './affiliate-monitoring.controller';
import { AffiliateMonitoringService } from './affiliate-monitoring.service';
import {
  MonitoringSoldProduct,
  MonitoringSellerRecap,
  MonitoringAffiliateCommission,
  MonitoringCommissionAlert,
  MonitoringAccessConfig,
} from '../entities/affiliate-monitoring.entity';
import { Seller } from '../entities/seller.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MonitoringSoldProduct,
      MonitoringSellerRecap,
      MonitoringAffiliateCommission,
      MonitoringCommissionAlert,
      MonitoringAccessConfig,
      Seller,
    ]),
  ],
  controllers: [AffiliateMonitoringController],
  providers: [AffiliateMonitoringService],
  exports: [AffiliateMonitoringService],
})
export class AffiliateMonitoringModule {}
