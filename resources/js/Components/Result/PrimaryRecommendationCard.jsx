import React from 'react';
import { Link } from '@inertiajs/react';
import { CheckCircle2, AlertTriangle, ArrowRight, UserCheck, Sparkles } from 'lucide-react';

export default function PrimaryRecommendationCard({ primary, assessmentId }) {
    if (!primary) return null;
    const isPrimaryFull = primary.is_full;

    return (
        <div className="relative overflow-hidden rounded-3xl border border-indigo-600 bg-gradient-to-br from-indigo-700 via-indigo-800 to-purple-800 p-6 sm:p-8 text-white shadow-xl shadow-indigo-600/20">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 text-white border border-white/30 inline-block mb-3">
                        Pilihan Rekomendasi Utama (#1)
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                        {primary.name} ({primary.code})
                    </h2>
                    <p className="text-xs sm:text-sm text-indigo-100 max-w-xl leading-relaxed">
                        Profil kognitif dan minat kepribadian Anda menunjukkan kecocokan tertinggi pada kompetensi keahlian ini berdasarkan kurva preferensi multi-profil ROC.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center p-6 bg-white/15 backdrop-blur-md rounded-2xl border border-white/20 min-w-[160px] shadow-inner">
                    <span className="text-xs text-indigo-100 font-semibold mb-1">Skor Kecocokan</span>
                    <div className="text-4xl sm:text-5xl font-black text-white">
                        {primary.percentage}%
                    </div>
                    <span className="text-[11px] text-emerald-300 mt-2 font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Rekomendasi Terbaik
                    </span>
                </div>
            </div>

            {/* Capacity Status Bar & Registration Action */}
            <div className="mt-6 pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    {isPrimaryFull ? (
                        <div className="flex items-center gap-2 text-xs font-semibold text-amber-100 bg-amber-500/20 px-3 py-1.5 rounded-xl border border-amber-300/30">
                            <AlertTriangle className="w-4 h-4 text-amber-300" />
                            Pagu Kuota Penuh ({primary.enrolled_count}/{primary.quota}). Sistem menyarankan jurusan cadangan.
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-100 bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-300/30">
                            <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                            Kuota Tersedia ({primary.enrolled_count}/{primary.quota} Terisi &bull; Sisa {primary.remaining_quota} Kursi)
                        </div>
                    )}
                </div>

                <Link
                    href={`/pendaftaran?assessment_id=${assessmentId}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-indigo-900 font-bold text-sm shadow-md hover:bg-indigo-50 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                    <UserCheck className="w-4 h-4 text-indigo-600" />
                    Lanjut Daftar dengan Rekomendasi Ini
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    );
}
