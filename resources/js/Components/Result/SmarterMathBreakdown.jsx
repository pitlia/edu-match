import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';

export default function SmarterMathBreakdown({ ranking }) {
    const [open, setOpen] = useState(false);

    return (
        <section aria-label="Transparansi Perhitungan" className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-xs">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-indigo-600" />
                    <div>
                        <h4 className="font-bold text-sm text-slate-900">Transparansi Perhitungan Matematis SMARTER</h4>
                        <p className="text-xs text-slate-500">
                            Detail matriks pembobotan ROC, normalisasi nilai utilitas $u_k(x)$, dan kontribusi nilai per kriteria.
                        </p>
                    </div>
                </div>
                {open ? <ChevronUp className="w-5 h-5 text-slate-500" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
            </button>

            {open && (
                <div className="p-6 pt-0 border-t border-slate-200 space-y-6">
                    {ranking.map((maj) => (
                        <div key={maj.code} className="bg-slate-50 rounded-2xl border border-slate-200 p-4">
                            <h5 className="font-bold text-xs uppercase text-indigo-700 tracking-wider mb-3">
                                Perhitungan Detail untuk: {maj.name} ({maj.code})
                            </h5>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-xs text-slate-700">
                                    <thead className="bg-slate-100 text-slate-600 uppercase font-mono text-[10px]">
                                        <tr>
                                            <th className="p-2">Rank (r)</th>
                                            <th className="p-2">Kriteria</th>
                                            <th className="p-2">Nilai Mentah</th>
                                            <th className="p-2">Utilitas u(x)</th>
                                            <th className="p-2">Bobot ROC (w)</th>
                                            <th className="p-2">Skor Bobot (%)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {maj.criteria_breakdown?.map((cb) => (
                                            <tr key={cb.code} className="hover:bg-slate-100/50">
                                                <td className="p-2 font-mono font-bold text-indigo-600">#{cb.rank}</td>
                                                <td className="p-2 font-medium text-slate-900">{cb.name} ({cb.code})</td>
                                                <td className="p-2 font-mono">{cb.raw_value}</td>
                                                <td className="p-2 font-mono text-emerald-700 font-semibold">{cb.utility}</td>
                                                <td className="p-2 font-mono text-violet-700 font-semibold">{cb.weight}</td>
                                                <td className="p-2 font-mono font-bold text-slate-900">{cb.weighted_score}%</td>
                                            </tr>
                                        ))}
                                        <tr className="bg-slate-100 font-bold text-slate-900">
                                            <td colSpan="5" className="p-2 text-right">Total Preferensi V({maj.code}):</td>
                                            <td className="p-2 font-mono text-pink-600 text-sm">{maj.percentage}%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
