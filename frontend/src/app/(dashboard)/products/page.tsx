'use client';

import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Plus,
  Search,
  Calculator,
  ExternalLink,
  Trash2,
  Sparkles,
  Link as LinkIcon,
  Copy,
  Check,
  RefreshCw,
} from 'lucide-react';
import { api } from '@/lib/api';
import { Product, Category } from '@/types';
import { formatRupiah, formatCompactNumber } from '@/lib/utils';
import { Badge } from '@/components/ui/Badge';
import { Modal } from '@/components/ui/Modal';
import { toast } from 'sonner';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | number | null>(null);

  // Commission Calculator State
  const [calcPrice, setCalcPrice] = useState<number>(250000);
  const [calcRate, setCalcRate] = useState<number>(10);
  const [calcEstSold, setCalcEstSold] = useState<number>(100);

  // New Product Form State
  const [newProdName, setNewProdName] = useState('');
  const [newProdPrice, setNewProdPrice] = useState(100000);
  const [newProdRate, setNewProdRate] = useState(10);
  const [newProdCategory, setNewProdCategory] = useState('1');
  const [newProdUrl, setNewProdUrl] = useState('');

  const loadData = async () => {
    setLoading(true);
    try {
      const [prods, cats] = await Promise.all([
        api.getProducts(),
        api.getCategories(),
      ]);
      setProducts(prods);
      setCategories(cats);
      if (cats.length > 0) {
        setNewProdCategory(String(cats[0].id));
      }
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCopyAffiliateLink = (product: Product) => {
    const affiliateLink = product.shopeeUrl || `https://shope.ee/miko_${product.id}?utm_source=studio_live`;
    navigator.clipboard.writeText(affiliateLink);
    setCopiedId(product.id);
    toast.success('Link Affiliate Shopee berhasil disalin ke clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleAddProduct = async () => {
    if (!newProdName) {
      toast.error('Nama produk wajib diisi!');
      return;
    }
    try {
      const created = await api.createProduct({
        name: newProdName,
        price: Number(newProdPrice),
        commissionRate: Number(newProdRate),
        categoryId: newProdCategory,
        shopeeUrl: newProdUrl || 'https://shopee.co.id',
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80',
        totalSold: 0,
        totalRevenue: 0,
        commissionEarned: 0,
      });
      setProducts([created, ...products]);
      setIsAddModalOpen(false);
      setNewProdName('');
      toast.success('Produk baru berhasil disimpan ke backend!');
    } catch (err) {
      toast.error('Gagal menambahkan produk');
    }
  };

  const handleDeleteProduct = async (id: number | string) => {
    if (!confirm('Yakin ingin menghapus produk ini?')) return;
    try {
      await api.deleteProduct(Number(id));
      setProducts(products.filter((p) => String(p.id) !== String(id)));
      toast.success('Produk berhasil dihapus');
    } catch (err) {
      toast.error('Gagal menghapus produk');
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === 'ALL' || String(p.categoryId) === String(selectedCategory);
    return matchesSearch && matchesCat;
  });

  const estimatedCommission = (calcPrice * (calcRate / 100)) * calcEstSold;
  const estimatedGmv = calcPrice * calcEstSold;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Katalog Produk & Komisi
            </h1>
            <Badge variant="shopee" size="sm">Backend Connected ({products.length})</Badge>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Daftar produk dengan rate komisi tertinggi untuk dipromosikan di live streaming dan video konten.
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
            onClick={() => setIsCalcModalOpen(true)}
            className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800"
          >
            <Calculator className="h-4 w-4 text-emerald-400" />
            <span>Kalkulator Komisi</span>
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-shopee-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600"
          >
            <Plus className="h-4 w-4" />
            <span>Tambah Produk</span>
          </button>
        </div>
      </div>

      {/* Filters & Search Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari nama produk..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-slate-800 bg-slate-900/90 py-2 pl-9 pr-4 text-xs text-white placeholder:text-slate-500 focus:border-shopee-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`rounded-lg px-3 py-1.5 transition-colors ${
              selectedCategory === 'ALL'
                ? 'bg-shopee-500 text-white'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Semua Kategori
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(String(cat.id))}
              className={`rounded-lg px-3 py-1.5 transition-colors ${
                String(selectedCategory) === String(cat.id)
                  ? 'bg-shopee-500 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-sm transition-all hover:border-slate-700 hover:shadow-lg"
          >
            <div>
              {/* Product Image with Commission Badge */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-800">
                <img
                  src={product.imageUrl || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80'}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute right-2.5 top-2.5 rounded-full bg-emerald-500/90 px-2.5 py-0.5 text-[11px] font-bold text-white shadow backdrop-blur-sm">
                  Komisi {product.commissionRate}%
                </div>
                {product.category && (
                  <div className="absolute left-2.5 top-2.5 rounded-md bg-slate-950/80 px-2 py-0.5 text-[10px] font-semibold text-slate-300 backdrop-blur-sm">
                    {product.category.name}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-white text-xs line-clamp-2 leading-snug">
                  {product.name}
                </h3>
                <div className="flex items-baseline justify-between">
                  <span className="text-base font-extrabold text-shopee-400">
                    {formatRupiah(product.price)}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Est: {formatRupiah(product.price * (product.commissionRate / 100))} / pcs
                  </span>
                </div>
              </div>
            </div>

            {/* Actions & Sales Stats */}
            <div className="border-t border-slate-800/80 bg-slate-950/40 p-3">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                <span>{(product.totalSold || 0).toLocaleString('id-ID')} Terjual</span>
                <span className="text-emerald-400 font-semibold">{formatCompactNumber(product.commissionEarned || 0)} Komisi</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyAffiliateLink(product)}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-shopee-500/15 py-1.5 text-xs font-bold text-shopee-400 border border-shopee-500/30 hover:bg-shopee-500 hover:text-white transition-all"
                >
                  {copiedId === product.id ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedId === product.id ? 'Tersalin!' : 'Copy Link'}</span>
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="rounded-xl border border-slate-800 bg-slate-800 p-1.5 text-rose-400 hover:bg-rose-500/20"
                  title="Hapus Produk"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <a
                  href={product.shopeeUrl || 'https://shopee.co.id'}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-800 bg-slate-800 p-1.5 text-slate-400 hover:text-white"
                  title="Buka Halaman Shopee"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Add Product */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Tambah Produk Afiliasi Baru"
        subtitle="Masukkan detail produk Shopee untuk masuk ke katalog live studio"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Nama Produk</label>
            <input
              type="text"
              placeholder="Contoh: Skincare Serum Niacinamide 30ml"
              value={newProdName}
              onChange={(e) => setNewProdName(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800/80 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-300">Harga (Rp)</label>
              <input
                type="number"
                value={newProdPrice}
                onChange={(e) => setNewProdPrice(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800/80 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-slate-300">Rate Komisi (%)</label>
              <input
                type="number"
                value={newProdRate}
                onChange={(e) => setNewProdRate(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800/80 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-300">Kategori</label>
            <select
              value={newProdCategory}
              onChange={(e) => setNewProdCategory(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800/80 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-300">URL Produk Shopee / Affiliate Link</label>
            <input
              type="text"
              placeholder="https://shopee.co.id/product/..."
              value={newProdUrl}
              onChange={(e) => setNewProdUrl(e.target.value)}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800/80 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={() => setIsAddModalOpen(false)}
              className="rounded-xl border border-slate-800 bg-slate-800 px-4 py-2 font-bold text-slate-300 hover:bg-slate-700"
            >
              Batal
            </button>
            <button
              onClick={handleAddProduct}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white shadow-lg shadow-shopee-500/20 hover:bg-shopee-600"
            >
              Simpan Produk
            </button>
          </div>
        </div>
      </Modal>

      {/* Modal Kalkulator Komisi */}
      <Modal
        isOpen={isCalcModalOpen}
        onClose={() => setIsCalcModalOpen(false)}
        title="Simulasi Proyeksi Komisi Live"
        subtitle="Hitung estimasi pendapatan dari streaming atau traffic affiliate"
      >
        <div className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-300">Harga Jual Produk (Rp)</label>
            <input
              type="number"
              step={10000}
              value={calcPrice}
              onChange={(e) => setCalcPrice(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800/80 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-300">Rate Komisi (%)</label>
              <input
                type="number"
                value={calcRate}
                onChange={(e) => setCalcRate(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800/80 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="font-bold text-slate-300">Estimasi Terjual (Pcs)</label>
              <input
                type="number"
                value={calcEstSold}
                onChange={(e) => setCalcEstSold(Number(e.target.value))}
                className="mt-1 w-full rounded-xl border border-slate-800 bg-slate-800/80 p-2.5 text-white focus:border-shopee-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 font-semibold">Total Omset Penjualan (GMV)</span>
              <span className="text-base font-extrabold text-white">{formatRupiah(estimatedGmv)}</span>
            </div>
            <div className="flex items-center justify-between border-t border-emerald-500/20 pt-2">
              <span className="text-emerald-300 font-bold">Estimasi Net Pendapatan Komisi</span>
              <span className="text-lg font-black text-emerald-400">{formatRupiah(estimatedCommission)}</span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setIsCalcModalOpen(false)}
              className="rounded-xl bg-shopee-500 px-4 py-2 font-bold text-white hover:bg-shopee-600"
            >
              Tutup Simulasi
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
