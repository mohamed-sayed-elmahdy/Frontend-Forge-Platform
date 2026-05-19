import React from "react";
import { Flame } from "lucide-react";

export default function BookmarkedTutorialsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Flame className="text-yellow-400" />
        <h1 className="text-2xl font-bold">Saved Tutorials</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Your go-to tutorials, saved for easy access. Continue learning at your own pace.</p>
        <button className="px-4 py-2 rounded bg-yellow-400 text-white font-medium hover:bg-yellow-500 transition">View Tutorials</button>
      </div>
    </section>
  );
}
