"use client";
import { CheckCircle, Shield, Users, Trophy, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function AboutSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    // Simulated Backend Stats
    const stats = [
        { label: 'Clients Served', value: '500+', icon: Users },
        { label: 'Success Rate', value: '99%', icon: CheckCircle },
        { label: 'Years Experience', value: '15+', icon: Trophy },
    ];

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    data-animate="reveal"
                >

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-block">
                            <span className="text-[var(--brand-secondary)] font-bold uppercase tracking-wider text-sm bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                                Who We Are
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                            Devyani & Co. – <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-secondary)] to-amber-500">
                                Corporate Intelligence. Regulatory Confidence.
                            </span>
                        </h2>

                        <div className="text-lg text-slate-600 leading-relaxed space-y-4">
                            {/* Always Visible Content */}
                            <p>
                                Devyani & Co. is a specialised corporate and regulatory advisory firm founded in January 2018, led by CS Devyani Khambhati, a practising Company Secretary with over a decade of hands-on experience in India's most regulated business environments.
                            </p>
                            <p>
                                Based out of GIFT City, Gandhinagar, we advise corporates, regulated entities, promoters, and boards on navigating complex legal and compliance frameworks with clarity, discipline, and confidence.
                            </p>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4 overflow-hidden"
                                    >
                                        <p>
                                            At Devyani & Co., we specialise in advising businesses operating in high-growth, high-regulation sectors, where governance standards, regulatory discipline, and structured compliance are critical. Our expertise lies in integrating traditional corporate governance with modern, technology-enabled compliance frameworks, enabling organisations to remain agile while meeting regulatory expectations with confidence.
                                        </p>
                                        <p className="font-semibold text-slate-800 border-l-4 border-[var(--brand-secondary)] pl-4 italic">
                                            Our practice is built on one clear belief: Strong governance and informed compliance are the foundations of sustainable business.
                                        </p>

                                        <div className="pt-6 border-t border-slate-200">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-3">What We Stand For</h3>
                                            <p className="text-slate-600 mb-4">
                                                At Devyani & Co., we do not treat compliance as a routine or mechanical exercise. We approach it as a governance responsibility — one that directly impacts reputation, regulatory trust, and long-term continuity.
                                            </p>
                                            <div className="mb-4 font-semibold text-slate-700">Our work is defined by:</div>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {[
                                                    "Clear interpretation of law, not guesswork",
                                                    "Practical advisory aligned with regulatory intent",
                                                    "Strong documentation and defensible positions",
                                                    "Personal involvement and professional accountability"
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <CheckCircle size={18} className="text-[var(--brand-secondary)] flex-shrink-0" />
                                                        <span className="text-slate-700 font-medium text-sm">{item}</span>
                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Read More/Less Button */}
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--brand-secondary)] to-amber-500 text-white font-bold rounded-xl hover:from-amber-500 hover:to-[var(--brand-secondary)] transition-all shadow-lg hover:shadow-xl group"
                            >
                                {isExpanded ? (
                                    <>
                                        Read Less
                                        <ChevronUp size={20} className="ml-2 group-hover:-translate-y-0.5 transition-transform" />
                                    </>
                                ) : (
                                    <>
                                        Know More About Us
                                        <ChevronDown size={20} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Right Image & Stats */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500">
                            {/* In production, use standard Image component. For now, referencing public folder file */}
                            <img
                                src="/about-us-hero.png"
                                alt="Modern Corporate Office"
                                className="w-full h-[500px] object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-sm hidden md:block animate-fade-in-up">
                            <div className="grid grid-cols-3 gap-6 divide-x divide-gray-100">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="px-2 text-center">
                                        <div className="flex justify-center mb-2">
                                            <div className="bg-slate-50 p-2 rounded-full text-[var(--brand-secondary)]">
                                                <stat.icon size={20} />
                                            </div>
                                        </div>
                                        <div className="font-extrabold text-xl text-slate-900">{stat.value}</div>
                                        <div className="text-[10px] text-slate-500 uppercase font-semibold mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Pattern */}
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
    )
}
