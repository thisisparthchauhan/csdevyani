import { Metadata } from 'next';
import {
    Shield, CheckCircle2, AlertTriangle, FileText, Database, Lock,
    Search, Calendar, Clock, BarChart3, Users, ChevronDown, ArrowRight,
    Briefcase, Award, TrendingUp, UserCheck, Globe, Building2, Scale,
    Wallet, TrendingDown, Eye
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'PMS Compliance Obligations – Portfolio Manager Reporting & Regulations',
    description: 'Detailed compliance guide for SEBI Registered Portfolio Managers (PMS). Net worth maintenance, client reporting, audit requirements, and daily compliance calendar.',
    alternates: {
        canonical: '/pms-compliance-obligations',
    },
    keywords: 'PMS Compliance India, SEBI Portfolio Manager Regulations, PMS Reporting Requirements, Portfolio Manager Net Worth, SEBI PMS Audit',
};

export default function PMSCompliance() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-emerald-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-700/50 mb-6 animate-fade-in-up">
                            <Shield size={16} className="text-emerald-400" />
                            <span className="text-xs font-bold text-emerald-100 uppercase tracking-widest">Post-Registration Compliance</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            PMS Compliance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                                Obligations
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            Once Portfolio Manager Registration is granted, the entity becomes a continuously regulated fiduciary. SEBI’s supervision is ongoing, risk-based, and inspection-driven.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/25">
                                Get Compliance Support
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO */}
            <section className="bg-white border-b border-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-slate-700 text-lg font-medium leading-relaxed">
                            Most regulatory actions in the PMS segment arise not at the entry stage, but due to <span className="text-emerald-700 font-bold">post-registration lapses</span>—especially in disclosures, reporting, client segregation, and governance.
                        </p>
                    </div>
                </div>
            </section>

            {/* CORE OBLIGATIONS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Core Regulatory Obligations</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: Scale, title: "Fiduciary Duty", desc: "Act in a fiduciary capacity; ensure fair, transparent, and non-discriminatory treatment." },
                                { icon: TrendingUp, title: "Net Worth (₹5 Cr)", desc: "Maintain ₹5 Crore net worth continuously. Restore shortfall immediately." },
                                { icon: Users, title: "Client Onboarding", desc: "Verify eligibility, execute written agreements, and document risk profiling." },
                                { icon: Wallet, title: "Asset Segregation", desc: "Separate bank/demat accounts for each client. No pooling of funds." },
                                { icon: Lock, title: "Investment Discipline", desc: "Adhere to permitted universe. No speculative trades or deviations without consent." },
                                { icon: BarChart3, title: "Performance Reporting", desc: "Periodic reports with benchmark comparisons. No misleading disclosures." },
                                { icon: FileText, title: "Fees & Billing", desc: "Transparency in management/performance fees. No hidden charges." },
                                { icon: UserCheck, title: "Compliance Officer", desc: "Designated officer for monitoring compliance and timely filings." },
                                { icon: Database, title: "SEBI Reporting", desc: "Submit periodic reports, net worth statements, and compliance confirmations." },
                                { icon: Eye, title: "Audits & Reviews", desc: "Annual statutory audit and periodic internal compliance reviews." },
                                { icon: AlertTriangle, title: "Conflict Management", desc: "Identify and manage conflicts. Avoid preferential treatment." },
                                { icon: Building2, title: "Grievance Redressal", desc: "Time-bound resolution of complaints with proper documentation." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-emerald-300 hover:shadow-md transition-all group">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-emerald-600 mb-4 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPLIANCE CALENDAR */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">PMS Compliance Calendar</h2>
                            <p className="text-slate-600 mt-2">A structured approach to ongoing regulatory requirements.</p>
                        </div>

                        <div className="space-y-8">
                            {/* Daily */}
                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center">
                                    <Clock className="text-blue-600 mr-3" size={20} />
                                    <h3 className="font-bold text-blue-900">Daily / Ongoing Compliance</h3>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["Fiduciary Duty checks", "Client Asset Segregation", "Investment Discipline", "Conflict Monitoring", "Record Maintenance"].map((item, i) => (
                                        <div key={i} className="flex items-center text-sm text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Monthly */}
                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100 flex items-center">
                                    <Calendar className="text-emerald-600 mr-3" size={20} />
                                    <h3 className="font-bold text-emerald-900">Monthly Compliance</h3>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["Reconcile bank & demat accounts", "Review trades vs strategy", "Verify fee calculations", "Prepare monthly compliance MIS", "Review grievances status"].map((item, i) => (
                                        <div key={i} className="flex items-center text-sm text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quarterly & Half-Yearly */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                    <div className="bg-purple-50 px-6 py-4 border-b border-purple-100 flex items-center">
                                        <BarChart3 className="text-purple-600 mr-3" size={20} />
                                        <h3 className="font-bold text-purple-900">Quarterly</h3>
                                    </div>
                                    <div className="p-6 space-y-3">
                                        {["Quarterly net worth statement", "Portfolio performance reports", "Internal compliance review", "Verify disclosures adequacy", "Identify investment risks"].map((item, i) => (
                                            <div key={i} className="flex items-center text-sm text-slate-700">
                                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></div>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                    <div className="bg-amber-50 px-6 py-4 border-b border-amber-100 flex items-center">
                                        <Shield className="text-amber-600 mr-3" size={20} />
                                        <h3 className="font-bold text-amber-900">Half-Yearly & Annual</h3>
                                    </div>
                                    <div className="p-6 space-y-3">
                                        {["Review compliance framework", "Update internal policies & SOPs", "Audited financials & Net Worth", "Annual Board review", "Mock SEBI inspection"].map((item, i) => (
                                            <div key={i} className="flex items-center text-sm text-slate-700">
                                                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMMON GAPS & SUPPORT */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Compliance Gaps</h2>
                            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
                                <ul className="space-y-4">
                                    {[
                                        "Weak segregation of client assets",
                                        "Inadequate documentation of suitability",
                                        "Delayed or inaccurate reporting",
                                        "Over-dependence on individuals vs process",
                                        "Informal handling of disclosures"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <AlertTriangle size={18} className="text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm text-red-800 font-medium italic">
                                    "These are avoidable with structured compliance systems."
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">How Devyani & Co. Helps</h2>
                            <div className="bg-emerald-900 text-white rounded-2xl p-8 shadow-xl">
                                <p className="mb-6 opacity-90">
                                    We assist Portfolio Managers with regulator-aligned, process-driven, and inspection-ready support.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        "Post-registration compliance framework design",
                                        "Reporting and disclosure structuring",
                                        "Audit and inspection readiness",
                                        "Change approvals and regulatory filings",
                                        "Ongoing compliance advisory"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <CheckCircle2 size={18} className="text-emerald-400 mr-3 flex-shrink-0" />
                                            <span className="text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="block w-full text-center bg-white text-emerald-900 font-bold py-3 rounded-xl hover:bg-emerald-50 transition-colors">
                                    Schedule a Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">PMS Compliance – FAQs</h2>
                            <p className="text-slate-600 mt-2">Expert answers to common compliance questions.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "Is compliance mandatory after PMS registration?", a: "Yes. PMS registration is subject to continuous compliance under SEBI regulations throughout the validity of registration." },
                                { q: "Who is responsible for PMS compliance within the organisation?", a: "The Compliance Officer is primarily responsible, with oversight from senior management and the Board." },
                                { q: "Can PMS compliance be handled informally?", a: "No. SEBI expects structured, documented, and auditable compliance processes." },
                                { q: "Does SEBI monitor PMS operations regularly?", a: "Yes. PMS entities are subject to inspections, reviews, and reporting obligations." },
                                { q: "Is PMS compliance the same as advisory compliance?", a: "No. PMS compliance is stricter because portfolio managers exercise discretionary control over client assets." },
                                { q: "Is minimum net worth required after PMS registration?", a: "Yes. A minimum net worth of ₹5 crore must be maintained at all times." },
                                { q: "What happens if PMS net worth falls below the prescribed limit?", a: "The deficiency must be restored immediately, failing which regulatory action may follow." },
                                { q: "Is periodic net worth reporting mandatory?", a: "Yes. PMS entities must prepare and maintain periodic net worth statements." },
                                { q: "Can PMS operate while restoring net worth?", a: "Operations may continue only if restoration is immediate and compliance is demonstrated." },
                                { q: "Is capital adequacy reviewed during SEBI inspections?", a: "Yes. Net worth is a key inspection checkpoint." },
                                { q: "Is client eligibility verification mandatory?", a: "Yes. PMS must onboard only eligible clients meeting prescribed investment thresholds." },
                                { q: "Is a written PMS agreement compulsory?", a: "Yes. Every client relationship must be governed by a written portfolio management agreement." },
                                { q: "Is risk profiling mandatory for PMS clients?", a: "Yes. Suitability and risk assessment are essential compliance requirements." },
                                { q: "Can PMS onboard clients without completing documentation?", a: "No. Incomplete onboarding is a serious compliance violation." },
                                { q: "Are changes in client mandate allowed?", a: "Yes, but only with proper documentation and client consent." },
                                { q: "Must client funds be segregated from PMS proprietary funds?", a: "Yes. Strict segregation of client and proprietary assets is mandatory." },
                                { q: "Can PMS pool client funds?", a: "Only as permitted under SEBI regulations and disclosed structures." },
                                { q: "Is commingling of funds allowed?", a: "No. Commingling is treated as a major compliance failure." },
                                { q: "Are separate bank and demat accounts required?", a: "Yes. Proper account segregation must be maintained." },
                                { q: "Is asset segregation reviewed during inspections?", a: "Yes. This is a key focus area for SEBI." },
                                { q: "Can PMS deviate from disclosed investment strategy?", a: "No. Any deviation requires client consent and disclosure." },
                                { q: "Are investment restrictions binding?", a: "Yes. PMS must adhere to permitted investment limits and disclosures." },
                                { q: "Can PMS guarantee returns?", a: "No. Return assurance is strictly prohibited." },
                                { q: "Is leverage permitted in PMS?", a: "Only within permitted regulatory boundaries and disclosures." },
                                { q: "Can PMS trade in unapproved instruments?", a: "No. Investments must align with disclosed strategy and regulatory norms." },
                                { q: "Is periodic performance reporting mandatory?", a: "Yes. Clients must receive regular portfolio performance reports." },
                                { q: "Must PMS disclose benchmark performance?", a: "Yes. Benchmark comparison is a key disclosure requirement." },
                                { q: "Can PMS selectively disclose performance data?", a: "No. Selective or misleading disclosure is prohibited." },
                                { q: "Is methodology disclosure required?", a: "Yes. Performance calculation methodology must be transparent." },
                                { q: "Are past returns allowed in marketing material?", a: "Only in a factual, compliant, and non-misleading manner." },
                                { q: "Must PMS disclose fee structure clearly?", a: "Yes. All fees and expenses must be transparently disclosed." },
                                { q: "Can PMS charge fees beyond agreement terms?", a: "No. Fees must strictly follow the client agreement." },
                                { q: "Is performance fee subject to conditions?", a: "Yes. Performance fees must comply with disclosed terms and regulatory norms." },
                                { q: "Are hidden charges permitted?", a: "No. Hidden or ambiguous charges are prohibited." },
                                { q: "Can PMS revise fees mid-term?", a: "Only with client consent and proper disclosure." },
                                { q: "Is appointment of a Compliance Officer mandatory?", a: "Yes. A designated Compliance Officer is compulsory." },
                                { q: "Can the Compliance Officer be outsourced?", a: "Certain functions may be outsourced, but responsibility remains with the PMS." },
                                { q: "Is Board oversight expected for PMS compliance?", a: "Yes. Board and senior management oversight is required." },
                                { q: "Are internal audits required?", a: "Yes. Internal compliance reviews are expected periodically." },
                                { q: "Can compliance failures impact registration validity?", a: "Yes. Serious or repeated failures can lead to suspension or cancellation." },
                                { q: "Are periodic reports to SEBI mandatory?", a: "Yes. PMS entities must submit prescribed reports within timelines." },
                                { q: "Is delay in reporting treated seriously?", a: "Yes. Delays attract regulatory scrutiny." },
                                { q: "Must changes in key personnel be disclosed?", a: "Yes. Changes in Principal Officer or Compliance Officer require immediate intimation." },
                                { q: "Is prior approval required for change in control?", a: "Yes. Prior SEBI approval is mandatory." },
                                { q: "Can PMS continue operations during approval process?", a: "Only as permitted under regulatory guidance." },
                                { q: "Can SEBI conduct inspections without notice?", a: "Yes. Inspections may be announced or unannounced." },
                                { q: "Are inspection observations binding?", a: "Yes. Corrective actions must be implemented within timelines." },
                                { q: "Can PMS challenge inspection findings?", a: "Clarifications may be provided, but compliance is mandatory." },
                                { q: "What is the most common PMS compliance failure?", a: "Weak asset segregation and inadequate documentation." },
                                { q: "Is compliance a one-time exercise?", a: "No. PMS compliance is continuous and evolving." },
                                { q: "Does strong compliance improve investor confidence?", a: "Yes. Compliance directly impacts credibility and trust." },
                                { q: "Can good compliance reduce regulatory risk?", a: "Absolutely. Structured compliance reduces inspection exposure." },
                                { q: "Is PMS compliance expensive?", a: "Compliance is an investment in business stability." },
                                { q: "Can PMS outsource operations fully?", a: "No. Regulatory responsibility always rests with the registered entity." },
                                { q: "What is the safest compliance approach for PMS?", a: "Clear processes, regular reviews, and professional regulatory support." }
                            ].map((faq, idx) => (
                                <details key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-emerald-600 transition-colors text-left">
                                        <span className="pr-4">{faq.q}</span>
                                        <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                                    </summary>
                                    <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Professional Compliance Support?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Ensure your PMS business remains inspection-ready with our audit, advisory, and operational support services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-white/20">
                                Contact Devyani & Co.
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
