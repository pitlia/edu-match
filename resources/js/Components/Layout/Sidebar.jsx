import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { GraduationCap, Sparkles, X, ChevronRight } from 'lucide-react';

export default function Sidebar({ isOpen, onClose, navItems }) {
    // Tutup saat tombol ESC ditekan
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    // Cegah scroll pada body saat sidebar terbuka
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop Overlay */}
            <div
                onClick={onClose}
                aria-hidden="true"
                className={`fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            />

            {/* Sidebar Drawer Panel */}
            <aside
                aria-label="Sidebar Menu"
                className={`fixed top-0 left-0 bottom-0 z-50 w-72 sm:w-80 bg-white border-r border-slate-200 shadow-2xl flex flex-col transition-transform duration-300 ease-out transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between h-16 px-6 border-b border-slate-200">
                    <Link
                        href="/"
                        onClick={onClose}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-indigo-600" />
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-lg tracking-tight text-slate-900">
                                EduMatch
                            </span>
                            <span className="block text-[10px] text-slate-500 -mt-0.5">PPDB & SPK SMARTER</span>
                        </div>
                    </Link>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
                        aria-label="Tutup sidebar"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Sidebar Navigation Links */}
                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5">
                    <div className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Menu Navigasi
                    </div>

                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={onClose}
                                className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium transition-all group ${
                                    item.active
                                        ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Icon className={`w-5 h-5 ${item.active ? 'text-white' : 'text-slate-500 group-hover:text-indigo-600'} transition-colors`} />
                                    <span>{item.name}</span>
                                </div>
                                <ChevronRight className={`w-4 h-4 ${item.active ? 'text-white/70' : 'text-slate-400 group-hover:text-slate-600 group-hover:translate-x-0.5'} transition-all`} />
                            </Link>
                        );
                    })}
                </div>

                {/* Sidebar Footer / CTA */}
                <div className="p-4 border-t border-slate-200 bg-slate-50/70 space-y-3">
                    <Link
                        href="/tes-penjurusan"
                        onClick={onClose}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-semibold text-xs shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
                    >
                        <Sparkles className="w-4 h-4" />
                        Mulai Tes Penjurusan
                    </Link>

                    <div className="text-center text-[11px] text-slate-400">
                        &copy; 2026 EduMatch &bull; Versi 1.0
                    </div>
                </div>
            </aside>
        </>
    );
}
