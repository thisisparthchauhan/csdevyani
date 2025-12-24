"use client";
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
    category: string;
}

export default function AIFComprehensiveFAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const faqs: FAQ[] = [
        // Registration Process
        {
            category: "Registration Process",
            question: "What is the minimum corpus requirement for AIF registration?",
            answer: "The minimum corpus requirement is ₹20 crores for all AIF categories (Category I, II, and III). This corpus must be raised within the specified timeline post-registration."
        },
        {
            category: "Registration Process",
            question: "Can foreign entities sponsor an AIF in India?",
            answer: "Yes, foreign entities can sponsor an AIF in India, subject to compliance with RBI's Foreign Exchange Management Act (FEMA) regulations and obtaining necessary approvals. The sponsor must meet SEBI's fit and proper criteria."
        },
        {
            category: "Registration Process",
            question: "What is the typical timeline for AIF registration?",
            answer: "The typical timeline is 8-12 weeks from submission of a complete application. This includes SEBI's review period, query responses, and final certificate issuance. Complex applications may take longer."
        },
        {
            category: "Registration Process",
            question: "Can an AIF have multiple schemes under one registration?",
            answer: "Yes, an AIF can launch multiple schemes under a single registration, subject to SEBI approval for each scheme. Each scheme must have a defined investment strategy and comply with the overall AIF category regulations."
        },
        {
            category: "Registration Process",
            question: "What are the key sponsor eligibility criteria?",
            answer: "Sponsors must have: (1) Minimum net worth of ₹10 crores, (2) Track record of at least 5 years in fund management or 10 years in financial services, (3) No adverse regulatory history, (4) Qualified key personnel with relevant experience."
        },
        {
            category: "Registration Process",
            question: "What is the registration fee for AIF?",
            answer: "The one-time registration fee is ₹5 lakhs plus applicable GST. Additionally, annual fees are payable based on the fund's corpus size, ranging from ₹5 lakhs to ₹25 lakhs."
        },

        // Compliance & Operations
        {
            category: "Compliance & Operations",
            question: "What is the lock-in period for AIF investments?",
            answer: "Category I and II AIFs have a minimum lock-in period of 3 years from the date of investment or from the date of closure of the scheme, whichever is earlier. Category III AIFs do not have a mandatory lock-in period."
        },
        {
            category: "Compliance & Operations",
            question: "Can AIFs invest in listed securities?",
            answer: "Yes, but with restrictions: Category I AIFs have limited exposure to listed securities. Category II AIFs can invest in listed securities with certain restrictions. Category III AIFs can freely invest in listed securities, including derivatives."
        },
        {
            category: "Compliance & Operations",
            question: "What is the maximum number of investors allowed in an AIF scheme?",
            answer: "A maximum of 1,000 investors are permitted per scheme. This limit ensures the fund remains a privately pooled vehicle and doesn't become a public offering."
        },
        {
            category: "Compliance & Operations",
            question: "What is the minimum investment amount per investor?",
            answer: "The minimum investment is ₹1 crore per investor. However, employees and directors of the AIF or its manager can invest a minimum of ₹25 lakhs."
        },
        {
            category: "Compliance & Operations",
            question: "Are AIFs required to appoint a custodian?",
            answer: "Yes, AIFs must appoint a SEBI-registered custodian for safekeeping of securities and assets. The custodian ensures proper segregation and protection of investor assets."
        },
        {
            category: "Compliance & Operations",
            question: "What are the leverage limits for different AIF categories?",
            answer: "Category I AIFs cannot use leverage. Category II AIFs can use leverage up to 2 times the Net Asset Value (NAV) for a day. Category III AIFs can use leverage up to 2 times NAV."
        },

        // Tax & Structuring
        {
            category: "Tax & Structuring",
            question: "What is the tax treatment for AIF investors?",
            answer: "Category I and II AIFs enjoy pass-through status, meaning income is taxed in the hands of investors. Category III AIFs are taxed at the fund level at applicable rates before distribution to investors."
        },
        {
            category: "Tax & Structuring",
            question: "Can AIFs be structured as trusts or companies?",
            answer: "AIFs can be structured as a Trust, Limited Liability Partnership (LLP), or a Company. The choice depends on tax considerations, operational flexibility, and investor preferences."
        },
        {
            category: "Tax & Structuring",
            question: "Are there any tax benefits for investing in Category I AIFs?",
            answer: "Yes, investments in Category I AIFs (specifically Venture Capital Funds and Social Venture Funds) may qualify for tax exemptions under Section 10(23FB) of the Income Tax Act, subject to conditions."
        },

        // Reporting & Disclosures
        {
            category: "Reporting & Disclosures",
            question: "What are the periodic reporting requirements to SEBI?",
            answer: "AIFs must submit: (1) Quarterly portfolio disclosures within 10 days of quarter-end, (2) Half-yearly compliance certificates, (3) Annual audited financial statements within 6 months of FY end, (4) Material changes immediately."
        },
        {
            category: "Reporting & Disclosures",
            question: "Can AIFs charge performance fees?",
            answer: "Yes, AIFs can charge performance fees subject to the high-water mark principle. The fee structure must be clearly disclosed in the Private Placement Memorandum (PPM) and agreed upon by investors."
        },
        {
            category: "Reporting & Disclosures",
            question: "How frequently should NAV be calculated and disclosed?",
            answer: "NAV must be calculated at least annually for Category I and II AIFs, and quarterly for Category III AIFs. However, many funds calculate NAV more frequently for operational purposes."
        },

        // Modifications & Exits
        {
            category: "Modifications & Exits",
            question: "Can the investment strategy be changed post-registration?",
            answer: "Material changes to the investment strategy require prior SEBI approval and consent from at least 75% of investors by value. Minor changes may require only investor notification."
        },
        {
            category: "Modifications & Exits",
            question: "What is the process for winding up an AIF?",
            answer: "Winding up requires: (1) Approval from 75% of investors by value, (2) Notification to SEBI, (3) Liquidation of assets, (4) Settlement of liabilities, (5) Distribution to investors, (6) Final audit and closure report to SEBI."
        },
        {
            category: "Modifications & Exits",
            question: "Can an AIF scheme be extended beyond its original tenure?",
            answer: "Yes, the tenure can be extended with approval from 75% of investors by value. The extension must be disclosed to SEBI and should be within reasonable limits."
        },

        // International Aspects
        {
            category: "International Aspects",
            question: "Can AIFs invest in overseas securities?",
            answer: "Yes, AIFs can invest in overseas securities within the limits prescribed by RBI under the Liberalized Remittance Scheme (LRS) or other applicable regulations. Proper approvals and compliance with FEMA are mandatory."
        },
        {
            category: "International Aspects",
            question: "Can NRIs and FPIs invest in Indian AIFs?",
            answer: "Yes, Non-Resident Indians (NRIs) and Foreign Portfolio Investors (FPIs) can invest in Indian AIFs, subject to compliance with FEMA regulations and RBI guidelines on foreign investment."
        },
        {
            category: "International Aspects",
            question: "Are there any restrictions on repatriation of returns for foreign investors?",
            answer: "Foreign investors can repatriate their returns subject to applicable tax deductions and FEMA compliance. The fund must ensure proper documentation and RBI reporting."
        },

        // Operational Queries
        {
            category: "Operational Queries",
            question: "Can an AIF invest in its associate or group companies?",
            answer: "Investments in associate or group companies are permitted but must be disclosed in the PPM and subject to strict conflict of interest management and independent valuation."
        },
        {
            category: "Operational Queries",
            question: "What happens if the AIF fails to raise the minimum corpus?",
            answer: "If the minimum corpus of ₹20 crores is not raised within the specified timeline, the AIF must either: (1) Request an extension from SEBI, (2) Return the funds to investors, or (3) Surrender the registration."
        },
        {
            category: "Operational Queries",
            question: "Can key personnel of the AIF be changed?",
            answer: "Yes, but material changes in key personnel (Fund Manager, Compliance Officer) must be reported to SEBI within 15 days. The new personnel must meet SEBI's fit and proper criteria."
        },
        {
            category: "Operational Queries",
            question: "What are the requirements for side letters with investors?",
            answer: "Side letters must be disclosed to SEBI and should not provide preferential treatment that materially disadvantages other investors. All material terms must be documented and approved."
        },
        {
            category: "Operational Queries",
            question: "How should investor grievances be handled?",
            answer: "AIFs must have a documented grievance redressal mechanism, appoint a designated officer, acknowledge complaints within 7 days, and resolve them within 30 days. Unresolved complaints can be escalated to SEBI."
        }
    ];

    const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];
    const filteredFAQs = activeCategory === 'all' ? faqs : faqs.filter(faq => faq.category === activeCategory);

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full mb-4">
                            <HelpCircle className="text-indigo-600" size={20} />
                            <span className="text-sm font-bold text-indigo-600 uppercase tracking-wide">Comprehensive Guide</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Everything you need to know about AIF registration and operations
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === category
                                        ? 'bg-indigo-600 text-white shadow-lg'
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
                                className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 text-left flex justify-between items-start gap-4 hover:bg-slate-50 transition-colors"
                                >
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-indigo-600 mb-1">{faq.category}</div>
                                        <h3 className="font-bold text-slate-900 text-lg">{faq.question}</h3>
                                    </div>
                                    <ChevronDown
                                        className={`flex-shrink-0 text-slate-400 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        size={20}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
                        <p className="mb-6 text-indigo-100">Our regulatory experts are here to help you navigate the AIF registration process.</p>
                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-lg"
                        >
                            Schedule a Consultation
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
