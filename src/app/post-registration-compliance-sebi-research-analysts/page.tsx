import { Metadata } from 'next';
import { Shield, FileCheck, AlertTriangle, BookOpen, Lock, Users, Globe, BarChart3, CheckCircle2, AlertCircle, ArrowRight, ChevronDown, FileText, Clock, Award, TrendingUp, Eye, MessageSquare, Database } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Post-Registration Compliance for SEBI Research Analysts – Ongoing Obligations & Best Practices',
    description: 'Comprehensive guide on post-registration compliance for SEBI Research Analysts. Code of conduct, disclosure requirements, trading restrictions, record maintenance, and audit obligations.',
    alternates: {
        canonical: '/post-registration-compliance-sebi-research-analysts',
    },
    keywords: 'SEBI Research Analyst Compliance, RA Post-Registration, Research Analyst Obligations, SEBI Compliance Audit, Research Analyst Code of Conduct',
};

export default function PostRegistrationComplianceSEBI() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-purple-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-700/50 mb-6 animate-fade-in-up">
                            <Shield size={16} className="text-purple-400" />
                            <span className="text-xs font-bold text-purple-100 uppercase tracking-widest">Ongoing Compliance</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Post-Registration Compliance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">
                                for SEBI Research Analysts
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            Continuous regulatory accountability, independence, and documented discipline for registered Research Analysts in India.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-500/25">
                                Get Compliance Support
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="/sebi-research-analyst-registration" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                View Registration Guide
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
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">From Registration to Accountability</h2>
                                    <p className="text-slate-700 leading-relaxed mb-4">
                                        Once SEBI Research Analyst Registration is granted, the role of a Research Analyst transitions from eligibility to <strong>continuous regulatory accountability</strong>. SEBI expects registered Research Analysts to operate with independence, transparency, and documented discipline at all times.
                                    </p>
                                    <p className="text-slate-700 leading-relaxed font-semibold">
                                        Non-compliance post-registration is one of the most common triggers for inspections, warnings, and enforcement actions by the Securities and Exchange Board of India.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CODE OF CONDUCT */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">Code of Conduct & Ethical Obligations</h2>
                            <p className="text-slate-600 mt-2">Foundational principles for registered Research Analysts</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: Shield, title: "Honesty & Fairness", desc: "Acting honestly and fairly in preparation and dissemination of research" },
                                { icon: Eye, title: "Objectivity & Independence", desc: "Ensuring objectivity and independence of opinions" },
                                { icon: AlertCircle, title: "Avoid Misleading Content", desc: "Avoiding exaggerated, misleading, or selective recommendations" },
                                { icon: FileCheck, title: "Due Diligence", desc: "Exercising due diligence before issuing any research output" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-purple-500/30 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                            <p className="text-purple-900 font-bold text-lg">
                                Research must be driven by analysis, not incentives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDEPENDENCE & CONFLICT MANAGEMENT */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Independence of Research & Conflict Management</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {/* Requirements */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <Lock size={24} className="mr-3 text-purple-600" />
                                    Independence Requirements
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Complete independence between research and any other commercial activity",
                                        "No direct or indirect influence from issuers, promoters, or intermediaries",
                                        "Clear identification and management of conflicts of interest"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <CheckCircle2 size={18} className="mr-3 text-purple-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Conflict Management */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <AlertCircle size={24} className="mr-3 text-amber-600" />
                                    Conflict Management Process
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { step: "1", text: "Identified in advance" },
                                        { step: "2", text: "Disclosed prominently" },
                                        { step: "3", text: "Managed through internal controls" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start">
                                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                                                {item.step}
                                            </div>
                                            <p className="text-slate-700 mt-1">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                            <div className="flex items-start">
                                <AlertCircle size={24} className="text-red-600 mr-4 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Critical Compliance Point</h4>
                                    <p className="text-slate-700">
                                        Failure to disclose conflicts is treated as a <strong>serious compliance breach</strong> and may result in penalties or suspension.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MANDATORY DISCLOSURES */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Mandatory Disclosures in Research Reports</h2>

                        <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
                            <p className="text-slate-600 mb-8">
                                Every research report, recommendation, or trading call must include:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: FileText, title: "Research Analyst registration number", required: true },
                                    { icon: Users, title: "Name of the analyst or entity issuing the research", required: true },
                                    { icon: TrendingUp, title: "Nature of recommendation (buy / sell / hold / view)", required: true },
                                    { icon: Clock, title: "Time horizon and risks associated", required: true },
                                    { icon: AlertCircle, title: "Disclosure of personal or institutional interest, if any", required: true }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-200">
                                        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-slate-800 font-medium text-sm">{item.title}</p>
                                            {item.required && (
                                                <span className="text-xs text-red-600 font-semibold">MANDATORY</span>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6">
                                <p className="text-purple-900 font-semibold text-center">
                                    Disclosures must be clear, legible, and not buried in fine print.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRADING RESTRICTIONS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Trading Restrictions & Personal Dealings</h2>

                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-10 border border-red-200 mb-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Strict Personal Trading Restrictions</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: Lock, title: "No Pre-Publication Trading", desc: "Analysts cannot trade in securities before publication of research" },
                                    { icon: Clock, title: "Cooling-Off Periods", desc: "Mandatory waiting periods before and after recommendations" },
                                    { icon: FileCheck, title: "Pre-Clearance Required", desc: "Internal approvals may be required for personal trades" },
                                    { icon: Database, title: "Documentation Mandatory", desc: "All personal trades must be documented and maintained" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-red-200">
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mr-4 flex-shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h4>
                                                <p className="text-xs text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 bg-white border border-red-300 rounded-xl p-4">
                                <p className="text-slate-800 text-sm font-semibold text-center">
                                    These restrictions are designed to prevent <span className="text-red-600">front-running</span> and misuse of information.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RECORD MAINTENANCE */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Maintenance of Records & Documentation</h2>

                        <p className="text-center text-slate-600 mb-8">Research Analysts must maintain detailed records for regulatory compliance and inspection readiness.</p>

                        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-purple-600 text-white">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-bold">Record Type</th>
                                            <th className="px-6 py-4 text-left font-bold">Minimum Retention Period</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200">
                                        {[
                                            { type: "Research reports & rationale", period: "5 years" },
                                            { type: "Data sources & analysis notes", period: "5 years" },
                                            { type: "Disclosures & disclaimers", period: "5 years" },
                                            { type: "Client communication", period: "5 years" },
                                            { type: "Personal trading records", period: "5 years" },
                                            { type: "Complaints & grievance records", period: "5 years" }
                                        ].map((item, idx) => (
                                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 text-slate-800 font-medium">{item.type}</td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                                                        {item.period}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <p className="text-slate-700 text-sm">
                                <strong>Note:</strong> Records may be maintained electronically, provided they are secure, retrievable, and tamper-proof.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLIENT ONBOARDING */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Client Onboarding & Communication Controls</h2>

                        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                            <p className="text-slate-600 mb-8">For paid research services, the following controls must be in place:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: FileText, title: "Client Documentation", desc: "Clear client onboarding documentation must be maintained" },
                                    { icon: BookOpen, title: "Scope Definition", desc: "Scope of research services must be defined" },
                                    { icon: AlertCircle, title: "No Return Assurance", desc: "No assurance of returns may be given" },
                                    { icon: MessageSquare, title: "Consistent Communication", desc: "All communications must remain consistent with published research" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h3>
                                                <p className="text-xs text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
                                <div className="flex items-start">
                                    <AlertCircle size={20} className="text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                                    <p className="text-slate-800 font-semibold text-sm">
                                        Selective sharing of recommendations is strictly prohibited.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIGITAL PLATFORM COMPLIANCE */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Website & Digital Platform Compliance</h2>

                        <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200">
                            <p className="text-slate-600 mb-8">
                                Registered Research Analysts operating websites, apps, Telegram channels, or social platforms must ensure:
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Globe, text: "Registration details are prominently displayed" },
                                    { icon: Eye, text: "Disclosures are visible on all platforms" },
                                    { icon: BarChart3, text: "Historical performance is not misrepresented" },
                                    { icon: MessageSquare, text: "Testimonials or guarantees are not used improperly" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-200">
                                        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <p className="text-slate-800 font-medium mt-2">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6">
                                <p className="text-purple-900 font-bold text-center">
                                    Digital reach does not dilute regulatory responsibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ADVERTISEMENT RESTRICTIONS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Advertisement & Public Communication Restrictions</h2>

                        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 md:p-10 border border-red-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Research Analysts Must NOT:</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {[
                                    "Advertise guaranteed returns",
                                    "Use promotional language inconsistent with research nature",
                                    "Publish selective or cherry-picked performance results",
                                    "Mislead investors through marketing claims"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start bg-white p-4 rounded-xl border border-red-200">
                                        <AlertCircle size={20} className="text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <p className="text-slate-800 font-medium text-sm">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white border border-red-300 rounded-xl p-6">
                                <p className="text-slate-800 font-semibold text-center">
                                    Any public communication must be <span className="text-purple-600">educational and factual</span>, not promotional.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* GRIEVANCE REDRESSAL */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Grievance Redressal Mechanism</h2>

                        <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200">
                            <p className="text-slate-600 mb-8">Every Research Analyst must establish:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { icon: FileCheck, title: "Formal Mechanism", desc: "A formal grievance redressal mechanism" },
                                    { icon: Users, title: "Designated Contact", desc: "Designated contact details for complaints" },
                                    { icon: Clock, title: "Timely Resolution", desc: "Timely resolution of investor grievances" },
                                    { icon: Database, title: "Complaint Registers", desc: "Maintenance of complaint registers" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start p-4 bg-slate-50 rounded-xl border border-slate-200">
                                        <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                                            <p className="text-xs text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
                                <div className="flex items-start">
                                    <AlertCircle size={20} className="text-amber-600 mr-3 flex-shrink-0 mt-0.5" />
                                    <p className="text-slate-800 font-semibold text-sm">
                                        Unresolved complaints may escalate to SEBI and invite inspection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PERIODIC REPORTING */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Periodic Reporting & Regulatory Intimations</h2>

                        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                            <p className="text-slate-600 mb-8">Research Analysts are required to:</p>

                            <div className="space-y-4">
                                {[
                                    "Submit periodic compliance confirmations as prescribed",
                                    "Intimate changes in business model, control, or key personnel",
                                    "Report material events impacting research independence"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start p-4 bg-white rounded-xl border border-slate-200">
                                        <CheckCircle2 size={20} className="text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                                        <p className="text-slate-800 font-medium">{item}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-purple-50 border border-purple-200 rounded-xl p-6">
                                <p className="text-purple-900 font-semibold text-center">
                                    Timely reporting reflects regulatory maturity and governance strength.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ANNUAL COMPLIANCE AUDIT */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Annual Compliance Audit</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Who Conducts */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <Award size={24} className="mr-3 text-purple-600" />
                                    Who Conducts the Audit
                                </h3>
                                <p className="text-slate-600 mb-6">Every registered Research Analyst must undergo an annual compliance audit conducted by:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Practising Chartered Accountant (CA)",
                                        "Company Secretary (CS)",
                                        "Cost Accountant (CMA)"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-700">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* What is Examined */}
                            <div className="bg-white rounded-2xl p-8 border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <FileCheck size={24} className="mr-3 text-purple-600" />
                                    What is Examined
                                </h3>
                                <p className="text-slate-600 mb-6">The audit examines:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Adherence to SEBI Research Analyst Regulations",
                                        "Disclosure practices",
                                        "Trading restrictions",
                                        "Record maintenance",
                                        "Conflict management"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <CheckCircle2 size={18} className="mr-3 text-purple-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
                            <p className="text-slate-800 font-semibold text-center">
                                Audit observations must be addressed promptly to maintain compliance status.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEBI INSPECTION */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">SEBI Inspection & Enforcement Readiness</h2>

                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-10 border border-amber-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">SEBI May Conduct Inspections:</h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                {[
                                    { icon: AlertTriangle, title: "With or Without Prior Notice", desc: "Inspections can be surprise visits" },
                                    { icon: Database, title: "Comprehensive Coverage", desc: "Records, systems, and communications" },
                                    { icon: Globe, title: "Digital Content Included", desc: "Including archived material" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-amber-200">
                                        <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                                            <item.icon size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h4>
                                        <p className="text-xs text-slate-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white border border-amber-300 rounded-xl p-6">
                                <p className="text-slate-800 font-bold text-center">
                                    Research Analysts must cooperate fully and maintain <span className="text-amber-600">inspection-ready documentation</span> at all times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONSEQUENCES */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Consequences of Non-Compliance</h2>

                        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 md:p-10 border border-red-200">
                            <p className="text-slate-700 mb-8 font-semibold">Failure to comply may result in:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: AlertCircle, title: "Monetary Penalties", desc: "Significant fines as per SEBI regulations" },
                                    { icon: FileText, title: "Directions or Restrictions", desc: "Operational restrictions imposed by SEBI" },
                                    { icon: Lock, title: "Suspension or Cancellation", desc: "Loss of registration and ability to operate" },
                                    { icon: TrendingUp, title: "Reputational Damage", desc: "Loss of credibility and client trust" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-red-200">
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mr-4 flex-shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                                                <p className="text-xs text-slate-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white border border-red-300 rounded-xl p-6">
                                <p className="text-slate-900 font-bold text-center text-lg">
                                    Post-registration compliance is therefore as critical as registration itself.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs – SEBI Research Analyst Registration & Compliance */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">FAQs – SEBI Research Analyst Registration & Compliance</h2>
                            <p className="text-slate-600 mt-2">Common questions regarding post-registration obligations.</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { q: "1. What is SEBI Research Analyst registration?", a: "SEBI Research Analyst registration is a mandatory approval required for individuals or entities providing research reports, stock recommendations, price targets, or trading opinions related to securities." },
                                { q: "2. Who is required to obtain Research Analyst registration?", a: "Any person or organisation issuing research opinions or recommendations for consideration must obtain registration before commencing such activities." },
                                { q: "3. Can someone publish research reports without SEBI registration?", a: "No. Publishing or distributing research without registration is treated as unauthorised activity and may attract regulatory action." },
                                { q: "4. Which regulations govern Research Analysts in India?", a: "Research Analysts are governed under the SEBI (Research Analysts) Regulations, 2014, along with subsequent amendments and circulars." },
                                { q: "5. What qualifications are required to become a Research Analyst?", a: "Applicants must meet prescribed educational requirements and hold a valid NISM Research Analyst certification." },
                                { q: "6. Is a finance degree compulsory for Research Analyst registration?", a: "A finance degree is not compulsory if the applicant holds the prescribed certification and meets eligibility norms." },
                                { q: "7. What certification is mandatory for Research Analysts?", a: "A valid NISM Research Analyst certification, as prescribed by SEBI, is mandatory." },
                                { q: "8. What does “fit and proper” criteria mean for Research Analysts?", a: "It refers to integrity, reputation, financial soundness, and regulatory track record of the applicant and key persons." },
                                { q: "9. Is a security deposit required after registration?", a: "Yes. Research Analysts must maintain a security deposit based on the size of their client base." },
                                { q: "10. How is the security deposit amount decided?", a: "The amount depends on the number of clients served by the Research Analyst." },
                                { q: "11. Where is the Research Analyst application submitted?", a: "The application is submitted to SEBI in the prescribed format along with supporting documents and fees." },
                                { q: "12. Can foreign entities register as Research Analysts in India?", a: "Foreign entities generally cannot directly register; research for Indian clients must be routed through a registered entity." },
                                { q: "13. What documents are required for Research Analyst registration?", a: "Documents include application forms, qualification proofs, certification details, business plan, and internal policies." },
                                { q: "14. Is physical or IT infrastructure evaluated by SEBI?", a: "Yes. SEBI assesses whether the applicant has adequate infrastructure to conduct research activities responsibly." },
                                { q: "15. Is appointment of a Principal Officer mandatory?", a: "Yes, for non-individual applicants, a Principal Officer must be designated to oversee compliance." },
                                { q: "16. Can a Research Analyst distribute financial products?", a: "No. Research Analysts are prohibited from distribution unless separately registered under applicable regulations." },
                                { q: "17. Can one entity hold both Research Analyst and Investment Adviser registrations?", a: "Yes, but strict segregation of activities, teams, and disclosures must be maintained." },
                                { q: "18. Are Research Analysts allowed to charge fees?", a: "Yes, Research Analysts may charge fees, subject to transparency and disclosure requirements." },
                                { q: "19. Is advance fee collection permitted?", a: "Advance fees are permitted within regulatory limits and subject to refund and disclosure norms." },
                                { q: "20. Does Research Analyst registration require renewal every year?", a: "Registration remains valid unless suspended or cancelled, but ongoing compliance and fee obligations apply." },
                                { q: "21. Are conflict of interest policies mandatory?", a: "Yes. Research Analysts must have documented conflict management policies." },
                                { q: "22. What disclosures are mandatory in research reports?", a: "Disclosures include registration details, analyst identity, conflicts of interest, and compensation links." },
                                { q: "23. Are Research Analysts allowed to advertise their services?", a: "Promotional activities are restricted and must not be misleading or solicit public investments." },
                                { q: "24. Are there restrictions on personal trading by Research Analysts?", a: "Yes. Personal trading must comply with internal policies to prevent misuse of information." },
                                { q: "25. Is continuous professional education required?", a: "Research Analysts must maintain valid certifications and stay updated with regulatory changes." },
                                { q: "26. Is website compliance mandatory for Research Analysts?", a: "Yes. Registration details and disclosures must be prominently displayed on websites and digital platforms." },
                                { q: "27. Can Research Analysts publish research on social media platforms?", a: "Yes, provided all disclosures and registration details accompany such publications." },
                                { q: "28. How does SEBI monitor Research Analyst compliance?", a: "SEBI monitors compliance through reporting, audits, inspections, and grievance mechanisms." },
                                { q: "29. What records must Research Analysts maintain?", a: "Records of research reports, data sources, disclosures, client communications, and trades must be preserved." },
                                { q: "30. Is an annual compliance audit mandatory?", a: "Yes. Research Analysts must undergo an annual compliance audit by a qualified professional." },
                                { q: "31. Are audit observations reportable to SEBI?", a: "Material audit findings must be addressed and reported as required." },
                                { q: "32. Can SEBI amend Research Analyst regulations?", a: "Yes. SEBI may amend regulations or issue clarifications from time to time." },
                                { q: "33. Does the number of clients affect compliance requirements?", a: "Yes. Client volume impacts security deposit and reporting obligations." },
                                { q: "34. Why is a security deposit required?", a: "The deposit acts as financial assurance for investor protection and regulatory enforcement." },
                                { q: "35. Is membership of a supervisory body required?", a: "Yes. Research Analysts must be associated with a recognised supervisory body." },
                                { q: "36. Can compliance functions be outsourced?", a: "Compliance functions may be outsourced, but responsibility remains with the Research Analyst." },
                                { q: "37. How long does the registration process usually take?", a: "Timelines vary based on documentation quality and regulatory clarifications." },
                                { q: "38. Can a Research Analyst refuse to onboard a client?", a: "Yes. Research Analysts may refuse engagements that conflict with regulations or independence." },
                                { q: "39. Are Research Analysts allowed to analyse complex products?", a: "Yes, provided adequate expertise and disclosures are maintained." },
                                { q: "40. Is a separate bank account required for research activities?", a: "Maintaining a separate account is considered a good governance practice." },
                                { q: "41. Can SEBI suspend Research Analyst registration?", a: "Yes. SEBI may suspend or cancel registration for serious non-compliance." },
                                { q: "42. Is client consent required for disclosures?", a: "Clients must acknowledge disclosures before availing research services." },
                                { q: "43. Can Research Analysts provide investment advice?", a: "No. Investment advice requires separate registration as an Investment Adviser." },
                                { q: "44. Are financial projections allowed in research reports?", a: "Yes, provided assumptions and risks are clearly explained." },
                                { q: "45. Is there a cap on Research Analyst fees?", a: "Fees must be reasonable, transparent, and fairly disclosed." },
                                { q: "46. Can unregistered individuals assist in research preparation?", a: "Only registered Research Analysts can issue research under their name." },
                                { q: "47. Can Research Analysts run paid newsletters or subscriptions?", a: "Yes, subject to full compliance with disclosure and conduct norms." },
                                { q: "48. Are Research Analysts liable for misleading research?", a: "Yes. Misleading or biased research may result in regulatory penalties." },
                                { q: "49. Is a grievance redressal mechanism mandatory?", a: "Yes. Research Analysts must maintain a formal grievance redressal process." },
                                { q: "50. How can Research Analysts ensure long-term compliance?", a: "By maintaining disciplined disclosures, proper records, internal controls, and regulatory awareness." }
                            ].map((faq, idx) => (
                                <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-purple-600 transition-colors text-left">
                                        <span className="pr-4">{faq.q}</span>
                                        <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                                    </summary>
                                    <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-200">
                                        {faq.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW WE SUPPORT */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 md:p-10 border border-purple-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">How Devyani & Co. Supports Research Analysts</h2>
                            <p className="text-slate-700 mb-8 text-center">At Devyani & Co., we assist Research Analysts with:</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { icon: Shield, text: "Post-registration compliance frameworks" },
                                    { icon: FileText, text: "Disclosure templates and report formats" },
                                    { icon: Lock, text: "Trading restriction policies" },
                                    { icon: Award, text: "Annual compliance audits" },
                                    { icon: Eye, text: "Inspection preparedness" },
                                    { icon: Users, text: "Ongoing regulatory advisory" }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
                                        <div className="flex items-start">
                                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                                                <item.icon size={20} />
                                            </div>
                                            <p className="text-slate-800 font-medium text-sm mt-2">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 bg-white border border-purple-300 rounded-xl p-6">
                                <p className="text-purple-900 font-bold text-center">
                                    Our focus is to ensure that research businesses operate with credibility, continuity, and regulator confidence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Compliance Support for Your Research Practice?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            We help Research Analysts build robust compliance frameworks, maintain regulatory readiness, and operate with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-purple-500 text-white font-bold rounded-xl hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-500/25">
                                Get Expert Compliance Support
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="/sebi-research-analyst-registration" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                View Registration Guide
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROFESSIONAL NOTE */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Compliance Advisory</h4>
                            <p className="text-slate-600">
                                At Devyani & Co., we help Research Analysts navigate post-registration compliance with practical frameworks, ongoing support, and inspection readiness.
                            </p>
                        </div>
                        <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-600 transition-all flex items-center shadow-xl whitespace-nowrap">
                            Get Started
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
