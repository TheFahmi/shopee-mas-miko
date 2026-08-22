import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';

@Entity('monitoring_sold_products')
export class MonitoringSoldProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  productName: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  productId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  category: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  quantitySold: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  price: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  totalRevenue: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  sellerId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  sellerName: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  affiliateId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  affiliateName: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionRate: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionAmount: number;

  @Column({ nullable: true })
  imageUrl: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  status: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  transactionDate: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  orderId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  trafficSource: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  updatedAt: Date;

}

@Entity('monitoring_seller_recaps')
export class MonitoringSellerRecap {
  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  sellerName: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  sellerId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  shopName: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  totalProductsSold: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  totalRevenue: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionRate: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionAmount: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  totalOrders: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  averageOrderValue: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  topProduct: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  topCategory: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  status: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  period: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  periodStart: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  periodEnd: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  updatedAt: Date;

}

@Entity('monitoring_affiliate_commissions')
export class MonitoringAffiliateCommission {
  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  affiliateName: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  affiliateId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  totalCommission: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionRate: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  totalProductsSold: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  totalRevenue: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  paymentStatus: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  paymentDate: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  paymentMethod: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  paymentReference: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  paidAmount: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  pendingAmount: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  period: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  periodStart: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  periodEnd: Date;

  @Column({ nullable: true })
  topChannel: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  liveCommission: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  videoCommission: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  socialCommission: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  directCommission: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  updatedAt: Date;

}

@Entity('monitoring_commission_alerts')
export class MonitoringCommissionAlert {
  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  title: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  message: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  alertType: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  entityType: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  entityId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  entityName: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  previousValue: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  currentValue: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  changePercent: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  isRead: boolean;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  severity: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

}

@Entity('monitoring_access_configs')
export class MonitoringAccessConfig {
  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  userId: number;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  userName: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  role: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  canViewProducts: boolean;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewProducts", void 0);
__decorate([
    Column({ default: true })
  canViewSellers: boolean;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewProducts", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewSellers", void 0);
__decorate([
    Column({ default: false })
  canViewAllAffiliates: boolean;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewProducts", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewSellers", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canViewAllAffiliates", void 0);
__decorate([
    Column({ default: false })
  canExportData: boolean;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewProducts", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewSellers", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canViewAllAffiliates", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canExportData", void 0);
__decorate([
    Column({ default: false })
  canManageAlerts: boolean;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewProducts", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewSellers", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canViewAllAffiliates", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canExportData", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canManageAlerts", void 0);
__decorate([
    Column({ default: '' })
  restrictedSellerId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewProducts", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewSellers", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canViewAllAffiliates", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canExportData", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canManageAlerts", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "restrictedSellerId", void 0);
__decorate([
    Column({ default: '' })
  restrictedAffiliateId: string;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewProducts", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewSellers", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canViewAllAffiliates", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canExportData", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canManageAlerts", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "restrictedSellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "restrictedAffiliateId", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

  @PrimaryGeneratedColumn()
  @], MonitoringSoldProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], MonitoringSoldProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSoldProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSoldProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "productId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "category", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSoldProduct.prototype, "quantitySold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "totalRevenue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "sellerName", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "affiliateName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSoldProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: '' })
  @;
__decorate([
    Column({ type: 'text', default: 'completed' })
  @], MonitoringSoldProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSoldProduct.prototype, "transactionDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "orderId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSoldProduct.prototype, "trafficSource", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSoldProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSoldProduct.prototype, "updatedAt", void 0);
exports.MonitoringSoldProduct = MonitoringSoldProduct = __decorate([
    Entity('monitoring_sold_products')
], MonitoringSoldProduct);
let MonitoringSellerRecap = class MonitoringSellerRecap {
    id;
    studioId;
    sellerName;
    sellerId;
    shopName;
    totalProductsSold;
    totalRevenue;
    commissionRate;
    commissionAmount;
    totalOrders;
    averageOrderValue;
    topProduct;
    topCategory;
    status;
    period;
    periodStart;
    periodEnd;
    createdAt;
    updatedAt;
};
exports.MonitoringSellerRecap = MonitoringSellerRecap;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringSellerRecap.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringSellerRecap.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerName", void 0);
__decorate([
    Column()
  @], MonitoringSellerRecap.prototype, "sellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "shopName", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringSellerRecap.prototype, "totalOrders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringSellerRecap.prototype, "averageOrderValue", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topProduct", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringSellerRecap.prototype, "topCategory", void 0);
__decorate([
    Column({ type: 'text', default: 'active' })
  @], MonitoringSellerRecap.prototype, "status", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringSellerRecap.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodStart", void 0);
__decK<([B�[��U`�2�|w$�A�J����s)({ type: 'datetime' })
  @], MonitoringSellerRecap.prototype, "periodEnd", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringSellerRecap.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringSellerRecap.prototype, "updatedAt", void 0);
exports.MonitoringSellerRecap = MonitoringSellerRecap = __decorate([
    Entity('monitoring_seller_recaps')
], MonitoringSellerRecap);
let MonitoringAffiliateCommission = class MonitoringAffiliateCommission {
    id;
    studioId;
    affiliateName;
    affiliateId;
    totalCommission;
    commissionRate;
    totalProductsSold;
    totalRevenue;
    paymentStatus;
    paymentDate;
    paymentMethod;
    paymentReference;
    paidAmount;
    pendingAmount;
    period;
    periodStart;
    periodEnd;
    topChannel;
    liveCommission;
    videoCommission;
    socialCommission;
    directCommission;
    createdAt;
    updatedAt;
};
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateName", void 0);
__decorate([
    Column()
  @], MonitoringAffiliateCommission.prototype, "affiliateId", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalCommission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalProductsSold", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "totalRevenue", void 0);
__decorate([
    Column({ type: 'text', default: 'pending' })
  @], MonitoringAffiliateCommission.prototype, "paymentStatus", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], MonitoringAffiliateCommission.prototype, "paymentDate", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentMethod", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAffiliateCommission.prototype, "paymentReference", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "paidAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringAffiliateCommission.prototype, "pendingAmount", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAffiliateCommission.prototype, "period", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodStart", void 0);
__decorate([
    Column({ type: 'datetime' })
  @], MonitoringAffiliateCommission.prototype, "periodEnd", void 0);
__decorate([
    Column({ default: '' })
  @__me	~Ɖ����7F��罊��[��Cg��5���� MonitoringAffiliateCommission.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "liveCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "videoCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "socialCommission", void 0);
__decorate([
    Column({ default: 0 })
  @], MonitoringAffiliateCommission.prototype, "directCommission", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], MonitoringAffiliateCommission.prototype, "updatedAt", void 0);
exports.MonitoringAffiliateCommission = MonitoringAffiliateCommission = __decorate([
    Entity('monitoring_affiliate_commissions')
], MonitoringAffiliateCommission);
let MonitoringCommissionAlert = class MonitoringCommissionAlert {
    id;
    studioId;
    title;
    message;
    alertType;
    entityType;
    entityId;
    entityName;
    previousValue;
    currentValue;
    changePercent;
    isRead;
    severity;
    createdAt;
};
exports.MonitoringCommissionAlert = MonitoringCommissionAlert;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringCommissionAlert.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringCommissionAlert.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringCommissionAlert.prototype, "title", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "message", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringCommissionAlert.prototype, "alertType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityType", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringCommissionAlert.prototype, "entityName", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "previousValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "currentValue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], MonitoringCommissionAlert.prototype, "changePercent", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringCommissionAlert.prototype, "isRead", void 0);
__decorate([
    Column({ type: 'text', default: 'info' })
  @], MonitoringCommissionAlert.prototype, "severity", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringCommissionAlert.prototype, "createdAt", void 0);
exports.MonitoringCommissionAlert = MonitoringCommissionAlert = __decorate([
    Entity('monitoring_commission_alerts')
], MonitoringCommissionAlert);
let MonitoringAccessConfig = class MonitoringAccessConfig {
    id;
    studioId;
    userId;
    userNamû2;�:�~�����p���טͬ����%�#��;
    canViewSellers;
    canViewAllAffiliates;
    canExportData;
    canManageAlerts;
    restrictedSellerId;
    restrictedAffiliateId;
    createdAt;
    updatedAt;
};
exports.MonitoringAccessConfig = MonitoringAccessConfig;
__decorate([
    PrimaryGeneratedColumn()
  @], MonitoringAccessConfig.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], MonitoringAccessConfig.prototype, "studioId", void 0);
__decorate([
    Column()
  @], MonitoringAccessConfig.prototype, "userId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "userName", void 0);
__decorate([
    Column({ type: 'text' })
  @], MonitoringAccessConfig.prototype, "role", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewProducts", void 0);
__decorate([
    Column({ default: true })
  @], MonitoringAccessConfig.prototype, "canViewSellers", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canViewAllAffiliates", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canExportData", void 0);
__decorate([
    Column({ default: false })
  @], MonitoringAccessConfig.prototype, "canManageAlerts", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "restrictedSellerId", void 0);
__decorate([
    Column({ default: '' })
  @], MonitoringAccessConfig.prototype, "restrictedAffiliateId", void 0);
__decorate([
    CreateDateColumn()
  @], MonitoringAccessConfig.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  updatedAt: Date;

}
