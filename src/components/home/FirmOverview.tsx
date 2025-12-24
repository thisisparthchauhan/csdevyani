"use client";
import { Scale, Users, FileText, CheckCircle, Target, Briefcase, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FirmOverview() {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 space-y-20">

                {/* Our Regulatory Focus */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-[var(--brand-secondary)] font-bold uppercase tracking-wider text-xs bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                            Our Focus
                        </span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
                            Our Regulatory Focus
                        </h2>
                        <p className="text-slate-600 mt-4 text-lg">
                            We have consciously chosen to work in limited but high-impact regulatory domains, allowing us to deliver depth rather than dilution.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Ministry of Corporate Affairs", desc: "Corporate law and governance" },
                            { title: "SEBI", desc: "Capital market and intermediary compliance" },
                            { title: "IFSCA", desc: "IFSC and GIFT City regulatory frameworks" },
                            { title: "Government Licensing", desc: "Regulatory registrations linked to corporate operations" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-start space-x-4">
                                <Scale className="text-[var(--brand-secondary)] flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-slate-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Strength & Experience Advantage */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Core Strength */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[var(--brand-secondary)]">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <Zap className="mr-3 text-[var(--brand-secondary)]" />
                            Our Core Strength
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Deep understanding of regulatory intent",
                                "Strong governance and documentation focus",
                                "Technology-enabled compliance thinking",
                                "Practical, execution-ready advisory",
                                "Founder-led involvement and accountability"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-700">
                                    <CheckCircle size={18} className="text-green-500 mr-3 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experience Advantage */}
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-6 flex items-center text-[var(--brand-secondary)]">
                            <Briefcase className="mr-3" />
                            Our Experience Advantage
                        </h3>
                        <p className="text-slate-300 mb-6 italic">
                            CS Devyani Khambhati brings extensive on-ground regulatory exposure, including experience with:
                        </p>
                        <ul className="space-y-4">
                            {[
                                "SEBI-regulated intermediaries and inspections",
                                "Stock exchanges and depositories",
                                "IFSC institutions and GIFT City regulatory processes",
                                "Board-level compliance and governance advisory"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center text-slate-200">
                                    <div className="w-1.5 h-1.5 bg-[var(--brand-secondary)] rounded-full mr-3"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-slate-700 text-sm text-slate-400">
                            "This practical experience allows us to advise not just on what the law says, but also on how regulators expect compliance to be implemented."
                        </div>
                    </div>
                </div>

                {/* How We Work */}
                <div className="relative bg-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10"></div>

                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-slate-900">How We Work</h2>
                        <p className="text-slate-600 mt-2">Our engagement style is structured and transparent.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>

                        {[
                            { title: "Understand", desc: "Business model & regulatory exposure" },
                            { title: "Map", desc: "Applicable laws & obligations" },
                            { title: "Identify", desc: "Gaps, risks & improvement areas" },
                            { title: "Advise", desc: "Clear written advisory & support" },
                            { title: "Assist", desc: "Regulatory interaction support" }
                        ].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center group">
                                <div className="w-16 h-16 bg-white border-2 border-[var(--brand-secondary)] text-[var(--brand-secondary)] rounded-full flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-[var(--brand-secondary)] group-hover:text-white transition-colors shadow-sm z-10">
                                    {idx + 1}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                                <p className="text-xs text-slate-500 px-2">{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12 pt-8 border-t border-slate-100">
                        <p className="text-slate-500 italic max-w-2xl mx-auto">
                            "Clients rely on us for clarity under pressure, especially during inspections, filings, restructuring, and regulatory correspondence."
                        </p>
                    </div>
                </div>

                {/* Who We Work With & Commitment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                            <Users className="mr-3 text-blue-600" />
                            Who We Work With
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Promoter-driven companies",
                                "Listed and unlisted corporates",
                                "SEBI and other-regulated entities",
                                "IFSC entities in GIFT City",
                                "Boards, compliance officers, and senior management"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-slate-700 text-sm">
                                    <span className="mr-2 mt-1.5 w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="p-8 bg-gradient-to-br from-[var(--brand-secondary)] to-amber-600 rounded-2xl text-white">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <Lock className="mr-3" />
                            Our Commitment
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "To uphold the highest standards of professional ethics",
                                "To provide advice that is clear, reasoned, and reliable",
                                "To help businesses remain compliant without losing agility",
                                "To build governance frameworks that stand the test of time"
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start text-white/90 text-sm">
                                    <CheckCircle size={14} className="mr-2 mt-0.5 flex-shrink-0 text-white" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-8 font-bold text-lg text-white border-t border-white/20 pt-4">
                            "We do not just manage compliance. We strengthen governance."
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
