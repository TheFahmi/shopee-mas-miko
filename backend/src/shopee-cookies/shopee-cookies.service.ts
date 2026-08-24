import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopeeCookie } from '../entities/shopee-cookie.entity';

@Injectable()
export class ShopeeCookiesService {
  private readonly logger = new Logger(ShopeeCookiesService.name);

  constructor(
    @InjectRepository(ShopeeCookie)
    private readonly cookieRepo: Repository<ShopeeCookie>,
  ) {}

  async findAll(): Promise<ShopeeCookie[]> {
    return this.cookieRepo.find({ order: { createdAt: 'DESC' } });
  }

  async getActiveCookie(): Promise<ShopeeCookie | null> {
    return this.cookieRepo.findOne({
      where: { isActive: true },
      order: { lastUsedAt: 'DESC' },
    });
  }

  async getStatus() {
    const active = await this.getActiveCookie();
    return {
      hasActiveCookie: !!active,
      activeCookieLabel: active?.label || null,
      lastChecked: new Date(),
    };
  }

  async saveCookies(cookies: string, label = 'Shopee Default', notes?: string) {
    const newCookie = this.cookieRepo.create({
      cookies,
      label,
      notes,
      isActive: true,
      lastUsedAt: new Date(),
    });
    return this.cookieRepo.save(newCookie);
  }

  async updateCookies(id: number, data: Partial<ShopeeCookie>) {
    const existing = await this.cookieRepo.findOne({ where: { id } });
    if (!existing) throw new NotFoundException(`Cookie #${id} not found`);
    await this.cookieRepo.update(id, data);
    return this.cookieRepo.findOne({ where: { id } });
  }

  async deleteCookies(id: number) {
    await this.cookieRepo.delete(id);
    return { message: 'Cookie deleted' };
  }
}
