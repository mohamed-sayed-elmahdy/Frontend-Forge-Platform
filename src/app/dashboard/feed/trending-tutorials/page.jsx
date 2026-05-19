import React from "react";
import { TrendingUp, Eye, Clock, BarChart3 } from "lucide-react";

export default function TrendingTutorialsPage() {
  const tutorials = [
    { id: 1, title: "Building Real-time Apps with Next.js", views: 2841, time: "24 min", difficulty: "Intermediate" },
    { id: 2, title: "React Server Components Deep Dive", views: 2156, time: "32 min", difficulty: "Advanced" },
    { id: 3, title: "TypeScript Advanced Patterns", views: 1923, time: "28 min", difficulty: "Advanced" },
    { id: 4, title: "Database Optimization for Scale", views: 1847, time: "35 min", difficulty: "Intermediate" },
    { id: 5, title: "Web Performance Best Practices", views: 1654, time: "22 min", difficulty: "Beginner" },
    { id: 6, title: "Authentication & Security", views: 1432, time: "26 min", difficulty: "Intermediate" },
  ];

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      <header className="flex items-center gap-3">
        <TrendingUp className="text-blue-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">Trending Tutorials</h1>
          <p className="text-muted-foreground">Most viewed learning content this week</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tutorials.map(i => (
          <article key={i.id} className="rounded-xl border bg-card p-6 hover:shadow-md transition group cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <h2 className="font-semibold text-lg group-hover:text-blue-500 transition">{i.title}</h2>
              <span className="px-2 py-1 rounded text-xs font-medium bg-muted">{i.difficulty}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye size={14} />
                {i.views.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                {i.time}
              </div>
            </div>
            <button className="w-full mt-4 px-3 py-2 rounded bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition text-sm font-medium">Watch Tutorial</button>
            <p className="text-muted-foreground mb-4">A premium, up-to-date tutorial on a trending topic for developers. Learn best practices and real-world skills.</p>
            <button className="mt-auto px-4 py-2 rounded bg-blue-500 text-white font-medium hover:bg-blue-600 transition">View Tutorial</button>
          </article>
        ))}
      </div>
    </section>
  );
}
