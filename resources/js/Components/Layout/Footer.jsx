import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-8 text-xs text-slate-500 mb-14 md:mb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-600" />
                    <span className="font-semibold text-slate-800">EduMatch</span> &copy; 2026. Sistem Rekomendasi PPDB SMK
                </div>
                <div className="text-slate-400">
                    4 Program Kejuruan: RPL &bull; DKV &bull; TB &bull; ATPH
                </div>
            </div>
        </footer>
    );
}
