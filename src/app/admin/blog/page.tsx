"use client";
import { useState, useEffect } from 'react';
import { db, auth, storage } from '@/lib/firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, getDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { CheckCircle, AlertCircle, Image as ImageIcon, Type, FileText, Edit, Trash2, Plus, Upload, Loader2 } from 'lucide-react';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function AdminBlogContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const editIdParam = searchParams.get('edit');

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<any>(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // "create" | "manage"
    const [activeTab, setActiveTab] = useState('create');
    const [articles, setArticles] = useState<any[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [uploading, setUploading] = useState(false);

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
                    if (!editingId) {
                        setFormData(prev => ({ ...prev, authorName: currentUser.displayName || 'Admin' }));
                    }
                } else {
                    alert("Access Denied: You are not authorized to post blogs.");
                    router.push('/');
                }
            }
        });
        return () => unsubscribe();
    }, [router, editingId]);

    // Handle ?edit=ID param
    useEffect(() => {
        const fetchArticleForEdit = async () => {
            if (editIdParam && user && !editingId) {
                setLoading(true);
                try {
                    const docRef = doc(db, "articles", editIdParam);
                    const docSnap = await getDoc(docRef); // Ensure getDoc is imported or use existing logic if any
                    // Actually getDoc is imported in line 4
                    if (docSnap.exists()) {
                        const article = docSnap.data();
                        setFormData({
                            title: article.title || '',
                            excerpt: article.excerpt || '',
                            content: article.content || '',
                            category: article.category || 'Corporate Law',
                            imageUrl: article.imageUrl || '',
                            authorName: article.authorName || ''
                        });
                        setEditingId(editIdParam);
                        setActiveTab('create');
                    }
                } catch (err) {
                    console.error("Error fetching article for edit:", err);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchArticleForEdit();
    }, [editIdParam, user]);

    // Fetch articles when switching to Manage tab
    useEffect(() => {
        if (activeTab === 'manage' && user) {
            fetchArticles();
        }
    }, [activeTab, user]);

    const fetchArticles = async () => {
        setLoading(true);
        try {
            const q = query(collection(db, "articles"), orderBy("createdAt", "desc"));
            const querySnapshot = await getDocs(q);
            const fetchedArticles = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setArticles(fetchedArticles);
        } catch (err) {
            console.error("Error fetching articles:", err);
            setError("Failed to load articles.");
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !e.target.files[0]) return;

        const file = e.target.files[0];
        if (file.size > 5 * 1024 * 1024) {
            setError("Image size should be less than 5MB");
            return;
        }

        setUploading(true);
        try {
            const storageRef = ref(storage, `blog_images/${Date.now()}_${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            setFormData(prev => ({ ...prev, imageUrl: downloadURL }));
        } catch (err) {
            console.error("Upload failed", err);
            setError("Failed to upload image.");
        } finally {
            setUploading(false);
        }
    };

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
            const articleData = {
                ...formData,
                updatedAt: serverTimestamp(),
                readTime: Math.ceil(formData.content.split(' ').length / 200) + ' min read'
            };

            if (editingId) {
                // Update existing
                await updateDoc(doc(db, "articles", editingId), articleData);
                setSuccess(true);
                setTimeout(() => {
                    setEditingId(null);
                    resetForm();
                    // If we were editing via URL, we might want to stay or go to manage
                    // Let's go to manage for consistency
                    setActiveTab('manage');
                    // Clear param if possible? No easy way without router.push replacing url
                    router.push('/admin/blog');
                }, 1500);
            } else {
                // Create new
                await addDoc(collection(db, "articles"), {
                    ...articleData,
                    createdAt: serverTimestamp(),
                    authorId: user.uid,
                });
                setSuccess(true);
                resetForm();
            }
            window.scrollTo(0, 0);
        } catch (err) {
            console.error("Error saving article:", err);
            setError('Failed to save the article. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (article: any) => {
        setFormData({
            title: article.title || '',
            excerpt: article.excerpt || '',
            content: article.content || '',
            category: article.category || 'Corporate Law',
            imageUrl: article.imageUrl || '',
            authorName: article.authorName || ''
        });
        setEditingId(article.id);
        setActiveTab('create'); // Switch to form view
        window.scrollTo(0, 0);
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this article? This cannot be undone.")) return;

        try {
            await deleteDoc(doc(db, "articles", id));
            setArticles(articles.filter(a => a.id !== id));
        } catch (err) {
            console.error("Error deleting:", err);
            alert("Failed to delete article.");
        }
    };

    const resetForm = () => {
        setFormData({
            title: '',
            excerpt: '',
            content: '',
            category: 'Corporate Law',
            imageUrl: '',
            authorName: user?.displayName || 'Admin'
        });
        setEditingId(null);
    };

    if (!user) return <div className="min-h-screen flex items-center justify-center">Loading portal...</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-slate-900">Content Portal</h1>
                        <p className="mt-2 text-slate-600">Create, edit, and manage website articles.</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <button
                            onClick={() => { setActiveTab('create'); resetForm(); router.push('/admin/blog'); }}
                            className={`flex items-center px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'create'
                                ? 'bg-[var(--brand-secondary)] text-white shadow-lg'
                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                        >
                            <Plus size={16} className="mr-2" />
                            {editingId ? 'Edit Article' : 'Create New'}
                        </button>
                        <button
                            onClick={() => setActiveTab('manage')}
                            className={`flex items-center px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === 'manage'
                                ? 'bg-[var(--brand-secondary)] text-white shadow-lg'
                                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                        >
                            <Edit size={16} className="mr-2" />
                            Manage Articles
                        </button>
                    </div>

                    {/* Access Info - Only show on create tab when not editing */}
                    {activeTab === 'create' && !editingId && (
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm mb-6">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">i</div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-blue-900 mb-1">Portal Guide</h3>
                                    <ul className="text-blue-700 space-y-1 text-xs">
                                        <li>• <strong>Uploads:</strong> You can now verify upload images directly from your device.</li>
                                        <li>• <strong>Editing:</strong> Go to "Manage Articles" to update existing content.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100 min-h-[500px]">

                    {/* MANAGE TAB */}
                    {activeTab === 'manage' && (
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-slate-800 mb-6">Published Articles</h2>
                            {loading ? (
                                <div className="flex justify-center py-10"><Loader2 className="animate-spin text-slate-400" /></div>
                            ) : articles.length === 0 ? (
                                <p className="text-center text-slate-500 py-10">No articles found.</p>
                            ) : (
                                <div className="space-y-4">
                                    {articles.map((article) => (
                                        <div key={article.id} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors group">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-12 h-12 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
                                                    {article.imageUrl ? (
                                                        <img src={article.imageUrl} alt="" className="w-full h-full object-cover" />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center text-slate-400"><ImageIcon size={20} /></div>
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-800 line-clamp-1">{article.title}</h3>
                                                    <div className="flex items-center text-xs text-slate-500 space-x-2 mt-1">
                                                        <span className="bg-slate-200 px-2 py-0.5 rounded text-slate-600">{article.category}</span>
                                                        <span>• {article.createdAt?.toDate ? new Date(article.createdAt.toDate()).toLocaleDateString() : 'Just now'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <button
                                                    onClick={() => handleEdit(article)}
                                                    className="p-2 text-slate-400 hover:text-[var(--brand-secondary)] hover:bg-[var(--brand-secondary)]/10 rounded-lg transition-all"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(article.id)}
                                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* CREATE / EDIT TAB */}
                    {activeTab === 'create' && (
                        <div className="p-8">
                            {success && (
                                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center animate-fade-in-up">
                                    <CheckCircle className="mr-2" size={20} />
                                    {editingId ? 'Article updated successfully!' : 'Article published successfully!'}
                                </div>
                            )}

                            {error && (
                                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center animate-fade-in-up">
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

                                {/* Image Section */}
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <label className="block text-sm font-bold text-slate-800 mb-3">
                                        Hero Image
                                    </label>

                                    <div className="flex flex-col md:flex-row gap-4 items-start">
                                        {/* Upload Button */}
                                        <div className="w-full md:w-1/2">
                                            <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-slate-100 transition-colors ${uploading ? 'opacity-50 cursor-not-allowed border-blue-300 bg-blue-50' : 'border-slate-300'}`}>
                                                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-slate-500">
                                                    {uploading ? (
                                                        <Loader2 className="animate-spin mb-2" />
                                                    ) : (
                                                        <Upload className="mb-2" size={24} />
                                                    )}
                                                    <p className="text-xs text-center"><span className="font-semibold">Click to upload</span> from device</p>
                                                </div>
                                                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
                                            </label>
                                        </div>

                                        {/* OR Divider */}
                                        <div className="flex items-center justify-center h-full pt-4">
                                            <span className="text-xs font-bold text-slate-400">OR</span>
                                        </div>

                                        {/* URL Input */}
                                        <div className="w-full md:w-1/2">
                                            <input
                                                type="url"
                                                value={formData.imageUrl}
                                                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                                                className="block w-full px-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[var(--brand-secondary)] outline-none text-sm mb-2"
                                                placeholder="Paste Image URL..."
                                            />
                                            {formData.imageUrl && (
                                                <div className="text-xs text-green-600 flex items-center">
                                                    <CheckCircle size={12} className="mr-1" /> Image linked
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Preview */}
                                    {formData.imageUrl && (
                                        <div className="mt-4 relative h-40 w-full rounded-lg overflow-hidden bg-slate-200">
                                            <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
                                        </div>
                                    )}
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

                                <div className="pt-4 flex items-center space-x-4">
                                    {editingId && (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setEditingId(null);
                                                resetForm();
                                                setActiveTab('manage');
                                                router.push('/admin/blog');
                                            }}
                                            className="w-1/3 py-4 border border-slate-300 rounded-xl font-bold text-slate-600 hover:bg-slate-50 transition-all"
                                        >
                                            Cancel
                                        </button>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={loading || uploading}
                                        className={`flex-1 flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[var(--brand-secondary)] hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                    >
                                        {loading ? (editingId ? 'Updating...' : 'Publishing...') : (editingId ? 'Update Article' : 'Publish Article')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function AdminBlogPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <AdminBlogContent />
        </Suspense>
    );
}
