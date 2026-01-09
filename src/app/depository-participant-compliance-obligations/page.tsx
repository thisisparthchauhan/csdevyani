import { Metadata } from 'next';
import {
    Shield, CheckCircle2, AlertTriangle, FileText, Database, Lock,
    Search, Calendar, Clock, BarChart3, Users, ChevronDown, ArrowRight,
    Briefcase, Award, TrendingUp, UserCheck, Globe, Building2, Scale,
    Wallet, Server, Key, Eye
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'DP Compliance Obligations – Depository Participant Reporting & Regulations',
    description: 'Detailed compliance guide for SEBI Registered Depository Participants (DPs). Covers net worth, segregation of assets, technology controls, and daily compliance calendar.',
    alternates: {
        canonical: '/depository-participant-compliance-obligations',
    },
    keywords: 'DP Compliance India, SEBI Depository Participant Regulations, DP Reporting Requirements, Demat Account Compliance, NSDL CDSL Compliance',
};

export default function DPCompliance() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-cyan-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-cyan-700/50 mb-6 animate-fade-in-up">
                            <Shield size={16} className="text-cyan-400" />
                            <span className="text-xs font-bold text-cyan-100 uppercase tracking-widest">Post-Registration Compliance</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Depository Participant <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                                Compliance & Reporting
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            Once registered, a DP becomes a systemically important intermediary. Compliance is continuous, auditable, and enforceable by SEBI and depositories (NSDL/CDSL).
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-700 transition-all shadow-lg hover:shadow-cyan-500/25">
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
                            Most regulatory actions against DPs arise due to <span className="text-cyan-700 font-bold">post-registration lapses</span>—especially in asset segregation, KYC norms, grievance handling, and technology controls.
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
                                { icon: TrendingUp, title: "Net Worth Discipline", desc: "Maintain prescribed net worth continuously. Restore shortfall immediately." },
                                { icon: Users, title: "Client Onboarding & KYC", desc: "Complete KYC, execute agreements, and verify bank details before account opening." },
                                { icon: Wallet, title: "Asset Segregation", desc: "Strict separation of client securities and DP's own assets. No unauthorized pledges." },
                                { icon: Database, title: "Operations & Records", desc: "Maintain accurate transaction logs, master data, and audit trails." },
                                { icon: Building2, title: "Grievance Redressal", desc: "Time-bound resolution of complaints with proper documentation and reporting." },
                                { icon: FileText, title: "Fees Transparency", desc: "Disclose all charges. No hidden or unauthorized fees." },
                                { icon: Server, title: "Tech & Cyber Security", desc: "Secure IT systems, data encryption, backups, and BCP/DR readiness." },
                                { icon: BarChart3, title: "Regulatory Reporting", desc: "Timely submission of compliance confirmations, net worth, and event based reports." },
                                { icon: Eye, title: "Audits & Inspections", desc: "Internal/Concurrent audits and cooperation during SEBI/Depository inspections." },
                                { icon: Key, title: "Change Management", desc: "Prior approval/intimation for changes in control, directors, or operations." },
                                { icon: UserCheck, title: "Compliance Officer", desc: "Dedicated officer ensuring functional independence and Board reporting." },
                                { icon: AlertTriangle, title: "Enforcement Awareness", desc: "Preventive compliance to avoid penalties, restrictions, or suspension." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-cyan-300 hover:shadow-md transition-all group">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-cyan-600 mb-4 shadow-sm group-hover:bg-cyan-600 group-hover:text-white transition-colors">
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
                            <h2 className="text-3xl font-bold text-slate-900">DP Compliance Calendar</h2>
                            <p className="text-slate-600 mt-2">A structured approach to ongoing requirements for investor protection and data security.</p>
                        </div>

                        <div className="space-y-8">
                            {/* Daily */}
                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex items-center">
                                    <Clock className="text-blue-600 mr-3" size={20} />
                                    <h3 className="font-bold text-blue-900">Daily / Ongoing Compliance</h3>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["Asset Safety (No unauthorized debits)", "Segregation of securities", "Access Control & Maker-Checker", "Transaction Monitoring (High-risk)", "Data Integrity checks"].map((item, i) => (
                                        <div key={i} className="flex items-center text-sm text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Monthly */}
                            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                                <div className="bg-cyan-50 px-6 py-4 border-b border-cyan-100 flex items-center">
                                    <Calendar className="text-cyan-600 mr-3" size={20} />
                                    <h3 className="font-bold text-cyan-900">Monthly Compliance</h3>
                                </div>
                                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {["Reconcile demat balances", "Review investor complaints", "Verify fees charged", "Prepare monthly compliance MIS", "Review system logs"].map((item, i) => (
                                        <div key={i} className="flex items-center text-sm text-slate-700">
                                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
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
                                        {["Quarterly net worth statement", "Internal regulatory review", "Verify record completeness", "Identify operational risks", "Submit quarterly reports"].map((item, i) => (
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
                                        {["Review compliance framework", "Update SOPs & Manuals", "Audited financials & Net Worth", "Annual Board review", "Mock inspection & Gap closure"].map((item, i) => (
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

            {/* SUPPORT SECTION */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">How Devyani & Co. Supports DPs</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                We help DPs build inspection-ready compliance frameworks. Our approach is investor-first, regulator-aligned, and process-driven.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "SOPs and control matrices design",
                                    "Grievance workflows structuring",
                                    "Audit coordination and remediation",
                                    "Change approvals and regulatory reporting",
                                    "Ongoing regulatory advisory"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700">
                                        <CheckCircle2 size={18} className="text-cyan-600 mr-3 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-cyan-900 text-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-xl font-bold mb-4">Practical Compliance Note</h3>
                            <p className="mb-6 opacity-90 text-sm leading-relaxed">
                                "Preventive compliance is far less costly than corrective enforcement. Governance failures often precede enforcement action."
                            </p>
                            <Link href="/contact" className="block w-full text-center bg-white text-cyan-900 font-bold py-3 rounded-xl hover:bg-cyan-50 transition-colors">
                                Talk to Compliance Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">DP Compliance – FAQs</h2>
                            <p className="text-slate-600 mt-2">Expert answers to common regulatory questions for Depository Participants.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "Is DP compliance mandatory after registration?", a: "Yes. DP registration carries continuous compliance obligations." },
                                { q: "Who is responsible for DP compliance internally?", a: "The Compliance Officer, with oversight from senior management and the Board." },
                                { q: "Can DP compliance be handled casually?", a: "No. SEBI expects documented and auditable compliance systems." },
                                { q: "Is minimum net worth required after DP registration?", a: "Yes. Prescribed net worth must be maintained at all times." },
                                { q: "What happens if net worth falls below the limit?", a: "The shortfall must be restored immediately to avoid regulatory action." },
                                { q: "Is net worth checked during inspections?", a: "Yes. Net worth is a key inspection parameter." },
                                { q: "Is KYC mandatory before opening a demat account?", a: "Yes. No account can be opened without complete KYC." },
                                { q: "Can DP open accounts with partial documentation?", a: "No. Incomplete onboarding is a violation." },
                                { q: "Is verification of bank details mandatory?", a: "Yes. Bank verification is essential for investor protection." },
                                { q: "Must client securities be segregated from DP assets?", a: "Yes. Segregation is a fundamental compliance requirement." },
                                { q: "Can DP use client securities for its own purposes?", a: "No. This is strictly prohibited." },
                                { q: "Is misuse of securities a serious offence?", a: "Yes. It attracts severe regulatory action." },
                                { q: "What records must a DP maintain?", a: "Client data, transaction logs, demat/remat records, pledges, and audit trails." },
                                { q: "For how long must records be preserved?", a: "As per prescribed retention timelines; records must be retrievable." },
                                { q: "Are electronic records allowed?", a: "Yes, provided they are secure and auditable." },
                                { q: "Is grievance redressal mandatory for DPs?", a: "Yes. DPs must have a formal grievance mechanism." },
                                { q: "Are grievance timelines monitored by regulators?", a: "Yes. Delays attract scrutiny." },
                                { q: "Must all complaints be documented?", a: "Yes, regardless of mode of receipt." },
                                { q: "Must DP disclose all charges to clients?", a: "Yes. Fee transparency is mandatory." },
                                { q: "Can DP charge fees not approved by depository?", a: "No. Only approved charges may be levied." },
                                { q: "Are hidden charges permitted?", a: "No. Hidden fees are prohibited." },
                                { q: "Are IT systems critical for DP compliance?", a: "Yes. Secure systems are essential." },
                                { q: "Is data backup mandatory?", a: "Yes. Data integrity and recovery are crucial." },
                                { q: "Is disaster recovery planning required?", a: "Yes. BCP and DR arrangements are expected." },
                                { q: "Are periodic reports mandatory?", a: "Yes. DPs must submit prescribed reports within timelines." },
                                { q: "Is delay in reporting treated seriously?", a: "Yes. Timely reporting is essential." },
                                { q: "Must errors in submissions be corrected?", a: "Yes. Immediate correction and disclosure are required." },
                                { q: "Are DPs subject to inspections?", a: "Yes. Depositories and SEBI may conduct inspections." },
                                { q: "Can inspections be unannounced?", a: "Yes. Surprise inspections are permitted." },
                                { q: "Are inspection observations binding?", a: "Yes. Corrective action is mandatory." },
                                { q: "Is appointment of a Compliance Officer mandatory?", a: "Yes. A designated Compliance Officer is compulsory." },
                                { q: "Can compliance responsibility be outsourced?", a: "Certain tasks may be outsourced, but accountability remains with DP." },
                                { q: "Is Board oversight required?", a: "Yes. Compliance is a governance responsibility." },
                                { q: "Is prior approval required for change in control?", a: "Yes. Prior regulatory approval is mandatory." },
                                { q: "Are changes in directors reportable?", a: "Yes. Immediate disclosure is required." },
                                { q: "Can DP change business model freely?", a: "No. Material changes require regulatory review." },
                                { q: "Can DP operations be suspended?", a: "Yes. Serious non-compliance can lead to suspension." },
                                { q: "Can registration be cancelled?", a: "Yes, in cases of persistent or grave violations." },
                                { q: "Are penalties imposed for lapses?", a: "Yes. Monetary and operational penalties may apply." },
                                { q: "What is the most common DP compliance failure?", a: "Weak grievance handling and poor record management." },
                                { q: "Does strong compliance improve investor confidence?", a: "Yes. Compliance builds trust." },
                                { q: "Is compliance costly for DPs?", a: "Compliance is an investment in stability." },
                                { q: "Can small DPs ignore compliance rigor?", a: "No. Regulations apply uniformly." },
                                { q: "Are compliance failures publicly visible?", a: "Yes. Regulatory actions affect reputation." },
                                { q: "Can good compliance reduce inspection risk?", a: "Yes. Structured compliance lowers regulatory exposure." },
                                { q: "Is DP compliance a one-time exercise?", a: "No. It is continuous." },
                                { q: "Are internal SOPs expected?", a: "Yes. SOPs demonstrate control maturity." },
                                { q: "Is staff training important for DP compliance?", a: "Yes. Awareness reduces operational errors." },
                                { q: "Can DP expand services after registration?", a: "Yes, subject to regulatory permissions." },
                                { q: "What is the safest compliance approach for DPs?", a: "Clear processes, regular reviews, and professional oversight." },
                                { q: "Why is DP compliance treated seriously by regulators?", a: "Because DPs safeguard investor securities and trust." }
                            ].map((faq, idx) => (
                                <details key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-cyan-600 transition-colors text-left">
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
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Strengthen Your DP Compliance</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Ensure operational discipline, audit readiness, and investor trust with our expert regulatory advisory services.
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
