"use client";
import { MessageCircle, FileCheck, CreditCard, CheckCircle2, ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ProcessInfographic() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const steps = [
        {
            icon: MessageCircle,
            title: "Approach",
            description: "Connect with our experts for initial consultation",
            color: "from-blue-500 to-indigo-600",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600",
            glowColor: "shadow-blue-500/50",
            hoverGlow: "group-hover:shadow-blue-500/60",
            accentColor: "bg-blue-500"
        },
        {
            icon: FileCheck,
            title: "Solve Technical Query",
            description: "Get clarity on regulatory requirements and documentation",
            color: "from-purple-500 to-pink-600",
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600",
            glowColor: "shadow-purple-500/50",
            hoverGlow: "group-hover:shadow-purple-500/60",
            accentColor: "bg-purple-500"
        },
        {
            icon: TrendingUp,
            title: "Finalize Assignment",
            description: "Review and approve the compliance roadmap",
            color: "from-emerald-500 to-teal-600",
            bgColor: "bg-emerald-50",
            iconColor: "text-emerald-600",
            glowColor: "shadow-emerald-500/50",
            hoverGlow: "group-hover:shadow-emerald-500/60",
            accentColor: "bg-emerald-500"
        },
        {
            icon: CreditCard,
            title: "Pay the Fees",
            description: "Secure payment with transparent pricing",
            color: "from-amber-500 to-orange-600",
            bgColor: "bg-amber-50",
            iconColor: "text-amber-600",
            glowColor: "shadow-amber-500/50",
            hoverGlow: "group-hover:shadow-amber-500/60",
            accentColor: "bg-amber-500"
        },
        {
            icon: CheckCircle2,
            title: "Registration Done",
            description: "Get your certificate on the committed timeline",
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-green-50",
            iconColor: "text-green-600",
            glowColor: "shadow-green-500/50",
            hoverGlow: "group-hover:shadow-green-500/60",
            accentColor: "bg-green-500"
        }
    ];

    return (
        <section ref={ref} className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-emerald-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10 shadow-2xl mb-6"
                    >
                        <Sparkles className="text-amber-400 animate-pulse" size={20} />
                        <span className="text-white font-bold uppercase tracking-widest text-sm">
                            Streamlined Process
                        </span>
                        <Zap className="text-emerald-400 animate-pulse" size={20} />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                    >
                        Your Journey to
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                            Compliance Excellence
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-slate-300 text-lg md:text-xl leading-relaxed"
                    >
                        A transparent, efficient, and technology-driven process designed for your success
                    </motion.p>
                </motion.div>

                {/* Desktop View - Premium 3D Cards */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Animated Progress Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                            className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-emerald-500 via-amber-500 to-green-500 origin-left"
                            style={{ boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)' }}
                        >
                            {/* Animated Glow Ball */}
                            <motion.div
                                animate={{
                                    x: ['0%', '100%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                            />
                        </motion.div>

                        <div className="grid grid-cols-5 gap-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50, rotateX: -15 }}
                                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.7 + index * 0.15 }}
                                    onHoverStart={() => setHoveredIndex(index)}
                                    onHoverEnd={() => setHoveredIndex(null)}
                                    className="relative perspective-1000"
                                >
                                    <div className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-4 hover:scale-105 ${step.hoverGlow} shadow-2xl`}>
                                        {/* Animated Border Gradient */}
                                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}></div>

                                        {/* Step Number with Glow */}
                                        <motion.div
                                            animate={hoveredIndex === index ? { scale: [1, 1.2, 1], rotate: [0, 360] } : {}}
                                            transition={{ duration: 0.6 }}
                                            className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center text-lg font-black shadow-2xl ${step.glowColor} z-10`}
                                        >
                                            {index + 1}
                                        </motion.div>

                                        {/* Icon Container with 3D Effect */}
                                        <motion.div
                                            animate={hoveredIndex === index ? {
                                                rotateY: [0, 360],
                                                scale: [1, 1.2, 1]
                                            } : {}}
                                            transition={{ duration: 0.8 }}
                                            className={`relative w-20 h-20 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:shadow-2xl transition-all duration-500`}
                                        >
                                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-30 blur-md transition-opacity`}></div>
                                            <step.icon className={`${step.iconColor} relative z-10`} size={40} strokeWidth={2.5} />
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 text-center leading-relaxed group-hover:text-slate-300 transition-colors">
                                            {step.description}
                                        </p>

                                        {/* Hover Accent Line */}
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={hoveredIndex === index ? { scaleX: 1 } : { scaleX: 0 }}
                                            className={`absolute bottom-0 left-0 right-0 h-1 ${step.accentColor} rounded-b-3xl origin-left`}
                                        />
                                    </div>

                                    {/* Animated Arrow */}
                                    {index < steps.length - 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                                            className="absolute top-16 -right-5 z-20"
                                        >
                                            <motion.div
                                                animate={{ x: [0, 10, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                <ArrowRight className="text-white/40 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" size={32} strokeWidth={3} />
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet View - Enhanced Vertical Flow */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                            className="relative"
                        >
                            <div className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 shadow-2xl ${step.hoverGlow}`}>
                                <div className="flex items-start space-x-4">
                                    {/* Step Number */}
                                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${step.color} text-white rounded-2xl flex items-center justify-center text-xl font-black shadow-2xl ${step.glowColor}`}>
                                        {index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-3 mb-3">
                                            <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center shadow-lg`}>
                                                <step.icon className={`${step.iconColor}`} size={24} />
                                            </div>
                                            <h3 className="text-lg font-bold text-white">
                                                {step.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 ${step.accentColor} rounded-b-3xl`}></div>
                            </div>

                            {/* Vertical Connector */}
                            {index < steps.length - 1 && (
                                <div className="flex justify-center py-4">
                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-1 h-12 bg-gradient-to-b from-white/40 to-transparent rounded-full"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Premium CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 2 }}
                    className="mt-20 text-center"
                >
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 relative overflow-hidden"
                    >
                        {/* Animated Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <span className="relative z-10 text-lg">Start Your Journey Today</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="relative z-10"
                        >
                            <ArrowRight size={24} className="ml-3" />
                        </motion.div>

                        {/* Sparkle Effect */}
                        <Sparkles className="absolute top-2 right-2 text-white/50 animate-pulse" size={20} />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
