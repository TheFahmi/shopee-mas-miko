'use client';

import React, { useState, useEffect } from 'react';
import {
  Radio,
  Play,
  Square,
  Camera,
  Users,
  Eye,
  Settings,
  Sparkles,
  RefreshCw,
  Plus,
} from 'lucide-react';
import { api } from '@/lib/api';
import { Studio, Employee } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function LiveStudiosPage() {
  const [studios, setStudios] = useState<Studio[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudio, setSelectedStudio] = useState<Studio | null>(null);
  const [isSwitchHostModalOpen, setIsSwitchHostModalOpen] = useState(false);
  const [isSnapshotModalOpen, setIsSnapshotModalOpen] = useState(false);
  const [selectedHostId, setSelectedHostId] = useState('');
  const [snapshotLoading, setSnapshotLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const [studioList, empList] = await Promise.all([
        api.getStudios(),
        api.getEmployees(),
      ]);
      setStudios(studioList);
      setEmployees(empList);
      if (empList.length > 0) {
        setSelectedHostId(String(empList[0].id));
      }
    } catch (err) {
      console.error('Error fetching studios:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStartSession = async (studio: Studio) => {
    try {
      await api.updateStudio(Number(studio.id), {
        status: 'IN_USE',
        currentGmv: 0,
        currentViewers: 120,
        streamStartTime: new Date().toISOString(),
      });
      setStudios((prev) =>
        prev.map((s) =>
          s.id === studio.id
            ? {
                ...s,
                status: 'IN_USE',
                currentGmv: 0,
                currentViewers: 120,
                streamStartTime: new Date().toISOString(),
              }
            : s
        )
      );
      toast.success('Live Streaming Studio berhasil dimulai!');
    } catch (err) {
      toast.error('Gagal memulai sesi live');
    }
  };

  const handleEndSession = async (studio: Studio) => {
    try {
      await api.updateStudio(Number(studio.id), {
        status: 'ACTIVE',
        currentGmv: 0,
        currentViewers: 0,
      });
      setStudios((prev) =>
        prev.map((s) =>
          s.id === studio.id
            ? {
                ...s,
                status: 'ACTIVE',
                currentGmv: 0,
                currentViewers: 0,
              }
            : s
        )
      );
      toast.info('Sesi Live Streaming telah diakhiri.');
    } catch (err) {
      toast.error('Gagal mengakhiri sesi live');
    }
  };

  const handleCaptureSnapshot = () => {
    setSnapshotLoading(true);
    setTimeout(() => {
      setSnapshotLoading(false);
      setIsSnapshotModalOpen(false);
      toast.success('Snapshot Live Room & Shopee Creator Metric berhasil disimpan ke backend!');
    }, 1000);
  };

  const handleSwitchHost = async () => {
    if (!selectedStudio || !selectedHostId) return;
    const host = employees.find((e) => String(e.id) === String(selectedHostId));
    if (!host) return;

    try {
      await api.updateStudio(Number(selectedStudio.id), {
        currentHostId: String(host.id),
        currentHostName: host.name,
      });
      setStudios((prev) =>
        prev.map((s) =>
          s.id === selectedStudio.id
            ? {
                ...s,
                currentHostId: String(host.id),
                currentHostName: host.name,
              }
            : s
        )
      );
      setIsSwitchHostModalOpen(false);
      toast.success(`Host ${host.name} berhasil ditugaskan ke ${selectedStudio.name}`);
    } catch (err) {
      toast.error('Gagal mengganti host');
    }
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Live Studio Operations
            </h1>
            <Badge variant="shopee" dot size="sm">Backend Connected ({studios.length} Rooms)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Pusat kendali live streaming real-time seluruh bilik studio Shopee Live & Creator room.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={loadData}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:bg-slate-800"
          >
            <RefreshCw className={`h-4 w-4 text-shopee-400 ${loading ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
          <button
            onClick={() => {
              if (studios.length > 0) setSelectedStudio(studios[0]);
              setIsSnapshotModalOpen(true);
            }}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:bg-slate-800"
          >
            <Camera className="h-4 w-4 text-shopee-400" />
            <span>Capture Room Snapshot</span>
          </button>
        </div>
      </div>

      {/* Studios Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {studios.map((studio) => {
          const isLive = studio.status === 'IN_USE';

          return (
            <div
              key={studio.id}
              className={`relative overflow-hidden rounded-2xl border transition-all ${
                isLive
                  ? 'border-shopee-500/50 bg-gradient-to-b from-slate-900 to-slate-950 shadow-xl shadow-shopee-500/10'
                  : 'border-slate-800 bg-slate-900/90'
              } p-5`}
            >
              {/* Studio Top bar */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-400">{studio.code} • {studio.roomNumber}</span>
                  <h3 className="font-bold text-white text-base mt-0.5">{studio.name}</h3>
                </div>

                {isLive ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 px-2.5 py-0.5 text-[11px] font-bold text-red-400 border border-red-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                    LIVE ON AIR
                  </span>
                ) : (
                  <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-semibold text-slate-400">
                    Standby / Ready
                  </span>
                )}
              </div>

              {/* Host Profile Info */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-slate-800/60 p-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt={studio.currentHostName || 'Host'}
                    className="h-10 w-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <p className="text-xs font-bold text-white">{studio.currentHostName || 'Belum Ada Host'}</p>
                    <p className="text-[10px] text-slate-400">Shift Studio Live</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedStudio(studio);
                    setIsSwitchHostModalOpen(true);
                  }}
                  className="rounded-lg border border-slate-700 bg-slate-800 px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white"
                >
                  Ganti Host
                </button>
              </div>

              {/* Live Real-Time Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                <div className="rounded-xl bg-slate-800/40 p-2.5 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-medium">GMV Sesi Ini</span>
                  <p className="text-sm font-bold text-shopee-400 mt-0.5">{formatRupiah(studio.currentGmv || 0)}</p>
                </div>
                <div className="rounded-xl bg-slate-800/40 p-2.5 border border-slate-800">
                  <span className="text-[10px] text-slate-400 font-medium">Live Viewers</span>
                  <p className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center justify-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    {(studio.currentViewers || 0).toLocaleString('id-ID')}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex items-center gap-2">
                {isLive ? (
                  <button
                    onClick={() => handleEndSession(studio)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-rose-500/20 py-2 text-xs font-bold text-rose-400 border border-rose-500/30 hover:bg-rose-500 hover:text-white transition-all"
                  >
                    <Square className="h-4 w-4" />
                    <span>Akhiri Sesi Streaming</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleStartSession(studio)}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-shopee-500 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/25 hover:bg-shopee-600 transition-all"
                  >
                    <Play className="h-4 w-4 fill-white" />
                    <span>Mulai Live Streaming</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Switch Host */}
      <Modal
        isOpen={isSwitchHostModalOpen}
        onClose={() => setIsSwitchHostModalOpen(false)}
        title="Tugaskan Host Baru ke Studio"
        subtitle={`Studio: ${selectedStudio?.name || ''}`}
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Pilih Host dari Roster</label>
            <select
              value={selectedHostId}
              onChange={(e) => setSelectedHostId(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            >
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} ({emp.position}) - {emp.assignedStudioName || 'Studio Alpha'}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
            <button
              onClick={() => setIsSwitchHostModalOpen(false)}
              className="rounded-xl px-4 py-2 font-semibold text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              onClick={handleSwitchHost}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              Simpan Penugasan
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Capture Snapshot */}
      <Modal
        isOpen={isSnapshotModalOpen}
        onClose={() => setIsSnapshotModalOpen(false)}
        title="Capture Live Snapshot & Analytics"
        subtitle="Ambil rekaman visual bilik live dan catat metric real-time ke database"
      >
        <div className="space-y-4 text-xs">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-center space-y-2">
            <Camera className="h-10 w-10 text-shopee-400 mx-auto animate-pulse" />
            <p className="font-bold text-white">Streaming Studio Live Hub Mas Miko</p>
            <p className="text-slate-400">Resolusi 1080p 60fps • Bitrate 4500 kbps • Stream Key Active</p>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={() => setIsSnapshotModalOpen(false)}
              className="rounded-xl px-4 py-2 font-semibold text-slate-400 hover:text-white"
            >
              Batal
            </button>
            <button
              onClick={handleCaptureSnapshot}
              disabled={snapshotLoading}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              {snapshotLoading ? 'Menyimpan Snapshot...' : 'Ambil Snapshot Sekarang'}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
