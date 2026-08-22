import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopeeCookie } from '../entities/shopee-cookie.entity';

@Injectable()
export class ShopeeCookiesService {
  private readonly logger = new Logger(ShopeeCookiesService.name);

  constructor(
    @InjectRepository(ShopeeCookie)
    private cookieRepo: Repository<ShopeeCookie>,
  ) {}

  async getActiveCookies(): Promise<ShopeeCookie | null> {
    return this.cookieRepo.findOne({
      where: { isActive: true },
      order: { updatedAt: 'DESC' },
    });
  }

  async getAllCookies(): Promise<ShopeeCookie[]> {
    return this.cookieRepo.find({ order: { updatedAt: 'DESC' } });
  }

  async saveCookies(data: {
    cookies: string;
    label?: string;
    notes?: string;
    expiresAt?: string;
  }): Promise<ShopeeCookie> {
    // Deactivate all existing cookies
    const existing = await this.cookieRepo.find();
    if (existing.length > 0) {
      await this.cookieRepo.update(
        existing.map((e) => e.id),
        { isActive: false },
      );
    }

    const cookie = this.cookieRepo.create({
      cookies: data.cookies,
      label: data.label || 'Default',
      notes: data.notes || '',
      isActive: true,
    });

    return this.cookieRepo.save(cookie) as Promise<ShopeeCookie>;
  }

  async updateCookies(
    id: number,
    data: Partial<{
      cookies: string;
      label: string;
      notes: string;
      isActive: boolean;
      expiresAt: string;
    }>,
  ): Promise<ShopeeCookie> {
    const cookie = await this.cookieRepo.findOneByOrFail({ id });

    if (data.isActive) {
      // Deactivate all others
      const others = await this.cookieRepo.find();
      const otherIds = others.filter((o) => o.id !== id).map((o) => o.id);
      if (otherIds.length > 0) {
        await this.cookieRepo.update(otherIds, { isActive: false });
      }
    }

    Object.assign(cookie, {
      ...data,
      expiresAt: data.expiresAt ? new Date(data.expiresAt) : cookie.expiresAt,
    });

    return this.cookieRepo.save(cookie);
  }

  async deleteCookies(id: number): Promise<void> {
    await this.cookieRepo.delete(id);
  }

  async markUsed(cookie: ShopeeCookie): Promise<void> {
    cookie.lastUsedAt = new Date();
    await this.cookieRepo.save(cookie);
  }

  async getStatus() {
    const activeCookie = await this.getActiveCookies();
    return {
      configured: !!activeCookie,
      label: activeCookie?.label || null,
      lastUsedAt: activeCookie?.lastUsedAt || null,
      expiresAt: activeCookie?.expiresAt || null,
      message: activeCookie
        ? `Shopee cookies active: "${activeCookie.label}"`
        : 'No Shopee cookies configured. Add cookies in Settings.',
    };
  }
}
