'use client';

import React, { useState, useEffect } from 'react';
import {
  CalendarOff,
  CheckCircle2,
  XCircle,
  Clock,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { LeaveRequest } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { toast } from 'sonner';

export default function LeaveRequestsPage() {
  const [requests, setRequests] = useState<LeaveRequest[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await api.getLeaveRequests();
      setRequests(data);
    } catch (err) {
      console.error('Error fetching leave requests:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleApprove = async (id: number | string) => {
    try {
      await api.respondLeaveRequest(Number(id), 'approved');
      setRequests((prev) =>
        prev.map((r) => (String(r.id) === String(id) ? { ...r, status: 'APPROVED' } : r))
      );
      toast.success('Pengajuan cuti/izin karyawan telah disetujui di backend!');
    } catch (err) {
      toast.error('Gagal menyetujui cuti');
    }
  };

  const handleReject = async (id: number | string) => {
    try {
      await api.respondLeaveRequest(Number(id), 'rejected', 'Kebutuhan studio tinggi');
      setRequests((prev) =>
        prev.map((r) => (String(r.id) === String(id) ? { ...r, status: 'REJECTED' } : r))
      );
      toast.error('Pengajuan cuti ditolak.');
    } catch (err) {
      toast.error('Gagal menolak cuti');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Pengajuan Cuti & Izin Host
            </h1>
            <Badge variant="warning" size="sm">Backend Sync ({requests.length} Pengajuan)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Daftar permohonan cuti tahunan, izin sakit, dan emergency leave para talent host.
          </p>
        </div>

        <button
          onClick={loadData}
          className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800"
        >
          <RefreshCw className={`h-4 w-4 text-shopee-400 ${loading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Requests List */}
      <div className="space-y-4">
        {requests.map((req) => (
          <div
            key={req.id}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-sm md:flex-row md:items-center"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-500/20 text-shopee-400">
                <CalendarOff className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-sm">{req.employeeName || req.employee?.name || 'Karyawan'}</h3>
                  <Badge variant={req.type === 'ANNUAL' ? 'info' : req.type === 'SICK' ? 'danger' : 'warning'} size="sm">
                    {req.type}
                  </Badge>
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Periode: <strong className="text-slate-200">{req.startDate}</strong> s/d{' '}
                  <strong className="text-slate-200">{req.endDate}</strong> ({req.daysCount || 1} Hari)
                </p>
                <p className="text-xs text-slate-300 italic mt-1 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800/60 inline-block">
                  &ldquo;{req.reason}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end md:self-center">
              {req.status === 'PENDING' ? (
                <>
                  <button
                    onClick={() => handleReject(req.id)}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2 text-xs font-bold text-rose-400 hover:bg-rose-500/20"
                  >
                    <XCircle className="h-4 w-4" />
                    <span>Tolak</span>
                  </button>
                  <button
                    onClick={() => handleApprove(req.id)}
                    className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/20"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Setujui Cuti</span>
                  </button>
                </>
              ) : (
                <Badge variant={req.status === 'APPROVED' ? 'success' : 'danger'}>
                  {req.status}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
