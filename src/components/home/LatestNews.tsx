"use client";
import Link from 'next/link';
import { useState } from 'react';
import { ChevronRight, FileText, Newspaper, Megaphone, Sparkles, ArrowRight } from 'lucide-react';

export default function LatestArticles() {
    // Renamed from Latest Updates to Latest Articles
    const [activeTab, setActiveTab] = useState('circulars');

    const tabs = [
        { id: 'circulars', label: 'Circulars', icon: FileText },
        { id: 'press', label: 'Press Releases', icon: Newspaper },
        { id: 'notices', label: 'Notices', icon: Megaphone },
    ];

    // Mock Backend Response Structure
    const articles = {
        circulars: [
            { id: 1, date: '19 Dec 2024', title: 'Circular regarding Framework for FinTech Entity in the IFSCs.', aiSummary: 'Key guidelines on FinTech expansion.' },
            { id: 2, date: '15 Dec 2024', title: 'Notification regarding amendments to Banking Regulations.', aiSummary: 'Updates to SLR/CRR norms.' },
        ],
        press: [
            { id: 3, date: '18 Dec 2024', title: 'Press Release on listing of Green Bonds by India Exim Bank.', aiSummary: 'Sustainable finance milestone.' },
            { id: 4, date: '10 Dec 2024', title: 'CSDEVYANI launches new AI Compliance Tool beta.', aiSummary: 'Revolutionizing secretarial audits.' },
        ],
        notices: [
            { id: 5, date: '12 Dec 2024', title: 'Consultation paper on sustainable finance disclosures.', aiSummary: 'Seeking public comments.' },
            { id: 6, date: '05 Dec 2024', title: 'Notice regarding upcoming e-filing downtime.', aiSummary: 'Maintenance schedule alert.' },
        ]
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="text-left">
                        <span className="text-[var(--brand-secondary)] font-bold uppercase tracking-wider text-xs bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                            Knowledge Hub
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4">
                            Latest Articles
                        </h2>
                    </div>

                    {/* Floating Tabs */}
                    <div className="flex space-x-4 bg-slate-100 p-1.5 rounded-full mt-6 md:mt-0 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-white text-slate-900 shadow-md transform scale-105'
                                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200'
                                    }`}
                            >
                                <tab.icon size={16} className={`mr-2 ${activeTab === tab.id ? 'text-[var(--brand-secondary)]' : ''}`} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 gap-6">
                    {articles[activeTab as keyof typeof articles].map((item) => (
                        <Link
                            key={item.id}
                            href="/articles"
                            className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-[var(--brand-secondary)]/30 transition-all duration-300 cursor-pointer flex flex-col md:flex-row justify-between items-center"
                        >
                            <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                    <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
                                        {item.date}
                                    </span>
                                    {/* AI Summary Badge */}
                                    <span className="flex items-center text-[10px] font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded border border-indigo-100">
                                        <Sparkles size={10} className="mr-1" /> AI Summary: {item.aiSummary}
                                    </span>
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-[var(--brand-secondary)] transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            <div className="mt-4 md:mt-0 md:ml-6 flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 group-hover:bg-[var(--brand-secondary)] text-slate-400 group-hover:text-white transition-all transform group-hover:rotate-45">
                                <ArrowRight size={20} />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/articles" className="text-slate-500 font-bold hover:text-[var(--brand-secondary)] transition-colors flex items-center justify-center mx-auto group w-fit">
                        View Archive
                        <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
