import { Metadata } from 'next';
import {
    ShieldCheck,
    Briefcase,
    Landmark,
    Scale,
    FileText,
    Users,
    CheckCircle2,
    ArrowRight,
    ChevronDown,
    Building2,
    PenTool
} from 'lucide-react';
import Link from 'next/link';
import AIFComprehensiveFAQs from '@/components/regulatory/AIFComprehensiveFAQs';
import AIFDocumentationGuide from '@/components/regulatory/AIFDocumentationGuide';

export const metadata: Metadata = {
    title: 'Alternative Investment Fund Registration in India – A Structured Guide by Devyani & Co.',
    description: 'Alternative Investment Fund Registration in India under SEBI regulations. Understand eligibility, categories, registration process, corpus requirements, fees, and permitted activities.',
    alternates: {
        canonical: '/alternative-investment-fund-registration-india',
    },
};

export default function AIFRegistration() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[var(--brand-secondary)]/10 z-0"></div>
                {/* Decorative Elements */}
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/50 mb-6 animate-fade-in-up">
                            <Landmark size={16} className="text-amber-400" />
                            <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">SEBI Regulated</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 animate-fade-in-up delay-100">
                            Alternative Investment Fund <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
                                Registration in India
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                            The preferred route for sophisticated capital. Navigate the SEBI AIF framework with clarity, discipline, and long-term scalability.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-500 transition-all shadow-lg hover:shadow-amber-500/25 group">
                                Start Registration
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="#categories" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                Fund Categories
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT IS AIF */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Is an Alternative Investment Fund (AIF)?</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                An Alternative Investment Fund is a privately pooled investment vehicle that collects funds from eligible investors and invests according to a defined investment policy for the benefit of its investors.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Regulated separately from mutual funds, AIFs are designed for sophisticated investors and enable customised investment strategies.
                            </p>

                            <div className="mt-6">
                                <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                                    <Briefcase className="mr-2 text-amber-600" size={20} />
                                    Typical Use Cases
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        "Private Equity & Venture Capital",
                                        "Start-up & Growth Funding",
                                        "Real Estate & Infrastructure",
                                        "Distressed Assets",
                                        "Hedge Funds & Derivatives",
                                        "Special Situations"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-700 text-sm font-medium">
                                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2.5"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Who Can Set Up Card */}
                        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-full blur-[60px] opacity-60"></div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-6 relative z-10">Who Can Set Up an AIF?</h3>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-start">
                                    <div className="bg-white p-2 rounded-lg shadow-sm mr-4 mt-1">
                                        <Users size={18} className="text-amber-600" />
                                    </div>
                                    <div>
                                        <strong className="text-slate-800 block">Promoters & Institutions</strong>
                                        <span className="text-slate-600 text-sm">Domestic promoters, AMCs, Family Offices, and Financial Institutions.</span>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-white p-2 rounded-lg shadow-sm mr-4 mt-1">
                                        <UserSearchIcon size={18} className="text-amber-600" />
                                    </div>
                                    <div>
                                        <strong className="text-slate-800 block">Experienced Professionals</strong>
                                        <span className="text-slate-600 text-sm">Individuals with proven fund management capability.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <h4 className="text-sm font-bold text-slate-500 uppercase mb-3">Preferred Structures</h4>
                                <div className="flex gap-3">
                                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-semibold text-slate-700">Trust (Most Common)</span>
                                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-semibold text-slate-700">LLP</span>
                                    <span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-sm font-semibold text-slate-700">Company</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FUND CATEGORIES */}
            <section id="categories" className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Categories of AIFs</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">SEBI classifies AIFs into three distinct categories based on strategy and regulatory intent.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* CAT I */}
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 transition-all group hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                <span className="font-bold text-xl">I</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Category I AIF</h3>
                            <p className="text-slate-400 mb-6 text-sm">Invests in socially or economically desirable sectors. Often enjoys incentives.</p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• Venture Capital Funds</li>
                                <li>• SME Funds</li>
                                <li>• Social Venture Funds</li>
                                <li>• Infrastructure Funds</li>
                                <li>• Angel Funds</li>
                            </ul>
                        </div>

                        {/* CAT II */}
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 transition-all group relative overflow-hidden hover:-translate-y-2 hover:shadow-xl">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
                            <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                <span className="font-bold text-xl">II</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Category II AIF</h3>
                            <p className="text-slate-400 mb-6 text-sm">Funds that do not undertake leverage except for day-to-day operations. Most widely used.</p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• Private Equity Funds</li>
                                <li>• Debt Funds</li>
                                <li>• Fund of Funds</li>
                                <li>• Real Estate Funds</li>
                            </ul>
                        </div>

                        {/* CAT III */}
                        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 transition-all group hover:-translate-y-2 hover:shadow-xl">
                            <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                                <span className="font-bold text-xl">III</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">Category III AIF</h3>
                            <p className="text-slate-400 mb-6 text-sm">Funds employing complex trading strategies, including leverage.</p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>• Hedge Funds</li>
                                <li>• Long-Short Funds</li>
                                <li>• Arbitrage Funds</li>
                                <li>• Complex Derivative Strategies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY & REQUIREMENTS */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="md:flex md:gap-16">
                        <div className="md:w-1/3 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 sticky top-24">Eligibility Criteria & Requirements</h2>
                            <p className="text-slate-600 mb-6">Key thresholds set by SEBI to ensure seriousness and capability.</p>
                            <Link href="/contact" className="hidden md:inline-flex items-center text-amber-700 font-bold hover:text-amber-800">
                                Verify Eligibility <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>

                        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                                    <Building2 size={18} className="mr-2 text-slate-400" />
                                    Minimum Corpus
                                </h4>
                                <div className="text-2xl font-bold text-amber-600 mb-1">₹20 Crore</div>
                                <span className="text-xs text-slate-500 uppercase font-semibold tracking-wide">Regular AIF</span>
                                <div className="mt-2 text-sm text-slate-500 pt-2 border-t border-slate-100">
                                    Angel Funds: <span className="font-semibold text-slate-700">₹10 Crore</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                                    <Users size={18} className="mr-2 text-slate-400" />
                                    Min. Investment
                                </h4>
                                <div className="text-2xl font-bold text-slate-800 mb-1">₹1 Crore</div>
                                <span className="text-xs text-slate-500 uppercase font-semibold tracking-wide">Per Investor</span>
                                <div className="mt-2 text-sm text-slate-500 pt-2 border-t border-slate-100">
                                    Angel Funds: <span className="font-semibold text-slate-700">₹25 Lakh</span>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                                    <ShieldCheck size={18} className="mr-2 text-slate-400" />
                                    Sponsor Experience
                                </h4>
                                <p className="text-sm text-slate-600">
                                    Sponsor/Manager must be "Fit and Proper" with adequate experience in fund management or financial services.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-2 flex items-center">
                                    <Scale size={18} className="mr-2 text-slate-400" />
                                    Sponsor Commitment
                                </h4>
                                <div className="text-sm text-slate-600 space-y-1">
                                    <div className="flex justify-between">
                                        <span>Cat I & II:</span>
                                        <span className="font-semibold">2.5% or ₹5 Cr</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Cat III:</span>
                                        <span className="font-semibold">5% or ₹10 Cr</span>
                                    </div>
                                    <span className="text-xs text-slate-400 block mt-1">(Whichever is lower)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REGISTRATION PROCESS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Registration Process</h2>
                        <p className="text-slate-600 mt-2">A structured approach to obtaining your license.</p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        <div className="hidden md:block absolute top-[2.25rem] left-0 w-full h-1 bg-slate-100 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { title: "Structuring", desc: "Define Category, Legal Structure (Trust/LLP), and Strategy." },
                                { title: "Documentation", desc: "Draft Constitutive Documents and the critical Private Placement Memorandum (PPM)." },
                                { title: "Regulatory Filing", desc: "Submit online application to SEBI with fees and annexures." },
                                { title: "Review & Approval", desc: "Respond to queries. Upon satisfaction, SEBI grants Certificate." }
                            ].map((step, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-white border-4 border-amber-500 text-amber-600 rounded-full flex items-center justify-center font-bold text-xl shadow-lg mb-6">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-slate-500 leading-snug">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PPM IMPORTANCE */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <span className="text-amber-500 font-bold uppercase tracking-wider text-xs mb-2 block">Critical Document</span>
                            <h2 className="text-3xl font-bold mb-6">Private Placement Memorandum (PPM)</h2>
                            <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                                The PPM is not just a marketing document—it is a regulatory disclosure instrument reviewed closely by SEBI. It defines the fund's commercial and regulatory framework.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <CheckCircle2 className="text-amber-500 mr-3" size={20} />
                                    <span>Fund Structure & Governance</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="text-amber-500 mr-3" size={20} />
                                    <span>Investment Strategy & Restrictions</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="text-amber-500 mr-3" size={20} />
                                    <span>Risk Factors & Disclosures</span>
                                </div>
                                <div className="flex items-center">
                                    <CheckCircle2 className="text-amber-500 mr-3" size={20} />
                                    <span>Fees, Expenses & Distribution Waterfall</span>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 bg-slate-800 p-8 rounded-2xl border border-slate-700">
                            <h4 className="font-bold text-white mb-4 flex items-center">
                                <PenTool size={18} className="mr-3 text-amber-500" />
                                Why Professional Drafting Matters
                            </h4>
                            <p className="text-slate-400 mb-6 text-sm">
                                Weak PPMs result in regulatory delays. SEBI reviews the PPM to ensure investor protection, risk transparency, and alignment with regulatory intent.
                            </p>
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                                <div className="text-xs uppercase text-slate-500 font-bold mb-2">Common Mistakes</div>
                                <ul className="space-y-2 text-sm text-slate-300">
                                    <li className="flex items-start"><span className="text-red-400 mr-2">×</span> Vague investment strategy</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">×</span> Boilerplate risk disclosures</li>
                                    <li className="flex items-start"><span className="text-red-400 mr-2">×</span> Inconsistent fee clauses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        <p className="text-slate-600 mt-2">Expert answers to common queries on AIF Registration.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "What is the minimum corpus for an AIF?", a: "The minimum corpus for each scheme of an AIF is ₹20 Crore (₹10 Crore for Angel Funds)." },
                            { q: "Can an AIF accept funds from foreign investors?", a: "Yes, AIFs can accept funds from foreign investors, subject to FEMA guidelines and RBI reporting." },
                            { q: "How long does AIF registration take?", a: "The process typically takes 3-6 months, depending on the clarity of the application, PPM quality, and response time to SEBI queries." },
                            { q: "Is a physical office mandatory?", a: "While SEBI regulations focus on infrastructure, a registered office in India is required for the entity (Trust/LLP/Company)." },
                            { q: "What is the role of a Sponsor?", a: "The Sponsor sets up the AIF and is required to maintain a continuing interest (skin-in-the-game) in the fund to align interests with investors." },
                            { q: "Can AIFs raise funds from the public?", a: "No, AIFs can only raise funds through private placement to sophisticated investors. Public solicitation is strictly prohibited." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-amber-600 transition-colors">
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

            {/* COMPREHENSIVE DOCUMENTATION GUIDE */}
            <AIFDocumentationGuide />

            {/* COMPREHENSIVE FAQs */}
            <AIFComprehensiveFAQs />

            {/* CTA */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]"></div>
                        <div className="max-w-2xl relative z-10">
                            <h4 className="text-2xl font-bold mb-3">Launch Your AIF with Confidence</h4>
                            <p className="text-slate-300">
                                At Devyani & Co., we focus on building regulator-ready AIF structures that are commercially viable, governance-strong, and scalable over the long term.
                            </p>
                        </div>
                        <Link href="/contact" className="bg-amber-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-amber-500 transition-all flex items-center shadow-lg whitespace-nowrap relative z-10">
                            Structure Your Fund
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
function UserSearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="10" cy="7" r="4" />
            <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
            <circle cx="17" cy="17" r="3" />
            <path d="m21 21-1.9-1.9" />
        </svg>
    )
}
