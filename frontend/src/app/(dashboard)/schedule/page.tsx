'use client';

import React, { useState, useEffect } from 'react';
import {
  CalendarDays,
  Plus,
  ArrowLeftRight,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  Radio,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { Schedule, Studio, Employee, ScheduleSwapRequest } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function SchedulePage() {
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [studios, setStudios] = useState<Studio[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [swapRequests, setSwapRequests] = useState<ScheduleSwapRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isSwapModalOpen, setIsSwapModalOpen] = useState(false);

  // New Shift State
  const [newHostId, setNewHostId] = useState<string | number>('');
  const [newStudioId, setNewStudioId] = useState<string | number>('');
  const [newShiftDate, setNewShiftDate] = useState('2026-08-22');
  const [newShiftType, setNewShiftType] = useState<'PAGI' | 'SIANG' | 'SORE' | 'MALAM'>('PAGI');
  const [newStartTime, setNewStartTime] = useState('08:00');
  const [newEndTime, setNewEndTime] = useState('12:00');

  const loadData = async () => {
    setLoading(true);
    try {
      const [schList, stdList, empList, swpList] = await Promise.all([
        api.getSchedules(),
        api.getStudios(),
        api.getEmployees(),
        api.getSwapRequests(),
      ]);
      setSchedules(schList);
      setStudios(stdList);
      setEmployees(empList);
      setSwapRequests(swpList);
      if (empList.length > 0) setNewHostId(empList[0].id);
      if (stdList.length > 0) setNewStudioId(stdList[0].id);
    } catch (err) {
      console.error('Error fetching schedules:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddShift = async () => {
    const host = employees.find((e) => String(e.id) === String(newHostId));
    const studio = studios.find((s) => String(s.id) === String(newStudioId));
    if (!host || !studio) return;

    try {
      const created = await api.createSchedule({
        employeeId: host.id,
        employeeName: host.name,
        studioId: studio.id,
        studioName: studio.name,
        shiftDate: newShiftDate,
        shiftType: newShiftType,
        startTime: newStartTime,
        endTime: newEndTime,
        status: 'SCHEDULED',
        notes: 'Penugasan live stream',
      });

      setSchedules([...schedules, created]);
      setIsAddModalOpen(false);
      toast.success(`Jadwal shift berhasil ditambahkan untuk ${host.name} ke backend!`);
    } catch (err) {
      toast.error('Gagal menambahkan jadwal shift');
    }
  };

  const handleApproveSwap = async (id: number | string) => {
    try {
      await api.respondSwapRequest(Number(id), true);
      setSwapRequests((prev) =>
        prev.map((s) => (String(s.id) === String(id) ? { ...s, status: 'APPROVED' } : s))
      );
      toast.success('Permohonan tukar jadwal shift disetujui di backend!');
    } catch (err) {
      toast.error('Gagal menyetujui tukar jadwal');
    }
  };

  const handleRejectSwap = async (id: number | string) => {
    try {
      await api.respondSwapRequest(Number(id), false, 'Jadwal studio padat');
      setSwapRequests((prev) =>
        prev.map((s) => (String(s.id) === String(id) ? { ...s, status: 'REJECTED' } : s))
      );
      toast.error('Permohonan tukar jadwal ditolak.');
    } catch (err) {
      toast.error('Gagal menolak tukar jadwal');
    }
  };

  const shiftTimes = [
    { type: 'PAGI', label: 'Shift Pagi (08:00 - 12:00)' },
    { type: 'SIANG', label: 'Shift Siang (13:00 - 17:00)' },
    { type: 'SORE', label: 'Shift Sore (17:00 - 21:00)' },
    { type: 'MALAM', label: 'Shift Malam (21:00 - 01:00)' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Matriks Jadwal & Roster Studio
            </h1>
            <Badge variant="indigo" size="sm">Backend Sync ({schedules.length} Shift)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Pengaturan slot live stream antar studio, penugasan talent host, dan persetujuan tukar shift.
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
            onClick={() => setIsSwapModalOpen(true)}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800"
          >
            <ArrowLeftRight className="h-4 w-4 text-amber-400" />
            <span>Tukar Jadwal ({swapRequests.filter((r) => r.status === 'PENDING_ADMIN' || r.status === 'PENDING').length})</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600"
          >
            <Plus className="h-4 w-4" />
            <span>Tambah Jadwal Shift</span>
          </button>
        </div>
      </div>

      {/* Date Header Indicator */}
      <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
        <div className="flex items-center gap-3">
          <CalendarDays className="h-5 w-5 text-shopee-500" />
          <div>
            <h3 className="font-bold text-white text-sm">Jadwal Operasional: Live Studio Roster</h3>
            <p className="text-xs text-slate-400">{studios.length} Studio Terdaftar • Matriks 4 Slot Siaran</p>
          </div>
        </div>
      </div>

      {/* Visual Shift Matrix Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-sm">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-950/70 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              <th className="px-5 py-4 w-48">Ruang Studio</th>
              {shiftTimes.map((shift) => (
                <th key={shift.type} className="px-4 py-4 text-center">
                  {shift.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {studios.slice(0, 4).map((studio) => (
              <tr key={studio.id} className="hover:bg-slate-800/30">
                {/* Studio Column */}
                <td className="px-5 py-4 font-bold text-white bg-slate-950/40">
                  <div className="flex items-center gap-2">
                    <Radio className="h-4 w-4 text-shopee-400" />
                    <div>
                      <p className="text-xs">{studio.name}</p>
                      <p className="text-[10px] text-slate-400 font-normal">{studio.code}</p>
                    </div>
                  </div>
                </td>

                {/* Shift Slot Columns */}
                {shiftTimes.map((shift) => {
                  const assigned = schedules.find(
                    (s) => String(s.studioId) === String(studio.id) && s.shiftType === shift.type
                  );

                  return (
                    <td key={shift.type} className="p-2.5 text-center align-top">
                      {assigned ? (
                        <div className="rounded-xl border border-shopee-500/30 bg-shopee-500/10 p-3 text-left transition-all hover:border-shopee-500">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-shopee-400">
                              {assigned.startTime} - {assigned.endTime}
                            </span>
                            <Badge variant="shopee" size="sm">ON DUTY</Badge>
                          </div>
                          <p className="mt-1 font-bold text-white text-xs truncate">
                            {assigned.employeeName || assigned.employee?.name || 'Host Bertugas'}
                          </p>
                          <p className="text-[10px] text-slate-400 truncate mt-0.5">
                            {assigned.notes || 'Live Session'}
                          </p>
                        </div>
                      ) : (
                        <div className="flex h-20 items-center justify-center rounded-xl border border-dashed border-slate-800 bg-slate-950/20 text-[11px] text-slate-500">
                          Slot Kosong
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Add Shift */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Tambah Penugasan Shift Baru"
        subtitle="Alokasikan host ke studio dan jam tayang live streaming"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Pilih Talent Host</label>
            <select
              value={newHostId}
              onChange={(e) => setNewHostId(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            >
              {employees.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.name} ({e.employmentType} - Rate Rp {e.hourlyRate?.toLocaleString()}/jam)
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-300">Pilih Studio</label>
              <select
                value={newStudioId}
                onChange={(e) => setNewStudioId(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              >
                {studios.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-300">Tipe Shift</label>
              <select
                value={newShiftType}
                onChange={(e) => setNewShiftType(e.target.value as any)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              >
                <option value="PAGI">Shift Pagi</option>
                <option value="SIANG">Shift Siang</option>
                <option value="SORE">Shift Sore</option>
                <option value="MALAM">Shift Malam</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-300">Jam Mulai</label>
              <input
                type="time"
                value={newStartTime}
                onChange={(e) => setNewStartTime(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-slate-300">Jam Selesai</label>
              <input
                type="time"
                value={newEndTime}
                onChange={(e) => setNewEndTime(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="rounded-xl px-4 py-2 font-semibold text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              onClick={handleAddShift}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              Simpan Jadwal
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Swap Requests */}
      <Modal
        isOpen={isSwapModalOpen}
        onClose={() => setIsSwapModalOpen(false)}
        title="Permohonan Tukar Shift Host"
        subtitle="Daftar permintaan tukar jam siaran yang diajukan oleh talent host"
      >
        <div className="space-y-3 text-xs">
          {swapRequests.length === 0 ? (
            <p className="text-center py-6 text-slate-400">Tidak ada pengajuan tukar jadwal saat ini.</p>
          ) : (
            swapRequests.map((req) => (
              <div
                key={req.id}
                className="rounded-xl border border-slate-800 bg-slate-950/60 p-3.5 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{req.requesterHostName || req.requester?.name || 'Host'}</span>
                  <Badge variant={req.status === 'APPROVED' ? 'success' : req.status === 'REJECTED' ? 'danger' : 'warning'} size="sm">
                    {req.status}
                  </Badge>
                </div>
                <p className="text-slate-400">
                  Tukar shift tanggal <span className="text-white font-semibold">{req.targetDate || 'Hari Ini'}</span> dengan{' '}
                  <span className="text-shopee-400 font-semibold">{req.targetHostName || req.targetHost?.name || 'Host Pengganti'}</span>
                </p>
                <p className="text-[11px] text-slate-400 italic">Alasan: {req.reason || '-'}</p>

                {(req.status === 'PENDING_ADMIN' || req.status === 'PENDING') && (
                  <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
                    <button
                      onClick={() => handleRejectSwap(req.id)}
                      className="rounded-lg border border-slate-800 bg-slate-800 px-3 py-1 font-semibold text-rose-400 hover:bg-rose-500/20"
                    >
                      Tolak
                    </button>
                    <button
                      onClick={() => handleApproveSwap(req.id)}
                      className="rounded-lg bg-emerald-500 px-3 py-1 font-bold text-white hover:bg-emerald-600"
                    >
                      Setujui
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </Modal>
    </div>
  );
}
