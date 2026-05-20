'use client';
import { Gauge, Zap, Eye, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export default function PerformanceGuidePage() {
  const guides = [
    { id: 1, title: 'Code Splitting', icon: Zap, desc: 'Reduce bundle size with dynamic imports', difficulty: 'Intermediate', time: '12 min' },
    { id: 2, title: 'Image Optimization', icon: Eye, desc: 'Optimize images with Next.js Image component', difficulty: 'Beginner', time: '10 min' },
    { id: 3, title: 'Caching Strategies', icon: BarChart3, desc: 'Implement caching for faster loading', difficulty: 'Intermediate', time: '15 min' },
    { id: 4, title: 'Core Web Vitals', icon: Gauge, desc: 'Measure and improve Core Web Vitals', difficulty: 'Advanced', time: '20 min' },
  ];

  return (
    <div className="space-y-8">
      <Link href="/dashboard/how-to" className="inline-flex items-center gap-2 text-blue-600">
        ← Back to How-To
      </Link>
      
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Gauge className="w-10 h-10 text-yellow-600" />
          Performance Optimization
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Make your apps faster and more efficient</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => {
          const Icon = guide.icon;
          return (
            <div key={guide.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-8 h-8 text-yellow-600" />
                <span className={`text-xs px-3 py-1 rounded-full ${
                  guide.difficulty === 'Beginner' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200' :
                  guide.difficulty === 'Intermediate' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200' :
                  'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200'
                }`}>{guide.difficulty}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{guide.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{guide.desc}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>⏱️ {guide.time} read</span>
                <button className="text-blue-600 hover:text-blue-700 font-medium">Read Guide →</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
