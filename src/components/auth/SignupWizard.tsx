"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User, Lock, ArrowRight, ArrowLeft, CheckCircle2, Shield } from 'lucide-react';
import { createUserWithEmailAndPassword, sendEmailVerification, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, linkWithCredential } from 'firebase/auth';
import { auth, db } from '@/lib/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface SignupWizardProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SignupWizard({ isOpen, onClose }: SignupWizardProps) {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Details, 2: Email OTP, 3: Mobile OTP, 4: Success

    // Form Data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });

    // OTP States
    const [emailOTP, setEmailOTP] = useState(['', '', '', '', '', '']);
    const [mobileOTP, setMobileOTP] = useState(['', '', '', '', '', '']);
    const [generatedEmailOTP, setGeneratedEmailOTP] = useState('');
    const [confirmationResult, setConfirmationResult] = useState<any>(null);

    // UI States
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [resendTimer, setResendTimer] = useState(0);

    // Generate 6-digit OTP
    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    // Send Email OTP (Simulated - In production, use backend service)
    const sendEmailOTP = async () => {
        const otp = generateOTP();
        setGeneratedEmailOTP(otp);

        // In production, send via backend API to email service
        console.log(`Email OTP for ${formData.email}: ${otp}`);
        alert(`Demo Mode: Your email OTP is ${otp}\n\nIn production, this will be sent to your email.`);

        startResendTimer();
    };

    // Setup reCAPTCHA for Phone Auth
    const setupRecaptcha = () => {
        if (!(window as any).recaptchaVerifier) {
            (window as any).recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                size: 'invisible',
                callback: () => {
                    // reCAPTCHA solved
                }
            });
        }
    };

    // Send Mobile OTP
    const sendMobileOTP = async () => {
        try {
            setLoading(true);
            setError('');

            setupRecaptcha();
            const appVerifier = (window as any).recaptchaVerifier;
            const phoneNumber = '+' + formData.mobile;

            const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
            setConfirmationResult(confirmation);

            startResendTimer();
            setLoading(false);
        } catch (err: any) {
            console.error('SMS Error:', err);
            setError('Failed to send SMS. Please try again.');
            setLoading(false);
        }
    };

    // Start resend timer
    const startResendTimer = () => {
        setResendTimer(60);
        const interval = setInterval(() => {
            setResendTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Handle Step 1: Submit Details
    const handleStep1Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.fullName || !formData.email || !formData.mobile || !formData.password) {
            setError('All fields are required');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        // Send Email OTP
        await sendEmailOTP();
        setStep(2);
    };

    // Handle Step 2: Verify Email OTP
    const handleStep2Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const enteredOTP = emailOTP.join('');

        if (enteredOTP !== generatedEmailOTP) {
            setError('Invalid OTP. Please try again.');
            return;
        }

        // Email verified, move to mobile OTP
        await sendMobileOTP();
        setStep(3);
    };

    // Handle Step 3: Verify Mobile OTP & Complete Signup
    const handleStep3Submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const enteredOTP = mobileOTP.join('');

            // Verify mobile OTP
            const result = await confirmationResult.confirm(enteredOTP);
            const phoneCredential = PhoneAuthProvider.credential(
                confirmationResult.verificationId,
                enteredOTP
            );

            // Create email/password account
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );

            // Link phone number to account
            await linkWithCredential(userCredential.user, phoneCredential);

            // Save to Firestore
            await setDoc(doc(db, 'users', userCredential.user.uid), {
                fullName: formData.fullName.trim(),
                email: formData.email.toLowerCase(),
                mobile: '+' + formData.mobile,
                role: 'member',
                emailVerified: true,
                mobileVerified: true,
                profileCompleted: 60,
                accountStatus: 'active',
                loginCount: 1,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
                lastLoginAt: serverTimestamp()
            });

            setStep(4);

            // Redirect after 2 seconds
            setTimeout(() => {
                onClose();
                router.push('/dashboard');
            }, 2000);

        } catch (err: any) {
            console.error('Verification Error:', err);
            if (err.code === 'auth/invalid-verification-code') {
                setError('Invalid OTP. Please try again.');
            } else {
                setError('Verification failed. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    // Handle OTP Input
    const handleOTPChange = (index: number, value: string, isEmail: boolean) => {
        if (!/^\d*$/.test(value)) return;

        const newOTP = isEmail ? [...emailOTP] : [...mobileOTP];
        newOTP[index] = value;

        if (isEmail) {
            setEmailOTP(newOTP);
        } else {
            setMobileOTP(newOTP);
        }

        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${isEmail ? 'email' : 'mobile'}-${index + 1}`);
            nextInput?.focus();
        }
    };

    // Handle OTP Paste
    const handleOTPPaste = (e: React.ClipboardEvent, isEmail: boolean) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);

        if (!/^\d+$/.test(pastedData)) return;

        const newOTP = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);

        if (isEmail) {
            setEmailOTP(newOTP);
        } else {
            setMobileOTP(newOTP);
        }
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-600 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Progress Bar */}
                    <div className="h-1 bg-slate-100">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-600 to-purple-600"
                            initial={{ width: '0%' }}
                            animate={{ width: `${(step / 4) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-8">
                        <AnimatePresence mode="wait">
                            {/* Step 1: User Details */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <User className="text-white" size={32} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
                                        <p className="text-slate-500 text-sm mt-1">Enter your details to get started</p>
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <form onSubmit={handleStep1Submit} className="space-y-4">
                                        <div>
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Mobile Number</label>
                                            <PhoneInput
                                                country={'in'}
                                                value={formData.mobile}
                                                onChange={(phone) => setFormData({ ...formData, mobile: phone })}
                                                inputStyle={{
                                                    width: '100%',
                                                    height: '48px',
                                                    borderRadius: '0.75rem',
                                                    border: '1px solid #e2e8f0',
                                                    backgroundColor: '#f8fafc',
                                                    paddingLeft: '48px'
                                                }}
                                                containerClass="mt-1"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Password</label>
                                            <input
                                                type="password"
                                                required
                                                value={formData.password}
                                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                                className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="••••••••"
                                            />
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Confirm Password</label>
                                            <input
                                                type="password"
                                                required
                                                value={formData.confirmPassword}
                                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                                className="w-full mt-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                                placeholder="••••••••"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg flex items-center justify-center"
                                        >
                                            Continue
                                            <ArrowRight size={18} className="ml-2" />
                                        </button>
                                    </form>
                                </motion.div>
                            )}

                            {/* Step 2: Email OTP */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <Mail className="text-white" size={32} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900">Verify Email</h2>
                                        <p className="text-slate-500 text-sm mt-1">
                                            We sent a code to<br />
                                            <span className="font-semibold text-slate-700">{formData.email}</span>
                                        </p>
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <form onSubmit={handleStep2Submit} className="space-y-6">
                                        <div>
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide text-center block mb-3">Enter OTP</label>
                                            <div className="flex gap-2 justify-center" onPaste={(e) => handleOTPPaste(e, true)}>
                                                {emailOTP.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        id={`otp-email-${index}`}
                                                        type="text"
                                                        maxLength={1}
                                                        value={digit}
                                                        onChange={(e) => handleOTPChange(index, e.target.value, true)}
                                                        className="w-12 h-14 text-center text-xl font-bold bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            {resendTimer > 0 ? (
                                                <p className="text-sm text-slate-500">
                                                    Resend OTP in <span className="font-bold text-blue-600">{resendTimer}s</span>
                                                </p>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={sendEmailOTP}
                                                    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                                                >
                                                    Resend OTP
                                                </button>
                                            )}
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="flex-1 bg-slate-100 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center"
                                            >
                                                <ArrowLeft size={18} className="mr-2" />
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg"
                                            >
                                                Verify
                                            </button>
                                        </div>
                                    </form>
                                </motion.div>
                            )}

                            {/* Step 3: Mobile OTP */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <div className="text-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                            <Phone className="text-white" size={32} />
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-900">Verify Mobile</h2>
                                        <p className="text-slate-500 text-sm mt-1">
                                            We sent a code to<br />
                                            <span className="font-semibold text-slate-700">+{formData.mobile}</span>
                                        </p>
                                    </div>

                                    {error && (
                                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-4 text-sm">
                                            {error}
                                        </div>
                                    )}

                                    <form onSubmit={handleStep3Submit} className="space-y-6">
                                        <div>
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide text-center block mb-3">Enter OTP</label>
                                            <div className="flex gap-2 justify-center" onPaste={(e) => handleOTPPaste(e, false)}>
                                                {mobileOTP.map((digit, index) => (
                                                    <input
                                                        key={index}
                                                        id={`otp-mobile-${index}`}
                                                        type="text"
                                                        maxLength={1}
                                                        value={digit}
                                                        onChange={(e) => handleOTPChange(index, e.target.value, false)}
                                                        className="w-12 h-14 text-center text-xl font-bold bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            {resendTimer > 0 ? (
                                                <p className="text-sm text-slate-500">
                                                    Resend OTP in <span className="font-bold text-blue-600">{resendTimer}s</span>
                                                </p>
                                            ) : (
                                                <button
                                                    type="button"
                                                    onClick={sendMobileOTP}
                                                    className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                                                >
                                                    Resend OTP
                                                </button>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg disabled:opacity-50 flex items-center justify-center"
                                        >
                                            {loading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                                    Verifying...
                                                </>
                                            ) : (
                                                'Complete Signup'
                                            )}
                                        </button>
                                    </form>

                                    {/* reCAPTCHA Container */}
                                    <div id="recaptcha-container"></div>
                                </motion.div>
                            )}

                            {/* Step 4: Success */}
                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="text-green-600" size={40} />
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Account Created!</h2>
                                    <p className="text-slate-500 mb-6">
                                        Your account has been successfully verified.<br />
                                        Redirecting to dashboard...
                                    </p>
                                    <div className="flex justify-center">
                                        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
