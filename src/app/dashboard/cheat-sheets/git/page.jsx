import React from "react";
import { ScrollText } from "lucide-react";

export default function GitCheatSheetPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <ScrollText className="text-pink-400" />
        <h1 className="text-2xl font-bold">Git Cheat Sheet</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Common Git commands and workflows for everyday use. Never forget a command again with this quick reference.</p>
        <button className="px-4 py-2 rounded bg-pink-400 text-white font-medium hover:bg-pink-500 transition">View Git Sheet</button>
      </div>
    </section>
  );
}
