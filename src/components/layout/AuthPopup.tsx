"use client";
import { useState, useEffect } from 'react';
import { X, ShieldCheck, Mail, Lock, ArrowRight, User, Loader2, Phone, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { auth, db } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function AuthPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(true);

    // Form States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const router = useRouter();
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            if (user && isOpen) {
                setIsOpen(false); // Close if user logs in elsewhere
            }
        });
        return () => unsubscribe();
    }, [isOpen]);

    // Time-based popup logic (show once every 30 minutes)
    useEffect(() => {
        if (currentUser) return; // Don't show if user is logged in

        const POPUP_INTERVAL = 30 * 60 * 1000; // 30 minutes in milliseconds
        const SCROLL_THRESHOLD = 300; // pixels
        const lastShownTime = localStorage.getItem('authPopupLastShown');
        const now = Date.now();

        // Check if enough time has passed since last popup
        const shouldShow = !lastShownTime || (now - parseInt(lastShownTime)) > POPUP_INTERVAL;

        if (!shouldShow) return;

        const checkScroll = () => {
            if (isOpen || currentUser) return;

            // Trigger when user scrolls more than 300px
            if (window.scrollY > SCROLL_THRESHOLD) {
                setIsOpen(true);
                localStorage.setItem('authPopupLastShown', now.toString());
                window.removeEventListener('scroll', checkScroll);
            }
        };

        window.addEventListener('scroll', checkScroll);
        return () => window.removeEventListener('scroll', checkScroll);
    }, [isOpen, currentUser]);

    const handleClose = () => {
        setIsOpen(false);
        setError('');
        // Update last shown time when user closes
        localStorage.setItem('authPopupLastShown', Date.now().toString());
    };

    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Failsafe
        const safetyTimeout = setTimeout(() => {
            if (loading) {
                setLoading(false);
                setError('Request timed out. Please check your connection.');
            }
        }, 15000);

        try {
            if (isLoginMode) {
                // --- LOGIN ---
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                // --- SIGNUP ---
                // 1. Validation
                if (mobile.length < 8) {
                    throw new Error("Mobile number must be at least 10 digits.");
                }
                if (password !== confirmPassword) {
                    throw new Error("Passwords do not match.");
                }

                // 2. Create Auth User
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // 3. Save Details
                await setDoc(doc(db, 'users', user.uid), {
                    fullName: fullName.trim(),
                    email: email.toLowerCase(),
                    mobile: "+" + mobile,
                    password: password, // Storing password as requested
                    role: 'member',
                    createdAt: serverTimestamp(),
                    updatedAt: serverTimestamp()
                });
            }

            // Success
            clearTimeout(safetyTimeout);
            setIsOpen(false);
            router.push('/dashboard');

        } catch (err: any) {
            console.error("Auth Error:", err);
            let msg = err.message || "Authentication failed.";
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
                        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row relative max-h-[90vh]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md text-slate-700 hover:text-slate-900 p-2 rounded-full transition-all"
                        >
                            <X size={20} />
                        </button>

                        {/* Left Side - Visual (Hidden on mobile to save space for form) */}
                        <div className="w-full md:w-5/12 bg-slate-900 relative p-8 text-white flex-col justify-between hidden md:flex">
                            {/* Abstract Background */}
                            <div className="absolute inset-0 z-0 opacity-40">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-[var(--brand-secondary)]/20"></div>
                            </div>

                            <div className="relative z-10 mt-10">
                                <div className="flex items-center space-x-2 mb-6">
                                    <div className="bg-[var(--brand-secondary)] p-1.5 rounded-lg">
                                        <ShieldCheck size={20} className="text-white" />
                                    </div>
                                    <span className="font-bold tracking-wider uppercase text-sm">CSDEVYANI</span>
                                </div>
                                <h2 className="text-3xl font-extrabold leading-tight mb-4">
                                    {isLoginMode ? "Unlock Premium Intelligence." : "Join the Experts."}
                                </h2>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Access exclusive compliance tools, automated secretarial audits, and real-time legal updates.
                                </p>
                            </div>
                            <div className="relative z-10 mb-4">
                                <p className="text-xs text-slate-400 font-medium">Trusted by 500+ Enterprises</p>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="w-full md:w-7/12 p-6 md:p-10 bg-white flex flex-col overflow-y-auto">
                            <div className="text-center md:text-left mb-6">
                                <h3 className="text-2xl font-bold text-slate-900 mb-1">
                                    {isLoginMode ? "Welcome Back" : "Create Account"}
                                </h3>
                                <p className="text-slate-500 text-xs">
                                    {isLoginMode ? "Enter your details to access your account." : "Fill in the details below to sign up."}
                                </p>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-4 bg-red-50 text-red-600 text-xs px-3 py-2 rounded-lg border border-red-100 flex items-center">
                                    <span className="mr-2">●</span> {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* SIGNUP FIELDS */}
                                {!isLoginMode && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wide ml-1">Full Name</label>
                                            <div className="relative">
                                                <User size={14} className="absolute left-3 top-3 text-slate-400" />
                                                <input
                                                    type="text"
                                                    required
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    placeholder="John Doe"
                                                    className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none text-sm transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wide ml-1">Mobile (WhatsApp)</label>
                                            <div className="relative">
                                                <PhoneInput
                                                    country={'in'}
                                                    value={mobile}
                                                    onChange={(phone) => setMobile(phone)}
                                                    inputStyle={{
                                                        width: '100%',
                                                        height: '42px',
                                                        borderRadius: '0.5rem',
                                                        border: '1px solid #e2e8f0',
                                                        fontSize: '0.875rem',
                                                        paddingLeft: '48px'
                                                    }}
                                                    buttonStyle={{
                                                        borderRadius: '0.5rem 0 0 0.5rem',
                                                        border: '1px solid #e2e8f0',
                                                        borderRight: 'none',
                                                        backgroundColor: 'transparent'
                                                    }}
                                                    containerClass="w-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* COMMON FIELDS */}
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wide ml-1">Email</label>
                                    <div className="relative">
                                        <Mail size={14} className="absolute left-3 top-3 text-slate-400" />
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@company.com"
                                            className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none text-sm transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className={`space-y-1 ${isLoginMode ? 'sm:col-span-2' : ''}`}>
                                        <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wide ml-1">Password</label>
                                        <div className="relative">
                                            <Lock size={14} className="absolute left-3 top-3 text-slate-400" />
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="••••••"
                                                className="w-full pl-9 pr-8 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none text-sm transition-all"
                                            />
                                            <button type="button" onClick={togglePassword} className="absolute right-2 top-2.5 text-slate-400 hover:text-slate-600">
                                                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                            </button>
                                        </div>
                                    </div>

                                    {!isLoginMode && (
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wide ml-1">Confirm</label>
                                            <div className="relative">
                                                <Lock size={14} className="absolute left-3 top-3 text-slate-400" />
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    required
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                    placeholder="••••••"
                                                    className="w-full pl-9 pr-8 py-2.5 rounded-lg border border-slate-200 focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none text-sm transition-all"
                                                />
                                                <button type="button" onClick={toggleConfirmPassword} className="absolute right-2 top-2.5 text-slate-400 hover:text-slate-600">
                                                    {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-[var(--brand-secondary)] transition-all flex items-center justify-center group shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                                >
                                    {loading ? (
                                        <Loader2 size={18} className="animate-spin" />
                                    ) : (
                                        <>
                                            {isLoginMode ? "Sign In" : "Create Account"}
                                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>

                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center text-xs">
                                <span className="text-slate-500 mr-2">
                                    {isLoginMode ? "New here?" : "Already member?"}
                                </span>
                                <button
                                    onClick={() => {
                                        setIsLoginMode(!isLoginMode);
                                        setError('');
                                    }}
                                    className="font-bold text-[var(--brand-secondary)] hover:text-amber-600 transition-colors"
                                >
                                    {isLoginMode ? "Create an account" : "Sign in"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
