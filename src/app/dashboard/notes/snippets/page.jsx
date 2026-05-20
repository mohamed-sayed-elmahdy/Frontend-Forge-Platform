'use client';
import { Code2, Copy, Trash2, Tag } from 'lucide-react';
import Link from 'next/link';

export default function SnippetsPage() {
  const snippets = [
    { id: 1, title: 'Custom useDebounce Hook', language: 'JavaScript', tags: ['React', 'Hooks'], lines: 12 },
    { id: 2, title: 'API Fetch Wrapper', language: 'TypeScript', tags: ['API', 'Utilities'], lines: 18 },
    { id: 3, title: 'Theme Toggle Component', language: 'React', tags: ['UI', 'CSS'], lines: 24 },
    { id: 4, title: 'Error Boundary Wrapper', language: 'React', tags: ['Error Handling', 'Components'], lines: 15 },
    { id: 5, title: 'Pagination Helper', language: 'JavaScript', tags: ['Utilities', 'Data'], lines: 20 },
    { id: 6, title: 'Form Validation Schema', language: 'JavaScript', tags: ['Validation', 'Forms'], lines: 16 },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/notes" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Notes
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Code Snippets</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Reusable code snippets for common tasks</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {snippets.map((snippet) => (
          <div key={snippet.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <Code2 className="w-6 h-6 text-green-600" />
              <button className="text-gray-400 hover:text-green-600 transition">
                <Copy className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{snippet.title}</h3>
            <div className="flex justify-between items-center text-xs text-gray-600 dark:text-gray-400 mb-3">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded">{snippet.language}</span>
              <span>{snippet.lines} lines</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              {snippet.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View Snippet →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
