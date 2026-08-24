'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Radio,
  TrendingUp,
  BarChart3,
  ShoppingBag,
  Receipt,
  CalendarDays,
  ClockCheck,
  Wallet,
  Trophy,
  Users,
  CalendarOff,
  KeyRound,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';
import { UserRole } from '@/types';

interface NavGroup {
  title: string;
  items: {
    label: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
    badgeVariant?: 'orange' | 'emerald' | 'indigo';
    adminOnly?: boolean;
  }[];
}

export function Sidebar() {
  const pathname = usePathname();
  const { role } = useAuth();

  const navigation: NavGroup[] = [
    {
      title: 'OPERASIONAL UTAMA',
      items: [
        { label: 'Executive Dashboard', href: '/', icon: LayoutDashboard },
        { label: 'Live Studio Center', href: '/live-studios', icon: Radio, badge: '3 LIVE', badgeVariant: 'orange' },
      ],
    },
    {
      title: 'AFFILIATE & PENJUALAN',
      items: [
        { label: 'Monitoring Affiliate', href: '/affiliate/monitoring', icon: TrendingUp, badge: 'Alert 2', badgeVariant: 'orange' },
        { label: 'Laporan Traffic & Video', href: '/affiliate/reports', icon: BarChart3 },
        { label: 'Katalog Produk & Komisi', href: '/products', icon: ShoppingBag },
        { label: 'Daftar Transaksi', href: '/transactions', icon: Receipt },
      ],
    },
    {
      title: 'HR, HOST & ROSTER',
      items: [
        { label: 'Matriks Jadwal & Shift', href: '/schedule', icon: CalendarDays },
        { label: 'Presensi & GPS Selfie', href: '/attendance', icon: ClockCheck },
        { label: 'Payroll & Slip Gaji', href: '/payroll', icon: Wallet },
        { label: 'Target & KPI Leaderboard', href: '/targets', icon: Trophy, badge: 'Podium', badgeVariant: 'emerald' },
        { label: 'Direktori Host & Karyawan', href: '/employees', icon: Users },
        { label: 'Pengajuan Cuti & Izin', href: '/leave-requests', icon: CalendarOff },
      ],
    },
    {
      title: 'INTEGRASI & SISTEM',
      items: [
        { label: 'Shopee Cookie Vault', href: '/shopee-cookies', icon: KeyRound },
      ],
    },
  ];

  return (
    <aside className="sticky top-0 z-30 flex h-screen w-64 flex-col border-r border-slate-200/80 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
      {/* Brand Header */}
      <div className="flex h-16 items-center justify-between border-b border-slate-100 px-5 dark:border-slate-800">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-shopee-600 to-orange-400 text-white shadow-md shadow-shopee-500/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900 dark:text-white">
              <span>Shopee Mas Miko</span>
            </div>
            <p className="text-[10px] font-medium text-slate-400">Live Studio & Affiliate ERP</p>
          </div>
        </Link>
      </div>

      {/* Nav List */}
      <div className="flex-1 space-y-6 overflow-y-auto px-3 py-4">
        {navigation.map((group, groupIdx) => (
          <div key={groupIdx} className="space-y-1">
            <h4 className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {group.title}
            </h4>
            <div className="mt-1 space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'group flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition-all duration-150',
                      isActive
                        ? 'bg-shopee-500 text-white shadow-md shadow-shopee-500/25 dark:bg-shopee-600'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={cn(
                          'h-4 w-4 transition-transform group-hover:scale-110',
                          isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-white'
                        )}
                      />
                      <span>{item.label}</span>
                    </div>

                    {item.badge && (
                      <span
                        className={cn(
                          'rounded-full px-1.5 py-0.5 text-[9px] font-bold',
                          isActive
                            ? 'bg-white/20 text-white'
                            : item.badgeVariant === 'orange'
                            ? 'bg-orange-100 text-shopee-700 dark:bg-orange-950/60 dark:text-orange-300'
                            : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                        )}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Host Portal Quick Switcher Widget */}
      <div className="border-t border-slate-100 p-3 dark:border-slate-800">
        <Link
          href="/portal"
          className="flex items-center justify-between rounded-xl border border-dashed border-shopee-300 bg-orange-50/70 p-2.5 text-xs transition-colors hover:bg-orange-100/70 dark:border-orange-900/50 dark:bg-orange-950/30 dark:hover:bg-orange-950/50"
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-shopee-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-shopee-500"></span>
            </span>
            <div>
              <span className="font-bold text-shopee-900 dark:text-orange-200">Portal Host Karyawan</span>
              <p className="text-[10px] text-shopee-700 dark:text-orange-400">Presensi & Slip Gaji</p>
            </div>
          </div>
          <ChevronRight className="h-4 w-4 text-shopee-600 dark:text-orange-300" />
        </Link>
      </div>
    </aside>
  );
}
