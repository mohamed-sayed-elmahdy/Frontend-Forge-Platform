'use client';
import { Zap, Clock, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function ProductivityTipsPage() {
  const tips = [
    { id: 1, title: 'VSCode Keyboard Shortcuts', category: 'Tools', desc: 'Master essential shortcuts to code faster' },
    { id: 2, title: 'Code Snippets & Templates', category: 'Tools', desc: 'Create reusable snippets for faster development' },
    { id: 3, title: 'Git Workflow Optimization', category: 'Workflow', desc: 'Streamline your Git workflow with aliases' },
    { id: 4, title: 'Build Automation', category: 'Tools', desc: 'Automate repetitive tasks with npm scripts' },
    { id: 5, title: 'Debugging Techniques', category: 'Workflow', desc: 'Efficiently identify and fix bugs in your code' },
    { id: 6, title: 'Time Management', category: 'Mindset', desc: 'Productivity tips for developers' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/tips-and-tricks" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Tips & Tricks
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Developer Productivity</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Tools, workflows, and techniques to boost productivity</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <Zap className="w-6 h-6 text-green-600" />
              <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 px-3 py-1 rounded-full">{tip.category}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{tip.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tip.desc}</p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Discover →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
