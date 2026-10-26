import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { GraduationCap, Menu, X, Sparkles } from 'lucide-react';

export default function Header({ navItems }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200 shadow-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-pink-500 p-0.5 shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                                <GraduationCap className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent">
                                    EduMatch
                                </span>
                                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                                    SMARTER SPK
                                </span>
                            </div>
                            <p className="text-[11px] text-slate-500 hidden sm:block">PPDB Kejuruan Adaptif Multi-Profil</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                                        item.active
                                            ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25'
                                            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
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
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 shadow-md shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            Mulai Tes Asesmen
                        </Link>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-b border-slate-200 bg-white/95 px-4 pt-2 pb-4 space-y-1 shadow-lg">
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
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
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
    );
}
