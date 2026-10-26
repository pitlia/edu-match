import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { GraduationCap, Sparkles } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Header({ navItems }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-xs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left: Animated Hamburger Toggle & Brand Logo */}
                        <div className="flex items-center gap-3 sm:gap-4">
                            {/* Animated Hamburger Icon Button */}
                            <button
                                type="button"
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="p-2.5 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-100 text-slate-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all shadow-2xs group"
                                aria-label={sidebarOpen ? 'Tutup navigasi' : 'Buka navigasi'}
                                aria-expanded={sidebarOpen}
                            >
                                <div className="w-5 h-4 flex flex-col justify-between relative">
                                    {/* Line 1 */}
                                    <span
                                        className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                                            sidebarOpen ? 'rotate-45 translate-y-[7px]' : ''
                                        }`}
                                    />
                                    {/* Line 2 */}
                                    <span
                                        className={`h-0.5 w-full bg-current rounded-full transition-all duration-200 ease-in-out ${
                                            sidebarOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                                        }`}
                                    />
                                    {/* Line 3 */}
                                    <span
                                        className={`h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                                            sidebarOpen ? '-rotate-45 -translate-y-[7px]' : ''
                                        }`}
                                    />
                                </div>
                            </button>

                            {/* Brand Logo */}
                            <Link href="/" className="flex items-center gap-2.5 group">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                                    <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                                        <GraduationCap className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
                                    </div>
                                </div>
                                <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                                    EduMatch
                                </span>
                            </Link>
                        </div>

                        {/* Right: Quick Action CTA */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/tes-penjurusan"
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                <Sparkles className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Mulai Tes Asesmen</span>
                                <span className="sm:hidden">Tes</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Responsive Sidebar Drawer */}
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                navItems={navItems}
            />
        </>
    );
}
