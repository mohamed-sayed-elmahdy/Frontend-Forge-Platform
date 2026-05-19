import React from "react";
import { Map } from "lucide-react";

export default function ReactRoadmapPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Map className="text-green-300" />
        <h1 className="text-2xl font-bold">React Roadmap</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Follow this roadmap to master React. Covers fundamentals, advanced patterns, state management, and ecosystem tools.</p>
        <button className="px-4 py-2 rounded bg-green-300 text-white font-medium hover:bg-green-400 transition">Explore React</button>
      </div>
    </section>
  );
}
