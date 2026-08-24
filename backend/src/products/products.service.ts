import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async findAll(filters?: { categoryId?: number; search?: string }) {
    const qb = this.productRepo.createQueryBuilder('p')
      .leftJoinAndSelect('p.category', 'category')
      .where('p.isActive = :isActive', { isActive: true });

    if (filters?.categoryId) {
      qb.andWhere('p.categoryId = :categoryId', { categoryId: filters.categoryId });
    }

    if (filters?.search) {
      qb.andWhere('(p.name LIKE :search OR p.description LIKE :search)', {
        search: `%${filters.search}%`,
      });
    }

    return qb.orderBy('p.createdAt', 'DESC').getMany();
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async getTopProducts(limit = 10) {
    return this.productRepo.find({
      where: { isActive: true },
      order: { commissionRate: 'DESC' },
      take: limit,
      relations: ['category'],
    });
  }

  async create(dto: CreateProductDto) {
    const product = this.productRepo.create(dto);
    return this.productRepo.save(product);
  }

  async update(id: number, dto: UpdateProductDto) {
    await this.findOne(id);
    await this.productRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    product.isActive = false;
    await this.productRepo.save(product);
    return { message: 'Product deleted' };
  }
}
