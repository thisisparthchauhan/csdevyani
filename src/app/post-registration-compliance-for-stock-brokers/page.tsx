import { Metadata } from 'next';
import {
    Shield, FileCheck, AlertTriangle, BookOpen, Lock, Users, Globe, BarChart3,
    CheckCircle2, AlertCircle, ArrowRight, ChevronDown, FileText, Clock, Award,
    TrendingUp, Eye, MessageSquare, Database, Server, RefreshCcw, Briefcase, Gavel
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Post-Registration Compliance for Stock Brokers (SEBI) – Ongoing Obligations',
    description: 'Comprehensive guide on post-registration compliance for SEBI Stock Brokers. Books of accounts, KYC, margin collection, segregation of funds, and audit obligations.',
    alternates: {
        canonical: '/post-registration-compliance-for-stock-brokers',
    },
    keywords: 'SEBI Stock Broker Compliance, Stock Broker Regulations, Post-Registration Compliance, Stock Broker Audit, SEBI Inspection',
};

export default function StockBrokerCompliance() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-700/50 mb-6 animate-fade-in-up">
                            <Shield size={16} className="text-blue-400" />
                            <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">Ongoing Compliance</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Post-Registration Compliance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                for Stock Brokers (SEBI)
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            Once Stock Broker Registration with SEBI is granted, the broker becomes a continuously regulated intermediary. Compliance is not event-based; it is ongoing, auditable, and enforceable.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25">
                                Get Compliance Support
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 md:p-10 mb-12">
                            <div className="flex items-start gap-4">
                                <AlertTriangle size={32} className="text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Continuous Adherence</h2>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        All obligations arise from SEBI (Stock Brokers) Regulations, 1992, SEBI Act, 1992, Stock Exchange bye-laws, and Clearing Corporation requirements.
                                        Failure at any stage can lead to inspection findings, penalties, suspension, or cancellation by SEBI.
                                    </p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                                        {[
                                            "Maintaining valid exchange membership at all times",
                                            "Obtaining prior SEBI approval for any change in control",
                                            "Continuous maintenance of prescribed net worth",
                                            "Adherence to SEBI Code of Conduct",
                                            "Timely redressal of investor grievances"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center text-slate-700 text-sm font-semibold">
                                                <CheckCircle2 size={16} className="text-amber-600 mr-2 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOOKS & RECORDS */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Maintenance of Books, Records & Documents</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <BookOpen size={24} className="text-blue-600 mr-3" />
                                    Statutory Records
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Client master records and KYC documents",
                                        "Client agreements and risk disclosures",
                                        "Order books, trade books, and sauda books",
                                        "Client ledger and margin records",
                                        "Bank account and demat reconciliations",
                                        "Contract notes and trade confirmations",
                                        "Proprietary trading records"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <Database size={24} className="text-purple-600 mr-3" />
                                    Record Retention
                                </h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    All records must be preserved for a **minimum period of five years**, either in physical or electronic form, and must be readily producible during inspections.
                                </p>
                                <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl">
                                    <p className="text-sm text-purple-800 font-medium">
                                        Electronic records must be secure, retrievable, and tamper-proof.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* KYC & SEGREGATION */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Client Onboarding */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Client Onboarding & KYC Compliance</h2>
                                <p className="text-slate-600 mb-6">Before executing any trade via a client, the broker must ensure:</p>
                                <div className="space-y-4">
                                    {[
                                        "Completion of KYC as per prescribed norms",
                                        "Execution of client–broker agreement",
                                        "Acknowledgement of risk disclosure documents",
                                        "Allotment of Unique Client Code (UCC)",
                                        "Verification of client bank and demat accounts"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-200">
                                            <FileCheck size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                                            <p className="text-slate-800 font-medium text-sm">{item}</p>
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm text-red-600 font-bold flex items-center">
                                    <AlertTriangle size={16} className="mr-2" />
                                    Trading without proper KYC is a serious regulatory violation.
                                </p>
                            </div>

                            {/* Segregation */}
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">Segregation of Client Funds & Securities</h2>
                                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
                                    <h3 className="text-xl font-bold mb-4 flex items-center">
                                        <Lock size={24} className="text-emerald-400 mr-3" />
                                        Strict Segregation
                                    </h3>
                                    <ul className="space-y-4 mb-6">
                                        <li className="flex items-start">
                                            <CheckCircle2 size={18} className="text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                                            <span>Maintain separate bank accounts for client funds and proprietary funds</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 size={18} className="text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                                            <span>Ensure client securities are segregated from proprietary holdings</span>
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 size={18} className="text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                                            <span>Comply with daily and periodic client fund reporting</span>
                                        </li>
                                    </ul>
                                    <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                                        <p className="text-sm font-medium text-white/90">
                                            Misuse or diversion of client funds attracts severe enforcement action.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MARGIN & RISK */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Margin Collection & Risk Management</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: TrendingUp, title: "Collect Margins", desc: "Collect margins as prescribed by exchanges" },
                                { icon: BarChart3, title: "Risk Monitoring", desc: "Implement real-time risk monitoring systems" },
                                { icon: AlertTriangle, title: "Square Off", desc: "Square off positions in case of margin shortfall" },
                                { icon: Shield, title: "Exposure Limits", desc: "Maintain exposure limits for clients and prop trades" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mx-auto mb-4">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 inline-block bg-red-50 border border-red-200 px-6 py-3 rounded-full">
                            <span className="text-red-700 font-semibold text-sm">
                                Failure in margin collection is treated as a systemic risk issue.
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPLIANCE & GRIEVANCE */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Compliance Officer */}
                            <div>
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600">
                                        <Users size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">Appointment of Compliance Officer</h2>
                                </div>
                                <p className="text-slate-600 mb-6">Every stock broker must appoint a Compliance Officer who is functionally independent.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Monitors adherence to SEBI and exchange regulations",
                                        "Reports non-compliance directly to the Board",
                                        "Oversees investor grievance redressal",
                                        "Acts as nodal point during inspections"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <CheckCircle2 size={18} className="text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Grievance Redressal */}
                            <div>
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="p-3 bg-rose-100 rounded-lg text-rose-600">
                                        <MessageSquare size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900">Investor Grievance Redressal</h2>
                                </div>
                                <p className="text-slate-600 mb-6">Failure to resolve grievances attracts penalties and inspection observations.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Maintain a formal grievance redressal mechanism",
                                        "Resolve investor complaints within prescribed timelines",
                                        "Upload complaints and resolutions on exchange platforms",
                                        "Escalate unresolved grievances appropriately"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <CheckCircle2 size={18} className="text-rose-600 mr-3 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REPORTING & AUDITS */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Reporting, Audits & Tech Controls</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Periodic Reporting */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <FileText size={32} className="text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Periodic Reporting</h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>• Net worth certificates</li>
                                    <li>• Client fund and securities statements</li>
                                    <li>• Margin and exposure reports</li>
                                    <li>• Financial statements and audit reports</li>
                                    <li>• Compliance and risk management reports</li>
                                    <li>• Surveillance reports</li>
                                </ul>
                            </div>

                            {/* Audits */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <Award size={32} className="text-purple-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Annual & Periodic Audits</h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>• Internal audit</li>
                                    <li>• System audit (including cyber security)</li>
                                    <li>• Compliance audit</li>
                                    <li>• Statutory financial audit</li>
                                </ul>
                                <p className="mt-4 text-xs font-semibold text-slate-500">
                                    Audit observations must be documented with corrective action reports.
                                </p>
                            </div>

                            {/* Cyber Security */}
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <Server size={32} className="text-emerald-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Cyber Security</h3>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>• Approved trading and risk systems</li>
                                    <li>• Cyber security framework</li>
                                    <li>• Access controls and data protection</li>
                                    <li>• Business continuity and DR plans</li>
                                </ul>
                                <p className="mt-4 text-xs font-semibold text-slate-500">
                                    Technology failures are treated as operational risk events.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSPECTION & CONSEQUENCES */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div>
                                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                                        <Eye size={24} className="text-blue-400 mr-3" />
                                        Inspection & Enforcement
                                    </h2>
                                    <p className="text-slate-300 mb-4">
                                        SEBI and stock exchanges have statutory powers to conduct inspections with or without notice.
                                    </p>
                                    <ul className="space-y-2 text-slate-300 text-sm">
                                        <li>• Examine books, systems, and records</li>
                                        <li>• Call for explanations from directors/staff</li>
                                        <li>• Non-cooperation is a violation</li>
                                    </ul>
                                </div>

                                <div className="border-t md:border-t-0 md:border-l border-slate-700 pt-8 md:pt-0 md:pl-12">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                                        <Gavel size={24} className="text-red-400 mr-3" />
                                        Penalties
                                    </h2>
                                    <p className="text-slate-300 mb-4">
                                        SEBI may impose monetary penalties, suspension, or cancellation of registration.
                                    </p>
                                    <div className="bg-red-900/30 border border-red-500/30 p-4 rounded-xl">
                                        <p className="text-sm font-medium text-red-200">
                                            Enforcement action is based on objective compliance failures, not intent.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center max-w-3xl mx-auto">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Change Management & Regulatory Intimations</h3>
                            <p className="text-slate-600 mb-6">
                                Prior approval or immediate intimation is required for changes in shareholding/control, directors/key management, compliance officer, or business model.
                            </p>
                            <p className="font-bold text-slate-900">
                                Registration is only the starting point. Compliance determines survival.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">Stock Broker Compliance (SEBI) – FAQs</h2>
                            <p className="text-slate-600 mt-2">Comprehensive answers to common compliance queries.</p>
                        </div>

                        <div className="space-y-8">
                            {/* A. General Compliance Obligations */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">A. General Compliance Obligations</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "What are the core compliance obligations of a stock broker after registration?", a: "A stock broker must continuously comply with SEBI regulations, exchange bye-laws, circulars, conditions of registration, investor protection norms, and risk management requirements throughout its operations." },
                                        { q: "Is compliance a one-time requirement after registration?", a: "No. Compliance is ongoing and continuous. Registration only marks the beginning of regulatory supervision." },
                                        { q: "What is the Code of Conduct applicable to stock brokers?", a: "Stock brokers must act with integrity, fairness, professionalism, due skill, and care, and must not indulge in fraudulent, manipulative, or misleading practices." },
                                        { q: "Are SEBI circulars mandatory for stock brokers?", a: "Yes. SEBI circulars and exchange circulars issued pursuant to SEBI directions are binding and must be complied with until withdrawn." },
                                        { q: "Can a broker ignore exchange circulars if not issued directly by SEBI?", a: "No. Exchange circulars issued under SEBI’s regulatory framework are enforceable and mandatory." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* B. Books, Records & Documentation */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">B. Books, Records & Documentation</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "What books and records must a stock broker maintain?", a: "Stock brokers must maintain client master data, KYC documents, trade records, order logs, contract notes, client ledgers, margin records, bank and demat reconciliations, and complaint records." },
                                        { q: "For how long must records be preserved?", a: "Records must generally be preserved for a minimum of five years or such longer period as may be specified." },
                                        { q: "Can brokers maintain records in electronic form?", a: "Yes, provided records are secure, retrievable, tamper-proof, and available for inspection." },
                                        { q: "Is segregation of client and proprietary records mandatory?", a: "Yes. Client funds and securities must be segregated from proprietary funds and securities at all times." },
                                        { q: "Is maintenance of an investor complaint register compulsory?", a: "Yes. All complaints, resolutions, and escalation details must be recorded and tracked." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* C. Compliance Officer & Internal Controls */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">C. Compliance Officer & Internal Controls</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Is appointment of a Compliance Officer mandatory?", a: "Yes. Every stock broker must appoint a Compliance Officer responsible for regulatory compliance." },
                                        { q: "What are the responsibilities of a Compliance Officer?", a: "Monitoring compliance, reporting violations, overseeing grievance redressal, coordinating audits, and acting as liaison with regulators and exchanges." },
                                        { q: "Can the Compliance Officer perform operational roles?", a: "The Compliance Officer should be functionally independent; excessive operational involvement is discouraged." },
                                        { q: "Is a whistle-blower mechanism required?", a: "Yes. Brokers must have a mechanism for confidential reporting of unethical or non-compliant conduct." },
                                        { q: "Are internal surveillance systems mandatory?", a: "Yes. Brokers must monitor trading activity to detect fraud, manipulation, and abnormal patterns." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* D. Client-Related Compliance */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">D. Client-Related Compliance</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "What compliance is required before onboarding a client?", a: "Completion of KYC, execution of client agreement, risk disclosure acknowledgment, and verification of bank and demat accounts." },
                                        { q: "Are brokers required to issue contract notes?", a: "Yes. Contract notes must be issued within prescribed timelines for every trade executed." },
                                        { q: "Is settlement compliance mandatory?", a: "Yes. Timely settlement of securities and funds as per exchange clearing and settlement cycles is mandatory." },
                                        { q: "Can a broker retain client funds beyond prescribed timelines?", a: "No. Retention of client funds without regulatory basis is a serious violation." },
                                        { q: "Are periodic client statements required?", a: "Yes. Clients must receive periodic statements of funds and securities balances." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* E. Risk Management & Financial Compliance */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">E. Risk Management & Financial Compliance</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Are risk management systems mandatory for stock brokers?", a: "Yes. Brokers must have systems to monitor exposure, margins, and market risks." },
                                        { q: "Is margin collection a compliance requirement?", a: "Yes. Prescribed margins must be collected, monitored, and enforced." },
                                        { q: "Can brokers use client funds for proprietary obligations?", a: "No. Client funds cannot be used for proprietary trading or obligations." },
                                        { q: "Is net worth reporting part of compliance?", a: "Yes. Brokers must periodically certify and report net worth as required." },
                                        { q: "Are cyber security norms applicable to stock brokers?", a: "Yes. Brokers must implement cyber security and cyber resilience frameworks." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* F. Reporting Obligations */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">F. Reporting Obligations</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "What periodic reports must stock brokers submit?", a: "Compliance reports, financial statements, net worth certificates, client fund reports, audit reports, and surveillance reports." },
                                        { q: "Is consolidated reporting permitted for brokers operating on multiple exchanges?", a: "Yes, subject to prescribed mechanisms and regulatory approval." },
                                        { q: "Must suspicious transactions be reported?", a: "Yes. Any suspicious or potentially manipulative activity must be reported promptly." },
                                        { q: "Are system failures required to be reported?", a: "Yes. Major technology failures or disruptions must be reported to exchanges and regulators." },
                                        { q: "Are inspection observations binding?", a: "Yes. Brokers must address inspection findings within stipulated timelines." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* G. Surveillance & Market Abuse Prevention */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">G. Surveillance & Market Abuse Prevention</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Are brokers required to monitor unusual trading activity?", a: "Yes. Ongoing monitoring of trading patterns is mandatory." },
                                        { q: "Is escalation of irregular activity required?", a: "Yes. Suspicious activity must be escalated internally and reported externally where required." },
                                        { q: "Are brokers responsible for monitoring client behaviour?", a: "Yes. Brokers must monitor for abnormal or potentially abusive client behaviour." },
                                        { q: "Is a formal market abuse prevention framework required?", a: "Yes. Policies and procedures must exist to prevent fraud and market abuse." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* H. Investor Protection & Conduct */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">H. Investor Protection & Conduct</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Are brokers required to protect investor interests?", a: "Yes. Investor protection is a core regulatory objective." },
                                        { q: "Are timelines prescribed for grievance resolution?", a: "Yes. Complaints must be resolved within prescribed timelines." },
                                        { q: "Are advertising and marketing regulated for brokers?", a: "Yes. Brokers must not issue misleading or unauthorised advertisements." },
                                        { q: "Can brokers offer inducements to attract clients?", a: "No. Unfair inducements and misrepresentations are prohibited." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* I. Inspections & Enforcement */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">I. Inspections & Enforcement</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Can regulators inspect a broker without notice?", a: "Yes. Inspections may be conducted with or without prior notice." },
                                        { q: "What happens if inspection observations are ignored?", a: "Non-compliance may lead to penalties, restrictions, or suspension." },
                                        { q: "Can SEBI impose penalties for compliance failures?", a: "Yes. Monetary penalties, operational restrictions, or registration action may be imposed." },
                                        { q: "Is misuse of client funds a serious violation?", a: "Yes. It is among the gravest compliance breaches." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* J. Corporate & Governance Compliance */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">J. Corporate & Governance Compliance</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Does the Board have responsibility for compliance?", a: "Yes. The Board must oversee compliance and risk management." },
                                        { q: "Are audit committees required for large brokers?", a: "Yes. Larger brokers are expected to have structured governance committees." },
                                        { q: "What is a Qualified Stock Broker (QSB)?", a: "A broker designated for enhanced regulatory oversight due to scale and systemic importance." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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

                            {/* K. Penalties & Corrective Measures */}
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">K. Penalties & Corrective Measures</h3>
                                <div className="space-y-4">
                                    {[
                                        { q: "Can SEBI restrict business activities for non-compliance?", a: "Yes. Restrictions may include client onboarding bans or trading limits." },
                                        { q: "What triggers suspension of broker registration?", a: "Persistent non-compliance, serious violations, or failure to rectify deficiencies." },
                                        { q: "Are corrective action plans mandatory after inspections?", a: "Yes. Brokers must implement and report corrective measures." },
                                        { q: "Can compliance failures impact exchange membership?", a: "Yes. Exchanges may impose restrictions or recommend regulatory action." },
                                        { q: "Is compliance training of staff mandatory?", a: "Yes. Staff must be trained on regulatory obligations and compliance standards." },
                                        { q: "Are internal audits part of compliance?", a: "Yes. Internal and system audits are mandatory." },
                                        { q: "Is segregation of client funds reviewed during audits?", a: "Yes. This is a key audit and inspection focus area." },
                                        { q: "Are compliance reports subject to verification?", a: "Yes. Reports may be verified during inspections and audits." },
                                        { q: "Can compliance obligations differ by broker category?", a: "Yes. Obligations may vary based on broker type and scale." },
                                        { q: "Does non-compliance affect reputation and credibility?", a: "Yes. Regulatory actions are public and impact market standing." },
                                        { q: "Is compliance outsourcing permitted?", a: "Certain functions may be outsourced, but responsibility remains with the broker." },
                                        { q: "Must brokers document compliance processes?", a: "Yes. Written policies and procedures are mandatory." },
                                        { q: "Are brokers required to update policies regularly?", a: "Yes. Policies must reflect regulatory changes." },
                                        { q: "Is compliance review a continuous process?", a: "Yes. Compliance is dynamic and ongoing." },
                                        { q: "Why is strong compliance critical for stock brokers?", a: "Because regulatory trust, operational continuity, and investor confidence depend on it." }
                                    ].map((faq, idx) => (
                                        <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                            <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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
                    </div>
                </div>
            </section>

            {/* HOW WE SUPPORT */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-700/50 mb-6">
                            <Briefcase size={16} className="text-blue-400" />
                            <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">Expert Support</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">How Devyani & Co. Supports Stock Brokers</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            At Devyani & Co., we assist brokers with post-registration compliance frameworks, exchange reporting, audit coordination, and inspection preparedness.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-white/20">
                                Get Inspection Ready
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                        <p className="mt-8 text-sm text-slate-400">
                            Our approach is regulation-first, inspection-ready, and enforcement-aware.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
