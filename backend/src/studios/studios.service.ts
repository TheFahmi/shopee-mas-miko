import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Studio, EmployeeStudio } from '../entities/studio.entity';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class StudiosService {
  constructor(
    @InjectRepository(Studio)
    private readonly studioRepo: Repository<Studio>,
    @InjectRepository(EmployeeStudio)
    private readonly employeeStudioRepo: Repository<EmployeeStudio>,
    @InjectRepository(Employee)
    private readonly employeeRepo: Repository<Employee>,
  ) {}

  async findAll() {
    const studios = await this.studioRepo.find({ order: { name: 'ASC' } });
    const counts = await this.employeeStudioRepo
      .createQueryBuilder('es')
      .select('es.studioId', 'studioId')
      .addSelect('COUNT(*)', 'count')
      .groupBy('es.studioId')
      .getRawMany();
    const countMap = new Map(counts.map((c) => [c.studioId, Number(c.count)]));
    return studios.map((s) => ({ ...s, employeeCount: countMap.get(s.id) || 0 }));
  }

  async findOne(id: number) {
    const studio = await this.studioRepo.findOne({ where: { id } });
    if (!studio) {
      throw new NotFoundException(`Studio #${id} not found`);
    }
    const assignments = await this.employeeStudioRepo.find({ where: { studioId: id } });
    const employeeIds = assignments.map((a) => a.employeeId);
    let employees: Employee[] = [];
    if (employeeIds.length > 0) {
      employees = await this.employeeRepo
        .createQueryBuilder('e')
        .where('e.id IN (:...ids)', { ids: employeeIds })
        .orderBy('e.name', 'ASC')
        .getMany();
    }
    return { ...studio, employees };
  }

  async create(data: Partial<Studio>) {
    const studio = this.studioRepo.create(data);
    return this.studioRepo.save(studio);
  }

  async update(id: number, data: Partial<Studio>) {
    await this.findOne(id);
    await this.studioRepo.update(id, data);
    return this.studioRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.employeeStudioRepo.delete({ studioId: id });
    await this.studioRepo.delete(id);
    return { message: 'Studio deleted' };
  }

  async getEmployees(studioId: number) {
    const assignments = await this.employeeStudioRepo.find({ where: { studioId } });
    const employeeIds = assignments.map((a) => a.employeeId);
    if (employeeIds.length === 0) return [];
    return this.employeeRepo
      .createQueryBuilder('e')
      .where('e.id IN (:...ids)', { ids: employeeIds })
      .orderBy('e.name', 'ASC')
      .getMany();
  }

  async assignEmployee(studioId: number, employeeId: number) {
    const studio = await this.studioRepo.findOne({ where: { id: studioId } });
    if (!studio) {
      throw new NotFoundException(`Studio #${studioId} not found`);
    }
    const employee = await this.employeeRepo.findOne({ where: { id: employeeId } });
    if (!employee) {
      throw new NotFoundException(`Employee #${employeeId} not found`);
    }
    const existing = await this.employeeStudioRepo.findOne({
      where: { studioId, employeeId },
    });
    if (existing) {
      throw new BadRequestException('Employee is already assigned to this studio');
    }
    const assignment = this.employeeStudioRepo.create({ studioId, employeeId });
    return this.employeeStudioRepo.save(assignment);
  }

  async removeEmployee(studioId: number, employeeId: number) {
    await this.employeeStudioRepo.delete({ studioId, employeeId });
    return { message: 'Employee removed from studio' };
  }
}
