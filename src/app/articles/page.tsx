"use client";
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock, FileText } from 'lucide-react';

interface Article {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    authorName: string;
    createdAt: any;
    readTime: string;
    imageUrl?: string;
}

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const q = query(
                    collection(db, "articles"),
                    orderBy("createdAt", "desc")
                );
                const querySnapshot = await getDocs(q);
                const fetchedArticles = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Article));
                setArticles(fetchedArticles);
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Function to format timestamp to readable date
    const formatDate = (timestamp: any) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-slate-900 py-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-[#0f172a] z-0"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brand-secondary)]/10 rounded-full blur-[100px] animate-pulse-slow"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <span className="text-[var(--brand-secondary)] font-bold tracking-wider uppercase text-sm mb-4 block">
                        Knowledge Hub
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Articles & Insights
                    </h1>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Latest updates on Corporate Law, SEBI Regulations, and Governance Standards.
                    </p>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container mx-auto px-4 py-16">
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="animate-pulse bg-slate-50 rounded-2xl p-6 h-96">
                                <div className="h-48 bg-slate-200 rounded-xl mb-4"></div>
                                <div className="h-6 bg-slate-200 rounded w-3/4 mb-3"></div>
                                <div className="h-4 bg-slate-200 rounded w-full mb-2"></div>
                                <div className="h-4 bg-slate-200 rounded w-2/3"></div>
                            </div>
                        ))}
                    </div>
                ) : articles.length === 0 ? (
                    <div className="text-center py-20 text-slate-500">
                        <p className="text-xl">No articles published yet.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <Link
                                href={`/article?id=${article.id}`}
                                key={article.id}
                                className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full"
                            >
                                {/* Image Placeholder or Real Image */}
                                <div className="h-48 bg-slate-100 overflow-hidden relative">
                                    {article.imageUrl ? (
                                        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
                                            <FileText size={48} />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                            {article.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-xs text-slate-500 mb-3 space-x-3">
                                        <span className="flex items-center"><Calendar size={12} className="mr-1" /> {formatDate(article.createdAt)}</span>
                                        <span className="flex items-center"><Clock size={12} className="mr-1" /> {article.readTime}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[var(--brand-secondary)] transition-colors line-clamp-2">
                                        {article.title}
                                    </h2>

                                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                                        {article.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                                        <span className="flex items-center text-xs font-semibold text-slate-700">
                                            <User size={12} className="mr-1 text-[var(--brand-secondary)]" />
                                            {article.authorName}
                                        </span>
                                        <span className="text-[var(--brand-secondary)] text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                                            Read
                                            <ArrowRight size={14} className="ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
