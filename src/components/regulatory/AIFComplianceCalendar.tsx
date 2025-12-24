"use client";
import { Calendar, Clock, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function AIFComplianceCalendar() {
    const complianceItems = [
        {
            frequency: "Quarterly",
            color: "blue",
            icon: Calendar,
            items: [
                {
                    task: "Portfolio Disclosure to SEBI",
                    deadline: "Within 10 days of quarter-end",
                    details: "Complete portfolio holdings, transactions, and NAV details",
                    critical: true
                },
                {
                    task: "Unaudited Financial Statements to Investors",
                    deadline: "Within 30 days of quarter-end",
                    details: "Income statement, balance sheet, and cash flow statement",
                    critical: true
                },
                {
                    task: "NAV Calculation (Category III)",
                    deadline: "End of quarter",
                    details: "Independent valuation of all investments",
                    critical: true
                },
                {
                    task: "Board Meeting",
                    deadline: "At least once per quarter",
                    details: "Review performance, compliance, and risk management",
                    critical: false
                }
            ]
        },
        {
            frequency: "Half-Yearly",
            color: "purple",
            icon: FileText,
            items: [
                {
                    task: "Compliance Certificate to SEBI",
                    deadline: "Within 30 days of half-year end",
                    details: "Certification of compliance with all SEBI regulations",
                    critical: true
                },
                {
                    task: "Updated Investor List",
                    deadline: "Within 30 days of half-year end",
                    details: "Complete list with investment amounts and contact details",
                    critical: true
                },
                {
                    task: "Risk Management Review",
                    deadline: "End of half-year",
                    details: "Assessment of portfolio risks and mitigation strategies",
                    critical: false
                }
            ]
        },
        {
            frequency: "Annual",
            color: "emerald",
            icon: CheckCircle2,
            items: [
                {
                    task: "Audited Financial Statements",
                    deadline: "Within 6 months of FY end",
                    details: "Complete audited financials by SEBI-registered auditor",
                    critical: true
                },
                {
                    task: "Annual Report to Investors",
                    deadline: "Within 6 months of FY end",
                    details: "Comprehensive report including performance and disclosures",
                    critical: true
                },
                {
                    task: "Annual Compliance Report to SEBI",
                    deadline: "Within 6 months of FY end",
                    details: "Detailed compliance status and certifications",
                    critical: true
                },
                {
                    task: "NAV Calculation (Category I & II)",
                    deadline: "End of financial year",
                    details: "Annual valuation of all investments",
                    critical: true
                },
                {
                    task: "Annual Fee Payment to SEBI",
                    deadline: "Before April 30",
                    details: "Based on fund corpus size",
                    critical: true
                },
                {
                    task: "Tax Filings",
                    deadline: "As per Income Tax Act",
                    details: "ITR and TDS returns",
                    critical: true
                },
                {
                    task: "Renewal of Registrations",
                    deadline: "Before expiry",
                    details: "Custodian, auditor, and other service provider agreements",
                    critical: false
                }
            ]
        },
        {
            frequency: "Event-Based",
            color: "amber",
            icon: AlertCircle,
            items: [
                {
                    task: "Material Change Reporting",
                    deadline: "Within 15 days",
                    details: "Key personnel changes, strategy modifications, regulatory actions",
                    critical: true
                },
                {
                    task: "Investor Complaint Resolution",
                    deadline: "Within 30 days",
                    details: "Acknowledge within 7 days, resolve within 30 days",
                    critical: true
                },
                {
                    task: "Related Party Transaction Disclosure",
                    deadline: "Immediate",
                    details: "Prior board approval and investor notification",
                    critical: true
                },
                {
                    task: "Scheme Modification Approval",
                    deadline: "Before implementation",
                    details: "SEBI approval and 75% investor consent",
                    critical: true
                },
                {
                    task: "Incident Reporting",
                    deadline: "Immediate",
                    details: "Cybersecurity breaches, frauds, or operational failures",
                    critical: true
                }
            ]
        }
    ];

    const penaltyStructure = [
        { violation: "Late Filing of Reports", penalty: "₹1,000 per day", severity: "Medium" },
        { violation: "Non-compliance with Investment Restrictions", penalty: "Up to ₹1 crore", severity: "High" },
        { violation: "Failure to Maintain Records", penalty: "₹1 lakh per instance", severity: "Medium" },
        { violation: "Misrepresentation to Investors", penalty: "Up to ₹25 crores", severity: "Critical" },
        { violation: "Violation of Code of Conduct", penalty: "Suspension/Cancellation", severity: "Critical" }
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; text: string; border: string; badge: string }> = {
            blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', badge: 'bg-blue-100' },
            purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', badge: 'bg-purple-100' },
            emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', badge: 'bg-emerald-100' },
            amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', badge: 'bg-amber-100' }
        };
        return colors[color];
    };

    const getSeverityColor = (severity: string) => {
        const colors: Record<string, string> = {
            'Medium': 'bg-yellow-100 text-yellow-700',
            'High': 'bg-orange-100 text-orange-700',
            'Critical': 'bg-red-100 text-red-700'
        };
        return colors[severity] || 'bg-gray-100 text-gray-700';
    };

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full mb-4">
                            <Calendar className="text-emerald-600" size={20} />
                            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wide">Compliance Calendar</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            AIF Compliance Timeline
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Stay on top of all regulatory requirements with our comprehensive compliance calendar
                        </p>
                    </div>

                    {/* Compliance Items */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {complianceItems.map((section, idx) => {
                            const colors = getColorClasses(section.color);
                            return (
                                <div key={idx} className={`${colors.bg} rounded-2xl p-6 border ${colors.border}`}>
                                    <div className="flex items-center space-x-3 mb-6">
                                        <div className={`w-12 h-12 ${colors.badge} rounded-xl flex items-center justify-center`}>
                                            <section.icon className={colors.text} size={24} />
                                        </div>
                                        <h3 className={`text-2xl font-bold ${colors.text}`}>{section.frequency}</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {section.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="bg-white rounded-xl p-4 border border-slate-200">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h4 className="font-bold text-slate-900 text-sm flex-1">{item.task}</h4>
                                                    {item.critical && (
                                                        <span className="flex-shrink-0 ml-2 px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                                                            Critical
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <Clock size={14} className="text-slate-400" />
                                                    <span className="text-xs font-semibold text-slate-600">{item.deadline}</span>
                                                </div>
                                                <p className="text-xs text-slate-500 leading-relaxed">{item.details}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Penalty Structure */}
                    <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center space-x-3 mb-8">
                            <AlertCircle className="text-red-300" size={32} />
                            <h3 className="text-2xl md:text-3xl font-bold">Penalty Structure</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-red-700">
                                        <th className="text-left py-3 px-4 text-red-200 font-semibold text-sm">Violation</th>
                                        <th className="text-left py-3 px-4 text-red-200 font-semibold text-sm">Penalty</th>
                                        <th className="text-left py-3 px-4 text-red-200 font-semibold text-sm">Severity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {penaltyStructure.map((item, idx) => (
                                        <tr key={idx} className="border-b border-red-800/50 hover:bg-red-800/30 transition-colors">
                                            <td className="py-4 px-4 text-white font-medium">{item.violation}</td>
                                            <td className="py-4 px-4 text-red-100">{item.penalty}</td>
                                            <td className="py-4 px-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getSeverityColor(item.severity)}`}>
                                                    {item.severity}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 bg-red-800/50 border border-red-700 rounded-xl p-4">
                            <p className="text-red-100 text-sm">
                                <strong>Note:</strong> Penalties may vary based on the nature and frequency of violations. SEBI may also impose additional sanctions including suspension or cancellation of registration.
                            </p>
                        </div>
                    </div>

                    {/* Best Practices */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <CheckCircle2 className="text-blue-600" size={24} />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Maintain Calendar</h4>
                            <p className="text-sm text-slate-600">Use a compliance calendar to track all deadlines and ensure timely submissions.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <FileText className="text-purple-600" size={24} />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Document Everything</h4>
                            <p className="text-sm text-slate-600">Maintain comprehensive records of all compliance activities and decisions.</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                                <AlertCircle className="text-emerald-600" size={24} />
                            </div>
                            <h4 className="font-bold text-slate-900 mb-2">Regular Audits</h4>
                            <p className="text-sm text-slate-600">Conduct periodic internal compliance audits to identify and address gaps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
