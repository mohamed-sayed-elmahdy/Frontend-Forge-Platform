import React from "react";
import { User } from "lucide-react";

export default function MockInterviewHumanPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <User className="text-violet-500" />
        <h1 className="text-2xl font-bold">Mock Interview with Human</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Schedule a realistic mock interview with an expert developer. Get actionable feedback and improve your interview skills.</p>
        <button className="px-4 py-2 rounded bg-violet-500 text-white font-medium hover:bg-violet-600 transition">Book Interview</button>
      </div>
    </section>
  );
}
