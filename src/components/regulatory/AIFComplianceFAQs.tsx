"use client";
import { useState } from 'react';
import { ChevronDown, Calendar, AlertTriangle } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
    category: string;
}

export default function AIFComplianceFAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const faqs: FAQ[] = [
        // Reporting Requirements
        {
            category: "Reporting Requirements",
            question: "What are the quarterly reporting requirements for AIFs?",
            answer: "AIFs must submit portfolio disclosures to SEBI within 10 days of quarter-end, including details of investments, NAV, and scheme performance. Unaudited financial statements must be provided to investors within 30 days of quarter-end."
        },
        {
            category: "Reporting Requirements",
            question: "When are annual audited financials due?",
            answer: "Annual audited financial statements must be submitted to SEBI and investors within 6 months from the end of the financial year. The audit must be conducted by a SEBI-registered auditor."
        },
        {
            category: "Reporting Requirements",
            question: "What information must be disclosed in the annual report?",
            answer: "The annual report must include: audited financials, portfolio details, NAV movements, fee disclosures, related party transactions, material changes, compliance certificate, and auditor's report."
        },
        {
            category: "Reporting Requirements",
            question: "How frequently should NAV be calculated?",
            answer: "Category I & II AIFs must calculate NAV at least annually. Category III AIFs must calculate NAV quarterly. However, many funds calculate NAV more frequently for operational purposes and investor reporting."
        },
        {
            category: "Reporting Requirements",
            question: "What are the requirements for reporting material changes?",
            answer: "Material changes including key personnel changes, investment strategy modifications, or regulatory actions must be reported to SEBI within 15 days. Investors must be informed immediately."
        },

        // Valuation & NAV
        {
            category: "Valuation & NAV",
            question: "Who can conduct valuations for AIF investments?",
            answer: "Valuations must be conducted by an independent SEBI-registered valuer or as per the valuation policy disclosed in the PPM. The valuer must be independent of the fund manager."
        },
        {
            category: "Valuation & NAV",
            question: "What is the frequency of valuation for unlisted securities?",
            answer: "Unlisted securities must be valued at least annually for Category I & II AIFs, and quarterly for Category III AIFs. More frequent valuations may be required based on the fund's policy."
        },
        {
            category: "Valuation & NAV",
            question: "How should distressed assets be valued?",
            answer: "Distressed assets must be valued using appropriate methodologies such as discounted cash flow, market comparables, or liquidation value, as per the fund's valuation policy and industry best practices."
        },

        // Compliance Obligations
        {
            category: "Compliance Obligations",
            question: "What is the role of the Compliance Officer?",
            answer: "The Compliance Officer ensures adherence to SEBI regulations, monitors compliance with the PPM, maintains compliance records, conducts internal audits, and reports compliance status to the board and SEBI."
        },
        {
            category: "Compliance Obligations",
            question: "How often should the board of the AIF meet?",
            answer: "The board must meet at least once every quarter to review fund performance, compliance status, risk management, and other material matters. Minutes must be maintained and made available to SEBI upon request."
        },
        {
            category: "Compliance Obligations",
            question: "What are the insider trading compliance requirements?",
            answer: "AIFs must have a comprehensive insider trading policy, maintain a restricted list, monitor trades by key personnel, and ensure compliance with SEBI's Prohibition of Insider Trading Regulations."
        },
        {
            category: "Compliance Obligations",
            question: "What records must be maintained by AIFs?",
            answer: "AIFs must maintain: investor records, transaction records, NAV calculations, compliance certificates, board minutes, audit reports, valuation reports, and correspondence with SEBI for at least 8 years."
        },

        // Investor Relations
        {
            category: "Investor Relations",
            question: "How should investor grievances be handled?",
            answer: "AIFs must have a documented grievance redressal mechanism, acknowledge complaints within 7 days, resolve within 30 days, and maintain a complaint register. Unresolved complaints can be escalated to SEBI."
        },
        {
            category: "Investor Relations",
            question: "What disclosures are required to investors?",
            answer: "Investors must receive: quarterly unaudited statements, annual audited financials, NAV updates, material changes, fee disclosures, and any information that may affect their investment decision."
        },
        {
            category: "Investor Relations",
            question: "Can investors inspect fund records?",
            answer: "Yes, investors have the right to inspect relevant fund records during business hours upon reasonable notice. However, confidential information of other investors must be protected."
        },

        // Penalties & Violations
        {
            category: "Penalties & Violations",
            question: "What is the penalty for late filing of reports?",
            answer: "Late filing attracts a penalty of ₹1,000 per day of delay. Repeated violations may lead to higher penalties, suspension of operations, or cancellation of registration."
        },
        {
            category: "Penalties & Violations",
            question: "What happens if the AIF violates investment restrictions?",
            answer: "Violations of investment restrictions can result in penalties up to ₹1 crore, directions to rectify, suspension of new subscriptions, or in severe cases, cancellation of registration."
        },
        {
            category: "Penalties & Violations",
            question: "Can SEBI conduct inspections of AIFs?",
            answer: "Yes, SEBI has the power to conduct inspections at any time. AIFs must cooperate fully, provide all requested documents, and address any observations or deficiencies identified."
        },

        // Operational Compliance
        {
            category: "Operational Compliance",
            question: "What are the requirements for changing the auditor?",
            answer: "Auditor changes must be reported to SEBI within 15 days along with reasons. The new auditor must be SEBI-registered and independent. Proper handover and transition must be ensured."
        },
        {
            category: "Operational Compliance",
            question: "How should related party transactions be managed?",
            answer: "Related party transactions must be disclosed in the PPM, conducted at arm's length, independently valued, approved by the board, and disclosed to investors and SEBI."
        },
        {
            category: "Operational Compliance",
            question: "What are the cybersecurity compliance requirements?",
            answer: "AIFs must implement robust cybersecurity measures including data encryption, access controls, regular security audits, incident response plans, and compliance with data protection regulations."
        },
        {
            category: "Operational Compliance",
            question: "How to handle changes in key personnel?",
            answer: "Changes in Fund Manager or Compliance Officer must be reported to SEBI within 15 days. The new personnel must meet fit and proper criteria and have relevant qualifications and experience."
        },

        // Scheme Modifications
        {
            category: "Scheme Modifications",
            question: "Can the investment strategy be modified?",
            answer: "Material changes to investment strategy require SEBI approval and consent from 75% of investors by value. The modified strategy must be documented and disclosed to all stakeholders."
        },
        {
            category: "Scheme Modifications",
            question: "What is the process for extending the scheme tenure?",
            answer: "Tenure extension requires approval from 75% of investors by value, notification to SEBI, and disclosure of reasons. The extension should be reasonable and in investors' interest."
        },
        {
            category: "Scheme Modifications",
            question: "Can the fee structure be changed post-launch?",
            answer: "Fee structure changes require investor approval (75% by value) and SEBI notification. Any increase in fees must be justified and cannot be retrospective."
        }
    ];

    const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];
    const filteredFAQs = activeCategory === 'all' ? faqs : faqs.filter(faq => faq.category === activeCategory);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-rose-50 px-4 py-2 rounded-full mb-4">
                            <AlertTriangle className="text-rose-600" size={20} />
                            <span className="text-sm font-bold text-rose-600 uppercase tracking-wide">Compliance Guide</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            AIF Compliance FAQs
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Essential compliance requirements and best practices for AIF operations
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === category
                                        ? 'bg-rose-600 text-white shadow-lg'
                                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                            >
                                {category === 'all' ? 'All Questions' : category}
                            </button>
                        ))}
                    </div>

                    {/* FAQ List */}
                    <div className="space-y-4">
                        {filteredFAQs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 text-left flex justify-between items-start gap-4 hover:bg-slate-100 transition-colors"
                                >
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-rose-600 mb-1">{faq.category}</div>
                                        <h3 className="font-bold text-slate-900 text-lg">{faq.question}</h3>
                                    </div>
                                    <ChevronDown
                                        className={`flex-shrink-0 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        size={20}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-200 pt-4 bg-white">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white">
                        <Calendar className="mx-auto mb-4" size={40} />
                        <h3 className="text-2xl font-bold mb-3">Need Compliance Support?</h3>
                        <p className="mb-6 text-rose-100">Our team ensures your AIF remains compliant with all SEBI regulations.</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-3 bg-white text-rose-600 font-bold rounded-xl hover:bg-rose-50 transition-all shadow-lg"
                        >
                            Get Compliance Assistance
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
