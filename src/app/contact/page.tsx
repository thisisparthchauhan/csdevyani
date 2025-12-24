import { Metadata } from 'next';
import ContactSection from '@/components/home/ContactSection';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us – CSDEVYANI | Corporate & Legal Solutions',
    description: 'Get in touch with Devyani & Co. for Investment Adviser Registration, AIF Registration, and Corporate Compliance services in GIFT City, Gandhinagar.',
};

export default function ContactPage() {
    return (
        <div className="bg-slate-50 min-h-screen pt-24">
            {/* Simple Header */}
            <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[var(--brand-secondary)]/10 z-0"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-700/50 mb-6">
                        <ShieldCheck size={16} className="text-amber-400" />
                        <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">Get In Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Contact Us</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto text-lg">
                        Ready to start your regulatory journey? Reach out to us for expert guidance on SEBI and IFSCA compliance.
                    </p>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="container mx-auto px-4 -mt-10 relative z-20 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center border border-slate-100">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Call Us</p>
                            <a href="tel:+917961809800" className="text-slate-800 font-bold hover:text-blue-600 transition-colors">
                                +91-79-6180-9800
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center border border-slate-100">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email Us</p>
                            <a href="mailto:info@csdevyani.com" className="text-slate-800 font-bold hover:text-amber-600 transition-colors">
                                info@csdevyani.com
                            </a>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center border border-slate-100">
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Visit Us</p>
                            <span className="text-slate-800 font-bold">
                                GIFT City, Gandhinagar
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reuse Contact Section Logic */}
            <ContactSection />

        </div>
    );
}
