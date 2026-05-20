'use client';
import { NotebookPen, FileText, Lightbulb, Archive } from 'lucide-react';
import Link from 'next/link';

export default function NotesPage() {
  const sections = [
    { name: 'My Notes', icon: FileText, color: 'text-blue-600', path: '/dashboard/notes/my-notes', items: 24 },
    { name: 'Code Snippets', icon: Lightbulb, color: 'text-yellow-600', path: '/dashboard/notes/snippets', items: 42 },
    { name: 'Drafts', icon: NotebookPen, color: 'text-green-600', path: '/dashboard/notes/drafts', items: 8 },
    { name: 'Archived', icon: Archive, color: 'text-purple-600', path: '/dashboard/notes/archived', items: 15 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <NotebookPen className="w-10 h-10 text-indigo-400" />
          Notes
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Organize your thoughts and code snippets</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.name} href={section.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${section.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{section.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{section.items} items</p>
                <span className="text-blue-600 text-sm font-medium">View →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
