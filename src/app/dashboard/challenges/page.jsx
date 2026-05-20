'use client';
import { Trophy, Zap, Target, Crown } from 'lucide-react';
import Link from 'next/link';

export default function ChallengesPage() {
  const levels = [
    { name: 'Easy', icon: Zap, color: 'text-green-600', path: '/dashboard/challenges/easy', count: 12 },
    { name: 'Medium', icon: Target, color: 'text-yellow-600', path: '/dashboard/challenges/medium', count: 18 },
    { name: 'Hard', icon: Trophy, color: 'text-red-600', path: '/dashboard/challenges/hard', count: 8 },
    { name: 'Expert', icon: Crown, color: 'text-purple-600', path: '/dashboard/challenges/expert', count: 5 },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <Trophy className="w-10 h-10 text-amber-400" />
          Coding Challenges
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Master your skills with real-world challenges</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((level) => {
          const Icon = level.icon;
          return (
            <Link key={level.name} href={level.path}>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow h-full">
                <Icon className={`w-8 h-8 ${level.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{level.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{level.count} challenges</p>
                <span className="text-blue-600 text-sm font-medium">Start Solving →</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
