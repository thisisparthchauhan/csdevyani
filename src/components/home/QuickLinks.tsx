import { FileText, Gavel, Bell, BookOpen, Info, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function QuickLinks() {
    const links = [
        { name: 'Act', icon: Gavel, color: 'bg-blue-100 text-blue-600' },
        { name: 'Regulations', icon: BookOpen, color: 'bg-green-100 text-green-600' },
        { name: 'Notifications', icon: Bell, color: 'bg-yellow-100 text-yellow-600' },
        { name: 'Circulars', icon: FileText, color: 'bg-purple-100 text-purple-600' },
        { name: 'Guidelines', icon: Info, color: 'bg-red-100 text-red-600' },
        { name: 'FAQs', icon: HelpCircle, color: 'bg-teal-100 text-teal-600' },
    ];

    return (
        <section className="py-12 bg-white relative -mt-16 z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href="#"
                            className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100"
                        >
                            <div className={`p-4 rounded-full ${link.color} mb-3`}>
                                <link.icon size={28} />
                            </div>
                            <span className="font-bold text-[#003366] text-lg">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
