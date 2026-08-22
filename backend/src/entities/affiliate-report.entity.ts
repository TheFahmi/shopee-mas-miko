import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Studio } from './studio.entity';

export enum AffiliateChannel {
LIVE = "live",
    VIDEO = "video",
    SOCIAL_MEDIA = "social_media",
    LINK = "link"
}

export enum AffiliateProductStatus {
ACTIVE = "active",
    INACTIVE = "inactive",
    OUT_OF_STOCK = "out_of_stock"
}

@Entity('affiliate_products')
export class AffiliateProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  studio: Studio;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  productId: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  productName: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  productImage: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  shopName: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  category: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  price: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionRate: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionAmount: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  clicks: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  orders: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  revenue: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  conversionRate: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  status: AffiliateProductStatus;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  topChannel: AffiliateChannel;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  liveOrders: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  videoOrders: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  socialOrders: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  linkOrders: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  updatedAt: Date;

}

@Entity('affiliate_commissions')
export class AffiliateCommission {
  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  channel: AffiliateChannel;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  contentId: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  contentTitle: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  productName: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  orderSn: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  orderAmount: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionRate: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commissionAmount: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  status: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  orderDate: Date;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  paidDate: Date;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

}

@Entity('affiliate_live_reports')
export class AffiliateLiveReport {
  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  sessionTitle: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  hostName: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  startTime: Date;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  endTime: Date;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  durationMinutes: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  peakViewers: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  avgViewers: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  totalViewers: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  newFollowers: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  productsShown: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  ordersGenerated: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  revenue: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commission: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  likes: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  comments: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  shares: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  engagementRate: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  conversionRate: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

}

@Entity('affiliate_video_reports')
export class AffiliateVideoReport {
  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  videoTitle: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  videoUrl: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  thumbnail: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  durationSeconds: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  productTag: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  views: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  likes: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  comments: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  shares: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  clicks: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  orders: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  revenue: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commission: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  engagementRate: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  conversionRate: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  status: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  publishedAt: Date;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

}

@Entity('affiliate_social_reports')
export class AffiliateSocialReport {
  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  id: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  studioId: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  platform: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  postUrl: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  postType: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  caption: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  productTag: string;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  impressions: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  reach: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  likes: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  comments: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  shares: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  saves: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "saves", void 0);
__decorate([
    Column({ default: 0 })
  clicks: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "saves", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  orders: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "saves", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  revenue: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "saves", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  commission: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "saves", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  engagementRate: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "saves", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  ctr: number;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "saves", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "ctr", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  publishedAt: Date;

  @PrimaryGeneratedColumn()
  @], AffiliateProduct.prototype, "id", void 0);
__decorate([
    ManyToOne(() => studio_entity_1.Studio, { nullable: true })
  @JoinColumn({ name: 'studioId' })
  @], AffiliateProduct.prototype, "studio", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateProduct.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productId", void 0);
__decorate([
    Column()
  @], AffiliateProduct.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "productImage", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "shopName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateProduct.prototype, "category", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "price", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "commissionAmount", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateProduct.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateProductStatus.ACTIVE })
  @], AffiliateProduct.prototype, "status", void 0);
__decorate([
    Column({ type: 'text', default: AffiliateChannel.LINK })
  @], AffiliateProduct.prototype, "topChannel", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "liveOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "videoOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "socialOrders", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateProduct.prototype, "linkOrders", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateProduct.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn()
  @], AffiliateProduct.prototype, "updatedAt", void 0);
exports.AffiliateProduct = AffiliateProduct = __decorate([
    Entity('affiliate_products')
], AffiliateProduct);
let AffiliateCommission = class AffiliateCommission {
    id;
    studioId;
    channel;
    contentId;
    contentTitle;
    productName;
    orderSn;
    orderAmount;
    commissionRate;
    commissionAmount;
    status;
    orderDate;
    paidDate;
    createdAt;
};
exports.AffiliateCommission = AffiliateCommission;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateCommission.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateCommission.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateCommission.prototype, "channel", void 0);
__decorate([
    Column({ type: 'text', default: '' })
  @], AffiliateCommission.prototype, "contentId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "contentTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "productName", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateCommission.prototype, "orderSn", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "orderAmount", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateCommission.prototype, "commissionAmount", void 0);
__decorate([
    Column({ type: 'text', default: 'confirmed' })
  @], AffiliateCommission.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "orderDate", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateCommission.prototype, "paidDate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateCommission.prototype, "createdAt", void 0);
exports.AffiliateCommission = AffiliateCommission = __decorate([
    Entity('affiliate_commissions')
], AffiliateCommission);
let AffiliateLiveReport = class AffiliateLiveReport {
    id;
    studioId;
    sessionTitle;
    hostName;
    startTime;
    endTime;
    durationMinutes;
    peakViewers;
    avgViewers;
    totalViewers;
    newFollowers;
    productsShown;
    ordersGenerated;
    revenue;
    commission;
    likes;
    comments;
    shares;
    engagementRate;
    conversionRate;
    createdAt;
};
exports.AffiliateLiveReport = AffiliateLiveReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateLiveReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateLiveReport.prototype, "studioId", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "sessionTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateLiveReport.prototype, "hostName", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "startTime", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateLiveReport.prototype, "endTime", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "durationMinutes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "peakViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "avgViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "totalViewers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "newFollowers", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "productsShown", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "ordersGenerated", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "commission", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateLiveReport.prototype, "shares", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateLiveReport.prototype, "conversionRate", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateLiveReport.prototype, "createdAt", void 0);
exports.AffiliateLiveReport = AffiliateLiveReport = __decorate([
    Entity('affiliate_live_reports')
], AffiliateLiveReport);
let AffiliateVideoReport = class AffiliateVideoReport {
    id;
    studioId;
    videoTitle;
    videoUrl;
    thumbnail;
    durationSeconds;
    productTag;
    views;
    likes;
    comments;
    shares;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    conversionRate;
    status;
    publishedAt;
    createdAt;
};
exports.AffiliateVideoReport = AffiliateVideoReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateVideoReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateVideoReport.prototype, "studioId", void 0);
__decorate([
    Column()
  @], AffiliateVideoReport.prototype, "videoTitle", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "videoUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "thumbnail", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "durationSeconds", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateVideoReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "views", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateVideoReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateVideoReport.prototype, "conversionRate", void 0);
__decorate([
    Column({ type: 'text', default: 'published' })
  @], AffiliateVideoReport.prototype, "status", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateVideoReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  @], AffiliateVideoReport.prototype, "createdAt", void 0);
exports.AffiliateVideoReport = AffiliateVideoReport = __decorate([
    Entity('affiliate_video_reports')
], AffiliateVideoReport);
let AffiliateSocialReport = class AffiliateSocialReport {
    id;
    studioId;
    platform;
    postUrl;
    postType;
    caption;
    productTag;
    impressions;
    reach;
    likes;
    comments;
    shares;
    saves;
    clicks;
    orders;
    revenue;
    commission;
    engagementRate;
    ctr;
    publishedAt;
    createdAt;
};
exports.AffiliateSocialReport = AffiliateSocialReport;
__decorate([
    PrimaryGeneratedColumn()
  @], AffiliateSocialReport.prototype, "id", void 0);
__decorate([
    Column({ nullable: true })
  @], AffiliateSocialReport.prototype, "studioId", void 0);
__decorate([
    Column({ type: 'text' })
  @], AffiliateSocialReport.prototype, "platform", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postUrl", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "postType", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "caption", void 0);
__decorate([
    Column({ default: '' })
  @], AffiliateSocialReport.prototype, "productTag", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "impressions", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "reach", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "likes", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "comments", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "shares", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "saves", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "clicks", void 0);
__decorate([
    Column({ default: 0 })
  @], AffiliateSocialReport.prototype, "orders", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "revenue", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "commission", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "engagementRate", void 0);
__decorate([
    Column({ type: 'real', default: 0 })
  @], AffiliateSocialReport.prototype, "ctr", void 0);
__decorate([
    Column({ type: 'datetime', nullable: true })
  @], AffiliateSocialReport.prototype, "publishedAt", void 0);
__decorate([
    CreateDateColumn()
  createdAt: Date;

}
