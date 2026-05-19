import React from "react";
import { NotebookPen } from "lucide-react";

export default function SnippetsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <NotebookPen className="text-green-400" />
        <h1 className="text-2xl font-bold">Saved Snippets</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Save and organize your favorite code snippets for quick access and reuse in your projects.</p>
        <button className="px-4 py-2 rounded bg-green-400 text-white font-medium hover:bg-green-500 transition">View Snippets</button>
      </div>
    </section>
  );
}
