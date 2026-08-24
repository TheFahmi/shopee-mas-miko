import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('live_schedules')
export class LiveSchedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  dayOfWeek: number;

  @Column()
  startHour: number;

  @Column()
  endHour: number;

  @Column({ nullable: true })
  cookieId: number | null;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity('live_snapshots')
export class LiveSnapshot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  snapshotDate: string;

  @Column({ default: 0 })
  slot: number;

  @Column({ default: '' })
  slotLabel: string;

  @Column({ default: 0 })
  sessionId: number;

  @Column({ default: '' })
  title: string;

  @Column({ nullable: true })
  hostId: number | null;

  @Column({ default: 0 })
  startTime: number;

  @Column({ default: 0 })
  status: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  conversionRate: number;

  @Column({ default: 0 })
  views: number;

  @Column({ default: 0 })
  viewers: number;

  @Column({ default: 0 })
  peakViewers: number;

  @Column({ default: 0 })
  likes: number;

  @Column({ default: 0 })
  comments: number;

  @Column({ default: 0 })
  atc: number;

  @Column({ default: 0 })
  productClicks: number;

  @Column({ default: 0 })
  placedOrders: number;

  @Column({ default: 0 })
  confirmedOrders: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  placedSales: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  confirmedSales: number;

  @Column({ default: 0 })
  followersGrowth: number;

  @Column({ default: 0 })
  avgViewsDuration: number;

  @Column({ type: 'text', nullable: true })
  rawData: string;

  @Column({ nullable: true })
  cookieId: number | null;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
