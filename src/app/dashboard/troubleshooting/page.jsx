'use client';
import { Bug, AlertCircle, Wrench, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function TroubleshootingPage() {
  const issues = [
    { name: 'Hydration Errors', icon: AlertCircle, color: 'text-red-600', path: '/dashboard/troubleshooting/hydration-errors', solutions: 6 },
    { name: 'Debugging', icon: Wrench, color: 'text-orange-600', path: '/dashboard/troubleshooting/debugging', solutions: 8 },
    { name: 'Build Errors', icon: Code2, color: 'text-red-500', path: '/dashboard/troubleshooting/build-errors', solutions: 9 },
    { name: 'Performance Issues', icon: Bug, color: 'text-yellow-600', path: '/dashboard/troubleshooting/performance', solutions: 7 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Bug className="w-10 h-10 text-red-400" />
          Troubleshooting
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Solutions to common problems and issues</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {issues.map((issue) => {
          const Icon = issue.icon;
          return (
            <Link key={issue.name} href={issue.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${issue.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{issue.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{issue.solutions} solutions</p>
                <span className="text-blue-600 text-sm font-medium">Get Help →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
