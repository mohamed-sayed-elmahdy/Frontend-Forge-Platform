'use client';
import { Code2, Zap, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function ReactTipsPage() {
  const tips = [
    { id: 1, title: 'useCallback vs useMemo', category: 'Performance', desc: 'Understand when to use each hook for optimization' },
    { id: 2, title: 'Custom Hooks Pattern', category: 'Advanced', desc: 'Extract logic into reusable custom hooks' },
    { id: 3, title: 'Error Boundaries', category: 'Best Practice', desc: 'Implement error boundaries for error handling' },
    { id: 4, title: 'Render Props Pattern', category: 'Patterns', desc: 'Share logic between components using render props' },
    { id: 5, title: 'Higher-Order Components', category: 'Patterns', desc: 'Enhance components with HOC wrapper pattern' },
    { id: 6, title: 'Component Composition', category: 'Advanced', desc: 'Build flexible components through composition' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/tips-and-tricks" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Tips & Tricks
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">React Tips</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Advanced techniques and best practices for React</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <Zap className="w-6 h-6 text-cyan-500" />
              <span className="text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-700 dark:text-cyan-200 px-3 py-1 rounded-full">{tip.category}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{tip.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tip.desc}</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Read Tip →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
