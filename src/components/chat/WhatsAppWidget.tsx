"use client";
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "919825600907"; // Your WhatsApp number
    const message = "Hello! I'm interested in your services. Can you help me?";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <>
            {/* WhatsApp Floating Button */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.9 }}
                            className="absolute bottom-20 right-0 bg-white rounded-2xl shadow-2xl p-6 w-80 border border-slate-200"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Header */}
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                                    <MessageCircle className="text-white" size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900">Chat with us!</h3>
                                    <p className="text-xs text-slate-500">We typically reply instantly</p>
                                </div>
                            </div>

                            {/* Message Preview */}
                            <div className="bg-slate-50 rounded-xl p-4 mb-4">
                                <p className="text-sm text-slate-600 mb-2">
                                    👋 Hi there! How can we help you today?
                                </p>
                                <p className="text-xs text-slate-500">
                                    Get instant answers about our services, pricing, and more.
                                </p>
                            </div>

                            {/* WhatsApp Button */}
                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                            >
                                <MessageCircle size={20} />
                                <span>Start WhatsApp Chat</span>
                            </button>

                            {/* Footer */}
                            <p className="text-xs text-center text-slate-400 mt-3">
                                Available Mon-Sat, 9 AM - 6 PM IST
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Main Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-500 hover:bg-green-600 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 relative group"
                    aria-label="Open WhatsApp Chat"
                >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <>
                            <MessageCircle size={28} />
                            {/* Notification Dot */}
                            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                        </>
                    )}
                </button>

                {/* Tooltip */}
                {!isOpen && (
                    <div className="absolute bottom-0 right-20 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Chat with us on WhatsApp
                        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                    </div>
                )}
            </motion.div>
        </>
    );
}
