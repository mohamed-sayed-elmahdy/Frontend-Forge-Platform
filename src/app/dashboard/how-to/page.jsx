'use client';
import { Wrench, Lock, Rocket, Zap, Database } from 'lucide-react';
import Link from 'next/link';

export default function HowToPage() {
  const categories = [
    { name: 'Authentication', icon: Lock, color: 'text-blue-600', path: '/dashboard/how-to/authentication', guides: 8 },
    { name: 'Deployment', icon: Rocket, color: 'text-green-600', path: '/dashboard/how-to/deployment', guides: 6 },
    { name: 'Performance', icon: Zap, color: 'text-yellow-600', path: '/dashboard/how-to/performance', guides: 7 },
    { name: 'Database', icon: Database, color: 'text-purple-600', path: '/dashboard/how-to/database', guides: 5 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Wrench className="w-10 h-10 text-red-500" />
          How-To Guides
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Step-by-step guides for common development tasks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.name} href={cat.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${cat.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{cat.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cat.guides} guides</p>
                <span className="text-blue-600 text-sm font-medium">Read Guides →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
