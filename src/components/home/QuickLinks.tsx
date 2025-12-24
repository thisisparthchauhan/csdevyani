"use client";
import { FileText, Gavel, Bell, BookOpen, Info, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function QuickLinks() {
    // Simulated Backend Data
    // In a real app, fetch this from Firestore 'resource_categories'
    const [stats, setStats] = useState({
        acts: 12,
        regulations: 45,
        notifications: 120,
        circulars: 89,
        guidelines: 34,
        faqs: 50
    });

    const links = [
        { name: 'Act', icon: Gavel, color: 'from-blue-500 to-blue-600', count: stats.acts },
        { name: 'Regulations', icon: BookOpen, color: 'from-green-500 to-emerald-600', count: stats.regulations },
        { name: 'Notifications', icon: Bell, color: 'from-amber-400 to-orange-500', count: stats.notifications },
        { name: 'Circulars', icon: FileText, color: 'from-purple-500 to-indigo-600', count: stats.circulars },
        { name: 'Guidelines', icon: Info, color: 'from-red-500 to-rose-600', count: stats.guidelines },
        { name: 'FAQs', icon: HelpCircle, color: 'from-teal-400 to-cyan-500', count: stats.faqs },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50/50 relative -mt-16 z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href="/coming-soon"
                            className="group flex flex-col items-center justify-between p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                            <div className={`p-4 rounded-xl bg-gradient-to-br ${link.color} text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                                <link.icon size={28} />
                            </div>

                            <div className="text-center">
                                <span className="block font-bold text-slate-800 text-lg mb-1 group-hover:text-[var(--brand-primary)] transition-colors">
                                    {link.name}
                                </span>
                                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-full group-hover:bg-[var(--brand-secondary)] group-hover:text-white transition-colors">
                                    {link.count}+ Documents
                                </span>
                            </div>

                            {/* Arrow Indicator */}
                            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0">
                                <ArrowRight size={14} className="text-slate-300" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
