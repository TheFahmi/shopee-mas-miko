'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  Radio,
  TrendingUp,
  UserCheck,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { api } from '@/lib/api';
import { UserRole } from '@/types';
import { toast } from 'sonner';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('admin@shopee-affiliate.com');
  const [password, setPassword] = useState('admin123');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await api.login(email, password);
      login(data.user);
      toast.success(`Selamat datang kembali, ${data.user.name}!`);

      if (data.user.role === UserRole.EMPLOYEE) {
        router.push('/portal');
      } else {
        router.push('/');
      }
    } catch {
      toast.error('Gagal login. Periksa email dan password.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickLogin = async (presetEmail: string, presetPass: string, role: UserRole) => {
    setEmail(presetEmail);
    setPassword(presetPass);
    setIsLoading(true);
    try {
      const data = await api.login(presetEmail, presetPass);
      login(data.user);
      toast.success(`Quick Login aktif sebagai ${data.user.name}!`);
      if (role === UserRole.EMPLOYEE) {
        router.push('/portal');
      } else {
        router.push('/');
      }
    } catch {
      toast.error('Gagal quick login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-100 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Brand Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-shopee-600 to-amber-500 shadow-xl shadow-shopee-500/20">
            <Radio className="h-7 w-7 text-white animate-pulse" />
          </div>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
            Shopee Mas Miko Hub
          </h2>
          <p className="mt-1 text-xs text-slate-400">
            Management Live Streaming Studio & Affiliate Ecosystem
          </p>
        </div>

        {/* Login Form Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-bold text-slate-300">Email Akun</label>
              <div className="relative mt-1.5">
                <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@shopee-affiliate.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 py-2.5 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:border-shopee-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-300">Password</label>
              <div className="relative mt-1.5">
                <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950/80 py-2.5 pl-10 pr-4 text-xs text-white placeholder:text-slate-500 focus:border-shopee-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-shopee-500 py-3 text-xs font-bold text-white shadow-lg shadow-shopee-500/25 transition-all hover:bg-shopee-600 disabled:opacity-50"
            >
              <span>{isLoading ? 'Memverifikasi...' : 'Masuk ke Dashboard'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Quick Demo Presets */}
          <div className="mt-8 border-t border-slate-800/80 pt-6">
            <p className="text-center text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">
              Preset Login Cepat (Terkoneksi Backend)
            </p>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => handleQuickLogin('admin@shopee-affiliate.com', 'admin123', UserRole.ADMIN)}
                className="flex flex-col items-center gap-1 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 text-center transition-all hover:border-shopee-500/50 hover:bg-slate-800"
              >
                <ShieldCheck className="h-4 w-4 text-shopee-400" />
                <span className="text-[11px] font-bold text-white">Admin Hub</span>
                <span className="text-[9px] text-slate-400">Full Access</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickLogin('karyawan@wish.com', 'employee123', UserRole.EMPLOYEE)}
                className="flex flex-col items-center gap-1 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 text-center transition-all hover:border-indigo-500/50 hover:bg-slate-800"
              >
                <UserCheck className="h-4 w-4 text-indigo-400" />
                <span className="text-[11px] font-bold text-white">Host Talent</span>
                <span className="text-[9px] text-slate-400">Portal & Live</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickLogin('affiliate@shopee-affiliate.com', 'admin123', UserRole.AFFILIATE)}
                className="flex flex-col items-center gap-1 rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 text-center transition-all hover:border-emerald-500/50 hover:bg-slate-800"
              >
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-[11px] font-bold text-white">Affiliate</span>
                <span className="text-[9px] text-slate-400">Komisi & Link</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
