'use client';
import { Code2, Star } from 'lucide-react';
import Link from 'next/link';

export default function ReactTutorialsPage() {
  const tutorials = [
    { id: 1, title: 'React Hooks Mastery', duration: '2h 30m', difficulty: 'Intermediate', rating: 4.8 },
    { id: 2, title: 'State Management Patterns', duration: '3h', difficulty: 'Advanced', rating: 4.9 },
    { id: 3, title: 'Performance Optimization', duration: '2h', difficulty: 'Advanced', rating: 4.7 },
    { id: 4, title: 'Testing React Apps', duration: '1h 45m', difficulty: 'Intermediate', rating: 4.6 },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/tutorials" className="inline-flex items-center gap-2 text-blue-600">
        ← Back to Tutorials
      </Link>
      <h1 className="text-3xl font-bold">React Tutorials</h1>
      <div className="grid gap-4">
        {tutorials.map((t) => (
          <div key={t.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold">{t.title}</h3>
              <div className="flex items-center gap-1 text-yellow-500">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm">{t.rating}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Duration: {t.duration} • {t.difficulty}</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-3">Start Learning →</button>
          </div>
        ))}
      </div>
    </div>
  );
}