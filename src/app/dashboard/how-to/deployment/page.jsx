'use client';
import { UploadCloud, Cloud, Box, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DeploymentGuidePage() {
  const guides = [
    { id: 1, title: 'Deploy to Vercel', icon: Cloud, desc: 'One-click deployment with zero config', difficulty: 'Beginner', time: '5 min' },
    { id: 2, title: 'Docker Containerization', icon: Box, desc: 'Package app in Docker containers', difficulty: 'Intermediate', time: '20 min' },
    { id: 3, title: 'AWS EC2 Deployment', icon: UploadCloud, desc: 'Deploy to AWS with environment setup', difficulty: 'Advanced', time: '30 min' },
    { id: 4, title: 'GitHub Actions CI/CD', icon: Zap, desc: 'Automate deployments with GitHub Actions', difficulty: 'Intermediate', time: '25 min' },
  ];

  return (
    <div className="space-y-8">
      <Link href="/dashboard/how-to" className="inline-flex items-center gap-2 text-blue-600">
        ← Back to How-To
      </Link>
      
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <UploadCloud className="w-10 h-10 text-green-600" />
          Deployment Guides
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Get your apps live with different deployment options</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => {
          const Icon = guide.icon;
          return (
            <div key={guide.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-8 h-8 text-green-600" />
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
