import React from "react";
import { NotebookPen } from "lucide-react";

export default function NotesPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <NotebookPen className="text-indigo-400" />
        <h1 className="text-2xl font-bold">Notes</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Organize your thoughts, code snippets, and drafts. Everything you need for productive learning and development.</p>
        <button className="px-4 py-2 rounded bg-indigo-400 text-white font-medium hover:bg-indigo-500 transition">Browse Notes</button>
      </div>
    </section>
  );
}
