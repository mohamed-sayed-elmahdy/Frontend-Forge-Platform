'use client';
import { Code2 } from 'lucide-react';
import Link from 'next/link';

export default function NextjsTutorialsPage() {
  const tutorials = [
    { id: 1, title: 'App Router Deep Dive', duration: '3h', difficulty: 'Intermediate' },
    { id: 2, title: 'Server Components & Actions', duration: '2h 30m', difficulty: 'Advanced' },
    { id: 3, title: 'API Routes & Middleware', duration: '2h', difficulty: 'Intermediate' },
    { id: 4, title: 'Deployment Strategies', duration: '1h 45m', difficulty: 'Beginner' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/tutorials" className="inline-flex items-center gap-2 text-blue-600">
        ← Back to Tutorials
      </Link>
      <h1 className="text-3xl font-bold">Next.js Tutorials</h1>
      <div className="grid gap-4">
        {tutorials.map((t) => (
          <div key={t.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 border-l-4 border-slate-600">
            <h3 className="text-lg font-semibold">{t.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Duration: {t.duration} • {t.difficulty}</p>
          </div>
        ))}
      </div>
    </div>
  );
}