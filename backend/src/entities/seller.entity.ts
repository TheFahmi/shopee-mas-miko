import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('sellers')
export class Seller {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  sellerId: string;

  @Column({ nullable: true })
  shopName: string;

  @Column({ type: 'text', nullable: true })
  shopUrl: string;

  @Column({ nullable: true })
  category: string;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  totalRevenue: number;

  @Column({ default: 0 })
  totalProductsSold: number;

  @Column('decimal', { precision: 5, scale: 2, default: 0 })
  commissionRate: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  totalCommissionPaid: number;

  @Column({ nullable: true })
  contactPhone: string;

  @Column({ nullable: true })
  contactEmail: string;

  @Column({ default: 'active' })
  status: string;

  @Column('decimal', { precision: 3, scale: 1, default: 5.0 })
  rating: number;

  @Column({ default: 0 })
  totalOrders: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
