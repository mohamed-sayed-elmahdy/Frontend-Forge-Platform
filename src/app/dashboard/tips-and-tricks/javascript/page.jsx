'use client';
import { Code2, Zap } from 'lucide-react';
import Link from 'next/link';

export default function JavascriptTricksPage() {
  const tricks = [
    { id: 1, title: 'Destructuring Assignment', category: 'ES6+', desc: 'Clean syntax for extracting values from objects and arrays' },
    { id: 2, title: 'Spread Operator', category: 'ES6+', desc: 'Efficiently copy and merge objects and arrays' },
    { id: 3, title: 'Arrow Functions', category: 'ES6+', desc: 'Concise function syntax with proper this binding' },
    { id: 4, title: 'Optional Chaining', category: 'ES2020', desc: 'Safely access nested properties with ?." operator' },
    { id: 5, title: 'Nullish Coalescing', category: 'ES2020', desc: 'Default values with ?? operator for null/undefined' },
    { id: 6, title: 'Template Literals', category: 'ES6+', desc: 'String interpolation and multi-line strings made easy' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/tips-and-tricks" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Tips & Tricks
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">JavaScript Tricks</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Essential JavaScript techniques and shortcuts</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tricks.map((trick) => (
          <div key={trick.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <Code2 className="w-6 h-6 text-yellow-600" />
              <span className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200 px-3 py-1 rounded-full">{trick.category}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{trick.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{trick.desc}</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Learn More →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
