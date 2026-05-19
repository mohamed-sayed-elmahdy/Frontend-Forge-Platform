import React from "react";
import { Map } from "lucide-react";

export default function RoadmapsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Map className="text-green-500" />
        <h1 className="text-2xl font-bold">Roadmaps</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Explore curated learning roadmaps for frontend, React, and Next.js. Follow step-by-step guides to master modern web development.</p>
        <button className="px-4 py-2 rounded bg-green-500 text-white font-medium hover:bg-green-600 transition">View All Roadmaps</button>
      </div>
    </section>
  );
}
