import React from 'react';
import { Wand2 } from 'lucide-react';

export default function ProfilePresetSelector({ onSelectProfile }) {
    return (
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-1.5 rounded-xl text-xs">
            <span className="text-slate-400 flex items-center gap-1 font-medium pl-2">
                <Wand2 className="w-3.5 h-3.5 text-indigo-400" /> Contoh Profil:
            </span>
            <button
                type="button"
                onClick={() => onSelectProfile('rpl')}
                className="px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 font-semibold transition-colors"
            >
                RPL
            </button>
            <button
                type="button"
                onClick={() => onSelectProfile('dkv')}
                className="px-2 py-1 rounded-md bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 font-semibold transition-colors"
            >
                DKV
            </button>
            <button
                type="button"
                onClick={() => onSelectProfile('tb')}
                className="px-2 py-1 rounded-md bg-rose-500/20 text-rose-300 hover:bg-rose-500/30 font-semibold transition-colors"
            >
                TB
            </button>
            <button
                type="button"
                onClick={() => onSelectProfile('atph')}
                className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 font-semibold transition-colors"
            >
                ATPH
            </button>
        </div>
    );
}
