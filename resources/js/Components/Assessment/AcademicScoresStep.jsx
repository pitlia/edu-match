import React from 'react';
import { BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';

export default function AcademicScoresStep({ data, onAcademicChange, onNext, onPrev }) {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-slate-200 pb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    Nilai Rapor Akademik (Skala 0 - 100)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                    Masukkan rata-rata nilai semester 1-5 untuk 4 mata pelajaran pokok tingkat SMP/MTs.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Matematika */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm text-slate-800">Matematika</span>
                        <span className="text-sm font-bold text-indigo-600 font-mono">
                            {data.academic.MAT}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={data.academic.MAT}
                        onChange={(e) => onAcademicChange('MAT', e.target.value)}
                        className="w-full accent-indigo-600 cursor-pointer mb-2"
                    />
                    <p className="text-[11px] text-slate-500">Bobot krusial untuk jurusan RPL (Logika Pemrograman)</p>
                </div>

                {/* IPA */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm text-slate-800">Ilmu Pengetahuan Alam (IPA)</span>
                        <span className="text-sm font-bold text-emerald-600 font-mono">
                            {data.academic.IPA}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={data.academic.IPA}
                        onChange={(e) => onAcademicChange('IPA', e.target.value)}
                        className="w-full accent-emerald-600 cursor-pointer mb-2"
                    />
                    <p className="text-[11px] text-slate-500">Bobot krusial untuk jurusan ATPH (Biologi & Sains Terapan)</p>
                </div>

                {/* Bahasa Indonesia */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm text-slate-800">Bahasa Indonesia</span>
                        <span className="text-sm font-bold text-pink-600 font-mono">
                            {data.academic.BIND}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={data.academic.BIND}
                        onChange={(e) => onAcademicChange('BIND', e.target.value)}
                        className="w-full accent-pink-600 cursor-pointer mb-2"
                    />
                    <p className="text-[11px] text-slate-500">Kemampuan komunikasi verbal dan narasi konsep</p>
                </div>

                {/* Bahasa Inggris */}
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-sm text-slate-800">Bahasa Inggris</span>
                        <span className="text-sm font-bold text-violet-600 font-mono">
                            {data.academic.BING}
                        </span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={data.academic.BING}
                        onChange={(e) => onAcademicChange('BING', e.target.value)}
                        className="w-full accent-violet-600 cursor-pointer mb-2"
                    />
                    <p className="text-[11px] text-slate-500">Literasi dokumentasi teknis & komunikasi industri global</p>
                </div>
            </div>

            <div className="pt-4 flex justify-between">
                <button
                    type="button"
                    onClick={onPrev}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali
                </button>
                <button
                    type="button"
                    onClick={onNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all"
                >
                    Lanjut ke Kuesioner Minat <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
