'use client';
import { Code2 } from 'lucide-react';
import Link from 'next/link';

export default function TypeScriptTutorialsPage() {
  const tutorials = [
    { id: 1, title: 'TypeScript Fundamentals', duration: '2h', rating: 4.9 },
    { id: 2, title: 'Advanced Types & Generics', duration: '2h 45m', rating: 4.8 },
    { id: 3, title: 'Type Safety Patterns', duration: '1h 45m', rating: 4.7 },
    { id: 4, title: 'TypeScript with React', duration: '2h 30m', rating: 4.9 },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/tutorials" className="inline-flex items-center gap-2 text-purple-600">
        ← Back to Tutorials
      </Link>
      <h1 className="text-3xl font-bold">TypeScript Tutorials</h1>
      <div className="grid gap-4">
        {tutorials.map((t) => (
          <div key={t.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:bg-purple-50 dark:hover:bg-gray-700 transition">
            <h3 className="text-lg font-semibold">{t.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{t.duration} • ⭐ {t.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}