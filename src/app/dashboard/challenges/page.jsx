import React from "react";
import { Trophy } from "lucide-react";

export default function ChallengesPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Trophy className="text-amber-400" />
        <h1 className="text-2xl font-bold">Challenges</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Sharpen your skills with real-world coding challenges. Choose your level and start solving!</p>
        <button className="px-4 py-2 rounded bg-amber-400 text-white font-medium hover:bg-amber-500 transition">Browse Challenges</button>
      </div>
    </section>
  );
}
