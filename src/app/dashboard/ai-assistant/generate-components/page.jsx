import React from "react";
import { CodePlus } from "lucide-react";

export default function GenerateComponentsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <CodePlus className="text-violet-100" />
        <h1 className="text-2xl font-bold">Generate Components</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Use AI to scaffold components, pages, and utilities tailored to your project. Save time and focus on logic.</p>
        <button className="px-4 py-2 rounded bg-violet-100 text-white font-medium hover:bg-violet-200 transition">Generate</button>
      </div>
    </section>
  );
}
