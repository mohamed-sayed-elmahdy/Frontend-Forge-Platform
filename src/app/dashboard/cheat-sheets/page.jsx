import React from "react";
import { ScrollText } from "lucide-react";

export default function CheatSheetsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <ScrollText className="text-teal-400" />
        <h1 className="text-2xl font-bold">Cheat Sheets</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Quick reference guides for React, TypeScript, Git, and more. Save time and code faster with handy cheat sheets.</p>
        <button className="px-4 py-2 rounded bg-teal-400 text-white font-medium hover:bg-teal-500 transition">Browse Cheat Sheets</button>
      </div>
    </section>
  );
}
