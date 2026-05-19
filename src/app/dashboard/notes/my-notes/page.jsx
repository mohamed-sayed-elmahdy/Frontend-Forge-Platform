import React from "react";
import { NotebookPen } from "lucide-react";

export default function MyNotesPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <NotebookPen className="text-blue-400" />
        <h1 className="text-2xl font-bold">My Notes</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Your personal notes, ideas, and learning takeaways. Keep everything in one place and never lose track.</p>
        <button className="px-4 py-2 rounded bg-blue-400 text-white font-medium hover:bg-blue-500 transition">View My Notes</button>
      </div>
    </section>
  );
}
