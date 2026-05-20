'use client';
import { Flame, TrendingUp, BookOpen, Play } from 'lucide-react';
import Link from 'next/link';

export default function FeedPage() {
  const feedCategories = [
    { name: 'Trending Tutorials', icon: TrendingUp, color: 'text-orange-600', path: '/dashboard/feed/trending-tutorials', count: 24 },
    { name: 'Latest Challenges', icon: Flame, color: 'text-red-600', path: '/dashboard/feed/latest-challenges', count: 18 },
    { name: 'Continue Learning', icon: Play, color: 'text-green-600', path: '/dashboard/feed/continue-learning', count: 12 },
    { name: 'Popular Articles', icon: BookOpen, color: 'text-blue-600', path: '/dashboard/feed/popular-articles', count: 32 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Flame className="w-10 h-10 text-orange-500" />
          Your Feed
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Personalized learning feed with trending content and your progress</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {feedCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Link key={category.name} href={category.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${category.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{category.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{category.count} items</p>
                <span className="text-blue-600 text-sm font-medium">View Feed →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
