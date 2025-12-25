import { Metadata } from 'next';
import { TrendingUp, BookOpen, UserCheck, GraduationCap, Building2, FileText, CheckCircle2, AlertCircle, ArrowRight, ChevronDown, Shield, Award, Lock, BarChart3, Users, Globe, IndianRupee, Clock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SEBI Research Analyst Registration – A Credible Path to Ethical Market Research',
    description: 'SEBI Research Analyst Registration explained in detail. Eligibility, process, documentation, capital requirements, fees, and what research analysts can legally do in India.',
    alternates: {
        canonical: '/sebi-research-analyst-registration',
    },
    keywords: 'SEBI Research Analyst Registration, Research Analyst License India, SEBI RA Registration, Stock Research Registration, NISM Research Analyst, Market Research License',
};

export default function SEBIResearchAnalystRegistration() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-indigo-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-700/50 mb-6 animate-fade-in-up">
                            <TrendingUp size={16} className="text-indigo-400" />
                            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">SEBI Regulation</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            SEBI Research Analyst <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
                                Registration
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            A Credible Path to Ethical Market Research. Build trust, transparency, and regulatory compliance in your research practice.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-500/25">
                                Start Registration Process
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
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold text-slate-900">SEBI Research Analyst Registration</h2>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    SEBI Research Analyst Registration is the regulatory foundation for professionals and entities providing research reports, stock recommendations, price targets, trading calls, or investment opinions in India.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    Introduced to restore trust and discipline in market research, this framework ensures that research influencing investor decisions is independent, transparent, qualified, and accountable.
                                </p>
                                <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6">
                                    <p className="text-slate-700 leading-relaxed">
                                        <strong className="text-indigo-900">At Devyani & Co.</strong>, we assist professionals, fintech platforms, media analysts, and research firms in building regulator-ready research models aligned with long-term credibility rather than short-term visibility.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
                                <h3 className="text-2xl font-bold mb-6 relative z-10">What Is a SEBI Research Analyst?</h3>
                                <p className="text-slate-300 mb-6 relative z-10">A Research Analyst is any person or entity engaged in:</p>
                                <ul className="space-y-4 relative z-10">
                                    {[
                                        "Preparing or publishing research reports",
                                        "Issuing buy, sell, or hold recommendations",
                                        "Providing price targets or stop-loss levels",
                                        "Giving trading calls (intraday or positional)",
                                        "Offering opinions on listed or proposed securities",
                                        "Running paid research subscriptions or model portfolios"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-200">
                                            <CheckCircle2 size={20} className="mr-3 text-indigo-400 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 pt-6 border-t border-white/10 relative z-10">
                                    <p className="text-sm text-slate-300 italic">
                                        The definition focuses on substance, not designation. Even digital creators, fintech platforms, or subscription channels fall within scope if research is provided for consideration.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Why SEBI Mandated Registration */}
                        <div className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why SEBI Mandated Research Analyst Registration</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                                        <AlertCircle size={20} className="mr-2 text-red-500" />
                                        Before Regulation
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Undisclosed conflicts of interest",
                                            "Biased or promotional recommendations",
                                            "Selective dissemination of information",
                                            "Lack of accountability for investor losses"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start text-slate-600 text-sm">
                                                <span className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                                        <CheckCircle2 size={20} className="mr-2 text-green-500" />
                                        After Regulation
                                    </h4>
                                    <ul className="space-y-3">
                                        {[
                                            "Research issued only by qualified professionals",
                                            "Conflicts disclosed, not hidden",
                                            "Research independent from sales or distribution",
                                            "Investors can distinguish opinion from promotion"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-start text-slate-600 text-sm">
                                                <CheckCircle2 size={18} className="mr-3 text-green-500 flex-shrink-0 mt-0.5" />
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

            {/* WHO MUST REGISTER */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">Who Must Obtain SEBI Research Analyst Registration?</h2>
                            <p className="text-slate-600 mt-2">Registration is mandatory for the following entities</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {[
                                { icon: Users, title: "Independent Individual Research Analysts", desc: "Professionals providing research independently" },
                                { icon: Building2, title: "Companies, LLPs, or Partnership Firms", desc: "Entities issuing research reports" },
                                { icon: Globe, title: "Fintech Platforms", desc: "Offering paid stock research services" },
                                { icon: BarChart3, title: "Trading Call Providers", desc: "Analysts providing price targets or calls" },
                                { icon: FileText, title: "Research Publishers", desc: "Entities publishing research in their own name" },
                                { icon: TrendingUp, title: "Digital Research Platforms", desc: "Social media or subscription-based research" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-indigo-500/30 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-sm">{item.title}</h3>
                                    <p className="text-xs text-slate-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start">
                            <AlertCircle size={24} className="text-amber-600 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Important Notice</h4>
                                <p className="text-slate-700 leading-relaxed">
                                    Unregistered research activity, even through digital platforms or social media, may attract regulatory action. SEBI actively monitors and penalizes unregistered research providers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INDIVIDUAL VS NON-INDIVIDUAL */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Individual vs Non-Individual Research Analyst</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Individual */}
                            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-200">
                                <div className="w-14 h-14 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-6">
                                    <UserCheck size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Individual Research Analyst</h3>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    An individual whose sole or primary activity is providing research services independently.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Operates in personal capacity",
                                        "Direct accountability to SEBI",
                                        "Lower compliance overhead",
                                        "Suitable for independent researchers"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-sm text-slate-700">
                                            <CheckCircle2 size={16} className="mr-2 text-indigo-600 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Non-Individual */}
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
                                <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center text-white mb-6">
                                    <Building2 size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Non-Individual Research Analyst</h3>
                                <p className="text-slate-700 leading-relaxed mb-6">
                                    Entities that issue research in their own name through employed or associated analysts.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-xl border border-slate-200">
                                        <h4 className="font-bold text-slate-800 text-sm mb-2">Includes:</h4>
                                        <ul className="space-y-2">
                                            {["Companies", "LLPs", "Partnership firms"].map((item, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-slate-600">
                                                    <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-2"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="text-xs text-slate-600 italic">
                                        Requires Principal Officer appointment and organizational compliance framework
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Exemptions */}
                        <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                <Shield size={24} className="mr-3 text-blue-600" />
                                Who Is Exempt from Separate Registration?
                            </h3>
                            <p className="text-slate-700 mb-6">
                                Separate registration is not required for certain regulated entities, provided they strictly comply with disclosure and conduct norms:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "Registered Investment Advisers",
                                    "Asset Management Companies",
                                    "Fund Managers",
                                    "Credit Rating Agencies"
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white p-4 rounded-xl border border-blue-200 flex items-center">
                                        <CheckCircle2 size={18} className="mr-3 text-blue-600 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-slate-600 mt-4 italic">
                                * Exemption is conditional, not automatic. Compliance with disclosure norms is mandatory.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY CRITERIA */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-indigo-600 font-bold uppercase tracking-wider text-xs">Prerequisites</span>
                            <h2 className="text-3xl font-bold text-slate-900 mt-2">Eligibility Criteria for SEBI Research Analyst Registration</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Education & Certification */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Educational & Certification Requirements</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                                        Relevant educational qualification in finance, economics, management, or allied fields
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                                        Mandatory NISM Research Analyst certification
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                                        Continuous certification validity
                                    </li>
                                </ul>
                                <p className="text-xs text-slate-500 mt-4 italic">
                                    Applies to individuals, Principal Officers, partners, directors, and research staff.
                                </p>
                            </div>

                            {/* Fit and Proper */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Fit and Proper Criteria</h3>
                                <p className="text-sm text-slate-600 mb-4">SEBI evaluates:</p>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-1.5"></span>
                                        Integrity and reputation
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-1.5"></span>
                                        Regulatory track record
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-1.5"></span>
                                        Absence of fraud or moral turpitude
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2 mt-1.5"></span>
                                        Financial soundness
                                    </li>
                                </ul>
                                <p className="text-xs text-slate-500 mt-4 italic">
                                    A lapse at any control or management level may impact approval.
                                </p>
                            </div>

                            {/* Infrastructure */}
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Infrastructure & Operational Readiness</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                                        Adequate workspace and IT systems
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                                        Secure data storage and access controls
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                                        Ability to maintain records and audit trails
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5"></span>
                                        Compliance oversight capability
                                    </li>
                                </ul>
                                <p className="text-xs text-slate-500 mt-4 italic">
                                    Infrastructure must be real and functional, not symbolic.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAPITAL & FINANCIAL REQUIREMENTS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Capital Requirements */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                    <IndianRupee size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Capital & Financial Soundness Expectations</h3>
                                <p className="text-slate-600 mb-6">
                                    SEBI does not impose heavy capital requirements, but expects:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Sufficient net worth to sustain operations",
                                        "Financial independence to avoid biased research",
                                        "Ability to meet compliance and audit costs"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <CheckCircle2 size={18} className="mr-3 text-indigo-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Principal Officer & Security Deposit */}
                            <div className="space-y-8">
                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                        <Users size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Principal Officer Requirement</h3>
                                    <p className="text-slate-600 mb-4">
                                        Every non-individual Research Analyst must appoint a Principal Officer, who may be:
                                    </p>
                                    <ul className="space-y-2 text-sm text-slate-600">
                                        {["Managing Director", "Designated Director", "Managing Partner", "Business / Unit Head"].map((item, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs text-slate-500 mt-4 italic">
                                        The Principal Officer is the primary point of regulatory accountability.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                        <Lock size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Security Deposit Requirement</h3>
                                    <p className="text-slate-600 mb-4">SEBI mandates a security deposit:</p>
                                    <ul className="space-y-3 text-sm text-slate-600">
                                        <li className="flex items-start">
                                            <CheckCircle2 size={16} className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                            Maintained in prescribed form
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 size={16} className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                            Marked as lien in favour of recognised supervisory body
                                        </li>
                                        <li className="flex items-start">
                                            <CheckCircle2 size={16} className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                            Used for dispute resolution or investor claims
                                        </li>
                                    </ul>
                                    <p className="text-xs text-slate-500 mt-4">
                                        This strengthens financial accountability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REGISTRATION PROCESS */}
            <section id="process" className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">SEBI Research Analyst Registration Process</h2>
                            <p className="text-slate-600 mt-2">A structured approach to obtaining your research analyst license</p>
                        </div>

                        <div className="space-y-6">
                            {[
                                {
                                    step: "1",
                                    title: "Structuring the Research Model",
                                    items: [
                                        "Nature of research services",
                                        "Individual or entity structure",
                                        "Revenue model and client base",
                                        "Independence from other activities"
                                    ]
                                },
                                {
                                    step: "2",
                                    title: "Documentation & Internal Framework",
                                    items: [
                                        "Application in prescribed form",
                                        "Qualification and certification proofs",
                                        "Internal policies for conflicts, trading, disclosures",
                                        "Infrastructure and organisational details"
                                    ]
                                },
                                {
                                    step: "3",
                                    title: "Application to SEBI",
                                    items: [
                                        "Non-refundable application fees",
                                        "Supporting documents",
                                        "SEBI may seek clarifications or representations"
                                    ]
                                },
                                {
                                    step: "4",
                                    title: "Regulatory Scrutiny",
                                    items: [
                                        "Eligibility and fit-and-proper status",
                                        "Independence of research",
                                        "Operational readiness",
                                        "Past regulatory history"
                                    ]
                                },
                                {
                                    step: "5",
                                    title: "Grant of Certificate",
                                    items: [
                                        "Certificate of Registration issued",
                                        "Specific terms or conditions, if any",
                                        "Registration remains valid unless suspended or cancelled"
                                    ]
                                }
                            ].map((phase, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-indigo-500/30 hover:shadow-lg transition-all">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-indigo-500 text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                                            {phase.step}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-slate-900 mb-4">{phase.title}</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {phase.items.map((item, itemIdx) => (
                                                    <div key={itemIdx} className="flex items-start text-sm text-slate-600">
                                                        <CheckCircle2 size={16} className="mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FEES & COSTS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Government & Regulatory Fees</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Application Fee", desc: "Non-refundable fee payable at the time of application submission", icon: FileText },
                                { title: "Registration Fee", desc: "Payable upon approval of registration by SEBI", icon: CheckCircle2 },
                                { title: "Security Deposit", desc: "Regulatory safeguard maintained with supervisory body", icon: Lock },
                                { title: "Professional Fees", desc: "Based on structure complexity and advisory requirements", icon: Users }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-sm text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT CAN YOU DO */}
            <section className="py-16 md:py-24 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4">What Can a Registered Research Analyst Do?</h2>
                        <p className="text-slate-300 mb-12 max-w-2xl mx-auto">
                            After registration, a Research Analyst can legally engage in the following activities:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Issue research reports and recommendations",
                                "Provide price targets and trading calls",
                                "Run paid research subscriptions",
                                "Offer model portfolios",
                                "Participate in media discussions (with disclosures)",
                                "Build compliant digital research platforms"
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex items-center text-left hover:border-indigo-500/50 transition-all">
                                    <CheckCircle2 className="text-indigo-400 mr-4 flex-shrink-0" size={20} />
                                    <span className="font-medium text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 p-6 bg-indigo-900/30 border border-indigo-500/30 rounded-2xl max-w-3xl mx-auto backdrop-blur-sm">
                            <p className="font-semibold text-indigo-200">
                                All activities must remain within the disclosed research scope and comply with SEBI regulations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY PROFESSIONAL STRUCTURING MATTERS */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-200 shadow-sm">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Professional Structuring Matters</h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Most regulatory delays arise from inadequate preparation and poor understanding of compliance requirements. Common issues include:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                {[
                                    { icon: AlertCircle, text: "Weak internal policies", color: "red" },
                                    { icon: AlertCircle, text: "Improper segregation of activities", color: "orange" },
                                    { icon: AlertCircle, text: "Inconsistent disclosures", color: "amber" },
                                    { icon: AlertCircle, text: "Poor understanding of digital applicability", color: "yellow" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <item.icon size={20} className={`text-${item.color}-500 mr-3 flex-shrink-0 mt-0.5`} />
                                        <span className="text-slate-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                                <p className="text-slate-800 font-semibold">
                                    At Devyani & Co., we focus on regulatory interpretation, not just rule text. We help you build a compliance framework that is practical, scalable, and aligned with SEBI's intent.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        <p className="text-slate-600 mt-2">Comprehensive answers to common queries about SEBI Research Analyst Registration</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "What is SEBI Research Analyst Registration?", a: "SEBI Research Analyst Registration is a mandatory regulatory license for individuals and entities engaged in preparing, publishing, or distributing research reports, stock recommendations, price targets, or trading calls in India. It ensures that market research is conducted by qualified, independent, and accountable professionals." },
                            { q: "Who needs to register as a Research Analyst?", a: "Anyone providing research for consideration (fees, subscription, or other benefits) must register. This includes independent analysts, research firms, fintech platforms offering stock tips, media analysts providing paid recommendations, and entities running model portfolios or paid research subscriptions." },
                            { q: "Is registration mandatory for providing free research or tips?", a: "If research is genuinely free with no commercial consideration (direct or indirect), registration may not be required. However, SEBI examines substance over form. If free tips are used to attract paid services, build a client base, or generate indirect revenue, registration becomes mandatory." },
                            { q: "Can I provide stock tips on social media without registration?", a: "No. Providing stock recommendations, trading calls, or price targets on social media platforms (YouTube, Telegram, WhatsApp, Instagram, etc.) for consideration requires SEBI Research Analyst Registration. SEBI actively monitors and penalizes unregistered social media research providers." },
                            { q: "What is the difference between a Research Analyst and an Investment Adviser?", a: "A Research Analyst provides research reports, recommendations, and analysis on securities. An Investment Adviser provides personalized investment advice tailored to a client's financial situation and risk profile. Research Analysts can provide general research to multiple clients, while Investment Advisers provide customized advice to individual clients." },
                            { q: "Can I be both a Research Analyst and an Investment Adviser?", a: "Yes, but you need separate registrations for each activity. SEBI allows dual registration, but you must maintain clear segregation between research and advisory activities, with proper disclosures and compliance for each role." },
                            { q: "What are the educational qualifications required?", a: "Applicants must have a relevant educational qualification in finance, economics, management, commerce, capital markets, banking, or allied fields from a recognized university. Post-graduate degrees or professional qualifications (CA, CFA, MBA Finance) are preferred but not always mandatory." },
                            { q: "Is NISM certification mandatory for Research Analyst registration?", a: "Yes. NISM Research Analyst certification is mandatory for individuals, Principal Officers of non-individual entities, and all research staff. The certification must be valid and renewed periodically as per NISM requirements." },
                            { q: "What is the validity period of NISM Research Analyst certification?", a: "NISM Research Analyst certification is valid for 3 years from the date of passing the examination. It must be renewed through continuing professional education (CPE) credits before expiry to maintain validity." },
                            { q: "Can a company or LLP register as a Research Analyst?", a: "Yes. Non-individual entities including companies, LLPs, and partnership firms can register as Research Analysts. They must appoint a Principal Officer who meets all eligibility criteria and holds valid NISM certification." },
                            { q: "What is the role of a Principal Officer in a non-individual Research Analyst entity?", a: "The Principal Officer is the primary point of regulatory accountability. They must be a Managing Director, Designated Director, Managing Partner, or Business/Unit Head. They are responsible for overall compliance, supervision of research activities, and liaison with SEBI." },
                            { q: "What are the capital requirements for Research Analyst registration?", a: "SEBI does not impose heavy minimum capital requirements like it does for brokers or investment advisers. However, applicants must demonstrate sufficient net worth to sustain operations, financial independence to avoid biased research, and ability to meet ongoing compliance and audit costs." },
                            { q: "What is the security deposit requirement?", a: "SEBI mandates a security deposit to be maintained in prescribed form (typically fixed deposit or bank guarantee) marked as lien in favour of a recognized supervisory body. This deposit serves as a regulatory safeguard for dispute resolution and investor claims." },
                            { q: "How much is the security deposit amount?", a: "The security deposit amount is specified in SEBI regulations and may vary based on the category of Research Analyst. Typically, it ranges from ₹1 lakh to ₹5 lakhs. Check current SEBI circulars for exact amounts." },
                            { q: "What are the application and registration fees?", a: "Application fees (non-refundable) and registration fees are payable to SEBI as per the prescribed schedule. These fees vary for individual and non-individual applicants. Current fee structure is available on SEBI's website and in the SEBI (Research Analysts) Regulations." },
                            { q: "How long does the registration process take?", a: "The typical timeline is 8-16 weeks from application submission, depending on the completeness of documentation, SEBI's workload, and any clarifications required. Proper preparation and professional assistance can expedite the process." },
                            { q: "What documents are required for registration?", a: "Key documents include: Application form, educational certificates, NISM certification, PAN card, address proof, entity registration documents (for non-individuals), Principal Officer details, infrastructure proof, internal policies for conflicts and disclosures, and financial statements." },
                            { q: "What internal policies must be in place before applying?", a: "Applicants must have documented policies for: Conflict of interest management, personal trading by analysts and their families, disclosure standards, research methodology, client confidentiality, record keeping, and complaint handling." },
                            { q: "What infrastructure is required for Research Analyst registration?", a: "Adequate office space, IT systems for research and communication, secure data storage with access controls, systems for maintaining records and audit trails, and compliance oversight capabilities. Infrastructure must be real and functional, not symbolic." },
                            { q: "Can I operate from home as an individual Research Analyst?", a: "Yes, individual Research Analysts can operate from home provided they have adequate infrastructure including dedicated workspace, proper IT systems, secure data storage, and ability to maintain professional standards and client confidentiality." },
                            { q: "What is the 'fit and proper' criteria?", a: "SEBI evaluates integrity and reputation, regulatory track record, absence of fraud or moral turpitude, financial soundness, and professional competence. Any adverse regulatory history, criminal proceedings, or financial irregularities may impact approval." },
                            { q: "Can foreign nationals or NRIs register as Research Analysts in India?", a: "Individual Research Analysts must be Indian citizens or residents. For non-individual entities, foreign investment is permitted subject to FDI regulations and FEMA compliance. The Principal Officer must typically be a resident Indian with required certifications." },
                            { q: "What can I do after obtaining Research Analyst registration?", a: "You can legally issue research reports and recommendations, provide price targets and trading calls, run paid research subscriptions, offer model portfolios, participate in media discussions (with proper disclosures), and build compliant digital research platforms." },
                            { q: "Can I charge fees for research services?", a: "Yes. Registered Research Analysts can charge fees through various models: subscription fees, per-report charges, retainer arrangements, or performance-based fees (subject to SEBI guidelines). Fee structures must be transparent and disclosed to clients." },
                            { q: "What disclosures must be made in research reports?", a: "Mandatory disclosures include: Research Analyst registration number, analyst's name and qualifications, conflicts of interest (holdings, relationships with companies covered), research methodology, disclaimers, and risk warnings. Specific disclosure requirements are detailed in SEBI regulations." },
                            { q: "Can I hold positions in stocks I recommend?", a: "Personal trading by Research Analysts is restricted. You must disclose any holdings in stocks covered in your research. SEBI regulations prohibit trading ahead of research publication (front-running) and require cooling-off periods. Detailed personal trading policies must be maintained." },
                            { q: "What are the ongoing compliance requirements after registration?", a: "Annual registration renewal, maintenance of security deposit, continuing NISM certification, regular disclosures to SEBI, maintenance of books and records, annual audit and filing of financial statements, compliance with code of conduct, and timely payment of regulatory fees." },
                            { q: "How often must registration be renewed?", a: "Research Analyst registration must be renewed annually by paying the prescribed renewal fees and submitting required compliance documents. Failure to renew on time may result in suspension or cancellation of registration." },
                            { q: "What records must be maintained?", a: "Research reports issued, client communications, fee arrangements, personal trading records, conflict of interest disclosures, complaints received and resolved, audit trails of research process, and financial records. Records must be maintained for minimum 5 years." },
                            { q: "Is audit mandatory for Research Analysts?", a: "Yes. Registered Research Analysts must conduct annual audits by qualified auditors and file audit reports with SEBI. The audit covers financial statements, compliance with regulations, and adherence to internal policies." },
                            { q: "Can I provide intraday trading tips after registration?", a: "Yes, registered Research Analysts can provide intraday trading calls, positional trading recommendations, and short-term price targets. All such recommendations must comply with disclosure norms and be based on proper research methodology." },
                            { q: "Can I run a paid Telegram or WhatsApp group for stock tips?", a: "Yes, but only after obtaining SEBI Research Analyst Registration. Running paid groups for stock recommendations without registration is illegal and attracts penalties. All research shared must comply with disclosure and conduct norms." },
                            { q: "What is the penalty for operating without registration?", a: "Operating as a Research Analyst without registration can result in: Monetary penalties up to ₹25 lakhs or three times the profit made (whichever is higher), imprisonment up to 10 years, disgorgement of illegal gains, and permanent ban from securities markets." },
                            { q: "Can SEBI take action against unregistered analysts on social media?", a: "Yes. SEBI actively monitors social media platforms and takes stringent action against unregistered entities providing research or tips. Recent cases show SEBI issuing cease and desist orders, imposing heavy penalties, and initiating criminal proceedings." },
                            { q: "What is the difference between research and general market commentary?", a: "General market commentary (broad views on market trends, economic analysis, sector outlooks) without specific stock recommendations may not require registration. However, specific buy/sell recommendations, price targets, or trading calls on individual securities require registration." },
                            { q: "Can I provide research to institutional clients only?", a: "Yes, you can focus on institutional clients, but registration is still mandatory if you're providing research for consideration. The client type (retail or institutional) does not exempt you from registration requirements." },
                            { q: "Do I need separate registration for equity and commodity research?", a: "SEBI Research Analyst registration covers equity research. For commodity research, you may need separate registration or compliance with commodity market regulations. Consult with regulatory experts for multi-asset research activities." },
                            { q: "Can I provide research on unlisted companies or IPOs?", a: "Yes, registered Research Analysts can provide research on unlisted securities and companies proposing to list (IPOs). However, additional disclosures and caution regarding liquidity and information availability are required." },
                            { q: "What is the code of conduct for Research Analysts?", a: "Research Analysts must: Act with integrity and fairness, avoid conflicts of interest, make full disclosures, maintain independence, use proper research methodology, protect client confidentiality, avoid market manipulation, and comply with all SEBI regulations." },
                            { q: "Can I accept payment from companies I cover in my research?", a: "No. Accepting payment or benefits from companies covered in your research creates a conflict of interest and violates independence requirements. Research must be independent and unbiased. Any relationships with covered companies must be disclosed." },
                            { q: "What happens if my research recommendation goes wrong and clients lose money?", a: "Research Analysts are not liable for market losses if research was conducted with due diligence, proper methodology, and full disclosures. However, fraudulent research, material misrepresentation, or gross negligence can attract regulatory action and civil liability." },
                            { q: "Can I use the title 'Research Analyst' without registration?", a: "No. Using designations like 'Research Analyst', 'Stock Analyst', 'Market Expert', or similar titles while providing research without registration is prohibited and can attract regulatory action." },
                            { q: "How is research different from investment advice?", a: "Research provides analysis, opinions, and recommendations on securities generally available to multiple clients. Investment advice is personalized guidance tailored to an individual client's financial situation, goals, and risk profile. Different regulations apply to each." },
                            { q: "Can a registered Research Analyst also distribute mutual funds or insurance?", a: "Yes, but with proper segregation and disclosures. If you're also a mutual fund distributor or insurance agent, you must clearly separate research activities from distribution, disclose all roles to clients, and avoid conflicts of interest." },
                            { q: "What is the supervisory body for Research Analysts?", a: "SEBI has designated stock exchanges (BSE, NSE) and other recognized bodies as supervisory authorities for Research Analysts. These bodies monitor compliance, handle complaints, and maintain the security deposits." },
                            { q: "Can my registration be suspended or cancelled?", a: "Yes. SEBI can suspend or cancel registration for: Violation of regulations, fraudulent activities, failure to renew registration, non-compliance with directives, providing false information, or failure to maintain eligibility criteria." },
                            { q: "How do I handle client complaints?", a: "Maintain a documented complaint handling mechanism, acknowledge complaints promptly, investigate fairly, resolve within reasonable time, maintain complaint records, and report serious complaints to SEBI/supervisory body as required." },
                            { q: "Can I transfer my Research Analyst registration to another entity?", a: "Registration is entity-specific and non-transferable. If you're changing your business structure or entity, you need to apply for fresh registration for the new entity while surrendering the old registration." },
                            { q: "What is the role of professional advisors in the registration process?", a: "Professional advisors (like Devyani & Co.) help with: Structuring the research model, preparing documentation, drafting internal policies, ensuring regulatory compliance, liaising with SEBI, and building scalable, compliant research frameworks aligned with long-term credibility." },
                            { q: "Why should I choose professional assistance for registration?", a: "Professional assistance ensures: Faster approval through proper documentation, compliance-ready internal frameworks, understanding of regulatory nuances, avoidance of common pitfalls, scalable business structuring, and focus on long-term credibility rather than just obtaining a license." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:border-indigo-500/30 transition-all">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors">
                                    <span className="pr-8">{faq.q}</span>
                                    <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" size={20} />
                                </summary>
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100 text-sm">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build a Credible Research Practice?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            We help build compliant, ethical, and scalable research models aligned with SEBI's intent and long-term market credibility.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-500/25">
                                Start Your Registration
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                Learn About Us
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
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Note</h4>
                            <p className="text-slate-600">
                                At Devyani & Co., we help build compliant, ethical, and scalable research models aligned with SEBI's intent and long-term market credibility.
                            </p>
                        </div>
                        <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-600 transition-all flex items-center shadow-xl whitespace-nowrap">
                            Get Expert Assistance
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
