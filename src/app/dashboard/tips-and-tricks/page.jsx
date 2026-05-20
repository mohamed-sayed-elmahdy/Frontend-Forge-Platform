'use client';
import { Lightbulb, Zap, Code2, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function TipsAndTricksPage() {
  const categories = [
    { name: 'React Tips', icon: Code2, color: 'text-cyan-500', path: '/dashboard/tips-and-tricks/react', tips: 18 },
    { name: 'JavaScript', icon: Zap, color: 'text-yellow-600', path: '/dashboard/tips-and-tricks/javascript', tips: 22 },
    { name: 'Productivity', icon: Rocket, color: 'text-green-600', path: '/dashboard/tips-and-tricks/productivity', tips: 14 },
    { name: 'Dev Shortcuts', icon: Lightbulb, color: 'text-orange-600', path: '/dashboard/tips-and-tricks/shortcuts', tips: 16 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Lightbulb className="w-10 h-10 text-yellow-400" />
          Tips & Tricks
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Boost your productivity with quick tips and clever shortcuts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <Link key={cat.name} href={cat.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${cat.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{cat.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{cat.tips} tips</p>
                <span className="text-blue-600 text-sm font-medium">Explore →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
