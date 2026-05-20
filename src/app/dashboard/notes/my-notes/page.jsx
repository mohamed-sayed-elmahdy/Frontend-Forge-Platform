'use client';
import { FileText, Tag, Calendar, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function MyNotesPage() {
  const notes = [
    { id: 1, title: 'React Performance Tips', tags: ['React', 'Performance'], date: '2 hours ago' },
    { id: 2, title: 'Next.js 15 Features', tags: ['Next.js', 'Learning'], date: '1 day ago' },
    { id: 3, title: 'TypeScript Patterns', tags: ['TypeScript', 'Advanced'], date: '3 days ago' },
    { id: 4, title: 'API Design Best Practices', tags: ['API', 'Backend'], date: '1 week ago' },
    { id: 5, title: 'Database Optimization', tags: ['Database', 'Performance'], date: '2 weeks ago' },
    { id: 6, title: 'Git Workflow Guide', tags: ['Git', 'Workflow'], date: '1 month ago' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/notes" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Notes
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">My Notes</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Your personal learning notes and insights</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {notes.map((note) => (
          <div key={note.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <FileText className="w-6 h-6 text-blue-600" />
              <button className="text-gray-400 hover:text-red-500 transition">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{note.title}</h3>
            <div className="mb-3 flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <span key={tag} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
              <span>📅 {note.date}</span>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Edit →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
