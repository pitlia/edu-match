import React from 'react';
import { Wand2 } from 'lucide-react';

export default function ProfilePresetSelector({ onSelectProfile }) {
    return (
        <div className="flex items-center gap-2 bg-white border border-slate-200 p-1.5 rounded-xl text-xs shadow-2xs">
            <span className="text-slate-600 flex items-center gap-1 font-medium pl-2">
                <Wand2 className="w-3.5 h-3.5 text-indigo-600" /> Contoh Profil:
            </span>
            <button
                type="button"
                onClick={() => onSelectProfile('rpl')}
                className="px-2 py-1 rounded-md bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-semibold transition-colors"
            >
                RPL
            </button>
            <button
                type="button"
                onClick={() => onSelectProfile('dkv')}
                className="px-2 py-1 rounded-md bg-purple-50 text-purple-700 hover:bg-purple-100 font-semibold transition-colors"
            >
                DKV
            </button>
            <button
                type="button"
                onClick={() => onSelectProfile('tb')}
                className="px-2 py-1 rounded-md bg-rose-50 text-rose-700 hover:bg-rose-100 font-semibold transition-colors"
            >
                TB
            </button>
            <button
                type="button"
                onClick={() => onSelectProfile('atph')}
                className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold transition-colors"
            >
                ATPH
            </button>
        </div>
    );
}
