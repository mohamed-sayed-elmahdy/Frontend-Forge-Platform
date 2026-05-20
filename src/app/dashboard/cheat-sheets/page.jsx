'use client';
import { ScrollText, Code2, Zap, GitBranch } from 'lucide-react';
import Link from 'next/link';

export default function CheatSheetsPage() {
  const sheets = [
    { name: 'React', icon: Code2, color: 'text-cyan-500', path: '/dashboard/cheat-sheets/react', items: 24 },
    { name: 'TypeScript', icon: Zap, color: 'text-blue-600', path: '/dashboard/cheat-sheets/typescript', items: 20 },
    { name: 'Git', icon: GitBranch, color: 'text-red-600', path: '/dashboard/cheat-sheets/git', items: 18 },
    { name: 'CSS', icon: Code2, color: 'text-purple-500', path: '/dashboard/cheat-sheets/css', items: 16 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <ScrollText className="w-10 h-10 text-teal-400" />
          Cheat Sheets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Quick reference guides for rapid lookup and coding</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sheets.map((sheet) => {
          const Icon = sheet.icon;
          return (
            <Link key={sheet.name} href={sheet.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${sheet.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{sheet.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{sheet.items} snippets</p>
                <span className="text-blue-600 text-sm font-medium">View Sheet →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
