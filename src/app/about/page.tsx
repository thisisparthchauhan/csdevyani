import { Metadata } from 'next';
import { Award, Users, Target, Heart, Shield, TrendingUp, CheckCircle, Briefcase, GraduationCap, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us – CSDEVYANI | Corporate & Regulatory Advisory Experts',
    description: 'Learn about Devyani & Co., a specialized corporate and regulatory advisory firm led by CS Devyani Khambhati. Based in GIFT City, Gandhinagar, we provide expert guidance on SEBI and IFSCA compliance.',
    alternates: {
        canonical: '/about',
    },
};

export default function AboutPage() {
    const values = [
        {
            icon: Shield,
            title: "Integrity First",
            description: "We maintain the highest ethical standards in all our professional engagements."
        },
        {
            icon: Target,
            title: "Client-Centric",
            description: "Your success is our mission. We tailor solutions to your specific needs."
        },
        {
            icon: TrendingUp,
            title: "Excellence",
            description: "We strive for excellence in every aspect of our service delivery."
        },
        {
            icon: Heart,
            title: "Commitment",
            description: "We're committed to your long-term success and regulatory compliance."
        }
    ];

    const milestones = [
        { year: "2018", event: "Founded by CS Devyani Khambhati" },
        { year: "2019", event: "Expanded to SEBI regulatory services" },
        { year: "2020", event: "Established GIFT City presence" },
        { year: "2021", event: "Achieved 100+ successful registrations" },
        { year: "2022", event: "Added IFSCA compliance services" },
        { year: "2023", event: "Crossed 500+ client milestone" },
        { year: "2024", event: "Launched digital compliance platform" },
        { year: "2025", event: "Expanding pan-India presence" }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-24">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center space-x-2 bg-amber-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/20 mb-6">
                            <Users size={20} className="text-amber-400" />
                            <span className="text-sm font-bold text-amber-400 uppercase tracking-wide">About Us</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                            Building Trust Through
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                                Regulatory Excellence
                            </span>
                        </h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            A specialized corporate and regulatory advisory firm committed to helping businesses navigate India's complex compliance landscape with confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Image */}
                            <div className="relative">
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-slate-100 flex items-center justify-center">
                                        <Users size={120} className="text-slate-300" />
                                    </div>
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl">
                                    <div className="text-3xl font-extrabold">15+</div>
                                    <div className="text-sm font-medium">Years Experience</div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                                        CS Devyani Khambhati
                                    </h2>
                                    <p className="text-amber-600 font-bold text-lg">Founder & Managing Partner</p>
                                </div>

                                <div className="space-y-4 text-slate-600 leading-relaxed">
                                    <p>
                                        CS Devyani Khambhati is a practicing Company Secretary with over 15 years of hands-on experience in India's most regulated business environments. She founded Devyani & Co. in January 2018 with a vision to provide specialized regulatory advisory services to businesses operating in high-growth, high-regulation sectors.
                                    </p>
                                    <p>
                                        With deep expertise in SEBI and IFSCA regulations, she has successfully guided hundreds of clients through complex registration processes, compliance frameworks, and regulatory challenges.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="flex items-start space-x-3">
                                        <GraduationCap className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <div className="font-bold text-slate-900">Qualified CS</div>
                                            <div className="text-sm text-slate-600">Company Secretary</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <Briefcase className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                                        <div>
                                            <div className="font-bold text-slate-900">500+ Clients</div>
                                            <div className="text-sm text-slate-600">Successfully Served</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Our Core Values
                            </h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-slate-100 group hover:-translate-y-1">
                                    <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                                        <value.icon className="text-amber-600" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                                Our Journey
                            </h2>
                            <p className="text-slate-600 text-lg">
                                Key milestones in our growth story
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-amber-200 -translate-x-1/2 hidden md:block"></div>

                            {/* Milestones */}
                            <div className="space-y-8">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="bg-slate-50 rounded-xl p-4 inline-block">
                                                <div className="text-2xl font-extrabold text-amber-600 mb-1">{milestone.year}</div>
                                                <div className="text-slate-700 font-medium">{milestone.event}</div>
                                            </div>
                                        </div>
                                        <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg flex-shrink-0 hidden md:block"></div>
                                        <div className="flex-1"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-8 md:p-12">
                                    <div className="flex items-center space-x-3 mb-6">
                                        <MapPin className="text-amber-600" size={32} />
                                        <h2 className="text-2xl font-extrabold text-slate-900">Visit Our Office</h2>
                                    </div>
                                    <div className="space-y-4 text-slate-600">
                                        <p className="text-lg leading-relaxed">
                                            <strong className="text-slate-900">CSDEVYANI</strong><br />
                                            15 Vedika Exotika Bunglows,<br />
                                            PDPU Road, Nr Gift City,<br />
                                            Gandhinagar, Gujarat - 382355
                                        </p>
                                        <div className="pt-4 space-y-2">
                                            <p><strong>Phone:</strong> <a href="tel:+919825600907" className="text-amber-600 hover:text-amber-700">+91 98256 00907</a></p>
                                            <p><strong>Email:</strong> <a href="mailto:compliance@csdevyani.com" className="text-amber-600 hover:text-amber-700">compliance@csdevyani.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-100 h-64 md:h-auto flex items-center justify-center">
                                    <MapPin size={80} className="text-slate-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Ready to Work Together?
                    </h2>
                    <p className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help you achieve regulatory compliance and business success.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl"
                    >
                        Get in Touch
                        <CheckCircle size={20} className="ml-2" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
