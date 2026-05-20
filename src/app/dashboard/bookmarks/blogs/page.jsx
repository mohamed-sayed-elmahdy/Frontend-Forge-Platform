'use client';
import { FileText, Heart, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function BookmarkedBlogsPage() {
  const blogs = [
    { id: 1, title: 'Building Scalable React Apps', author: 'Kent C. Dodds', saved: '2 weeks ago', views: 1200 },
    { id: 2, title: 'Next.js Performance Optimization', author: 'Vercel', saved: '3 weeks ago', views: 1800 },
    { id: 3, title: 'TypeScript Advanced Patterns', author: 'Jack Herrington', saved: '1 month ago', views: 950 },
    { id: 4, title: 'React Server Components Deep Dive', author: 'Supabase', saved: '2 months ago', views: 2100 },
    { id: 5, title: 'State Management in 2024', author: 'TkDodo', saved: '2 months ago', views: 1540 },
    { id: 6, title: 'Building Real-time Apps', author: 'Firebase', saved: '3 months ago', views: 1320 },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/bookmarks" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Bookmarks
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Bookmarked Blogs</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Your collection of saved blog articles</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{blog.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">by {blog.author}</p>
            <div className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-400 mb-4">
              <span>👀 {blog.views} views</span>
              <span>Saved {blog.saved}</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">Read <ExternalLink className="w-3 h-3" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
