import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Transaction, TransactionStatus } from '../entities';
import { CreateTransactionDto, UpdateTransactionDto } from './dto/transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async findAll(userId?: number, filters?: any) {
    const qb = this.transactionsRepository.createQueryBuilder('transaction')
      .leftJoinAndSelect('transaction.product', 'product')
      .leftJoinAndSelect('product.category', 'category');

    if (userId) {
      qb.where('transaction.userId = :userId', { userId });
    }

    if (filters?.startDate && filters?.endDate) {
      qb.andWhere('transaction.transactionDate BETWEEN :startDate AND :endDate', {
        startDate: filters.startDate,
        endDate: filters.endDate,
      });
    }

    if (filters?.status) {
      qb.andWhere('transaction.status = :status', { status: filters.status });
    }

    if (filters?.productId) {
      qb.andWhere('transaction.productId = :productId', { productId: filters.productId });
    }

    if (filters?.trafficSource) {
      qb.andWhere('transaction.trafficSource = :trafficSource', { trafficSource: filters.trafficSource });
    }

    if (filters?.isManual !== undefined) {
      qb.andWhere('transaction.isManual = :isManual', { isManual: filters.isManual });
    }

    if (filters?.studioId) {
      qb.andWhere('transaction.studioId = :studioId', { studioId: filters.studioId });
    }

    return qb.orderBy('transaction.transactionDate', 'DESC').getMany();
  }

  async findOne(id: number) {
    const transaction = await this.transactionsRepository.findOne({
      where: { id },
      relations: ['product', 'product.category', 'user'],
    });
    if (!transaction) throw new NotFoundException('Transaction not found');
    return transaction;
  }

  async create(userId: number, dto: CreateTransactionDto) {
    const transaction = this.transactionsRepository.create({
      ...dto,
      userId,
      transactionDate: new Date(dto.transactionDate),
      isManual: dto.isManual ?? true,
    });
    return this.transactionsRepository.save(transaction);
  }

  async update(id: number, dto: UpdateTransactionDto) {
    await this.findOne(id);
    const updateData: any = { ...dto };
    if (dto.transactionDate) {
      updateData.transactionDate = new Date(dto.transactionDate);
    }
    await this.transactionsRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.transactionsRepository.delete(id);
    return { message: 'Transaction deleted' };
  }

  async getDashboardStats(userId?: number, studioId?: number) {
    const today = new Date();
    const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());
    const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    const addUserFilter = (qb: any) => {
      if (userId) qb.andWhere('t.userId = :userId', { userId });
      if (studioId) qb.andWhere('t.studioId = :studioId', { studioId });
      return qb;
    };

    const [totalRevenue, totalCommission, totalTransactions, todayStats, weekStats, monthStats] = await Promise.all([
      addUserFilter(
        this.transactionsRepository.createQueryBuilder('t')
          .select('COALESCE(SUM(t.totalPrice), 0)', 'total')
          .where('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED })
      ).getRawOne(),
      addUserFilter(
        this.transactionsRepository.createQueryBuilder('t')
          .select('COALESCE(SUM(t.commission), 0)', 'total')
          .where('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED })
      ).getRawOne(),
      userId
        ? this.transactionsRepository.count({ where: studioId ? { userId, studioId } : { userId } })
        : studioId ? this.transactionsRepository.count({ where: { studioId } }) : this.transactionsRepository.count(),
      addUserFilter(
        this.transactionsRepository.createQueryBuilder('t')
          .select('COALESCE(SUM(t.totalPrice), 0)', 'revenue')
          .addSelect('COALESCE(SUM(t.commission), 0)', 'commission')
          .addSelect('COUNT(*)', 'count')
          .where('t.transactionDate >= :start', { start: startOfDay.toISOString() })
          .andWhere('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED })
      ).getRawOne(),
      addUserFilter(
        this.transactionsRepository.createQueryBuilder('t')
          .select('COALESCE(SUM(t.totalPrice), 0)', 'revenue')
          .addSelect('COALESCE(SUM(t.commission), 0)', 'commission')
          .addSelect('COUNT(*)', 'count')
          .where('t.transactionDate >= :start', { start: startOfWeek.toISOString() })
          .andWhere('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED })
      ).getRawOne(),
      addUserFilter(
        this.transactionsRepository.createQueryBuilder('t')
          .select('COALESCE(SUM(t.totalPrice), 0)', 'revenue')
          .addSelect('COALESCE(SUM(t.commission), 0)', 'commission')
          .addSelect('COUNT(*)', 'count')
          .where('t.transactionDate >= :start', { start: startOfMonth.toISOString() })
          .andWhere('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED })
      ).getRawOne(),
    ]);

    return {
      totalRevenue: Number(totalRevenue.total),
      totalCommission: Number(totalCommission.total),
      totalTransactions,
      today: {
        revenue: Number(todayStats.revenue),
        commission: Number(todayStats.commission),
        count: Number(todayStats.count),
      },
      thisWeek: {
        revenue: Number(weekStats.revenue),
        commission: Number(weekStats.commission),
        count: Number(weekStats.count),
      },
      thisMonth: {
        revenue: Number(monthStats.revenue),
        commission: Number(monthStats.commission),
        count: Number(monthStats.count),
      },
    };
  }

  async getRevenueChart(userId: number | undefined, period: 'daily' | 'weekly' | 'monthly', days = 30, studioId?: number) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const qb = this.transactionsRepository.createQueryBuilder('t')
      .select("strftime('%Y-%m-%d', t.transactionDate)", 'date')
      .addSelect('SUM(t.totalPrice)', 'revenue')
      .addSelect('SUM(t.commission)', 'commission')
      .addSelect('COUNT(*)', 'count')
      .where('t.transactionDate >= :startDate', { startDate: startDate.toISOString() })
      .andWhere('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED });

    if (userId) {
      qb.andWhere('t.userId = :userId', { userId });
    }

    if (studioId) {
      qb.andWhere('t.studioId = :studioId', { studioId });
    }

    const transactions = await qb
      .groupBy('date')
      .orderBy('date', 'ASC')
      .getRawMany();

    return transactions.map((t) => ({
      date: t.date,
      revenue: Number(t.revenue),
      commission: Number(t.commission),
      count: Number(t.count),
    }));
  }

  async getTopProducts(userId: number | undefined, limit = 10, studioId?: number) {
    const qb = this.transactionsRepository.createQueryBuilder('t')
      .leftJoinAndSelect('t.product', 'product')
      .select('product.id', 'productId')
      .addSelect('product.name', 'productName')
      .addSelect('product.imageUrl', 'imageUrl')
      .addSelect('SUM(t.quantity)', 'totalSold')
      .addSelect('SUM(t.totalPrice)', 'totalRevenue')
      .addSelect('SUM(t.commission)', 'totalCommission')
      .where('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED });

    if (userId) {
      qb.andWhere('t.userId = :userId', { userId });
    }

    if (studioId) {
      qb.andWhere('t.studioId = :studioId', { studioId });
    }

    return qb
      .groupBy('product.id')
      .orderBy('totalSold', 'DESC')
      .limit(limit)
      .getRawMany();
  }

  async getReport(userId: number | undefined, type: 'daily' | 'weekly' | 'monthly', studioId?: number) {
    const now = new Date();
    let startDate: Date;
    let prevStartDate: Date;
    let prevEndDate: Date;

    if (type === 'daily') {
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      prevStartDate = new Date(startDate);
      prevStartDate.setDate(prevStartDate.getDate() - 1);
      prevEndDate = new Date(startDate);
    } else if (type === 'weekly') {
      startDate = new Date(now);
      startDate.setDate(now.getDate() - now.getDay());
      startDate.setHours(0, 0, 0, 0);
      prevStartDate = new Date(startDate);
      prevStartDate.setDate(prevStartDate.getDate() - 7);
      prevEndDate = new Date(startDate);
    } else {
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      prevStartDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
      prevEndDate = new Date(startDate);
    }

    const addUserFilter = (qb: any) => {
      if (userId) qb.andWhere('t.userId = :userId', { userId });
      if (studioId) qb.andWhere('t.studioId = :studioId', { studioId });
      return qb;
    };

    const [current, previous, topProducts, statusBreakdown] = await Promise.all([
      addUserFilter(
        this.transactionsRepository.createQueryBuilder('t')
          .select('COALESCE(SUM(t.totalPrice), 0)', 'revenue')
          .addSelect('COALESCE(SUM(t.commission), 0)', 'commission')
          .addSelect('COALESCE(SUM(t.quantity), 0)', 'productsSold')
          .addSelect('COUNT(*)', 'transactionCount')
          .where('t.transactionDate >= :start', { start: startDate.toISOString() })
          .andWhere('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED })
      ).getRawOne(),
      addUserFilter(
        this.transactionsRepository.createQueryBuilder('t')
          .select('COALESCE(SUM(t.totalPrice), 0)', 'revenue')
          .addSelect('COALESCE(SUM(t.commission), 0)', 'commission')
          .addSelect('COALESCE(SUM(t.quantity), 0)', 'productsSold')
          .addSelect('COUNT(*)', 'transactionCount')
          .where('t.transactionDate >= :start AND t.transactionDate < :end', {
            start: prevStartDate.toISOString(),
            end: prevEndDate.toISOString(),
          })
          .andWhere('t.status != :cancelled', { cancelled: TransactionStatus.CANCELLED })
      ).getRawOne(),
      this.getTopProducts(userId, 5, studioId),
      addUserFilter(
        this.transactionsRepository.createQueryBuilder('t')
          .select('t.status', 'status')
          .addSelect('COUNT(*)', 'count')
          .where('t.transactionDate >= :start', { start: startDate.toISOString() })
          .groupBy('t.status')
      ).getRawMany(),
    ]);

    const calcGrowth = (curr: number, prev: number) => {
      if (prev === 0) return curr > 0 ? 100 : 0;
      return ((curr - prev) / prev) * 100;
    };

    return {
      period: type,
      startDate: startDate.toISOString(),
      current: {
        revenue: Number(current.revenue),
        commission: Number(current.commission),
        productsSold: Number(current.productsSold),
        transactionCount: Number(current.transactionCount),
      },
      previous: {
        revenue: Number(previous.revenue),
        commission: Number(previous.commission),
        productsSold: Number(previous.productsSold),
        transactionCount: Number(previous.transactionCount),
      },
      growth: {
        revenue: calcGrowth(Number(current.revenue), Number(previous.revenue)),
        commission: calcGrowth(Number(current.commission), Number(previous.commission)),
        productsSold: calcGrowth(Number(current.productsSold), Number(previous.productsSold)),
      },
      topProducts,
      statusBreakdown,
    };
  }
}
