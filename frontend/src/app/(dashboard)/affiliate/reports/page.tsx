'use client';

import React, { useState, useEffect } from 'react';
import {
  Video,
  Radio,
  Share2,
  TrendingUp,
  RefreshCw,
} from 'lucide-react';
import { AreaLineChart, BarChart } from '@/components/ui/Charts';
import { StatCard } from '@/components/ui/StatCard';
import { Badge } from '@/components/ui/Badge';
import { api } from '@/lib/api';
import { formatRupiah } from '@/lib/utils';

export default function AffiliateReportsPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | 'this_month'>('this_month');
  const [chartData, setChartData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const days = timeRange === '7d' ? 7 : 30;
      const chart = await api.getRevenueChart('daily', days);
      if (chart && chart.length > 0) {
        setChartData(
          chart.map((c: any) => ({
            label: c.date?.slice(5) || c.label,
            value: c.revenue || c.value,
          }))
        );
      }
    } catch (err) {
      console.error('Error fetching affiliate reports chart:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [timeRange]);

  const defaultGrowthData = [
    { label: '01 Ags', value: 12000000 },
    { label: '05 Ags', value: 28000000 },
    { label: '10 Ags', value: 45000000 },
    { label: '15 Ags', value: 62000000 },
    { label: '18 Ags', value: 54000000 },
    { label: '20 Ags', value: 89000000 },
    { label: '22 Ags', value: 104000000 },
  ];

  const channelComparison = [
    { label: 'Shopee Live (Studio)', value: 1132000000, color: 'bg-shopee-500' },
    { label: 'Shopee Video (Shorts)', value: 299800000, color: 'bg-indigo-500' },
    { label: 'TikTok / Instagram Bio', value: 166600000, color: 'bg-emerald-500' },
    { label: 'Direct Affiliate Link', value: 67600000, color: 'bg-amber-500' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Laporan Traffic & Video Affiliate
            </h1>
            <Badge variant="purple" size="sm">Backend Analytics</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Analisis atribusi omset dan konversi dari Shopee Live, Shopee Video, dan kampanye sosial media.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-800 p-1 text-xs font-semibold">
          <button
            onClick={() => setTimeRange('7d')}
            className={`rounded-lg px-3 py-1.5 transition-colors ${
              timeRange === '7d' ? 'bg-shopee-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            7 Hari Terakhir
          </button>
          <button
            onClick={() => setTimeRange('this_month')}
            className={`rounded-lg px-3 py-1.5 transition-colors ${
              timeRange === 'this_month' ? 'bg-shopee-500 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Bulan Ini
          </button>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Shopee Live GMV"
          value="Rp 1.132.000.000"
          change="68% total omset"
          icon={Radio}
          variant="orange"
          badgeText="Dominan"
        />
        <StatCard
          title="Shopee Video GMV"
          value="Rp 299.800.000"
          change="18% total omset"
          icon={Video}
          variant="indigo"
          subtitle="42 Video dipublish"
        />
        <StatCard
          title="TikTok & IG Bio Link"
          value="Rp 166.600.000"
          change="10% total omset"
          icon={Share2}
          variant="emerald"
          subtitle="24.500 Clicks"
        />
        <StatCard
          title="Overall Conversion Rate"
          value="7.42%"
          change="↑ 1.2% dari target"
          icon={TrendingUp}
          variant="amber"
          badgeText="High Conv"
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* GMV Growth */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-sm">
          <h3 className="font-bold text-white text-base">Pertumbuhan Pendapatan Harian</h3>
          <p className="text-xs text-slate-400 mb-6">Akumulasi GMV seluruh traffic channel dari database</p>
          <AreaLineChart
            data={chartData.length > 0 ? chartData : defaultGrowthData}
            height={240}
            primaryLabel="GMV Traffic Gabungan"
          />
        </div>

        {/* Channel Breakdown */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-sm">
          <h3 className="font-bold text-white text-base">Perbandingan Kontribusi Kanal</h3>
          <p className="text-xs text-slate-400 mb-2">Total GMV berdasarkan platform promosi</p>
          <BarChart data={channelComparison} height={200} />

          <div className="mt-6 space-y-2 text-xs">
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-300">Shopee Live Streaming (Studio)</span>
              <span className="font-bold text-shopee-400">Rp 1.132.000.000 (68%)</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-800">
              <span className="text-slate-300">Shopee Video Content</span>
              <span className="font-bold text-indigo-400">Rp 299.800.000 (18%)</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-300">Social Media & Direct</span>
              <span className="font-bold text-emerald-400">Rp 234.200.000 (14%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
