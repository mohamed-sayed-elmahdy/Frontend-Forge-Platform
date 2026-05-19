import React from "react";
import { Rocket } from "lucide-react";

export default function ChangelogPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Rocket className="text-orange-400" />
        <h1 className="text-2xl font-bold">Changelog</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">See what’s new, improved, and fixed in every release. Stay up to date with the latest changes.</p>
        <button className="px-4 py-2 rounded bg-orange-400 text-white font-medium hover:bg-orange-500 transition">View Changelog</button>
      </div>
    </section>
  );
}
