import React, { useState } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import { 
    UserPlus, 
    CheckCircle2, 
    Upload, 
    FileText, 
    Sparkles, 
    ArrowRight, 
    User,
    ShieldCheck
} from 'lucide-react';

export default function Register({ assessment, majors }) {
    const recommendedMajorId = assessment?.recommended_major_id || (majors[0]?.id ?? '');
    const alternativeMajorId = assessment?.alternative_major_id || (majors[1]?.id ?? '');

    const { data, setData, post, processing, errors } = useForm({
        assessment_id: assessment?.id || '',
        full_name: assessment?.student_name || '',
        nisn: assessment?.student_nisn || '',
        email: '',
        phone: assessment?.phone || '',
        origin_school: 'SMP Negeri 1',
        first_choice_major_id: recommendedMajorId,
        second_choice_major_id: alternativeMajorId,
        notes: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/pendaftaran');
    };

    return (
        <AppLayout>
            <Head title="Formulir Pendaftaran PPDB" />

            <div className="max-w-3xl mx-auto space-y-8">
                {/* Header */}
                <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-2">
                        <UserPlus className="w-3.5 h-3.5 text-indigo-600" />
                        Langkah Final PPDB 2026
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        Formulir Registrasi Calon Siswa Baru
                    </h1>
                    <p className="text-sm text-slate-600 mt-1">
                        Lengkapi data pendaftaran dan konfirmasi program keahlian yang dituju.
                    </p>
                </div>

                {/* Banner if assessment exists */}
                {assessment && (
                    <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-xs font-bold text-indigo-900">Terhubung dengan Hasil Asesmen SPK SMARTER</span>
                                <p className="text-xs text-indigo-700">
                                    Pilihan jurusan telah otomatis disesuaikan dengan hasil skor kecocokan Anda.
                                </p>
                            </div>
                        </div>
                        <Link
                            href={`/tes-penjurusan/hasil/${assessment.id}`}
                            className="text-xs text-indigo-600 font-semibold hover:underline shrink-0"
                        >
                            Lihat Skor
                        </Link>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
                    {/* Data Diri */}
                    <div className="space-y-4">
                        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                            <User className="w-4 h-4 text-indigo-600" /> Identitas Pribadi
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-2">
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Nama Lengkap Siswa <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.full_name}
                                    onChange={(e) => setData('full_name', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                                    placeholder="Nama sesuai ijazah SMP"
                                />
                                {errors.full_name && <p className="text-pink-600 text-xs mt-1">{errors.full_name}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Nomor Induk Siswa Nasional (NISN) <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.nisn}
                                    onChange={(e) => setData('nisn', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                                    placeholder="10 digit NISN"
                                />
                                {errors.nisn && <p className="text-pink-600 text-xs mt-1">{errors.nisn}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Asal Sekolah (SMP / MTs) <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.origin_school}
                                    onChange={(e) => setData('origin_school', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                                    placeholder="Contoh: SMPN 1 Kota"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    No. Handphone / WhatsApp <span className="text-pink-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                                    placeholder="08xxxxxxxxxx"
                                />
                                {errors.phone && <p className="text-pink-600 text-xs mt-1">{errors.phone}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Alamat Email Aktif
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                                    placeholder="nama@email.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pemilihan Program Keahlian */}
                    <div className="space-y-4 pt-4">
                        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                            <Sparkles className="w-4 h-4 text-pink-600" /> Pilihan Program Keahlian
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Pilihan 1 (Utama) <span className="text-pink-600">*</span>
                                </label>
                                <select
                                    value={data.first_choice_major_id}
                                    onChange={(e) => setData('first_choice_major_id', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                                >
                                    {majors.map((m) => (
                                        <option key={m.id} value={m.id}>
                                            {m.name} ({m.code}) - Sisa Pagu: {m.quota - m.enrolled_count}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                                    Pilihan 2 (Alternatif Cadangan)
                                </label>
                                <select
                                    value={data.second_choice_major_id}
                                    onChange={(e) => setData('second_choice_major_id', e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-indigo-600"
                                >
                                    <option value="">-- Tanpa Pilihan Cadangan --</option>
                                    {majors.map((m) => (
                                        <option key={m.id} value={m.id}>
                                            {m.name} ({m.code}) - Sisa Pagu: {m.quota - m.enrolled_count}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Berkas Persyaratan PPDB */}
                    <div className="space-y-4 pt-4">
                        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3">
                            <FileText className="w-4 h-4 text-emerald-600" /> Kelengkapan Dokumen (Unggah Digital)
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                                <div className="text-xs">
                                    <span className="font-bold text-slate-900 block mb-1">Kartu Keluarga (KK)</span>
                                    <span className="text-[11px] text-slate-500">PDF / JPG maks. 2MB</span>
                                </div>
                                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Berkas Terlampir
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                                <div className="text-xs">
                                    <span className="font-bold text-slate-900 block mb-1">Ijazah / SKL SMP</span>
                                    <span className="text-[11px] text-slate-500">PDF / JPG maks. 2MB</span>
                                </div>
                                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Berkas Terlampir
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                                <div className="text-xs">
                                    <span className="font-bold text-slate-900 block mb-1">Pasfoto Berwarna 3x4</span>
                                    <span className="text-[11px] text-slate-500">JPG / PNG latar merah/biru</span>
                                </div>
                                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Berkas Terlampir
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit CTA */}
                    <div className="pt-6 border-t border-slate-200 flex justify-end">
                        <button
                            type="submit"
                            disabled={processing}
                            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-bold text-sm shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                        >
                            {processing ? 'Menyimpan Registrasi...' : 'Kirim Pendaftaran PPDB'}
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
