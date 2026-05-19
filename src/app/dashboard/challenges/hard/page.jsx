import React from "react";
import { Trophy } from "lucide-react";

export default function HardChallengesPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Trophy className="text-red-400" />
        <h1 className="text-2xl font-bold">Hard Challenges</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Push your limits with advanced challenges. Perfect for experienced developers seeking a real test.</p>
        <button className="px-4 py-2 rounded bg-red-400 text-white font-medium hover:bg-red-500 transition">Start Hard</button>
      </div>
    </section>
  );
}
