"use client";
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
}

export default function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            text: "Hello! I'm your Corporate Governance AI Assistant. How can I help you with compliances today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async () => {
        if (!inputValue.trim()) return;

        const userText = inputValue.trim();
        setInputValue('');

        // Add User Message
        const newUserMsg: Message = {
            id: Date.now().toString(),
            text: userText,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, newUserMsg]);
        setIsTyping(true);

        // Failsafe to stop typing indicator
        const typingTimeout = setTimeout(() => setIsTyping(false), 5000);

        try {
            // Save to Firestore (Fire and Forget)
            await addDoc(collection(db, 'chat_messages'), {
                text: userText,
                sender: 'user',
                createdAt: serverTimestamp(),
                status: 'unread'
            }).catch(e => console.error("Chat save error:", e));

            // Simulate AI Response
            setTimeout(() => {
                clearTimeout(typingTimeout); // Clear failsafe
                const botResponseText = "Thank you for your query. Our compliance experts have been notified and will assist you shortly. In the meantime, you can explore our 'Articles' section.";

                const newBotMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    text: botResponseText,
                    sender: 'bot',
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, newBotMsg]);
                setIsTyping(false);
            }, 1500);

        } catch (error) {
            console.error("Error flow:", error);
            setIsTyping(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            {/* Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="bg-[var(--brand-secondary)] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce-subtle ring-4 ring-white/20"
                >
                    <MessageSquare size={28} fill="currentColor" />
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center text-white font-bold">1</span>
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col overflow-hidden border border-gray-100 ring-1 ring-black/5 animate-in slide-in-from-bottom-10 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <MessageSquare size={20} className="text-[var(--brand-secondary)]" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm">CSDEVYANI Assistant</h3>
                                <span className="text-[10px] text-green-400 flex items-center font-medium">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                                    Online Now
                                </span>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/60 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="h-80 bg-slate-50 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`
                                    max-w-[85%] text-sm p-3 rounded-2xl shadow-sm
                                    ${msg.sender === 'user'
                                        ? 'bg-[var(--brand-secondary)] text-white rounded-tr-none'
                                        : 'bg-white text-slate-700 rounded-tl-none border border-slate-100'}
                                `}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex space-x-1">
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-slate-100">
                        <div className="flex items-center bg-slate-100 rounded-xl px-4 py-2 border border-slate-200 focus-within:ring-2 focus-within:ring-[var(--brand-secondary)]/20 focus-within:border-[var(--brand-secondary)] transition-all">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyPress}
                                placeholder="Type your message..."
                                className="bg-transparent flex-1 text-sm outline-none text-slate-700 placeholder:text-slate-400"
                            />
                            <button
                                onClick={handleSend}
                                disabled={!inputValue.trim()}
                                className="text-[var(--brand-secondary)] hover:text-amber-600 font-bold ml-2 disabled:opacity-50 transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-slate-400 mt-2">
                            Powered by CSDEVYANI AI
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
