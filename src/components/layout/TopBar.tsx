import Link from 'next/link';
import { Mail, Phone, LogIn } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-slate-900 text-slate-300 py-2 text-xs border-b border-slate-800">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Contact Info */}
                <div className="hidden md:flex space-x-6">
                    <a href="mailto:support@csdevyani.com" className="flex items-center hover:text-white transition-colors">
                        <Mail size={12} className="mr-2 text-[var(--brand-secondary)]" />
                        support@csdevyani.com
                    </a>
                    <a href="tel:+917961809800" className="flex items-center hover:text-white transition-colors">
                        <Phone size={12} className="mr-2 text-[var(--brand-secondary)]" />
                        +91 79 6180 9800
                    </a>
                </div>

                {/* Right Actions */}
                <div className="flex items-center space-x-4 ml-auto">
                    <Link href="/coming-soon" className="hover:text-white transition-colors hidden sm:block">Support</Link>
                    <span className="text-slate-700 hidden sm:block">|</span>
                    <Link href="/coming-soon" className="hover:text-white transition-colors hidden sm:block">Careers</Link>
                </div>
            </div>
        </div>
    );
}
