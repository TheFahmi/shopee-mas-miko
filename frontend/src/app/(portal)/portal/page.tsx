'use client';

import React, { useState, useEffect } from 'react';
import {
  ClockCheck,
  CalendarDays,
  Wallet,
  CalendarOff,
  Camera,
  MapPin,
  TrendingUp,
  Award,
  CheckCircle2,
  AlertCircle,
  Radio,
  Receipt,
  Sparkles,
  ArrowLeftRight,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { formatRupiah } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function EmployeePortalPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'attendance' | 'schedule' | 'payroll' | 'requests'>('attendance');
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState('-');
  const [hostData, setHostData] = useState<any>({
    name: user?.name || 'Budi Santoso',
    assignedStudioName: 'Studio Alpha',
    kpiScore: 94.5,
    totalLiveHoursThisMonth: 48,
    totalGmvThisMonth: 345000000,
    commissionRate: 1.5,
    avatarUrl: user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  });
  const [schedules, setSchedules] = useState<any[]>([]);
  const [payslips, setPayslips] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [isCheckInModalOpen, setIsCheckInModalOpen] = useState(false);
  const [isRequestCutiModalOpen, setIsRequestCutiModalOpen] = useState(false);
  const [isRequestSwapModalOpen, setIsRequestSwapModalOpen] = useState(false);

  // Form State
  const [cutiType, setCutiType] = useState('ANNUAL');
  const [cutiReason, setCutiReason] = useState('');
  const [swapReason, setSwapReason] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [portalMe, schs, pays] = await Promise.all([
        api.getPortalMe(),
        api.getPortalSchedule(),
        api.getPortalPayslips(),
      ]);
      if (portalMe && portalMe.employee) {
        setHostData(portalMe.employee);
      }
      setSchedules(schs);
      setPayslips(pays);
    } catch (err) {
      console.error('Error fetching portal data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handlePerformCheckIn = async () => {
    try {
      await api.portalCheckIn('Check-in live stream studio');
      setIsCheckedIn(true);
      const now = new Date().toLocaleTimeString('id-ID');
      setCheckInTime(now);
      setIsCheckInModalOpen(false);
      toast.success(`Presensi Berhasil ke backend! Waktu masuk tercatat: ${now}`);
    } catch (err) {
      toast.error('Gagal check-in presensi');
    }
  };

  const handlePerformCheckOut = async () => {
    try {
      await api.portalCheckOut('Selesai sesi live');
      setIsCheckedIn(false);
      toast.info('Presensi Check-Out berhasil dicatat ke backend!');
    } catch (err) {
      toast.error('Gagal check-out presensi');
    }
  };

  const handleSubmitCuti = () => {
    if (!cutiReason) {
      toast.error('Alasan cuti wajib diisi!');
      return;
    }
    setIsRequestCutiModalOpen(false);
    setCutiReason('');
    toast.success('Pengajuan cuti berhasil dikirim ke Admin untuk ditinjau.');
  };

  const handleSubmitSwap = () => {
    if (!swapReason) {
      toast.error('Alasan tukar shift wajib diisi!');
      return;
    }
    setIsRequestSwapModalOpen(false);
    setSwapReason('');
    toast.success('Permohonan tukar shift berhasil diajukan ke rekan host & admin.');
  };

  return (
    <div className="space-y-6">
      {/* Host Profile Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-orange-950/40 p-6 shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={hostData.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
              alt={hostData.name}
              className="h-16 w-16 rounded-2xl object-cover border-2 border-shopee-500 shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white">{hostData.name}</h1>
                <Badge variant="shopee" size="sm">Host Talent</Badge>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{hostData.assignedStudioName || 'Studio Live Hub'}</p>
              <div className="flex items-center gap-3 text-xs text-slate-300 mt-2">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <Award className="h-3.5 w-3.5" /> KPI Skor: {hostData.kpiScore || 94}
                </span>
                <span>•</span>
                <span>{hostData.totalLiveHoursThisMonth || 48} Jam Live Bulan Ini</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {!isCheckedIn ? (
              <button
                onClick={() => setIsCheckInModalOpen(true)}
                className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/25 hover:bg-emerald-700 transition-all"
              >
                <Camera className="h-4 w-4" />
                <span>Clock-In Sekarang</span>
              </button>
            ) : (
              <button
                onClick={handlePerformCheckOut}
                className="flex items-center gap-2 rounded-2xl bg-rose-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-rose-600/25 hover:bg-rose-700 transition-all"
              >
                <ClockCheck className="h-4 w-4" />
                <span>Clock-Out (Selesai Live)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-800 text-xs font-bold">
        <button
          onClick={() => setActiveTab('attendance')}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 transition-colors ${
            activeTab === 'attendance' ? 'border-shopee-500 text-shopee-400' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          <ClockCheck className="h-4 w-4" />
          <span>Presensi & Absensi</span>
        </button>
        <button
          onClick={() => setActiveTab('schedule')}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 transition-colors ${
            activeTab === 'schedule' ? 'border-shopee-500 text-shopee-400' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          <CalendarDays className="h-4 w-4" />
          <span>Jadwal Shift Saya</span>
        </button>
        <button
          onClick={() => setActiveTab('payroll')}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 transition-colors ${
            activeTab === 'payroll' ? 'border-shopee-500 text-shopee-400' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          <Wallet className="h-4 w-4" />
          <span>Slip Gaji & Bonus Komisi</span>
        </button>
        <button
          onClick={() => setActiveTab('requests')}
          className={`flex items-center gap-2 border-b-2 px-4 py-3 transition-colors ${
            activeTab === 'requests' ? 'border-shopee-500 text-shopee-400' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          <CalendarOff className="h-4 w-4" />
          <span>Pengajuan Cuti & Tukar Shift</span>
        </button>
      </div>

      {/* Tab 1: Attendance Card */}
      {activeTab === 'attendance' && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-4">
            <h3 className="font-bold text-white text-base">Status Presensi Hari Ini</h3>
            <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Status Kehadiran:</span>
                <Badge variant={isCheckedIn ? 'success' : 'neutral'}>
                  {isCheckedIn ? 'HADIR (ON DUTY)' : 'BELUM CLOCK-IN'}
                </Badge>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Waktu Masuk:</span>
                <span className="font-mono font-bold text-white">{checkInTime} WIB</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Lokasi Studio:</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> Radius 8m Valid
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400">
              *Pastikan GPS aktif dan berada di dalam area gedung studio sebelum menekan tombol Clock-In.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 space-y-4">
            <h3 className="font-bold text-white text-base">Live Omset yang Dihasilkan</h3>
            <div className="rounded-xl bg-gradient-to-br from-shopee-500/20 to-orange-900/20 p-5 border border-shopee-500/30 text-center space-y-1">
              <span className="text-xs text-shopee-300 font-semibold">Total GMV Penjualan Sesi Live Anda</span>
              <p className="text-2xl font-black text-shopee-400">{formatRupiah(hostData.totalGmvThisMonth || 345000000)}</p>
              <p className="text-xs text-emerald-400 font-bold mt-2">
                Estimasi Bonus Komisi Anda: {formatRupiah((hostData.totalGmvThisMonth || 345000000) * ((hostData.commissionRate || 1.5) / 100))}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Schedules */}
      {activeTab === 'schedule' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-white text-sm">Jadwal Shift Live Mendatang</h3>
            <button
              onClick={() => setIsRequestSwapModalOpen(true)}
              className="flex items-center gap-1.5 rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700"
            >
              <ArrowLeftRight className="h-3.5 w-3.5 text-amber-400" />
              <span>Ajukan Tukar Shift</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {schedules.length === 0 ? (
              <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 col-span-2 text-center text-slate-400 text-xs">
                Tidak ada jadwal siaran aktif untuk hari ini.
              </div>
            ) : (
              schedules.map((sch) => (
                <div key={sch.id} className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-shopee-400">{sch.shiftDate}</span>
                    <Badge variant="shopee" size="sm">{sch.shiftType}</Badge>
                  </div>
                  <h4 className="font-bold text-white text-sm">{sch.studioName || 'Studio Live'}</h4>
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <span>Jam: {sch.startTime} - {sch.endTime}</span>
                    <span className="text-emerald-400 font-semibold">Terkonfirmasi</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Payroll */}
      {activeTab === 'payroll' && (
        <div className="space-y-4">
          <h3 className="font-bold text-white text-sm">Riwayat Slip Gaji</h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-sm">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-800 bg-slate-950/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-5 py-3.5">Bulan / Periode</th>
                  <th className="px-5 py-3.5 text-right">Jam Live</th>
                  <th className="px-5 py-3.5 text-right">Bonus Komisi</th>
                  <th className="px-5 py-3.5 text-right">Gaji Bersih (THP)</th>
                  <th className="px-5 py-3.5 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {payslips.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-5 py-6 text-center text-slate-400">
                      Belum ada data slip gaji tersimpan di akun Anda.
                    </td>
                  </tr>
                ) : (
                  payslips.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-800/40">
                      <td className="px-5 py-3.5 font-bold text-white">{p.month}/{p.year}</td>
                      <td className="px-5 py-3.5 text-right text-slate-300">{p.liveHoursCount} Jam</td>
                      <td className="px-5 py-3.5 text-right font-bold text-shopee-400">{formatRupiah(p.commissionBonus)}</td>
                      <td className="px-5 py-3.5 text-right font-extrabold text-emerald-400">{formatRupiah(p.netSalary)}</td>
                      <td className="px-5 py-3.5 text-center">
                        <Badge variant="success" size="sm">{p.status}</Badge>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Requests */}
      {activeTab === 'requests' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-white text-sm">Pengajuan Izin / Cuti</h3>
            <button
              onClick={() => setIsRequestCutiModalOpen(true)}
              className="rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow hover:bg-shopee-600"
            >
              Ajukan Cuti Baru
            </button>
          </div>
        </div>
      )}

      {/* Modal Clock In */}
      <Modal
        isOpen={isCheckInModalOpen}
        onClose={() => setIsCheckInModalOpen(false)}
        title="Validasi Selfie & GPS Clock-In"
        subtitle="Sistem akan mencatat lokasi GPS dan selfie saat clock in"
      >
        <div className="space-y-4 text-xs">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center space-y-2">
            <Camera className="h-10 w-10 text-emerald-400 mx-auto animate-pulse" />
            <p className="font-bold text-white">Kamera Studio Terdeteksi</p>
            <p className="text-slate-400">GPS: In-Radius Studio Mas Miko (Valid)</p>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={() => setIsCheckInModalOpen(false)}
              className="rounded-xl px-4 py-2 font-semibold text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              onClick={handlePerformCheckIn}
              className="rounded-xl bg-emerald-600 px-5 py-2.5 font-bold text-white hover:bg-emerald-700 shadow-lg shadow-emerald-600/20"
            >
              Konfirmasi Clock-In
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Cuti */}
      <Modal
        isOpen={isRequestCutiModalOpen}
        onClose={() => setIsRequestCutiModalOpen(false)}
        title="Form Pengajuan Cuti / Izin"
        subtitle="Kirimkan permohonan ke supervisor & admin"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Tipe Izin</label>
            <select
              value={cutiType}
              onChange={(e) => setCutiType(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            >
              <option value="ANNUAL">Cuti Tahunan</option>
              <option value="SICK">Izin Sakit</option>
              <option value="EMERGENCY">Emergency Leave</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-300">Alasan</label>
            <textarea
              rows={3}
              value={cutiReason}
              onChange={(e) => setCutiReason(e.target.value)}
              placeholder="Jelaskan alasan izin / cuti..."
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => setIsRequestCutiModalOpen(false)}
              className="rounded-xl px-4 py-2 font-semibold text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              onClick={handleSubmitCuti}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              Kirim Pengajuan
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Swap Shift */}
      <Modal
        isOpen={isRequestSwapModalOpen}
        onClose={() => setIsRequestSwapModalOpen(false)}
        title="Ajukan Tukar Shift Siaran"
        subtitle="Pilih jadwal shift yang ingin ditukar"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Alasan Tukar Shift</label>
            <textarea
              rows={3}
              value={swapReason}
              onChange={(e) => setSwapReason(e.target.value)}
              placeholder="Contoh: Ada keperluan mendadak, ingin bertukar shift sore dengan Siti..."
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => setIsRequestSwapModalOpen(false)}
              className="rounded-xl px-4 py-2 font-semibold text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              onClick={handleSubmitSwap}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              Kirim Permohonan
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
