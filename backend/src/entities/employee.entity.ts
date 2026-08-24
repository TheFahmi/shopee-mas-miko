import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum EmployeeStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  ON_LEAVE = 'on_leave',
}

export enum EmployeePosition {
  HOST = 'host',
  ADMIN = 'admin',
  HRD = 'hrd',
  MANAGER = 'manager',
  STAFF = 'staff',
}

export enum EmploymentType {
  PERMANENT = 'permanent',
  FREELANCE = 'freelance',
}

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, { nullable: true, eager: true })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ nullable: true })
  userId: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'text', default: EmployeePosition.HOST })
  position: EmployeePosition;

  @Column({ type: 'text', default: EmployeeStatus.ACTIVE })
  status: EmployeeStatus;

  @Column({ type: 'text', default: EmploymentType.PERMANENT })
  employmentType: EmploymentType;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  baseSalary: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  transportAllowance: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  mealAllowance: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  otherAllowance: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  commissionRate: number;

  @Column({ type: 'date', nullable: true })
  joinDate: Date;

  @Column({ nullable: true })
  bankName: string;

  @Column({ nullable: true })
  bankAccount: string;

  @Column({ nullable: true })
  bankAccountName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  toJSON() {
    return this;
  }

  toFullJSON() {
    return this;
  }
}
