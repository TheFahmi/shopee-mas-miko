'use client';

import React, { useState, useEffect } from 'react';
import {
  Users,
  Plus,
  Search,
  Phone,
  Mail,
  Award,
  Radio,
  Sparkles,
  Trash2,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { Employee, EmployeePosition, EmploymentType, EmployeeStatus } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function EmployeesPage() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Employee Form
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newPosition, setNewPosition] = useState<EmployeePosition>(EmployeePosition.HOST_LIVE);
  const [newType, setNewType] = useState<EmploymentType>(EmploymentType.FULL_TIME);
  const [newBaseSalary, setNewBaseSalary] = useState(5000000);
  const [newHourlyRate, setNewHourlyRate] = useState(50000);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await api.getEmployees();
      setEmployees(data);
    } catch (err) {
      console.error('Error fetching employees:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddEmployee = async () => {
    if (!newName || !newEmail) {
      toast.error('Nama dan email wajib diisi!');
      return;
    }

    try {
      const created = await api.createEmployee({
        name: newName,
        email: newEmail,
        phone: newPhone || '081234567890',
        position: newPosition,
        employmentType: newType,
        status: EmployeeStatus.ACTIVE,
        baseSalary: Number(newBaseSalary),
        hourlyRate: Number(newHourlyRate),
        commissionRate: 1.5,
        joinedDate: new Date().toISOString().split('T')[0],
        avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        assignedStudioName: 'Studio Alpha',
        totalLiveHoursThisMonth: 0,
        totalGmvThisMonth: 0,
        kpiScore: 90.0,
      });

      setEmployees([created, ...employees]);
      setIsAddModalOpen(false);
      setNewName('');
      setNewEmail('');
      setNewPhone('');
      toast.success('Host baru berhasil didaftarkan ke backend!');
    } catch (err) {
      toast.error('Gagal mendaftarkan host');
    }
  };

  const handleDeleteEmployee = async (id: number | string) => {
    if (!confirm('Hapus karyawan ini dari roster?')) return;
    try {
      await api.deleteEmployee(Number(id));
      setEmployees(employees.filter((e) => String(e.id) !== String(id)));
      toast.success('Karyawan berhasil dihapus');
    } catch (err) {
      toast.error('Gagal menghapus karyawan');
    }
  };

  const filteredEmployees = employees.filter(
    (e) =>
      e.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (e.assignedStudioName && e.assignedStudioName.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Manajemen Roster Host & Tim
            </h1>
            <Badge variant="indigo" size="sm">Backend Sync ({employees.length} Host)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Kelola data talent host live streaming, KPI performa, shift studio, dan struktur kompensasi.
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
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600"
          >
            <Plus className="h-4 w-4" />
            <span>Tambah Host / Staff</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:w-80">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
        <input
          type="text"
          placeholder="Cari nama host / posisi..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 pl-9 pr-4 text-xs text-white placeholder:text-slate-500 focus:border-shopee-500 focus:outline-none"
        />
      </div>

      {/* Employees Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((emp) => (
          <div
            key={emp.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/90 p-5 shadow-sm space-y-4 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={emp.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}
                  alt={emp.name}
                  className="h-12 w-12 rounded-full object-cover border-2 border-slate-700"
                />
                <div>
                  <h3 className="font-bold text-white text-sm">{emp.name}</h3>
                  <p className="text-xs text-slate-400">{emp.position}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={emp.employmentType === EmploymentType.FULL_TIME ? 'shopee' : 'secondary'}
                  size="sm"
                >
                  {emp.employmentType}
                </Badge>
                <button
                  onClick={() => handleDeleteEmployee(emp.id)}
                  className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                  title="Hapus Karyawan"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Studio Assigned:</span>
                <span className="font-semibold text-white">{emp.assignedStudioName || 'Studio Alpha'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Gaji Pokok:</span>
                <span className="font-semibold text-emerald-400">{formatRupiah(emp.baseSalary)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Rate Live / Jam:</span>
                <span className="font-semibold text-shopee-400">{formatRupiah(emp.hourlyRate)}</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
              <span className="flex items-center gap-1">
                <Award className="h-3.5 w-3.5 text-amber-400" />
                <span>KPI: {emp.kpiScore || 90}</span>
              </span>
              <span>{emp.totalLiveHoursThisMonth || 0} Jam Bulan Ini</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Tambah Host */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Registrasi Host / Talent Baru"
        subtitle="Daftarkan host baru ke roster dan database studio Shopee Mas Miko"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Contoh: Rina Anggraini"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-300">Email Kerja</label>
              <input
                type="email"
                placeholder="rina@wish.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-slate-300">Nomor WhatsApp</label>
              <input
                type="tel"
                placeholder="081234567890"
                value={newPhone}
                onChange={(e) => setNewPhone(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-300">Posisi</label>
              <select
                value={newPosition}
                onChange={(e) => setNewPosition(e.target.value as any)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              >
                <option value={EmployeePosition.HOST_LIVE}>Host Live Streaming</option>
                <option value={EmployeePosition.TALENT_VIDEO}>Talent Shopee Video</option>
                <option value={EmployeePosition.OPERATOR}>Operator Studio</option>
              </select>
            </div>
            <div>
              <label className="font-bold text-slate-300">Tipe Kontrak</label>
              <select
                value={newType}
                onChange={(e) => setNewType(e.target.value as any)}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              >
                <option value={EmploymentType.FULL_TIME}>Full Time</option>
                <option value={EmploymentType.PART_TIME}>Part Time</option>
                <option value={EmploymentType.FREELANCE}>Freelance</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-300">Gaji Pokok (Rp)</label>
              <input
                type="number"
                value={newBaseSalary}
                onChange={(e) => setNewBaseSalary(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-slate-300">Rate Jam Live (Rp/Jam)</label>
              <input
                type="number"
                value={newHourlyRate}
                onChange={(e) => setNewHourlyRate(Number(e.target.value))}
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
              onClick={handleAddEmployee}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              Daftarkan Host
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
