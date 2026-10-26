import React, { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { 
    GraduationCap, 
    Home, 
    Compass, 
    BookOpen, 
    UserPlus, 
    FlaskConical, 
    Menu, 
    X,
    Sparkles,
    CheckCircle2,
    ChevronRight
} from 'lucide-react';

export default function AppLayout({ children, title }) {
    const { url } = usePage();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', href: '/', icon: Home, active: url === '/' },
        { name: 'Tes Penjurusan', href: '/tes-penjurusan', icon: Compass, active: url.startsWith('/tes-penjurusan') },
        { name: 'Katalog Jurusan', href: '/katalog-jurusan', icon: BookOpen, active: url === '/katalog-jurusan' },
        { name: 'Pendaftaran', href: '/pendaftaran', icon: UserPlus, active: url.startsWith('/pendaftaran') },
        { name: 'Validasi TA', href: '/validasi-ta', icon: FlaskConical, active: url === '/validasi-ta' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
            {/* Header / Top Navigation */}
            <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                                        EduMatch
                                    </span>
                                    <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                                        SMARTER SPK
                                    </span>
                                </div>
                                <p className="text-[11px] text-slate-400 hidden sm:block">PPDB Kejuruan Adaptif Multi-Profil</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation Links */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                                            item.active
                                                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                                                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                                        }`}
                                    >
                                        <Icon className="w-4 h-4" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden sm:flex items-center gap-3">
                            <Link
                                href="/tes-penjurusan"
                                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold text-white rounded-xl group bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all active:scale-95"
                            >
                                <span className="relative px-3.5 py-2 transition-all ease-in duration-75 bg-slate-950 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-1.5">
                                    <Sparkles className="w-3.5 h-3.5 text-pink-400 group-hover:text-white" />
                                    Mulai Tes Asesmen
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <div className="flex md:hidden">
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-b border-slate-800 bg-slate-900/95 px-4 pt-2 pb-4 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                                        item.active
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                    }`}
                                >
                                    <Icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            );
                        })}
                        <div className="pt-2">
                            <Link
                                href="/tes-penjurusan"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-medium text-sm"
                            >
                                <Sparkles className="w-4 h-4" />
                                Mulai Tes Penjurusan
                            </Link>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content Area */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            {/* Mobile Bottom Navigation (Floating App-like Bar) */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-xl border-t border-slate-800 px-2 py-1.5 flex justify-around items-center">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex flex-col items-center py-1 px-2 rounded-lg text-[10px] font-medium transition-colors ${
                                item.active ? 'text-indigo-400' : 'text-slate-400 hover:text-slate-200'
                            }`}
                        >
                            <Icon className="w-5 h-5 mb-0.5" />
                            {item.name}
                        </Link>
                    );
                })}
            </div>

            {/* Footer */}
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
        </div>
    );
}
