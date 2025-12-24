"use client";
import { useState, useEffect } from 'react';
import { X, ShieldCheck, Mail, Lock, ArrowRight, User, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function AuthPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSnoozed, setIsSnoozed] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);

    // Form States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();

    useEffect(() => {
        const checkScroll = () => {
            if (isSnoozed || isOpen) return;

            const scrollPosition = window.scrollY;

            // Trigger when user scrolls more than 100px
            if (scrollPosition > 100) {
                setIsOpen(true);
            }
        };

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, [isSnoozed, isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        setIsSnoozed(true);
        setError('');

        // Re-open after 120 seconds
        setTimeout(() => {
            setIsSnoozed(false);
        }, 120 * 1000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            if (isLoginMode) {
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
            }

            // Success: Close popup and optionally redirect
            setIsOpen(false);
            // If it's a new signup or login, we might want to redirect to dashboard
            router.push('/dashboard');
        } catch (err: any) {
            console.error("Auth Error:", err);
            let msg = "Authentication failed. Please try again.";
            if (err.code === 'auth/invalid-credential') msg = "Invalid email or password.";
            if (err.code === 'auth/email-already-in-use') msg = "Email is already registered.";
            if (err.code === 'auth/weak-password') msg = "Password should be at least 6 characters.";
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md text-slate-700 hover:text-slate-900 p-2 rounded-full transition-all"
                        >
                            <X size={20} />
                        </button>

                        {/* Left Side - Visual */}
                        <div className="w-full md:w-1/2 bg-slate-900 relative p-8 md:p-12 text-white flex flex-col justify-between hidden md:flex">
                            {/* Abstract Background */}
                            <div className="absolute inset-0 z-0 opacity-40">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[var(--brand-secondary)]/20"></div>
                                <svg className="absolute w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 100 L100 0 L100 100 Z" fill="url(#grad)" />
                                    <defs>
                                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style={{ stopColor: 'var(--brand-secondary)', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="bg-[var(--brand-secondary)] p-1.5 rounded-lg">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <span className="font-bold tracking-wider uppercase text-sm">CSDEVYANI</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
                                    {isLoginMode ? "Unlock Premium Corporate Intelligence." : "Start Your Governance Journey."}
                                </h2>
                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                    Join thousands of legal professionals and corporate secretaries using our AI-driven platform.
                                </p>

                                <ul className="space-y-3 text-sm text-slate-300">
                                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[var(--brand-secondary)] rounded-full mr-3"></div> Real-time regulatory updates</li>
                                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[var(--brand-secondary)] rounded-full mr-3"></div> Exclusive AI compliance tools</li>
                                    <li className="flex items-center"><div className="w-1.5 h-1.5 bg-[var(--brand-secondary)] rounded-full mr-3"></div> Advanced secretarial audit reports</li>
                                </ul>
                            </div>

                            <div className="relative z-10 mt-8">
                                <p className="text-xs text-slate-400 font-medium">Trusted by 500+ Enterprises</p>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
                            <div className="text-center md:text-left mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    {isLoginMode ? "Welcome Back" : "Create Account"}
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    {isLoginMode ? "Enter your details to access your account." : "Sign up to get started with CSDEVYANI."}
                                </p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-6 bg-red-50 text-red-600 text-xs px-4 py-3 rounded-lg border border-red-100 flex items-center">
                                    <span className="mr-2">●</span> {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail size={18} className="absolute left-4 top-3.5 text-slate-400" />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@company.com"
                                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide ml-1">Password</label>
                                    <div className="relative">
                                        <Lock size={18} className="absolute left-4 top-3.5 text-slate-400" />
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all text-sm font-medium"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-[var(--brand-secondary)] transition-all flex items-center justify-center group shadow-lg shadow-slate-200 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : (
                                        <>
                                            {isLoginMode ? "Sign In" : "Sign Up"}
                                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-sm">
                                <span className="text-slate-500">
                                    {isLoginMode ? "New here?" : "Already member?"}
                                </span>
                                <button
                                    onClick={() => {
                                        setIsLoginMode(!isLoginMode);
                                        setError('');
                                    }}
                                    className="font-bold text-[var(--brand-secondary)] hover:text-amber-600 transition-colors"
                                >
                                    {isLoginMode ? "Create an account" : "Sign in to account"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
