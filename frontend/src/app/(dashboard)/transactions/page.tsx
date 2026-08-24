'use client';

import React, { useState, useEffect } from 'react';
import {
  Receipt,
  Plus,
  Search,
  FileSpreadsheet,
  Radio,
  Video,
  Share2,
  Link as LinkIcon,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { Transaction, Product, TransactionStatus, TrafficSource } from '@/types';
import { formatRupiah, formatDateTimeIndo } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sourceFilter, setSourceFilter] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Transaction Form State
  const [newTrxProduct, setNewTrxProduct] = useState<string | number>('');
  const [newTrxQty, setNewTrxQty] = useState(1);
  const [newTrxSource, setNewTrxSource] = useState<TrafficSource>(TrafficSource.LIVE);
  const [newTrxNotes, setNewTrxNotes] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [txs, prods] = await Promise.all([
        api.getTransactions(),
        api.getProducts(),
      ]);
      setTransactions(txs);
      setProducts(prods);
      if (prods.length > 0) {
        setNewTrxProduct(prods[0].id);
      }
    } catch (err) {
      console.error('Error fetching transactions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddManualTrx = async () => {
    const prod = products.find((p) => String(p.id) === String(newTrxProduct)) || products[0];
    if (!prod) return;

    const totalP = prod.price * newTrxQty;
    const comm = totalP * (prod.commissionRate / 100);

    try {
      const created = await api.createTransaction({
        productId: String(prod.id),
        quantity: Number(newTrxQty),
        totalPrice: totalP,
        commission: comm,
        gmv: totalP,
        status: TransactionStatus.COMPLETED,
        trafficSource: newTrxSource,
        transactionDate: new Date().toISOString(),
        isManual: true,
        notes: newTrxNotes || 'Input manual admin',
      });
      setTransactions([created, ...transactions]);
      setIsAddModalOpen(false);
      toast.success('Transaksi manual berhasil dicatat ke backend!');
    } catch (err) {
      toast.error('Gagal mencatat transaksi');
    }
  };

  const handleExportCSV = () => {
    const csv =
      'data:text/csv;charset=utf-8,ID Transaksi,Produk,Kuantitas,GMV,Komisi,Status,Kanal,Tanggal\n' +
      transactions
        .map(
          (t) =>
            `"${t.id}","${t.product?.name || '-'}",${t.quantity},${t.totalPrice},${t.commission},"${t.status}","${t.trafficSource}","${t.transactionDate}"`
        )
        .join('\n');
    const encodedUri = encodeURI(csv);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `shopee_transactions_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Data transaksi CSV berhasil diekspor!');
  };

  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      String(t.id).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.product?.name || '').toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || t.status === statusFilter;
    const matchesSource = sourceFilter === 'ALL' || t.trafficSource === sourceFilter;
    return matchesSearch && matchesStatus && matchesSource;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Daftar Transaksi Afiliasi
            </h1>
            <Badge variant="emerald" size="sm">Backend Sync ({transactions.length} Trx)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Log seluruh transaksi pembelian yang teratribusi ke live streaming, affiliate video, dan campaign studio.
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
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600"
          >
            <Plus className="h-4 w-4" />
            <span>Input Transaksi Manual</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari ID transaksi / produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-950 py-2 pl-9 pr-4 text-xs text-white placeholder:text-slate-500 focus:border-shopee-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-slate-300 focus:border-shopee-500 focus:outline-none"
          >
            <option value="ALL">Semua Status</option>
            <option value={TransactionStatus.COMPLETED}>Completed</option>
            <option value={TransactionStatus.CONFIRMED}>Confirmed</option>
            <option value={TransactionStatus.PENDING}>Pending</option>
          </select>

          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-slate-300 focus:border-shopee-500 focus:outline-none"
          >
            <option value="ALL">Semua Traffic Source</option>
            <option value={TrafficSource.LIVE}>Shopee Live</option>
            <option value={TrafficSource.VIDEO}>Shopee Video</option>
            <option value={TrafficSource.SOCIAL_MEDIA}>Social Media</option>
            <option value={TrafficSource.DIRECT}>Direct Link</option>
          </select>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-800 bg-slate-950/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-5 py-3.5">ID Transaksi</th>
              <th className="px-5 py-3.5">Produk</th>
              <th className="px-5 py-3.5 text-center">Sumber Traffic</th>
              <th className="px-5 py-3.5 text-right">Nilai GMV</th>
              <th className="px-5 py-3.5 text-right">Komisi Studio</th>
              <th className="px-5 py-3.5 text-center">Status</th>
              <th className="px-5 py-3.5 text-right">Waktu</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredTransactions.map((trx) => (
              <tr key={trx.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-5 py-3.5 font-mono text-[11px] font-bold text-slate-300">{trx.id}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2 max-w-xs">
                    <img
                      src={trx.product?.imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&auto=format&fit=crop&q=80'}
                      alt=""
                      className="h-8 w-8 rounded-lg object-cover border border-slate-800 shrink-0"
                    />
                    <div className="truncate">
                      <p className="font-bold text-white truncate">{trx.product?.name || 'Produk Afiliasi'}</p>
                      <p className="text-[10px] text-slate-400">{trx.quantity} pcs @ {formatRupiah(trx.product?.price || trx.totalPrice / (trx.quantity || 1))}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-center">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-300">
                    {trx.trafficSource === TrafficSource.LIVE && <Radio className="h-3.5 w-3.5 text-shopee-500" />}
                    {trx.trafficSource === TrafficSource.VIDEO && <Video className="h-3.5 w-3.5 text-indigo-400" />}
                    {trx.trafficSource === TrafficSource.SOCIAL_MEDIA && <Share2 className="h-3.5 w-3.5 text-emerald-400" />}
                    {trx.trafficSource === TrafficSource.DIRECT && <LinkIcon className="h-3.5 w-3.5 text-amber-400" />}
                    <span>{trx.trafficSource}</span>
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-shopee-400">{formatRupiah(trx.totalPrice)}</td>
                <td className="px-5 py-3.5 text-right font-bold text-emerald-400">{formatRupiah(trx.commission)}</td>
                <td className="px-5 py-3.5 text-center">
                  <Badge
                    variant={
                      trx.status === TransactionStatus.COMPLETED
                        ? 'success'
                        : trx.status === TransactionStatus.CONFIRMED
                        ? 'info'
                        : 'warning'
                    }
                    size="sm"
                  >
                    {trx.status}
                  </Badge>
                </td>
                <td className="px-5 py-3.5 text-right text-[11px] text-slate-400">
                  {formatDateTimeIndo(trx.transactionDate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Input Transaksi Manual */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Input Transaksi Manual"
        subtitle="Catat transaksi offline, endorsement luar, atau rekap direct deal"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Pilih Produk</label>
            <select
              value={newTrxProduct}
              onChange={(e) => setNewTrxProduct(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            >
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} - {formatRupiah(p.price)} (Komisi {p.commissionRate}%)
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-300">Jumlah (Qty)</label>
              <input
                type="number"
                min={1}
                value={newTrxQty}
                onChange={(e) => setNewTrxQty(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-slate-300">Traffic Source</label>
              <select
                value={newTrxSource}
                onChange={(e) => setNewTrxSource(e.target.value as TrafficSource)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              >
                <option value={TrafficSource.LIVE}>Shopee Live</option>
                <option value={TrafficSource.VIDEO}>Shopee Video</option>
                <option value={TrafficSource.SOCIAL_MEDIA}>Social Media</option>
                <option value={TrafficSource.DIRECT}>Direct Link</option>
              </select>
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-300">Catatan Internal</label>
            <textarea
              rows={2}
              placeholder="Contoh: Pesanan manual dari sesi flash sale malam..."
              value={newTrxNotes}
              onChange={(e) => setNewTrxNotes(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="rounded-xl border border-slate-800 bg-slate-800 px-4 py-2 font-bold text-slate-300 hover:bg-slate-700"
            >
              Batal
            </button>
            <button
              onClick={handleAddManualTrx}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600"
            >
              Simpan Transaksi
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
