'use client';
import { Bookmark, BookOpen, FileText, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function BookmarksPage() {
  const resources = [
    { name: 'Blogs', icon: FileText, color: 'text-blue-600', path: '/dashboard/bookmarks/blogs', count: 32 },
    { name: 'Tutorials', icon: BookOpen, color: 'text-green-600', path: '/dashboard/bookmarks/tutorials', count: 18 },
    { name: 'Interviews', icon: Lightbulb, color: 'text-orange-600', path: '/dashboard/bookmarks/interviews', count: 14 },
    { name: 'Tools', icon: Bookmark, color: 'text-purple-600', path: '/dashboard/bookmarks/tools', count: 28 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Bookmark className="w-10 h-10 text-pink-400" />
          Bookmarks
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Your collection of saved resources</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource) => {
          const Icon = resource.icon;
          return (
            <Link key={resource.name} href={resource.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${resource.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{resource.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{resource.count} saved</p>
                <span className="text-blue-600 text-sm font-medium">Browse →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
