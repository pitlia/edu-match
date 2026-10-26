import React from 'react';
import { User, ArrowRight } from 'lucide-react';

export default function StudentInfoStep({ data, setData, errors, onNext }) {
    return (
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-sm">
            <div className="border-b border-slate-800 pb-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-indigo-400" />
                    Informasi Calon Peserta Didik
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                    Data ini akan digunakan untuk menyimpan riwayat hasil evaluasi dan cetak bukti rekomendasi.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Nama Lengkap Siswa <span className="text-pink-500">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Bintang Pratama"
                        value={data.student_name}
                        onChange={(e) => setData('student_name', e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                    {errors.student_name && (
                        <p className="text-pink-400 text-xs mt-1">{errors.student_name}</p>
                    )}
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Nomor Induk Siswa Nasional (NISN)
                    </label>
                    <input
                        type="text"
                        placeholder="10 digit nomor NISN"
                        value={data.student_nisn}
                        onChange={(e) => setData('student_nisn', e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                        No. WhatsApp / HP Siswa / Wali
                    </label>
                    <input
                        type="text"
                        placeholder="08xxxxxxxxxx"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                </div>
            </div>

            <div className="pt-4 flex justify-end">
                <button
                    type="button"
                    onClick={onNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all"
                >
                    Lanjut ke Nilai Rapor <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
