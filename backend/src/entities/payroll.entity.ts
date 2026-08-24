import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from './employee.entity';
import { Studio } from './studio.entity';

export enum PayrollStatus {
  DRAFT = 'draft',
  CALCULATED = 'calculated',
  APPROVED = 'approved',
  PAID = 'paid',
  CANCELLED = 'cancelled',
}

@Entity('payrolls')
export class Payroll {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { eager: true })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @Column()
  employeeId: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number | null;

  @Column()
  period: string;

  @Column()
  year: number;

  @Column()
  month: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  baseSalary: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  transportAllowance: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  mealAllowance: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  otherAllowance: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  overtimePay: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  commission: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  bonus: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  absenceDeduction: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  lateDeduction: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  otherDeduction: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  totalEarnings: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  totalDeductions: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  netSalary: number;

  @Column({ default: 0 })
  totalWorkDays: number;

  @Column({ default: 0 })
  totalPresent: number;

  @Column({ default: 0 })
  totalAbsent: number;

  @Column({ default: 0 })
  totalLate: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  totalOvertimeHours: number;

  @Column({ type: 'text', default: PayrollStatus.DRAFT })
  status: PayrollStatus;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ nullable: true })
  approvedBy: string;

  @Column({ type: 'datetime', nullable: true })
  approvedAt: Date;

  @Column({ type: 'datetime', nullable: true })
  paidAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
