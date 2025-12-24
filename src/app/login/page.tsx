"use client";
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [mobile, setMobile] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    // Redirect if already logged in
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                router.push('/dashboard');
            }
        });
        return () => unsubscribe();
    }, [router]);

    // Toggle Password Visibility
    const togglePassword = () => setShowPassword(!showPassword);
    const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        // Failsafe: Reset loading after 15 seconds if requests hang
        setTimeout(() => {
            setLoading(current => {
                if (current) {
                    setError('Request timed out. Please check your connection.');
                    return false;
                }
                return false;
            });
        }, 15000);

        // --- VALIDATION ---

        // 1. Mobile Number Validation (Signup Only)
        if (!isLogin) {
            if (mobile.length < 8) { // Basic length check for international numbers
                setError('Please enter a valid mobile number.');
                setLoading(false);
                return;
            }
        }

        // 2. Password Match Validation (Signup Only)
        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.');
            setLoading(false);
            return;
        }

        /* 
           NOTE: Email restriction removed to allow General Member Signups. 
           Admin privileges are now protected by the Dashboard authorization check.
        */

        try {
            if (isLogin) {
                // --- LOGIN FLOW ---
                await signInWithEmailAndPassword(auth, email, password);
            } else {
                // --- SIGNUP FLOW ---
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Save Extra Details to Firestore
                try {
                    await setDoc(doc(db, 'users', user.uid), {
                        fullName: fullName.trim(),
                        email: email.toLowerCase(), // Ensure consistency
                        mobile: "+" + mobile, // Save format with + for consistency
                        role: 'member', // Default role
                        createdAt: serverTimestamp(),
                        updatedAt: serverTimestamp()
                    });
                } catch (dbError) {
                    console.error("Error saving user details:", dbError);
                    // Continue even if DB save fails, auth is successful
                }
            }
            router.push('/dashboard');
        } catch (err: any) {
            console.error('Auth Error:', err);
            if (err.code === 'auth/email-already-in-use') {
                setError('Email already in use. Please login instead.');
            } else if (err.code === 'auth/invalid-credential') {
                setError('Invalid email or password');
            } else if (err.code === 'auth/weak-password') {
                setError('Password should be at least 6 characters.');
            } else {
                setError(err.message || 'Authentication failed');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-[var(--brand-primary)] mb-2">CSDEVYANI</h1>
                    <p className="text-gray-500 font-medium">
                        {isLogin ? 'Welcome Back!' : 'Create Your Account'}
                    </p>
                </div>

                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm mb-6 flex items-start">
                        <span className="mr-2">⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* FULL NAME (Signup Only) */}
                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Full Name</label>
                            <input
                                type="text"
                                required
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                    )}

                    {/* EMAIL */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all"
                            placeholder="name@example.com"
                        />
                    </div>

                    {/* MOBILE (Signup Only) */}
                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Mobile Number (WhatsApp)</label>
                            <PhoneInput
                                country={'in'}
                                value={mobile}
                                onChange={(phone) => setMobile(phone)}
                                inputStyle={{
                                    width: '100%',
                                    height: '48px',
                                    borderRadius: '0.75rem',
                                    border: '1px solid #e5e7eb',
                                    fontSize: '1rem',
                                    paddingLeft: '48px'
                                }}
                                buttonStyle={{
                                    borderRadius: '0.75rem 0 0 0.75rem',
                                    border: '1px solid #e5e7eb',
                                    borderRight: 'none',
                                    backgroundColor: 'transparent'
                                }}
                                containerClass="w-full"
                            />
                        </div>
                    )}

                    {/* PASSWORD */}
                    <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all pr-12"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={togglePassword}
                                className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* CONFIRM PASSWORD (Signup Only) */}
                    {!isLogin && (
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    required
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all pr-12"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPassword}
                                    className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--brand-primary)] text-white py-3.5 rounded-xl font-bold hover:bg-[var(--brand-secondary)] transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    >
                        {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-sm font-medium text-slate-600 hover:text-[var(--brand-secondary)] transition-colors"
                    >
                        {isLogin ? (
                            <span>Don't have an account? <span className="font-bold underline">Sign Up</span></span>
                        ) : (
                            <span>Already have an account? <span className="font-bold underline">Login</span></span>
                        )}
                    </button>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                        <Link href="/" className="text-xs font-bold text-slate-400 hover:text-slate-600 flex items-center justify-center gap-1 group">
                            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Website
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
