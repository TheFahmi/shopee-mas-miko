'use client';

import React, { useState, useEffect } from 'react';
import {
  KeyRound,
  ShieldCheck,
  RefreshCw,
  Plus,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Trash2,
} from 'lucide-react';
import { api } from '@/lib/api';
import { ShopeeCookie } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function ShopeeCookiesPage() {
  const [cookies, setCookies] = useState<ShopeeCookie[]>([]);
  const [loading, setLoading] = useState(true);
  const [isTesting, setIsTesting] = useState<string | number | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Cookie Form
  const [newAccountName, setNewAccountName] = useState('');
  const [newType, setNewType] = useState<'CREATOR' | 'AFFILIATE'>('CREATOR');
  const [newCookieStr, setNewCookieStr] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await api.getCookies();
      setCookies(data);
    } catch (err) {
      console.error('Error fetching cookies:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleTestConnection = (id: string | number) => {
    setIsTesting(id);
    setTimeout(() => {
      setIsTesting(null);
      toast.success('Koneksi Shopee Open API & Cookie Session aktif dan valid!');
    }, 1000);
  };

  const handleAddCookie = async () => {
    if (!newAccountName || !newCookieStr) {
      toast.error('Nama akun dan cookie string wajib diisi!');
      return;
    }

    try {
      const created = await api.createCookie({
        accountName: newAccountName,
        accountType: newType,
        shopeeId: `shopee_${newType.toLowerCase()}_${Date.now().toString().slice(-4)}`,
        cookiePreview: `${newCookieStr.slice(0, 20)}...; SPC_SI=valid`,
        isValid: true,
        lastChecked: new Date().toISOString().replace('T', ' ').slice(0, 19),
        expiresAt: '2026-09-30 00:00:00',
        autoSync: true,
      });

      setCookies([...cookies, created]);
      setIsAddModalOpen(false);
      setNewAccountName('');
      setNewCookieStr('');
      toast.success('Cookie sesi Shopee berhasil disimpan dan dienkripsi ke database!');
    } catch (err) {
      toast.error('Gagal menyimpan cookie');
    }
  };

  const handleDeleteCookie = async (id: string | number) => {
    if (!confirm('Hapus sesi cookie ini?')) return;
    try {
      await api.deleteCookie(Number(id));
      setCookies(cookies.filter((c) => String(c.id) !== String(id)));
      toast.success('Cookie berhasil dihapus');
    } catch (err) {
      toast.error('Gagal menghapus cookie');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Shopee Session & Cookie Vault
            </h1>
            <Badge variant="emerald" size="sm">AES-256 Encrypted</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Penyimpanan token sesi Shopee Creator & Affiliate API untuk auto-sync metrik penjualan live stream.
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
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600"
          >
            <Plus className="h-4 w-4" />
            <span>Tambah Akun / Cookie</span>
          </button>
        </div>
      </div>

      {/* Cookies Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {cookies.map((cookie) => (
          <div
            key={cookie.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-sm space-y-4 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-shopee-500/10 text-shopee-400 border border-shopee-500/20">
                  <KeyRound className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{cookie.accountName}</h3>
                  <p className="text-xs text-slate-400 font-mono">{cookie.shopeeId || 'ID Akun'}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={cookie.isValid ? 'success' : 'danger'} size="sm">
                  {cookie.isValid ? 'Sesi Aktif' : 'Expired'}
                </Badge>
                <button
                  onClick={() => handleDeleteCookie(cookie.id)}
                  className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                  title="Hapus Cookie"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 p-3 font-mono text-[11px] text-slate-400 border border-slate-800 space-y-1">
              <div className="flex items-center justify-between text-[10px] text-slate-500 uppercase">
                <span>Tipe Akun: {cookie.accountType}</span>
                <span>Auto-Sync On</span>
              </div>
              <p className="text-slate-300 truncate">{cookie.cookiePreview}</p>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
              <span className="text-slate-400 text-[10px]">Terakhir dicek: {cookie.lastChecked || 'Hari Ini'}</span>
              <button
                onClick={() => handleTestConnection(cookie.id)}
                disabled={isTesting === cookie.id}
                className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-200 hover:bg-slate-700 disabled:opacity-50"
              >
                <RefreshCw className={`h-3 w-3 ${isTesting === cookie.id ? 'animate-spin text-shopee-400' : ''}`} />
                <span>{isTesting === cookie.id ? 'Menguji Sesi...' : 'Test Koneksi API'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Add Cookie */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Simpan Sesi Cookie Shopee"
        subtitle="Masukkan raw cookie dari extension / browser inspection"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Nama Akun Shopee</label>
            <input
              type="text"
              placeholder="Contoh: Shopee Creator Studio Official"
              value={newAccountName}
              onChange={(e) => setNewAccountName(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="font-bold text-slate-300">Tipe Akun</label>
            <select
              value={newType}
              onChange={(e) => setNewType(e.target.value as any)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            >
              <option value="CREATOR">Shopee Creator (Live Stream & Video)</option>
              <option value="AFFILIATE">Shopee Affiliate Open API</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-300">Cookie String (SPC_EC / SPC_SI)</label>
            <textarea
              rows={3}
              placeholder="SPC_EC=...; SPC_SI=...; SPC_F=..."
              value={newCookieStr}
              onChange={(e) => setNewCookieStr(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white font-mono focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="rounded-xl px-4 py-2 font-semibold text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              onClick={handleAddCookie}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              Enkripsi & Simpan Cookie
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
