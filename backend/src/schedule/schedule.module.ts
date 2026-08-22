import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { Schedule } from '../entities/schedule.entity';
import { Employee } from '../entities/employee.entity';
import { EmployeeStudio } from '../entities/studio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Schedule, Employee, EmployeeStudio])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
  exports: [ScheduleService],
})
export class ScheduleModule {}
