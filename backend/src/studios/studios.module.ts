import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Studio, EmployeeStudio } from '../entities/studio.entity';
import { Employee } from '../entities/employee.entity';
import { StudiosService } from './studios.service';
import { StudiosController } from './studios.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Studio, EmployeeStudio, Employee])],
  controllers: [StudiosController],
  providers: [StudiosService],
  exports: [StudiosService],
})
export class StudiosModule {}
