import { Metadata } from 'next';
import {
    Shield, CheckCircle2, AlertTriangle, FileText, Database, Lock,
    Search, Calendar, Clock, BarChart3, Users, ChevronDown, ArrowRight,
    Briefcase, Award, TrendingUp, UserCheck, Globe, Building2, Scale
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Stock Broker Registration SEBI – Trading Member, Clearing Member',
    description: 'Complete guide to Stock Broker Registration in India (SEBI). Covers eligibility, net worth requirements for Trading Members (TM), Clearing Members (CM), and registration process.',
    alternates: {
        canonical: '/stock-broker-registration-sebi',
    },
    keywords: 'Stock Broker Registration SEBI, Trading Member Registration, Clearing Member SEBI, BSE vs NSE Membership, SEBI Net Worth Requirements',
};

export default function StockBrokerRegistration() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-700/50 mb-6 animate-fade-in-up">
                            <Shield size={16} className="text-blue-400" />
                            <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">SEBI Registration</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Stock Broker Registration <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                SEBI
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
                            Mandatory statutory requirement for entities intending to deal in securities. No exchange membership or business arrangement can substitute SEBI registration.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25">
                                Start Application Process
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* MANDATORY WARNING */}
            <section className="bg-amber-50 border-b border-amber-100 py-6">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-amber-800 font-medium flex items-center justify-center gap-2">
                        <AlertTriangle size={20} className="text-amber-600" />
                        Acting as a stock broker without SEBI registration is illegal, irrespective of whether trades are proprietary or client-based.
                    </p>
                </div>
            </section>

            {/* WHO MUST OBTAIN */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Who Must Obtain Registration?</h2>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    A "stock broker" is a member of a recognised stock exchange permitted to deal in securities. Registration is compulsory for:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Members of recognised stock exchanges",
                                        "Proprietary trading members",
                                        "Trading members executing client trades",
                                        "Entities clearing or settling trades on behalf of clients"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center text-slate-700">
                                            <CheckCircle2 size={18} className="text-blue-600 mr-3 flex-shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Broker Categories</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "Trading Member (TM)", desc: "Executes trades on exchange; clearing via CM/PCM." },
                                        { title: "Self-Clearing Member (SCM)", desc: "Executes and clears own trades." },
                                        { title: "Clearing Member (CM)", desc: "Clears and settles trades for self and others." },
                                        { title: "Professional Clearing Member (PCM)", desc: "Dedicated to clearing services; prohibited from trading." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                                            <h4 className="font-bold text-blue-900 text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    ))}
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
                            <h2 className="text-3xl font-bold text-slate-900">Eligibility & Financial Requirements</h2>
                            <p className="text-slate-600 mt-2">SEBI examines eligibility on objective parameters, not business intent.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                            {/* Criteria */}
                            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <Scale className="text-blue-600 mr-2" size={24} />
                                    Core Eligibility Criteria
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { title: "Legal Constitution", desc: "Individual, Partnership, LLP, or Corporate entity aligning with exchange bye-laws." },
                                        { title: "Fit and Proper", desc: "Integrity, good reputation, no economic offences, and financial soundness." },
                                        { title: "Infrastructure", desc: "Office premises, trading terminals, connectivity, and risk management systems." },
                                        { title: "Qualified Personnel", desc: "Compliance Officer, Authorized Persons, and certified dealers." },
                                    ].map((item, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Net Worth */}
                            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                    <TrendingUp className="text-blue-400 mr-2" size={24} />
                                    Minimum Net Worth
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left opacity-90">
                                        <thead className="text-xs uppercase bg-blue-800 text-blue-200">
                                            <tr>
                                                <th className="px-4 py-3 rounded-l-lg">Category</th>
                                                <th className="px-4 py-3 rounded-r-lg">Min. Net Worth</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-blue-800">
                                            {[
                                                { cat: "Trading Member (TM)", val: "₹1 Crore" },
                                                { cat: "Self-Clearing Member (SCM)", val: "₹2 Crore" },
                                                { cat: "Clearing Member (CM)", val: "₹3 Crore" },
                                                { cat: "Professional Clearing Member (PCM)", val: "₹8 Crore" },
                                            ].map((row, idx) => (
                                                <tr key={idx}>
                                                    <td className="px-4 py-3 font-medium">{row.cat}</td>
                                                    <td className="px-4 py-3 font-bold text-blue-300">{row.val}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-6 bg-blue-800/50 p-4 rounded-xl text-xs text-blue-200 border border-blue-700">
                                    <p className="font-bold mb-1">Note:</p>
                                    <p>Net worth must be maintained on a continuous basis, not just at the time of registration.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* REGISTRATION PROCESS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Application Process – Step by Step</h2>
                        <div className="relative">
                            <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-slate-200 hidden md:block"></div>
                            <div className="space-y-10">
                                {[
                                    { step: "1", title: "Exchange Membership", desc: "Obtain membership of recognised stock exchange (NSE/BSE/MSEI). Exchange approval is a pre-condition to SEBI registration." },
                                    { step: "2", title: "Application to SEBI (Form A)", desc: "Submit application via the exchange with constitutional docs, net worth certs, and infrastructure details." },
                                    { step: "3", title: "Regulatory Scrutiny", desc: "SEBI/Exchange may seek clarifications, additional docs, or personal interaction. Satisfaction is discretionary." },
                                    { step: "4", title: "Grant of Registration", desc: "On satisfaction, SEBI issues Certificate of Registration (Form D). Specific to exchange membership." }
                                ].map((item, idx) => (
                                    <div key={idx} className="relative flex gap-6 md:pl-8">
                                        <div className="absolute left-0 top-1 w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-sm ring-1 ring-slate-200 hidden md:block z-10"></div>
                                        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center font-bold text-sm md:text-base border border-slate-200 md:hidden">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PERMITTED ACTIVITIES */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-slate-900 mb-10">What a Registered Broker Can Do</h2>
                        <div className="flex flex-wrapjustify-center gap-4">
                            {[
                                "Execute trades on exchanges",
                                "Undertake proprietary trading",
                                "Appoint Authorised Persons",
                                "Access clearing systems",
                                "Earn brokerage income"
                            ].map((item, idx) => (
                                <span key={idx} className="inline-block bg-white px-5 py-3 rounded-full border border-slate-200 text-slate-700 font-medium text-sm shadow-sm">
                                    {item}
                                </span>
                            ))}
                        </div>
                        <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100 inline-block text-left w-full max-w-2xl">
                            <h4 className="flex items-center text-blue-900 font-bold mb-2">
                                <Database size={18} className="mr-2" />
                                Continuous Supervision
                            </h4>
                            <p className="text-sm text-slate-600">
                                Registration does not end regulatory responsibility. It is the beginning of continuous supervision through inspections, audits, and investor grievance monitoring.
                            </p>
                            <div className="mt-4 pt-4 border-t border-blue-100">
                                <Link href="/post-registration-compliance-for-stock-brokers" className="text-blue-600 text-sm font-bold flex items-center hover:underline">
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
                            <h2 className="text-3xl font-bold text-slate-900">Stock Broker Registration – FAQs</h2>
                            <p className="text-slate-600 mt-2">Common questions about becoming a SEBI Registered Stock Broker.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "What is Stock Broker Registration with SEBI?", a: "It is the statutory registration required to act as a stock broker in India and execute trades on recognised stock exchanges. Without SEBI registration, broking activity is not permitted." },
                                { q: "Who is a stock broker as per SEBI?", a: "A stock broker is a SEBI-registered intermediary who is also a member of a recognised stock exchange and is permitted to trade on exchange platforms." },
                                { q: "Is stock exchange membership enough to start broking?", a: "No. Exchange membership and SEBI registration are linked but distinct. Trading as a broker is permitted only after SEBI issues the registration certificate." },
                                { q: "Can I run a broking business without SEBI registration if I only do proprietary trading?", a: "No. Proprietary trading as a \"member\" on exchange platform also requires registration under the applicable broker category." },
                                { q: "Is SEBI registration compulsory for sub-brokers or authorised persons?", a: "Authorised Persons operate under a registered stock broker. They do not take separate SEBI broker registration, but must be empanelled through the broker and comply with exchange norms." },
                                { q: "What is the difference between stock broker and investment adviser?", a: "A stock broker executes trades and provides broking services; an investment adviser provides regulated advice. Their registrations, permissions, and compliances are separate." },
                                { q: "Can a stock broker also be a research analyst or investment adviser?", a: "Yes, but only with separate registrations (if applicable) and strict segregation of activities, teams, conflicts, and disclosures." },
                                { q: "What is the legal framework for stock brokers in India?", a: "Stock brokers are governed under the SEBI Act, SEBI (Stock Brokers) Regulations, exchange bye-laws, clearing corporation rules, and SEBI/exchange circulars." },
                                { q: "What is SEBI \"fit and proper\" criteria for brokers?", a: "It is a suitability test covering integrity, reputation, competence, financial soundness, and clean regulatory track record of promoters/directors/partners." },
                                { q: "Can SEBI reject an application even if documents are submitted?", a: "Yes. Registration is granted only if SEBI is satisfied about eligibility, fit and proper status, infrastructure, and compliance readiness." },
                                { q: "Who can apply for Stock Broker Registration (SEBI)?", a: "Individuals, partnership firms, LLPs, and companies can apply, subject to exchange membership eligibility and SEBI fit-and-proper requirements." },
                                { q: "Can a new company apply for broker registration?", a: "Yes, a newly incorporated entity can apply if it meets membership requirements, net worth, governance, infrastructure, and compliance arrangements." },
                                { q: "Is prior experience mandatory to become a stock broker?", a: "Experience is considered positively, but eligibility is primarily based on compliance with regulatory and exchange admission criteria." },
                                { q: "What background checks are done for broker registration?", a: "Checks commonly include criminal history, market-related disciplinary actions, exchange defaulter lists, financial credibility, and regulatory proceedings." },
                                { q: "Does SEBI check directors/partners individually?", a: "Yes. Key persons and control persons are assessed for fit and proper status, including past disciplinary history." },
                                { q: "Can a partnership firm become a broker?", a: "Yes, if the exchange permits, partners meet eligibility criteria, and the firm fulfils net worth and infrastructure conditions." },
                                { q: "Can an LLP become a stock broker?", a: "Yes, subject to exchange admission and SEBI requirements, including governance, designated partners, and compliance structure." },
                                { q: "Can an individual become a stock broker?", a: "Yes, subject to exchange membership conditions and SEBI registration requirements. Practically, many brokers prefer corporate structure due to scale and compliance needs." },
                                { q: "Is there an age requirement to become a broker?", a: "For individuals and key persons, exchanges typically require adulthood and legal capacity to contract; specific membership criteria apply as per exchange rules." },
                                { q: "Is there a qualification requirement for directors or key staff?", a: "Key personnel must meet exchange/SEBI certification requirements and competency norms; dealers and associated persons often require prescribed market certifications." },
                                { q: "What are the common broker categories on exchanges?", a: "Trading Member (TM), Self-Clearing Member (SCM), Clearing Member (CM), and Professional Clearing Member (PCM) are commonly used classifications." },
                                { q: "What is a Trading Member (TM)?", a: "A TM executes trades on the exchange. Clearing and settlement may be through a clearing member unless the TM is self-clearing." },
                                { q: "What is a Clearing Member (CM)?", a: "A CM clears and settles trades, manages margins, and interfaces with clearing corporation obligations, subject to higher financial requirements." },
                                { q: "What is a Self-Clearing Member (SCM)?", a: "An SCM executes trades and clears/settles its own trades without depending on another clearing member." },
                                { q: "What is a Professional Clearing Member (PCM)?", a: "A PCM primarily provides clearing services for other trading members and has higher net worth and operational responsibilities." },
                                { q: "Can I start as a trading member and later become a clearing member?", a: "Yes, subject to meeting enhanced requirements, approvals, and migration process as per the exchange and clearing corporation." },
                                { q: "What is a discount broker model?", a: "It is a commercial model where brokerage is lower or flat-fee; however, the regulatory obligations remain the same." },
                                { q: "Can a broker offer both equity and derivatives?", a: "Yes, but segment-wise exchange approvals, net worth, deposits, and system readiness must be fulfilled." },
                                { q: "Can a broker offer commodity trading also?", a: "Commodity broking requires membership on commodity segments/exchanges and adherence to segment-specific requirements and approvals." },
                                { q: "Can a broker offer DP services (demat accounts) automatically?", a: "No. DP registration is a separate approval under depository regulations and depository bye-laws, with separate net worth and operational conditions." },
                                { q: "What is net worth requirement for SEBI stock broker registration?", a: "Net worth depends on broker category and segment (TM/SCM/CM/PCM) and is prescribed by exchanges/clearing corporations along with SEBI framework." },
                                { q: "How is net worth calculated for broker eligibility?", a: "Net worth is typically computed as paid-up capital plus free reserves minus intangible assets and other specified deductions, as per regulatory/exchange computation norms." },
                                { q: "Is continuous net worth maintenance compulsory after registration?", a: "Yes. Net worth is not a one-time condition. Continuous maintenance is expected, and shortfall can trigger restrictions." },
                                { q: "What is the difference between net worth and deposit with clearing corporation?", a: "Net worth is the firm’s financial strength; deposits (base/IFSC/SGF/other margins) are risk buffers placed with clearing corporation/exchange." },
                                { q: "Are exchange deposits refundable?", a: "Deposits are generally refundable subject to settlement of all liabilities and formal exit/surrender process." },
                                { q: "Do brokers need to maintain liquid assets?", a: "Yes, exchanges/clearing corporations often prescribe liquid asset components for meeting margin and risk requirements." },
                                { q: "Can net worth be funded through loans?", a: "Net worth must be genuine and compliant with computation norms; artificial inflation through non-permissible funding may be questioned during scrutiny." },
                                { q: "Does SEBI prescribe a single fixed capital amount for all brokers?", a: "No. Requirements vary by broker type, segment, and exchange/clearing corporation norms." },
                                { q: "Will SEBI verify bank statements and financials?", a: "Yes, financial capacity is examined through audited financials, net worth certificates, and supporting evidence." },
                                { q: "What if net worth falls below requirement after registration?", a: "The broker may face restrictions, enhanced monitoring, or membership suspension until the deficiency is rectified." },
                                { q: "What is the first step for Stock Broker Registration (SEBI)?", a: "The first step is to apply for membership with the recognised stock exchange in the intended segment." },
                                { q: "Is SEBI registration filed directly by the applicant?", a: "Typically, the application is routed through the stock exchange as per prescribed process and forms." },
                                { q: "What documents are generally required for broker registration?", a: "Constitutional documents, KYC of promoters/directors, net worth proof, infrastructure details, compliance setup, experience details, and declarations." },
                                { q: "Do I need office premises to apply?", a: "Yes. Adequate office space, systems, connectivity, and manpower readiness are generally verified." },
                                { q: "Is a technology vendor mandatory for broker operations?", a: "Brokers must use approved trading and risk systems. The exact approach depends on exchange-approved technology options." },
                                { q: "How long does the registration process take?", a: "It depends on completeness of documentation, exchange processing time, SEBI scrutiny, and query resolution." },
                                { q: "What are common reasons for application delays?", a: "Incomplete documents, fit-and-proper clarifications, net worth computation issues, inadequate infrastructure, and unresolved exchange queries." },
                                { q: "Can SEBI raise queries after submission?", a: "Yes. SEBI and exchanges may raise detailed queries and request clarifications, undertakings, or revised documents." },
                                { q: "What certificate is issued after approval?", a: "SEBI issues a Certificate of Registration as a stock broker, subject to terms and conditions." },
                                { q: "Can registration be transferred to another entity?", a: "No. Registration is not transferable. Change in control requires approvals; transfer typically needs structured regulatory process." },
                                { q: "What fees are payable for becoming a stock broker?", a: "Costs typically include exchange admission fees, SEBI application/registration fees, deposits to clearing corporation, and technology/compliance setup costs." },
                                { q: "Are SEBI application fees refundable if rejected?", a: "Generally, application fees are non-refundable." },
                                { q: "Are there annual recurring charges after registration?", a: "Yes. There are recurring charges like exchange fees, clearing charges, technology costs, audits, and compliance-related expenses." },
                                { q: "Does a stock broker need professional indemnity insurance?", a: "Depending on business model and exchange expectations, risk insurance may be advisable; some frameworks require specific coverage." },
                                { q: "Is GST applicable on brokerage and fees?", a: "Yes, GST applicability is subject to prevailing tax laws and invoicing structure." },
                                { q: "Can a broker appoint branches and franchise offices?", a: "Yes, but branches and AP/franchise arrangements must be permitted, documented, and compliant with exchange rules." },
                                { q: "Can a broker operate pan-India?", a: "Yes, subject to compliance with branch/AP requirements and operational capability." },
                                { q: "Is investor grievance mechanism compulsory from day one?", a: "Yes. A documented grievance redressal system is expected from commencement." },
                                { q: "Can a broker provide margin funding?", a: "Only if permitted under applicable regulations and exchange framework, with proper risk controls and disclosures." },
                                { q: "What is the safest way to structure a new broking set-up?", a: "A regulator-aligned structure includes strong governance, clean segregation of client funds, robust RMS, auditable systems, and a compliance-first operating model." }
                            ].map((faq, idx) => (
                                <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-blue-600 transition-colors text-left">
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
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Support for Exchange Membership?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Devyani & Co. helps you navigate exchange admission, net worth planning, and SEBI registration requirements seamlessly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-white/20">
                                Contact for Registration
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="/post-registration-compliance-for-stock-brokers" className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                                View Compliance Requirements
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
