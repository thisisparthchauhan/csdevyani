"use client";
import { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[var(--brand-secondary)] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center animate-bounce-subtle"
                >
                    <MessageSquare size={24} fill="currentColor" />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-lg shadow-2xl w-80 md:w-96 flex flex-col overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div className="bg-[var(--brand-primary)] text-white p-4 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold">CSDEVYANI AI</h3>
                            <span className="text-xs text-green-400 flex items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span>
                                Online
                            </span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="h-64 bg-gray-50 p-4 overflow-y-auto space-y-4">
                        <div className="flex justify-start">
                            <div className="bg-white text-gray-800 p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-sm border border-gray-100">
                                Hello! I'm your Corporate Governance AI Assistant. How can I help you with compliances today?
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-gray-100">
                        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                            <input
                                type="text"
                                placeholder="Ask about Company Law..."
                                className="bg-transparent flex-1 text-sm outline-none text-gray-700"
                            />
                            <button className="text-[var(--brand-secondary)] font-bold ml-2">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
