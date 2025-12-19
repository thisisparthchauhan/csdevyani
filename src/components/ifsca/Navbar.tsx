"use client";
import Link from 'next/link';
import { Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'About Us', href: '#' },
        { name: 'Markets', href: '#' },
        { name: 'Set up an Entity', href: '#' },
        { name: 'Consumers', href: '#' },
        { name: 'News', href: '#' },
        { name: 'Publications', href: '#' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    {/* Placeholder for Logo */}
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-[var(--ifsca-blue-light)]">IFSCA</span>
                        <span className="textxs text-gray-500 hidden sm:block">International Financial Services Centres Authority</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-[#003366] font-medium hover:text-[#c5a059] transition-colors uppercase text-sm"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="text-[#003366] hover:text-[#c5a059]">
                        <Search size={20} />
                    </button>
                    <Link
                        href="#"
                        className="bg-[var(--ifsca-blue-light)] text-white px-5 py-2 rounded hover:bg-[#003366] transition-colors"
                    >
                        Apply
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-[#003366]"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100">
                    <div className="flex flex-col p-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[#003366] font-medium hover:text-[#c5a059]"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-2 border-t">
                            <Link href="/login" className="block text-[#003366] py-2">Login</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
