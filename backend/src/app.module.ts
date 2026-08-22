import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule as NestScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './auth/auth.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { TransactionsModule } from './transactions/transactions.module';
import { EventsModule } from './events/events.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { ShopeeModule } from './shopee/shopee.module';
import { ShopeeCreatorModule } from './shopee-creator/shopee-creator.module';
import { ShopeeAffiliateModule } from './shopee-affiliate/shopee-affiliate.module';
import { ShopeeCookiesModule } from './shopee-cookies/shopee-cookies.module';
import { SnapshotModule } from './snapshots/snapshot.module';
import { EmployeesModule } from './employees/employees.module';
import { LiveSessionsModule } from './live-sessions/live-sessions.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ScheduleModule } from './schedule/schedule.module';
import { EmployeePortalModule } from './employee-portal/employee-portal.module';
import { AffiliateReportsModule } from './affiliate-reports/affiliate-reports.module';
import { AffiliateMonitoringModule } from './affiliate-monitoring/affiliate-monitoring.module';
import { PayrollModule } from './payroll/payroll.module';
import { TargetsModule } from './targets/targets.module';
import { StudiosModule } from './studios/studios.module';
import { SeedService } from './seed.service';
import { User, Category, Product, Transaction } from './entities';
import {
  AffiliateProduct,
  AffiliateCommission,
  AffiliateLiveReport,
  AffiliateVideoReport,
  AffiliateSocialReport,
} from './entities/affiliate-report.entity';
import { Employee } from './entities/employee.entity';
import { Attendance } from './entities/attendance.entity';
import { LiveSession } from './entities/live-session.entity';
import { ShopeeCookie } from './entities/shopee-cookie.entity';
import { LiveSnapshot } from './entities/live-snapshot.entity';
import { Schedule } from './entities/schedule.entity';
import { Payroll } from './entities/payroll.entity';
import { Target, KpiScore } from './entities/target-kpi.entity';
import { Seller } from './entities/seller.entity';
import { Studio, EmployeeStudio } from './entities/studio.entity';
import {
  MonitoringSoldProduct,
  MonitoringSellerRecap,
  MonitoringAffiliateCommission,
  MonitoringCommissionAlert,
  MonitoringAccessConfig,
} from './entities/affiliate-monitoring.entity';
import { ScheduleSwapRequest } from './entities/schedule-swap.entity';
import { ScheduleSwapModule } from './schedule-swap/schedule-swap.module';
import { LeaveRequest } from './entities/leave-request.entity';
import { LeaveRequestModule } from './leave-request/leave-request.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'shopee-affiliate.db',
      entities: [User, Category, Product, Transaction, Employee, Attendance, LiveSession, ShopeeCookie, LiveSnapshot, Schedule, Payroll, AffiliateProduct, AffiliateCommission, AffiliateLiveReport, AffiliateVideoReport, AffiliateSocialReport, Seller, MonitoringSoldProduct, MonitoringSellerRecap, MonitoringAffiliateCommission, MonitoringCommissionAlert, MonitoringAccessConfig, Target, KpiScore, Studio, EmployeeStudio, ScheduleSwapRequest, LeaveRequest],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Category, Product, Transaction, Employee, Attendance, LiveSession, ShopeeCookie, LiveSnapshot, Schedule, Payroll, Seller, MonitoringSoldProduct, MonitoringSellerRecap, MonitoringAffiliateCommission, MonitoringCommissionAlert, MonitoringAccessConfig, Target, KpiScore, Studio, EmployeeStudio, ScheduleSwapRequest, LeaveRequest]),
    NestScheduleModule.forRoot(),
    AuthModule,
    CategoriesModule,
    ProductsModule,
    TransactionsModule,
    EventsModule,
    SchedulerModule,
    ShopeeModule,
    ShopeeCreatorModule,
    ShopeeAffiliateModule,
    ShopeeCookiesModule,
    SnapshotModule,
    EmployeesModule,
    LiveSessionsModule,
    AttendanceModule,
    ScheduleModule,
    PayrollModule,
    TargetsModule,
    StudiosModule,
    EmployeePortalModule,
    AffiliateReportsModule,
    AffiliateMonitoringModule,
    ScheduleSwapModule,
    LeaveRequestModule,
  ],
  providers: [SeedService],
})
export class AppModule implements OnModuleInit {
  constructor(private seedService: SeedService) {}

  async onModuleInit() {
    await this.seedService.seed();
  }
}
