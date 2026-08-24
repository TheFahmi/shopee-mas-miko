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

export enum TargetType {
  REVENUE = 'revenue',
  ORDERS = 'orders',
  PRODUCTS_SOLD = 'products_sold',
  LIVE_SESSIONS = 'live_sessions',
  LIVE_REVENUE = 'live_revenue',
  VIEWERS = 'viewers',
  ATTENDANCE = 'attendance',
  COMMISSION = 'commission',
}

export enum TargetPeriod {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly',
}

export enum TargetStatus {
  ACTIVE = 'active',
  ACHIEVED = 'achieved',
  MISSED = 'missed',
  CANCELLED = 'cancelled',
}

@Entity('targets')
export class Target {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  employeeId: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @ManyToOne(() => Employee, { nullable: true })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @Column()
  name: string;

  @Column({ type: 'text', default: TargetType.REVENUE })
  targetType: TargetType;

  @Column({ type: 'text', default: TargetPeriod.MONTHLY })
  period: TargetPeriod;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  targetValue: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  currentValue: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  progressPercent: number;

  @Column({ type: 'text', default: TargetStatus.ACTIVE })
  status: TargetStatus;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  month: number;

  @Column({ nullable: true })
  week: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  bonusAmount: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity('kpi_scores')
export class KpiScore {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @ManyToOne(() => Employee, { eager: true })
  @JoinColumn({ name: 'employeeId' })
  employee: Employee;

  @Column()
  year: number;

  @Column()
  month: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  attendanceScore: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  revenueScore: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  targetScore: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  livePerformanceScore: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  overallScore: number;

  @Column({ default: 'B' })
  grade: string;

  @Column({ type: 'text', nullable: true })
  review: string;

  @Column({ nullable: true })
  reviewedBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
