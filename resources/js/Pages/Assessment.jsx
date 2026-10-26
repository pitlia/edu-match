import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import ProfilePresetSelector from '../Components/Assessment/ProfilePresetSelector';
import StudentInfoStep from '../Components/Assessment/StudentInfoStep';
import AcademicScoresStep from '../Components/Assessment/AcademicScoresStep';
import RiasecQuizStep from '../Components/Assessment/RiasecQuizStep';
import { Compass } from 'lucide-react';

export default function Assessment({ criteria, majors, riasecQuestions }) {
    const [step, setStep] = useState(1);

    const initialRiasecAnswers = {};
    riasecQuestions.forEach((q) => {
        initialRiasecAnswers[q.id] = {
            category: q.category,
            value: 3,
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

    const loadSampleProfile = (type) => {
        const baseRiasec = { ...data.riasec_answers };

        if (type === 'rpl') {
            setData({
                ...data,
                student_name: 'Muhammad Rifqi (Simulasi RPL)',
                student_nisn: '0078923411',
                phone: '081234567890',
                academic: { MAT: 94, IPA: 85, BIND: 78, BING: 90 },
                riasec_answers: {
                    ...baseRiasec,
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
                },
            });
        } else if (type === 'dkv') {
            setData({
                ...data,
                student_name: 'Alya Salsabila (Simulasi DKV)',
                student_nisn: '0078923422',
                phone: '081234567891',
                academic: { MAT: 70, IPA: 68, BIND: 88, BING: 92 },
                riasec_answers: {
                    ...baseRiasec,
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
                },
            });
        } else if (type === 'tb') {
            setData({
                ...data,
                student_name: 'Dinda Kirana (Simulasi TB)',
                student_nisn: '0078923433',
                phone: '081234567892',
                academic: { MAT: 65, IPA: 60, BIND: 85, BING: 78 },
                riasec_answers: {
                    ...baseRiasec,
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
                },
            });
        } else if (type === 'atph') {
            setData({
                ...data,
                student_name: 'Bagus Pratama (Simulasi ATPH)',
                student_nisn: '0078923444',
                phone: '081234567893',
                academic: { MAT: 72, IPA: 95, BIND: 75, BING: 70 },
                riasec_answers: {
                    ...baseRiasec,
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
                },
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/tes-penjurusan');
    };

    return (
        <AppLayout>
            <Head title="Tes Penjurusan SPK SMARTER" />

            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
                            <Compass className="w-4 h-4" />
                            Asesmen Adaptif SPK SMARTER
                        </div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                            Instrumen Tes Penjurusan Siswa
                        </h1>
                        <p className="text-sm text-slate-400 mt-1">
                            Integrasi nilai rapor akademik & instrumen psikometrik RIASEC Holland Code.
                        </p>
                    </div>

                    <ProfilePresetSelector onSelectProfile={loadSampleProfile} />
                </div>

                {/* Stepper Tabs */}
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { stepNum: 1, title: 'Data Diri', subtitle: 'Nama & NISN' },
                        { stepNum: 2, title: 'Nilai Rapor', subtitle: '4 Mapel Pokok' },
                        { stepNum: 3, title: 'Kuesioner Minat', subtitle: 'RIASEC Psikometrik' },
                    ].map((tab) => (
                        <button
                            key={tab.stepNum}
                            type="button"
                            onClick={() => setStep(tab.stepNum)}
                            className={`p-3 rounded-xl border text-left transition-all ${
                                step === tab.stepNum
                                    ? 'bg-indigo-600/20 border-indigo-500/50 text-white'
                                    : 'bg-slate-900/50 border-slate-800 text-slate-400'
                            }`}
                        >
                            <div className="flex items-center gap-2 text-xs font-semibold">
                                <span
                                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                                        step === tab.stepNum ? 'bg-indigo-500 text-white' : 'bg-slate-800'
                                    }`}
                                >
                                    {tab.stepNum}
                                </span>
                                {tab.title}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-1 truncate">{tab.subtitle}</div>
                        </button>
                    ))}
                </div>

                {/* Form Sections */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 && (
                        <StudentInfoStep
                            data={data}
                            setData={setData}
                            errors={errors}
                            onNext={() => {
                                if (!data.student_name.trim()) {
                                    alert('Silakan isi Nama Lengkap terlebih dahulu.');
                                    return;
                                }
                                setStep(2);
                            }}
                        />
                    )}

                    {step === 2 && (
                        <AcademicScoresStep
                            data={data}
                            onAcademicChange={handleAcademicChange}
                            onNext={() => setStep(3)}
                            onPrev={() => setStep(1)}
                        />
                    )}

                    {step === 3 && (
                        <RiasecQuizStep
                            riasecQuestions={riasecQuestions}
                            data={data}
                            onRiasecSelect={handleRiasecSelect}
                            onPrev={() => setStep(2)}
                            processing={processing}
                        />
                    )}
                </form>
            </div>
        </AppLayout>
    );
}
