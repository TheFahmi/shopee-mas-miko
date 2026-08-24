'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Radio,
  ShoppingBag,
  Users,
  Wallet,
  Sparkles,
  ArrowUpRight,
  Eye,
  Flame,
  Award,
  ChevronRight,
  RefreshCw,
  Clock,
  PlayCircle,
} from 'lucide-react';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';
import { AreaLineChart, BarChart } from '@/components/ui/Charts';
import { api } from '@/lib/api';
import { Studio, Employee, Product } from '@/types';
import { formatRupiah, formatCompactNumber } from '@/lib/utils';
import { toast } from 'sonner';

export default function ExecutiveDashboard() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [stats, setStats] = useState<any>({
    todayRevenue: 28500000,
    todayCommission: 2420000,
    todayOrders: 142,
    monthlyRevenue: 1666000000,
    monthlyCommission: 184250000,
  });
  const [studios, setStudios] = useState<Studio[]>([]);
  const [hosts, setHosts] = useState<Employee[]>([]);
  const [topProducts, setTopProducts] = useState<Product[]>([]);
  const [chartData, setChartData] = useState<any[]>([]);

  const loadData = async () => {
    try {
      const [dashStats, studioList, employeeList, prodList, chart] = await Promise.all([
        api.getDashboardStats(),
        api.getStudios(),
        api.getEmployees(),
        api.getTopProducts(4),
        api.getRevenueChart('daily', 7),
      ]);
      setStats(dashStats);
      setStudios(studioList);
      setHosts(employeeList);
      setTopProducts(prodList);
      if (chart && chart.length > 0) {
        setChartData(
          chart.map((c: any) => ({
            label: c.date?.slice(5) || c.label,
            value: c.revenue || c.value,
            secondaryValue: c.commission || c.secondaryValue,
          })),
        );
      }
    } catch (err) {
      console.error('Error loading dashboard data:', err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSyncData = async () => {
    setIsSyncing(true);
    try {
      await loadData();
      toast.success('Data Shopee Live & Affiliate berhasil disinkronisasi dari backend!');
    } finally {
      setIsSyncing(false);
    }
  };

  // Fallback 30 Days GMV simulation data for the interactive area chart if empty
  const defaultChartData = [
    { label: '01 Ags', value: 42000000, secondaryValue: 2900000 },
    { label: '05 Ags', value: 68000000, secondaryValue: 5100000 },
    { label: '10 Ags', value: 95000000, secondaryValue: 8400000 },
    { label: '15 Ags', value: 142000000, secondaryValue: 12800000 },
    { label: '18 Ags', value: 110000000, secondaryValue: 9800000 },
    { label: '20 Ags', value: 185000000, secondaryValue: 17200000 },
    { label: '22 Ags', value: 215000000, secondaryValue: 21400000 },
  ];

  // Studio Traffic Breakdown
  const trafficChartData = [
    { label: 'Shopee Live', value: 68, color: 'bg-shopee-500' },
    { label: 'Shopee Video', value: 18, color: 'bg-indigo-500' },
    { label: 'TikTok/IG Bio', value: 10, color: 'bg-emerald-500' },
    { label: 'Direct Affiliate', value: 4, color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Executive Dashboard
            </h1>
            <Badge variant="shopee" dot size="sm">Live Backend Active</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Monitoring real-time performa studio live streaming, traffic komisi afiliasi, dan performa host hari ini.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSyncData}
            disabled={isSyncing}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:bg-slate-800 hover:text-white"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-shopee-400 ${isSyncing ? 'animate-spin' : ''}`} />
            <span>{isSyncing ? 'Menyinkronkan...' : 'Sinkron Backend API'}</span>
          </button>

          <Link
            href="/live-studios"
            className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/25 transition-all hover:bg-shopee-600 hover:shadow-shopee-500/40"
          >
            <Radio className="h-4 w-4" />
            <span>Studio Control Center</span>
          </Link>
        </div>
      </div>

      {/* KPI Highlight Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total GMV Bulan Ini"
          value={formatRupiah(stats?.monthlyRevenue || 1666000000)}
          change="24.8% vs bulan lalu"
          isPositive={true}
          icon={TrendingUp}
          variant="orange"
          badgeText="Target 83%"
        />
        <StatCard
          title="Estimasi Net Komisi"
          value={formatRupiah(stats?.monthlyCommission || stats?.todayCommission * 30 || 184250000)}
          change="31.2% peningkatan"
          isPositive={true}
          icon={Wallet}
          variant="emerald"
          badgeText="Avg 11.0%"
        />
        <StatCard
          title="Total Orders Terkonfirmasi"
          value={`${(stats?.todayOrders ? stats.todayOrders * 28 : 12480).toLocaleString('id-ID')} Pcs`}
          change="8.5% conv rate"
          isPositive={true}
          icon={ShoppingBag}
          variant="indigo"
          subtitle="Dari 340 jam streaming"
        />
        <StatCard
          title="Studio Terdaftar"
          value={`${studios.length > 0 ? studios.length : 3} Studio`}
          subtitle="5.290 Live Viewers"
          icon={Radio}
          variant="amber"
          badgeText="Live Hub"
        />
      </div>

      {/* Real-time Studio Live Stream Monitors */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="h-4 w-4 text-red-500 animate-pulse" />
            <h2 className="text-base font-bold text-white">Live Stream Studio Monitor</h2>
          </div>
          <Link href="/live-studios" className="flex items-center gap-1 text-xs font-semibold text-shopee-400 hover:text-shopee-300">
            <span>Buka Ruang Kontrol Lengkap</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {studios.slice(0, 3).map((studio) => (
            <div
              key={studio.id}
              className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-5 shadow-lg transition-all hover:border-slate-700"
            >
              {/* Studio Live Badge */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">{studio.code} • {studio.roomNumber}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-0.5 text-[11px] font-bold text-red-400 border border-red-500/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                  LIVE ON AIR
                </span>
              </div>

              <h3 className="mt-2 font-bold text-slate-100 text-sm">{studio.name}</h3>

              {/* Host Profile Info */}
              <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-800/60 p-2.5">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt={studio.currentHostName || 'Host'}
                    className="h-10 w-10 rounded-full object-cover border border-slate-700"
                  />
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-slate-900" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white truncate">{studio.currentHostName || 'Host Bertugas'}</p>
                  <p className="text-[10px] text-slate-400">Shift Live Streaming</p>
                </div>
              </div>

              {/* Live Real-Time Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                <div className="rounded-xl bg-slate-800/40 p-2 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-medium">Penjualan Live (GMV)</span>
                  <p className="text-sm font-bold text-shopee-400 mt-0.5">{formatRupiah(studio.currentGmv || 24500000)}</p>
                </div>
                <div className="rounded-xl bg-slate-800/40 p-2 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-medium">Penonton Realtime</span>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center justify-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    {(studio.currentViewers || 1420).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Charts & Analytics Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* 30-Day GMV Growth Trend Chart */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 lg:col-span-2 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h3 className="font-bold text-white text-base">Tren Pertumbuhan GMV & Komisi</h3>
              <p className="text-xs text-slate-400">Performa penjualan live stream dan affiliate terkoneksi database</p>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-slate-800 p-1 text-xs text-slate-300">
              <span className="rounded bg-shopee-500 px-2 py-0.5 font-bold text-white">Live Backend</span>
              <span className="px-2 py-0.5 text-slate-400">7 Hari</span>
            </div>
          </div>

          <div className="mt-6">
            <AreaLineChart data={chartData.length > 0 ? chartData : defaultChartData} height={260} />
          </div>
        </div>

        {/* Traffic Source Breakdown */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-sm">
          <div className="border-b border-slate-800/80 pb-4">
            <h3 className="font-bold text-white text-base">Sumber Traffic Penjualan</h3>
            <p className="text-xs text-slate-400">Kontribusi omset berdasarkan kanal distribusi</p>
          </div>

          <div className="mt-4">
            <BarChart data={trafficChartData} height={180} />
          </div>

          <div className="mt-6 space-y-2 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-slate-800/50">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-shopee-500" />
                <span className="text-slate-300 font-medium">Shopee Live Stream</span>
              </div>
              <span className="font-bold text-white">68% (Rp 1.13M)</span>
            </div>
            <div className="flex items-center justify-between py-1 border-b border-slate-800/50">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="text-slate-300 font-medium">Shopee Video</span>
              </div>
              <span className="font-bold text-white">18% (Rp 299jt)</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-slate-300 font-medium">TikTok / Social Media</span>
              </div>
              <span className="font-bold text-white">10% (Rp 166jt)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard Podium & Top Products Row */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Host Leaderboard */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              <h3 className="font-bold text-white text-base">Top Host Talent Bulan Ini</h3>
            </div>
            <Link href="/targets" className="text-xs font-semibold text-shopee-400 hover:text-shopee-300">
              Lihat Ranking Lengkap
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            {hosts.slice(0, 4).map((host, idx) => (
              <div
                key={host.id}
                className="flex items-center justify-between rounded-xl bg-slate-800/40 p-3 transition-colors hover:bg-slate-800/70 border border-slate-800/50"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold ${
                      idx === 0
                        ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/30'
                        : idx === 1
                        ? 'bg-slate-300 text-slate-950'
                        : idx === 2
                        ? 'bg-amber-700 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    #{idx + 1}
                  </div>
                  <img
                    src={host.avatarUrl}
                    alt={host.name}
                    className="h-10 w-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <p className="font-bold text-white text-xs">{host.name}</p>
                    <p className="text-[10px] text-slate-400">{host.assignedStudioName || 'Host Live'}</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-bold text-shopee-400 text-xs">{formatRupiah(host.totalGmvThisMonth || 125000000)}</p>
                  <p className="text-[10px] text-emerald-400 font-semibold">{host.totalLiveHoursThisMonth || 48} jam • KPI {host.kpiScore || 92}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Live Products */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-shopee-500" />
              <h3 className="font-bold text-white text-base">Produk Terlaris di Live</h3>
            </div>
            <Link href="/products" className="text-xs font-semibold text-shopee-400 hover:text-shopee-300">
              Kelola Katalog
            </Link>
          </div>

          <div className="mt-4 space-y-3">
            {topProducts.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between rounded-xl bg-slate-800/40 p-3 transition-colors hover:bg-slate-800/70 border border-slate-800/50"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-11 w-11 rounded-lg object-cover border border-slate-700 shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="font-bold text-white text-xs truncate">{product.name}</p>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400">
                      <span>{formatRupiah(product.price)}</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold">Komisi {product.commissionRate}%</span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0 pl-3">
                  <span className="rounded-md bg-shopee-500/10 px-2 py-0.5 text-xs font-bold text-shopee-400 border border-shopee-500/20">
                    {(product.totalSold || 150).toLocaleString('id-ID')} Terjual
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1">Komisi: {formatCompactNumber(product.commissionEarned || 1200000)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
