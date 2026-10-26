import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import { 
    CheckCircle2, 
    Printer, 
    Home, 
    QrCode, 
    GraduationCap, 
    Calendar, 
    ShieldCheck 
} from 'lucide-react';

export default function RegistrationProof({ registration }) {
    const firstMajor = registration.first_choice_major;
    const secondMajor = registration.second_choice_major;

    return (
        <AppLayout>
            <Head title={`Bukti Pendaftaran - ${registration.registration_number}`} />

            <div className="max-w-2xl mx-auto space-y-8">
                {/* Status Announcement */}
                <div className="text-center">
                    <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-xs">
                        <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        Pendaftaran PPDB Berhasil Terkirim
                    </h1>
                    <p className="text-sm text-slate-600 mt-1">
                        Simpan bukti tanda terima pendaftaran ini sebagai dokumen sah seleksi masuk kejuruan.
                    </p>
                </div>

                {/* Bukti Registrasi Card */}
                <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden print:shadow-none print:border-black">
                    {/* Top Watermark bar */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-xs">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <div>
                                <h2 className="font-black text-lg text-slate-900 tracking-tight">KARTU BUKTI PENDAFTARAN PPDB</h2>
                                <p className="text-xs text-slate-500">SMK Pusat Keunggulan &bull; Tahun Ajaran 2026/2027</p>
                            </div>
                        </div>

                        <div className="text-right">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">No. Pendaftaran</span>
                            <span className="font-mono font-bold text-sm text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-200">
                                {registration.registration_number}
                            </span>
                        </div>
                    </div>

                    {/* QR Code and Meta Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 pb-6 border-b border-slate-200">
                        <div className="sm:col-span-2 space-y-3">
                            <div>
                                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Nama Lengkap Siswa</span>
                                <span className="text-base font-bold text-slate-900">{registration.full_name}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                    <span className="text-slate-500 block">NISN</span>
                                    <span className="font-mono text-slate-800 font-semibold">{registration.nisn}</span>
                                </div>
                                <div>
                                    <span className="text-slate-500 block">Asal Sekolah</span>
                                    <span className="text-slate-800 font-semibold">{registration.origin_school}</span>
                                </div>
                            </div>
                            <div className="text-xs">
                                <span className="text-slate-500 block">No. Handphone / WhatsApp</span>
                                <span className="text-slate-800 font-semibold">{registration.phone}</span>
                            </div>
                        </div>

                        {/* Mock QR Verification */}
                        <div className="flex flex-col items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
                            <QrCode className="w-20 h-20 text-slate-700" />
                            <span className="text-[10px] text-slate-500 font-mono mt-2 font-semibold">VERIFIED VALID</span>
                        </div>
                    </div>

                    {/* Selected Majors */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-slate-200">
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                            Program Keahlian Pilihan:
                        </span>

                        <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] font-bold text-indigo-700 uppercase">Pilihan 1 (Utama)</span>
                                <div className="text-sm font-bold text-slate-900">
                                    {firstMajor?.name} ({firstMajor?.code})
                                </div>
                            </div>
                            <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-indigo-700 border border-indigo-200">
                                Pagu: {firstMajor?.quota}
                            </span>
                        </div>

                        {secondMajor && (
                            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                                <div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">Pilihan 2 (Alternatif Cadangan)</span>
                                    <div className="text-sm font-medium text-slate-700">
                                        {secondMajor?.name} ({secondMajor?.code})
                                    </div>
                                </div>
                                <span className="text-xs text-slate-500">
                                    Pagu: {secondMajor?.quota}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Status & Timestamp */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
                        <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            Status: Terdaftar & Menunggu Verifikasi Berkas
                        </div>
                        <div className="flex items-center gap-1.5 font-mono">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-500/20 transition-all"
                    >
                        <Printer className="w-4 h-4" /> Cetak Kartu Pendaftaran
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-2xs transition-all"
                    >
                        <Home className="w-4 h-4" /> Kembali ke Beranda
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
