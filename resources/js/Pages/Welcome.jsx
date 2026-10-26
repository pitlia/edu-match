import { Head } from '@inertiajs/react';

export default function Welcome({ title = 'EduMatch' }) {
    return (
        <>
            <Head title="Selamat Datang" />
            <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-6">
                <div className="max-w-md w-full bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-indigo-600/20 text-indigo-400 font-bold text-2xl mb-2">
                        EM
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-white">{title}</h1>
                    <p className="text-slate-400 text-sm">
                        Laravel + Inertia.js + React.js berhasil terintegrasi.
                    </p>
                    <div className="pt-4 border-t border-slate-700/60 flex justify-center gap-3 text-xs text-slate-400">
                        <span className="px-2.5 py-1 rounded-md bg-slate-700/50">Laravel</span>
                        <span className="px-2.5 py-1 rounded-md bg-slate-700/50">Inertia.js</span>
                        <span className="px-2.5 py-1 rounded-md bg-slate-700/50">React.js</span>
                        <span className="px-2.5 py-1 rounded-md bg-slate-700/50">Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </>
    );
}
