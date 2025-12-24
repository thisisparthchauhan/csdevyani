"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { signOut, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import { User, LogOut, FileText, Settings, Shield, ExternalLink, LayoutDashboard, Crown, Save, Briefcase, Calendar, Building, Lock, Bell, Camera, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Tabs: 'profile' | 'security'
    const [activeTab, setActiveTab] = useState('profile');

    // Profile State
    const [profileData, setProfileData] = useState({
        fullName: '',
        dob: '',
        phone: '',
        companyName: '',
        position: '',
        bio: '',
        website: ''
    });

    // Password State
    const [passState, setPassState] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });

    const [isSaving, setIsSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState({ type: '', text: '' });

    const allowedBloggers = [
        'chauhanparth165@gmail.com',
        'universetcenter@gmail.com',
        'compliance@csdevyani.com'
    ];

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setLoading(false);
            if (!currentUser) {
                router.push('/login');
                return;
            }

            setUser(currentUser);

            // Fetch Profile Data in background
            (async () => {
                try {
                    const docRef = doc(db, 'users', currentUser.uid);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setProfileData((prev) => ({ ...prev, ...docSnap.data() }));
                    }
                } catch (err) {
                    console.error("Error fetching profile:", err);
                }
            })();
        });

        // Failsafe timeout in case auth takes too long
        const timeoutId = setTimeout(() => setLoading(false), 5000);

        return () => {
            unsubscribe();
            clearTimeout(timeoutId);
        };
    }, [router]);

    const handleLogout = async () => {
        if (window.confirm("Are you sure you want to log out?")) {
            await signOut(auth);
            router.push('/login');
        }
    };

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };

    const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassState({ ...passState, [e.target.name]: e.target.value });
    };

    const calculateAge = (dateString: string) => {
        const today = new Date();
        const birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaveMessage({ type: '', text: '' });
        setIsSaving(true);

        // Failsafe: Stop "Saving..." after 15 seconds
        const timeoutId = setTimeout(() => {
            setIsSaving((prev) => {
                if (prev) {
                    setSaveMessage({ type: 'error', text: 'Request timed out. Check your connection.' });
                    return false;
                }
                return false;
            });
        }, 15000);

        // Validation
        if (profileData.dob) {
            const age = calculateAge(profileData.dob);
            if (age < 18 || age > 80) {
                setSaveMessage({ type: 'error', text: 'Age must be between 18 and 80 years.' });
                setIsSaving(false);
                clearTimeout(timeoutId);
                return;
            }
        }

        if (!profileData.fullName || !profileData.phone) {
            setSaveMessage({ type: 'error', text: 'Full Name and Phone are required.' });
            setIsSaving(false);
            clearTimeout(timeoutId);
            return;
        }

        try {
            if (user) {
                let finalPhone = profileData.phone;
                // Ensure '+' prefix for consistency in DB
                if (!finalPhone.startsWith('+')) finalPhone = '+' + finalPhone;

                await setDoc(doc(db, 'users', user.uid), {
                    ...profileData,
                    phone: finalPhone,
                    email: user.email,
                    updatedAt: new Date()
                }, { merge: true });

                // Update local state to match formatted phone
                setProfileData(prev => ({ ...prev, phone: finalPhone }));

                setSaveMessage({ type: 'success', text: 'Profile updated successfully!' });

                // Clear success message after 3s
                setTimeout(() => setSaveMessage({ type: '', text: '' }), 3000);
            }
        } catch (error) {
            console.error("Error saving profile:", error);
            setSaveMessage({ type: 'error', text: 'Failed to save profile.' });
        } finally {
            clearTimeout(timeoutId);
            setIsSaving(false);
        }
    };

    const handleUpdatePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaveMessage({ type: '', text: '' });
        setIsSaving(true);

        const timeoutId = setTimeout(() => {
            setIsSaving((prev) => {
                if (prev) {
                    setSaveMessage({ type: 'error', text: 'Request timed out.' });
                    return false;
                }
                return false;
            });
        }, 15000);

        if (passState.newPassword !== passState.confirmNewPassword) {
            setSaveMessage({ type: 'error', text: 'New passwords do not match.' });
            setIsSaving(false);
            clearTimeout(timeoutId);
            return;
        }

        if (passState.newPassword.length < 6) {
            setSaveMessage({ type: 'error', text: 'Password must be at least 6 characters.' });
            setIsSaving(false);
            clearTimeout(timeoutId);
            return;
        }

        try {
            if (user && user.email) {
                // Re-authenticate
                const credential = EmailAuthProvider.credential(user.email, passState.currentPassword);
                await reauthenticateWithCredential(user, credential);

                // Update password (Firebase Auth handles this securely)
                await updatePassword(user, passState.newPassword);

                // Log activity (without storing password)
                await setDoc(doc(db, 'users', user.uid), {
                    lastPasswordChange: new Date(),
                    updatedAt: new Date()
                }, { merge: true });

                setSaveMessage({ type: 'success', text: 'Password updated successfully!' });
                setPassState({ currentPassword: '', newPassword: '', confirmNewPassword: '' });

                setTimeout(() => setSaveMessage({ type: '', text: '' }), 3000);
            }
        } catch (error: any) {
            console.error("Password update error:", error);
            if (error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
                setSaveMessage({ type: 'error', text: 'Current password is incorrect.' });
            } else {
                setSaveMessage({ type: 'error', text: 'Failed to update password. Please try again.' });
            }
        } finally {
            clearTimeout(timeoutId);
            setIsSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--brand-secondary)]"></div>
            </div>
        );
    }

    if (!user) return null;

    const isBlogger = user.email && allowedBloggers.includes(user.email);

    return (
        <div className="min-h-screen bg-[#F8FAFC]">
            {/* Top Navigation */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center group">
                                <div className="bg-gradient-to-tr from-slate-900 to-slate-700 p-2 rounded-xl text-white mr-3 shadow-lg shadow-slate-200">
                                    <Shield size={18} />
                                </div>
                                <span className="text-lg font-bold text-slate-800 tracking-tight">CSDEVYANI <span className="text-slate-400 font-medium text-sm ml-1">Dashboard</span></span>
                            </Link>
                        </div>
                        <div className="flex items-center space-x-6">
                            <div className="hidden md:flex flex-col items-end">
                                <span className="text-sm font-bold text-slate-800">{profileData.fullName || user.email?.split('@')[0]}</span>
                                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-full mt-0.5 border border-slate-200">
                                    {isBlogger ? 'Admin' : 'Member'}
                                </span>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                                title="Sign Out"
                            >
                                <LogOut size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Account Settings</h1>
                        <p className="text-slate-500 mt-1">Manage your personal details and security preferences.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* LEFT SIDEBAR - PROFILE SUMMARY */}
                    <div className="lg:col-span-4 space-y-6">

                        {/* Profile Card */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-slate-100 to-slate-50"></div>
                            <div className="relative flex flex-col items-center mt-4">
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg ring-1 ring-slate-100">
                                        <div className="w-full h-full bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                                            <User size={40} />
                                        </div>
                                    </div>
                                    <button className="absolute bottom-1 right-1 bg-slate-900 text-white p-2 rounded-full shadow-lg hover:bg-[var(--brand-secondary)] transition-colors">
                                        <Camera size={14} />
                                    </button>
                                </div>
                                <h2 className="mt-4 text-xl font-bold text-slate-900">{profileData.fullName || 'User'}</h2>
                                <p className="text-sm text-slate-500 mb-4">{user.email}</p>

                                <div className="w-full grid grid-cols-2 gap-2 mt-2">
                                    <div className="bg-slate-50 p-3 rounded-xl text-center border border-slate-100">
                                        <span className="block text-xs text-slate-400 font-bold uppercase">Status</span>
                                        <span className="text-sm font-bold text-green-600 flex items-center justify-center gap-1">
                                            <CheckCircle2 size={12} /> Active
                                        </span>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-xl text-center border border-slate-100">
                                        <span className="block text-xs text-slate-400 font-bold uppercase">Joined</span>
                                        <span className="text-sm font-bold text-slate-700">Dec 2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Menu (Desktop Sidebar Concept) */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden hidden lg:block">
                            <div className="p-2 space-y-1">
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'profile' ? 'bg-slate-50 text-slate-900 ring-1 ring-slate-200 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                                >
                                    <div className="flex items-center">
                                        <User size={18} className={`mr-3 ${activeTab === 'profile' ? 'text-[var(--brand-secondary)]' : 'text-slate-400'}`} />
                                        Personal Details
                                    </div>
                                    {activeTab === 'profile' && <ChevronRight size={16} className="text-slate-400" />}
                                </button>
                                <button
                                    onClick={() => setActiveTab('security')}
                                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${activeTab === 'security' ? 'bg-slate-50 text-slate-900 ring-1 ring-slate-200 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
                                >
                                    <div className="flex items-center">
                                        <Lock size={18} className={`mr-3 ${activeTab === 'security' ? 'text-[var(--brand-secondary)]' : 'text-slate-400'}`} />
                                        Login & Security
                                    </div>
                                    {activeTab === 'security' && <ChevronRight size={16} className="text-slate-400" />}
                                </button>
                            </div>
                        </div>

                        {/* Admin Link (If Applicable) */}
                        {isBlogger && (
                            <Link href="/admin/blog" className="block p-4 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl text-white shadow-lg relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                                <div className="relative flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                                            <Crown size={20} className="text-amber-300" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">Admin Console</h4>
                                            <p className="text-xs text-slate-300">New Article</p>
                                        </div>
                                    </div>
                                    <div className="bg-white text-slate-900 p-2 rounded-full">
                                        <ChevronRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        )}
                    </div>

                    {/* RIGHT COLUMN - CONTENT AREA */}
                    <div className="lg:col-span-8">

                        {/* Mobile Tabs */}
                        <div className="flex lg:hidden overflow-x-auto space-x-2 mb-6 pb-2 scrollbar-hide">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'profile' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}
                            >
                                Personal Details
                            </button>
                            <button
                                onClick={() => setActiveTab('security')}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${activeTab === 'security' ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}
                            >
                                Login & Security
                            </button>
                        </div>

                        {/* MAIN CONTENT CARD */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden min-h-[500px]">

                            {saveMessage.text && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    className={`px-6 py-3 text-sm font-medium flex items-center ${saveMessage.type === 'error' ? 'bg-red-50 text-red-700 border-b border-red-100' : 'bg-green-50 text-green-700 border-b border-green-100'}`}
                                >
                                    {saveMessage.type === 'error' ? <AlertCircle size={16} className="mr-2" /> : <CheckCircle2 size={16} className="mr-2" />}
                                    {saveMessage.text}
                                </motion.div>
                            )}

                            {activeTab === 'profile' && (
                                <div className="p-6 md:p-8">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-slate-900">Personal Information</h3>
                                        <p className="text-sm text-slate-500">Update your photo and personal details here.</p>
                                    </div>

                                    <form onSubmit={handleSaveProfile} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    value={profileData.fullName}
                                                    onChange={handleProfileChange}
                                                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium"
                                                    placeholder="Your Name"
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number</label>
                                                <div className="relative">
                                                    <PhoneInput
                                                        country={'in'}
                                                        value={profileData.phone}
                                                        onChange={(phone) => setProfileData({ ...profileData, phone })}
                                                        inputStyle={{
                                                            width: '100%',
                                                            height: '42px',
                                                            borderRadius: '0.75rem',
                                                            border: '1px solid #e2e8f0',
                                                            backgroundColor: '#f8fafc',
                                                            fontSize: '0.875rem',
                                                            paddingLeft: '48px',
                                                            fontWeight: 500
                                                        }}
                                                        buttonStyle={{
                                                            borderRadius: '0.75rem 0 0 0.75rem',
                                                            border: '1px solid #e2e8f0',
                                                            borderRight: 'none',
                                                            backgroundColor: 'transparent'
                                                        }}
                                                        containerClass="w-full"
                                                    />
                                                </div>
                                            </div>

                                            {/* DOB */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Date of Birth</label>
                                                <div className="relative">
                                                    <Calendar size={16} className="absolute left-3 top-3 text-slate-400" />
                                                    <input
                                                        type="date"
                                                        name="dob"
                                                        value={profileData.dob}
                                                        onChange={handleProfileChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium text-slate-600"
                                                    />
                                                </div>
                                            </div>

                                            {/* Email (Read Only) */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                                                <input
                                                    type="email"
                                                    value={user.email || ''}
                                                    disabled
                                                    className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 font-medium cursor-not-allowed"
                                                />
                                            </div>
                                        </div>

                                        <div className="border-t border-slate-100 my-4"></div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Company */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Company Name</label>
                                                <div className="relative">
                                                    <Building size={16} className="absolute left-3 top-3 text-slate-400" />
                                                    <input
                                                        type="text"
                                                        name="companyName"
                                                        value={profileData.companyName}
                                                        onChange={handleProfileChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium"
                                                        placeholder="Company Name"
                                                    />
                                                </div>
                                            </div>

                                            {/* Role */}
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Designation</label>
                                                <div className="relative">
                                                    <Briefcase size={16} className="absolute left-3 top-3 text-slate-400" />
                                                    <input
                                                        type="text"
                                                        name="position"
                                                        value={profileData.position}
                                                        onChange={handleProfileChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium"
                                                        placeholder="e.g. Director"
                                                    />
                                                </div>
                                            </div>

                                            {/* Website */}
                                            <div className="space-y-1.5 md:col-span-2">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Website / LinkedIn</label>
                                                <div className="relative">
                                                    <ExternalLink size={16} className="absolute left-3 top-3 text-slate-400" />
                                                    <input
                                                        type="text"
                                                        name="website"
                                                        value={profileData.website || ''}
                                                        onChange={handleProfileChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium"
                                                        placeholder="https://..."
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">About Me</label>
                                            <textarea
                                                name="bio"
                                                value={profileData.bio || ''}
                                                onChange={handleProfileChange}
                                                rows={3}
                                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium resize-none"
                                                placeholder="Write a short bio..."
                                            ></textarea>
                                        </div>

                                        <div className="flex justify-end pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSaving}
                                                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-[var(--brand-secondary)] transition-all shadow-lg hover:shadow-xl flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSaving ? (
                                                    <span className="flex items-center"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div> Saving...</span>
                                                ) : (
                                                    <>Save Changes</>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {activeTab === 'security' && (
                                <div className="p-6 md:p-8">
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold text-slate-900">Login & Security</h3>
                                        <p className="text-sm text-slate-500">Manage your password and login preferences.</p>
                                    </div>

                                    <form onSubmit={handleUpdatePassword} className="space-y-6 max-w-lg">

                                        <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl flex items-start">
                                            <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                                            <div className="ml-3">
                                                <h4 className="text-sm font-bold text-amber-800">Password Requirements</h4>
                                                <p className="text-xs text-amber-700 mt-1">Minimum 6 characters. Include numbers and symbols for better security.</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Current Password</label>
                                                <div className="relative">
                                                    <Lock size={16} className="absolute left-3 top-3 text-slate-400" />
                                                    <input
                                                        type="password"
                                                        name="currentPassword"
                                                        required
                                                        value={passState.currentPassword}
                                                        onChange={handlePassChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">New Password</label>
                                                <div className="relative">
                                                    <Lock size={16} className="absolute left-3 top-3 text-slate-400" />
                                                    <input
                                                        type="password"
                                                        name="newPassword"
                                                        required
                                                        value={passState.newPassword}
                                                        onChange={handlePassChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Confirm New Password</label>
                                                <div className="relative">
                                                    <Lock size={16} className="absolute left-3 top-3 text-slate-400" />
                                                    <input
                                                        type="password"
                                                        name="confirmNewPassword"
                                                        required
                                                        value={passState.confirmNewPassword}
                                                        onChange={handlePassChange}
                                                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all font-medium"
                                                        placeholder="••••••••"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSaving}
                                                className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-[var(--brand-secondary)] transition-all shadow-lg hover:shadow-xl flex items-center disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isSaving ? (
                                                    <span className="flex items-center"><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div> Updating...</span>
                                                ) : (
                                                    <>Update Password</>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
