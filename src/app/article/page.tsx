"use client";
import { useState, useEffect, Suspense } from 'react';
import { db, auth } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Edit } from 'lucide-react';
import { onAuthStateChanged } from 'firebase/auth';

function ArticleContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = searchParams.get('id');
    const [article, setArticle] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            const allowedEmails = ['chauhanparth165@gmail.com', 'universetcenter@gmail.com', 'compliance@csdevyani.com'];
            if (user && user.email && allowedEmails.includes(user.email)) {
                setIsAdmin(true);
            } else {
                setIsAdmin(false);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!id) {
            setLoading(false);
            return;
        }
        const fetchArticle = async () => {
            try {
                const docRef = doc(db, "articles", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setArticle(docSnap.data());
                } else {
                    // console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching article:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--brand-secondary)]"></div>
        </div>
    );

    if (!id || !article) return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-slate-800 mb-4">Article Not Found</h1>
            <Link href="/articles" className="text-[var(--brand-secondary)] hover:underline">Return to Articles</Link>
        </div>
    );

    const formatDate = (timestamp: any) => {
        if (!timestamp) return '';
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Progress Bar (Optional Reader Hook) */}
            <div className="fixed top-0 left-0 h-1 bg-[var(--brand-secondary)] z-50 w-full origin-left transform scale-x-0 animate-scroll-progress"></div>

            {/* Back Button */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-40">
                <div className="container mx-auto px-4 py-4">
                    <Link href="/articles" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[var(--brand-secondary)] transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Articles
                    </Link>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 py-12">

                {/* Header Section */}
                <header className="mb-12 text-center md:text-left">
                    <div className="mb-6 flex flex-wrap items-center gap-3 justify-center md:justify-start">
                        <span className="bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wide">
                            {article.category}
                        </span>
                        <span className="text-slate-400 text-xs">•</span>
                        <span className="text-slate-500 text-sm flex items-center">
                            <Clock size={14} className="mr-1" /> {article.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                        {article.title}
                    </h1>

                    <div className="flex items-center justify-center md:justify-start space-x-4 border-b border-slate-200 pb-8">
                        <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-lg">
                            {article.authorName?.[0] || 'A'}
                        </div>
                        <div className="text-left">
                            <p className="text-slate-900 font-bold text-sm">{article.authorName}</p>
                            <p className="text-slate-500 text-xs flex items-center mt-0.5">
                                <Calendar size={12} className="mr-1" /> {formatDate(article.createdAt)}
                            </p>
                        </div>
                    </div>
                </header>

                {/* Main Image */}
                {article.imageUrl && (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                )}

                {/* Content */}
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                    <div
                        className="prose prose-lg prose-slate max-w-none 
                        prose-headings:font-bold prose-headings:text-slate-900 
                        prose-a:text-[var(--brand-secondary)] prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-l-[var(--brand-secondary)] prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic"
                        dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }}
                    />
                </div>

                {/* Share Section */}
                <div className="mt-12 flex justify-center space-x-6">
                    <button className="p-3 bg-white rounded-full shadow-sm text-slate-400 hover:text-blue-600 hover:shadow-md transition-all">
                        <Facebook size={20} />
                    </button>
                    <button className="p-3 bg-white rounded-full shadow-sm text-slate-400 hover:text-sky-500 hover:shadow-md transition-all">
                        <Twitter size={20} />
                    </button>
                    <button className="p-3 bg-white rounded-full shadow-sm text-slate-400 hover:text-blue-700 hover:shadow-md transition-all">
                        <Linkedin size={20} />
                    </button>
                    <button className="p-3 bg-white rounded-full shadow-sm text-slate-400 hover:text-gray-900 hover:shadow-md transition-all">
                        <Share2 size={20} />
                    </button>
                </div>
            </article>

            {/* Admin Edit Button */}
            {isAdmin && (
                <Link
                    href={`/admin/blog?edit=${id}`}
                    className="fixed bottom-8 right-8 bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-[var(--brand-secondary)] transition-all z-50 flex items-center gap-2 font-bold group animate-fade-in-up"
                >
                    <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                        <Edit size={16} />
                    </div>
                    <span>Edit Article</span>
                </Link>
            )}
        </div>
    );
}

export default function ArticlePage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50"></div>}>
            <ArticleContent />
        </Suspense>
    );
}
