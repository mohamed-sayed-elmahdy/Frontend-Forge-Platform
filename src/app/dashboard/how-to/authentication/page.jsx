'use client';
import { Lock, Shield, Key, Users } from 'lucide-react';
import Link from 'next/link';

export default function AuthenticationGuidePage() {
  const guides = [
    { id: 1, title: 'JWT Authentication', icon: Key, desc: 'Implement JSON Web Tokens for stateless auth', difficulty: 'Intermediate', time: '15 min' },
    { id: 2, title: 'OAuth 2.0 Integration', icon: Shield, desc: 'Add social login with GitHub, Google, Facebook', difficulty: 'Advanced', time: '20 min' },
    { id: 3, title: 'Session Management', icon: Users, desc: 'Handle user sessions and persistence', difficulty: 'Intermediate', time: '18 min' },
    { id: 4, title: 'Role-Based Access Control', icon: Lock, desc: 'Implement RBAC for user permissions', difficulty: 'Advanced', time: '25 min' },
  ];

  return (
    <div className="space-y-8">
      <Link href="/dashboard/how-to" className="inline-flex items-center gap-2 text-blue-600">
        ← Back to How-To
      </Link>
      
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Lock className="w-10 h-10 text-blue-600" />
          Authentication Guide
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Learn to implement secure authentication systems</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide) => {
          const Icon = guide.icon;
          return (
            <div key={guide.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-8 h-8 text-blue-600" />
                <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full">{guide.difficulty}</span>
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
