import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import { 
    Award, 
    CheckCircle2, 
    AlertTriangle, 
    ArrowRight, 
    RotateCcw, 
    Printer, 
    Layers, 
    ChevronDown, 
    ChevronUp,
    Sparkles,
    UserCheck,
    BarChart3,
    Code2,
    Palette,
    Scissors,
    Leaf
} from 'lucide-react';

export default function Result({ assessment, majors }) {
    const [showMathDetails, setShowMathDetails] = useState(false);
    const results = assessment.results;
    const ranking = results.ranking || [];
    const primary = results.primary_recommendation;
    const alternative = results.alternative_recommendation;
    const isPrimaryFull = primary?.is_full;

    const iconMap = {
        Code2: Code2,
        Palette: Palette,
        Scissors: Scissors,
        Leaf: Leaf,
    };

    return (
        <AppLayout>
            <Head title={`Hasil Rekomendasi - ${assessment.student_name}`} />

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Title */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Kalkulasi SPK SMARTER Berhasil
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Hasil Rekomendasi Penjurusan
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">
                            Calon Siswa: <span className="text-white font-semibold">{assessment.student_name}</span> {assessment.student_nisn && `(NISN: ${assessment.student_nisn})`}
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => window.print()}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-all"
                        >
                            <Printer className="w-4 h-4" /> Cetak Hasil
                        </button>
                        <Link
                            href="/tes-penjurusan"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-all"
                        >
                            <RotateCcw className="w-4 h-4" /> Tes Ulang
                        </Link>
                    </div>
                </div>

                {/* Primary Recommendation Card */}
                {primary && (
                    <div className="relative overflow-hidden rounded-3xl border border-indigo-500/40 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-purple-950/50 p-6 sm:p-8 shadow-2xl">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative z-10">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 inline-block mb-3">
                                    Pilihan Rekomendasi Utama (#1)
                                </span>
                                <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                                    {primary.name} ({primary.code})
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                                    Profil kognitif dan minat kepribadian Anda menunjukkan kecocokan tertinggi pada kompetensi keahlian ini berdasarkan kurva preferensi multi-profil ROC.
                                </p>
                            </div>

                            <div className="flex flex-col items-center justify-center p-6 bg-slate-950/80 rounded-2xl border border-indigo-500/30 min-w-[160px]">
                                <span className="text-xs text-slate-400 font-semibold mb-1">Skor Kecocokan</span>
                                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                                    {primary.percentage}%
                                </div>
                                <span className="text-[11px] text-emerald-400 mt-2 font-medium flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Rekomendasi Terbaik
                                </span>
                            </div>
                        </div>

                        {/* Capacity Status */}
                        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                {isPrimaryFull ? (
                                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-xl border border-amber-500/20">
                                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                                        Pagu Kuota Penuh ({primary.enrolled_count}/{primary.quota}). Sistem menyarankan jurusan cadangan.
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                                        Kuota Tersedia ({primary.enrolled_count}/{primary.quota} Terisi &bull; Sisa {primary.remaining_quota} Kursi)
                                    </div>
                                )}
                            </div>

                            <Link
                                href={`/pendaftaran?assessment_id=${assessment.id}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                            >
                                <UserCheck className="w-4 h-4" />
                                Lanjut Daftar dengan Rekomendasi Ini
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                )}

                {/* Alternative Recommendation if primary is full or as backup */}
                {alternative && (
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
                            href={`/pendaftaran?assessment_id=${assessment.id}&major_id=${alternative.major_id}`}
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all self-start sm:self-center"
                        >
                            Pilih Cadangan Ini
                        </Link>
                    </div>
                )}

                {/* Ranking Comparison of All 4 Majors */}
                <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-indigo-400" />
                                Komparasi Persentase 4 Program Keahlian
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                                Perbandingan nilai preferensi $V_j$ hasil agregasi fungsi utilitas dan pembobotan kurva ROC.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {ranking.map((item, idx) => {
                            const isFirst = idx === 0;

                            return (
                                <div
                                    key={item.code}
                                    className={`p-4 rounded-2xl border transition-all ${
                                        isFirst
                                            ? 'bg-indigo-950/30 border-indigo-500/40'
                                            : 'bg-slate-950/50 border-slate-800/80'
                                    }`}
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-3">
                                            <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                                                isFirst ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                                            }`}>
                                                #{item.rank}
                                            </span>
                                            <div>
                                                <span className="font-bold text-sm text-white">{item.name}</span>
                                                <span className="text-xs text-slate-400 ml-2">({item.code})</span>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <span className="text-base font-extrabold text-white font-mono">
                                                {item.percentage}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-700 ${
                                                isFirst
                                                    ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                                                    : 'bg-slate-600'
                                            }`}
                                            style={{ width: `${item.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mathematical Details Accordion (For Thesis Verification) */}
                <div className="rounded-3xl border border-slate-800 bg-slate-900/30 overflow-hidden">
                    <button
                        type="button"
                        onClick={() => setShowMathDetails(!showMathDetails)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
                    >
                        <div className="flex items-center gap-3">
                            <Layers className="w-5 h-5 text-indigo-400" />
                            <div>
                                <h4 className="font-bold text-sm text-white">Transparansi Perhitungan Matematis SMARTER</h4>
                                <p className="text-xs text-slate-400">
                                    Detail matriks pembobotan ROC, normalisasi nilai utilitas $u_k(x)$, dan kontribusi nilai per kriteria.
                                </p>
                            </div>
                        </div>
                        {showMathDetails ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                    </button>

                    {showMathDetails && (
                        <div className="p-6 pt-0 border-t border-slate-800 space-y-6">
                            {ranking.map((maj) => (
                                <div key={maj.code} className="bg-slate-950/70 rounded-2xl border border-slate-800 p-4">
                                    <h5 className="font-bold text-xs uppercase text-indigo-400 tracking-wider mb-3">
                                        Perhitungan Detail untuk: {maj.name} ({maj.code})
                                    </h5>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left text-xs text-slate-300">
                                            <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-[10px]">
                                                <tr>
                                                    <th className="p-2">Rank (r)</th>
                                                    <th className="p-2">Kriteria</th>
                                                    <th className="p-2">Nilai Mentah</th>
                                                    <th className="p-2">Utilitas u(x)</th>
                                                    <th className="p-2">Bobot ROC (w)</th>
                                                    <th className="p-2">Skor Bobot (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-slate-800">
                                                {maj.criteria_breakdown?.map((cb) => (
                                                    <tr key={cb.code} className="hover:bg-slate-900/50">
                                                        <td className="p-2 font-mono font-bold text-indigo-400">#{cb.rank}</td>
                                                        <td className="p-2 font-medium text-white">{cb.name} ({cb.code})</td>
                                                        <td className="p-2 font-mono">{cb.raw_value}</td>
                                                        <td className="p-2 font-mono text-emerald-400">{cb.utility}</td>
                                                        <td className="p-2 font-mono text-violet-400">{cb.weight}</td>
                                                        <td className="p-2 font-mono font-bold text-white">{cb.weighted_score}%</td>
                                                    </tr>
                                                ))}
                                                <tr className="bg-slate-900/90 font-bold text-white">
                                                    <td colSpan="5" className="p-2 text-right">Total Preferensi V({maj.code}):</td>
                                                    <td className="p-2 font-mono text-pink-400 text-sm">{maj.percentage}%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
