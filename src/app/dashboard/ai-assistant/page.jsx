import React from "react";
import { WandSparkles } from "lucide-react";

export default function AIAssistantPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <WandSparkles className="text-violet-400" />
        <h1 className="text-2xl font-bold">AI Assistant</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Use AI-powered tools to explain code, fix errors, and generate components instantly.</p>
        <button className="px-4 py-2 rounded bg-violet-400 text-white font-medium hover:bg-violet-500 transition">Open Assistant</button>
      </div>
    </section>
  );
}
