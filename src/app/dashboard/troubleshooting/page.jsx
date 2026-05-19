import React from "react";
import { Bug } from "lucide-react";

export default function TroubleshootingPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Bug className="text-red-400" />
        <h1 className="text-2xl font-bold">Troubleshooting</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Find solutions to common issues: hydration errors, debugging, build problems, and more. Get back on track fast.</p>
        <button className="px-4 py-2 rounded bg-red-400 text-white font-medium hover:bg-red-500 transition">See Solutions</button>
      </div>
    </section>
  );
}
