import React from 'react';
import { Brain, ArrowLeft, Sparkles, Check } from 'lucide-react';

export default function RiasecQuizStep({ 
    riasecQuestions, 
    data, 
    onRiasecSelect, 
    onPrev, 
    processing 
}) {
    const likertLabels = [
        { val: 1, label: 'Sangat Tidak Suka' },
        { val: 2, label: 'Tidak Suka' },
        { val: 3, label: 'Netral' },
        { val: 4, label: 'Suka' },
        { val: 5, label: 'Sangat Suka' },
    ];

    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-8 shadow-xs">
            <div className="border-b border-slate-200 pb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-indigo-600" />
                    Kuesioner Minat & Kepribadian (RIASEC Holland Model)
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                    Pilihlah skala yang paling menggambarkan diri Anda (1 = Sangat Tidak Suka / Sesuai, 5 = Sangat Suka / Sesuai).
                </p>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600">
                {likertLabels.map((l) => (
                    <div key={l.val} className="flex items-center gap-1.5">
                        <span className="w-5 h-5 rounded-md bg-white border border-slate-200 text-indigo-700 font-bold flex items-center justify-center text-[10px] shadow-2xs">
                            {l.val}
                        </span>
                        <span>{l.label}</span>
                    </div>
                ))}
            </div>

            {/* Questions List */}
            <div className="space-y-4">
                {riasecQuestions.map((q, idx) => {
                    const currentVal = data.riasec_answers[q.id]?.value || 3;

                    return (
                        <div
                            key={q.id}
                            className="bg-slate-50 border border-slate-200 hover:border-slate-300 p-4 sm:p-5 rounded-2xl transition-all"
                        >
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-1 rounded-md border border-indigo-200">
                                        #{idx + 1}
                                    </span>
                                    <p className="text-sm font-medium text-slate-800 leading-relaxed">
                                        {q.text}
                                    </p>
                                </div>
                            </div>

                            {/* 5-Likert Buttons */}
                            <div className="grid grid-cols-5 gap-2 sm:gap-3 max-w-md ml-auto">
                                {[1, 2, 3, 4, 5].map((val) => {
                                    const isSelected = currentVal === val;
                                    return (
                                        <button
                                            key={val}
                                            type="button"
                                            onClick={() => onRiasecSelect(q.id, q.category, val)}
                                            className={`py-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 border ${
                                                isSelected
                                                    ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                                                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100 shadow-2xs'
                                            }`}
                                        >
                                            <span>{val}</span>
                                            {isSelected && <Check className="w-3 h-3 text-white" />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Navigation & Submit CTA */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                    type="button"
                    onClick={onPrev}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all"
                >
                    <ArrowLeft className="w-4 h-4" /> Kembali ke Nilai
                </button>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                    <Sparkles className="w-4 h-4" />
                    {processing ? 'Menghitung SPK SMARTER...' : 'Hitung Rekomendasi Jurusan'}
                </button>
            </div>
        </div>
    );
}
