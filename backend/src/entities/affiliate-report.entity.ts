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

export enum AffiliateChannel {
  LIVE = 'live',
  VIDEO = 'video',
  SOCIAL = 'social',
  DIRECT = 'direct',
}

@Entity('affiliate_products')
export class AffiliateProduct {
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
  imageUrl: string;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  price: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  commissionRate: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  revenue: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  commission: number;

  @Column({ default: 0 })
  orders: number;

  @Column({ default: 0 })
  liveOrders: number;

  @Column({ default: 0 })
  videoOrders: number;

  @Column({ default: 0 })
  socialOrders: number;

  @Column({ default: 0 })
  linkOrders: number;

  @Column({ default: 0 })
  clicks: number;

  @Column({ default: 'live' })
  topChannel: string;

  @Column({ default: 'ACTIVE' })
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity('affiliate_commissions')
export class AffiliateCommission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @Column()
  orderId: string;

  @Column()
  productName: string;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  orderAmount: number;

  @Column('decimal', { precision: 12, scale: 2, default: 0 })
  commissionAmount: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  commissionRate: number;

  @Column({ default: 'live' })
  channel: string;

  @Column({ default: 'COMPLETED' })
  status: string;

  @Column({ type: 'datetime' })
  orderDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

@Entity('affiliate_live_reports')
export class AffiliateLiveReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @Column()
  sessionTitle: string;

  @Column({ default: 0 })
  viewers: number;

  @Column({ default: 0 })
  totalViewers: number;

  @Column({ default: 0 })
  avgViewers: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  revenue: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  commission: number;

  @Column({ default: 0 })
  orders: number;

  @Column({ default: 0 })
  ordersGenerated: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  engagementRate: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  conversionRate: number;

  @Column({ type: 'datetime' })
  sessionDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}

@Entity('affiliate_video_reports')
export class AffiliateVideoReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @Column()
  videoTitle: string;

  @Column({ default: 0 })
  views: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  revenue: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  commission: number;

  @Column({ default: 0 })
  orders: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  engagementRate: number;

  @Column({ type: 'datetime' })
  publishDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}

@Entity('affiliate_social_reports')
export class AffiliateSocialReport {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @Column({ nullable: true })
  studioId: number;

  @Column()
  platform: string;

  @Column({ default: 0 })
  clicks: number;

  @Column({ default: 0 })
  impressions: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  revenue: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  commission: number;

  @Column({ default: 0 })
  orders: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  engagementRate: number;

  @Column({ type: 'datetime' })
  reportDate: Date;

  @CreateDateColumn()
  createdAt: Date;
}
