import React from "react";
import { TrendingUp, BookOpen, Target, Zap, Clock, Award } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Total Lessons", value: "42", icon: BookOpen, color: "text-blue-500" },
    { label: "Challenges Solved", value: "18", icon: Target, color: "text-green-500" },
    { label: "Streak Days", value: "7", icon: Zap, color: "text-yellow-500" },
    { label: "Achievements", value: "5", icon: Award, color: "text-purple-500" },
  ];

  const recentActivity = [
    { title: "Completed React Hooks Tutorial", time: "2 hours ago" },
    { title: "Solved Medium Challenge", time: "5 hours ago" },
    { title: "Bookmarked Next.js Performance Guide", time: "1 day ago" },
    { title: "Completed Mock Interview", time: "2 days ago" },
  ];

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      {/* Welcome Section */}
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome back, Mohamed!</h1>
        <p className="text-muted-foreground">Continue your learning journey where you left off.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-xl border bg-card p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
              </div>
              <stat.icon className={`${stat.color} opacity-80`} size={32} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp size={20} />
            Recent Activity
          </h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <p className="font-medium text-sm">{item.title}</p>
                <span className="text-xs text-muted-foreground">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="space-y-2">
            <a href="/dashboard/interviews/react" className="block p-2 text-sm hover:bg-muted/50 rounded transition">Practice React</a>
            <a href="/dashboard/challenges/medium" className="block p-2 text-sm hover:bg-muted/50 rounded transition">Solve Challenge</a>
            <a href="/dashboard/mock-interviews/ai" className="block p-2 text-sm hover:bg-muted/50 rounded transition">Mock Interview</a>
            <a href="/dashboard/notes/my-notes" className="block p-2 text-sm hover:bg-muted/50 rounded transition">My Notes</a>
          </div>
        </div>
      </div>

      {/* Continue Learning Section */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4">Continue Learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition">
              <div className="h-24 bg-muted rounded mb-3" />
              <p className="font-medium text-sm">Course #{i}</p>
              <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${60 + i * 10}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
