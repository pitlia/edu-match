import React from 'react';
import { Link } from '@inertiajs/react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-800/80 bg-slate-950 py-8 text-xs text-slate-500 mb-14 md:mb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    <span className="font-semibold text-slate-300">EduMatch</span> &copy; 2026. Sistem Rekomendasi PPDB SMK Berbasis Multi-Profil SMARTER.
                </div>
                <div className="flex items-center gap-4 text-slate-400">
                    <span>4 Program Kejuruan: RPL &bull; DKV &bull; TB &bull; ATPH</span>
                    <span className="hidden sm:inline">&bull;</span>
                    <Link href="/validasi-ta" className="text-indigo-400 hover:underline">
                        Dokumentasi Validasi TA
                    </Link>
                </div>
            </div>
        </footer>
    );
}
