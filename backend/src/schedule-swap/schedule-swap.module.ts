import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleSwapController } from './schedule-swap.controller';
import { ScheduleSwapService } from './schedule-swap.service';
import { ScheduleSwapRequest } from '../entities/schedule-swap.entity';
import { Schedule } from '../entities/schedule.entity';
import { Employee } from '../entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ScheduleSwapRequest, Schedule, Employee])],
  controllers: [ScheduleSwapController],
  providers: [ScheduleSwapService],
  exports: [ScheduleSwapService],
})
export class ScheduleSwapModule {}
