'use client';
import { GraduationCap, Code2, Zap, Layers } from 'lucide-react';
import Link from 'next/link';

export default function TutorialsPage() {
  const categories = [
    { name: 'React', icon: Code2, color: 'text-cyan-500', path: '/dashboard/tutorials/react', count: 12 },
    { name: 'Next.js', icon: Zap, color: 'text-black dark:text-white', path: '/dashboard/tutorials/nextjs', count: 8 },
    { name: 'TypeScript', icon: Layers, color: 'text-blue-600', path: '/dashboard/tutorials/typescript', count: 10 },
    { name: 'Web APIs', icon: Code2, color: 'text-purple-500', path: '/dashboard/tutorials/web-apis', count: 6 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <GraduationCap className="w-10 h-10 text-yellow-500" />
          Tutorials
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Learn from expert-led tutorials with hands-on projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.name} href={cat.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${cat.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{cat.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cat.count} tutorials</p>
                <span className="text-blue-600 text-sm font-medium">View Tutorials →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
