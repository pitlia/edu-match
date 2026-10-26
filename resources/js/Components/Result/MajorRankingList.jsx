import React from 'react';
import { BarChart3 } from 'lucide-react';

export default function MajorRankingList({ ranking }) {
    return (
        <section aria-label="Ranking Komparasi" className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-indigo-600" />
                    Komparasi Persentase 4 Program Keahlian
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                    Perbandingan nilai preferensi $V_j$ hasil agregasi fungsi utilitas dan pembobotan kurva ROC.
                </p>
            </div>

            <div className="space-y-4">
                {ranking.map((item, idx) => {
                    const isFirst = idx === 0;

                    return (
                        <div
                            key={item.code}
                            className={`p-4 rounded-2xl border transition-all ${
                                isFirst
                                    ? 'bg-indigo-50/70 border-indigo-200'
                                    : 'bg-slate-50 border-slate-200'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <span
                                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                                            isFirst ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                                        }`}
                                    >
                                        #{item.rank}
                                    </span>
                                    <div>
                                        <span className="font-bold text-sm text-slate-900">{item.name}</span>
                                        <span className="text-xs text-slate-500 ml-2">({item.code})</span>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <span className="text-base font-extrabold text-slate-900 font-mono">
                                        {item.percentage}%
                                    </span>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="h-2.5 w-full bg-slate-200/80 rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-700 ${
                                        isFirst
                                            ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                                            : 'bg-slate-400'
                                    }`}
                                    style={{ width: `${item.percentage}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
