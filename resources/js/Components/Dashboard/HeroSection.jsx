import React from 'react';
import { Link } from '@inertiajs/react';
import { Sparkles, Compass, ArrowRight } from 'lucide-react';

export default function HeroSection({ stats }) {
    return (
        <section aria-label="Hero Section" className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-8 sm:p-12 mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    Penerimaan Peserta Didik Baru (PPDB) SMK 2026/2027
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                    Temukan Jurusan Impianmu dengan{' '}
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                        Akurasi SPK SMARTER
                    </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
                    EduMatch memadukan riwayat nilai akademik dengan model psikometrik minat-bakat RIASEC. Menggunakan pembobotan kurva ROC adaptif per jurusan guna menghasilkan rekomendasi yang objektif, transparan, dan adil.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        href="/tes-penjurusan"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 text-white shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <Compass className="w-5 h-5" />
                        Mulai Tes Penjurusan Sekarang
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>

                    <Link
                        href="/katalog-jurusan"
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 transition-all"
                    >
                        Lihat Katalog 4 Jurusan
                    </Link>
                </div>
            </div>

            {/* Live Stats Bar */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stats.total_quota}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Total Kuota Pagu</div>
                </div>
                <div>
                    <div className="text-2xl sm:text-3xl font-bold text-indigo-400">{stats.total_enrolled}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Siswa Terdaftar</div>
                </div>
                <div>
                    <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{stats.remaining_quota}</div>
                    <div className="text-xs text-slate-400 mt-0.5">Sisa Kursi Tersedia</div>
                </div>
                <div>
                    <div className="text-2xl sm:text-3xl font-bold text-pink-400">{stats.assessments_count}+</div>
                    <div className="text-xs text-slate-400 mt-0.5">Tes Selesai Dihitung</div>
                </div>
            </div>
        </section>
    );
}
