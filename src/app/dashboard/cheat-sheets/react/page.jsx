import React from "react";
import { ScrollText } from "lucide-react";

export default function ReactCheatSheetPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <ScrollText className="text-blue-400" />
        <h1 className="text-2xl font-bold">React Cheat Sheet</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Essential React patterns, hooks, and best practices at a glance. Perfect for quick reference while coding.</p>
        <button className="px-4 py-2 rounded bg-blue-400 text-white font-medium hover:bg-blue-500 transition">View React Sheet</button>
      </div>
    </section>
  );
}
