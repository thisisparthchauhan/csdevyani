"use client";
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function LatestNews() {
    const [activeTab, setActiveTab] = useState('circulars');

    const tabs = [
        { id: 'circulars', label: 'Circulars' },
        { id: 'press', label: 'Press Releases' },
        { id: 'notices', label: 'Notices' },
    ];

    const newsItems = [
        { id: 1, date: '19 Dec 2024', title: 'Circular regarding Framework for FinTech Entity in the IFSCs.' },
        { id: 2, date: '18 Dec 2024', title: 'Press Release on listing of Green Bonds by India Exim Bank.' },
        { id: 3, date: '15 Dec 2024', title: 'Notification regarding amendments to Banking Regulations.' },
        { id: 4, date: '12 Dec 2024', title: 'Consultation paper on sustainable finance disclosures.' },
        { id: 5, date: '10 Dec 2024', title: 'IFSCA invites applications for Internship Scheme 2024-25.' },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">Latest Updates</h2>
                    <div className="w-24 h-1 bg-[#c5a059] mx-auto mt-4"></div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8 space-x-2 md:space-x-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2 rounded-full text-sm md:text-base font-bold transition-all ${activeTab === tab.id
                                    ? 'bg-[#003366] text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-xl shadow-lg p-6 md:p-8">
                    <ul className="space-y-6">
                        {newsItems.map((item) => (
                            <li key={item.id} className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-50 pb-4 last:border-0 hover:bg-gray-50 p-2 rounded transition-colors group">
                                <div>
                                    <span className="text-xs font-bold text-[#c5a059] bg-[#c5a059]/10 px-2 py-1 rounded mb-2 inline-block">
                                        {item.date}
                                    </span>
                                    <h4 className="text-[#003366] font-medium group-hover:text-[#c5a059] transition-colors cursor-pointer">
                                        {item.title}
                                    </h4>
                                </div>
                                <button className="mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#003366]">
                                    <ChevronRight />
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-8 text-center">
                        <button className="text-[#003366] font-bold hover:underline">View Archive</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
