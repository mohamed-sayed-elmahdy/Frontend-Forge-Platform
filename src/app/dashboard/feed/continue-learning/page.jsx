import React from "react";
import { GraduationCap, Play } from "lucide-react";

export default function ContinueLearningPage() {
  const courses = [
    { id: 1, title: "Advanced React Patterns", progress: 65, lessons: 12, completed: 8 },
    { id: 2, title: "Next.js 15 Masterclass", progress: 42, lessons: 18, completed: 8 },
    { id: 3, title: "TypeScript Advanced", progress: 78, lessons: 10, completed: 8 },
    { id: 4, title: "System Design Fundamentals", progress: 35, lessons: 15, completed: 5 },
    { id: 5, title: "Web Performance Optimization", progress: 89, lessons: 8, completed: 7 },
    { id: 6, title: "GraphQL & Apollo", progress: 21, lessons: 14, completed: 3 },
  ];

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      <header className="flex items-center gap-3">
        <GraduationCap className="text-yellow-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">Continue Learning</h1>
          <p className="text-muted-foreground">Pick up where you left off</p>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-6">
        {courses.map(i => (
          <article key={i.id} className="rounded-xl border bg-card p-6 hover:shadow-md transition group cursor-pointer">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-lg group-hover:text-yellow-500 transition">{i.title}</h2>
              <span className="text-sm text-muted-foreground">{i.completed}/{i.lessons} lessons</span>
            </div>
            <div className="space-y-3">
              <div className="w-full bg-muted rounded-full h-3">
                <div className="h-full bg-yellow-500 rounded-full" style={{width: `${i.progress}%`}}></div>
              </div>
              <p className="text-sm text-muted-foreground">{i.progress}% complete</p>
            </div>
            <button className="w-full mt-4 px-3 py-2 rounded bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition text-sm font-medium flex items-center justify-center gap-2">
              <Play size={14} /> Resume Learning
            </button>
            <p className="text-muted-foreground mb-4">Pick up where you left off in your learning journey. Resume lessons, projects, or challenges instantly.</p>
            <button className="mt-auto px-4 py-2 rounded bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition">Resume</button>
          </article>
        ))}
      </div>
    </section>
  );
}
