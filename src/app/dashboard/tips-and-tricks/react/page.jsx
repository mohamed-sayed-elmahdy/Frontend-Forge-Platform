import React from "react";
import { Lightbulb } from "lucide-react";

export default function ReactTipsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Lightbulb className="text-blue-400" />
        <h1 className="text-2xl font-bold">React Tips</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Handy tips and advanced techniques for React developers. Improve your code quality and productivity.</p>
        <button className="px-4 py-2 rounded bg-blue-400 text-white font-medium hover:bg-blue-500 transition">See React Tips</button>
      </div>
    </section>
  );
}
