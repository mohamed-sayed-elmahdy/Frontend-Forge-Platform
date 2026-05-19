import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PerformanceBestPracticesPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <ShieldCheck className="text-cyan-400" />
        <h1 className="text-2xl font-bold">Performance Optimization</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Techniques and tools to optimize your app&apos;s performance. Learn profiling, caching, and advanced strategies.</p>
        <button className="px-4 py-2 rounded bg-cyan-400 text-white font-medium hover:bg-cyan-500 transition">See Performance Tips</button>
      </div>
    </section>
  );
}
