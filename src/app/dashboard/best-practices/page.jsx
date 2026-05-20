'use client';
import { ShieldCheck, Code2, Layers, Zap } from 'lucide-react';
import Link from 'next/link';

export default function BestPracticesPage() {
  const practices = [
    { name: 'Clean Code', icon: Code2, color: 'text-green-600', path: '/dashboard/best-practices/clean-code', guides: 12 },
    { name: 'Project Structure', icon: Layers, color: 'text-blue-600', path: '/dashboard/best-practices/project-structure', guides: 8 },
    { name: 'Performance', icon: Zap, color: 'text-yellow-600', path: '/dashboard/best-practices/performance', guides: 10 },
    { name: 'Testing', icon: ShieldCheck, color: 'text-emerald-600', path: '/dashboard/best-practices/testing', guides: 7 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <ShieldCheck className="w-10 h-10 text-emerald-400" />
          Best Practices
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Industry standards for building robust applications</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {practices.map((practice) => {
          const Icon = practice.icon;
          return (
            <Link key={practice.name} href={practice.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${practice.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{practice.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{practice.guides} guides</p>
                <span className="text-blue-600 text-sm font-medium">Learn More →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
