"use client";
import { useState, useEffect } from 'react';
import { db, auth } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { CheckCircle, AlertCircle, Image as ImageIcon, Type, FileText } from 'lucide-react';

export default function AdminBlogPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        title: '',
        excerpt: '',
        content: '',
        category: 'Corporate Law',
        imageUrl: '',
        authorName: ''
    });

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                router.push('/login');
            } else {
                const allowedEmails = ['chauhanparth165@gmail.com', 'universetcenter@gmail.com', 'compliance@csdevyani.com'];
                if (currentUser.email && allowedEmails.includes(currentUser.email)) {
                    setUser(currentUser);
                    setFormData(prev => ({ ...prev, authorName: currentUser.displayName || 'Admin' }));
                } else {
                    alert("Access Denied: You are not authorized to post blogs.");
                    router.push('/');
                }
            }
        });
        return () => unsubscribe();
    }, [router]);

    const categories = [
        "Corporate Law",
        "SEBI Regulations",
        "IFSCA & GIFT City",
        "Startup Advisory",
        "General Updates"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        if (!formData.title || !formData.content) {
            setError('Title and Content are required');
            setLoading(false);
            return;
        }

        try {
            await addDoc(collection(db, "articles"), {
                ...formData,
                createdAt: serverTimestamp(),
                authorId: user.uid,
                readTime: Math.ceil(formData.content.split(' ').length / 200) + ' min read'
            });

            setSuccess(true);
            setFormData({
                title: '',
                excerpt: '',
                content: '',
                category: 'Corporate Law',
                imageUrl: '',
                authorName: user.displayName || 'Admin'
            });
            window.scrollTo(0, 0);
        } catch (err) {
            console.error("Error posting blog:", err);
            setError('Failed to post the article. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (!user) return <div className="min-h-screen flex items-center justify-center">Loading portal...</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="mb-8">
                    <div className="text-center mb-4">
                        <h1 className="text-3xl font-bold text-slate-900">Content Portal</h1>
                        <p className="mt-2 text-slate-600">Create and publish new articles to the website.</p>
                    </div>

                    {/* Access Info */}
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm">
                        <div className="flex items-start space-x-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                                i
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-blue-900 mb-1">Access Instructions</h3>
                                <ul className="text-blue-700 space-y-1 text-xs">
                                    <li>• <strong>URL:</strong> <code className="bg-blue-100 px-2 py-0.5 rounded">https://csdevyani-web-2025.web.app/admin/blog</code></li>
                                    <li>• <strong>Login Required:</strong> Use your authorized email to access this portal</li>
                                    <li>• <strong>Authorized Users:</strong> Only specific team members can publish articles</li>
                                    <li>• <strong>Formatting:</strong> You can use HTML tags like &lt;p&gt;, &lt;strong&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;h2&gt;, &lt;h3&gt; for rich formatting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
                    <div className="p-8">
                        {success && (
                            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center">
                                <CheckCircle className="mr-2" size={20} />
                                Article published successfully!
                            </div>
                        )}

                        {error && (
                            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center">
                                <AlertCircle className="mr-2" size={20} />
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Article Title
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Type className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none transition-all"
                                        placeholder="Enter a catchy title..."
                                    />
                                </div>
                            </div>

                            {/* Category & Author */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="block w-full px-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none bg-white"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">Author Name</label>
                                    <input
                                        type="text"
                                        value={formData.authorName}
                                        onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                                        className="block w-full px-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none"
                                        placeholder="e.g. CS Devyani Khambhati"
                                    />
                                </div>
                            </div>

                            {/* Image URL */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Hero Image URL (Optional)
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <ImageIcon className="h-5 w-5 text-slate-400" />
                                    </div>
                                    <input
                                        type="url"
                                        value={formData.imageUrl}
                                        onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                        className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-secondary)] focus:border-transparent outline-none"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>
                            </div>

                            {/* Excerpt */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Short Excerpt
                                </label>
                                <textarea
                                    rows={2}
                                    value={formData.excerpt}
                                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                    className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none resize-none"
                                    placeholder="Brief summary of the article (appears on cards)..."
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Article Content
                                </label>
                                <div className="relative">
                                    <textarea
                                        required
                                        rows={12}
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        className="block w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none font-mono text-sm leading-relaxed"
                                        placeholder="Write your article here. You can use HTML tags for formatting."
                                    />
                                    <div className="absolute top-3 right-3 text-xs text-slate-400 pointer-events-none">
                                        <FileText size={16} />
                                    </div>
                                </div>
                                <div className="mt-3 bg-slate-50 rounded-lg p-3 border border-slate-100">
                                    <p className="text-xs font-semibold text-slate-700 mb-2">📝 Formatting Guide:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600 font-mono">
                                        <div><code className="bg-white px-1 rounded">&lt;p&gt;...&lt;/p&gt;</code> - Paragraph</div>
                                        <div><code className="bg-white px-1 rounded">&lt;strong&gt;...&lt;/strong&gt;</code> - Bold</div>
                                        <div><code className="bg-white px-1 rounded">&lt;h2&gt;...&lt;/h2&gt;</code> - Heading 2</div>
                                        <div><code className="bg-white px-1 rounded">&lt;h3&gt;...&lt;/h3&gt;</code> - Heading 3</div>
                                        <div><code className="bg-white px-1 rounded">&lt;ul&gt;&lt;li&gt;...&lt;/li&gt;&lt;/ul&gt;</code> - List</div>
                                        <div><code className="bg-white px-1 rounded">&lt;a href="..."&gt;...&lt;/a&gt;</code> - Link</div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[var(--brand-secondary)] hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {loading ? 'Publishing...' : 'Publish Article'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
