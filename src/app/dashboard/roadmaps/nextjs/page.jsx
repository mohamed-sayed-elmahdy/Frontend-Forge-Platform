import React from "react";
import { Map } from "lucide-react";

export default function NextjsRoadmapPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Map className="text-green-200" />
        <h1 className="text-2xl font-bold">Next.js Roadmap</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">A comprehensive roadmap for mastering Next.js. Learn routing, data fetching, deployment, and advanced features.</p>
        <button className="px-4 py-2 rounded bg-green-200 text-white font-medium hover:bg-green-300 transition">Explore Next.js</button>
      </div>
    </section>
  );
}
