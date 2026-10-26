import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import { 
    Compass, 
    Sparkles, 
    User, 
    BookOpen, 
    Brain, 
    ArrowRight, 
    ArrowLeft, 
    CheckCircle2, 
    HelpCircle,
    Check,
    Wand2
} from 'lucide-react';

export default function Assessment({ criteria, majors, riasecQuestions }) {
    const [step, setStep] = useState(1);

    // Initial answers map for 14 RIASEC questions
    const initialRiasecAnswers = {};
    riasecQuestions.forEach(q => {
        initialRiasecAnswers[q.id] = {
            category: q.category,
            value: 3 // Default netral
        };
    });

    const { data, setData, post, processing, errors } = useForm({
        student_name: '',
        student_nisn: '',
        phone: '',
        academic: {
            MAT: 85,
            IPA: 80,
            BIND: 82,
            BING: 80,
        },
        riasec_answers: initialRiasecAnswers,
    });

    const handleAcademicChange = (subject, value) => {
        const numVal = Math.max(0, Math.min(100, Number(value) || 0));
        setData('academic', {
            ...data.academic,
            [subject]: numVal,
        });
    };

    const handleRiasecSelect = (qId, category, val) => {
        setData('riasec_answers', {
            ...data.riasec_answers,
            [qId]: {
                category,
                value: val,
            },
        });
    };

    // Quick Fill Profiles for testing
    const loadSampleProfile = (type) => {
        if (type === 'rpl') {
            setData({
                ...data,
                student_name: 'Muhammad Rifqi (Simulasi RPL)',
                student_nisn: '0078923411',
                phone: '081234567890',
                academic: { MAT: 94, IPA: 85, BIND: 78, BING: 90 },
                riasec_answers: {
                    ...data.riasec_answers,
                    q_r1: { category: 'RIASEC_R', value: 3 },
                    q_r2: { category: 'RIASEC_R', value: 2 },
                    q_r3: { category: 'RIASEC_R', value: 2 },
                    q_i1: { category: 'RIASEC_I', value: 5 },
                    q_i2: { category: 'RIASEC_I', value: 5 },
                    q_i3: { category: 'RIASEC_I', value: 5 },
                    q_a1: { category: 'RIASEC_A', value: 3 },
                    q_a2: { category: 'RIASEC_A', value: 3 },
                    q_a3: { category: 'RIASEC_A', value: 3 },
                    q_s1: { category: 'RIASEC_S', value: 3 },
                    q_s2: { category: 'RIASEC_S', value: 3 },
                    q_e1: { category: 'RIASEC_E', value: 3 },
                    q_e2: { category: 'RIASEC_E', value: 3 },
                    q_c1: { category: 'RIASEC_C', value: 5 },
                    q_c2: { category: 'RIASEC_C', value: 4 },
                }
            });
        } else if (type === 'dkv') {
            setData({
                ...data,
                student_name: 'Alya Salsabila (Simulasi DKV)',
                student_nisn: '0078923422',
                phone: '081234567891',
                academic: { MAT: 70, IPA: 68, BIND: 88, BING: 92 },
                riasec_answers: {
                    ...data.riasec_answers,
                    q_r1: { category: 'RIASEC_R', value: 2 },
                    q_r2: { category: 'RIASEC_R', value: 3 },
                    q_r3: { category: 'RIASEC_R', value: 2 },
                    q_i1: { category: 'RIASEC_I', value: 3 },
                    q_i2: { category: 'RIASEC_I', value: 4 },
                    q_i3: { category: 'RIASEC_I', value: 3 },
                    q_a1: { category: 'RIASEC_A', value: 5 },
                    q_a2: { category: 'RIASEC_A', value: 5 },
                    q_a3: { category: 'RIASEC_A', value: 5 },
                    q_s1: { category: 'RIASEC_S', value: 4 },
                    q_s2: { category: 'RIASEC_S', value: 3 },
                    q_e1: { category: 'RIASEC_E', value: 4 },
                    q_e2: { category: 'RIASEC_E', value: 3 },
                    q_c1: { category: 'RIASEC_C', value: 3 },
                    q_c2: { category: 'RIASEC_C', value: 3 },
                }
            });
        } else if (type === 'tb') {
            setData({
                ...data,
                student_name: 'Dinda Kirana (Simulasi TB)',
                student_nisn: '0078923433',
                phone: '081234567892',
                academic: { MAT: 65, IPA: 60, BIND: 85, BING: 78 },
                riasec_answers: {
                    ...data.riasec_answers,
                    q_r1: { category: 'RIASEC_R', value: 4 },
                    q_r2: { category: 'RIASEC_R', value: 3 },
                    q_r3: { category: 'RIASEC_R', value: 2 },
                    q_i1: { category: 'RIASEC_I', value: 2 },
                    q_i2: { category: 'RIASEC_I', value: 3 },
                    q_i3: { category: 'RIASEC_I', value: 3 },
                    q_a1: { category: 'RIASEC_A', value: 5 },
                    q_a2: { category: 'RIASEC_A', value: 5 },
                    q_a3: { category: 'RIASEC_A', value: 4 },
                    q_s1: { category: 'RIASEC_S', value: 4 },
                    q_s2: { category: 'RIASEC_S', value: 3 },
                    q_e1: { category: 'RIASEC_E', value: 5 },
                    q_e2: { category: 'RIASEC_E', value: 4 },
                    q_c1: { category: 'RIASEC_C', value: 5 },
                    q_c2: { category: 'RIASEC_C', value: 5 },
                }
            });
        } else if (type === 'atph') {
            setData({
                ...data,
                student_name: 'Bagus Pratama (Simulasi ATPH)',
                student_nisn: '0078923444',
                phone: '081234567893',
                academic: { MAT: 72, IPA: 95, BIND: 75, BING: 70 },
                riasec_answers: {
                    ...data.riasec_answers,
                    q_r1: { category: 'RIASEC_R', value: 5 },
                    q_r2: { category: 'RIASEC_R', value: 5 },
                    q_r3: { category: 'RIASEC_R', value: 5 },
                    q_i1: { category: 'RIASEC_I', value: 4 },
                    q_i2: { category: 'RIASEC_I', value: 4 },
                    q_i3: { category: 'RIASEC_I', value: 5 },
                    q_a1: { category: 'RIASEC_A', value: 2 },
                    q_a2: { category: 'RIASEC_A', value: 2 },
                    q_a3: { category: 'RIASEC_A', value: 2 },
                    q_s1: { category: 'RIASEC_S', value: 3 },
                    q_s2: { category: 'RIASEC_S', value: 3 },
                    q_e1: { category: 'RIASEC_E', value: 4 },
                    q_e2: { category: 'RIASEC_E', value: 4 },
                    q_c1: { category: 'RIASEC_C', value: 4 },
                    q_c2: { category: 'RIASEC_C', value: 4 },
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/tes-penjurusan');
    };

    const likertLabels = [
        { val: 1, label: 'Sangat Tidak Suka' },
        { val: 2, label: 'Tidak Suka' },
        { val: 3, label: 'Netral' },
        { val: 4, label: 'Suka' },
        { val: 5, label: 'Sangat Suka' },
    ];

    return (
        <AppLayout>
            <Head title="Tes Penjurusan SPK SMARTER" />

            <div className="max-w-4xl mx-auto">
                {/* Header Info */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                        <Compass className="w-4 h-4" />
                        Asesmen Adaptif SPK SMARTER
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                                Instrumen Tes Penjurusan Siswa
                            </h1>
                            <p className="text-sm text-slate-400 mt-1">
                                Integrasi nilai rapor akademik & instrumen psikometrik RIASEC Holland Code.
                            </p>
                        </div>

                        {/* Quick preset selector for instant testing */}
                        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1.5 rounded-xl text-xs">
                            <span className="text-slate-400 flex items-center gap-1 font-medium pl-2">
                                <Wand2 className="w-3.5 h-3.5 text-indigo-400" /> Contoh Profil:
                            </span>
                            <button
                                type="button"
                                onClick={() => loadSampleProfile('rpl')}
                                className="px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 font-semibold"
                            >
                                RPL
                            </button>
                            <button
                                type="button"
                                onClick={() => loadSampleProfile('dkv')}
                                className="px-2 py-1 rounded-md bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 font-semibold"
                            >
                                DKV
                            </button>
                            <button
                                type="button"
                                onClick={() => loadSampleProfile('tb')}
                                className="px-2 py-1 rounded-md bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 font-semibold"
                            >
                                TB
                            </button>
                            <button
                                type="button"
                                onClick={() => loadSampleProfile('atph')}
                                className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 font-semibold"
                            >
                                ATPH
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stepper Progress Indicator */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                    <button
                        type="button"
                        onClick={() => setStep(1)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                            step === 1
                                ? 'bg-indigo-600/20 border-indigo-500/50 text-white'
                                : 'bg-slate-900/50 border-slate-800 text-slate-400'
                        }`}
                    >
                        <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 1 ? 'bg-indigo-500 text-white' : 'bg-slate-800'}`}>1</span>
                            Data Diri
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 truncate">Nama & NISN</div>
                    </button>

                    <button
                        type="button"
                        onClick={() => setStep(2)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                            step === 2
                                ? 'bg-indigo-600/20 border-indigo-500/50 text-white'
                                : 'bg-slate-900/50 border-slate-800 text-slate-400'
                        }`}
                    >
                        <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 2 ? 'bg-indigo-500 text-white' : 'bg-slate-800'}`}>2</span>
                            Nilai Rapor
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 truncate">4 Mapel Pokok</div>
                    </button>

                    <button
                        type="button"
                        onClick={() => setStep(3)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                            step === 3
                                ? 'bg-indigo-600/20 border-indigo-500/50 text-white'
                                : 'bg-slate-900/50 border-slate-800 text-slate-400'
                        }`}
                    >
                        <div className="flex items-center gap-2 text-xs font-semibold">
                            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step === 3 ? 'bg-indigo-500 text-white' : 'bg-slate-800'}`}>3</span>
                            Kuesioner Minat
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1 truncate">RIASEC Psikometrik</div>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* STEP 1: IDENTITAS CALON SISWA */}
                    {step === 1 && (
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
                                    onClick={() => {
                                        if (!data.student_name.trim()) {
                                            alert('Silakan isi Nama Lengkap terlebih dahulu.');
                                            return;
                                        }
                                        setStep(2);
                                    }}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all"
                                >
                                    Lanjut ke Nilai Rapor <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: NILAI RAPOR AKADEMIK */}
                    {step === 2 && (
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-sm">
                            <div className="border-b border-slate-800 pb-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-indigo-400" />
                                    Nilai Rapor Akademik (Skala 0 - 100)
                                </h2>
                                <p className="text-xs text-slate-400 mt-1">
                                    Masukkan rata-rata nilai semester 1-5 untuk 4 mata pelajaran pokok tingkat SMP/MTs.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Matematika */}
                                <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-sm text-white">Matematika</span>
                                        <span className="text-sm font-bold text-indigo-400 font-mono">
                                            {data.academic.MAT}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={data.academic.MAT}
                                        onChange={(e) => handleAcademicChange('MAT', e.target.value)}
                                        className="w-full accent-indigo-500 cursor-pointer mb-2"
                                    />
                                    <p className="text-[11px] text-slate-500">Bobot krusial untuk jurusan RPL (Logika Pemrograman)</p>
                                </div>

                                {/* IPA */}
                                <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-sm text-white">Ilmu Pengetahuan Alam (IPA)</span>
                                        <span className="text-sm font-bold text-emerald-400 font-mono">
                                            {data.academic.IPA}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={data.academic.IPA}
                                        onChange={(e) => handleAcademicChange('IPA', e.target.value)}
                                        className="w-full accent-emerald-500 cursor-pointer mb-2"
                                    />
                                    <p className="text-[11px] text-slate-500">Bobot krusial untuk jurusan ATPH (Biologi & Sains Terapan)</p>
                                </div>

                                {/* Bahasa Indonesia */}
                                <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-sm text-white">Bahasa Indonesia</span>
                                        <span className="text-sm font-bold text-pink-400 font-mono">
                                            {data.academic.BIND}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={data.academic.BIND}
                                        onChange={(e) => handleAcademicChange('BIND', e.target.value)}
                                        className="w-full accent-pink-500 cursor-pointer mb-2"
                                    />
                                    <p className="text-[11px] text-slate-500">Kemampuan komunikasi verbal dan narasi konsep</p>
                                </div>

                                {/* Bahasa Inggris */}
                                <div className="bg-slate-950/70 border border-slate-800 p-5 rounded-2xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-sm text-white">Bahasa Inggris</span>
                                        <span className="text-sm font-bold text-violet-400 font-mono">
                                            {data.academic.BING}
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={data.academic.BING}
                                        onChange={(e) => handleAcademicChange('BING', e.target.value)}
                                        className="w-full accent-violet-500 cursor-pointer mb-2"
                                    />
                                    <p className="text-[11px] text-slate-500">Literasi dokumentasi teknis & komunikasi industri global</p>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-between">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-all"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Kembali
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep(3)}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all"
                                >
                                    Lanjut ke Kuesioner Minat <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: KUESIONER MINAT BAKAT (RIASEC LIKERT SCALE) */}
                    {step === 3 && (
                        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 backdrop-blur-sm">
                            <div className="border-b border-slate-800 pb-4">
                                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-indigo-400" />
                                    Kuesioner Minat & Kepribadian (RIASEC Holland Model)
                                </h2>
                                <p className="text-xs text-slate-400 mt-1">
                                    Pilihlah skala yang paling menggambarkan diri Anda (1 = Sangat Tidak Suka / Sesuai, 5 = Sangat Suka / Sesuai).
                                </p>
                            </div>

                            {/* Legend */}
                            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 p-3 bg-slate-950/80 rounded-xl border border-slate-800 text-xs text-slate-400">
                                {likertLabels.map((l) => (
                                    <div key={l.val} className="flex items-center gap-1.5">
                                        <span className="w-5 h-5 rounded-md bg-slate-800 text-indigo-400 font-bold flex items-center justify-center text-[10px]">
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
                                            className="bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 p-4 sm:p-5 rounded-2xl transition-all"
                                        >
                                            <div className="flex items-start justify-between gap-4 mb-4">
                                                <div className="flex items-start gap-3">
                                                    <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md border border-indigo-500/20">
                                                        #{idx + 1}
                                                    </span>
                                                    <p className="text-sm font-medium text-slate-200 leading-relaxed">
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
                                                            onClick={() => handleRiasecSelect(q.id, q.category, val)}
                                                            className={`py-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-0.5 border ${
                                                                isSelected
                                                                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30 scale-105'
                                                                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
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
                            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-all"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Kembali ke Nilai
                                </button>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    {processing ? 'Menghitung SPK SMARTER...' : 'Hitung Rekomendasi Jurusan'}
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </AppLayout>
    );
}
