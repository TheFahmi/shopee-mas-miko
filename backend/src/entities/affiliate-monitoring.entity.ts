import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Studio } from './studio.entity';

@Entity('monitoring_sold_products')
export class MonitoringSoldProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @Column()
  productName: string;

  @Column({ default: '' })
  productId: string;

  @Column({ default: '' })
  sellerId: string;

  @Column({ default: '' })
  sellerName: string;

  @Column({ default: '' })
  category: string;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  price: number;

  @Column({ default: 0 })
  quantitySold: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  totalRevenue: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  commissionRate: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  commissionAmount: number;

  @Column({ nullable: true })
  affiliateId: string;

  @Column({ nullable: true })
  affiliateName: string;

  @Column({ type: 'datetime', nullable: true })
  transactionDate: Date;

  @Column({ default: 'live' })
  trafficSource: string;

  @Column({ default: 'COMPLETED' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity('monitoring_seller_recaps')
export class MonitoringSellerRecap {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  studioId: number;

  @Column()
  sellerId: string;

  @Column()
  sellerName: string;

  @Column({ default: '' })
  category: string;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  totalRevenue: number;

  @Column({ default: 0 })
  totalOrders: number;

  @Column({ default: 0 })
  totalProducts: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  totalCommission: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  commissionAmount: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  averageCommissionRate: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  commissionRate: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  performanceScore: number;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity('monitoring_affiliate_commissions')
export class MonitoringAffiliateCommission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  studioId: number;

  @Column({ nullable: true })
  affiliateId: string;

  @Column({ nullable: true })
  affiliateName: string;

  @Column({ default: '' })
  productId: string;

  @Column({ default: '' })
  productName: string;

  @Column({ default: '' })
  sellerId: string;

  @Column({ default: '' })
  sellerName: string;

  @Column({ default: '' })
  orderId: string;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  orderAmount: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  commissionRate: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  commissionEarned: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  totalCommission: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  paidAmount: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  pendingAmount: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  liveCommission: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  videoCommission: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  socialCommission: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  directCommission: number;

  @Column({ default: 'PAID' })
  paymentStatus: string;

  @Column({ type: 'datetime', nullable: true })
  transactionDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity('monitoring_commission_alerts')
export class MonitoringCommissionAlert {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ default: 'MEDIUM' })
  severity: string;

  @Column({ nullable: true })
  productId: string;

  @Column({ nullable: true })
  productName: string;

  @Column({ nullable: true })
  sellerId: string;

  @Column({ nullable: true })
  sellerName: string;

  @Column({ default: false })
  isRead: boolean;

  @CreateDateColumn()
  createdAt: Date;
}

@Entity('monitoring_access_configs')
export class MonitoringAccessConfig {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: number;

  @Column({ default: true })
  canViewRevenue: boolean;

  @Column({ default: true })
  canViewCommission: boolean;

  @Column({ default: true })
  canExport: boolean;

  @Column({ default: true })
  canEdit: boolean;

  @Column({ default: '*' })
  allowedStudios: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
