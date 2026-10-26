import React from 'react';
import { usePage } from '@inertiajs/react';
import { Home, Compass, BookOpen, UserPlus, FlaskConical } from 'lucide-react';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import MobileBottomNav from '../Components/Layout/MobileBottomNav';

export default function AppLayout({ children }) {
    const { url } = usePage();

    const navItems = [
        { name: 'Dashboard', href: '/', icon: Home, active: url === '/' },
        { name: 'Tes Penjurusan', href: '/tes-penjurusan', icon: Compass, active: url.startsWith('/tes-penjurusan') },
        { name: 'Katalog Jurusan', href: '/katalog-jurusan', icon: BookOpen, active: url === '/katalog-jurusan' },
        { name: 'Pendaftaran', href: '/pendaftaran', icon: UserPlus, active: url.startsWith('/pendaftaran') },
        { name: 'Validasi TA', href: '/validasi-ta', icon: FlaskConical, active: url === '/validasi-ta' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
            {/* Header (Top Nav) */}
            <Header navItems={navItems} />

            {/* Content Body */}
            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            {/* Mobile Bottom Navigation */}
            <MobileBottomNav navItems={navItems} />

            {/* Footer */}
            <Footer />
        </div>
    );
}
