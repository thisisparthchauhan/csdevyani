"use client";
import { TrendingUp, Users, Building, Globe } from 'lucide-react';

export default function StatisticsSection() {
    // Stats updated to 'Thousands' format as requested by user
    const stats = [
        {
            label: 'Banking Assets',
            value: '60,000+',
            prefix: '$',
            icon: TrendingUp
        },
        {
            label: 'Registered Entities',
            value: '5,000+',
            prefix: '',
            icon: Building
        },
        {
            label: 'Daily Trading Volume',
            value: '20,000+',
            prefix: '$',
            icon: Globe
        },
        {
            label: 'Professionals',
            value: '10,000+',
            prefix: '',
            icon: Users
        }
    ];

    return (
        <section className="relative py-20 bg-slate-900 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-[#0f172a] to-slate-900 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="bg-[var(--brand-secondary)]/10 p-3 rounded-full text-[var(--brand-secondary)] group-hover:scale-110 transition-transform duration-300">
                                    <stat.icon size={28} />
                                </div>
                            </div>

                            <h4 className="text-3xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
                                <span className="text-[var(--brand-secondary)] mr-1">{stat.prefix}</span>
                                {stat.value}
                            </h4>

                            <p className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-widest group-hover:text-slate-300 transition-colors">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--brand-secondary)] to-transparent opacity-50"></div>
        </section>
    );
}
