import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

export default function ComingSoon() {
    return (
        <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4 text-center">
            <div className="bg-slate-800/50 backdrop-blur-xl p-12 rounded-3xl border border-slate-700 shadow-2xl max-w-2xl w-full">
                <div className="w-20 h-20 bg-[var(--brand-secondary)]/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <Clock className="text-[var(--brand-secondary)]" size={40} />
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Coming Soon
                </h1>

                <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
                    We are currently building this feature to provide you with an exceptional experience.
                    Stay tuned for updates!
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
