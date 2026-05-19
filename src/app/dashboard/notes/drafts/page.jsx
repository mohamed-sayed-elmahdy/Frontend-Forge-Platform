import React from "react";
import { NotebookPen } from "lucide-react";

export default function DraftsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <NotebookPen className="text-purple-400" />
        <h1 className="text-2xl font-bold">Quick Drafts</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Jot down quick ideas, todos, or outlines. Perfect for capturing inspiration on the fly.</p>
        <button className="px-4 py-2 rounded bg-purple-400 text-white font-medium hover:bg-purple-500 transition">View Drafts</button>
      </div>
    </section>
  );
}
