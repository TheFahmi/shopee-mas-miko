import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  isPositive?: boolean;
  icon: LucideIcon;
  variant?: 'orange' | 'emerald' | 'indigo' | 'amber' | 'slate';
  badgeText?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  change,
  isPositive = true,
  icon: Icon,
  variant = 'slate',
  badgeText,
}: StatCardProps) {
  const iconBgStyles = {
    orange: 'bg-orange-50 text-shopee-500 border-orange-200 dark:bg-orange-950/40 dark:border-orange-800/40',
    emerald: 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:border-emerald-800/40',
    indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-950/40 dark:border-indigo-800/40',
    amber: 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:border-amber-800/40',
    slate: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:border-slate-700',
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/90">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {title}
            </span>
            {badgeText && (
              <span className="rounded bg-shopee-50 px-1.5 py-0.5 text-[10px] font-bold text-shopee-600 dark:bg-shopee-950/50 dark:text-shopee-400">
                {badgeText}
              </span>
            )}
          </div>
          <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {value}
          </div>
        </div>
        <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl border', iconBgStyles[variant])}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {(subtitle || change) && (
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs dark:border-slate-800">
          {change && (
            <span
              className={cn(
                'inline-flex items-center font-medium',
                isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'
              )}
            >
              {isPositive ? '↑' : '↓'} {change}
            </span>
          )}
          {subtitle && <span className="text-slate-500 dark:text-slate-400">{subtitle}</span>}
        </div>
      )}
    </div>
  );
}
