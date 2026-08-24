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

export enum LiveSessionStatus {
  SCHEDULED = 'scheduled',
  LIVE = 'live',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity('live_sessions')
export class LiveSession {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { eager: true })
  @JoinColumn({ name: 'hostId' })
  host: Employee;

  @Column()
  hostId: number;

  @ManyToOne(() => Studio, { nullable: true, eager: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @Column()
  title: string;

  @Column({ default: 'Shopee Live' })
  platform: string;

  @Column({ type: 'datetime' })
  startTime: Date;

  @Column({ type: 'datetime', nullable: true })
  endTime: Date;

  @Column({ default: 0 })
  durationMinutes: number;

  @Column({ type: 'text', default: LiveSessionStatus.SCHEDULED })
  status: LiveSessionStatus;

  @Column({ default: 0 })
  totalViewers: number;

  @Column({ default: 0 })
  peakViewers: number;

  @Column({ default: 0 })
  averageViewers: number;

  @Column({ default: 0 })
  totalProductsSold: number;

  @Column({ default: 0 })
  totalOrders: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  totalRevenue: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  totalCommission: number;

  @Column({ default: 0 })
  totalLikes: number;

  @Column({ default: 0 })
  totalComments: number;

  @Column({ default: 0 })
  totalShares: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  engagementRate: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  conversionRate: number;

  @Column({ default: false })
  hostPresent: boolean;

  @Column({ type: 'datetime', nullable: true })
  hostCheckIn: Date;

  @Column({ default: 0 })
  hostLateMinutes: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
