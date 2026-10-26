import React from 'react';
import { Link } from '@inertiajs/react';
import { Compass, Layers, TrendingUp, FileText, ArrowRight } from 'lucide-react';

export default function StepTimeline() {
    const ppdbSteps = [
        {
            num: '01',
            title: 'Isi Nilai Rapor & Tes Minat',
            desc: 'Input 4 mapel akademik dan jawab 14 butir asesmen kepribadian RIASEC (Holland Code).',
            icon: Compass,
        },
        {
            num: '02',
            title: 'Kalkulasi SPK SMARTER',
            desc: 'Sistem memproses bobot ROC multi-profil spesifik kejuruan & fungsi utilitas SMART.',
            icon: Layers,
        },
        {
            num: '03',
            title: 'Hasil & Validasi Kuota',
            desc: 'Dapatkan grafik kecocokan 4 jurusan, rekomendasi primer, serta jurusan cadangan.',
            icon: TrendingUp,
        },
        {
            num: '04',
            title: 'Konfirmasi & Berkas PPDB',
            desc: 'Pilih jurusan, unggah berkas KK/ijazah, dan unduh bukti tanda terima pendaftaran.',
            icon: FileText,
        },
    ];

    return (
        <section aria-label="Alur Pendaftaran" className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10 mb-12">
            <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Alur Pendaftaran & Asesmen Terintegrasi
                </h2>
                <p className="text-sm text-slate-400">
                    Proses seleksi transparan berjenjang mulai dari pengisian instrumen hingga penerbitan bukti pendaftaran resmi.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {ppdbSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                        <div key={step.num} className="relative bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-2xl font-black text-indigo-500/40 font-mono">{step.num}</span>
                                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-indigo-400 border border-slate-700">
                                    <Icon className="w-5 h-5" />
                                </div>
                            </div>
                            <h3 className="font-semibold text-base text-white mb-2">{step.title}</h3>
                            <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 text-center">
                <Link
                    href="/tes-penjurusan"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all"
                >
                    Mulai Langkah Pertama <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
}
