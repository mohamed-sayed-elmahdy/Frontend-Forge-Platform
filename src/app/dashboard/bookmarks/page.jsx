import React from "react";
import { Flame } from "lucide-react";

export default function BookmarksPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Flame className="text-pink-400" />
        <h1 className="text-2xl font-bold">Bookmarks</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Save your favorite blogs, tutorials, and interviews for quick access. Never lose track of great content.</p>
        <button className="px-4 py-2 rounded bg-pink-400 text-white font-medium hover:bg-pink-500 transition">Browse Bookmarks</button>
      </div>
    </section>
  );
}
