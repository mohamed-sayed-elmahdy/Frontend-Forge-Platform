import React from "react";
import { Trophy } from "lucide-react";

export default function MediumChallengesPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Trophy className="text-yellow-400" />
        <h1 className="text-2xl font-bold">Medium Challenges</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Take on intermediate challenges to deepen your understanding and problem-solving skills.</p>
        <button className="px-4 py-2 rounded bg-yellow-400 text-white font-medium hover:bg-yellow-500 transition">Start Medium</button>
      </div>
    </section>
  );
}
