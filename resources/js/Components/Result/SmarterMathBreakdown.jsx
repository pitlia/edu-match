import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';

export default function SmarterMathBreakdown({ ranking }) {
    const [open, setOpen] = useState(false);

    return (
        <section aria-label="Transparansi Perhitungan" className="rounded-3xl border border-slate-800 bg-slate-900/30 overflow-hidden">
            <button
                type="button"
                onClick={() => setOpen(!open)}
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
                {open ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
            </button>

            {open && (
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
        </section>
    );
}
