"use client";
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Youtube, MapPin, Mail, Phone, Send, ShieldCheck, ArrowRight, Instagram } from 'lucide-react';
import { useState } from 'react';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        try {
            await addDoc(collection(db, 'subscribers'), {
                email: email,
                subscribedAt: serverTimestamp(),
                source: 'website_footer'
            });
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error("Error subscribing:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <footer className="bg-slate-950 text-slate-300 pt-24 pb-12 border-t border-slate-900 font-sans tracking-wide">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    {/* Brand & Address */}
                    <div className="space-y-8">
                        <div className="flex items-center space-x-3 mb-6">
                            <ShieldCheck className="text-[var(--brand-secondary)]" size={40} />
                            <div>
                                <h3 className="text-2xl font-extrabold text-white tracking-tight">CSDEVYANI</h3>
                                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.2em]">Global Governance</p>
                            </div>
                        </div>
                        <div className="space-y-5 text-base leading-relaxed text-slate-400">
                            <p className="flex items-start group">
                                <MapPin className="mr-3 mt-1.5 flex-shrink-0 text-[var(--brand-secondary)] group-hover:text-white transition-colors" size={20} />
                                <span className="group-hover:text-slate-300 transition-colors">
                                    CSDEVYANI - Corporate & Legal Solutions,<br />
                                    Gift City, Gandhinagar,<br />
                                    Gujarat - 382355
                                </span>
                            </p>
                            <p className="flex items-center group">
                                <Phone className="mr-3 text-[var(--brand-secondary)] group-hover:text-white transition-colors" size={20} />
                                <span className="group-hover:text-white transition-colors">+91-79-6180-9800</span>
                            </p>
                            <p className="flex items-center group">
                                <Mail className="mr-3 text-[var(--brand-secondary)] group-hover:text-white transition-colors" size={20} />
                                <span className="group-hover:text-white transition-colors">info@csdevyani.com</span>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-8 flex items-center tracking-wider">
                            <span className="w-8 h-1 bg-[var(--brand-secondary)] mr-4 rounded-full"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-5 text-base">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Contact Us', href: '/contact' },
                                { name: 'Articles', href: '/articles' },
                                { name: 'Dashboard', href: '/dashboard' },
                                { name: 'Careers', href: '/coming-soon' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-[var(--brand-secondary)] hover:translate-x-2 transition-all flex items-center group">
                                        <ArrowRight size={16} className="mr-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Important Services */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-8 flex items-center tracking-wider">
                            <span className="w-8 h-1 bg-[var(--brand-secondary)] mr-4 rounded-full"></span>
                            Our Services
                        </h3>
                        <ul className="space-y-5 text-base">
                            {[
                                { name: 'Inv. Adviser Registration', href: '/investment-adviser-registration-india' },
                                { name: 'IA Compliance', href: '/post-registration-compliance-for-investment-advisers-in-india' },
                                { name: 'AIF Registration', href: '/alternative-investment-fund-registration-india' },
                                { name: 'AIF Compliance', href: '/aif-compliance-obligations' },
                                { name: 'Startup Solutions', href: '/coming-soon' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="hover:text-[var(--brand-secondary)] hover:translate-x-2 transition-all flex items-center group">
                                        <ArrowRight size={16} className="mr-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-8 flex items-center tracking-wider">
                            <span className="w-8 h-1 bg-[var(--brand-secondary)] mr-4 rounded-full"></span>
                            Stay Updated
                        </h3>

                        <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 mb-8 hover:border-slate-700 transition-colors">
                            <h4 className="font-bold text-white mb-3 tracking-wide">Subscribe to Newsletter</h4>
                            <p className="text-sm text-slate-500 mb-6 leading-relaxed">Get the latest regulatory updates directly to your inbox.</p>

                            {status === 'success' ? (
                                <div className="bg-green-500/10 text-green-400 text-sm py-3.5 px-4 rounded-xl flex items-center font-medium border border-green-500/20 animate-fade-in-up">
                                    <ShieldCheck size={18} className="mr-2" /> Subscribed successfully!
                                </div>
                            ) : (
                                <form onSubmit={handleSubscribe} className="relative">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        disabled={status === 'loading'}
                                        className="w-full bg-slate-950 text-white pl-4 pr-12 py-3.5 rounded-xl border border-slate-800 focus:outline-none focus:border-[var(--brand-secondary)] focus:ring-1 focus:ring-[var(--brand-secondary)] transition-all text-sm placeholder:text-slate-600 disabled:opacity-50"
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="absolute right-2 top-2 bg-[var(--brand-secondary)] text-white p-2 rounded-lg hover:bg-amber-600 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? (
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        ) : (
                                            <Send size={16} />
                                        )}
                                    </button>
                                </form>
                            )}
                            {status === 'error' && (
                                <p className="text-red-400 text-xs mt-2">Something went wrong. Please try again.</p>
                            )}
                        </div>

                        <div className="flex space-x-4">
                            {[
                                { Icon: Twitter, href: '#' },
                                { Icon: Linkedin, href: '#' },
                                { Icon: Facebook, href: '#' },
                                { Icon: Instagram, href: 'https://www.instagram.com/estabizzfintech?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
                                { Icon: Youtube, href: '#' }
                            ].map((social, idx) => (
                                <Link key={idx} href={social.href} target="_blank" className="bg-slate-900 p-3 rounded-full hover:bg-[var(--brand-secondary)] hover:text-white text-slate-500 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg border border-slate-800 hover:border-transparent">
                                    <social.Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 font-medium tracking-wide">
                    <p>© 2025 CSDEVYANI. All Rights Reserved.</p>
                    <div className="flex items-center mt-6 md:mt-0 space-x-8">
                        <span>Last Updated: <span className="text-slate-400">Dec 24, 2024</span></span>
                        <span className="flex items-center bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                            <span className="text-xs uppercase tracking-wider text-slate-600 mr-2">Live Visitors:</span>
                            <span className="text-slate-300 font-mono">1,234,567</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
