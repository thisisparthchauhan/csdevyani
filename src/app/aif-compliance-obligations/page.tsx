import { Metadata } from 'next';
import {
    ShieldCheck,
    FileText,
    Briefcase,
    AlertTriangle,
    Calendar,
    CheckCircle2,
    ArrowRight,
    Users,
    BarChart3,
    ChevronDown,
    Building2,
    Scale
} from 'lucide-react';
import Link from 'next/link';
import AIFComplianceCalendar from '@/components/regulatory/AIFComplianceCalendar';

export const metadata: Metadata = {
    title: 'AIF Post-Registration Compliance & Ongoing Obligations – SEBI Regulations',
    description: 'Post-Registration Compliance & Ongoing Obligations for Alternative Investment Funds (AIFs) in India. Covers audits, reporting, PPM adherence, and category-wise compliance calendars.',
    alternates: {
        canonical: '/aif-compliance-obligations',
    },
};

export default function AIFCompliance() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[var(--brand-secondary)]/10 z-0"></div>
                {/* Decorative Elements */}
                <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-indigo-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-indigo-700/50 mb-6 animate-fade-in-up">
                            <ShieldCheck size={16} className="text-indigo-400" />
                            <span className="text-xs font-bold text-indigo-100 uppercase tracking-widest">SEBI AIF Regulations</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Post-Registration <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-300">
                                Compliance for AIFs
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                            The real regulatory discipline begins after registration. Ensure operational readiness, PPM adherence, and timely reporting to clear SEBI scrutiny.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/25">
                                AIF Compliance Support
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="#calendar" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                View Calendar
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO & OPERATIONAL READINESS */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">Operational Readiness</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Once Alternative Investment Fund Registration is granted, SEBI expects AIFs to function within a structured governance framework.
                                Before commencing fund-raising, the AIF must ensure:
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Finalisation of constitutive documents & PPM",
                                    "Appointment of key functionaries",
                                    "Operational bank & escrow accounts",
                                    "Robust record-keeping & reporting systems",
                                    "Regulatory readiness before first investor onboarding"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-slate-700 font-medium">
                                        <CheckCircle2 size={18} className="mr-3 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                                <AlertTriangle size={20} className="mr-2 text-amber-500" />
                                Why Ongoing Compliance Matters
                            </h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                AIFs operate in a trust-based regulatory environment. Non-compliance can attract regulatory scrutiny, monetary penalties, or restrictions on fund operations.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                                    <ShieldCheck className="mx-auto text-indigo-500 mb-2" size={24} />
                                    <span className="text-xs font-bold text-slate-500 uppercase">Regulator Confidence</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-center">
                                    <Users className="mx-auto text-indigo-500 mb-2" size={24} />
                                    <span className="text-xs font-bold text-slate-500 uppercase">Investor Protection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE OBLIGATIONS GRID */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="text-indigo-600 font-bold uppercase tracking-wider text-xs">Lifecycle Management</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Core Post-Registration Obligations</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                                <Briefcase size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Fund Raising & Placement</h3>
                            <p className="text-sm text-slate-500">Private placement only. Issue final PPM, ensure min investment thresholds, and strictly no public solicitation.</p>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                                <Users size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Investor Onboarding</h3>
                            <p className="text-sm text-slate-500">Strict KYC/AML checks, verification of eligibility, and accurate documentation of commitments.</p>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                                <FileText size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Reporting & Disclosures</h3>
                            <p className="text-sm text-slate-500">Quarterly reports to SEBI, annual compliance confirmations, and transparent investment disclosures.</p>
                        </div>
                        {/* Card 4 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                                <BarChart3 size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Valuation</h3>
                            <p className="text-sm text-slate-500">Follow PPM policies, appoint independent valuers where needed, and ensure methodological consistency.</p>
                        </div>
                        {/* Card 5 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center text-rose-600 mb-4">
                                <Scale size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Investment Monitoring</h3>
                            <p className="text-sm text-slate-500">Monitor sectoral limits, concentration norms, and leverage restrictions. Document all deviations.</p>
                        </div>
                        {/* Card 6 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-600 mb-4">
                                <Building2 size={20} />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">Sponsor Commitment</h3>
                            <p className="text-sm text-slate-500">Maintain minimum continuing interest. Reduction below limits affects regulatory standing.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY WISE COMPLIANCE CALENDAR */}
            <section id="calendar" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center">
                            <Calendar className="mr-3 text-indigo-600" />
                            AIF Compliance Calendar
                        </h2>
                        <p className="text-slate-600 mt-2">Category-wise breakdown of ongoing regulatory obligations.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Category I */}
                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all">
                            <div className="bg-blue-100 text-blue-700 font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-4">Category I</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Venture Capital / SME / Angel</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Private placement only</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Min corpus maintenance</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Quarterly SEBI Reporting</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Annual Compliance & Financial Audit</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Sponsor Interest (2.5% or ₹5 Cr)</li>
                            </ul>
                        </div>

                        {/* Category II */}
                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all">
                            <div className="bg-purple-100 text-purple-700 font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-4">Category II</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Private Equity / Debt Funds</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>No public fund raising</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>No leverage (except operational)</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Quarterly SEBI Reporting</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Annual Compliance Test</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Valuation as per PPM</li>
                            </ul>
                        </div>

                        {/* Category III */}
                        <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 hover:bg-white hover:shadow-lg hover:-translate-y-2 transition-all">
                            <div className="bg-orange-100 text-orange-700 font-bold text-xs uppercase px-3 py-1 rounded-full inline-block mb-4">Category III</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Hedge Funds / Long-Short</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Enhanced PPM Disclosures</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Strict Leverage Monitoring</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Frequent Valuation & SEBI Reporting</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Higher Sponsor Interest (5% or ₹10 Cr)</li>
                                <li className="flex items-start"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>Strong Risk Mgmt Framework</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        <p className="text-slate-600 mt-2">FAQs – AIF Compliance, Category-wise Obligations, PPM & Reporting</p>
                    </div>

                    <div className="space-y-8">
                        {/* A. Category-wise AIF Compliance */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">A. Category-wise AIF Compliance</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "1. Are compliance requirements different for Category I, II and III AIFs?", a: "Yes. While core governance and reporting obligations apply to all AIFs, Category III AIFs are subject to enhanced risk management, leverage monitoring, and disclosure requirements." },
                                    { q: "2. What are the key compliance obligations common to all AIF categories?", a: "Common obligations include private placement fund raising, investor KYC, periodic reporting, valuation, audits, disclosure to investors, and regulatory filings." },
                                    { q: "3. What additional compliance applies specifically to Category I AIFs?", a: "Category I AIFs must comply with sector-specific conditions, especially for venture capital, infrastructure, and social venture investments." },
                                    { q: "4. Can Category I AIFs receive regulatory incentives?", a: "Yes, certain Category I AIFs may receive regulatory or policy incentives due to their developmental focus, subject to applicable laws." },
                                    { q: "5. What is the main compliance restriction for Category II AIFs?", a: "Category II AIFs are prohibited from undertaking leverage except for temporary funding requirements for operational needs." },
                                    { q: "6. Are borrowing and leverage allowed for Category III AIFs?", a: "Yes, Category III AIFs may use leverage, subject to strict disclosure, monitoring, and reporting norms." },
                                    { q: "7. Is leverage reporting mandatory for Category III AIFs?", a: "Yes, Category III AIFs must continuously monitor and periodically report leverage and exposure details." },
                                    { q: "8. Do all AIF categories require appointment of a Manager?", a: "Yes, every AIF must have a designated Manager responsible for investment decisions and compliance." },
                                    { q: "9. Is sponsor continuing interest applicable across all AIF categories?", a: "Yes, but the quantum differs: Category I & II require lower continuing interest compared to Category III." },
                                    { q: "10. Can an AIF change its category after registration?", a: "Change of category is generally not permitted and would require fresh registration or regulatory approval, depending on circumstances." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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

                        {/* B. PPM Compliance */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">B. PPM (Private Placement Memorandum) Compliance</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "11. What is the regulatory importance of the PPM in an AIF?", a: "The PPM is the primary disclosure document forming the legal and regulatory foundation of the AIF." },
                                    { q: "12. Is the PPM required to be filed with the regulator?", a: "Yes, the PPM is reviewed during registration and must remain consistent with regulatory disclosures." },
                                    { q: "13. Can an AIF raise funds without a final PPM?", a: "No. Fund raising cannot commence until the final PPM is issued to investors." },
                                    { q: "14. What key disclosures must be included in the PPM?", a: "Investment strategy, risk factors, governance framework, fees, conflicts of interest, valuation policy, and investor rights." },
                                    { q: "15. Are risk disclosures in the PPM mandatory?", a: "Yes. Risks must be clearly and fairly disclosed without understatement." },
                                    { q: "16. Can the PPM be amended after registration?", a: "Yes, but material changes require investor consent and regulatory intimation or approval." },
                                    { q: "17. What happens if the PPM and actual operations differ?", a: "Deviation from the PPM may lead to regulatory action, investor disputes, and compliance violations." },
                                    { q: "18. Is there a separate PPM required for each scheme?", a: "Yes, scheme-specific disclosures must be provided where multiple schemes are launched." },
                                    { q: "19. Who is responsible for accuracy of PPM disclosures?", a: "The Sponsor and Manager are jointly responsible for the accuracy and completeness of disclosures." },
                                    { q: "20. Are marketing materials allowed beyond the PPM?", a: "Only factual, non-misleading communication consistent with the PPM is permitted. Public solicitation is prohibited." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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

                        {/* C. Fund Raising & Investor Compliance */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">C. Fund Raising & Investor Compliance</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "21. Can an AIF raise funds from the general public?", a: "No. AIFs can raise funds only through private placement." },
                                    { q: "22. What is the maximum number of investors allowed per scheme?", a: "Each scheme is subject to a prescribed maximum number of investors as per regulations." },
                                    { q: "23. Is minimum investment requirement mandatory for every investor?", a: "Yes. Minimum investment thresholds apply and must be strictly adhered to." },
                                    { q: "24. Is investor KYC mandatory before accepting funds?", a: "Yes, KYC and AML checks must be completed before accepting capital commitments." },
                                    { q: "25. Can AIFs accept foreign investors?", a: "Yes, subject to applicable foreign exchange and regulatory norms." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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

                        {/* D. Reporting & Disclosure Obligations */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">D. Reporting & Disclosure Obligations</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "26. What periodic reports must AIFs submit to the regulator?", a: "AIFs must submit quarterly and annual reports covering investments, exposures, and fund activity." },
                                    { q: "27. Is reporting required even if the fund has not made investments?", a: "Yes, reporting obligations apply regardless of investment activity." },
                                    { q: "28. Are disclosures to investors mandatory?", a: "Yes, periodic disclosures on portfolio, valuation, and performance must be provided to investors." },
                                    { q: "29. What valuation frequency applies to AIFs?", a: "Valuation frequency depends on the category and valuation policy disclosed in the PPM." },
                                    { q: "30. Is independent valuation mandatory?", a: "Independent valuation is required where specified and is considered best practice across categories." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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

                        {/* E. Audit & Governance */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">E. Audit & Governance</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "31. Is annual audit mandatory for AIFs?", a: "Yes, both financial audit and compliance audit are mandatory." },
                                    { q: "32. Who can conduct the compliance audit of an AIF?", a: "A practising Chartered Accountant, Company Secretary, or Cost Accountant may conduct the audit." },
                                    { q: "33. Are audit observations required to be reported?", a: "Yes, material observations and corrective actions must be addressed and documented." },
                                    { q: "34. Is conflict of interest monitoring mandatory?", a: "Yes, conflicts must be identified, managed, and disclosed in line with governance norms." },
                                    { q: "35. Are related party transactions allowed in AIFs?", a: "They are permitted only if disclosed and managed in accordance with the PPM and regulations." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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

                        {/* F. Changes, Events & Regulatory Intimation */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">F. Changes, Events & Regulatory Intimation</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "36. Does change in Sponsor or Manager require regulatory approval?", a: "Yes, prior approval or immediate intimation is required, depending on the nature of change." },
                                    { q: "37. Is approval required for change in investment strategy?", a: "Yes, material changes require investor consent and regulatory approval or intimation." },
                                    { q: "38. What events require immediate regulatory intimation?", a: "Change in control, key personnel, sponsor, manager, or material governance structure." },
                                    { q: "39. Can an AIF launch multiple schemes under one registration?", a: "Yes, subject to compliance with scheme-level disclosures and reporting." },
                                    { q: "40. Is scheme tenure extension allowed?", a: "Yes, subject to investor approval and compliance with regulatory norms." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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

                        {/* G. Winding-up & Closure */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">G. Winding-up & Closure</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "41. What happens when an AIF scheme reaches maturity?", a: "The scheme must be wound up, assets liquidated, and proceeds distributed to investors." },
                                    { q: "42. Is investor approval required for early winding-up?", a: "Yes, early termination requires investor consent and regulatory reporting." },
                                    { q: "43. Are final reports required after winding-up?", a: "Yes, final reports must be submitted post-closure." },
                                    { q: "44. Can an AIF surrender its registration?", a: "Yes, registration may be surrendered subject to settlement of obligations and regulatory approval." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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

                        {/* H. Practical Compliance Concerns */}
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 border-b pb-2">H. Practical Compliance Concerns</h3>
                            <div className="space-y-4">
                                {[
                                    { q: "45. What are common compliance failures observed in AIFs?", a: "Delayed reporting, PPM deviations, weak disclosures, and governance gaps." },
                                    { q: "46. Can compliance functions be outsourced?", a: "Yes, but responsibility always remains with the Sponsor and Manager." },
                                    { q: "47. Are electronic records permitted for AIF compliance?", a: "Yes, provided records are secure, retrievable, and tamper-proof." },
                                    { q: "48. Is inspection by the regulator possible at any time?", a: "Yes, inspections may be conducted with or without prior notice." },
                                    { q: "49. What are the consequences of non-compliance by an AIF?", a: "Penalties, restrictions, suspension, or cancellation of registration may be imposed." },
                                    { q: "50. How can AIFs ensure long-term compliance confidence?", a: "By maintaining strong governance, disciplined reporting, accurate disclosures, and proactive compliance management." }
                                ].map((faq, idx) => (
                                    <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                        <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-indigo-600 transition-colors text-left">
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
                </div>
            </section>

            {/* COMPREHENSIVE COMPLIANCE CALENDAR */}
            <AIFComplianceCalendar />

            {/* CTA */}
            <section className="py-12 bg-white border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-indigo-900 border border-indigo-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-xl">
                        <div className="max-w-2xl">
                            <h4 className="text-xl font-bold mb-2">Expert AIF Compliance Support</h4>
                            <p className="text-indigo-200">
                                We help AIFs design compliance calendars, track reporting deadlines, and coordinate audits — ensuring disciplined, predictable, and regulator-aligned fund operations.
                            </p>
                        </div>
                        <Link href="/contact" className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all flex items-center shadow-lg whitespace-nowrap">
                            Contact Our Team
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
