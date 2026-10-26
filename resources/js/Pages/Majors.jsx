import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import MajorDetailCard from '../Components/Majors/MajorDetailCard';
import { BookOpen } from 'lucide-react';

export default function Majors({ majors }) {
    return (
        <AppLayout>
            <Head title="Katalog Program Keahlian SMK" />

            <div className="max-w-6xl mx-auto space-y-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
                        <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                        Katalog 4 Program Keahlian
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                        Profil & Kompetensi Kejuruan
                    </h1>
                    <p className="text-sm text-slate-600 mt-2">
                        Pelajari kurikulum, sarana prasarana modern, prospek karir industri, dan kriteria kualifikasi yang dicari oleh masing-masing jurusan.
                    </p>
                </div>

                {/* Major Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {majors.map((major) => (
                        <MajorDetailCard key={major.id} major={major} />
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
