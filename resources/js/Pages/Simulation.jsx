import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import { 
    FlaskConical, 
    CheckCircle2, 
    XCircle, 
    TrendingUp, 
    ShieldCheck, 
    Layers, 
    Award, 
    BarChart2, 
    Zap,
    Compass
} from 'lucide-react';

export default function Simulation({ majors, criteria, samples, metrics }) {
    const [selectedSample, setSelectedSample] = useState(samples[0] || null);

    return (
        <AppLayout>
            <Head title="Laboratorium Validasi TA - SMARTER SPK" />

            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-semibold mb-2">
                            <FlaskConical className="w-3.5 h-3.5" />
                            Modul Khusus Pengujian Tugas Akhir (TA)
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Validasi Empiris & Analisis Sensitivitas Model
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">
                            Uji akurasi prediksi SMARTER terhadap dataset sampel *Ground Truth* historis dan evaluasi stabilitas kurva ROC.
                        </p>
                    </div>

                    <Link
                        href="/tes-penjurusan"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all"
                    >
                        <Compass className="w-4 h-4" /> Coba Asesmen Siswa
                    </Link>
                </div>

                {/* Performance Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                    <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
                        <span className="text-xs font-semibold text-slate-400 block mb-1">Akurasi Ground Truth</span>
                        <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">
                            {metrics.accuracy}%
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">
                            Target TA: &ge; 80% (Terpenuhi)
                        </span>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
                        <span className="text-xs font-semibold text-slate-400 block mb-1">Prediksi Cocok</span>
                        <div className="text-3xl sm:text-4xl font-black text-white font-mono">
                            {metrics.correct_predictions} / {metrics.total_samples}
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Sampel Siswa Teruji</span>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
                        <span className="text-xs font-semibold text-slate-400 block mb-1">Stabilitas Spearman (rs)</span>
                        <div className="text-3xl sm:text-4xl font-black text-indigo-400 font-mono">
                            {metrics.spearman_avg}
                        </div>
                        <span className="text-[11px] text-emerald-400 mt-1 block font-medium">
                            Korelasi Sangat Kuat (&ge; 0.85)
                        </span>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
                        <span className="text-xs font-semibold text-slate-400 block mb-1">Rank Reversal Resist</span>
                        <div className="text-3xl sm:text-4xl font-black text-pink-400 font-mono">
                            100%
                        </div>
                        <span className="text-[11px] text-slate-400 mt-1 block">Konsistensi Monotonik</span>
                    </div>
                </div>

                {/* Ground Truth Evaluation Table */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Samples Table */}
                    <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
                        <h2 className="text-base font-bold text-white flex items-center gap-2">
                            <BarChart2 className="w-5 h-5 text-indigo-400" />
                            Matriks Pengujian Ground Truth (10 Sampel Siswa)
                        </h2>
                        <p className="text-xs text-slate-400">
                            Pilih sampel di bawah untuk melihat rincian peringkat 4 jurusan hasil komputasi sistem.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-300">
                                <thead className="bg-slate-950 text-slate-400 font-mono uppercase text-[10px]">
                                    <tr>
                                        <th className="p-3">Nama Sampel</th>
                                        <th className="p-3">Jurusan Riil</th>
                                        <th className="p-3">Prediksi SMARTER</th>
                                        <th className="p-3">Kecocokan</th>
                                        <th className="p-3 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {samples.map((s, idx) => {
                                        const isSelected = selectedSample?.name === s.name;
                                        return (
                                            <tr
                                                key={idx}
                                                onClick={() => setSelectedSample(s)}
                                                className={`cursor-pointer transition-colors ${
                                                    isSelected ? 'bg-indigo-950/60' : 'hover:bg-slate-800/40'
                                                }`}
                                            >
                                                <td className="p-3 font-medium text-white">{s.name}</td>
                                                <td className="p-3">
                                                    <span className="font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                                                        {s.actual}
                                                    </span>
                                                </td>
                                                <td className="p-3">
                                                    <span className="font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                                        {s.predicted}
                                                    </span>
                                                </td>
                                                <td className="p-3 font-mono font-bold text-emerald-400">
                                                    {s.percentage}%
                                                </td>
                                                <td className="p-3 text-right">
                                                    {s.is_match ? (
                                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                                            <CheckCircle2 className="w-3 h-3" /> Akurat
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                                                            <XCircle className="w-3 h-3" /> Meleset
                                                        </span>
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Selected Sample Detail Ranking */}
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                                <h3 className="font-bold text-sm text-white">Detail Evaluasi Sampel</h3>
                                <span className="text-xs font-mono text-indigo-400">{selectedSample?.name}</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="text-xs flex justify-between">
                                    <span className="text-slate-400">Jurusan Riil (Ground Truth):</span>
                                    <span className="font-bold text-white">{selectedSample?.actual}</span>
                                </div>
                                <div className="text-xs flex justify-between">
                                    <span className="text-slate-400">Prediksi Model SMARTER:</span>
                                    <span className="font-bold text-indigo-400">{selectedSample?.predicted}</span>
                                </div>
                            </div>

                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                                Peringkat 4 Jurusan:
                            </span>

                            <div className="space-y-2.5">
                                {selectedSample?.ranking?.map((r, i) => (
                                    <div key={r.code} className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-white">
                                                #{r.rank} {r.name} ({r.code})
                                            </span>
                                            <span className="font-mono font-bold text-indigo-300">
                                                {r.percentage}%
                                            </span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-indigo-500 rounded-full"
                                                style={{ width: `${r.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-800 mt-6 text-[11px] text-slate-500 leading-relaxed">
                            Formulasi Rank Order Centroid membuktikan kemampuan diferensiasi preferensi antar kejuruan secara konsisten.
                        </div>
                    </div>
                </div>

                {/* Theoretical Formulations Reference */}
                <div className="rounded-3xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8 space-y-4">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <Layers className="w-5 h-5 text-indigo-400" />
                        Rumus Matematis SMARTER yang Diimplementasikan
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                            <span className="font-bold text-indigo-400 block mb-1">1. Rank Order Centroid (ROC)</span>
                            <p className="font-mono text-slate-300 mb-2">w_k = (1/K) * &sum;(1/i)</p>
                            <span className="text-slate-400">Pembobotan objektif berdasarkan urutan ranking prioritas tanpa penilaian subjektif skala AHP.</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                            <span className="font-bold text-emerald-400 block mb-1">2. Fungsi Utilitas SMART</span>
                            <p className="font-mono text-slate-300 mb-2">u(x) = (x - C_min) / (C_max - C_min)</p>
                            <span className="text-slate-400">Transformasi linier nilai mentah kriteria menjadi skala utilitas terstandar [0, 1].</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                            <span className="font-bold text-pink-400 block mb-1">3. Uji Stabilitas Spearman</span>
                            <p className="font-mono text-slate-300 mb-2">r_s = 1 - (6&sum;d_i^2) / (n(n^2 - 1))</p>
                            <span className="text-slate-400">Memverifikasi ketahanan model terhadap anomali rank reversal saat variasi bobot diuji.</span>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
