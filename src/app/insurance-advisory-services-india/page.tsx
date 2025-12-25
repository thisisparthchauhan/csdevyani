import { Metadata } from 'next';
import { Shield, FileCheck, Users, Building2, BookOpen, CheckCircle2, AlertCircle, ArrowRight, ChevronDown, TrendingUp, Lock, FileText, Briefcase, Scale, Globe, Award, Clock, IndianRupee } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Insurance Advisory Services in India – IRDAI Registration, Compliance & Licensing',
    description: 'Expert advisory for Insurance Broker Registration, Corporate Agent Registration, Insurance Repository, and IRDAI compliance. Navigate insurance regulations with confidence.',
    alternates: {
        canonical: '/insurance-advisory-services-india',
    },
};

export default function InsuranceAdvisoryServices() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900/20 z-0"></div>
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-emerald-900/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-700/50 mb-6 animate-fade-in-up">
                            <Shield size={16} className="text-emerald-400" />
                            <span className="text-xs font-bold text-emerald-100 uppercase tracking-widest">IRDAI Regulation</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
                            Insurance Advisory Services <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                                in India
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                            Navigate the insurance regulatory landscape with expert guidance on IRDAI registrations, compliance frameworks, and operational excellence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/25">
                                Get Expert Consultation
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <Link href="#services" className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10">
                                Explore Services
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
                            <h2 className="text-3xl font-bold text-slate-900">Understanding Insurance Intermediaries in India</h2>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                The insurance sector in India is regulated by the Insurance Regulatory and Development Authority of India (IRDAI). Insurance intermediaries play a crucial role in connecting insurers with policyholders, and each category requires specific registration and compliance adherence.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                                    <BookOpen size={20} className="mr-2 text-emerald-500" />
                                    Key Regulatory Framework
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        "IRDAI (Insurance Brokers) Regulations, 2018",
                                        "IRDAI (Corporate Agents) Regulations, 2015",
                                        "IRDAI (Insurance Repositories) Regulations, 2015",
                                        "Insurance Act, 1938 and amendments"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start text-slate-700">
                                            <CheckCircle2 size={18} className="mr-3 text-green-500 flex-shrink-0 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-slate-900 to-emerald-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl"></div>
                            <h3 className="text-2xl font-bold mb-6 relative z-10">Why Insurance Intermediary Registration Matters</h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Legal authorization to operate in insurance distribution",
                                    "Enhanced credibility and trust with clients",
                                    "Access to multiple insurance products and insurers",
                                    "Protection under regulatory framework",
                                    "Ability to scale operations nationally"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-slate-200">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0 text-emerald-400 font-bold">
                                            {idx + 1}
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES OFFERED */}
            <section id="services" className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs">Our Expertise</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-2">Insurance Advisory Services</h2>
                        <p className="text-slate-600 mt-4">Comprehensive support across all insurance intermediary categories</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Insurance Broker */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:border-emerald-500/30">
                            <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                                <Briefcase size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Insurance Broker Registration</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Direct Broker, Composite Broker, and Reinsurance Broker registrations with IRDAI.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Application preparation & submission",
                                    "Capital adequacy compliance",
                                    "Professional indemnity insurance",
                                    "Infrastructure & systems setup"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-600">
                                        <CheckCircle2 size={16} className="mr-2 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                                Learn More <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>

                        {/* Corporate Agent */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:border-emerald-500/30">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                                <Building2 size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Corporate Agent Registration</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Life, General, and Health insurance corporate agent licensing for businesses.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Entity structuring & compliance",
                                    "Principal officer certification",
                                    "Point of sales person (POSP) framework",
                                    "Tie-up agreements with insurers"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-600">
                                        <CheckCircle2 size={16} className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                                Learn More <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>

                        {/* Insurance Repository */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all hover:border-emerald-500/30">
                            <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                <Lock size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Insurance Repository Services</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Digital infrastructure for electronic insurance policy storage and management.
                            </p>
                            <ul className="space-y-3 mb-6">
                                {[
                                    "Repository registration advisory",
                                    "Technology infrastructure setup",
                                    "Security & data protection compliance",
                                    "Integration with insurers"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-600">
                                        <CheckCircle2 size={16} className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/contact" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                                Learn More <ArrowRight size={16} className="ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* INSURANCE BROKER DETAILS */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Insurance Broker Registration – Detailed Overview</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {/* Categories */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <FileCheck size={22} className="mr-3 text-emerald-500" />
                                    Broker Categories
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-800 mb-2">Direct Broker (Life)</h4>
                                        <p className="text-sm text-slate-600">Specializes in life insurance products and related advisory.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-800 mb-2">Direct Broker (General)</h4>
                                        <p className="text-sm text-slate-600">Focuses on general insurance including health, motor, property, etc.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-800 mb-2">Composite Broker</h4>
                                        <p className="text-sm text-slate-600">Can broker both life and general insurance products.</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-slate-100">
                                        <h4 className="font-bold text-slate-800 mb-2">Reinsurance Broker</h4>
                                        <p className="text-sm text-slate-600">Facilitates reinsurance arrangements between insurers and reinsurers.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Eligibility */}
                            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                                    <Users size={22} className="mr-3 text-emerald-500" />
                                    Eligibility Requirements
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Entity Type", desc: "Company, LLP, or Partnership Firm registered in India" },
                                        { title: "Principal Officer", desc: "Qualified professional with IRDAI-approved certification" },
                                        { title: "Net Worth", desc: "Minimum ₹50 lakhs for Direct Broker, ₹75 lakhs for Composite Broker" },
                                        { title: "Professional Indemnity", desc: "Mandatory PI insurance coverage as per IRDAI norms" },
                                        { title: "Infrastructure", desc: "Office space, IT systems, and operational capabilities" }
                                    ].map((item, idx) => (
                                        <li key={idx} className="bg-white p-4 rounded-xl border border-slate-100">
                                            <h4 className="font-bold text-slate-800 text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-slate-600">{item.desc}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Process Timeline */}
                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center">
                                <Clock size={22} className="mr-3 text-emerald-600" />
                                Registration Process Timeline
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                {[
                                    { step: "1", title: "Preparation", duration: "2-3 weeks", desc: "Entity setup, documentation, certification" },
                                    { step: "2", title: "Application", duration: "1 week", desc: "Form submission, fee payment, initial review" },
                                    { step: "3", title: "IRDAI Review", duration: "4-8 weeks", desc: "Regulatory scrutiny and queries" },
                                    { step: "4", title: "Approval", duration: "1-2 weeks", desc: "Certificate issuance and activation" }
                                ].map((phase, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl border border-emerald-200 text-center">
                                        <div className="w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                                            {phase.step}
                                        </div>
                                        <h4 className="font-bold text-slate-900 mb-2">{phase.title}</h4>
                                        <p className="text-xs text-emerald-600 font-semibold mb-2">{phase.duration}</p>
                                        <p className="text-xs text-slate-600">{phase.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CORPORATE AGENT DETAILS */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Corporate Agent Registration – Key Insights</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            {/* Types */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                    <FileText size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Agent Types</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                        Life Insurance Corporate Agent
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                        General Insurance Corporate Agent
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                        Health Insurance Corporate Agent
                                    </li>
                                    <li className="flex items-start">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                        Composite Corporate Agent
                                    </li>
                                </ul>
                            </div>

                            {/* Capital Requirements */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                                    <IndianRupee size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Financial Norms</h3>
                                <div className="space-y-3">
                                    <div className="bg-slate-50 p-3 rounded-lg">
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Security Deposit</p>
                                        <p className="text-sm font-semibold text-slate-800">₹2 lakhs (Life/General)</p>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-lg">
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Composite Agent</p>
                                        <p className="text-sm font-semibold text-slate-800">₹4 lakhs deposit</p>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-lg">
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-1">Bank Guarantee</p>
                                        <p className="text-sm font-semibold text-slate-800">As per IRDAI norms</p>
                                    </div>
                                </div>
                            </div>

                            {/* Key Personnel */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200">
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                                    <Award size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Personnel Requirements</h3>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                        Principal Officer with IRDAI certification
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                        Point of Sales Persons (POSP) training
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                        Compliance officer designation
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 size={16} className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                                        Ongoing training programs
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Important Note */}
                        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-start">
                            <AlertCircle size={24} className="text-blue-600 mr-4 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-slate-900 mb-2">Important Regulatory Note</h4>
                                <p className="text-slate-700 text-sm leading-relaxed">
                                    Corporate Agents can tie up with a maximum of three insurance companies in each category (Life, General, Health). The selection of insurer partners is strategic and should align with your business model and target market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ONGOING COMPLIANCE */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-slate-900">Post-Registration Compliance</h2>
                            <p className="text-slate-600 mt-2">Maintaining regulatory adherence for sustainable operations</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { icon: FileText, title: "Annual Renewals", desc: "License renewal with updated financials and compliance certificates" },
                                { icon: Scale, title: "Regulatory Filings", desc: "Quarterly and annual returns submission to IRDAI" },
                                { icon: Award, title: "Certification Continuity", desc: "Ongoing training and certification for principal officers and staff" },
                                { icon: Lock, title: "Data Protection", desc: "Customer data security and privacy compliance" },
                                { icon: TrendingUp, title: "Financial Reporting", desc: "Maintenance of net worth and capital adequacy norms" },
                                { icon: Globe, title: "Code of Conduct", desc: "Adherence to IRDAI's code of conduct and ethical standards" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-emerald-500/30 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                                        <item.icon size={24} />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
                        <p className="text-slate-600 mt-2">Common queries about insurance intermediary registration and compliance</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "What is the difference between an Insurance Broker and a Corporate Agent?",
                                a: "An Insurance Broker acts as an independent intermediary representing the client's interests and can work with multiple insurers across categories. A Corporate Agent represents specific insurance companies (maximum 3 per category) and acts on behalf of the insurer. Brokers have higher capital requirements and broader operational flexibility, while Corporate Agents have simpler entry requirements but limited insurer partnerships."
                            },
                            {
                                q: "How long does it take to get IRDAI registration as an Insurance Broker?",
                                a: "The typical timeline is 8-12 weeks from application submission, assuming all documentation is complete and accurate. This includes entity setup (2-3 weeks), application preparation (1 week), IRDAI review (4-8 weeks), and final approval (1-2 weeks). Timelines may vary based on the complexity of your application and IRDAI's workload."
                            },
                            {
                                q: "What are the capital requirements for different insurance intermediary categories?",
                                a: "For Insurance Brokers: Direct Broker (Life/General) requires ₹50 lakhs net worth, Composite Broker requires ₹75 lakhs, and Reinsurance Broker requires ₹2 crores. For Corporate Agents: Security deposit of ₹2 lakhs for single category (Life/General/Health) and ₹4 lakhs for Composite Corporate Agent. Additionally, Professional Indemnity Insurance is mandatory for brokers."
                            },
                            {
                                q: "Can an individual become an Insurance Broker or Corporate Agent?",
                                a: "No, IRDAI regulations require Insurance Brokers and Corporate Agents to be registered as companies, LLPs, or partnership firms. Individuals cannot directly obtain these licenses. However, individuals can become licensed insurance agents (individual agents) by obtaining certification and working under an insurance company."
                            },
                            {
                                q: "What certifications are required for the Principal Officer?",
                                a: "The Principal Officer must pass the IRDAI-approved examination conducted by the Insurance Institute of India (III) or other designated bodies. For brokers, the IC-38 (General Insurance) and IC-33 (Life Insurance) certifications are typically required. For Corporate Agents, similar certifications based on the category (Life/General/Health) are mandatory. The certification must be valid and renewed periodically."
                            },
                            {
                                q: "Can a Corporate Agent work with multiple insurance companies?",
                                a: "Yes, but with limitations. A Corporate Agent can tie up with a maximum of three insurance companies in each category (Life, General, Health). For example, a Composite Corporate Agent can work with up to 3 life insurers, 3 general insurers, and 3 health insurers simultaneously. This is different from Insurance Brokers who can work with unlimited insurers."
                            },
                            {
                                q: "What is an Insurance Repository and who needs it?",
                                a: "An Insurance Repository is a digital platform that stores insurance policies in electronic (dematerialized) form, similar to how Demat accounts work for securities. Policyholders can hold all their insurance policies in a single electronic account. Setting up an Insurance Repository requires IRDAI registration and is typically undertaken by technology companies or financial institutions looking to provide digital insurance infrastructure services."
                            },
                            {
                                q: "What are the ongoing compliance requirements after registration?",
                                a: "Key ongoing requirements include: (1) Annual license renewal with IRDAI, (2) Maintenance of minimum net worth/capital adequacy, (3) Quarterly and annual regulatory filings, (4) Professional Indemnity Insurance renewal (for brokers), (5) Continuing education and certification for principal officers and staff, (6) Maintenance of proper books of accounts and client records, (7) Compliance with IRDAI's code of conduct, and (8) Timely payment of regulatory fees."
                            },
                            {
                                q: "Can foreign entities become Insurance Brokers or Corporate Agents in India?",
                                a: "Foreign Direct Investment (FDI) is permitted in insurance intermediaries subject to IRDAI and FEMA regulations. Currently, 100% FDI is allowed in insurance intermediaries under the automatic route. However, the entity must be incorporated in India and comply with all IRDAI registration requirements, including having a Principal Officer who is a resident Indian with the required certifications."
                            },
                            {
                                q: "What happens if I operate as an insurance intermediary without IRDAI registration?",
                                a: "Operating as an insurance intermediary without proper IRDAI registration is illegal and can result in severe penalties including: (1) Monetary fines up to ₹25 lakhs, (2) Imprisonment up to 3 years, (3) Permanent ban from the insurance industry, (4) Legal action by IRDAI, and (5) Liability for any client losses. IRDAI actively monitors and penalizes unregistered entities, especially those operating digitally or through social media."
                            },
                            {
                                q: "Do I need separate registrations for Life and General insurance?",
                                a: "It depends on the category you choose. For Insurance Brokers, you can opt for Direct Broker (Life only), Direct Broker (General only), or Composite Broker (both Life and General). For Corporate Agents, you can choose Life, General, Health, or Composite categories. If you want to operate in multiple categories, a Composite license is more efficient than obtaining separate registrations, though it has higher capital requirements."
                            },
                            {
                                q: "How does Professional Indemnity Insurance work for Insurance Brokers?",
                                a: "Professional Indemnity (PI) Insurance is mandatory for Insurance Brokers to protect against claims arising from professional negligence or errors. The minimum PI coverage required is based on the broker's annual gross revenue: ₹50 lakhs for revenue up to ₹10 crores, ₹1 crore for revenue between ₹10-50 crores, and higher amounts for larger operations. The PI policy must be maintained continuously and renewed before expiry."
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-slate-800 hover:text-emerald-600 transition-colors">
                                    {faq.q}
                                    <ChevronDown className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                                </summary>
                                <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-transparent group-open:border-slate-100">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Navigate Insurance Regulations?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Our team specializes in insurance regulatory advisory, helping you structure compliant, scalable insurance intermediary operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-500/25">
                                Schedule Consultation
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
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Expert Insurance Regulatory Advisory</h4>
                            <p className="text-slate-600">
                                At Devyani & Co., we provide end-to-end support for insurance intermediary registration, compliance management, and operational structuring. Our expertise spans IRDAI regulations, helping you build a future-ready insurance business.
                            </p>
                        </div>
                        <Link href="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-emerald-600 transition-all flex items-center shadow-xl whitespace-nowrap">
                            Get Started Today
                            <ArrowRight size={18} className="ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
