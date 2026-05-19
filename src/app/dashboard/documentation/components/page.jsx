import React from "react";
import { Rocket } from "lucide-react";

export default function ComponentsDocsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Rocket className="text-green-400" />
        <h1 className="text-2xl font-bold">Components</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Explore all UI components, usage patterns, and customization options. Build faster with reusable blocks.</p>
        <button className="px-4 py-2 rounded bg-green-400 text-white font-medium hover:bg-green-500 transition">View Components</button>
      </div>
    </section>
  );
}
