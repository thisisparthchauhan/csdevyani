"use client";
import { FileText, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function AIFDocumentationGuide() {
    const documentCategories = [
        {
            title: "Sponsor/Manager Documents",
            icon: FileText,
            color: "blue",
            documents: [
                { name: "Certificate of Incorporation", required: true },
                { name: "PAN Card of Entity", required: true },
                { name: "Audited Financial Statements (Last 3 years)", required: true },
                { name: "Net Worth Certificate (CA certified)", required: true },
                { name: "Board Resolution for AIF sponsorship", required: true },
                { name: "Track Record Evidence (Fund management/Financial services)", required: true },
                { name: "List of Key Personnel with CVs", required: true },
                { name: "Organizational Structure Chart", required: false }
            ]
        },
        {
            title: "Fund Structure Documents",
            icon: FileText,
            color: "purple",
            documents: [
                { name: "Trust Deed / LLP Agreement / MOA & AOA", required: true },
                { name: "Draft Private Placement Memorandum (PPM)", required: true },
                { name: "Investment Strategy Document", required: true },
                { name: "Risk Management Framework", required: true },
                { name: "Valuation Policy", required: true },
                { name: "Compliance Manual", required: true },
                { name: "Code of Conduct", required: true },
                { name: "Conflict of Interest Policy", required: false }
            ]
        },
        {
            title: "Operational Documents",
            icon: FileText,
            color: "emerald",
            documents: [
                { name: "Custodian Agreement (Draft)", required: true },
                { name: "Auditor Appointment Letter", required: true },
                { name: "Banker Details and Account Opening Forms", required: true },
                { name: "Office Address Proof", required: true },
                { name: "IT Infrastructure Details", required: false },
                { name: "Cybersecurity Policy", required: false },
                { name: "Business Continuity Plan", required: false },
                { name: "Investor Grievance Redressal Mechanism", required: true }
            ]
        },
        {
            title: "Key Personnel Documents",
            icon: FileText,
            color: "amber",
            documents: [
                { name: "Fund Manager - PAN, Aadhaar, Educational Certificates", required: true },
                { name: "Fund Manager - NISM Certification", required: true },
                { name: "Fund Manager - Experience Certificates", required: true },
                { name: "Compliance Officer - Qualification Proof", required: true },
                { name: "Compliance Officer - NISM Certification", required: true },
                { name: "KYC Documents of all Directors/Partners", required: true },
                { name: "Declaration of No Adverse Regulatory History", required: true },
                { name: "Consent Letters from Key Personnel", required: true }
            ]
        },
        {
            title: "Regulatory & Compliance",
            icon: FileText,
            color: "rose",
            documents: [
                { name: "SEBI Application Form (duly filled)", required: true },
                { name: "Payment Proof of Registration Fees", required: true },
                { name: "Undertaking on Letterhead", required: true },
                { name: "Declaration of Compliance with SEBI Regulations", required: true },
                { name: "Anti-Money Laundering (AML) Policy", required: true },
                { name: "Know Your Customer (KYC) Policy", required: true },
                { name: "FATCA/CRS Compliance Framework", required: false },
                { name: "Data Protection and Privacy Policy", required: false }
            ]
        }
    ];

    const timeline = [
        { week: "Week 1-2", task: "Document Preparation & Internal Review", status: "preparation" },
        { week: "Week 2-3", task: "SEBI Application Filing", status: "filing" },
        { week: "Week 3-6", task: "SEBI Scrutiny & Query Response", status: "review" },
        { week: "Week 6-8", task: "Final Approval & Clarifications", status: "approval" },
        { week: "Week 8-12", task: "Certificate Issuance", status: "completion" }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; text: string; border: string }> = {
            blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
            purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
            emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200' },
            amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200' },
            rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-200' }
        };
        return colors[color];
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
                            <FileText className="text-blue-600" size={20} />
                            <span className="text-sm font-bold text-blue-600 uppercase tracking-wide">Complete Checklist</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Documentation Requirements
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Comprehensive list of documents required for AIF registration with SEBI
                        </p>
                    </div>

                    {/* Document Categories */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {documentCategories.map((category, idx) => {
                            const colors = getColorClasses(category.color);
                            return (
                                <div key={idx} className={`${colors.bg} rounded-2xl p-6 border ${colors.border}`}>
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center border ${colors.border}`}>
                                            <category.icon className={colors.text} size={24} />
                                        </div>
                                        <h3 className={`text-xl font-bold ${colors.text}`}>{category.title}</h3>
                                    </div>
                                    <div className="space-y-3">
                                        {category.documents.map((doc, docIdx) => (
                                            <div key={docIdx} className="flex items-start space-x-3 bg-white rounded-lg p-3">
                                                <div className="flex-shrink-0 mt-0.5">
                                                    {doc.required ? (
                                                        <CheckCircle2 className="text-green-500" size={18} />
                                                    ) : (
                                                        <AlertCircle className="text-slate-400" size={18} />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-sm font-medium text-slate-900">{doc.name}</p>
                                                    <p className="text-xs text-slate-500 mt-0.5">
                                                        {doc.required ? 'Mandatory' : 'Recommended'}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Registration Timeline */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center space-x-3 mb-8">
                            <Clock className="text-amber-400" size={28} />
                            <h3 className="text-2xl md:text-3xl font-bold">Registration Timeline</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            {timeline.map((item, idx) => (
                                <div key={idx} className="relative">
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                                        <div className="text-amber-400 font-bold text-sm mb-2">{item.week}</div>
                                        <div className="text-white text-sm leading-relaxed">{item.task}</div>
                                    </div>
                                    {idx < timeline.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-amber-400/50"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
                            <p className="text-amber-200 text-sm">
                                <strong>Note:</strong> Timeline may vary based on application completeness and SEBI's query resolution process. Complex structures may require additional time.
                            </p>
                        </div>
                    </div>

                    {/* Fees Structure */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                            <h4 className="font-bold text-blue-900 mb-2">Registration Fee</h4>
                            <p className="text-3xl font-bold text-blue-600 mb-2">₹5 Lakhs</p>
                            <p className="text-sm text-blue-700">One-time payment + GST</p>
                        </div>
                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                            <h4 className="font-bold text-purple-900 mb-2">Annual Fee</h4>
                            <p className="text-3xl font-bold text-purple-600 mb-2">₹5-25 Lakhs</p>
                            <p className="text-sm text-purple-700">Based on corpus size</p>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200">
                            <h4 className="font-bold text-emerald-900 mb-2">Professional Fees</h4>
                            <p className="text-3xl font-bold text-emerald-600 mb-2">Variable</p>
                            <p className="text-sm text-emerald-700">Legal, CA, Compliance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
