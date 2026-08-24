import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { StudiosService } from './studios.service';
import { Studio } from '../entities/studio.entity';

@Controller('studios')
export class StudiosController {
  constructor(private readonly studiosService: StudiosService) {}

  @Get()
  findAll() {
    return this.studiosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studiosService.findOne(id);
  }

  @Post()
  create(@Body() data: Partial<Studio>) {
    return this.studiosService.create(data);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() data: Partial<Studio>) {
    return this.studiosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studiosService.remove(id);
  }

  @Get(':id/employees')
  getEmployees(@Param('id', ParseIntPipe) id: number) {
    return this.studiosService.getEmployees(id);
  }

  @Post(':id/employees/:employeeId')
  assignEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Param('employeeId', ParseIntPipe) employeeId: number,
  ) {
    return this.studiosService.assignEmployee(id, employeeId);
  }

  @Delete(':id/employees/:employeeId')
  removeEmployee(
    @Param('id', ParseIntPipe) id: number,
    @Param('employeeId', ParseIntPipe) employeeId: number,
  ) {
    return this.studiosService.removeEmployee(id, employeeId);
  }
}
