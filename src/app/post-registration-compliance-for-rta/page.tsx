import { Metadata } from 'next';
import {
    Shield, CheckCircle2, AlertTriangle, FileText, Database, Lock,
    Search, Calendar, Clock, BarChart3, Users, ChevronDown, ArrowRight,
    Briefcase, Award, TrendingUp, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Post-Registration Compliance & Reporting for RTAs in India',
    description: 'Ongoing compliance obligations for SEBI Registered Registrar to an Issue and Share Transfer Agents (RTAs). Net worth, grievance redressal, records, and calendar.',
    alternates: {
        canonical: '/post-registration-compliance-for-rta',
    },
    keywords: 'SEBI RTA Compliance, RTA Registration, Registrar to an Issue Compliance, Share Transfer Agent Regulations, SEBI RTA Audit',
};

export default function RTACompliance() {
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
                            <span className="text-xs font-bold text-emerald-100 uppercase tracking-widest">Ongoing Compliance</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Post-Registration Compliance <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                                for RTAs in India
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            Once an entity obtains RTA Registration in India, SEBI expects strict adherence to regulations. Compliance is not periodic or optional; it is ongoing, auditable, and enforceable.
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

            {/* CORE OBLIGATIONS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Ongoing Compliance Obligations</h2>
                            <p className="text-slate-600 max-w-3xl mx-auto">
                                Registration gives authority to operate; compliance determines continuity. Most regulatory actions arise due to weak internal controls after registration.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                { title: "General Obligations", items: ["Comply with all SEBI laws & circulars", "Follow registration conditions", "Ensure institutional integrity & neutrality"] },
                                { title: "Minimum Net Worth", items: ["Maintain ₹50 lakh net worth at all times", "Restore erosion immediately", "Prepare periodic net worth statements"] },
                                { title: "Grievance Redressal", items: ["Formal redressal system in place", "Resolve complaints within 21 days", "Track and record every complaint"] },
                                { title: "Client Agreements", items: ["Binding written agreements with all clients", "Define scope, liability, and confidentiality", "Clear escalation mechanism"] },
                            ].map((card, idx) => (
                                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                                    <ul className="space-y-3">
                                        {card.items.map((item, i) => (
                                            <li key={i} className="flex items-start text-slate-700">
                                                <CheckCircle2 size={18} className="text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CRITICAL SECTIONS */}
            <section className="py-16 md:py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Critical Operational Requirements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                            {/* Change In Control */}
                            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                                <Users size={32} className="text-blue-400 mb-6" />
                                <h3 className="text-xl font-bold mb-4">Change in Control</h3>
                                <div className="space-y-4 text-sm text-slate-300">
                                    <div>
                                        <p className="font-semibold text-white mb-1">Prior SEBI Approval For:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Change in shareholding or control</li>
                                            <li>Merger, demerger, or restructuring</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white mb-1">Immediate Intimation For:</p>
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Change in directors/Compliance Officer</li>
                                            <li>Material information changes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Segregation */}
                            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                                <Database size={32} className="text-emerald-400 mb-6" />
                                <h3 className="text-xl font-bold mb-4">Segregation of Services</h3>
                                <p className="text-slate-300 text-sm mb-4">
                                    If providing services to unlisted companies:
                                </p>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="text-emerald-500 mr-2 mt-0.5" />
                                        Operations through segregated business unit
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="text-emerald-500 mr-2 mt-0.5" />
                                        Clear demarcation of staff & systems
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="text-emerald-500 mr-2 mt-0.5" />
                                        Explicit disclaimer to unlisted clients
                                    </li>
                                </ul>
                            </div>

                            {/* Records & Privacy */}
                            <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                                <Lock size={32} className="text-purple-400 mb-6" />
                                <h3 className="text-xl font-bold mb-4">Records & Data Privacy</h3>
                                <ul className="space-y-2 text-sm text-slate-300 mb-4">
                                    <li>• Maintain investor master data & transfer records</li>
                                    <li>• Preserve correspondence & audit reports</li>
                                    <li>• Ensure strict confidentiality & strict access controls</li>
                                    <li>• Secure storage and backups</li>
                                </ul>
                                <p className="text-xs text-red-300 font-semibold mt-4">
                                    Data mishandling is viewed as a serious breach of trust.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* COMPLIANCE CALENDAR */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center justify-center space-x-3 mb-12">
                            <Calendar size={32} className="text-emerald-600" />
                            <h2 className="text-3xl font-bold text-slate-900 text-center">RTA Compliance Calendar</h2>
                        </div>

                        <div className="space-y-6">
                            {/* Monthly */}
                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-emerald-800 mb-3 flex items-center">
                                    <Clock size={20} className="mr-2" /> Monthly Compliance
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded-lg border border-emerald-100 text-sm font-medium text-slate-700">Investor Grievances – Review & ensure 21-day closure</div>
                                    <div className="bg-white p-3 rounded-lg border border-emerald-100 text-sm font-medium text-slate-700">Order Complaint Register – Update status & escalations</div>
                                    <div className="bg-white p-3 rounded-lg border border-emerald-100 text-sm font-medium text-slate-700">Data Integrity – Check accuracy of investor master data</div>
                                    <div className="bg-white p-3 rounded-lg border border-emerald-100 text-sm font-medium text-slate-700">Internal MIS – Prepare internal compliance MIS</div>
                                </div>
                            </div>

                            {/* Quarterly */}
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                                    <BarChart3 size={20} className="mr-2" /> Quarterly Compliance
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded-lg border border-blue-100 text-sm font-medium text-slate-700">Net Worth – Prepare quarterly net worth statement</div>
                                    <div className="bg-white p-3 rounded-lg border border-blue-100 text-sm font-medium text-slate-700">Governance Review – Compliance status review meeting</div>
                                    <div className="bg-white p-3 rounded-lg border border-blue-100 text-sm font-medium text-slate-700">Record Maintenance – Verify completeness and backups</div>
                                    <div className="bg-white p-3 rounded-lg border border-blue-100 text-sm font-medium text-slate-700">Board Reporting – Submit compliance summary</div>
                                </div>
                            </div>

                            {/* Half-Yearly */}
                            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center">
                                    <Shield size={20} className="mr-2" /> Half-Yearly Compliance
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded-lg border border-purple-100 text-sm font-medium text-slate-700">Internal Compliance Review – Evaluate SEBI adherence</div>
                                    <div className="bg-white p-3 rounded-lg border border-purple-100 text-sm font-medium text-slate-700">Segregation Audit – Review unlisted vs regulated activities</div>
                                    <div className="bg-white p-3 rounded-lg border border-purple-100 text-sm font-medium text-slate-700">Grievance Trend Analysis – Analyse complaint patterns</div>
                                    <div className="bg-white p-3 rounded-lg border border-purple-100 text-sm font-medium text-slate-700">IT Resilience – Review data backup and disaster recovery</div>
                                </div>
                            </div>

                            {/* Annual */}
                            <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-amber-800 mb-3 flex items-center">
                                    <Award size={20} className="mr-2" /> Annual Compliance
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white p-3 rounded-lg border border-amber-100 text-sm font-medium text-slate-700">Statutory Audit – Finalise audited financial statements</div>
                                    <div className="bg-white p-3 rounded-lg border border-amber-100 text-sm font-medium text-slate-700">Net Worth Certification – Obtain annual certificate</div>
                                    <div className="bg-white p-3 rounded-lg border border-amber-100 text-sm font-medium text-slate-700">Inspection Readiness – Conduct mock inspection</div>
                                    <div className="bg-white p-3 rounded-lg border border-amber-100 text-sm font-medium text-slate-700">Compliance Training – Annual staff compliance training</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSPECTIONS & GAPS */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Inspections & Regulatory Interaction</h2>
                            <p className="text-slate-600 mb-6">
                                SEBI may conduct routine, cause-based, or thematic inspections. RTAs must cooperate fully and implement corrective actions.
                            </p>
                            <div className="bg-white border-l-4 border-red-500 p-6 shadow-sm">
                                <p className="font-bold text-slate-800 mb-2">Non-cooperation is a violation.</p>
                                <p className="text-sm text-slate-600">Ensure records and explanations are provided promptly to inspecting officials.</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Compliance Gaps</h2>
                            <ul className="space-y-4">
                                {[
                                    "Delayed grievance resolution",
                                    "Weak segregation of unlisted activities",
                                    "Inadequate documentation of controls",
                                    "Informal handling of change-related disclosures",
                                    "Over-reliance on operational staff without oversight"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700 rounded-lg bg-white p-3 border border-slate-200">
                                        <AlertCircle size={18} className="text-red-500 mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">FAQs – RTA Compliance & Reporting</h2>
                            <p className="text-slate-600 mt-2">Expert answers to common RTA compliance queries.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "Is compliance mandatory after RTA registration?", a: "Yes. Registration is only the starting point. Continuous compliance is mandatory throughout the life of the registration." },
                                { q: "Who is responsible for RTA compliance internally?", a: "The Compliance Officer has primary responsibility, with oversight from senior management and the Board." },
                                { q: "Can compliance be handled informally?", a: "No. SEBI expects structured, documented, and auditable compliance processes." },
                                { q: "Is minimum net worth a one-time requirement?", a: "No. The minimum net worth must be maintained at all times." },
                                { q: "What happens if net worth falls below the prescribed level?", a: "The deficiency must be restored immediately; failure may lead to regulatory action." },
                                { q: "Is periodic net worth reporting required?", a: "Yes. Net worth statements must be prepared and kept ready for review." },
                                { q: "What is the grievance resolution timeline for RTAs?", a: "Complaints must be resolved within 21 calendar days." },
                                { q: "Are verbal complaints considered valid?", a: "Yes. All complaints, regardless of mode, must be recorded and addressed." },
                                { q: "Is escalation mandatory for unresolved complaints?", a: "Yes. Delays must be escalated internally and reported where required." },
                                { q: "Is a written agreement with each client mandatory?", a: "Yes. Services cannot be rendered without a legally binding agreement." },
                                { q: "Can RTAs change scope of services without agreement amendment?", a: "No. Scope changes must be formally documented." },
                                { q: "Are SLAs important from a compliance perspective?", a: "Yes. SLAs demonstrate accountability and service discipline." },
                                { q: "Does change in directors require SEBI intimation?", a: "Yes. Immediate disclosure is required." },
                                { q: "Is prior approval needed for change in control?", a: "Yes. Prior SEBI approval is mandatory." },
                                { q: "Can operations continue during approval process?", a: "Only as permitted; non-compliance risks suspension." },
                                { q: "Can RTAs service unlisted companies?", a: "Yes, but only through a separate, segregated business unit." },
                                { q: "Is disclaimer mandatory for unlisted services?", a: "Yes. Clients must be informed that such services are not SEBI-regulated." },
                                { q: "Is segregation reviewed during inspection?", a: "Yes. This is a key inspection focus area." },
                                { q: "What records must RTAs maintain?", a: "Investor data, transaction records, correspondence, financials, and audit reports." },
                                { q: "For how long must records be preserved?", a: "As per prescribed retention timelines; records must be retrievable." },
                                { q: "Are electronic records permitted?", a: "Yes, if secure and tamper-proof." },
                                { q: "Is investor data confidentiality mandatory?", a: "Yes. RTAs handle sensitive information and must protect it." },
                                { q: "Can investor data be shared with third parties?", a: "Only where legally permitted or contractually authorised." },
                                { q: "Can SEBI inspect an RTA without prior notice?", a: "Yes. Inspections may be announced or unannounced." },
                                { q: "What happens during an inspection?", a: "SEBI reviews records, systems, grievance handling, and governance controls." },
                                { q: "Are inspection observations binding?", a: "Yes. Corrective actions must be implemented within timelines." },
                                { q: "Is Board oversight required for RTA compliance?", a: "Yes. Compliance is a governance responsibility." },
                                { q: "Is Audit Committee involvement expected?", a: "Yes, especially for compliance monitoring and internal controls." },
                                { q: "Are periodic compliance reports required?", a: "Yes. Internal and regulatory reporting is expected." },
                                { q: "Must false or incorrect submissions be corrected?", a: "Yes. Immediate disclosure is mandatory." },
                                { q: "Are data backups mandatory?", a: "Yes. Business continuity depends on secure backups." },
                                { q: "Is disaster recovery planning expected?", a: "Yes. Especially for electronic record management." },
                                { q: "Can RTAs reject investor requests casually?", a: "No. Rejections must be justified and documented." },
                                { q: "Are timelines critical in RTA operations?", a: "Yes. Delays invite regulatory scrutiny." },
                                { q: "Is compliance training for staff required?", a: "Yes. Staff must understand regulatory responsibilities." },
                                { q: "Can compliance be outsourced?", a: "Certain functions may be outsourced, but accountability remains with the RTA." },
                                { q: "Can registration be suspended for non-compliance?", a: "Yes. Persistent failures may lead to suspension or cancellation." },
                                { q: "Are penalties imposed for compliance lapses?", a: "Yes. Monetary and operational penalties may apply." },
                                { q: "What is the most common compliance failure for RTAs?", a: "Delayed grievance resolution and weak segregation controls." },
                                { q: "Does SEBI consider intent while enforcing compliance?", a: "SEBI focuses on outcome and systemic control failures." },
                                { q: "Can compliance lapses affect future expansion plans?", a: "Yes. Regulatory history matters." },
                                { q: "Is documentation more important than verbal explanations?", a: "Yes. SEBI relies on documented evidence." },
                                { q: "Are internal SOPs expected?", a: "Yes. SOPs demonstrate compliance maturity." },
                                { q: "Should compliance be reviewed periodically?", a: "Yes. Continuous review is best practice." },
                                { q: "Are RTAs expected to ensure continuity of operations?", a: "Yes. Data integrity and service continuity are critical." },
                                { q: "Is compliance expensive for RTAs?", a: "Compliance is an investment in regulatory stability." },
                                { q: "Can small RTAs ignore compliance rigor?", a: "No. Regulations apply uniformly." },
                                { q: "Is compliance a legal risk or business risk?", a: "Both. Non-compliance affects reputation and operations." },
                                { q: "Can good compliance attract better clients?", a: "Yes. Issuers prefer compliant RTAs." },
                                { q: "What is the safest compliance approach for RTAs?", a: "Structured processes, regular reviews, and professional oversight." },
                                { q: "Why is RTA compliance treated seriously by SEBI?", a: "Because RTAs directly handle investor records and trust." }
                            ].map((faq, idx) => (
                                <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
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

            {/* SUPPORT CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-emerald-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-700/50 mb-6">
                            <Briefcase size={16} className="text-emerald-400" />
                            <span className="text-xs font-bold text-emerald-100 uppercase tracking-widest">Ongoing Support</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Practical Compliance Approach by Devyani & Co.</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            We assist RTAs with post-registration framework design, grievance SOPs, inspection preparedness, and ongoing advisory.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-white/20">
                                Get Expert Support
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
