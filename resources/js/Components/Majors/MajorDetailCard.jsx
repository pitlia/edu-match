import React from 'react';
import { Link } from '@inertiajs/react';
import { Code2, Palette, Scissors, Leaf, CheckCircle2, ArrowRight, Briefcase, Wrench, Compass } from 'lucide-react';

export default function MajorDetailCard({ major }) {
    const iconMap = {
        Code2: Code2,
        Palette: Palette,
        Scissors: Scissors,
        Leaf: Leaf,
    };

    const colorClasses = {
        indigo: {
            bg: 'bg-indigo-50',
            border: 'border-indigo-100',
            text: 'text-indigo-600',
            badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
            btn: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20',
        },
        purple: {
            bg: 'bg-purple-50',
            border: 'border-purple-100',
            text: 'text-purple-600',
            badge: 'bg-purple-50 text-purple-700 border-purple-200',
            btn: 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20',
        },
        rose: {
            bg: 'bg-rose-50',
            border: 'border-rose-100',
            text: 'text-rose-600',
            badge: 'bg-rose-50 text-rose-700 border-rose-200',
            btn: 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20',
        },
        emerald: {
            bg: 'bg-emerald-50',
            border: 'border-emerald-100',
            text: 'text-emerald-600',
            badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
            btn: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20',
        },
    };

    const colors = colorClasses[major.badge_color] || colorClasses.indigo;
    const Icon = iconMap[major.icon] || Code2;
    const percentFilled = Math.min(100, Math.round((major.enrolled_count / major.quota) * 100));

    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all">
            <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
                            <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                            <h2 className="text-xl font-extrabold text-slate-900">{major.name}</h2>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${colors.badge}`}>
                                Kode: {major.code}
                            </span>
                        </div>
                    </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {major.description}
                </p>

                {/* Fasilitas */}
                <div className="mb-6">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-indigo-600" /> Fasilitas & Studio Unggulan:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {major.facilities?.map((f, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2 rounded-xl border border-slate-200">
                                <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${colors.text}`} />
                                <span className="truncate">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Prospek Karir */}
                <div className="mb-6">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-pink-600" /> Prospek Karir Lulusan:
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                        {major.career_prospects?.map((c, i) => (
                            <span key={i} className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                                {c}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Kuota Information */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 mb-6">
                    <div className="flex justify-between items-center text-xs mb-2">
                        <span className="text-slate-500 font-medium">Pagu Kuota: {major.quota} Siswa</span>
                        <span className="font-bold text-slate-900">
                            {major.enrolled_count} Terdaftar ({percentFilled}%)
                        </span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className={`h-full ${colors.btn.split(' ')[0]} rounded-full transition-all`}
                            style={{ width: `${percentFilled}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <Link
                    href="/tes-penjurusan"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold border border-slate-200 shadow-2xs transition-all"
                >
                    <Compass className="w-3.5 h-3.5" /> Uji Kecocokan
                </Link>
                <Link
                    href={`/pendaftaran?major_id=${major.id}`}
                    className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl ${colors.btn} text-xs font-semibold shadow-md transition-all`}
                >
                    Daftar Jurusan <ArrowRight className="w-3.5 h-3.5" />
                </Link>
            </div>
        </article>
    );
}
