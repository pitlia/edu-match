import React from 'react';
import { Link } from '@inertiajs/react';
import { Award } from 'lucide-react';

export default function AlternativeRecommendationCard({ alternative, assessmentId }) {
    if (!alternative) return null;

    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700">
                    <Award className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            Rekomendasi Cadangan (#2)
                        </span>
                        <span className="text-xs font-bold text-indigo-400">{alternative.percentage}% Cocok</span>
                    </div>
                    <h3 className="font-bold text-white text-base mt-0.5">
                        {alternative.name} ({alternative.code})
                    </h3>
                    <p className="text-xs text-slate-400">
                        Pilihan alternatif kedua jika kuota jurusan pertama terpenuhi. Sisa kuota: {alternative.remaining_quota} kursi.
                    </p>
                </div>
            </div>

            <Link
                href={`/pendaftaran?assessment_id=${assessmentId}&major_id=${alternative.major_id}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all self-start sm:self-center"
            >
                Pilih Cadangan Ini
            </Link>
        </div>
    );
}
