import React from "react";
import { Code } from "lucide-react";

export default function ExplainCodePage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Code className="text-violet-300" />
        <h1 className="text-2xl font-bold">Explain Code</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Paste code and get an AI-powered explanation with suggestions to improve readability and performance.</p>
        <button className="px-4 py-2 rounded bg-violet-300 text-white font-medium hover:bg-violet-400 transition">Explain Code</button>
      </div>
    </section>
  );
}
