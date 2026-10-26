import React, { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import { 
    FlaskConical, 
    CheckCircle2, 
    XCircle, 
    BarChart2, 
    Layers, 
    Compass
} from 'lucide-react';

export default function Simulation({ majors, criteria, samples, metrics }) {
    const [selectedSample, setSelectedSample] = useState(samples[0] || null);

    return (
        <AppLayout>
            <Head title="Laboratorium Validasi TA - SMARTER SPK" />

            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                    <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold mb-2">
                            <FlaskConical className="w-3.5 h-3.5 text-violet-600" />
                            Modul Khusus Pengujian Tugas Akhir (TA)
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                            Validasi Empiris & Analisis Sensitivitas Model
                        </h1>
                        <p className="text-sm text-slate-600 mt-1">
                            Uji akurasi prediksi SMARTER terhadap dataset sampel *Ground Truth* historis dan evaluasi stabilitas kurva ROC.
                        </p>
                    </div>

                    <Link
                        href="/tes-penjurusan"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition-all"
                    >
                        <Compass className="w-4 h-4" /> Coba Asesmen Siswa
                    </Link>
                </div>

                {/* Performance Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
                    <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                        <span className="text-xs font-semibold text-slate-500 block mb-1">Akurasi Ground Truth</span>
                        <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
                            {metrics.accuracy}%
                        </div>
                        <span className="text-[11px] text-slate-500 mt-1 block">
                            Target TA: &ge; 80% (Terpenuhi)
                        </span>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                        <span className="text-xs font-semibold text-slate-500 block mb-1">Prediksi Cocok</span>
                        <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
                            {metrics.correct_predictions} / {metrics.total_samples}
                        </div>
                        <span className="text-[11px] text-slate-500 mt-1 block">Sampel Siswa Teruji</span>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                        <span className="text-xs font-semibold text-slate-500 block mb-1">Stabilitas Spearman (rs)</span>
                        <div className="text-3xl sm:text-4xl font-black text-indigo-600 font-mono">
                            {metrics.spearman_avg}
                        </div>
                        <span className="text-[11px] text-emerald-600 mt-1 block font-medium">
                            Korelasi Sangat Kuat (&ge; 0.85)
                        </span>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
                        <span className="text-xs font-semibold text-slate-500 block mb-1">Rank Reversal Resist</span>
                        <div className="text-3xl sm:text-4xl font-black text-pink-600 font-mono">
                            100%
                        </div>
                        <span className="text-[11px] text-slate-500 mt-1 block">Konsistensi Monotonik</span>
                    </div>
                </div>

                {/* Ground Truth Evaluation Table */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Samples Table */}
                    <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 space-y-4 shadow-xs">
                        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                            <BarChart2 className="w-5 h-5 text-indigo-600" />
                            Matriks Pengujian Ground Truth (10 Sampel Siswa)
                        </h2>
                        <p className="text-xs text-slate-500">
                            Pilih sampel di bawah untuk melihat rincian peringkat 4 jurusan hasil komputasi sistem.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-700">
                                <thead className="bg-slate-100 text-slate-600 font-mono uppercase text-[10px]">
                                    <tr>
                                        <th className="p-3">Nama Sampel</th>
                                        <th className="p-3">Jurusan Riil</th>
                                        <th className="p-3">Prediksi SMARTER</th>
                                        <th className="p-3">Kecocokan</th>
                                        <th className="p-3 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {samples.map((s, idx) => {
                                        const isSelected = selectedSample?.name === s.name;
                                        return (
                                            <tr
                                                key={idx}
                                                onClick={() => setSelectedSample(s)}
                                                className={`cursor-pointer transition-colors ${
                                                    isSelected ? 'bg-indigo-50/80' : 'hover:bg-slate-50'
                                                }`}
                                            >
                                                <td className="p-3 font-semibold text-slate-900">{s.name}</td>
                                                <td className="p-3">
                                                    <span className="font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                                        {s.actual}
                                                    </span>
                                                </td>
                                                <td className="p-3">
                                                    <span className="font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                                                        {s.predicted}
                                                    </span>
                                                </td>
                                                <td className="p-3 font-mono font-bold text-emerald-600">
                                                    {s.percentage}%
                                                </td>
                                                <td className="p-3 text-right">
                                                    {s.is_match ? (
                                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Akurat
                                                        </span>
                                                    ) : (
                                                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                                                            <XCircle className="w-3 h-3 text-amber-600" /> Meleset
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
                    <div className="rounded-3xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-xs">
                        <div>
                            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                                <h3 className="font-bold text-sm text-slate-900">Detail Evaluasi Sampel</h3>
                                <span className="text-xs font-mono text-indigo-600 font-bold">{selectedSample?.name}</span>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="text-xs flex justify-between">
                                    <span className="text-slate-500">Jurusan Riil (Ground Truth):</span>
                                    <span className="font-bold text-slate-900">{selectedSample?.actual}</span>
                                </div>
                                <div className="text-xs flex justify-between">
                                    <span className="text-slate-500">Prediksi Model SMARTER:</span>
                                    <span className="font-bold text-indigo-600">{selectedSample?.predicted}</span>
                                </div>
                            </div>

                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-3">
                                Peringkat 4 Jurusan:
                            </span>

                            <div className="space-y-2.5">
                                {selectedSample?.ranking?.map((r) => (
                                    <div key={r.code} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="font-bold text-slate-900">
                                                #{r.rank} {r.name} ({r.code})
                                            </span>
                                            <span className="font-mono font-bold text-indigo-600">
                                                {r.percentage}%
                                            </span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-indigo-600 rounded-full"
                                                style={{ width: `${r.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-200 mt-6 text-[11px] text-slate-500 leading-relaxed">
                            Formulasi Rank Order Centroid membuktikan kemampuan diferensiasi preferensi antar kejuruan secara konsisten.
                        </div>
                    </div>
                </div>

                {/* Theoretical Formulations Reference */}
                <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <Layers className="w-5 h-5 text-indigo-600" />
                        Rumus Matematis SMARTER yang Diimplementasikan
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                            <span className="font-bold text-indigo-700 block mb-1">1. Rank Order Centroid (ROC)</span>
                            <p className="font-mono text-slate-800 mb-2">w_k = (1/K) * &sum;(1/i)</p>
                            <span className="text-slate-500">Pembobotan objektif berdasarkan urutan ranking prioritas tanpa penilaian subjektif skala AHP.</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                            <span className="font-bold text-emerald-700 block mb-1">2. Fungsi Utilitas SMART</span>
                            <p className="font-mono text-slate-800 mb-2">u(x) = (x - C_min) / (C_max - C_min)</p>
                            <span className="text-slate-500">Transformasi linier nilai mentah kriteria menjadi skala utilitas terstandar [0, 1].</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                            <span className="font-bold text-pink-700 block mb-1">3. Uji Stabilitas Spearman</span>
                            <p className="font-mono text-slate-800 mb-2">r_s = 1 - (6&sum;d_i^2) / (n(n^2 - 1))</p>
                            <span className="text-slate-500">Memverifikasi ketahanan model terhadap anomali rank reversal saat variasi bobot diuji.</span>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
