'use client';
import { Code2, Star, Clock } from 'lucide-react';
import Link from 'next/link';

export default function NextjsTutorialsPage() {
  const tutorials = [
    { id: 1, title: 'App Router Deep Dive', duration: '3h', difficulty: 'Intermediate', rating: 4.8 },
    { id: 2, title: 'Server Components & Actions', duration: '2h 30m', difficulty: 'Advanced', rating: 4.9 },
    { id: 3, title: 'API Routes & Middleware', duration: '2h', difficulty: 'Intermediate', rating: 4.7 },
    { id: 4, title: 'Deployment Strategies', duration: '1h 45m', difficulty: 'Beginner', rating: 4.6 },
    { id: 5, title: 'Database Integration', duration: '2h 45m', difficulty: 'Advanced', rating: 4.8 },
    { id: 6, title: 'SEO & Performance', duration: '1h 30m', difficulty: 'Intermediate', rating: 4.9 },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/tutorials" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Tutorials
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Next.js Tutorials</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Master Next.js with comprehensive, hands-on tutorials</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tutorials.map((t) => (
          <div key={t.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <Code2 className="w-6 h-6 text-black dark:text-white" />
              <span className={`text-xs px-3 py-1 rounded-full ${
                t.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200' :
                t.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200' :
                'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200'
              }`}>{t.difficulty}</span>
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{t.title}</h3>
            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {t.duration}
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                {t.rating}
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Start Learning →</button>
          </div>
        ))}
      </div>
    </div>
  );
}