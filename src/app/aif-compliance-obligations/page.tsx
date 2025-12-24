import { Metadata } from 'next';
import {
    ShieldCheck,
    FileText,
    Briefcase,
    AlertTriangle,
    Calendar,
    CheckCircle2,
    ArrowRight,
    Users,
    BarChart3,
    ChevronDown,
    Building2,
    Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AIF Post-Registration Compliance & Ongoing Obligations – SEBI Regulations',
    description: 'Post-Registration Compliance & Ongoing Obligations for Alternative Investment Funds (AIFs) in India. Covers audits, reporting, PPM adherence, and category-wise compliance calendars.',
    alternates: {
        canonical: '/aif-compliance-obligations',
    },
};

export default function AIFCompliance() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[var(--brand-secondary)]/10 z-0"></div>
                {/* Decorative Elements */}
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-indigo-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-700/50 mb-6 animate-fade-in-up">
                            <ShieldCheck size={16} className="text-indigo-400" />
                            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">SEBI AIF Regulations</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Post-Registration <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
                                Compliance for AIFs
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                            The real regulatory discipline begins after registration. Ensure operational readiness, PPM adherence, and timely reporting to clear SEBI scrutiny.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25">
                                AIF Compliance Support
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="#calendar" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                View Calendar
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO & OPERATIONAL READINESS */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">Operational Readiness</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Once Alternative Investment Fund Registration is granted, SEBI expects AIFs to function within a structured governance framework.
                                Before commencing fund-raising, the AIF must ensure:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Finalisation of constitutive documents & PPM",
                                    "Appointment of key functionaries",
                                    "Operational bank & escrow accounts",
                                    "Robust record-keeping & reporting systems",
                                    "Regulatory readiness before first investor onboarding"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-slate-700 font-medium">
                                        <CheckCircle2 size={18} className="mr-3 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                <AlertTriangle size={20} className="mr-2 text-amber-500" />
                                Why Ongoing Compliance Matters
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                AIFs operate in a trust-based regulatory environment. Non-compliance can attract regulatory scrutiny, monetary penalties, or restrictions on fund operations.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                                    <ShieldCheck className="mx-auto text-indigo-500 mb-2" size={24} />
                                    <span className="text-xs font-bold text-slate-500 uppercase">Regulator Confidence</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                                    <Users className="mx-auto text-indigo-500 mb-2" size={24} />
                                    <span className="text-xs font-bold text-slate-500 uppercase">Investor Protection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE OBLIGATIONS GRID */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-indigo-600 font-bold uppercase tracking-wider text-xs">Lifecycle Management</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Core Post-Registration Obligations</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                <Briefcase size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Fund Raising & Placement</h3>
                            <p className="text-sm text-slate-500">Private placement only. Issue final PPM, ensure min investment thresholds, and strictly no public solicitation.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                <Users size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Investor Onboarding</h3>
                            <p className="text-sm text-slate-500">Strict KYC/AML checks, verification of eligibility, and accurate documentation of commitments.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                                <FileText size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Reporting & Disclosures</h3>
                            <p className="text-sm text-slate-500">Quarterly reports to SEBI, annual compliance confirmations, and transparent investment disclosures.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                                <BarChart3 size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Valuation</h3>
                            <p className="text-sm text-slate-500">Follow PPM policies, appoint independent valuers where needed, and ensure methodological consistency.</p>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600 mb-4">
                                <Scale size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Investment Monitoring</h3>
                            <p className="text-sm text-slate-500">Monitor sectoral limits, concentration norms, and leverage restrictions. Document all deviations.</p>
                        </div>
                        {/* Card 6 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 mb-4">
                                <Building2 size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Sponsor Commitment</h3>
                            <p className="text-sm text-slate-500">Maintain minimum continuing interest. Reduction below limits affects regulatory standing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY WISE COMPLIANCE CALENDAR */}
            <section id="calendar" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center">
                            <Calendar className="mr-3 text-indigo-600" />
                            AIF Compliance Calendar
                        </h2>
                        <p className="text-slate-600 mt-2">Category-wise breakdown of ongoing regulatory obligations.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Category I */}
                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all">
                            <div className="bg-blue-100 text-blue-700 font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-4">Category I</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Venture Capital / SME / Angel</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Private placement only</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Min corpus maintenance</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Quarterly SEBI Reporting</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Annual Compliance & Financial Audit</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Sponsor Interest (2.5% or ₹5 Cr)</li>
                            </ul>
                        </div>

                        {/* Category II */}
                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all">
                            <div className="bg-purple-100 text-purple-700 font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-4">Category II</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Private Equity / Debt Funds</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>No public fund raising</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>No leverage (except operational)</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Quarterly SEBI Reporting</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Annual Compliance Test</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Valuation as per PPM</li>
                            </ul>
                        </div>

                        {/* Category III */}
                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all">
                            <div className="bg-orange-100 text-orange-700 font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-4">Category III</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Hedge Funds / Long-Short</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Enhanced PPM Disclosures</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Strict Leverage Monitoring</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Frequent Valuation & SEBI Reporting</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Higher Sponsor Interest (5% or ₹10 Cr)</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Strong Risk Mgmt Framework</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        <p className="text-slate-600 mt-2">Common queries about AIF reporting and PPM adherence.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "When do AIF compliance obligations begin?", a: "Compliance obligations apply from the date of registration, not from the date of the first investment." },
                            { q: "Can AIFs raise funds from the public?", a: "No, AIFs can strictly only raise funds through private placement via a Private Placement Memorandum (PPM). Public solicitation is prohibited." },
                            { q: "What is the frequency of SEBI reporting?", a: "Most AIFs are required to submit quarterly reports to SEBI. Category III AIFs may have more frequent reporting depending on leverage." },
                            { q: "Is a compliance audit mandatory?", a: "Yes, an annual compliance audit and an annual financial audit are mandatory for all registered AIFs." },
                            { q: "What happens if the Sponsor reduces their stake?", a: "The Sponsor/Manager must maintain the minimum continuing interest (2.5% or 5% depending on category) at all times. Reduction is a regulatory violation." },
                            { q: "Can we change the Investment Strategy later?", a: "Material changes to the investment strategy or PPM require prior investor approval and sometimes regulatory intimation/approval." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors">
                                    {faq.q}
                                    <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform" />
                                </summary>
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-indigo-900 border border-indigo-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl">
                        <div className="max-w-2xl">
                            <h4 className="text-xl font-bold mb-2">Expert AIF Compliance Support</h4>
                            <p className="text-indigo-200">
                                We help AIFs design compliance calendars, track reporting deadlines, and coordinate audits — ensuring disciplined, predictable, and regulator-aligned fund operations.
                            </p>
                        </div>
                        <Link href="/contact" className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center shadow-lg whitespace-nowrap">
                            Contact Our Team
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
