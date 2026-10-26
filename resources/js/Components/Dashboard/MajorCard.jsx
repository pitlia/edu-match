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

    const colors = colorClasses[major.badge_color] || colorClasses.indigo;
    const IconComponent = iconMap[major.icon] || Code2;
    const percentFilled = Math.min(100, Math.round((major.enrolled_count / major.quota) * 100));

    return (
        <article className={`rounded-2xl border ${colors.border} bg-slate-900/60 backdrop-blur-sm p-6 flex flex-col justify-between hover:border-slate-600 transition-all group`}>
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
        </article>
    );
}
