import { ArrowRight, Wallet, Landmark, Building2, Plane } from 'lucide-react';
import Link from 'next/link';

export default function BusinessActivities() {
    const activities = [
        { title: 'Banking', icon: Landmark, desc: 'International Banking Units (IBUs) and other banking services.' },
        { title: 'Fund Management', icon: Wallet, desc: 'Asset Management Companies and Alternative Investment Funds.' },
        { title: 'Insurance', icon: Building2, desc: 'Life, General and Reinsurance services.' },
        { title: 'Aircraft Leasing', icon: Plane, desc: 'End-to-end framework for aircraft leasing and financing.' },
        { title: 'Capital Markets', icon: Landmark, desc: 'Stock exchanges and market intermediaries.' },
        { title: 'FinTech', icon: Wallet, desc: 'Innovation sandbox and fintech framework.' },
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <span className="text-[#c5a059] font-bold uppercase tracking-wider text-sm">Our Focus Areas</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mt-2">Business Activities</h2>
                    <div className="w-24 h-1 bg-[#c5a059] mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activities.map((item) => (
                        <div key={item.title} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all group border-b-4 border-transparent hover:border-[#c5a059]">
                            <div className="flex justify-between items-start mb-6">
                                <div className="bg-[#003366]/5 p-3 rounded-lg group-hover:bg-[#003366] group-hover:text-white transition-colors text-[#003366]">
                                    <item.icon size={32} />
                                </div>
                                <Link href="#" className="opacity-0 group-hover:opacity-100 text-[#c5a059] transition-opacity">
                                    <ArrowRight size={24} />
                                </Link>
                            </div>
                            <h3 className="text-xl font-bold text-[#003366] mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-4 h-12">{item.desc}</p>
                            <Link href="#" className="text-sm font-bold text-[#003366] group-hover:text-[#c5a059] flex items-center">
                                Read More <ArrowRight size={14} className="ml-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
