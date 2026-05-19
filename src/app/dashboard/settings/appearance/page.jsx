import React from "react";
import { Sun } from "lucide-react";

export default function SettingsAppearancePage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Sun className="text-yellow-400" />
        <h1 className="text-2xl font-bold">Appearance</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Customize theme, layout, and display preferences to suit your workflow.</p>
        <button className="px-4 py-2 rounded bg-yellow-400 text-white font-medium hover:bg-yellow-500 transition">Customize</button>
      </div>
    </section>
  );
}
