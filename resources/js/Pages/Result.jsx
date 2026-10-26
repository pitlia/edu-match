import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import PrimaryRecommendationCard from '../Components/Result/PrimaryRecommendationCard';
import AlternativeRecommendationCard from '../Components/Result/AlternativeRecommendationCard';
import MajorRankingList from '../Components/Result/MajorRankingList';
import SmarterMathBreakdown from '../Components/Result/SmarterMathBreakdown';
import { CheckCircle2, Printer, RotateCcw } from 'lucide-react';

export default function Result({ assessment, majors }) {
    const results = assessment.results;
    const ranking = results.ranking || [];
    const primary = results.primary_recommendation;
    const alternative = results.alternative_recommendation;

    return (
        <AppLayout>
            <Head title={`Hasil Rekomendasi - ${assessment.student_name}`} />

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold mb-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Kalkulasi SPK SMARTER Berhasil
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                            Hasil Rekomendasi Penjurusan
                        </h1>
                        <p className="text-sm text-slate-600 mt-1">
                            Calon Siswa: <span className="text-slate-900 font-semibold">{assessment.student_name}</span>{' '}
                            {assessment.student_nisn && `(NISN: ${assessment.student_nisn})`}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => window.print()}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 shadow-2xs transition-all"
                        >
                            <Printer className="w-4 h-4 text-slate-600" /> Cetak Hasil
                        </button>
                        <Link
                            href="/tes-penjurusan"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium border border-slate-200 shadow-2xs transition-all"
                        >
                            <RotateCcw className="w-4 h-4 text-slate-600" /> Tes Ulang
                        </Link>
                    </div>
                </div>

                {/* 1. Primary Recommendation Highlight */}
                <PrimaryRecommendationCard primary={primary} assessmentId={assessment.id} />

                {/* 2. Alternative Recommendation Backup */}
                <AlternativeRecommendationCard alternative={alternative} assessmentId={assessment.id} />

                {/* 3. Ranking Comparison for All 4 Majors */}
                <MajorRankingList ranking={ranking} />

                {/* 4. Detailed Math Breakdown Accordion (Thesis Verification) */}
                <SmarterMathBreakdown ranking={ranking} />
            </div>
        </AppLayout>
    );
}
