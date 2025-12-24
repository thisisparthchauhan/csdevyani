"use client";
import { useState } from 'react';
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await addDoc(collection(db, 'messages'), {
                ...formData,
                timestamp: serverTimestamp(),
                status: 'unread'
            });
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-[var(--brand-secondary)] font-bold uppercase tracking-wider text-xs bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                        Contact Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-6 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Have questions about corporate governance or compliance? Our experts are here to assist you.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-8 md:p-12">
                    {status === 'success' ? (
                        <div className="min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 animate-fade-in-up">
                            <div className="bg-green-100 p-4 rounded-full text-green-600 mb-2">
                                <CheckCircle2 size={64} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                            <p className="text-slate-500 max-w-md">
                                Thank you for reaching out. A member of our CSDEVYANI team will get back to you shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User size={20} className="text-slate-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address *</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail size={20} className="text-slate-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number (Optional)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Phone size={20} className="text-slate-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Your Message *</label>
                                <div className="relative">
                                    <div className="absolute top-4 left-4 pointer-events-none">
                                        <MessageSquare size={20} className="text-slate-400" />
                                    </div>
                                    <textarea
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your compliance requirements..."
                                        rows={4}
                                        className="w-full pl-11 pr-4 py-4 rounded-xl border border-gray-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--brand-secondary)] focus:bg-white transition-all placeholder:text-slate-400 font-medium resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-slate-900 text-white font-bold py-5 rounded-xl hover:bg-[var(--brand-secondary)] transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {status === 'submitting' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </button>
                            {status === 'error' && (
                                <div className="p-4 bg-red-50 text-red-500 rounded-xl text-center font-medium">
                                    Something went wrong. Please try again later.
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
