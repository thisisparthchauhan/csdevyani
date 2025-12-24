"use client";
import { ArrowRight, Wallet, Landmark, Building2, Plane, Cpu, BarChart3, Globe } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BusinessActivities() {
    const activities = [
        {
            title: 'Banking & International Banking Units (IBUs)',
            icon: Landmark,
            desc: 'We advise digital-first International Banking Units (IBUs) and regulated banking entities operating within IFSC and cross-border frameworks.',
            aiReady: true,
            href: '/coming-soon'
        },
        {
            title: 'Fund Management & Alternative Investment Structures',
            icon: Wallet,
            desc: 'Our fund management advisory supports asset managers and investment platforms across fund structuring, governance, and ongoing compliance.',
            aiReady: true,
            href: '/alternative-investment-fund-registration-india'
        },
        {
            title: 'Aircraft Leasing & Aviation Finance',
            icon: Plane,
            desc: 'We offer end-to-end advisory for aircraft leasing entities, particularly those operating through IFSC structures.',
            aiReady: false,
            href: '/coming-soon'
        },
        {
            title: 'Capital Markets & Market Intermediaries',
            icon: BarChart3,
            desc: 'We advise capital market participants on building structured, technology-enabled compliance systems.',
            aiReady: true,
            href: '/investment-adviser-registration-india'
        },
        {
            title: 'FinTech & Regulatory Innovation',
            icon: Cpu,
            desc: 'We support fintech ventures and financial technology platforms in navigating evolving regulatory environments.',
            aiReady: true,
            href: '/coming-soon'
        },
        {
            title: 'Portfolio Management Services (PMS)',
            icon: BarChart3,
            desc: 'We provide dedicated advisory for Portfolio Management Services.',
            aiReady: true,
            href: '/investment-adviser-registration-india'
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 max-w-2xl mx-auto"
                >
                    <span className="text-[var(--brand-secondary)] font-bold uppercase tracking-wider text-xs bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                        Our Focus Areas
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 mb-4">
                        Areas of Expertise
                    </h2>
                    <p className="text-slate-500 text-lg">
                        We specialize in high-growth sectors, integrating traditional governance with modern AI capabilities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[var(--brand-secondary)]/30 overflow-hidden"
                            data-animate="fade-up"
                        >

                            {/* AI Badge */}
                            {item.aiReady && (
                                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center shadow-lg transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    <Cpu size={10} className="mr-1" /> AI INTEGRATED
                                </div>
                            )}

                            {/* Icon Box */}
                            <div className="w-14 h-14 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-[var(--brand-secondary)] group-hover:text-white transition-colors duration-300 mb-6 shadow-sm group-hover:scale-110 transform origin-left">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--brand-secondary)] transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-slate-500 mb-6 line-clamp-3 leading-relaxed group-hover:text-slate-600">
                                {item.desc}
                            </p>

                            <Link
                                href={item.href || '/coming-soon'}
                                className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-[var(--brand-secondary)] transition-colors"
                            >
                                Learn More
                                <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Background decoration on hover */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--brand-secondary)]/5 rounded-tl-full -z-10 transform translate-y-32 translate-x-32 group-hover:translate-y-10 group-hover:translate-x-10 transition-transform duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
