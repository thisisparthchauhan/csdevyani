import Link from 'next/link';
import { Search, User } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-[#003366] text-white py-2 text-xs md:text-sm">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="hidden md:flex space-x-4">
                    <Link href="#" className="hover:text-[#c5a059]">Skip to Main Content</Link>
                    <span className="text-gray-400">|</span>
                    <Link href="#" className="hover:text-[#c5a059]">Screen Reader Access</Link>
                </div>

                <div className="flex items-center space-x-4 ml-auto">
                    <div className="flex items-center space-x-2 border-r border-gray-500 pr-4">
                        <button className="hover:text-[#c5a059]">A-</button>
                        <button className="hover:text-[#c5a059]">A</button>
                        <button className="hover:text-[#c5a059]">A+</button>
                    </div>

                    <div className="flex space-x-3">
                        <Link href="#" className="hover:text-[#c5a059]">Hindi</Link>
                        <span className="text-gray-400">|</span>
                        <Link href="/login" className="flex items-center hover:text-[#c5a059]">
                            <User size={14} className="mr-1" /> Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
