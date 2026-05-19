import React from "react";
import { Lightbulb } from "lucide-react";

export default function ProductivityTipsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Lightbulb className="text-green-400" />
        <h1 className="text-2xl font-bold">Developer Productivity</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Boost your productivity with proven workflows, tools, and time-saving techniques for developers.</p>
        <button className="px-4 py-2 rounded bg-green-400 text-white font-medium hover:bg-green-500 transition">See Productivity Tips</button>
      </div>
    </section>
  );
}
