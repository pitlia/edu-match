import React from 'react';
import { Link } from '@inertiajs/react';
import { Sparkles, Compass, ArrowRight } from 'lucide-react';

export default function HeroSection({ stats }) {
    return (
        <section aria-label="Hero Section" className="relative rounded-3xl overflow-hidden border border-indigo-100 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/40 p-8 sm:p-12 mb-12 shadow-md shadow-indigo-100/50">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-200/30 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-pink-200/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl">

                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
                    Temukan Jurusan Impianmu dengan{' '}
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Akurasi SPK SMARTER
                    </span>
                </h1>

                <p className="text-slate-600 text-base sm:text-lg mb-8 leading-relaxed">
                    EduMatch memadukan riwayat nilai akademik dengan model psikometrik minat-bakat RIASEC. Menggunakan pembobotan kurva ROC adaptif per jurusan guna menghasilkan rekomendasi yang objektif, transparan, dan adil.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <Link
                        href="/tes-penjurusan"
                        className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <Compass className="w-5 h-5" />
                        Mulai Tes Penjurusan Sekarang
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>

                    <Link
                        href="/katalog-jurusan"
                        className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-xs transition-all"
                    >
                        Lihat Katalog 4 Jurusan
                    </Link>
                </div>
            </div>

            {/* Live Stats Bar */}
            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">{stats.total_quota}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Total Kuota Pagu</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                    <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600">{stats.total_enrolled}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Siswa Terdaftar</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">{stats.remaining_quota}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Sisa Kursi Tersedia</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 shadow-2xs">
                    <div className="text-2xl sm:text-3xl font-extrabold text-pink-600">{stats.assessments_count}+</div>
                    <div className="text-xs text-slate-500 mt-0.5">Tes Selesai Dihitung</div>
                </div>
            </div>
        </section>
    );
}
