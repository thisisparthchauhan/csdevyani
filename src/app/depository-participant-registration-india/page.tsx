import { Metadata } from 'next';
import {
    Shield, CheckCircle2, AlertTriangle, FileText, Database, Lock,
    Search, Calendar, Clock, BarChart3, Users, ChevronDown, ArrowRight,
    Briefcase, Award, TrendingUp, UserCheck, Globe, Building2, Scale,
    Wallet, Server, Key, Landmark
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Depository Participant Registration in India – A Complete Regulatory & Operational Guide',
    description: 'Depository Participant Registration in India explained with SEBI eligibility, capital requirements, registration process, fees, and post-registration scope under Depositories and Participants Regulations.',
    alternates: {
        canonical: '/depository-participant-registration-india',
    },
    keywords: 'Depository Participant Registration in India, SEBI DP Registration, Demat Account Service Provider, DP Net Worth Requirements, Form F SEBI',
};

export default function DPRegistration() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-amber-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-700/50 mb-6 animate-fade-in-up">
                            <Shield size={16} className="text-amber-400" />
                            <span className="text-xs font-bold text-amber-100 uppercase tracking-widest">SEBI Registration Service</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Depository Participant <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-none text-white">
                                Registration in India
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            Mandatory approval for entities intending to provide demat account services. Start your journey as a SEBI-registered Depository Participant (DP) with expert guidance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-all shadow-lg hover:shadow-amber-500/25">
                                Start Your Application
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
                            A <span className="text-amber-700 font-bold">Depository Participant (DP)</span> operates in a highly regulated ecosystem, handling investor securities and settlement services. Given the sensitivity, SEBI follows a strict eligibility and governance-based approach.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHAT IS A DP */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">What Is a Depository Participant (DP)?</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    A Depository Participant is an entity registered with SEBI and admitted by a depository (NSDL/CDSL), authorised to act as an interface between the depository and beneficial owners.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Open and maintain demat accounts",
                                        "Facilitate dematerialisation & rematerialisation",
                                        "Execute settlement-related instructions",
                                        "Act as a point of service for investors"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-700">
                                            <CheckCircle2 size={18} className="text-amber-600 mr-3 flex-shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Eligible Applicants</h3>
                                <div className="space-y-3">
                                    {[
                                        { icon: Building2, text: "Scheduled Commercial Banks" },
                                        { icon: Landmark, text: "Public Financial Institutions" },
                                        { icon: Briefcase, text: "Custodians registered with SEBI" },
                                        { icon: Scale, text: "Clearing Corporations / Houses" },
                                        { icon: TrendingUp, text: "Stock Brokers (Conditions apply)" },
                                        { icon: Users, text: "Certain NBFCs & RTAs" }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center p-3 bg-slate-50 rounded-lg">
                                            <item.icon size={20} className="text-slate-500 mr-3" />
                                            <span className="font-medium text-slate-700">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CRITERIA */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Eligibility Criteria</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Building2, title: "Constitution", desc: "Must be a legally recognised entity (Company, Bank, PFI). Individuals & Partnerships are NOT eligible." },
                                { icon: TrendingUp, title: "Net Worth", desc: "Stock Brokers: ₹3 Cr (Initial) → ₹5 Cr. RTAs: ₹10 Cr. NBFCs: ₹50 Lakh (Restricted)." },
                                { icon: UserCheck, title: "Fit & Proper", desc: "Applicant, Promoters, Directors & KMPs must have clean regulatory track record and financial integrity." },
                                { icon: Server, title: "Infrastructure", desc: "Secure IT systems, access controls, BCP/DR, and trained manpower are mandatory." }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-amber-600 mb-4 shadow-sm">
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

            {/* PROCESS */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-slate-900">Registration Process</h2>
                            <p className="text-slate-600 mt-2">Step-by-step roadmap to obtaining your DP license.</p>
                        </div>

                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-0.5 bg-slate-200 hidden md:block"></div>
                            <div className="space-y-12 relative">
                                {[
                                    { step: "01", title: "Application Through Depository", desc: "Submit Form F via NSDL/CDSL with infrastructure, net worth, and compliance disclosures." },
                                    { step: "02", title: "Depository Review", desc: "Depository examines eligibility, infrastructure readiness, and operational capability." },
                                    { step: "03", title: "SEBI Scrutiny", desc: "SEBI reviews the application, focuses on risk management, and may seek clarifications." },
                                    { step: "04", title: "Grant of Certificate", desc: "Upon satisfaction, SEBI grants the Certificate of Registration." }
                                ].map((item, idx) => (
                                    <div key={idx} className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                                        <div className="hidden md:block w-1/2"></div>
                                        <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-amber-600 border-4 border-white shadow-sm transform -translate-x-1/2 flex items-center justify-center text-white text-xs font-bold z-10">
                                            {idx + 1}
                                        </div>
                                        <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-10">
                                            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative hover:border-amber-200 transition-colors">
                                                <span className="absolute -left-12 md:hidden w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                                                    {item.step}
                                                </span>
                                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">How Devyani & Co. Supports You</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                At Devyani & Co., we approach DP Registration as a regulatory structuring and readiness exercise, not just a filing formality.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Eligibility assessment & category mapping",
                                    "Net worth planning and certification",
                                    "Infrastructure & systems readiness advisory",
                                    "Application drafting and depository coordination",
                                    "Pre-commencement compliance setup"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700">
                                        <CheckCircle2 size={18} className="text-amber-600 mr-3 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-amber-900 text-white rounded-2xl p-8 shadow-xl">
                            <h3 className="text-xl font-bold mb-4">Regulatory Expectation</h3>
                            <p className="mb-6 opacity-90 text-sm leading-relaxed">
                                "SEBI expects DPs to operate with strong internal controls, zero tolerance for asset misuse, and secure data handling from Day One."
                            </p>
                            <Link href="/contact" className="block w-full text-center bg-white text-amber-900 font-bold py-3 rounded-xl hover:bg-amber-50 transition-colors">
                                Get Registration Support
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
                            <h2 className="text-3xl font-bold text-slate-900">DP Registration – FAQs</h2>
                            <p className="text-slate-600 mt-2">Expert answers to common queries on becoming a Depository Participant.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "What is DP Registration?", a: "DP Registration is approval granted to an entity to act as a Depository Participant and provide demat account services to investors." },
                                { q: "Who regulates Depository Participants in India?", a: "Depository Participants are regulated by the Securities and Exchange Board of India in coordination with depositories." },
                                { q: "Is DP registration mandatory to open demat accounts?", a: "Yes. No entity can open or operate demat accounts without DP registration." },
                                { q: "What is the role of a Depository Participant?", a: "A DP acts as the interface between the depository and investors for holding and transferring securities in electronic form." },
                                { q: "Can a DP hold securities in its own name?", a: "No. Securities are held in the name of the beneficial owner." },
                                { q: "Who is eligible to apply for DP registration?", a: "Only SEBI-approved categories such as stock brokers, banks, RTAs, custodians, and certain NBFCs are eligible." },
                                { q: "Can an individual apply for DP registration?", a: "No. DP registration is granted only to eligible institutional entities." },
                                { q: "Can a partnership firm apply for DP registration?", a: "No. Partnership firms are not eligible." },
                                { q: "Can an LLP apply for DP registration?", a: "Generally no, unless specifically permitted under regulatory norms." },
                                { q: "Can a foreign entity apply for DP registration?", a: "Foreign entities must establish a compliant Indian entity to apply." },
                                { q: "Is minimum net worth required for DP registration?", a: "Yes. Minimum net worth depends on the category of applicant." },
                                { q: "What is the net worth requirement for stock broker DPs?", a: "Stock brokers must meet prescribed minimum net worth thresholds and enhancement timelines." },
                                { q: "Is net worth requirement a one-time condition?", a: "No. Net worth must be maintained continuously." },
                                { q: "Can borrowed funds be used to meet net worth?", a: "No. Net worth must consist of owned funds." },
                                { q: "Is CA certification required for net worth?", a: "Yes. Net worth must be certified by a Chartered Accountant." },
                                { q: "Is physical office infrastructure mandatory?", a: "Yes. Adequate office and operational infrastructure is required." },
                                { q: "Are IT systems mandatory for DP registration?", a: "Yes. Secure IT systems and connectivity with the depository are essential." },
                                { q: "Is disaster recovery setup required at registration stage?", a: "Yes. BCP and DR preparedness are evaluated." },
                                { q: "Is manpower strength evaluated by regulators?", a: "Yes. Adequate trained staff is required." },
                                { q: "Can infrastructure be outsourced?", a: "Certain functions may be outsourced, but responsibility remains with the DP." },
                                { q: "How is DP registration application made?", a: "Application is submitted to the depository in the prescribed format." },
                                { q: "Is the application submitted directly to SEBI?", a: "No. The application is routed through the depository." },
                                { q: "Is the application fee refundable?", a: "No. Application fee is non-refundable." },
                                { q: "Does SEBI seek clarifications during processing?", a: "Yes. SEBI may seek additional information or explanations." },
                                { q: "Can the application be rejected?", a: "Yes. If eligibility or readiness is inadequate." },
                                { q: "When is DP registration granted?", a: "After depository recommendation and SEBI approval." },
                                { q: "Is DP registration permanent?", a: "It remains valid unless suspended, cancelled, or surrendered." },
                                { q: "Can registration be surrendered voluntarily?", a: "Yes, subject to regulatory approval and exit compliance." },
                                { q: "Is renewal of registration required?", a: "No periodic renewal is required, but annual fees apply." },
                                { q: "Can registration be suspended?", a: "Yes. For serious regulatory violations." },
                                { q: "What activities can a registered DP undertake?", a: "Opening demat accounts, dematerialisation, rematerialisation, pledging, and settlement services." },
                                { q: "Can a DP offer trading services?", a: "Only if separately registered as a stock broker." },
                                { q: "Can DP handle corporate actions?", a: "Yes, as part of depository services." },
                                { q: "Can DP operate multiple branches?", a: "Yes, subject to approval and control systems." },
                                { q: "Can DP service both retail and institutional clients?", a: "Yes." },
                                { q: "Are DPs allowed to charge clients?", a: "Yes, as per approved fee structures." },
                                { q: "Are DP charges regulated?", a: "Yes. Charges must comply with prescribed limits and disclosures." },
                                { q: "Can DP revise charges?", a: "Yes, with proper disclosure and compliance." },
                                { q: "Are hidden charges permitted?", a: "No. Transparency is mandatory." },
                                { q: "Is DP required to display fee schedule?", a: "Yes. Fee transparency is required." },
                                { q: "Is appointment of Compliance Officer mandatory?", a: "Yes. A Compliance Officer is required." },
                                { q: "Are directors subject to fit and proper criteria?", a: "Yes. Continuous fit and proper status is mandatory." },
                                { q: "Is board oversight expected for DP operations?", a: "Yes. Governance oversight is essential." },
                                { q: "Are internal policies required at registration stage?", a: "Yes. SOPs and policies demonstrate operational readiness." },
                                { q: "Is client grievance mechanism mandatory?", a: "Yes. Even at registration stage, a grievance framework must exist." },
                                { q: "Is DP registration suitable for new businesses?", a: "Yes, if eligibility and infrastructure requirements are met." },
                                { q: "Is DP registration capital intensive?", a: "Yes. DP registration requires financial and operational strength." },
                                { q: "Can DP registration be converted into other SEBI registrations?", a: "No. Separate registrations are required." },
                                { q: "Is DP registration transferable?", a: "No. Registration is entity-specific." },
                                { q: "What is the biggest challenge in DP registration?", a: "Meeting infrastructure, net worth, and governance requirements together." },
                                { q: "What is the safest way to obtain DP registration?", a: "Proper regulatory planning, readiness assessment, and professional guidance." }
                            ].map((faq, idx) => (
                                <details key={idx} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-amber-600 transition-colors text-left">
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
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert DP Registration & Compliance</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Navigate SEBI and Depository regulations with confidence. We ensure your DP setup is inspection-ready from Day One.
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
