export default function StatisticsSection() {
    const stats = [
        { label: 'Banking Assets', value: '$ 60 Bn+' },
        { label: 'Registered Entities', value: '500+' },
        { label: 'Daily Trading Volume', value: '$ 20 Bn+' },
        { label: 'Employees', value: '10,000+' }
    ];

    return (
        <section className="py-16 bg-[#003366] text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                    {stats.map((stat) => (
                        <div key={stat.label} className="p-4">
                            <h4 className="text-3xl md:text-5xl font-bold text-[#c5a059] mb-2">{stat.value}</h4>
                            <p className="text-sm md:text-base text-gray-300 uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
