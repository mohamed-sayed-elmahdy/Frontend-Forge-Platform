import React from "react";
import { ShieldCheck } from "lucide-react";

export default function BestPracticesPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <ShieldCheck className="text-emerald-400" />
        <h1 className="text-2xl font-bold">Best Practices</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Guides and checklists for clean code, project structure, and performance. Build robust, maintainable apps.</p>
        <button className="px-4 py-2 rounded bg-emerald-400 text-white font-medium hover:bg-emerald-500 transition">Explore Best Practices</button>
      </div>
    </section>
  );
}
