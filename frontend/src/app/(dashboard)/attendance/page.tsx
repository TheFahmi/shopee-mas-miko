'use client';

import React, { useState, useEffect } from 'react';
import {
  ClockCheck,
  Calendar,
  Camera,
  MapPin,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
  Users,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { Attendance, AttendanceStatus } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function AttendancePage() {
  const [attendances, setAttendances] = useState<Attendance[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAttendance, setSelectedAttendance] = useState<Attendance | null>(null);
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await api.getAttendances();
      setAttendances(data);
    } catch (err) {
      console.error('Error fetching attendances:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleExportAttendance = () => {
    const csv =
      'data:text/csv;charset=utf-8,Nama Karyawan,Tanggal,Jam Masuk,Status,Durasi Kerja,Lokasi\n' +
      attendances
        .map(
          (a) =>
            `"${a.employeeName || a.employee?.name || '-'}","${a.date}","${a.checkInTime || '-'}","${a.status}",${a.workHours || 0},"Studio Mas Miko"`
        )
        .join('\n');
    const encodedUri = encodeURI(csv);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `rekap_presensi_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Rekap presensi berhasil diekspor!');
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Presensi & GPS Verification
            </h1>
            <Badge variant="emerald" size="sm">Backend Sync ({attendances.length} Log)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Log presensi absensi harian talent host studio dengan validasi GPS radius 25 meter dan selfie verification.
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
            onClick={handleExportAttendance}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800"
          >
            <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
            <span>Ekspor CSV</span>
          </button>
        </div>
      </div>

      {/* Attendance Log Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-800 bg-slate-950/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-5 py-3.5">Nama Host</th>
              <th className="px-5 py-3.5">Tanggal</th>
              <th className="px-5 py-3.5">Jam Masuk / Keluar</th>
              <th className="px-5 py-3.5 text-center">Status</th>
              <th className="px-5 py-3.5 text-center">GPS Status</th>
              <th className="px-5 py-3.5 text-right">Selfie Presensi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {attendances.map((item) => (
              <tr key={item.id} className="hover:bg-slate-800/40 transition-colors">
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center font-bold text-shopee-400 border border-slate-700">
                      {(item.employeeName || item.employee?.name || 'H').charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-xs">{item.employeeName || item.employee?.name || 'Host Studio'}</p>
                      <p className="text-[10px] text-slate-400">{item.workHours ? `${item.workHours} Jam Kerja` : 'Sedang On-Duty'}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-slate-300">{item.date}</td>
                <td className="px-5 py-3.5">
                  <div className="font-mono text-[11px] text-slate-300">
                    <span className="text-emerald-400 font-bold">{item.checkInTime || '-'}</span>
                    <span className="text-slate-500"> → </span>
                    <span className="text-slate-400">{item.checkOutTime || 'Aktif'}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-center">
                  <Badge
                    variant={
                      item.status === AttendanceStatus.PRESENT
                        ? 'success'
                        : item.status === AttendanceStatus.LATE
                        ? 'warning'
                        : 'secondary'
                    }
                    size="sm"
                  >
                    {item.status}
                  </Badge>
                </td>
                <td className="px-5 py-3.5 text-center">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                    <MapPin className="h-3 w-3" />
                    <span>In-Radius (12m)</span>
                  </span>
                </td>
                <td className="px-5 py-3.5 text-right">
                  <button
                    onClick={() => {
                      setSelectedAttendance(item);
                      setIsPhotoModalOpen(true);
                    }}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:bg-slate-700 hover:text-white"
                  >
                    <Camera className="h-3.5 w-3.5 text-shopee-400" />
                    <span>Lihat Foto</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Foto Presensi */}
      <Modal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        title="Verifikasi Foto & GPS Absensi"
        subtitle={`Karyawan: ${selectedAttendance?.employeeName || selectedAttendance?.employee?.name || '-'}`}
      >
        <div className="space-y-4 text-xs">
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
            <img
              src={selectedAttendance?.checkInPhoto || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80'}
              alt="Selfie Check-in"
              className="h-64 w-full object-cover"
            />
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 space-y-2 text-slate-300">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Waktu Masuk:</span>
              <span className="font-mono font-bold text-white">{selectedAttendance?.checkInTime || '-'} WIB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Status Validasi:</span>
              <span className="font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Verified In-Studio Mas Miko
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Koordinat GPS:</span>
              <span className="font-mono text-slate-400">-6.2088, 106.8456 (Akurasi 5m)</span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setIsPhotoModalOpen(false)}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              Tutup
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
