"use client";
import Link from 'next/link';
import { Menu, Search, X, ShieldCheck, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

import { auth } from '@/lib/firebase';

import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const pathname = usePathname();
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    // Monitor Auth State
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return () => unsubscribe();
    }, []);

    // Add shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            name: 'About Us',
            href: '/about'
        },
        {
            name: 'Regulatory',
            hasDropdown: true,
            subItems: [
                {
                    category: 'SEBI',
                    items: [
                        { name: 'AIF Registration', href: '/alternative-investment-fund-registration-india' },
                        { name: 'AIF Compliance', href: '/aif-compliance-obligations' },
                        { name: 'PMS Registration', href: '/portfolio-manager-registration-india' },
                        { name: 'PMS Compliance', href: '/pms-compliance-obligations' },
                        { name: 'DP Compliance', href: '/depository-participant-compliance-obligations' },
                        { name: 'Investment Adviser Registration', href: '/investment-adviser-registration-india' },
                        { name: 'RTA Registration', href: '/rta-registration-india' },
                        { name: 'IA Compliance', href: '/post-registration-compliance-for-investment-advisers-in-india' },
                        { name: 'Stock Broker Registration', href: '/stock-broker-registration-sebi' },
                        { name: 'Stock Broker Compliance', href: '/post-registration-compliance-for-stock-brokers' },
                        { name: 'RTA Registration', href: '/rta-registration-india' },
                    ]
                },
                {
                    category: 'IFSCA',
                    items: [
                        { name: 'Fund Management', href: '/coming-soon' },
                        { name: 'Banking Units', href: '/coming-soon' },
                    ]
                }
            ]
        },
        {
            name: 'Resources',
            href: '/articles'
        },
        {
            name: 'Pricing',
            href: '/coming-soon'
        }
    ];

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
                : 'bg-white py-4'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Premium Logo */}
                <Link href="/" className="flex items-center group">
                    <div className="bg-gradient-to-br from-[var(--brand-secondary)] to-amber-500 p-2 rounded-lg text-white mr-3 shadow-lg group-hover:shadow-amber-500/30 transition-all duration-300">
                        <ShieldCheck size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-extrabold tracking-tight text-[var(--brand-primary)] group-hover:text-[var(--brand-secondary)] transition-colors">
                            CSDEVYANI
                        </span>
                        <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest group-hover:text-[var(--brand-primary)] transition-colors">
                            Compliance Expert
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    {navItems.map((item) => {
                        if (item.hasDropdown) {
                            return (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setOpenDropdown(item.name)}
                                    onMouseLeave={() => setOpenDropdown(null)}
                                >
                                    <button className="flex items-center font-medium text-slate-600 hover:text-[var(--brand-primary)] transition-colors text-sm py-1">
                                        {item.name}
                                        <ChevronDown size={16} className="ml-1 transition-transform group-hover:rotate-180" />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <div className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transition-all duration-300 ${openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                                        <div className="p-4">
                                            {item.subItems?.map((category, idx) => (
                                                <div key={idx} className={idx > 0 ? 'mt-4 pt-4 border-t border-slate-100' : ''}>
                                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                                                        {category.category}
                                                    </div>
                                                    <div className="space-y-1">
                                                        {category.items.map((subItem) => {
                                                            const isActive = pathname === subItem.href;
                                                            return (
                                                                <Link
                                                                    key={subItem.href}
                                                                    href={subItem.href}
                                                                    className={`block px-3 py-2 rounded-lg text-sm transition-all ${isActive ? 'bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] font-bold' : 'text-slate-700 hover:bg-slate-50 hover:text-[var(--brand-primary)]'}`}
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href || '#'}
                                className={`font-medium transition-colors text-sm relative group py-1 ${isActive ? 'text-[var(--brand-secondary)] font-bold' : 'text-slate-600 hover:text-[var(--brand-primary)]'}`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--brand-secondary)] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        );
                    })}

                    <Link
                        href="/contact"
                        className={`px-5 py-2 text-sm font-bold text-white rounded-full transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${pathname === '/contact' ? 'bg-[var(--brand-secondary)]' : 'bg-[var(--brand-primary)] hover:bg-[var(--brand-secondary)]'}`}
                    >
                        Contact Us
                    </Link>

                    <button className="text-slate-500 hover:text-[var(--brand-secondary)] transition-colors">
                        <Search size={20} />
                    </button>

                    {/* User Auth Status */}
                    {currentUser ? (
                        <Link href="/dashboard" className="flex items-center space-x-2 pl-4 border-l border-slate-200">
                            <div className="w-8 h-8 rounded-full bg-[var(--brand-secondary)] text-white flex items-center justify-center font-bold text-sm shadow-md">
                                {currentUser.email?.[0]?.toUpperCase() || 'U'}
                            </div>
                        </Link>
                    ) : (
                        <Link href="/login" className="pl-4 border-l border-slate-200 text-sm font-bold text-[var(--brand-primary)] hover:text-[var(--brand-secondary)] transition-colors">
                            Login
                        </Link>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-slate-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-up">
                    <div className="flex flex-col p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                        {navItems.map((item) => {
                            if (item.hasDropdown) {
                                return (
                                    <div key={item.name}>
                                        <div className="font-bold text-slate-900 mb-2">{item.name}</div>
                                        {item.subItems?.map((category, idx) => (
                                            <div key={idx} className="ml-4 mb-3">
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                                                    {category.category}
                                                </div>
                                                <div className="space-y-1">
                                                    {category.items.map((subItem) => {
                                                        const isActive = pathname === subItem.href;
                                                        return (
                                                            <Link
                                                                key={subItem.href}
                                                                href={subItem.href}
                                                                className={`block py-2 text-sm ${isActive ? 'text-[var(--brand-secondary)] font-bold' : 'text-slate-600'}`}
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {subItem.name}
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                );
                            }

                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href || '#'}
                                    className={`font-medium ${isActive ? 'text-[var(--brand-secondary)] font-bold' : 'text-slate-700 hover:text-[var(--brand-secondary)]'}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}

                        <Link
                            href="/contact"
                            className={`font-bold hover:text-[var(--brand-secondary)] ${pathname === '/contact' ? 'text-[var(--brand-secondary)]' : 'text-[var(--brand-primary)]'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>

                        <div className="pt-4 border-t flex flex-col gap-3">
                            {currentUser ? (
                                <Link href="/dashboard" className="text-center py-2 text-white bg-[var(--brand-secondary)] font-bold rounded-lg shadow-md" onClick={() => setIsMenuOpen(false)}>
                                    Go to Dashboard
                                </Link>
                            ) : (
                                <Link href="/login" className="text-center py-2 text-slate-600 font-medium border border-slate-200 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                                    Login / Sign Up
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
