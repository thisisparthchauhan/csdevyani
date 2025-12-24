"use client";
import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { Mail, ArrowLeft, CheckCircle2, AlertCircle, Send } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('idle');
        setMessage('');

        try {
            await sendPasswordResetEmail(auth, email, {
                url: `${window.location.origin}/login`,
                handleCodeInApp: false,
            });

            setStatus('success');
            setMessage('Password reset email sent! Check your inbox.');
            setEmail('');
        } catch (error: any) {
            console.error('Password reset error:', error);
            setStatus('error');

            if (error.code === 'auth/user-not-found') {
                setMessage('No account found with this email address.');
            } else if (error.code === 'auth/invalid-email') {
                setMessage('Please enter a valid email address.');
            } else if (error.code === 'auth/too-many-requests') {
                setMessage('Too many attempts. Please try again later.');
            } else {
                setMessage('Failed to send reset email. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
            >
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <Mail className="text-white" size={32} />
                        </div>
                        <h1 className="text-2xl font-bold text-white mb-2">Reset Password</h1>
                        <p className="text-blue-100 text-sm">
                            Enter your email and we'll send you a reset link
                        </p>
                    </div>

                    {/* Form */}
                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            {status === 'success' ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="text-green-400" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Email Sent!</h3>
                                    <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                                        We've sent a password reset link to your email.
                                        Click the link in the email to reset your password.
                                    </p>
                                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 mb-6">
                                        <p className="text-blue-200 text-xs">
                                            <strong>Didn't receive the email?</strong><br />
                                            Check your spam folder or try again in a few minutes.
                                        </p>
                                    </div>
                                    <Link
                                        href="/login"
                                        className="inline-flex items-center px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all shadow-lg"
                                    >
                                        <ArrowLeft size={18} className="mr-2" />
                                        Back to Login
                                    </Link>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleResetPassword}
                                    className="space-y-6"
                                >
                                    {/* Error Message */}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start"
                                        >
                                            <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                                            <p className="text-red-200 text-sm ml-3">{message}</p>
                                        </motion.div>
                                    )}

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-white uppercase tracking-wide">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full pl-12 pr-4 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:bg-white/20 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50 outline-none transition-all"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                        <p className="text-xs text-slate-400">
                                            Enter the email address associated with your account
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={loading || !email}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3.5 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} className="mr-2" />
                                                Send Reset Link
                                            </>
                                        )}
                                    </button>

                                    {/* Back to Login */}
                                    <div className="text-center pt-4">
                                        <Link
                                            href="/login"
                                            className="inline-flex items-center text-sm text-slate-300 hover:text-white transition-colors"
                                        >
                                            <ArrowLeft size={16} className="mr-1" />
                                            Back to Login
                                        </Link>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer */}
                    <div className="bg-white/5 border-t border-white/10 p-6 text-center">
                        <p className="text-xs text-slate-400">
                            Need help? Contact us at{' '}
                            <a href="mailto:support@csdevyani.com" className="text-blue-400 hover:text-blue-300 font-medium">
                                support@csdevyani.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 text-center">
                    <p className="text-slate-400 text-sm">
                        Don't have an account?{' '}
                        <Link href="/" className="text-blue-400 hover:text-blue-300 font-medium">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
