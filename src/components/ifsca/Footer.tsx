import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#003366] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Address */}
                    <div>
                        <h3 className="text-[#c5a059] text-xl font-bold mb-6">Contact Us</h3>
                        <div className="space-y-4 text-sm text-gray-300">
                            <p className="flex items-start">
                                <MapPin className="mr-2 mt-1 flex-shrink-0" size={16} />
                                International Financial Services Centres Authority (IFSCA),<br />
                                Gift City, Gandhinagar,<br />
                                Gujarat - 382355
                            </p>
                            <p className="flex items-center">
                                <Phone className="mr-2" size={16} /> +91-79-6180-9800
                            </p>
                            <p className="flex items-center">
                                <Mail className="mr-2" size={16} /> info-ifsca@gov.in
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[#c5a059] text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-white">About Us</Link></li>
                            <li><Link href="#" className="hover:text-white">Latest News</Link></li>
                            <li><Link href="#" className="hover:text-white">Tenders</Link></li>
                            <li><Link href="#" className="hover:text-white">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact Directory</Link></li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h3 className="text-[#c5a059] text-xl font-bold mb-6">Important Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-white">RTI</Link></li>
                            <li><Link href="#" className="hover:text-white">Public Grievances</Link></li>
                            <li><Link href="#" className="hover:text-white">Vigilance</Link></li>
                            <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div>
                        <h3 className="text-[#c5a059] text-xl font-bold mb-6">Connect With Us</h3>
                        <div className="flex space-x-4 mb-6">
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#c5a059] hover:text-[#003366] transition-all">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#c5a059] hover:text-[#003366] transition-all">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#c5a059] hover:text-[#003366] transition-all">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#c5a059] hover:text-[#003366] transition-all">
                                <Youtube size={20} />
                            </Link>
                        </div>

                        <h4 className="font-bold mb-2">Subscribe to Newsletter</h4>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-[#c5a059]"
                            />
                            <button className="bg-[#c5a059] text-[#003366] px-4 py-2 rounded-r font-bold hover:bg-white">
                                Go
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2024 IFSCA. All Rights Reserved.</p>
                    <p>Last Updated: Dec 19, 2024 | Visitor Count: 1,234,567</p>
                </div>
            </div>
        </footer>
    );
}
