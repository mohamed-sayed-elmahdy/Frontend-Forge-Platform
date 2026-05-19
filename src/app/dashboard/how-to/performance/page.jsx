import React from "react";
import { Gauge } from "lucide-react";

export default function PerformanceGuidePage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Gauge className="text-red-200" />
        <h1 className="text-2xl font-bold">Optimize Performance</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Boost your app&apos;s speed and efficiency. Learn performance optimization techniques for React and Next.js projects.</p>
        <button className="px-4 py-2 rounded bg-red-200 text-white font-medium hover:bg-red-300 transition">View Performance</button>
      </div>
    </section>
  );
}
