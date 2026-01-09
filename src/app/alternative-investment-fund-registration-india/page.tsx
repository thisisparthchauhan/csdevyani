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

            {/* ADVANCED FAQS */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Advanced FAQs – Alternative Investment Fund (AIF) Registration in India</h2>
                        <p className="text-slate-600 mt-2">Comprehensive answers to critical regulatory, structuring, and operational queries.</p>
                    </div>

                    <div className="space-y-8">
                        {/* A. Foundational & Structuring Questions */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">A. Foundational & Structuring Questions</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "1. Can an AIF be registered before identifying investors?", a: "Yes. AIF registration is obtained before fund raising. Investors are onboarded only after registration and issuance of the final PPM." },
                                    { q: "2. Is it mandatory to raise the full corpus immediately after registration?", a: "No. The minimum corpus requirement applies to the fund overall, not to immediate fund raising." },
                                    { q: "3. Can an AIF be registered with a small initial team?", a: "Yes, provided the Manager demonstrates adequate experience, infrastructure, and operational capability." },
                                    { q: "4. Is a trust structure compulsory for AIF registration?", a: "No. AIFs may be structured as a trust, LLP, or company, though trusts are most commonly preferred." },
                                    { q: "5. Can the same entity act as Sponsor and Manager?", a: "Yes, subject to proper disclosure and compliance with continuing interest requirements." },
                                    { q: "6. Is prior fund management experience mandatory for AIF registration?", a: "Direct experience is not mandatory, but SEBI evaluates collective experience, governance strength, and professional capability." },
                                    { q: "7. Can first-time fund managers obtain AIF registration?", a: "Yes, if supported by a robust governance framework, experienced professionals, and clear investment strategy." },
                                    { q: "8. Can an NBFC sponsor or manage an AIF?", a: "Yes, subject to compliance with applicable RBI and SEBI norms and proper segregation of activities." },
                                    { q: "9. Can a family office register an AIF?", a: "Yes, many family offices use the AIF structure for pooled investment, subject to eligibility and compliance." },
                                    { q: "10. Is it possible to register multiple AIFs under the same Sponsor?", a: "Yes, provided each AIF meets independent eligibility, governance, and compliance requirements." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
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

                        {/* B. Category-Specific & Strategy Questions */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">B. Category-Specific & Strategy Questions</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "11. Can the same investment strategy fit into more than one AIF category?", a: "Some strategies may overlap, but the chosen category must align clearly with regulatory definitions." },
                                    { q: "12. Is leverage completely prohibited for Category II AIFs?", a: "Leverage is prohibited except for temporary funding for operational requirements, subject to limits." },
                                    { q: "13. Why does Category III AIF face higher regulatory scrutiny?", a: "Because it permits leverage and complex strategies, increasing systemic and investor risk." },
                                    { q: "14. Can a debt fund be registered under Category I?", a: "No. Debt strategies typically fall under Category II." },
                                    { q: "15. Can a venture capital strategy be registered as Category II?", a: "No. Venture capital strategies fall under Category I by definition." },
                                    { q: "16. Can an AIF change its category after registration?", a: "Generally no. A category change may require fresh registration." },
                                    { q: "17. Can one AIF launch schemes with different strategies?", a: "Yes, subject to scheme-level disclosures and compliance with the approved category." },
                                    { q: "18. Is it permissible to invest outside India through an AIF?", a: "Yes, subject to foreign exchange laws and disclosures in the PPM." },
                                    { q: "19. Can an AIF invest in unlisted companies only?", a: "No. Investment scope depends on the strategy disclosed in the PPM." },
                                    { q: "20. Can a Category III AIF invest in listed securities actively?", a: "Yes, subject to strategy, disclosures, and risk management framework." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
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

                        {/* C. PPM (Private Placement Memorandum) – Complex Issues */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">C. PPM (Private Placement Memorandum) – Complex Issues</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "21. Is the PPM legally binding on the AIF?", a: "Yes. The AIF must operate strictly in accordance with the disclosures made in the PPM." },
                                    { q: "22. Can generic or template PPMs be used for AIF registration?", a: "No. Generic PPMs often lead to regulatory queries and rejection." },
                                    { q: "23. Is investor consent required for every PPM amendment?", a: "Only for material changes affecting investment strategy, fees, or rights." },
                                    { q: "24. Can marketing presentations override the PPM?", a: "No. Any communication inconsistent with the PPM is a compliance violation." },
                                    { q: "25. Is a separate PPM required for each scheme?", a: "Yes, scheme-specific disclosures are mandatory." },
                                    { q: "26. Who bears liability for incorrect disclosures in the PPM?", a: "The Sponsor and Manager are jointly responsible." },
                                    { q: "27. Can fees be changed after registration?", a: "Only with proper disclosure, investor consent, and regulatory compliance." },
                                    { q: "28. Can risk disclosures be brief if investors are sophisticated?", a: "No. Full and fair disclosure is mandatory regardless of investor sophistication." },
                                    { q: "29. Is SEBI approval required for every PPM update?", a: "Material changes require intimation or approval, depending on impact." },
                                    { q: "30. Can PPMs be shared publicly?", a: "No. PPMs are private placement documents and cannot be publicly circulated." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
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

                        {/* D. Investor & Fund Raising Questions */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">D. Investor & Fund Raising Questions</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "31. Can an AIF raise funds before completing KYC?", a: "No. Investor onboarding must be completed before accepting commitments." },
                                    { q: "32. Can an investor invest less than ₹1 crore through structuring?", a: "No. Minimum investment norms cannot be circumvented." },
                                    { q: "33. Can employees of the AIF invest at a lower threshold?", a: "Yes, subject to prescribed limits and disclosures." },
                                    { q: "34. Is there a cap on the number of investors in an AIF scheme?", a: "Yes. Each scheme is subject to a maximum investor limit." },
                                    { q: "35. Can foreign investors participate in an AIF?", a: "Yes, subject to foreign exchange and regulatory compliance." },
                                    { q: "36. Can AIF units be transferred between investors?", a: "Yes, subject to PPM terms and regulatory conditions." },
                                    { q: "37. Can AIFs accept capital in tranches?", a: "Yes, capital commitments may be drawn down as per fund terms." },
                                    { q: "38. Is escrow mandatory for fund collection?", a: "Operational safeguards are expected, and escrow mechanisms are commonly used." },
                                    { q: "39. Can an AIF advertise to attract investors?", a: "No. Public solicitation and advertising are prohibited." },
                                    { q: "40. Can placement agents be appointed for fund raising?", a: "Yes, subject to disclosure and regulatory compliance." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
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

                        {/* E. Registration Process & Regulatory Scrutiny */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">E. Registration Process & Regulatory Scrutiny</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "41. Can SEBI ask for changes in fund strategy during registration?", a: "Yes. SEBI may seek clarification or alignment with regulatory intent." },
                                    { q: "42. Is registration guaranteed if eligibility criteria are met?", a: "No. SEBI retains discretionary powers to assess overall suitability." },
                                    { q: "43. Can SEBI reject an AIF application without detailed reasons?", a: "SEBI generally provides reasons or seeks clarification before rejection." },
                                    { q: "44. Can an applicant withdraw an AIF application?", a: "Yes, subject to procedural formalities. Fees are non-refundable." },
                                    { q: "45. How long does AIF registration typically take?", a: "Timelines vary based on documentation quality and regulatory queries." },
                                    { q: "46. Can multiple applications be filed simultaneously?", a: "Yes, but each application is assessed independently." },
                                    { q: "47. Is in-person interaction with SEBI mandatory?", a: "Not always, but SEBI may call for meetings or clarifications." },
                                    { q: "48. Can professional advisors represent the applicant before SEBI?", a: "Yes, authorised professionals may represent the applicant." },
                                    { q: "49. Can an AIF start operations immediately after registration?", a: "Yes, subject to completion of operational and compliance readiness." },
                                    { q: "50. Is registration transferable to another entity?", a: "No. AIF registration is entity-specific and non-transferable." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
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

                        {/* F. Practical & Risk-Oriented Questions */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">F. Practical & Risk-Oriented Questions</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "51. What is the biggest reason for AIF application delays?", a: "Weak PPM drafting and inconsistent disclosures." },
                                    { q: "52. What common mistake first-time fund managers make?", a: "Underestimating governance and compliance expectations." },
                                    { q: "53. Can poor compliance post-registration impact fund raising?", a: "Yes. Investor confidence and regulatory standing are directly affected." },
                                    { q: "54. Can an AIF be penalised for actions of the Manager?", a: "Yes. The AIF is responsible for actions taken on its behalf." },
                                    { q: "55. Can an AIF operate without raising funds for a long period?", a: "Yes, but reporting and compliance obligations continue." },
                                    { q: "56. Is regulatory inspection common for AIFs?", a: "Inspections may be conducted based on risk, complaints, or routine supervision." },
                                    { q: "57. Can an AIF surrender registration voluntarily?", a: "Yes, subject to settlement of obligations and regulatory approval." },
                                    { q: "58. Can AIF registration be cancelled by the regulator?", a: "Yes, in cases of serious or repeated non-compliance." },
                                    { q: "59. Does AIF registration enhance credibility with institutional investors?", a: "Yes. Registration provides regulatory credibility and governance assurance." },
                                    { q: "60. Is professional advisory essential for AIF registration?", a: "While not mandatory, professional structuring significantly improves approval certainty and long-term compliance." },
                                    { q: "61. Is AIF registration suitable for small ticket funds?", a: "AIFs are designed for sophisticated investors and may not suit small retail-focused models." },
                                    { q: "62. Can an AIF later convert into a mutual fund?", a: "No. Mutual funds require separate regulatory approval and structure." },
                                    { q: "63. Is AIF registration suitable for fintech investment platforms?", a: "Yes, if the platform operates within the private placement and advisory framework." },
                                    { q: "64. Can an AIF co-invest with other funds?", a: "Yes, subject to disclosure and conflict management norms." },
                                    { q: "65. What is the most critical success factor for AIF registration?", a: "Clear strategy, strong governance, accurate disclosures, and disciplined compliance." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
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
                </div>
            </section>

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
