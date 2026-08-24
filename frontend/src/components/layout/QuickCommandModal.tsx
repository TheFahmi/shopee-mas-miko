'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  Radio,
  ShoppingBag,
  Receipt,
  Users,
  CalendarDays,
  Wallet,
  Trophy,
  TrendingUp,
  X,
} from 'lucide-react';
import { mockProducts, mockEmployees, mockStudios } from '@/lib/mockData';
import { formatRupiah } from '@/lib/utils';

interface QuickCommandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickCommandModal({ isOpen, onClose }: QuickCommandModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onClose(); // toggle
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const filteredProducts = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );
  const filteredEmployees = mockEmployees.filter((e) =>
    e.name.toLowerCase().includes(query.toLowerCase())
  );
  const filteredStudios = mockStudios.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20">
      <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
        {/* Search input header */}
        <div className="flex items-center gap-3 border-b border-slate-100 px-4 py-3.5 dark:border-slate-800">
          <Search className="h-5 w-5 text-shopee-500" />
          <input
            type="text"
            placeholder="Cari fitur, produk, studio, host, atau transaksi..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white"
          />
          <button onClick={onClose} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-96 space-y-4 overflow-y-auto p-4 text-xs">
          {/* Quick Navigations */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Navigasi Cepat</span>
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <button
                onClick={() => handleNavigate('/live-studios')}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2 text-left font-semibold text-slate-700 hover:bg-orange-50 hover:text-shopee-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
              >
                <Radio className="h-4 w-4 text-shopee-500" />
                <span>Live Studio Center</span>
              </button>
              <button
                onClick={() => handleNavigate('/schedule')}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2 text-left font-semibold text-slate-700 hover:bg-orange-50 hover:text-shopee-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
              >
                <CalendarDays className="h-4 w-4 text-emerald-500" />
                <span>Matriks Jadwal Shift</span>
              </button>
              <button
                onClick={() => handleNavigate('/payroll')}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2 text-left font-semibold text-slate-700 hover:bg-orange-50 hover:text-shopee-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
              >
                <Wallet className="h-4 w-4 text-indigo-500" />
                <span>Payroll & Slip Gaji</span>
              </button>
              <button
                onClick={() => handleNavigate('/targets')}
                className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2 text-left font-semibold text-slate-700 hover:bg-orange-50 hover:text-shopee-600 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-orange-950/30 dark:hover:text-orange-400"
              >
                <Trophy className="h-4 w-4 text-amber-500" />
                <span>Target & KPI Host</span>
              </button>
            </div>
          </div>

          {/* Products */}
          {filteredProducts.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Produk Afiliasi</span>
              <div className="mt-1.5 space-y-1">
                {filteredProducts.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleNavigate('/products')}
                    className="flex cursor-pointer items-center justify-between rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-shopee-500" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{p.name}</span>
                    </div>
                    <span className="font-bold text-shopee-600 dark:text-shopee-400">{formatRupiah(p.price)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hosts */}
          {filteredEmployees.length > 0 && (
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Host & Talent</span>
              <div className="mt-1.5 space-y-1">
                {filteredEmployees.slice(0, 3).map((e) => (
                  <div
                    key={e.id}
                    onClick={() => handleNavigate('/employees')}
                    className="flex cursor-pointer items-center justify-between rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-indigo-500" />
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{e.name}</span>
                    </div>
                    <span className="text-[11px] text-slate-500">{e.assignedStudioName || e.position}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
