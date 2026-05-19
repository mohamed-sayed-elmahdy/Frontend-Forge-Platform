import React from "react";
import { Lightbulb } from "lucide-react";

export default function JavascriptTricksPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Lightbulb className="text-yellow-300" />
        <h1 className="text-2xl font-bold">JavaScript Tricks</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Essential JavaScript tricks and shortcuts for modern web development. Write cleaner, faster code.</p>
        <button className="px-4 py-2 rounded bg-yellow-300 text-white font-medium hover:bg-yellow-400 transition">See JS Tricks</button>
      </div>
    </section>
  );
}
