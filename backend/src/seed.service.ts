import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserRole, Category, Product, Transaction, TransactionStatus, TrafficSource } from './entities';
import { Employee, EmployeePosition, EmployeeStatus, EmploymentType } from './entities/employee.entity';
import { Seller } from './entities/seller.entity';
import {
  MonitoringSoldProduct,
  MonitoringSellerRecap,
  MonitoringAffiliateCommission,
  MonitoringCommissionAlert,
} from './entities/affiliate-monitoring.entity';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
    @InjectRepository(Category) private categoriesRepo: Repository<Category>,
    @InjectRepository(Product) private productsRepo: Repository<Product>,
    @InjectRepository(Transaction) private transactionsRepo: Repository<Transaction>,
    @InjectRepository(Employee) private employeesRepo: Repository<Employee>,
    @InjectRepository(Seller) private sellersRepo: Repository<Seller>,
    @InjectRepository(MonitoringSoldProduct) private monSoldRepo: Repository<MonitoringSoldProduct>,
    @InjectRepository(MonitoringSellerRecap) private monSellerRepo: Repository<MonitoringSellerRecap>,
    @InjectRepository(MonitoringAffiliateCommission) private monCommRepo: Repository<MonitoringAffiliateCommission>,
    @InjectRepository(MonitoringCommissionAlert) private monAlertRepo: Repository<MonitoringCommissionAlert>,
  ) {}

  async seed() {
    const userCount = await this.usersRepo.count();
    if (userCount > 0) {
      console.log('Database already seeded');
      return;
    }

    console.log('🌱 Seeding database...');

    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await this.usersRepo.save({
      email: 'admin@shopee-affiliate.com',
      password: adminPassword,
      name: 'Admin User',
      role: UserRole.ADMIN,
    });

    const employeePassword = await bcrypt.hash('employee123', 10);
    const employeeUser = await this.usersRepo.save({
      email: 'karyawan@wish.com',
      password: employeePassword,
      name: 'Budi Santoso',
      role: UserRole.EMPLOYEE,
    });

    const sitiUser = await this.usersRepo.save({
      email: 'siti@wish.com',
      password: employeePassword,
      name: 'Siti Rahayu',
      role: UserRole.EMPLOYEE,
    });

    const affiliate = await this.usersRepo.save({
      email: 'affiliate@shopee-affiliate.com',
      password: adminPassword,
      name: 'Demo Affiliate',
      role: UserRole.AFFILIATE,
    });

    const categories = await this.categoriesRepo.save([
      { name: 'Elektronik', description: 'Gadget dan perangkat elektronik' },
      { name: 'Fashion', description: 'Pakaian dan aksesoris' },
      { name: 'Kecantikan', description: 'Produk perawatan dan kecantikan' },
      { name: 'Rumah Tangga', description: 'Perlengkapan rumah tangga' },
      { name: 'Makanan & Minuman', description: 'Produk makanan dan minuman' },
    ]);

    const products = await this.productsRepo.save([
      { name: 'Samsung Galaxy S24 Ultra', price: 19999000, commissionRate: 3.5, categoryId: categories[0].id, description: 'Smartphone flagship Samsung terbaru', shopeeUrl: 'https://shopee.co.id/product/1' },
      { name: 'iPhone 15 Pro Max', price: 24999000, commissionRate: 2.8, categoryId: categories[0].id, description: 'Apple iPhone terbaru', shopeeUrl: 'https://shopee.co.id/product/2' },
      { name: 'Xiaomi Pad 6', price: 4999000, commissionRate: 4.0, categoryId: categories[0].id, description: 'Tablet Xiaomi terbaru', shopeeUrl: 'https://shopee.co.id/product/3' },
      { name: 'Kaos Polos Premium', price: 89000, commissionRate: 8.5, categoryId: categories[1].id, description: 'Kaos polos cotton combed 30s', shopeeUrl: 'https://shopee.co.id/product/4' },
      { name: 'Jaket Hoodie Oversize', price: 199000, commissionRate: 7.0, categoryId: categories[1].id, description: 'Hoodie oversize unisex', shopeeUrl: 'https://shopee.co.id/product/5' },
      { name: 'Skincare Set Lengkap', price: 350000, commissionRate: 10.0, categoryId: categories[2].id, description: 'Set perawatan wajah lengkap', shopeeUrl: 'https://shopee.co.id/product/6' },
      { name: 'Sunscreen SPF 50+', price: 125000, commissionRate: 9.0, categoryId: categories[2].id, description: 'Sunscreen wajah SPF 50+ PA++++', shopeeUrl: 'https://shopee.co.id/product/7' },
      { name: 'Rak Serbaguna 5 Tingkat', price: 299000, commissionRate: 6.0, categoryId: categories[3].id, description: 'Rak penyimpanan serbaguna', shopeeUrl: 'https://shopee.co.id/product/8' },
      { name: 'Kopi Arabica Premium 200g', price: 75000, commissionRate: 12.0, categoryId: categories[4].id, description: 'Biji kopi arabica premium', shopeeUrl: 'https://shopee.co.id/product/9' },
      { name: 'Snack Box Hampers', price: 150000, commissionRate: 8.0, categoryId: categories[4].id, description: 'Paket snack premium', shopeeUrl: 'https://shopee.co.id/product/10' },
    ]);

    const transactions: DeepPartial<Transaction>[] = [];
    const statuses = [TransactionStatus.COMPLETED, TransactionStatus.CONFIRMED, TransactionStatus.PENDING];
    const sources = [TrafficSource.LIVE, TrafficSource.VIDEO, TrafficSource.SOCIAL_MEDIA, TrafficSource.DIRECT];
    const socialPlatforms = ['TikTok', 'Instagram', 'Facebook', 'YouTube', 'Twitter/X'];

    for (let dayOffset = 0; dayOffset < 60; dayOffset++) {
      const numTransactions = Math.floor(Math.random() * 6) + 2;
      for (let j = 0; j < numTransactions; j++) {
        const product = products[Math.floor(Math.random() * products.length)];
        const quantity = Math.floor(Math.random() * 5) + 1;
        const totalPrice = product.price * quantity;
        const commission = totalPrice * (product.commissionRate / 100);
        const gmv = totalPrice;
        const source = sources[Math.floor(Math.random() * sources.length)];
        const date = new Date();
        date.setDate(date.getDate() - dayOffset);
        date.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));

        const clicks = Math.floor(Math.random() * 200) + 10;
        const views = clicks * (Math.floor(Math.random() * 10) + 3);
        const conversionRate = Number(((quantity / clicks) * 100).toFixed(2));

        transactions.push({
          productId: product.id,
          userId: affiliate.id,
          quantity,
          totalPrice,
          commission,
          gmv,
          status: statuses[Math.floor(Math.random() * statuses.length)],
          trafficSource: source,
          transactionDate: date,
          isManual: false,
          clicks,
          views,
          conversionRate: Math.min(conversionRate, 100),
          shopeeOrderId: `240${dayOffset}${Math.floor(Math.random() * 900000 + 100000)}`,
          socialPlatform: source === TrafficSource.SOCIAL_MEDIA ? socialPlatforms[Math.floor(Math.random() * socialPlatforms.length)] : undefined,
          liveSessionId: source === TrafficSource.LIVE ? `LIVE-${dayOffset}-${j}` : undefined,
          videoId: source === TrafficSource.VIDEO ? `VID-${dayOffset}-${j}` : undefined,
        });
      }
    }

    await this.transactionsRepo.save(transactions);

    await this.employeesRepo.save([
      {
        name: 'Budi Santoso',
        email: 'karyawan@wish.com',
        phone: '08123456789',
        position: EmployeePosition.HOST,
        status: EmployeeStatus.ACTIVE,
        employmentType: EmploymentType.PERMANENT,
        baseSalary: 4500000,
        transportAllowance: 500000,
        mealAllowance: 750000,
        otherAllowance: 250000,
        commissionRate: 2.5,
        joinDate: new Date('2024-01-15'),
        bankName: 'BCA',
        bankAccount: '1234567890',
        bankAccountName: 'Budi Santoso',
        userId: employeeUser.id,
      },
      {
        name: 'Siti Rahayu',
        email: 'siti@wish.com',
        phone: '08198765432',
        position: EmployeePosition.HOST,
        status: EmployeeStatus.ACTIVE,
        employmentType: EmploymentType.PERMANENT,
        baseSalary: 4500000,
        transportAllowance: 500000,
        mealAllowance: 750000,
        otherAllowance: 200000,
        commissionRate: 2.5,
        joinDate: new Date('2024-03-01'),
        bankName: 'BRI',
        bankAccount: '0987654321',
        bankAccountName: 'Siti Rahayu',
        userId: sitiUser.id,
      },
      {
        name: 'Ahmad Fauzi',
        email: 'ahmad@wish.com',
        phone: '08134567890',
        position: EmployeePosition.HOST,
        status: EmployeeStatus.ACTIVE,
        employmentType: EmploymentType.PERMANENT,
        baseSalary: 4500000,
        transportAllowance: 500000,
        mealAllowance: 750000,
        otherAllowance: 300000,
        commissionRate: 3.0,
        joinDate: new Date('2023-11-01'),
        bankName: 'Mandiri',
        bankAccount: '1122334455',
        bankAccountName: 'Ahmad Fauzi',
      },
      {
        name: 'Dewi Lestari',
        email: 'dewi@wish.com',
        phone: '08145678901',
        position: EmployeePosition.HOST,
        status: EmployeeStatus.ACTIVE,
        employmentType: EmploymentType.PERMANENT,
        baseSalary: 4200000,
        transportAllowance: 500000,
        mealAllowance: 750000,
        otherAllowance: 200000,
        commissionRate: 2.0,
        joinDate: new Date('2024-06-01'),
        bankName: 'BCA',
        bankAccount: '5566778899',
        bankAccountName: 'Dewi Lestari',
      },
      {
        name: 'Rian Pratama',
        email: 'rian@wish.com',
        phone: '08156789012',
        position: EmployeePosition.HOST,
        status: EmployeeStatus.ACTIVE,
        employmentType: EmploymentType.FREELANCE,
        baseSalary: 2500000,
        transportAllowance: 300000,
        mealAllowance: 500000,
        otherAllowance: 0,
        commissionRate: 3.5,
        joinDate: new Date('2024-05-15'),
        bankName: 'BCA',
        bankAccount: '9988776655',
        bankAccountName: 'Rian Pratama',
      },
      {
        name: 'Mega Putri',
        email: 'mega@wish.com',
        phone: '08167890123',
        position: EmployeePosition.HOST,
        status: EmployeeStatus.ACTIVE,
        employmentType: EmploymentType.FREELANCE,
        baseSalary: 2500000,
        transportAllowance: 300000,
        mealAllowance: 500000,
        otherAllowance: 0,
        commissionRate: 3.5,
        joinDate: new Date('2024-08-01'),
        bankName: 'Mandiri',
        bankAccount: '6677889900',
        bankAccountName: 'Mega Putri',
      },
      {
        name: 'Fitri Handayani',
        email: 'fitri@wish.com',
        phone: '08178901234',
        position: EmployeePosition.STAFF,
        status: EmployeeStatus.ACTIVE,
        employmentType: EmploymentType.PERMANENT,
        baseSalary: 4000000,
        transportAllowance: 400000,
        mealAllowance: 600000,
        otherAllowance: 150000,
        commissionRate: 0,
        joinDate: new Date('2024-07-01'),
        bankName: 'BRI',
        bankAccount: '3344556677',
        bankAccountName: 'Fitri Handayani',
      },
    ]);

    console.log(`✅ Seeded: ${transactions.length} transactions, ${products.length} products, ${categories.length} categories`);

    // ========== SEED MONITORING DATA ==========
    await this.seedMonitoringData(products, categories, affiliate);
  }

  private async seedMonitoringData(products: Product[], categories: Category[], affiliate: User) {
    console.log('📊 Seeding monitoring data...');

    const sellerNames = [
      { name: 'Toko Elektronik Jaya', shopName: 'ElektroJaya Official', category: 'Elektronik', sellerId: 'SLR001' },
      { name: 'Fashion Corner ID', shopName: 'FashionCorner_ID', category: 'Fashion', sellerId: 'SLR002' },
      { name: 'Beauty Palace Store', shopName: 'BeautyPalace.id', category: 'Kecantikan', sellerId: 'SLR003' },
      { name: 'Rumah Impian Shop', shopName: 'RumahImpian_Shop', category: 'Rumah Tangga', sellerId: 'SLR004' },
      { name: 'Snack Paradise ID', shopName: 'SnackParadise.co', category: 'Makanan & Minuman', sellerId: 'SLR005' },
      { name: 'Gadget World Store', shopName: 'GadgetWorld_ID', category: 'Elektronik', sellerId: 'SLR006' },
      { name: 'Style Hub Fashion', shopName: 'StyleHub.id', category: 'Fashion', sellerId: 'SLR007' },
      { name: 'Glow Up Beauty', shopName: 'GlowUpBeauty', category: 'Kecantikan', sellerId: 'SLR008' },
    ];

    const sellers = await this.sellersRepo.save(
      sellerNames.map(s => ({
        ...s,
        shopUrl: `https://shopee.co.id/shop/${s.sellerId}`,
        totalRevenue: Math.floor(Math.random() * 500000000) + 50000000,
        totalProductsSold: Math.floor(Math.random() * 2000) + 100,
        commissionRate: Number((Math.random() * 8 + 2).toFixed(2)),
        totalCommissionPaid: Math.floor(Math.random() * 50000000) + 5000000,
        contactEmail: `${s.sellerId.toLowerCase()}@shopee.co.id`,
        contactPhone: `0812${Math.floor(Math.random() * 90000000 + 10000000)}`,
        status: 'active',
        rating: Number((Math.random() * 1.5 + 3.5).toFixed(1)),
        totalOrders: Math.floor(Math.random() * 3000) + 200,
      })),
    );

    const trafficSources = ['live', 'video', 'social', 'direct', 'search'];
    const statuses = ['completed', 'completed', 'completed', 'pending', 'refunded'];
    const affiliateNames = ['Demo Affiliate', 'Super Affiliate Pro', 'Content Creator X'];
    const affiliateIds = ['AFF001', 'AFF002', 'AFF003'];

    const soldProducts: DeepPartial<MonitoringSoldProduct>[] = [];
    for (let dayOffset = 0; dayOffset < 90; dayOffset++) {
      const numItems = Math.floor(Math.random() * 12) + 3;
      for (let j = 0; j < numItems; j++) {
        const product = products[Math.floor(Math.random() * products.length)];
        const seller = sellers[Math.floor(Math.random() * sellers.length)];
        const affIdx = Math.floor(Math.random() * affiliateNames.length);
        const qty = Math.floor(Math.random() * 8) + 1;
        const date = new Date();
        date.setDate(date.getDate() - dayOffset);
        date.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
        const revenue = product.price * qty;
        const commRate = Number((Math.random() * 10 + 1).toFixed(2));

        soldProducts.push({
          productName: product.name,
          productId: `PROD${product.id}`,
          category: product.category?.name || seller.category,
          quantitySold: qty,
          price: product.price,
          totalRevenue: revenue,
          sellerId: seller.sellerId,
          sellerName: seller.name,
          affiliateId: affiliateIds[affIdx],
          affiliateName: affiliateNames[affIdx],
          commissionRate: commRate,
          commissionAmount: Math.round(revenue * commRate / 100),
          status: statuses[Math.floor(Math.random() * statuses.length)],
          transactionDate: date,
          trafficSource: trafficSources[Math.floor(Math.random() * trafficSources.length)],
        });
      }
    }
    await this.monSoldRepo.save(soldProducts);

    const sellerRecaps: DeepPartial<MonitoringSellerRecap>[] = [];
    for (const seller of sellers) {
      const totalProductsSold = Math.floor(Math.random() * 500) + 50;
      const totalRevenue = Math.floor(Math.random() * 200000000) + 10000000;
      const commRate = Number((Math.random() * 6 + 2).toFixed(2));

      sellerRecaps.push({
        sellerName: seller.name,
        sellerId: seller.sellerId,
        category: seller.category,
        totalProducts: totalProductsSold,
        totalRevenue,
        commissionRate: commRate,
        totalCommission: Math.round(totalRevenue * commRate / 100),
        totalOrders: Math.floor(totalProductsSold * 0.8),
        status: 'active',
      });
    }
    await this.monSellerRepo.save(sellerRecaps);

    const affiliateCommissions: DeepPartial<MonitoringAffiliateCommission>[] = [];
    for (let affIdx = 0; affIdx < affiliateNames.length; affIdx++) {
      for (let monthOffset = 0; monthOffset < 3; monthOffset++) {
        const totalRevenue = Math.floor(Math.random() * 300000000) + 20000000;
        const commRate = Number((Math.random() * 5 + 2).toFixed(2));
        const totalComm = Math.round(totalRevenue * commRate / 100);
        const isPaid = monthOffset > 0;

        affiliateCommissions.push({
          affiliateName: affiliateNames[affIdx],
          affiliateId: affiliateIds[affIdx],
          productName: products[affIdx % products.length].name,
          productId: `PROD${affIdx + 1}`,
          sellerId: sellers[affIdx % sellers.length].sellerId,
          sellerName: sellers[affIdx % sellers.length].name,
          orderId: `ORD-${Date.now()}-${affIdx}-${monthOffset}`,
          orderAmount: totalRevenue,
          commissionRate: commRate,
          commissionEarned: totalComm,
          paymentStatus: isPaid ? 'PAID' : 'PENDING',
          transactionDate: new Date(),
        });
      }
    }
    await this.monCommRepo.save(affiliateCommissions);

    await this.monAlertRepo.save([
      {
        title: 'Peningkatan Komisi Signifikan',
        description: 'Komisi Demo Affiliate meningkat 45% dari bulan lalu. Total komisi bulan ini: Rp 12.500.000',
        type: 'increase',
        severity: 'warning',
        isRead: false,
        sellerId: 'SLR001',
        sellerName: 'Toko Elektronik Jaya',
      },
      {
        title: 'Penurunan Penjualan Seller',
        description: 'Penjualan Toko Elektronik Jaya turun 25% dalam 7 hari terakhir',
        type: 'decrease',
        severity: 'warning',
        isRead: false,
        sellerId: 'SLR001',
        sellerName: 'Toko Elektronik Jaya',
      },
      {
        title: 'Komisi Baru Tercatat',
        description: 'Content Creator X mendapatkan komisi pertama kali dari channel live streaming sebesar Rp 3.200.000',
        type: 'increase',
        severity: 'info',
        isRead: true,
        sellerId: 'SLR003',
        sellerName: 'Beauty Palace Store',
      },
      {
        title: 'Anomali Order Terdeteksi',
        description: 'Terjadi lonjakan 200% pada pesanan dari seller SLR005 dalam 24 jam terakhir. Harap verifikasi.',
        type: 'anomaly',
        severity: 'critical',
        isRead: false,
        sellerId: 'SLR005',
        sellerName: 'Snack Paradise ID',
      },
    ]);

    console.log(`Monitoring seeded: ${soldProducts.length} sold products, ${sellerRecaps.length} seller recaps, ${affiliateCommissions.length} commissions, 4 alerts`);
  }
}
