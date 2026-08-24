'use client';

import React, { useState } from 'react';
import { formatRupiah, formatCompactNumber } from '@/lib/utils';

interface AreaLineChartProps {
  data: { label: string; value: number; secondaryValue?: number }[];
  height?: number;
  primaryLabel?: string;
  secondaryLabel?: string;
}

export function AreaLineChart({
  data,
  height = 240,
  primaryLabel = 'GMV Penjualan',
  secondaryLabel = 'Estimasi Komisi',
}: AreaLineChartProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (!data || data.length === 0) return null;

  const maxValue = Math.max(...data.map((d) => d.value), 100);
  const width = 800;
  const paddingX = 40;
  const paddingY = 30;
  const chartWidth = width - paddingX * 2;
  const chartHeight = height - paddingY * 2;

  const points = data.map((d, i) => {
    const x = paddingX + (i / (data.length - 1)) * chartWidth;
    const y = height - paddingY - (d.value / maxValue) * chartHeight;
    return { x, y, ...d };
  });

  const pathD = points.reduce((acc, curr, idx) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    const prev = points[idx - 1];
    const cpX1 = prev.x + (curr.x - prev.x) / 2;
    const cpY1 = prev.y;
    const cpX2 = prev.x + (curr.x - prev.x) / 2;
    const cpY2 = curr.y;
    return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${curr.x} ${curr.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height - paddingY} L ${points[0].x} ${height - paddingY} Z`;

  return (
    <div className="relative w-full">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
            <span className="h-2.5 w-2.5 rounded-full bg-shopee-500" />
            {primaryLabel}
          </div>
          {data[0]?.secondaryValue !== undefined && (
            <div className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              {secondaryLabel}
            </div>
          )}
        </div>
        {hoverIndex !== null && (
          <div className="text-xs font-semibold text-shopee-600 dark:text-shopee-400">
            {data[hoverIndex].label}: {formatRupiah(data[hoverIndex].value)}
          </div>
        )}
      </div>

      <div className="relative w-full overflow-hidden">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="h-full w-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="shopeeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ee4d2d" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ee4d2d" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio, idx) => {
            const y = height - paddingY - ratio * chartHeight;
            return (
              <g key={idx}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={width - paddingX}
                  y2={y}
                  stroke="#e2e8f0"
                  strokeDasharray="4 4"
                  className="stroke-slate-200 dark:stroke-slate-800"
                />
                <text
                  x={paddingX - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-slate-400 text-[10px]"
                >
                  {formatCompactNumber(maxValue * ratio)}
                </text>
              </g>
            );
          })}

          {/* Area under curve */}
          <path d={areaD} fill="url(#shopeeGradient)" />

          {/* Line curve */}
          <path
            d={pathD}
            fill="none"
            stroke="#ee4d2d"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Data Points */}
          {points.map((p, idx) => (
            <g
              key={idx}
              className="cursor-pointer"
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <circle
                cx={p.x}
                cy={p.y}
                r={hoverIndex === idx ? 6 : 4}
                className={`transition-all ${
                  hoverIndex === idx
                    ? 'fill-shopee-600 stroke-white stroke-2 shadow-lg'
                    : 'fill-white stroke-shopee-500 stroke-2 dark:fill-slate-900'
                }`}
              />
              <text
                x={p.x}
                y={height - 8}
                textAnchor="middle"
                className="fill-slate-400 text-[10px]"
              >
                {p.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}

interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  height?: number;
}

export function BarChart({ data, height = 200 }: BarChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value), 10);

  return (
    <div className="flex h-[200px] w-full items-end gap-3 pt-6">
      {data.map((item, idx) => {
        const heightPct = Math.round((item.value / maxValue) * 100);
        return (
          <div key={idx} className="group relative flex flex-1 flex-col items-center gap-2">
            {/* Tooltip on hover */}
            <div className="absolute -top-8 hidden rounded bg-slate-900 px-2 py-1 text-[10px] font-bold text-white shadow group-hover:block dark:bg-white dark:text-slate-900">
              {formatCompactNumber(item.value)}
            </div>

            <div className="relative w-full overflow-hidden rounded-t-lg bg-slate-100 dark:bg-slate-800">
              <div
                style={{ height: `${heightPct}%` }}
                className={`w-full transition-all duration-500 ${
                  item.color || 'bg-shopee-500'
                } group-hover:brightness-110`}
              />
            </div>
            <span className="truncate text-center text-[11px] font-medium text-slate-500 dark:text-slate-400">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
