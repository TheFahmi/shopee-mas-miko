'use client';

import React, { useState, useEffect } from 'react';
import {
  Wallet,
  Calculator,
  Printer,
  Receipt,
  Sparkles,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { Payroll } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function PayrollPage() {
  const [payrolls, setPayrolls] = useState<Payroll[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSlip, setSelectedSlip] = useState<Payroll | null>(null);
  const [isSlipModalOpen, setIsSlipModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const loadData = async () => {
    setLoading(true);
    try {
      const data = await api.getPayrolls();
      setPayrolls(data);
    } catch (err) {
      console.error('Error fetching payrolls:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleGeneratePayroll = async () => {
    setIsGenerating(true);
    try {
      const now = new Date();
      await api.generatePayroll(now.getMonth() + 1, now.getFullYear());
      await loadData();
      toast.success('Kalkulasi Payroll & Bonus Komisi berhasil digenerate di backend!');
    } catch (err) {
      toast.error('Gagal generate payroll');
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Payroll & Slip Gaji Host
            </h1>
            <Badge variant="emerald" size="sm">Backend Connected ({payrolls.length} Records)</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Kalkulasi otomatis gaji pokok, insentif jam tayang live streaming, dan bagi hasil komisi omset GMV.
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
            onClick={handleGeneratePayroll}
            disabled={isGenerating}
            className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600 disabled:opacity-50"
          >
            <Calculator className={`h-4 w-4 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>{isGenerating ? 'Menghitung...' : 'Generate Payroll Periode Ini'}</span>
          </button>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/90 shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="border-b border-slate-800 bg-slate-950/60 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-5 py-3.5">Nama Host / Karyawan</th>
              <th className="px-5 py-3.5 text-right">Jam Live</th>
              <th className="px-5 py-3.5 text-right">Gaji Pokok & Jam</th>
              <th className="px-5 py-3.5 text-right">Bonus Komisi GMV</th>
              <th className="px-5 py-3.5 text-right">Potongan</th>
              <th className="px-5 py-3.5 text-right">Gaji Bersih (THP)</th>
              <th className="px-5 py-3.5 text-center">Status</th>
              <th className="px-5 py-3.5 text-center">Slip Gaji</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {payrolls.map((pay) => {
              const totalDeduction = (pay.lateDeduction || 0) + (pay.absenceDeduction || 0) + (pay.taxDeduction || 0) + (pay.bpjsDeduction || 0);

              return (
                <tr key={pay.id} className="hover:bg-slate-800/40 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">
                    <div>
                      <p className="text-xs">{pay.employeeName || pay.employee?.name || 'Host'}</p>
                      <p className="text-[10px] text-slate-400 font-normal">{pay.employeePosition || pay.employee?.position || 'Talent Live'}</p>
                    </div>
                  </td>
                  <td className="px-5 py-3.5 text-right font-semibold text-slate-300">
                    {pay.liveHoursCount || 0} Jam
                  </td>
                  <td className="px-5 py-3.5 text-right font-medium text-slate-300">
                    {formatRupiah((pay.baseSalary || 0) + (pay.liveHoursSalary || 0))}
                  </td>
                  <td className="px-5 py-3.5 text-right font-bold text-shopee-400">
                    {formatRupiah((pay.commissionBonus || 0) + (pay.performanceBonus || 0))}
                  </td>
                  <td className="px-5 py-3.5 text-right text-rose-400 font-medium">
                    -{formatRupiah(totalDeduction)}
                  </td>
                  <td className="px-5 py-3.5 text-right font-extrabold text-emerald-400 text-sm">
                    {formatRupiah(pay.netSalary || 0)}
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Badge variant={pay.status === 'APPROVED' ? 'success' : 'warning'} size="sm">
                      {pay.status}
                    </Badge>
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <button
                      onClick={() => {
                        setSelectedSlip(pay);
                        setIsSlipModalOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 border border-slate-700"
                    >
                      <Receipt className="h-3.5 w-3.5 text-shopee-400" />
                      <span>Cetak Slip</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Modal Slip Gaji Print Ready Format */}
      <Modal
        isOpen={isSlipModalOpen}
        onClose={() => setIsSlipModalOpen(false)}
        title="Slip Gaji Resmi (Shopee Mas Miko Studio)"
        subtitle="Rincian gaji pokok, bonus komisi performa, dan potongan bulanan"
        maxWidth="2xl"
      >
        {selectedSlip && (
          <div className="space-y-6 text-xs bg-slate-950 p-6 rounded-2xl border border-slate-800 text-slate-100">
            {/* Header Slip */}
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-base font-extrabold text-white">PT SHOPEE MAS MIKO CREATIVE</h2>
                <p className="text-[11px] text-slate-400">Live Streaming Studio & Affiliate Management</p>
                <p className="text-[10px] text-slate-500 mt-1">ID Dokumen: {selectedSlip.id}</p>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-400 border border-emerald-500/20">
                  SLIP GAJI RESMI
                </span>
                <p className="text-xs font-bold text-slate-300 mt-1">Periode: {selectedSlip.month}/{selectedSlip.year}</p>
              </div>
            </div>

            {/* Employee Info */}
            <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-900/80 p-3 border border-slate-800">
              <div>
                <span className="text-[10px] text-slate-400">Nama Karyawan / Host:</span>
                <p className="font-bold text-white text-sm">{selectedSlip.employeeName || selectedSlip.employee?.name || '-'}</p>
              </div>
              <div>
                <span className="text-[10px] text-slate-400">Posisi / Jabatan:</span>
                <p className="font-bold text-white text-sm">{selectedSlip.employeePosition || selectedSlip.employee?.position || '-'}</p>
              </div>
            </div>

            {/* Income & Deductions Breakdown */}
            <div className="grid grid-cols-2 gap-6">
              {/* Penghasilan */}
              <div className="space-y-2">
                <h4 className="font-bold text-emerald-400 uppercase text-[10px] tracking-wider border-b border-slate-800 pb-1">
                  Penerimaan (Income)
                </h4>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Gaji Pokok:</span>
                    <span className="font-medium text-white">{formatRupiah(selectedSlip.baseSalary || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Insentif Jam Live ({selectedSlip.liveHoursCount || 0} Jam):</span>
                    <span className="font-medium text-white">{formatRupiah(selectedSlip.liveHoursSalary || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bonus Komisi GMV Shopee:</span>
                    <span className="font-bold text-shopee-400">{formatRupiah(selectedSlip.commissionBonus || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Bonus Performa / KPI:</span>
                    <span className="font-medium text-white">{formatRupiah(selectedSlip.performanceBonus || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tunjangan Operasional:</span>
                    <span className="font-medium text-white">{formatRupiah(selectedSlip.allowance || 0)}</span>
                  </div>
                </div>
              </div>

              {/* Potongan */}
              <div className="space-y-2">
                <h4 className="font-bold text-rose-400 uppercase text-[10px] tracking-wider border-b border-slate-800 pb-1">
                  Potongan (Deductions)
                </h4>
                <div className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Potongan Keterlambatan:</span>
                    <span className="text-rose-400">-{formatRupiah(selectedSlip.lateDeduction || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">PPh 21 Pajak:</span>
                    <span className="text-rose-400">-{formatRupiah(selectedSlip.taxDeduction || 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">BPJS Ketenagakerjaan:</span>
                    <span className="text-rose-400">-{formatRupiah(selectedSlip.bpjsDeduction || 0)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Take Home Pay */}
            <div className="rounded-2xl bg-gradient-to-r from-emerald-950/40 to-slate-900 p-4 border border-emerald-500/30 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 font-semibold">TOTAL GAJI BERSIH (TAKE HOME PAY):</span>
                <p className="text-xs text-emerald-400">Ditransfer ke rekening BCA terdaftar</p>
              </div>
              <span className="text-2xl font-black text-emerald-400">
                {formatRupiah(selectedSlip.netSalary || 0)}
              </span>
            </div>

            {/* Print Action Buttons */}
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={handlePrintSlip}
                className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600 shadow-md shadow-shopee-500/20"
              >
                <Printer className="h-4 w-4" />
                <span>Cetak / Simpan PDF</span>
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
