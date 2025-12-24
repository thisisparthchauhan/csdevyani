"use client";
import { Search, Sparkles, ArrowRight, Rss } from 'lucide-react';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

interface UpdateItem {
    id: string;
    title: string;
    date: string;
    type: string;
}

export default function HeroSection() {
    const [updates, setUpdates] = useState<UpdateItem[]>([]);
    const [loading, setLoading] = useState(true);

    // Fallback data for initial display
    const fallbackUpdates: UpdateItem[] = [
        { id: '1', date: '2024-12-19', title: 'CSDEVYANI launches new AI Compliance Tool beta.', type: 'News' },
        { id: '2', date: '2024-12-18', title: 'Updated Secretarial Standards (SS-1 & SS-2) released.', type: 'Regulation' },
        { id: '3', date: '2024-12-15', title: 'SEBI (LODR) Amendment Regulations 2024.', type: 'Circular' },
    ];

    useEffect(() => {
        const fetchUpdates = async () => {
            const fetchPromise = (async () => {
                try {
                    const q = query(
                        collection(db, "updates"),
                        orderBy("date", "desc"),
                        limit(5)
                    );
                    const querySnapshot = await getDocs(q);
                    return querySnapshot.docs.map(doc => {
                        const data = doc.data();
                        return {
                            id: doc.id,
                            title: data.title,
                            date: data.date,
                            type: data.type || 'News'
                        } as UpdateItem;
                    });
                } catch (e) {
                    console.log("Firebase fetch error (might need env vars):", e);
                    return [];
                }
            })();

            // Timeout promise to force fallback after 1.5 seconds if DB is slow
            const timeoutPromise = new Promise<UpdateItem[]>((resolve) =>
                setTimeout(() => resolve([]), 1500)
            );

            try {
                // Race the fetch against the 1.5s timeout
                const fetchedUpdates = await Promise.race([fetchPromise, timeoutPromise]);

                if (fetchedUpdates && fetchedUpdates.length > 0) {
                    setUpdates(fetchedUpdates);
                } else {
                    // Fail silently to fallback
                    setUpdates(fallbackUpdates);
                }
            } catch (error) {
                // Should not happen with current logic, but just in case
                setUpdates(fallbackUpdates);
            } finally {
                setLoading(false);
            }
        };

        fetchUpdates();
    }, []);

    return (
        <section className="relative bg-slate-900 text-white min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#1e293b] z-0"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-secondary)]/10 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]"></div>

            {/* Pattern Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
                    <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-700">
                        <Sparkles size={14} className="text-[var(--brand-secondary)]" />
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Next-Gen Governance</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                        <span className="block text-white drop-shadow-lg">Devyani & Co.</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-secondary)] to-amber-300">
                            Corporate Intelligence.
                        </span>
                        <span className="block text-3xl md:text-4xl mt-2 text-slate-200">
                            Regulatory Confidence.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Where Corporate Governance Meets Regulatory Insight. Clarity in Law. Confidence in Compliance.
                    </p>

                    {/* AI Prompt Search Bar */}
                    <div className="relative max-w-lg mt-8 mx-auto lg:mx-0 group animate-ai-pulse rounded-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--brand-secondary)] to-amber-600 rounded-full opacity-25 group-hover:opacity-50 blur transition duration-200"></div>
                        <div className="relative flex items-center bg-slate-800/80 backdrop-blur-xl rounded-full border border-slate-700 shadow-2xl overflow-hidden">
                            <Sparkles className="ml-5 text-[var(--brand-secondary)]" size={20} />
                            <input
                                type="text"
                                placeholder="Ask AI: 'What is the penalty for late AGM?'"
                                className="w-full px-4 py-4 bg-transparent text-white placeholder-slate-400 focus:outline-none"
                            />
                            <button className="mr-2 bg-[var(--brand-secondary)] text-white px-6 py-2.5 rounded-full font-bold hover:bg-amber-600 transition-all flex items-center shadow-lg transform hover:scale-105 active:scale-95">
                                Ask <ArrowRight size={16} className="ml-1" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Card - Glassmorphism Live Updates */}
                <div className="hidden lg:block relative animate-fade-in-right delay-200">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-[var(--brand-secondary)] rounded-2xl opacity-20 blur-lg"></div>
                    <div className="relative bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl p-6">

                        <div className="flex justify-between items-center mb-6 border-b border-slate-700/50 pb-4">
                            <div className="flex items-center space-x-3">
                                <div className="bg-slate-800 p-2 rounded-lg">
                                    <Rss size={20} className="text-[var(--brand-secondary)]" />
                                </div>
                                <h3 className="text-xl font-bold text-white">Live Updates</h3>
                            </div>
                            <span className="flex items-center text-[10px] font-bold bg-green-500/10 text-green-400 px-2 py-1 rounded border border-green-500/20">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                                REAL-TIME
                            </span>
                        </div>

                        <ul className="space-y-3 max-h-[350px] overflow-y-auto custom-scrollbar pr-2">
                            {loading ? (
                                // Skeleton Loading
                                [1, 2, 3].map(i => (
                                    <li key={i} className="animate-pulse space-y-2 p-3">
                                        <div className="h-2 bg-slate-700 rounded w-1/4"></div>
                                        <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                                    </li>
                                ))
                            ) : (
                                updates.map((item) => (
                                    <li key={item.id} className="group p-3 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-slate-700/50 cursor-pointer">
                                        <div className="flex justify-between items-start mb-1">
                                            <span className="text-[10px] text-[var(--brand-secondary)] font-semibold uppercase tracking-wider bg-[var(--brand-secondary)]/10 px-1.5 py-0.5 rounded">
                                                {item.type}
                                            </span>
                                            <span className="text-xs text-slate-500">{item.date}</span>
                                        </div>
                                        <p className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
                                            {item.title}
                                        </p>
                                    </li>
                                ))
                            )}
                        </ul>

                        <div className="mt-6 pt-4 border-t border-slate-700/50 text-center">
                            <button className="text-sm font-semibold text-slate-400 hover:text-white transition-colors flex items-center justify-center mx-auto group">
                                View All Notices
                                <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
