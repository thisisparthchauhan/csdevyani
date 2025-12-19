export default function AboutSection() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="text-[#c5a059] font-bold uppercase tracking-wider text-sm">Who We Are</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003366]">
                        Empowering Financial Growth in GIFT City
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        The International Financial Services Centres Authority (IFSCA) has been established on April 27, 2020 under the International Financial Services Centres Authority Act, 2019. It is headquartered at GIFT City, Gandhinagar in Gujarat.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        The IFSCA is a unified authority for the development and regulation of financial products, financial services and financial institutions in the International Financial Services Centre (IFSC) in India. At present, the GIFT IFSC is the maiden international financial services centre in India.
                    </p>
                    <button className="border-2 border-[#003366] text-[#003366] px-8 py-3 rounded hover:bg-[#003366] hover:text-white transition-all font-bold">
                        Read More About Us
                    </button>
                </div>

                {/* Image Placeholder - use next/image in real app */}
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#c5a059]/20 -z-10 rounded-full"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#003366]/10 -z-10 rounded-full"></div>
                    <div className="bg-gray-200 rounded-lg h-[400px] w-full flex items-center justify-center overflow-hidden">
                        <span className="text-gray-400">About Us Image Placeholder</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
