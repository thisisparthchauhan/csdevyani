"use client";
import { DollarSign, CheckCircle2, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function PayWhileYouEarn() {
    const benefits = [
        "Begin licence application without delay",
        "Reduced initial financial burden",
        "Transparent terms and timelines",
        "No compromise on advisory quality",
        "Professionally documented arrangement"
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[var(--brand-secondary)] font-bold uppercase tracking-wider text-xs bg-amber-50 px-4 py-2 rounded-full border border-amber-100 mb-4 inline-block">
                        Flexible Engagement Model
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                        PAY WHILE YOU EARN <br />
                        <span className="text-2xl md:text-3xl font-bold text-slate-500 block mt-2">
                            Start Your Licensed Business Without Financial Pressure
                        </span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Many professionals and entrepreneurs delay regulatory licensing due to upfront professional fees.
                        At Devyani & Co., we believe financial timing should never hold back a compliant business launch.
                        To address this, we offer a structured <span className="font-bold text-slate-900">Pay While You Earn</span> model.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: How It Works Card */}
                    <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--brand-secondary)]/10 rounded-bl-full -z-0"></div>

                        <h3 className="text-2xl font-bold mb-8 flex items-center">
                            <Briefcase className="mr-3 text-[var(--brand-secondary)]" />
                            How It Works
                        </h3>

                        <div className="space-y-6 relative z-10">
                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                <span className="block text-xs uppercase text-slate-400 font-bold mb-1">Upfront Payment</span>
                                <span className="text-xl font-bold text-white">40% of professional fees</span>
                            </div>

                            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                <span className="block text-xs uppercase text-slate-400 font-bold mb-1">Balance Payment</span>
                                <span className="text-xl font-bold text-white">60% payable over 6 months</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                    <span className="block text-xs uppercase text-slate-400 font-bold mb-1">Payment Mode</span>
                                    <span className="font-bold text-white">Monthly instalments</span>
                                </div>
                                <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                    <span className="block text-xs uppercase text-slate-400 font-bold mb-1">Documentation</span>
                                    <span className="font-bold text-white">Mandate / agreement executed</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-slate-700/50">
                            <p className="text-sm text-slate-400 italic">
                                "This allows you to begin your regulatory journey immediately while managing payments alongside business growth."
                            </p>
                        </div>
                    </div>

                    {/* Right: Benefits & CTA */}
                    <div className="space-y-10">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                <CheckCircle2 className="mr-3 text-[var(--brand-secondary)]" />
                                Why Choose This Model
                            </h3>
                            <ul className="space-y-4">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                            <h4 className="font-bold text-amber-900 mb-2 flex items-center">
                                <ShieldCheck size={18} className="mr-2" />
                                Eligibility & Transparency
                            </h4>
                            <p className="text-sm text-amber-800 leading-relaxed">
                                The Pay While You Earn option is offered selectively, subject to eligibility assessment and mutual agreement on scope and timelines. All terms are clearly documented to ensure professional clarity and accountability.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-bold text-slate-900">START WITH CONFIDENCE</h4>
                            <p className="text-slate-600">
                                If you are ready to apply for a licence but prefer a flexible payment structure, our Pay While You Earn model helps you move forward without hesitation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-[var(--brand-secondary)] transition-all shadow-lg hover:shadow-xl group"
                                >
                                    Speak to Our Team
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-700 font-bold rounded-xl border-2 border-slate-200 hover:border-[var(--brand-secondary)] hover:text-[var(--brand-secondary)] transition-all"
                                >
                                    Check Eligibility
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
