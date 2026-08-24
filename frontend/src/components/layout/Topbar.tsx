'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Bell,
  Radio,
  UserCheck,
  ChevronDown,
  LogOut,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { QuickCommandModal } from './QuickCommandModal';

export function Topbar() {
  const { user, role, switchRole, logout } = useAuth();
  const [showRoleMenu, setShowRoleMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/85 px-6 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/85">
        {/* Search Bar / Command Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-1.5 text-xs text-slate-400 transition-colors hover:border-slate-300 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/60 dark:hover:border-slate-700 dark:hover:bg-slate-800"
          >
            <Search className="h-4 w-4 text-slate-400" />
            <span>Cari produk, studio, host, atau transaksi...</span>
            <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 text-[10px] font-bold text-slate-500 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
              Ctrl + K
            </kbd>
          </button>

          {/* Real-time Studio Live Ticker */}
          <div className="hidden items-center gap-2 rounded-xl bg-orange-50/80 px-3 py-1 text-xs font-semibold text-shopee-600 dark:bg-orange-950/40 dark:text-orange-300 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            <span>Studio 1, 2, 3 ON AIR</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span className="font-bold">Rp 156.520.000 GMV Live</span>
          </div>
        </div>

        {/* Action Controls & Role Switcher */}
        <div className="flex items-center gap-3">
          {/* Quick Role Switcher Dropdown (Essential for testing & admin/host view switching) */}
          <div className="relative">
            <button
              onClick={() => setShowRoleMenu(!showRoleMenu)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-shopee-500" />
              <span>Role: {role.toUpperCase()}</span>
              <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
            </button>

            {showRoleMenu && (
              <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Switch Demo Role:
                </div>
                <button
                  onClick={() => {
                    switchRole(UserRole.ADMIN);
                    setShowRoleMenu(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <span>Super Admin</span>
                  {role === UserRole.ADMIN && <Badge size="sm" variant="shopee">Aktif</Badge>}
                </button>
                <button
                  onClick={() => {
                    switchRole(UserRole.AFFILIATE);
                    setShowRoleMenu(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <span>Affiliate Specialist</span>
                  {role === UserRole.AFFILIATE && <Badge size="sm" variant="shopee">Aktif</Badge>}
                </button>
                <button
                  onClick={() => {
                    switchRole(UserRole.EMPLOYEE);
                    setShowRoleMenu(false);
                  }}
                  className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <span>Host Talent (Karyawan)</span>
                  {role === UserRole.EMPLOYEE && <Badge size="sm" variant="shopee">Aktif</Badge>}
                </button>
              </div>
            )}
          </div>

          {/* Notifications Center */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative rounded-xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Bell className="h-4 w-4" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-bold text-white">
                2
              </span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Notifikasi Studio & Komisi</h4>
                  <span className="text-[10px] text-shopee-600 dark:text-shopee-400">Tandai sudah baca</span>
                </div>
                <div className="mt-2 space-y-2">
                  <div className="rounded-xl bg-orange-50/70 p-2.5 text-xs dark:bg-orange-950/30">
                    <p className="font-semibold text-slate-900 dark:text-white">🚨 Penurunan Komisi Ekstra Seller</p>
                    <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                      Produk Serum Retinol 30ml turun ke 5%. Cek alert monitoring.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-2.5 text-xs dark:bg-slate-800/60">
                    <p className="font-semibold text-slate-900 dark:text-white">🚀 Studio Beta Viral Peak</p>
                    <p className="mt-0.5 text-[11px] text-slate-600 dark:text-slate-400">
                      Siti Rahayu mencapai 2.980 live viewers (Sunscreen Gel).
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Badge */}
          <div className="flex items-center gap-2.5 border-l border-slate-200 pl-3 dark:border-slate-800">
            <img
              src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
              alt={user?.name}
              className="h-8 w-8 rounded-full border border-slate-200 object-cover dark:border-slate-700"
            />
            <div className="hidden text-left sm:block">
              <p className="text-xs font-bold text-slate-900 dark:text-white">{user?.name || 'Miko Pratama'}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">{user?.email}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Global Quick Command Modal */}
      <QuickCommandModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
