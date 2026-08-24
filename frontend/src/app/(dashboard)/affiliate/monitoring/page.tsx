'use client';

import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  AlertTriangle,
  FileSpreadsheet,
  CheckCircle2,
  Search,
  Store,
  BadgePercent,
  BellRing,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { MonitoringSoldProduct, MonitoringSellerRecap, MonitoringCommissionAlert } from '@/types';
import { formatRupiah, formatCompactNumber } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { toast } from 'sonner';

export default function AffiliateMonitoringPage() {
  const [activeTab, setActiveTab] = useState<'sold' | 'sellers' | 'alerts'>('sold');
  const [searchQuery, setSearchQuery] = useState('');
  const [alerts, setAlerts] = useState<MonitoringCommissionAlert[]>([]);
  const [soldProducts, setSoldProducts] = useState<MonitoringSoldProduct[]>([]);
  const [sellerRecaps, setSellerRecaps] = useState<MonitoringSellerRecap[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const [sold, recaps, alertList] = await Promise.all([
        api.getSoldProducts(),
        api.getSellerRecaps(),
        api.getAlerts(),
      ]);
      setSoldProducts(sold);
      setSellerRecaps(recaps);
      setAlerts(alertList);
    } catch (err) {
      console.error('Error fetching affiliate monitoring data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleResolveAlert = async (id: number | string) => {
    try {
      await api.markAlertRead(Number(id));
      setAlerts((prev) =>
        prev.map((a) => (String(a.id) === String(id) ? { ...a, isRead: true } : a))
      );
      toast.success('Alert anomali komisi ditandai sebagai diselesaikan di backend.');
    } catch (err) {
      toast.error('Gagal menyelesaikan alert');
    }
  };

  const handleExportCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,Kode,Nama Produk,Toko,Terjual,GMV,Komisi,Rate\n' +
      soldProducts
        .map(
          (p) =>
            `"${p.itemCode || p.productId || '-'}","${p.productName}","${p.shopName || p.sellerName || '-'}",${p.soldQuantity || p.quantitySold || 0},${p.totalGmv || p.totalRevenue || 0},${p.totalCommission || p.commissionAmount || 0},${p.effectiveCommissionRate || p.commissionRate || 0}%`
        )
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `shopee_sold_products_recap_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Laporan CSV berhasil diunduh!');
  };

  const filteredSoldProducts = soldProducts.filter(
    (p) =>
      p.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.shopName || p.sellerName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.itemCode || p.productId || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Monitoring Affiliate & Seller
            </h1>
            <Badge variant="shopee" size="sm">Backend Sync ({soldProducts.length} Produk Terjual)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Pantau produk terjual, rekap omset per seller partner, dan deteksi anomali perubahan rate komisi Shopee.
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
            onClick={handleExportCSV}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800"
          >
            <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
            <span>Ekspor CSV</span>
          </button>
        </div>
      </div>

      {/* Commission Alerts Banner (If any unread) */}
      {alerts.some((a) => !a.isRead) && (
        <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-rose-300">
                  Terdeteksi {alerts.filter((a) => !a.isRead).length} Anomali Komisi Seller
                </h4>
                <p className="text-[11px] text-rose-400/80">
                  Seller mengubah persentase komisi secara tiba-tiba pada katalog live aktif.
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveTab('alerts')}
              className="rounded-lg bg-rose-500/20 px-3 py-1.5 text-xs font-bold text-rose-300 hover:bg-rose-500/30"
            >
              Lihat Detail Alert
            </button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="flex border-b border-slate-800 text-xs font-bold">
        <button
          onClick={() => setActiveTab('sold')}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 transition-colors ${
            activeTab === 'sold'
              ? 'border-shopee-500 text-shopee-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <BadgePercent className="h-4 w-4" />
          <span>Produk Terjual ({soldProducts.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('sellers')}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 transition-colors ${
            activeTab === 'sellers'
              ? 'border-shopee-500 text-shopee-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Store className="h-4 w-4" />
          <span>Rekap Seller Partner ({sellerRecaps.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('alerts')}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 transition-colors ${
            activeTab === 'alerts'
              ? 'border-shopee-500 text-shopee-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <BellRing className="h-4 w-4" />
          <span>Alert Anomali Rate</span>
          {alerts.some((a) => !a.isRead) && (
            <span className="rounded-full bg-rose-500 px-1.5 py-0.2 text-[9px] font-bold text-white">
              {alerts.filter((a) => !a.isRead).length}
            </span>
          )}
        </button>
      </div>

      {/* Tab: Sold Products Table */}
      {activeTab === 'sold' && (
        <div className="space-y-4">
          {/* Search bar */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cari SKU, produk, atau nama toko..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 pl-9 pr-4 text-xs text-white placeholder:text-slate-500 focus:border-shopee-500 focus:outline-none"
              />
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Menampilkan {filteredSoldProducts.length} produk
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 bg-slate-950/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-5 py-3.5">Kode SKU</th>
                  <th className="px-5 py-3.5">Nama Produk</th>
                  <th className="px-5 py-3.5">Toko / Official</th>
                  <th className="px-5 py-3.5 text-right">Terjual (Pcs)</th>
                  <th className="px-5 py-3.5 text-right">Total GMV</th>
                  <th className="px-5 py-3.5 text-right">Komisi Mas Miko</th>
                  <th className="px-5 py-3.5 text-center">Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredSoldProducts.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="px-5 py-3.5 font-mono text-[11px] text-slate-400 font-semibold">{p.itemCode || p.productId || '-'}</td>
                    <td className="px-5 py-3.5 font-bold text-white max-w-xs truncate">{p.productName}</td>
                    <td className="px-5 py-3.5 text-slate-300">{p.shopName || p.sellerName || '-'}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-white">{(p.soldQuantity || p.quantitySold || 0).toLocaleString('id-ID')}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-shopee-400">{formatRupiah(p.totalGmv || p.totalRevenue || 0)}</td>
                    <td className="px-5 py-3.5 text-right font-bold text-emerald-400">{formatRupiah(p.totalCommission || p.commissionAmount || 0)}</td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 font-bold text-emerald-400 border border-emerald-500/20">
                        {p.effectiveCommissionRate || p.commissionRate || 0}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Seller Recap */}
      {activeTab === 'sellers' && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {sellerRecaps.map((seller) => (
            <div
              key={seller.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-sm space-y-4"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-white text-sm">{seller.sellerName}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 mt-0.5">
                    <span>★ {seller.rating || 4.9} Rating Toko</span>
                  </div>
                </div>
                <Badge variant={seller.status === 'TOP_TIER' ? 'shopee' : 'success'}>
                  {seller.status || 'ACTIVE'}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-slate-800/40 p-2.5 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Total GMV</span>
                  <p className="font-bold text-shopee-400 mt-0.5">{formatRupiah(seller.totalGmv || seller.totalRevenue || 0)}</p>
                </div>
                <div className="rounded-xl bg-slate-800/40 p-2.5 border border-slate-800">
                  <span className="text-slate-400 text-[10px]">Komisi Dihasilkan</span>
                  <p className="font-bold text-emerald-400 mt-0.5">{formatRupiah(seller.totalCommission || seller.commissionAmount || 0)}</p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span>{seller.totalProductsPromoted || seller.totalProducts || 0} Produk Dipromosikan</span>
                <span className="font-semibold text-white">Avg Rate {seller.averageCommissionRate || seller.commissionRate || 10}%</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab: Anomaly Alerts */}
      {activeTab === 'alerts' && (
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div
              key={alert.id}
              className={`flex items-start justify-between rounded-2xl border p-4 transition-all ${
                alert.isRead
                  ? 'border-slate-800 bg-slate-900/60 opacity-60'
                  : 'border-rose-500/40 bg-rose-950/20 shadow-lg'
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs">{alert.title || alert.type}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{alert.description}</p>
                  <div className="mt-2 flex items-center gap-3 text-[11px] text-slate-400">
                    <span>Produk: <strong className="text-slate-200">{alert.productName || '-'}</strong></span>
                    <span>•</span>
                    <span>Toko: <strong className="text-slate-200">{alert.sellerName || '-'}</strong></span>
                  </div>
                </div>
              </div>

              {!alert.isRead && (
                <button
                  onClick={() => handleResolveAlert(alert.id)}
                  className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-bold text-emerald-400 hover:bg-slate-700"
                >
                  Selesaikan Alert
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
