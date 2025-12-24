import { Metadata } from 'next';
import { ShieldCheck, BookOpen, UserCheck, GraduationCap, Building2, Banknote, FileText, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Investment Adviser Registration in India – Eligibility, Process & SEBI Requirements Explained',
    description: 'Investment Adviser Registration in India under SEBI regulations. Understand eligibility, registration process, capital requirements, government fees, and scope of activities after registration.',
    alternates: {
        canonical: '/investment-adviser-registration-india',
    },
};

export default function InvestmentAdviserRegistration() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HER0 SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[var(--brand-secondary)]/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-700/50 mb-6 animate-fade-in-up">
                            <ShieldCheck size={16} className="text-[var(--brand-secondary)]" />
                            <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">SEBI Regulation</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Investment Adviser <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-secondary)] to-amber-300">
                                Registration in India
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                            Mandatory compliance for personalised investment advice. Understand eligibility, process, and SEBI requirements to build a trusted advisory practice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--brand-secondary)] text-white font-bold rounded-xl hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/25">
                                Start Registration
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="#process" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                View Process
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">What Is an Investment Adviser?</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                An Investment Adviser is a person or entity that, for a fee or consideration, provides advice relating to investing, buying, selling, or dealing in securities, or offers financial planning and portfolio advice tailored to a client’s financial situation and risk profile.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                                    <BookOpen size={20} className="mr-2 text-[var(--brand-secondary)]" />
                                    Scope of Advisory
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "Personalised investment recommendations",
                                        "Portfolio-level advice",
                                        "Financial planning linked to securities",
                                        "Advice delivered through meetings, calls, written communication, or digital platforms"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <CheckCircle2 size={18} className="mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm text-slate-500 italic">
                                * General market commentary or publicly available information does not qualify as investment advice under SEBI regulations.
                            </p>
                        </div>
                        <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-bold mb-6">Who Needs Registration?</h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Individual offering paid investment advice",
                                    "Company, LLP, or partnership firm advising clients",
                                    "Fintech platform providing personalised advisory",
                                    "Professional transitioning to regulated practice",
                                    "Business charging fees distinct from commissions"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-200">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0 text-[var(--brand-secondary)] font-bold">
                                            {idx + 1}
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <div className="flex items-start bg-amber-500/10 p-4 rounded-xl border border-amber-500/20">
                                    <AlertCircle size={20} className="text-amber-400 mr-3 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-200">
                                        Any person holding themselves out as an “Investment Adviser”, “Wealth Adviser”, or similar designation must be registered with SEBI.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY TRACKS */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-[var(--brand-secondary)] font-bold uppercase tracking-wider text-xs">Prerequisites</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Eligibility Criteria</h2>
                        <p className="text-slate-600 mt-4">Ensuring you are fit to advise.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <GraduationCap size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Qualifications</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                                    Graduate degree or equivalent from recognised university
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                                    Valid NISM certification relevant to investment advisory
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5"></span>
                                    Ongoing certification continuity
                                </li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                <Banknote size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Capital Adequacy</h3>
                            <p className="text-sm text-slate-600 mb-4">SEBI has shifted to a deposit-based framework to ensure seriousness.</p>
                            <div className="space-y-3">
                                <div className="bg-slate-50 p-3 rounded-lg">
                                    <span className="block text-xs font-bold text-slate-500 uppercase">Individual</span>
                                    <span className="text-sm font-semibold text-slate-800">Prescribed regulatory deposit</span>
                                </div>
                                <div className="bg-slate-50 p-3 rounded-lg">
                                    <span className="block text-xs font-bold text-slate-500 uppercase">Non-Individual</span>
                                    <span className="text-sm font-semibold text-slate-800">Higher regulatory deposit</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                <Building2 size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Infrastructure</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                                    Adequate office infrastructure
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                                    Compliance systems & documentation
                                </li>
                                <li className="flex items-start">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                                    Secure record-keeping & data protection
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section id="process" className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Registration Process</h2>
                        <p className="text-slate-600 mt-2">A structured approach to obtaining your license.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-1 bg-slate-100 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { title: "Structuring", desc: "Choose between Individual or Non-Individual entity structure." },
                                { title: "Documentation", desc: "Prepare Form A, qualifications, and infrastructure proofs." },
                                { title: "Application", desc: "Submit online details and pay non-refundable fees." },
                                { title: "Approval", desc: "SEBI evaluates eligibility and grants certificate." }
                            ].map((step, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-white border-4 border-[var(--brand-secondary)] text-[var(--brand-secondary)] rounded-full flex items-center justify-center font-bold text-xl shadow-lg mb-6">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-500">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT YOU CAN DO */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">What Can You Do After Registration?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            "Provide fee-based investment advisory services",
                            "Offer personalised portfolio advice",
                            "Conduct structured financial planning",
                            "Advise retail and accredited investors",
                            "Operate advisory models with regulatory confidence",
                            "Build scalable advisory platforms"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center text-left">
                                <CheckCircle2 className="text-[var(--brand-secondary)] mr-4 flex-shrink-0" />
                                <span className="font-medium text-slate-200">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-blue-900/30 border border-blue-500/30 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm">
                        <p className="font-semibold text-blue-200">
                            "Strict segregation between advisory and distribution activities must be maintained."
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        <p className="text-slate-600 mt-2">Common queries about Investment Adviser Registration.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Who is exempt from Investment Adviser registration?", a: "Certain professionals like Lawyers, CAs, and Insurance Agents are exempt IF the advice is incidental to their primary service. Mutual fund distributors are also exempt if they only distribute (sell) products and do not offer investment advice fees." },
                            { q: "What is the minimum qualification required?", a: "An individual IA or the Principal Officer of a non-individual IA must have a professional qualification or post-graduate degree in finance, accountancy, business management, commerce, economics, capital market, banking, insurance or actuarial science from a recognized university." },
                            { q: "Can I offer advice on WhatsApp or Telegram?", a: "Yes, but only if you are SEBI registered. Providing tips or advice on social media platforms without registration is illegal and SEBI actively penalizes such activities." },
                            { q: "What constitutes 'Investment Advice'?", a: "Any advice relating to investing in, purchasing, selling or otherwise dealing in securities or investment products, and advice on investment portfolio containing securities or investment products, whether written, oral or through any other means of communication for the benefit of the client and shall include financial planning." },
                            { q: "Is NISM certification mandatory?", a: "Yes, the NISM-Series-X-A: Investment Adviser (Level 1) and NISM-Series-X-B: Investment Adviser (Level 2) certifications are mandatory." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-[var(--brand-secondary)] transition-colors">
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

            {/* DISCLAIMER / FOOTER NOTE */}
            <section className="py-12 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Note</h4>
                            <p className="text-slate-600">
                                At Devyani & Co., we assist clients in structuring, applying, and positioning their Investment Adviser registration in a manner that is regulator-aligned, future-ready, and scalable.
                            </p>
                        </div>
                        <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--brand-secondary)] transition-all flex items-center shadow-xl whitespace-nowrap">
                            Get Expert Assistance
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
