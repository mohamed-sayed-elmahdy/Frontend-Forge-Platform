'use client';
import { Code2, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CleanCodePage() {
  const principles = [
    { id: 1, title: 'Meaningful Names', desc: 'Use clear, descriptive names for variables and functions' },
    { id: 2, title: 'Single Responsibility', desc: 'Each function or class should do one thing' },
    { id: 3, title: 'DRY Principle', desc: 'Don\'t Repeat Yourself - extract reusable code' },
    { id: 4, title: 'KISS Method', desc: 'Keep It Simple, Stupid - write simple, understandable code' },
    { id: 5, title: 'Code Comments', desc: 'Write comments that explain why, not what' },
    { id: 6, title: 'Error Handling', desc: 'Handle errors gracefully and informatively' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/best-practices" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Best Practices
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Clean Code Principles</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Write readable, maintainable code following industry best practices</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {principles.map((principle) => (
          <div key={principle.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-start mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{principle.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{principle.desc}</p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Learn More →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
