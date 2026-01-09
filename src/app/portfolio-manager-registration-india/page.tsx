import { Metadata } from 'next';
import {
    Shield, CheckCircle2, AlertTriangle, FileText, Database, Lock,
    Search, Calendar, Clock, BarChart3, Users, ChevronDown, ArrowRight,
    Briefcase, Award, TrendingUp, UserCheck, Globe, Building2, Scale,
    Wallet
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Portfolio Manager Registration in India – A Clear, Compliant & Strategic Guide',
    description: 'Portfolio Manager Registration in India explained in a clear, regulation-aligned manner. Understand eligibility, net worth, process, fees, and operational readiness under SEBI PMS Regulations.',
    alternates: {
        canonical: '/portfolio-manager-registration-india',
    },
    keywords: 'Portfolio Manager Registration in India, SEBI PMS Registration, PMS Net Worth Requirements, Portfolio Management Services India, SEBI Registered Portfolio Manager',
};

export default function PMSRegistration() {
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
                            Portfolio Manager Registration <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">
                                in India
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            A mandatory SEBI approval for entities intending to manage client portfolios. PMS is a high-responsibility, high-trust fiduciary activity.
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

            {/* INTRO */}
            <section className="bg-white border-b border-slate-100 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-slate-700 text-lg font-medium leading-relaxed">
                            This registration is designed for <span className="text-indigo-700 font-bold">serious market participants</span> intending to build a long-term, regulated investment management business. A registered Portfolio Manager does not merely advise — it assumes fiduciary responsibility.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHO SHOULD APPLY */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Should Apply?</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                PMS registration is suitable for entities looking to offer discretionary or non-discretionary portfolio management services.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Investment professionals seeking to manage client wealth",
                                    "Asset managers targeting HNI and accredited investors",
                                    "Fund managers transitioning from advisory or AIF structures",
                                    "Institutions setting up India-based or GIFT City PMS platforms"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-slate-700">
                                        <CheckCircle2 size={18} className="text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">What Is a Portfolio Manager?</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                A body corporate that manages or administers a portfolio of securities or funds on behalf of clients, under a written agreement.
                            </p>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                    <h4 className="font-bold text-indigo-900 mb-1">Discretionary PMS</h4>
                                    <p className="text-xs text-slate-500">Decisions taken by the Portfolio Manager.</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                    <h4 className="font-bold text-indigo-900 mb-1">Non-Discretionary PMS</h4>
                                    <p className="text-xs text-slate-500">Decisions executed based on client instructions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY & NET WORTH */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">Eligibility Criteria</h2>
                            <p className="text-slate-600 mt-2">SEBI evaluates both institutional capability and individual competence.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {/* Constitution */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">1. Constitution</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Must be a Body Corporate. Individuals, partnerships, or proprietorships are <span className="text-red-500 font-bold">not eligible</span>.
                                </p>
                            </div>

                            {/* Net Worth */}
                            <div className="bg-indigo-900 text-white p-6 rounded-2xl shadow-xl transform md:-translate-y-4">
                                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-indigo-200 mb-4">
                                    <Wallet size={24} />
                                </div>
                                <h3 className="text-lg font-bold mb-2">2. Minimum Net Worth</h3>
                                <div className="text-3xl font-extrabold text-white mb-2">₹5 Crore</div>
                                <p className="text-xs text-indigo-200 leading-relaxed opacity-90">
                                    Must be maintained at all times. Certified by a Chartered Accountant. Not a one-time condition.
                                </p>
                            </div>

                            {/* Principal Officer */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                                    <UserCheck size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">3. Principal Officer</h3>
                                <p className="text-sm text-slate-600 leading-relaxed mb-2">
                                    Professional qualification (Finance/Law/CA/MBA) + 5 Years Exp + NISM PMS Certification.
                                </p>
                            </div>

                            {/* Compliance Officer */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                    <Shield size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">4. Compliance Officer</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Designated officer responsible for regulatory compliance and SEBI reporting.
                                </p>
                            </div>

                            {/* Infrastructure */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">5. Infrastructure</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Adequate office, IT systems, and manpower to handle portfolio management activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Registration Process</h2>
                        <div className="space-y-6">
                            {[
                                { step: "Step 1", title: "Readiness Assessment", desc: "Detailed evaluation of net worth, personnel qualifications, governance framework, and operational readiness." },
                                { step: "Step 2", title: "Application Filing", desc: "Online submission via SEBI Intermediary Portal (Form A) with support docs and fee payment." },
                                { step: "Step 3", title: "SEBI Review & Clarifications", desc: "SEBI may seek additional info, explanations, or meetings. Tests seriousness and compliance mindset." },
                                { step: "Step 4", title: "Grant of Registration", desc: "Upon satisfaction, Registration Certificate is issued. Valid unless suspended/cancelled." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-indigo-200 transition-colors">
                                    <div className="flex-shrink-0 w-16 text-indigo-600 font-bold">{item.step}</div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PERMITTED ACTIVITIES */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-10">What a Registered PMS Can Do</h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            {[
                                "Onboard eligible clients",
                                "Manage discretionary/non-discretionary portfolios",
                                "Invest across permitted securities",
                                "Charge management & performance fees",
                                "Disclose & benchmark performance"
                            ].map((item, idx) => (
                                <span key={idx} className="inline-block bg-white px-5 py-3 rounded-full border border-slate-200 text-slate-700 font-medium text-sm shadow-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100 inline-block text-left w-full max-w-2xl">
                            <h4 className="flex items-center text-indigo-900 font-bold mb-2">
                                <Database size={18} className="mr-2" />
                                Continuous Supervision
                            </h4>
                            <p className="text-sm text-slate-600">
                                Registration confers authority; compliance sustains legitimacy. SEBI expects strong fiduciary responsibility from day one.
                            </p>
                            <div className="mt-4 pt-4 border-t border-indigo-100">
                                <Link href="/pms-compliance-obligations" className="text-indigo-600 text-sm font-bold flex items-center hover:underline">
                                    View Post-Registration Compliance Guide <ArrowRight size={14} className="ml-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">PMS Registration – FAQs</h2>
                            <p className="text-slate-600 mt-2">Expert answers to common queries on Portfolio Manager Registration.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "What is PMS registration?", a: "PMS registration is approval granted by SEBI to an entity to manage client portfolios of securities or funds under a formal portfolio management arrangement." },
                                { q: "Who regulates Portfolio Managers in India?", a: "Portfolio Managers are regulated by the Securities and Exchange Board of India." },
                                { q: "Is PMS registration mandatory?", a: "Yes. Any entity managing client portfolios for consideration must obtain PMS registration from SEBI." },
                                { q: "Can PMS operate without SEBI registration?", a: "No. Operating without registration is a serious regulatory violation." },
                                { q: "What is the core role of a Portfolio Manager?", a: "A Portfolio Manager manages investments on behalf of clients and acts as a fiduciary." },
                                { q: "Who is eligible to apply for PMS registration?", a: "Only a body corporate is eligible to apply for PMS registration." },
                                { q: "Can individuals apply for PMS registration?", a: "No. Individuals, proprietorships, or partnerships are not eligible." },
                                { q: "Can an LLP apply for PMS registration?", a: "No. PMS registration is granted only to companies." },
                                { q: "Can a foreign company apply for PMS registration in India?", a: "Foreign entities must establish an eligible Indian entity to apply." },
                                { q: "Is prior experience in capital markets mandatory?", a: "Yes. SEBI expects relevant experience at the management level." },
                                { q: "What is the minimum net worth required for PMS registration?", a: "A minimum net worth of ₹5 crore is mandatory." },
                                { q: "Is net worth requirement a one-time condition?", a: "No. The net worth must be maintained at all times." },
                                { q: "How is net worth calculated for PMS?", a: "Net worth includes paid-up capital and free reserves, excluding revaluation reserves." },
                                { q: "Can borrowed funds be used to meet net worth?", a: "No. Net worth must be owned funds." },
                                { q: "Is net worth certification required?", a: "Yes. Net worth must be certified by a Chartered Accountant." },
                                { q: "Who is a Principal Officer in PMS?", a: "The Principal Officer is responsible for investment decisions and regulatory compliance." },
                                { q: "Is qualification mandatory for Principal Officer?", a: "Yes. Professional qualification and relevant experience are required." },
                                { q: "Is NISM certification mandatory for PMS?", a: "Yes. The Principal Officer must hold the prescribed NISM certification." },
                                { q: "Is a Compliance Officer mandatory?", a: "Yes. Appointment of a Compliance Officer is compulsory." },
                                { q: "Can the same person be Principal Officer and Compliance Officer?", a: "Generally discouraged; segregation of roles is preferred." },
                                { q: "How is PMS registration application filed?", a: "The application is filed through SEBI’s intermediary portal in the prescribed form." },
                                { q: "Is the application fee refundable?", a: "No. The application fee is non-refundable." },
                                { q: "Does SEBI ask for clarifications during processing?", a: "Yes. SEBI may seek explanations, documents, or meetings." },
                                { q: "How long does PMS registration take?", a: "Timelines vary based on completeness and regulatory review." },
                                { q: "Can SEBI reject a PMS application?", a: "Yes. Applications not meeting regulatory expectations may be rejected." },
                                { q: "What services can a registered PMS provide?", a: "Managing discretionary or non-discretionary portfolios of eligible clients." },
                                { q: "Can PMS provide investment advisory services?", a: "Yes, but within PMS regulatory framework and disclosures." },
                                { q: "Can PMS manage client funds directly?", a: "PMS manages portfolios, not pooled funds like mutual funds." },
                                { q: "Can PMS guarantee returns?", a: "No. Guaranteeing returns is strictly prohibited." },
                                { q: "Can PMS manage portfolios of retail investors?", a: "Only clients meeting prescribed minimum investment thresholds can be onboarded." },
                                { q: "Is a written agreement with clients mandatory?", a: "Yes. A Portfolio Management Agreement must be executed." },
                                { q: "Is minimum investment required from PMS clients?", a: "Yes. SEBI prescribes a minimum investment threshold." },
                                { q: "Is risk profiling mandatory for PMS clients?", a: "Yes. Client suitability must be assessed and documented." },
                                { q: "Can PMS onboard clients without KYC?", a: "No. KYC compliance is mandatory." },
                                { q: "Can PMS change client mandate later?", a: "Yes, with client consent and proper documentation." },
                                { q: "Can PMS charge management fees?", a: "Yes. Fees must be disclosed and agreed contractually." },
                                { q: "Can PMS charge performance fees?", a: "Yes, subject to regulatory conditions and disclosures." },
                                { q: "Are hidden charges allowed in PMS?", a: "No. All charges must be transparently disclosed." },
                                { q: "Can PMS revise fees during the term?", a: "Only with client consent and proper documentation." },
                                { q: "Is fee sharing with distributors allowed?", a: "Only within regulatory framework and disclosures." },
                                { q: "Does PMS registration involve ongoing compliance?", a: "Yes. PMS entities are continuously regulated." },
                                { q: "Is SEBI inspection applicable to PMS?", a: "Yes. PMS entities are subject to regulatory inspections." },
                                { q: "Can PMS registration be suspended?", a: "Yes. Serious non-compliance may lead to suspension or cancellation." },
                                { q: "Is change in control allowed after registration?", a: "Yes, but only with prior SEBI approval." },
                                { q: "Are changes in directors required to be reported?", a: "Yes. Key changes must be disclosed to SEBI." },
                                { q: "Is PMS registration suitable for fund managers?", a: "Yes. PMS is a preferred structure for HNI-focused fund managers." },
                                { q: "Can PMS be operated from GIFT City?", a: "Yes, subject to applicable regulatory framework." },
                                { q: "Can PMS convert into an AIF later?", a: "Yes, but separate registration is required." },
                                { q: "Is PMS registration transferable?", a: "No. Registration is entity-specific and non-transferable." },
                                { q: "Is PMS registration permanent?", a: "Registration remains valid unless suspended, cancelled, or surrendered." },
                                { q: "What is the biggest challenge in PMS registration?", a: "Meeting net worth, governance, and compliance expectations together." },
                                { q: "What is the safest approach for PMS registration?", a: "Strong compliance planning, experienced professionals, and regulatory-aligned structuring." }
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Planning to Setup a PMS?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            We assist with eligibility analysis, net worth certification, application drafting, and SEBI interactions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-white/20">
                                Start Your Application
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="/pms-compliance-obligations" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                                View Compliance Requirements
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
