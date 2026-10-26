import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import { 
    BookOpen, 
    Code2, 
    Palette, 
    Scissors, 
    Leaf, 
    CheckCircle2, 
    ArrowRight, 
    Briefcase, 
    Wrench, 
    Award,
    Compass
} from 'lucide-react';

export default function Majors({ majors }) {
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
            badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
            btn: 'bg-indigo-600 hover:bg-indigo-500',
        },
        purple: {
            bg: 'bg-purple-500/10',
            border: 'border-purple-500/30',
            text: 'text-purple-400',
            badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
            btn: 'bg-purple-600 hover:bg-purple-500',
        },
        rose: {
            bg: 'bg-rose-500/10',
            border: 'border-rose-500/30',
            text: 'text-rose-400',
            badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
            btn: 'bg-rose-600 hover:bg-rose-500',
        },
        emerald: {
            bg: 'bg-emerald-500/10',
            border: 'border-emerald-500/30',
            text: 'text-emerald-400',
            badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
            btn: 'bg-emerald-600 hover:bg-emerald-500',
        },
    };

    return (
        <AppLayout>
            <Head title="Katalog Program Keahlian SMK" />

            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-3">
                        <BookOpen className="w-3.5 h-3.5" />
                        Katalog 4 Program Keahlian
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Profil & Kompetensi Kejuruan
                    </h1>
                    <p className="text-sm text-slate-400 mt-2">
                        Pelajari kurikulum, sarana prasarana modern, prospek karir industri, dan kriteria kualifikasi yang dicari oleh masing-masing jurusan.
                    </p>
                </div>

                {/* Major Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {majors.map((major) => {
                        const colors = colorClasses[major.badge_color] || colorClasses.indigo;
                        const Icon = iconMap[major.icon] || Code2;
                        const percentFilled = Math.min(100, Math.round((major.enrolled_count / major.quota) * 100));

                        return (
                            <div
                                key={major.id}
                                className={`rounded-3xl border ${colors.border} bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-slate-500 transition-all`}
                            >
                                <div>
                                    {/* Header Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-12 h-12 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                                                <Icon className={`w-6 h-6 ${colors.text}`} />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-extrabold text-white">{major.name}</h2>
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                                                    Kode: {major.code}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                                        {major.description}
                                    </p>

                                    {/* Fasilitas */}
                                    <div className="mb-6">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                            <Wrench className="w-3.5 h-3.5 text-indigo-400" /> Fasilitas & Studio Unggulan:
                                        </h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {major.facilities?.map((f, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/60 p-2 rounded-xl border border-slate-800">
                                                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${colors.text}`} />
                                                    <span className="truncate">{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Prospek Karir */}
                                    <div className="mb-6">
                                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                                            <Briefcase className="w-3.5 h-3.5 text-pink-400" /> Prospek Karir Lulusan:
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {major.career_prospects?.map((c, i) => (
                                                <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 border border-slate-700">
                                                    {c}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Kuota Information */}
                                    <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 mb-6">
                                        <div className="flex justify-between items-center text-xs mb-2">
                                            <span className="text-slate-400">Pagu Kuota: {major.quota} Siswa</span>
                                            <span className="font-bold text-white">
                                                {major.enrolled_count} Terdaftar ({percentFilled}%)
                                            </span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${colors.bg.replace('/10', '')} bg-indigo-500 rounded-full`}
                                                style={{ width: `${percentFilled}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                                    <Link
                                        href="/tes-penjurusan"
                                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
                                    >
                                        <Compass className="w-3.5 h-3.5" /> Uji Kecocokan
                                    </Link>
                                    <Link
                                        href={`/pendaftaran?major_id=${major.id}`}
                                        className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl ${colors.btn} text-white text-xs font-semibold shadow-md transition-all`}
                                    >
                                        Daftar Jurusan <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
