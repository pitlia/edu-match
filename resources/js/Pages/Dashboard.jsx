import React from 'react';
import { Head, Link } from '@inertiajs/react';
import AppLayout from '../Layouts/AppLayout';
import HeroSection from '../Components/Dashboard/HeroSection';
import MajorCard from '../Components/Dashboard/MajorCard';
import StepTimeline from '../Components/Dashboard/StepTimeline';
import { ArrowRight } from 'lucide-react';

export default function Dashboard({ majors, stats }) {
    return (
        <AppLayout>
            <Head title="PPDB SMK & SPK Penjurusan SMARTER" />

            {/* 1. Hero Section */}
            <HeroSection stats={stats} />

            {/* 2. Program Kejuruan Grid (4 Alternatif) */}
            <section aria-label="Program Keahlian" className="mb-14">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white">4 Program Keahlian Unggulan</h2>
                        <p className="text-slate-400 text-sm mt-1">
                            Setiap program keahlian memiliki matriks bobot kriteria independen berbasis kurva ROC.
                        </p>
                    </div>
                    <Link
                        href="/katalog-jurusan"
                        className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                    >
                        Detail Fasilitas & Karir <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {majors.map((major) => (
                        <MajorCard key={major.id} major={major} />
                    ))}
                </div>
            </section>

            {/* 3. Stepper Timeline PPDB */}
            <StepTimeline />
        </AppLayout>
    );
}
