import React from "react";
import { ScrollText } from "lucide-react";

export default function TypescriptCheatSheetPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <ScrollText className="text-cyan-400" />
        <h1 className="text-2xl font-bold">TypeScript Cheat Sheet</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">TypeScript types, generics, and advanced features summarized for fast lookup. Boost your productivity with this guide.</p>
        <button className="px-4 py-2 rounded bg-cyan-400 text-white font-medium hover:bg-cyan-500 transition">View TS Sheet</button>
      </div>
    </section>
  );
}
