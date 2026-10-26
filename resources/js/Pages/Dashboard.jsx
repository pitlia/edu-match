import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import { 
    Sparkles, 
    Compass, 
    Users, 
    CheckCircle2, 
    ArrowRight, 
    Code2, 
    Palette, 
    Scissors, 
    Leaf, 
    Layers, 
    ShieldCheck, 
    Award,
    AlertTriangle,
    FileText,
    TrendingUp
} from 'lucide-react';

export default function Dashboard({ majors, stats }) {
    const iconMap = {
        Code2: Code2,
        Palette: Palette,
        Scissors: Scissors,
        Leaf: Leaf,
    };

    const colorClasses = {
        indigo: {
            bg: 'bg-indigo-500/10',
            border: 'border-indigo-500/30',
            text: 'text-indigo-400',
            bar: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
            badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
        },
        purple: {
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/30',
            text: 'text-purple-400',
            bar: 'bg-gradient-to-r from-purple-500 to-purple-600',
            badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
        },
        rose: {
            bg: 'bg-rose-500/10',
            border: 'border-rose-500/30',
            text: 'text-rose-400',
            bar: 'bg-gradient-to-r from-rose-500 to-rose-600',
            badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
        },
        emerald: {
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/30',
            text: 'text-emerald-400',
            bar: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
            badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
        },
    };

    const ppdbSteps = [
        {
            num: '01',
            title: 'Isi Nilai Rapor & Tes Minat',
            desc: 'Input 4 mapel akademik dan jawab 14 butir asesmen kepribadian RIASEC (Holland Code).',
            icon: Compass,
        },
        {
            num: '02',
            title: 'Kalkulasi SPK SMARTER',
            desc: 'Sistem memproses bobot ROC multi-profil spesifik kejuruan & fungsi utilitas SMART.',
            icon: Layers,
        },
        {
            num: '03',
            title: 'Hasil & Validasi Kuota',
            desc: 'Dapatkan grafik kecocokan 4 jurusan, rekomendasi primer, serta jurusan cadangan.',
            icon: TrendingUp,
        },
        {
            num: '04',
            title: 'Konfirmasi & Berkas PPDB',
            desc: 'Pilih jurusan, unggah berkas KK/ijazah, dan unduh bukti tanda terima pendaftaran.',
            icon: FileText,
        },
    ];

    return (
        <AppLayout>
            <Head title="PPDB SMK & SPK Penjurusan SMARTER" />

            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-8 sm:p-12 mb-12 shadow-2xl">
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
            </div>

            {/* Program Kejuruan Grid (4 Alternatif) */}
            <div className="mb-14">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white">4 Program Keahlian Unggulan</h2>
                        <p className="text-slate-400 text-sm mt-1">
                            Setiap program keahlian memiliki matriks bobot kriteria independen berbasis kurva ROC.
                        </p>
                    </div>
                    <Link href="/katalog-jurusan" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                        Detail Fasilitas & Karir <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {majors.map((major) => {
                        const colors = colorClasses[major.badge_color] || colorClasses.indigo;
                        const IconComponent = iconMap[major.icon] || Code2;
                        const percentFilled = Math.min(100, Math.round((major.enrolled_count / major.quota) * 100));

                        return (
                            <div
                                key={major.id}
                                className={`rounded-2xl border ${colors.border} bg-slate-900/60 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-slate-600 transition-all group`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                                            <IconComponent className={`w-6 h-6 ${colors.text}`} />
                                        </div>
                                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                                            {major.code}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                                        {major.name}
                                    </h3>
                                    <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed mb-6">
                                        {major.description}
                                    </p>
                                </div>

                                <div>
                                    {/* Quota Progress */}
                                    <div className="space-y-1.5 mb-4">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-slate-400">Keterisian Kuota</span>
                                            <span className="font-semibold text-slate-200">
                                                {major.enrolled_count} / {major.quota} ({percentFilled}%)
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${colors.bar} rounded-full transition-all duration-500`}
                                                style={{ width: `${percentFilled}%` }}
                                            />
                                        </div>
                                    </div>

                                    {major.is_full ? (
                                        <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                                            <AlertTriangle className="w-3.5 h-3.5" />
                                            Pagu Penuh (Rekomendasi Cadangan)
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            Sisa {major.remaining_quota} Kursi Tersedia
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Stepper Alur Registrasi & Penjurusan PPDB */}
            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10 mb-12">
                <div className="max-w-2xl mx-auto text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Alur Pendaftaran & Asesmen Terintegrasi
                    </h2>
                    <p className="text-sm text-slate-400">
                        Proses seleksi transparan berjenjang mulai dari pengisian instrumen hingga penerbitan bukti pendaftaran resmi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {ppdbSteps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.num} className="relative bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-2xl font-black text-indigo-500/40 font-mono">{step.num}</span>
                                    <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 border border-slate-700">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <h3 className="font-semibold text-base text-white mb-2">{step.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-8 text-center">
                    <Link
                        href="/tes-penjurusan"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all"
                    >
                        Mulai Langkah Pertama <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
