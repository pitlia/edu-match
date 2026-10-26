import React from 'react';
import { Code2, Palette, Scissors, Leaf, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function MajorCard({ major }) {
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
            bar: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
            badge: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        },
        purple: {
            bg: 'bg-purple-50',
            border: 'border-purple-100',
            text: 'text-purple-600',
            bar: 'bg-gradient-to-r from-purple-500 to-purple-600',
            badge: 'bg-purple-50 text-purple-700 border-purple-200',
        },
        rose: {
            bg: 'bg-rose-50',
            border: 'border-rose-100',
            text: 'text-rose-600',
            bar: 'bg-gradient-to-r from-rose-500 to-rose-600',
            badge: 'bg-rose-50 text-rose-700 border-rose-200',
        },
        emerald: {
            bg: 'bg-emerald-50',
            border: 'border-emerald-100',
            text: 'text-emerald-600',
            bar: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
            badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        },
    };

    const colors = colorClasses[major.badge_color] || colorClasses.indigo;
    const IconComponent = iconMap[major.icon] || Code2;
    const percentFilled = Math.min(100, Math.round((major.enrolled_count / major.quota) * 100));

    return (
        <article className={`rounded-2xl border ${colors.border} bg-white p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-slate-300 transition-all group`}>
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}>
                        <IconComponent className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${colors.badge}`}>
                        {major.code}
                    </span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {major.name}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-6">
                    {major.description}
                </p>
            </div>

            <div>
                {/* Quota Progress */}
                <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-xs">
                        <span className="text-slate-500 font-medium">Keterisian Kuota</span>
                        <span className="font-semibold text-slate-800">
                            {major.enrolled_count} / {major.quota} ({percentFilled}%)
                        </span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full ${colors.bar} rounded-full transition-all duration-500`}
                            style={{ width: `${percentFilled}%` }}
                        />
                    </div>
                </div>

                {major.is_full ? (
                    <div className="flex items-center gap-1.5 text-xs text-amber-800 font-medium bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        Pagu Penuh (Rekomendasi Cadangan)
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-medium bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        Sisa {major.remaining_quota} Kursi Tersedia
                    </div>
                )}
            </div>
        </article>
    );
}
