import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Target, KpiScore } from '../entities/target-kpi.entity';
import { Employee } from '../entities/employee.entity';
import { Attendance } from '../entities/attendance.entity';
import { TargetsService } from './targets.service';
import { TargetsController } from './targets.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Target, KpiScore, Employee, Attendance])],
  controllers: [TargetsController],
  providers: [TargetsService],
  exports: [TargetsService],
})
export class TargetsModule {}
