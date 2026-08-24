import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { User } from './user.entity';
import { Studio } from './studio.entity';

export enum TrafficSource {
  LIVE = 'live',
  VIDEO = 'video',
  SOCIAL_MEDIA = 'social_media',
  DIRECT = 'direct',
  SEARCH = 'search',
  OTHER = 'other',
}

export enum TransactionStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product, (product) => product.transactions, { eager: true })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column()
  productId: number;

  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column()
  userId: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @Column({ default: 1 })
  quantity: number;

  @Column('decimal', { precision: 12, scale: 2 })
  totalPrice: number;

  @Column('decimal', { precision: 12, scale: 2 })
  commission: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  gmv: number;

  @Column({ type: 'text', default: TransactionStatus.PENDING })
  status: TransactionStatus;

  @Column({ type: 'text', default: TrafficSource.DIRECT })
  trafficSource: TrafficSource;

  @Column({ type: 'datetime' })
  transactionDate: Date;

  @Column({ default: false })
  isManual: boolean;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'text', nullable: true })
  shopeeOrderId: string;

  @Column({ type: 'text', nullable: true })
  liveSessionId: string;

  @Column({ type: 'text', nullable: true })
  videoId: string;

  @Column({ type: 'text', nullable: true })
  socialPlatform: string;

  @Column({ default: 0 })
  clicks: number;

  @Column({ default: 0 })
  views: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  conversionRate: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
