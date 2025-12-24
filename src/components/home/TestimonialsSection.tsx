"use client";
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "Rajesh Kumar",
            position: "CEO, FinTech Startup",
            company: "Mumbai",
            rating: 5,
            text: "CSDEVYANI helped us navigate the complex AIF registration process with remarkable clarity. Their expertise in SEBI regulations and attention to detail made what seemed impossible, achievable. Highly recommended!",
            image: "/testimonials/client1.jpg" // Placeholder
        },
        {
            name: "Priya Sharma",
            position: "Compliance Head",
            company: "Investment Advisory Firm",
            rating: 5,
            text: "The team's deep understanding of Investment Adviser regulations is exceptional. They guided us through every step of the registration process and continue to provide invaluable compliance support.",
            image: "/testimonials/client2.jpg"
        },
        {
            name: "Amit Patel",
            position: "Managing Partner",
            company: "Private Equity Fund",
            rating: 5,
            text: "Professional, responsive, and incredibly knowledgeable. CSDEVYANI transformed our compliance framework and helped us achieve SEBI registration ahead of schedule. Their service is worth every penny.",
            image: "/testimonials/client3.jpg"
        },
        {
            name: "Sneha Desai",
            position: "Founder",
            company: "Wealth Management",
            rating: 5,
            text: "Outstanding service! The team not only helped with our IA registration but also educated us on ongoing compliance requirements. Their proactive approach saved us from potential regulatory issues.",
            image: "/testimonials/client4.jpg"
        },
        {
            name: "Vikram Singh",
            position: "Director",
            company: "Asset Management Company",
            rating: 5,
            text: "CSDEVYANI's expertise in GIFT City regulations is unmatched. They provided strategic guidance that helped us establish our operations smoothly. A trusted partner for all our regulatory needs.",
            image: "/testimonials/client5.jpg"
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-amber-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/20 mb-6">
                        <Star className="text-amber-400" size={20} fill="currentColor" />
                        <span className="text-sm font-bold text-amber-400 uppercase tracking-wide">Client Success Stories</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        See what our clients say about their experience working with us
                    </p>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
                            >
                                {/* Quote Icon */}
                                <div className="mb-6">
                                    <Quote className="text-amber-400" size={48} fill="currentColor" />
                                </div>

                                {/* Rating */}
                                <div className="flex space-x-1 mb-6">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} className="text-amber-400" size={20} fill="currentColor" />
                                    ))}
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-white text-lg md:text-xl leading-relaxed mb-8 italic">
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* Client Info */}
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                        {testimonials[currentIndex].name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                        <p className="text-slate-300 text-sm">{testimonials[currentIndex].position}</p>
                                        <p className="text-amber-400 text-sm font-semibold">{testimonials[currentIndex].company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all shadow-lg border border-white/20"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all shadow-lg border border-white/20"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-amber-400 w-8'
                                        : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                    {[
                        { value: '500+', label: 'Happy Clients' },
                        { value: '99%', label: 'Success Rate' },
                        { value: '15+', label: 'Years Experience' },
                        { value: '24/7', label: 'Support' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-2">{stat.value}</div>
                            <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
