"use client";
import Link from 'next/link';
import { Menu, Search, X, ShieldCheck } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add shadow on scroll
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Startup', href: '/coming-soon' },
        { name: 'Registration – IFSCA | SEBI', href: '/coming-soon' },
        { name: 'Compliance – IFSCA | SEBI', href: '/coming-soon' },
        { name: 'Resources - Fintech', href: '/coming-soon' },
        { name: 'Articles ( Blogs )', href: '/coming-soon' },
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
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-slate-600 font-medium hover:text-[var(--brand-primary)] transition-colors text-sm relative group py-1"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--brand-secondary)] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    <button className="text-slate-500 hover:text-[var(--brand-secondary)] transition-colors">
                        <Search size={20} />
                    </button>
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
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
                    <div className="flex flex-col p-6 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-slate-700 font-medium hover:text-[var(--brand-secondary)]"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-4 border-t flex flex-col gap-3">
                            <Link href="/login" className="text-center py-2 text-slate-600 font-medium">Login</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
