import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Employee } from '../entities/employee.entity';
import { User, UserRole } from '../entities/user.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private repo: Repository<Employee>,
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async findAll(filters?: { position?: string; status?: string; search?: string }) {
    const where: any = {};
    if (filters?.position) where.position = filters.position;
    if (filters?.status) where.status = filters.status;
    if (filters?.search) where.name = Like(`%${filters.search}%`);
    return this.repo.find({ where, order: { name: 'ASC' }, relations: ['user'] });
  }

  async findAllFull(filters?: { position?: string; status?: string; search?: string }) {
    const employees = await this.findAll(filters);
    return employees.map(e => e.toFullJSON());
  }

  async findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['user'] });
  }

  async findOneFull(id: number) {
    const employee = await this.findOne(id);
    return employee ? employee.toFullJSON() : null;
  }

  async getSummary() {
    const all = await this.repo.find();
    const byPosition: Record<string, number> = {};
    const byStatus: Record<string, number> = {};
    for (const e of all) {
      byPosition[e.position] = (byPosition[e.position] || 0) + 1;
      byStatus[e.status] = (byStatus[e.status] || 0) + 1;
    }
    return { total: all.length, byPosition, byStatus };
  }

  async create(data: Partial<Employee>) {
    const employee = this.repo.create(data);
    return this.repo.save(employee);
  }

  async update(id: number, data: Partial<Employee>) {
    await this.repo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.repo.delete(id);
    return { message: 'Employee deleted' };
  }

  async createAccount(employeeId: number, data: { email: string; password: string }) {
    const employee = await this.repo.findOne({ where: { id: employeeId } });
    if (!employee) {
      throw new NotFoundException('Karyawan tidak ditemukan');
    }

    if (employee.userId) {
      throw new ConflictException('Karyawan sudah memiliki akun');
    }

    const existingUser = await this.usersRepo.findOne({ where: { email: data.email } });
    if (existingUser) {
      throw new ConflictException('Email sudah digunakan');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.usersRepo.save({
      email: data.email,
      password: hashedPassword,
      name: employee.name,
      role: UserRole.EMPLOYEE,
    });

    employee.userId = user.id;
    await this.repo.save(employee);

    return this.findOne(employeeId);
  }
}
