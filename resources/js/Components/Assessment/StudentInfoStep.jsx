import React from 'react';
import { User, ArrowRight } from 'lucide-react';

export default function StudentInfoStep({ data, setData, errors, onNext }) {
    return (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
            <div className="border-b border-slate-200 pb-4">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-indigo-600" />
                    Informasi Calon Peserta Didik
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                    Data ini akan digunakan untuk menyimpan riwayat hasil evaluasi dan cetak bukti rekomendasi.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Nama Lengkap Siswa <span className="text-pink-600">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Bintang Pratama"
                        value={data.student_name}
                        onChange={(e) => setData('student_name', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
                    />
                    {errors.student_name && (
                        <p className="text-pink-600 text-xs mt-1">{errors.student_name}</p>
                    )}
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                        Nomor Induk Siswa Nasional (NISN)
                    </label>
                    <input
                        type="text"
                        placeholder="10 digit nomor NISN"
                        value={data.student_nisn}
                        onChange={(e) => setData('student_nisn', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
                    />
                </div>

                <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                        No. WhatsApp / HP Siswa / Wali
                    </label>
                    <input
                        type="text"
                        placeholder="08xxxxxxxxxx"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all"
                    />
                </div>
            </div>

            <div className="pt-4 flex justify-end">
                <button
                    type="button"
                    onClick={onNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all"
                >
                    Lanjut ke Nilai Rapor <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}
