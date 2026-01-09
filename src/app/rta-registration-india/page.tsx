import { Metadata } from 'next';
import {
    Shield, CheckCircle2, AlertTriangle, FileText, Database, Lock,
    Search, Calendar, Clock, BarChart3, Users, ChevronDown, ArrowRight,
    Briefcase, Award, TrendingUp, UserCheck, Globe, Building2
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'RTA Registration in India – Registrar to an Issue and Share Transfer Agent',
    description: 'Comprehensive guide on RTA Registration in India. Eligibility, minimum net worth, application process, and SEBI regulations for Registrar to an Issue and Share Transfer Agents.',
    alternates: {
        canonical: '/rta-registration-india',
    },
    keywords: 'RTA Registration India, SEBI RTA Registration, Registrar to an Issue, Share Transfer Agent, SEBI Registration Process',
};

export default function RTARegistration() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-indigo-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-700/50 mb-6 animate-fade-in-up">
                            <Shield size={16} className="text-indigo-400" />
                            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">SEBI Registration</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            RTA Registration <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                                in India (SEBI)
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            Registrar to an Issue and Share Transfer Agent (RTA) is a foundational intermediary in the securities market. Registration is mandatory for maintaining investor records and supporting corporate actions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25">
                                Start Registration Process
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT IS RTA */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">What Does an RTA Do?</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    An RTA is entrusted with maintaining investor records, handling share transfers, and supporting issuers during corporate actions. SEBI regulation ensures they act as neutral record-keepers.
                                </p>
                                <div className="space-y-6">
                                    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                        <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                            <Briefcase size={20} className="text-indigo-600 mr-2" />
                                            Issue & Corporate Actions
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Work connected with public issues, open offers, buybacks, rights issues, and other corporate actions.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                                        <h3 className="font-bold text-slate-900 mb-2 flex items-center">
                                            <Users size={20} className="text-purple-600 mr-2" />
                                            Share Transfer & Records
                                        </h3>
                                        <p className="text-sm text-slate-600">
                                            Maintaining security holder records, handling transfers, transmission, and dematerialisation.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold mb-6">Why Registration Matters</h3>
                                <p className="text-indigo-100 mb-6">
                                    SEBI’s position is clear: no entity can carry on RTA activities unless it holds a valid registration certificate. This is foundational to investor protection.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Shield className="text-indigo-400 mr-3 mt-1" size={20} />
                                        <p className="text-sm">Mandatory for scale-up</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Award className="text-indigo-400 mr-3 mt-1" size={20} />
                                        <p className="text-sm">Builds investor trust</p>
                                    </div>
                                    <div className="flex items-start">
                                        <Globe className="text-indigo-400 mr-3 mt-1" size={20} />
                                        <p className="text-sm">Essential for GIFT City setups</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Eligibility Criteria</h2>
                        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                            SEBI evaluates whether the applicant is institutionally capable of performing sensitive functions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { icon: Building2, title: "Constitution", desc: "Must be a body corporate with clear governance." },
                                { icon: Database, title: "Infrastructure", desc: "Adequate office, secure systems, and manpower." },
                                { icon: UserCheck, title: "Fit & Proper", desc: "Directors/KMP must meet integrity criteria." },
                                { icon: Shield, title: "Governance", desc: "Compliance Officer + Audit Committee required." },
                                { icon: TrendingUp, title: "Net Worth", desc: "Minimum net worth of ₹50 lakh (maintained continuously)." },
                                { icon: Lock, title: "Data Security", desc: "Capability to handle sensitive investor data securely." },
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* REGISTRATION PROCESS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Registration Process – Step by Step</h2>
                        <div className="space-y-8">
                            {[
                                { step: "1", title: "Confirm Applicability", desc: "If activities fall within RTA functions, registration is mandatory. No exemption based on scale." },
                                { step: "2", title: "Application Filing", desc: "Submit application to SEBI in prescribed form with non-refundable fee." },
                                { step: "3", title: "SEBI Scrutiny", desc: "SEBI may seek clarifications or call for interaction. Tests preparedness, not just paperwork." },
                                { step: "4", title: "Eligibility Evaluation", desc: "Examination of infrastructure, governance, net worth, and fit & proper status." },
                                { step: "5", title: "Grant of Registration", desc: "Upon satisfaction and fee payment, Certificate of Registration is granted." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                                        {item.step}
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* POST REG & UNLISTED */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Post-Registration Reality</h2>
                            <p className="text-slate-600 mb-6">Registration is only the beginning. SEBI expects strictly disciplined operations.</p>
                            <ul className="space-y-3">
                                {[
                                    "Continuous Regulatory Compliance",
                                    "Prior Approval for Change in Control",
                                    "Mandatory Client Agreements",
                                    "Maintenance of Net Worth (Ongoing)",
                                    "21-Day Investor Grievance Resolution"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700 bg-white p-3 rounded-lg border border-slate-200">
                                        <CheckCircle2 size={16} className="text-indigo-600 mr-3 flex-shrink-0" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-indigo-900 text-white p-8 rounded-2xl shadow-xl">
                            <h2 className="text-2xl font-bold mb-6">Services to Unlisted Companies</h2>
                            <p className="text-indigo-200 mb-6 text-sm leading-relaxed">
                                SEBI permits RTAs to service unlisted companies, but strictly prohibits co-mingling with regulated activities.
                            </p>
                            <div className="bg-white/10 p-5 rounded-xl border border-white/20 mb-6">
                                <h4 className="font-bold text-white mb-2 text-sm">Mandatory Conditions:</h4>
                                <ul className="list-disc pl-5 space-y-2 text-xs text-indigo-100">
                                    <li>Separate and segregated business unit</li>
                                    <li>Appropriate disclaimers to clients</li>
                                    <li>Outside SEBI's direct regulatory jurisdiction</li>
                                </ul>
                            </div>
                            <Link href="/post-registration-compliance-for-rta" className="text-white text-sm font-bold underline hover:text-indigo-300">
                                View Compliance Calendar &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">RTA Registration – FAQs</h2>
                            <p className="text-slate-600 mt-2">Common questions about becoming a SEBI Registered RTA.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "What is RTA registration?", a: "RTA registration is SEBI approval granted to an entity to act as a Registrar to an Issue and Share Transfer Agent for listed companies and regulated market intermediaries." },
                                { q: "Who is an RTA in the securities market?", a: "An RTA is an intermediary responsible for maintaining investor records, handling share transfers, and supporting issuers during corporate actions and public issues." },
                                { q: "Is RTA registration mandatory in India?", a: "Yes. No entity can carry on RTA activities without obtaining registration from SEBI." },
                                { q: "Who regulates RTAs in India?", a: "RTAs are regulated by the Securities and Exchange Board of India." },
                                { q: "Can a company start RTA activities before registration?", a: "No. Carrying out RTA activities without registration is a regulatory violation." },
                                { q: "Who can apply for RTA registration?", a: "A body corporate with adequate infrastructure, governance framework, and financial strength can apply." },
                                { q: "Can individuals apply for RTA registration?", a: "No. RTA registration is granted only to body corporates." },
                                { q: "Is minimum net worth required for RTA registration?", a: "Yes. The applicant must have and maintain a minimum net worth of ₹50 lakh." },
                                { q: "Is net worth a one-time requirement?", a: "No. Net worth must be maintained on a continuous basis after registration." },
                                { q: "What is meant by \"fit and proper\" criteria for RTAs?", a: "It refers to integrity, financial soundness, reputation, and regulatory track record of promoters, directors, and key management." },
                                { q: "Is appointment of a Compliance Officer mandatory?", a: "Yes. Every RTA must appoint a Compliance Officer responsible for regulatory compliance." },
                                { q: "Is an Audit Committee required for RTA registration?", a: "Yes. SEBI expects a formal governance mechanism such as an Audit Committee or equivalent." },
                                { q: "Does SEBI verify infrastructure before granting registration?", a: "Yes. Infrastructure adequacy is a key consideration during application review." },
                                { q: "Are data security systems important for RTA approval?", a: "Yes. RTAs handle sensitive investor data and must demonstrate secure systems." },
                                { q: "Can infrastructure be outsourced?", a: "Certain support functions may be outsourced, but responsibility remains with the RTA." },
                                { q: "How is application for RTA registration made?", a: "The application is made to SEBI in the prescribed form along with the applicable fee." },
                                { q: "Is the application fee refundable if registration is rejected?", a: "No. The application fee is non-refundable." },
                                { q: "Can SEBI seek clarifications during the application process?", a: "Yes. SEBI may seek additional documents, explanations, or personal interaction." },
                                { q: "How long does RTA registration take?", a: "The timeline varies depending on completeness of documents and regulatory scrutiny." },
                                { q: "Can SEBI reject an RTA application?", a: "Yes. If eligibility or compliance readiness is not satisfactory, the application may be rejected." },
                                { q: "What services can a registered RTA provide?", a: "RTAs can handle issue-related services, share transfer activities, and investor record maintenance." },
                                { q: "Can RTAs service listed companies only?", a: "RTAs primarily service listed or proposed-to-be-listed companies." },
                                { q: "Can RTAs service mutual funds, PMS, or AIFs?", a: "Yes, RTAs may provide services to regulated intermediaries such as AMCs, PMS, and AIFs." },
                                { q: "Can RTAs provide services to unlisted companies?", a: "Yes, but only through a segregated business unit with appropriate disclaimers." },
                                { q: "Is segregation of unlisted activity mandatory?", a: "Yes. Segregation is a critical regulatory requirement." },
                                { q: "Is a written agreement with clients mandatory?", a: "Yes. RTAs must enter into a legally binding agreement with each client." },
                                { q: "Can an RTA change scope of services informally?", a: "No. Any change must be documented through agreement amendments." },
                                { q: "Are service-level commitments important?", a: "Yes. SLAs demonstrate operational discipline and accountability." },
                                { q: "Can RTAs subcontract core activities?", a: "Core regulatory functions should not be subcontracted without proper controls." },
                                { q: "Are RTAs responsible for investor grievance handling?", a: "Yes. RTAs play a direct role in investor grievance redressal." },
                                { q: "Does registration mean compliance obligations are over?", a: "No. Registration marks the beginning of continuous compliance obligations." },
                                { q: "Is SEBI approval required for change in control?", a: "Yes. Prior SEBI approval is mandatory for any change in control." },
                                { q: "Are changes in directors required to be intimated?", a: "Yes. Changes in directors or key management must be promptly disclosed." },
                                { q: "Can an RTA voluntarily surrender registration?", a: "Yes, subject to SEBI approval and completion of exit formalities." },
                                { q: "Can registration be suspended or cancelled?", a: "Yes. Persistent non-compliance can lead to suspension or cancellation." },
                                { q: "Is RTA registration suitable for new companies?", a: "Yes, provided they meet net worth, governance, and infrastructure requirements." },
                                { q: "Can an RTA operate from multiple locations?", a: "Yes, subject to proper systems and controls." },
                                { q: "Is GIFT City a suitable location for RTA setup?", a: "Yes. Many entities prefer GIFT City due to regulatory ecosystem and infrastructure." },
                                { q: "Can an RTA provide technology platforms to issuers?", a: "Yes, if aligned with regulatory responsibilities and data protection norms." },
                                { q: "Is experience in capital markets mandatory?", a: "While not mandatory, relevant experience strengthens the application." },
                                { q: "Are annual audits mandatory for RTAs?", a: "Yes. RTAs must undergo statutory audits and compliance reviews." },
                                { q: "Is client money handled by RTAs?", a: "RTAs primarily handle records and processes, not client funds." },
                                { q: "Can RTAs charge fees freely?", a: "Fees must be reasonable and governed by client agreements." },
                                { q: "Is professional indemnity insurance required?", a: "While not always mandatory, it is considered good governance practice." },
                                { q: "Can an RTA expand services after registration?", a: "Yes, provided expansion remains within regulatory boundaries." },
                                { q: "Does RTA registration add credibility to a company?", a: "Yes. SEBI registration significantly enhances market credibility." },
                                { q: "Is RTA registration renewable?", a: "Registration remains valid unless suspended or cancelled." },
                                { q: "Can an RTA convert into another SEBI intermediary?", a: "Separate registration is required for other intermediary roles." },
                                { q: "Is RTA registration transferable?", a: "No. Registration is entity-specific and non-transferable." },
                                { q: "What is the biggest regulatory risk for RTAs?", a: "Weak grievance handling, poor segregation, and inadequate governance controls." },
                                { q: "What is the safest approach to RTA registration?", a: "Strong compliance framework, clear documentation, and professional regulatory guidance." }
                            ].map((faq, idx) => (
                                <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Planning to Setup an RTA Business?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Devyani & Co. assists new applicants with eligibility assessment, infrastructure planning, and end-to-end SEBI registration filing.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-white/20">
                                Contact for Registration
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="/post-registration-compliance-for-rta" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                                View Compliance Requirements
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
