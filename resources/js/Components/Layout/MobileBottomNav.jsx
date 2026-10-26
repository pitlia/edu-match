import React from 'react';
import { Link } from '@inertiajs/react';

export default function MobileBottomNav({ navItems }) {
    return (
        <nav 
            aria-label="Mobile Navigation"
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 px-2 py-1.5 flex justify-around items-center"
        >
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
        </nav>
    );
}
