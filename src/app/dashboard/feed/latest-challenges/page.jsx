import React from "react";
import { Target, Users, TrendingUp } from "lucide-react";

export default function LatestChallengesPage() {
  const challenges = [
    { id: 1, title: "Build a Todo App with React", difficulty: "Easy", attempts: 1247, solved: 892 },
    { id: 2, title: "API Rate Limiting Middleware", difficulty: "Medium", attempts: 654, solved: 421 },
    { id: 3, title: "Event-Driven Architecture", difficulty: "Hard", attempts: 328, solved: 156 },
    { id: 4, title: "Implement Pagination", difficulty: "Easy", attempts: 1089, solved: 876 },
    { id: 5, title: "Build a Search Engine", difficulty: "Hard", attempts: 245, solved: 89 },
    { id: 6, title: "Design a Chat System", difficulty: "Hard", attempts: 389, solved: 124 },
  ];

  const difficultyColor = { Easy: "text-green-500", Medium: "text-yellow-500", Hard: "text-red-500" };

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      <header className="flex items-center gap-3">
        <Target className="text-emerald-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">Latest Challenges</h1>
          <p className="text-muted-foreground">Test your skills with coding challenges</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map(i => (
          <article key={i.id} className="rounded-xl border bg-card p-6 hover:shadow-md transition group cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <h2 className="font-semibold text-lg group-hover:text-emerald-500 transition">{i.title}</h2>
              <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColor[i.difficulty]} bg-muted`}>{i.difficulty}</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={14} /> {i.attempts.toLocaleString()} attempts
              </div>
              <div className="w-full bg-muted rounded h-2">
                <div className="h-full bg-emerald-500/60 rounded" style={{width: `${(i.solved/i.attempts)*100}%`}}></div>
              </div>
              <p className="text-xs">{i.solved.toLocaleString()} solved ({((i.solved/i.attempts)*100).toFixed(0)}%)</p>
            </div>
            <button className="w-full mt-4 px-3 py-2 rounded bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition text-sm font-medium">Start Challenge</button>
            <p className="text-muted-foreground mb-4">A real-world coding challenge to test and grow your developer skills. Try to solve it and compare solutions!</p>
            <button className="mt-auto px-4 py-2 rounded bg-orange-500 text-white font-medium hover:bg-orange-600 transition">Solve Challenge</button>
          </article>
        ))}
      </div>
    </section>
  );
}
