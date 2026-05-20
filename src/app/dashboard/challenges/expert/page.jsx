'use client';
import { Zap, Users } from 'lucide-react';
import Link from 'next/link';

export default function ExpertChallengesPage() {
  const challenges = [
    { id: 1, title: 'Quantum Circuit Simulation', attempts: 89, solved: 12, difficulty: 'Expert', reward: '100 XP' },
    { id: 2, title: 'Neural Network Design', attempts: 76, solved: 10, difficulty: 'Expert', reward: '100 XP' },
    { id: 3, title: 'Distributed Consensus', attempts: 65, solved: 8, difficulty: 'Expert', reward: '100 XP' },
    { id: 4, title: 'Advanced Cryptography', attempts: 93, solved: 14, difficulty: 'Expert', reward: '100 XP' },
    { id: 5, title: 'Compiler Design', attempts: 57, solved: 7, difficulty: 'Expert', reward: '100 XP' },
    { id: 6, title: 'Advanced ML Optimization', attempts: 81, solved: 11, difficulty: 'Expert', reward: '100 XP' },
  ];

  return (
    <div className="space-y-6">
      <Link href="/dashboard/challenges" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
        ← Back to Challenges
      </Link>
      <div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Expert Challenges</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Ultimate challenges for elite problem solvers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge) => {
          const solveRate = Math.round((challenge.solved / challenge.attempts) * 100);
          return (
            <div key={challenge.id} className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
              <div className="flex items-start justify-between mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
                <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full">+{challenge.reward}</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{challenge.title}</h3>
              <div className="mb-3">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>Solve Rate</span>
                  <span className="font-semibold">{solveRate}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: `${solveRate}%`}}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-4">
                <span>👥 {challenge.attempts} attempts</span>
                <span>🎉 {challenge.solved} solved</span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Start Challenge →</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
