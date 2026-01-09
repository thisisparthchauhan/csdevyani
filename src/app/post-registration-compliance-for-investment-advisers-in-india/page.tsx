import { Metadata } from 'next';
import { ShieldCheck, Scale, FileText, UserCheck, ScrollText, AlertTriangle, CheckCircle2, FileSearch, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Post-Registration Compliance for Investment Advisers in India – SEBI Requirements',
    description: 'Post-Registration Compliance for Investment Advisers in India under SEBI regulations. Understand mandatory obligations, audits, client onboarding, and ongoing reporting requirements.',
    alternates: {
        canonical: '/post-registration-compliance-for-investment-advisers-in-india',
    },
};

export default function PostRegistrationCompliance() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[var(--brand-secondary)]/20 z-0"></div>
                <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-emerald-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-700/50 mb-6 animate-fade-in-up">
                            <ShieldCheck size={16} className="text-emerald-400" />
                            <span className="text-xs font-bold text-emerald-100 uppercase tracking-widest">SEBI Compliance</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Post-Registration <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                                Compliance for Advisers
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                            The certificate is just the beginning. Navigate mandatory audits, reporting, and client fiduciary duties with confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-500 transition-all shadow-lg hover:shadow-emerald-500/25">
                                Ensure Compliance
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="#obligations" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                View Obligations
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Compliance is Continuous</h2>
                        <p className="text-slate-600 mt-4 leading-relaxed text-lg">
                            Once Investment Adviser Registration in India is granted, the responsibility does not end with the certificate.
                            Registered Investment Advisers are expected to operate as fiduciaries, with continuous compliance, documentation,
                            and reporting obligations under the supervision of SEBI.
                        </p>
                        <div className="mt-8 inline-flex items-center bg-red-50 text-red-700 px-6 py-3 rounded-xl border border-red-100 font-medium text-sm">
                            <AlertTriangle size={18} className="mr-2" />
                            Failure to comply can result in inspections, penalties, or cancellation of registration.
                        </div>
                    </div>
                </div>
            </section>

            {/* KEY OBLIGATIONS GRID */}
            <section id="obligations" className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <UserCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Client Onboarding & KYC</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• Identity and address verification</li>
                                <li>• PAN verification</li>
                                <li>• Client risk profiling questionnaire</li>
                                <li>• Financial information collection</li>
                                <li>• Client consent & declarations</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                <ScrollText size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Risk Profiling & Suitability</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• Mandatory risk profiling before advice</li>
                                <li>• Assess risk appetite & capacity</li>
                                <li>• Document suitability analysis</li>
                                <li>• Align advice with risk profile</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6">
                                <FileText size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Agreements & Disclosures</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• Written agreement with every client</li>
                                <li>• Define scope, fees, & obligations</li>
                                <li>• Disclose conflicts of interest</li>
                                <li>• Clear grievance mechanisms</li>
                            </ul>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                                <Scale size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Use of Technology</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• Segregation of advisory & distribution</li>
                                <li>• Automated compliance monitoring</li>
                                <li>• Secure record-keeping systems</li>
                                <li>• Data protection & confidentiality</li>
                            </ul>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6">
                                <FileSearch size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Documentation (5 Years)</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• KYC & Client Data</li>
                                <li>• Risk Profiling Records</li>
                                <li>• Advisory Rationale</li>
                                <li>• Communication Records (Log)</li>
                            </ul>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Audits & Reporting</h3>
                            <ul className="space-y-3 text-sm text-slate-600">
                                <li>• Annual Compliance Audit</li>
                                <li>• Periodic reporting to SEBI</li>
                                <li>• Investor Grievance Redressal</li>
                                <li>• Inspection readiness</li>
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
                        <p className="text-slate-600 mt-2">FAQs – Post-Registration Compliance for Investment Advisers in India</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "1. What compliances are required after SEBI Investment Adviser registration?", a: "After registration, Investment Advisers must comply with client onboarding norms, risk profiling, record maintenance, periodic reporting, annual compliance audits, and investor grievance redressal requirements as prescribed by SEBI." },
                            { q: "2. Is annual compliance audit mandatory for Investment Advisers?", a: "Yes, every registered Investment Adviser must conduct an annual compliance audit through a practising professional and submit the audit report within the prescribed timeline." },
                            { q: "3. How long must client records be maintained?", a: "Client KYC documents, risk profiling records, advisory rationale, agreements, and communication records must be preserved for at least five years." },
                            { q: "4. Is risk profiling compulsory for every client?", a: "Yes, risk profiling is mandatory before providing any personalised investment advice. Advice must always align with the client’s documented risk profile." },
                            { q: "5. Is a written agreement required with clients?", a: "Yes, Investment Advisers must execute a written agreement with each client defining scope of services, fees, disclosures, and grievance redressal mechanism." },
                            { q: "6. Can an Investment Adviser earn commission from product distribution?", a: "No, registered Investment Advisers are prohibited from earning commissions or engaging in distribution activities. Advisory and distribution must be completely segregated." },
                            { q: "7. Are Investment Advisers required to maintain a website?", a: "Yes, a functional website displaying registration details, disclosures, services offered, and grievance redressal information is mandatory." },
                            { q: "8. What disclosures must be made to clients?", a: "Investment Advisers must disclose their registration number, fee structure, scope of services, conflicts of interest, and limitations of advisory services." },
                            { q: "9. Is registration on SEBI SCORES mandatory?", a: "Yes, Investment Advisers must register on the SEBI SCORES platform to receive, track, and resolve investor complaints." },
                            { q: "10. Who is responsible for compliance in a non-individual Investment Adviser?", a: "The Principal Officer remains responsible for compliance, supported by a Compliance Officer or an independent compliance professional." },
                            { q: "11. Are Investment Advisers subject to SEBI inspections?", a: "Yes, SEBI may conduct inspections at any time to verify compliance, documentation, and adherence to regulatory requirements." },
                            { q: "12. What happens if an Investment Adviser fails to comply with regulations?", a: "Non-compliance may lead to penalties, directions, suspension, or cancellation of registration depending on the severity of violations." },
                            { q: "13. Is client-level segregation mandatory?", a: "Yes, advisory clients and distribution clients must be completely separate, with no overlap in revenue, referrals, or services." },
                            { q: "14. Are Investment Advisers required to maintain compliance manuals?", a: "Yes, maintaining documented policies and internal compliance procedures is strongly recommended and often reviewed during audits and inspections." },
                            { q: "15. Can Investment Advisers use technology tools for advisory and compliance?", a: "Yes, technology tools may be used, provided their scope, limitations, and role in advisory are transparently disclosed to clients." },
                            { q: "16. Are Investment Advisers required to update client information periodically?", a: "Yes, client risk profiles and financial information should be reviewed and updated periodically to ensure continued suitability of advice." },
                            { q: "17. Is KYC compliance mandatory even for existing clients?", a: "Yes, all clients must comply with KYC norms, including updated identity and financial information, irrespective of prior relationship." },
                            { q: "18. Are fee disclosures mandatory in advisory agreements?", a: "Yes, the fee structure, billing frequency, and mode of payment must be clearly disclosed in writing to clients." },
                            { q: "19. Can Investment Advisers provide advice to overseas clients?", a: "Investment Advisers may advise overseas clients, subject to compliance with applicable Indian regulations and foreign exchange laws." },
                            { q: "20. How can Investment Advisers stay compliant on an ongoing basis?", a: "Regular internal reviews, timely audits, proper documentation, updated disclosures, and continuous monitoring of regulatory changes are essential to remain compliant." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-slate-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-emerald-600 transition-colors text-left">
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
            </section>

            {/* CTA / FOOTER NOTE */}
            <section className="py-12 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
                        <div className="max-w-2xl">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Professional Support Note</h4>
                            <p className="text-slate-600">
                                At Devyani & Co., we support Investment Advisers with end-to-end post-registration compliance, including audits, reporting, documentation systems, and inspection preparedness — ensuring that advisory businesses operate with confidence and regulatory clarity.
                            </p>
                        </div>
                        <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all flex items-center shadow-xl whitespace-nowrap">
                            Get Compliance Support
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
