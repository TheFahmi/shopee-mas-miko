import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeePortalController } from './employee-portal.controller';
import { EmployeePortalService } from './employee-portal.service';
import { Employee } from '../entities/employee.entity';
import { Attendance } from '../entities/attendance.entity';
import { Payroll } from '../entities/payroll.entity';
import { Schedule } from '../entities/schedule.entity';
import { ScheduleSwapModule } from '../schedule-swap/schedule-swap.module';
import { LeaveRequestModule } from '../leave-request/leave-request.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee, Attendance, Payroll, Schedule]),
    ScheduleSwapModule,
    LeaveRequestModule,
  ],
  controllers: [EmployeePortalController],
  providers: [EmployeePortalService],
})
export class EmployeePortalModule {}
