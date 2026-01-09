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
                        <p className="text-slate-600 mt-2">FAQs – Registration of Investment Advisers with SEBI</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "1. What is Investment Adviser registration under SEBI?", a: "Investment Adviser registration is a mandatory approval required to provide fee-based, personalised investment advice on securities under the regulatory framework of Securities and Exchange Board of India." },
                            { q: "2. Who is required to register as an Investment Adviser?", a: "Any individual or entity providing personalised investment advice for consideration must obtain Investment Adviser registration from SEBI." },
                            { q: "3. Is SEBI registration mandatory for giving investment advice?", a: "Yes, providing personalised investment advice without SEBI registration is prohibited and may attract regulatory action." },
                            { q: "4. What activities are covered under investment advisory services?", a: "Activities include portfolio advice, financial planning linked to securities, and recommendations to buy, sell, or hold securities." },
                            { q: "5. Who is not required to obtain Investment Adviser registration?", a: "Professionals such as CAs, CSs, or lawyers are exempt only when investment advice is incidental to their primary profession and not charged separately." },
                            { q: "6. Can an individual apply for Investment Adviser registration?", a: "Yes, individuals can apply, provided they meet the qualification, certification, and regulatory deposit requirements." },
                            { q: "7. Can a company or LLP apply for Investment Adviser registration?", a: "Yes, companies, LLPs, and partnership firms can apply as non-individual Investment Advisers." },
                            { q: "8. What qualifications are required for Investment Adviser registration?", a: "Applicants must possess a recognised graduate degree along with the prescribed NISM certification as specified by SEBI." },
                            { q: "9. Is NISM certification mandatory for Investment Advisers?", a: "Yes, holding and maintaining a valid NISM certification is mandatory for registration and continued practice." },
                            { q: "10. What is the capital or deposit requirement for Investment Advisers?", a: "SEBI requires a regulatory deposit to be maintained, the amount of which depends on whether the applicant is an individual or non-individual." },
                            { q: "11. Is net worth requirement applicable for Investment Advisers?", a: "SEBI has shifted from a net worth model to a regulatory deposit-based framework for Investment Advisers." },
                            { q: "12. How long does the Investment Adviser registration process take?", a: "The registration process typically takes a few months, depending on application completeness and SEBI’s review." },
                            { q: "13. What is the application form for Investment Adviser registration?", a: "The application is made in Form A along with supporting documents and prescribed fees." },
                            { q: "14. What government fees are payable to SEBI?", a: "Applicants must pay a non-refundable application fee and a registration fee as prescribed by SEBI." },
                            { q: "15. Is the SEBI registration fee refundable?", a: "No, SEBI application and registration fees are non-refundable." },
                            { q: "16. Can a fintech platform apply for Investment Adviser registration?", a: "Yes, fintech platforms offering personalised investment advice must obtain SEBI Investment Adviser registration." },
                            { q: "17. Can Investment Advisers charge fees from clients?", a: "Yes, registered Investment Advisers are permitted to charge advisory fees within SEBI-prescribed limits and disclosure norms." },
                            { q: "18. Can Investment Advisers earn commission from products?", a: "No, Investment Advisers are prohibited from earning commissions or incentives from product distribution." },
                            { q: "19. What is segregation between advisory and distribution?", a: "Segregation ensures that advisory services and distribution activities are completely independent with no overlap." },
                            { q: "20. Is client-level segregation mandatory?", a: "Yes, advisory clients and distribution clients must be completely segregated without any overlap." },
                            { q: "21. Is infrastructure required for Investment Adviser registration?", a: "Yes, applicants must demonstrate adequate office infrastructure, systems, and compliance capabilities." },
                            { q: "22. Is a compliance officer mandatory for Investment Advisers?", a: "Non-individual Investment Advisers must appoint a Compliance Officer or engage an independent compliance professional." },
                            { q: "23. What is the role of a Principal Officer?", a: "The Principal Officer is responsible for regulatory compliance, governance, and communication with SEBI." },
                            { q: "24. Can Investment Advisers operate online or digitally?", a: "Yes, Investment Advisers may operate digitally, subject to compliance with data security and disclosure requirements." },
                            { q: "25. Is a website mandatory for Investment Advisers?", a: "Yes, registered Investment Advisers must maintain a functional website with mandatory disclosures." },
                            { q: "26. What disclosures must be made on the website?", a: "Disclosures include registration details, services offered, fee structure, grievance mechanism, and disclaimers." },
                            { q: "27. Is client agreement mandatory for Investment Advisers?", a: "Yes, a written agreement with each client is mandatory before providing advisory services." },
                            { q: "28. Is risk profiling compulsory before giving advice?", a: "Yes, risk profiling is mandatory to ensure suitability of advice." },
                            { q: "29. Can Investment Advisers advise NRIs or foreign clients?", a: "Yes, subject to compliance with Indian regulations and foreign exchange laws." },
                            { q: "30. Can Investment Advisers advise on all types of securities?", a: "Yes, provided the advice is suitable to the client’s risk profile and properly documented." },
                            { q: "31. Is registration valid for a lifetime?", a: "SEBI registration remains valid unless suspended or cancelled, subject to ongoing compliance." },
                            { q: "32. Can SEBI reject an Investment Adviser application?", a: "Yes, SEBI may reject applications that do not meet eligibility or compliance standards." },
                            { q: "33. Can a rejected applicant reapply?", a: "Yes, applicants may reapply after rectifying deficiencies, subject to SEBI guidelines." },
                            { q: "34. Are Investment Advisers subject to SEBI inspection?", a: "Yes, SEBI has the power to inspect registered Investment Advisers at any time." },
                            { q: "35. Is annual audit mandatory after registration?", a: "Yes, an annual compliance audit is mandatory for all registered Investment Advisers." },
                            { q: "36. What records must be maintained by Investment Advisers?", a: "Records relating to clients, advice, agreements, communications, and fees must be maintained for the prescribed period." },
                            { q: "37. Is KYC compliance mandatory for clients?", a: "Yes, all clients must complete KYC before receiving investment advice." },
                            { q: "38. Is CKYC registration required for Investment Advisers?", a: "Yes, Investment Advisers are required to comply with CKYC norms." },
                            { q: "39. Is grievance redressal mechanism mandatory?", a: "Yes, Investment Advisers must have a structured grievance redressal mechanism in place." },
                            { q: "40. Is SCORES registration mandatory?", a: "Yes, Investment Advisers must register on the SEBI SCORES platform for investor grievance handling." },
                            { q: "41. Can Investment Advisers outsource compliance functions?", a: "Compliance functions may be outsourced, but regulatory responsibility remains with the Investment Adviser." },
                            { q: "42. Can Investment Advisers change their business structure after registration?", a: "Yes, but prior approval or intimation to SEBI may be required depending on the change." },
                            { q: "43. Can Investment Advisers expand into Portfolio Management Services?", a: "Yes, but a separate SEBI registration is required for Portfolio Management Services." },
                            { q: "44. Are Investment Advisers required to follow a code of conduct?", a: "Yes, SEBI has prescribed a code of conduct that must be followed at all times." },
                            { q: "45. Can Investment Advisers provide model portfolios?", a: "Yes, provided the advice remains personalised and aligned with client suitability norms." },
                            { q: "46. Is data privacy an important compliance requirement?", a: "Yes, client data must be securely stored and protected against unauthorised access." },
                            { q: "47. What happens in case of non-compliance?", a: "SEBI may impose penalties, issue directions, or suspend or cancel registration." },
                            { q: "48. Can Investment Advisers surrender their registration voluntarily?", a: "Yes, Investment Advisers may surrender registration by following SEBI’s prescribed procedure." },
                            { q: "49. Is ongoing professional certification required?", a: "Yes, Investment Advisers and associated persons must maintain valid certifications as prescribed." },
                            { q: "50. Why should Investment Advisers seek professional support for registration?", a: "Professional guidance ensures correct structuring, faster approval, and long-term regulatory compliance." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-[var(--brand-secondary)] transition-colors text-left">
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
