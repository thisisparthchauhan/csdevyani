import Link from 'next/link';
import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-slate-900/50 backdrop-blur-xl p-12 rounded-3xl border border-slate-800 shadow-2xl max-w-lg w-full">
                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <AlertCircle className="text-red-500" size={40} />
                </div>

                <h1 className="text-4xl font-extrabold text-white mb-2">
                    404
                </h1>
                <h2 className="text-xl font-bold text-slate-400 mb-6 tracking-wide">
                    Page Not Found
                </h2>

                <p className="text-slate-500 mb-10 leading-relaxed">
                    The page you are looking for does not exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center px-8 py-3 bg-[var(--brand-secondary)] hover:bg-amber-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                    <ArrowLeft className="mr-2" size={20} />
                    Return Home
                </Link>
            </div>
        </div>
    );
}
