'use client';

import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Award,
  TrendingUp,
  Target,
  RefreshCw,
  Crown,
  Medal,
  Clock,
  ShoppingBag,
} from 'lucide-react';
import { api } from '@/lib/api';
import { TargetKpi } from '@/types';
import { formatRupiah, formatCompactNumber } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { toast } from 'sonner';

export default function TargetsKpiPage() {
  const [kpiList, setKpiList] = useState<TargetKpi[]>([]);
  const [loading, setLoading] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await api.getTargets();
      setKpiList(data);
    } catch (err) {
      console.error('Error fetching targets:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleRecalculateKpi = async () => {
    setIsCalculating(true);
    try {
      await loadData();
      toast.success('Kalkulasi Skor KPI Host otomatis diperbarui dari database backend!');
    } catch (err) {
      toast.error('Gagal kalkulasi KPI');
    } finally {
      setIsCalculating(false);
    }
  };

  const topPodium = [...kpiList].sort((a, b) => (b.kpiScore || 0) - (a.kpiScore || 0));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Target & KPI Leaderboard
            </h1>
            <Badge variant="shopee" size="sm">Backend Connected ({kpiList.length} Hosts)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Penilaian performa host live streaming berdasarkan target omset GMV, total jam siaran, dan volume pesanan.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800"
          >
            <RefreshCw className={`h-4 w-4 text-shopee-400 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <button
            onClick={handleRecalculateKpi}
            disabled={isCalculating}
            className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600 disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${isCalculating ? 'animate-spin' : ''}`} />
            <span>{isCalculating ? 'Menghitung...' : 'Auto-Calculate KPI'}</span>
          </button>
        </div>
      </div>

      {/* Top 3 Podium Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {topPodium.slice(0, 3).map((item, idx) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-2xl border p-6 shadow-xl ${
              idx === 0
                ? 'border-amber-400/50 bg-gradient-to-b from-amber-950/30 to-slate-900 shadow-amber-400/10'
                : idx === 1
                ? 'border-slate-400/40 bg-gradient-to-b from-slate-800/50 to-slate-900'
                : 'border-amber-700/40 bg-gradient-to-b from-amber-950/20 to-slate-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-slate-400">
                {idx === 0 && <Crown className="h-4 w-4 text-amber-400" />}
                {idx === 1 && <Medal className="h-4 w-4 text-slate-300" />}
                {idx === 2 && <Medal className="h-4 w-4 text-amber-700" />}
                <span>Juara #{idx + 1}</span>
              </span>
              <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-xs font-black text-white">
                Skor {item.kpiScore || 90}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <img
                src={item.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                alt={item.employeeName || 'Host'}
                className="h-14 w-14 rounded-full object-cover border-2 border-slate-700"
              />
              <div>
                <h3 className="font-bold text-white text-base">{item.employeeName || item.employee?.name || 'Host Talent'}</h3>
                <p className="text-xs text-slate-400">{item.studioName || 'Studio Live'}</p>
              </div>
            </div>

            {/* Achievement Bar */}
            <div className="mt-6 space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400 font-semibold">Pencapaian Target GMV</span>
                <span className="font-bold text-shopee-400">
                  {Math.round(((item.achievedGmv || 0) / (item.targetGmv || 1)) * 100)}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className="h-full rounded-full bg-shopee-500 transition-all duration-500"
                  style={{
                    width: `${Math.min(100, Math.round(((item.achievedGmv || 0) / (item.targetGmv || 1)) * 100))}%`,
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 pt-0.5">
                <span>Real: {formatRupiah(item.achievedGmv || 0)}</span>
                <span>Target: {formatRupiah(item.targetGmv || 0)}</span>
              </div>
            </div>

            {/* Sub Metrics */}
            <div className="mt-5 grid grid-cols-2 gap-2 border-t border-slate-800 pt-3 text-center text-xs">
              <div className="rounded-xl bg-slate-800/40 p-2">
                <span className="text-[10px] text-slate-400 font-medium">Jam Tayang</span>
                <p className="font-bold text-white mt-0.5">{item.liveHoursAchieved || 0} / {item.liveHoursTarget || 40} Jam</p>
              </div>
              <div className="rounded-xl bg-slate-800/40 p-2">
                <span className="text-[10px] text-slate-400 font-medium">Pesanan Masuk</span>
                <p className="font-bold text-emerald-400 mt-0.5">{(item.ordersAchieved || 0).toLocaleString('id-ID')} Pcs</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Leaderboard Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-800 bg-slate-950/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-5 py-3.5">Rank & Nama Host</th>
              <th className="px-5 py-3.5 text-right">Target GMV</th>
              <th className="px-5 py-3.5 text-right">Realisasi GMV</th>
              <th className="px-5 py-3.5 text-center">Progress GMV</th>
              <th className="px-5 py-3.5 text-right">Jam Live</th>
              <th className="px-5 py-3.5 text-right">Skor KPI</th>
              <th className="px-5 py-3.5 text-center">Bonus Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {topPodium.map((item, idx) => {
              const gmvPercent = Math.round(((item.achievedGmv || 0) / (item.targetGmv || 1)) * 100);

              return (
                <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-slate-400 w-4">#{idx + 1}</span>
                      <img
                        src={item.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'}
                        alt=""
                        className="h-8 w-8 rounded-full object-cover border border-slate-700"
                      />
                      <div>
                        <p className="font-bold text-white text-xs">{item.employeeName || item.employee?.name || 'Host'}</p>
                        <p className="text-[10px] text-slate-400">{item.studioName || 'Studio Live'}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right text-slate-300 font-medium">{formatRupiah(item.targetGmv || 0)}</td>
                  <td className="px-5 py-3.5 text-right font-bold text-shopee-400">{formatRupiah(item.achievedGmv || 0)}</td>
                  <td className="px-5 py-3.5 text-center">
                    <span className="rounded-md bg-shopee-500/10 px-2 py-0.5 text-xs font-bold text-shopee-400 border border-shopee-500/20">
                      {gmvPercent}%
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right text-slate-300">{item.liveHoursAchieved || 0} Jam</td>
                  <td className="px-5 py-3.5 text-right font-extrabold text-emerald-400 text-sm">{item.kpiScore || 90}</td>
                  <td className="px-5 py-3.5 text-center">
                    <Badge variant={gmvPercent >= 100 ? 'success' : gmvPercent >= 80 ? 'shopee' : 'secondary'} size="sm">
                      {gmvPercent >= 100 ? 'Tier Diamond (+15%)' : gmvPercent >= 80 ? 'Tier Gold (+10%)' : 'Tier Silver'}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
