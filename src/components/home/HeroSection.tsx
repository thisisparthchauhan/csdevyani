import { Search } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative bg-[#003366] text-white min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image Overlay - In production, use next/image with actual asset */}
            <div className="absolute inset-0 bg-blue-900/50 z-0"></div>

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        International Financial Services Centres Authority
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200">
                        A unified authority for the development and regulation of financial products, financial services and financial institutions in the International Financial Services Centre.
                    </p>

                    <div className="relative max-w-lg mt-8 hidden md:block">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full pl-12 pr-4 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c5a059]"
                        />
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#c5a059] text-[#003366] px-6 py-2 rounded-full font-bold hover:bg-white transition-all">
                            Search
                        </button>
                    </div>
                </div>

                {/* Right Card - What's New */}
                <div className="hidden md:block">
                    <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 max-w-sm ml-auto border-t-4 border-[#c5a059]">
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <h3 className="text-xl font-bold text-[#003366]">What's New</h3>
                            <span className="text-xs text-red-500 font-bold animate-pulse">LIVE UPDATES</span>
                        </div>
                        <ul className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar">
                            {[1, 2, 3, 4].map((item) => (
                                <li key={item} className="border-b border-gray-100 pb-2 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded cursor-pointer">
                                    <span className="text-xs text-gray-500 block mb-1">19 Dec 2024</span>
                                    <p className="text-sm font-medium text-gray-700">
                                        Circular regarding Framework for FinTech Entity in the IFSCs.
                                    </p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 text-center">
                            <button className="text-[#003366] font-bold text-sm hover:underline">View All Updates</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
