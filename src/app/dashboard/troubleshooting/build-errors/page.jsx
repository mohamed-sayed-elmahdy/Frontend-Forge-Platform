import React from "react";
import { Bug } from "lucide-react";

export default function BuildErrorsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Bug className="text-pink-400" />
        <h1 className="text-2xl font-bold">Fix Build Issues</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Troubleshoot and resolve build errors in your projects. Get step-by-step solutions and prevention tips.</p>
        <button className="px-4 py-2 rounded bg-pink-400 text-white font-medium hover:bg-pink-500 transition">Fix Build</button>
      </div>
    </section>
  );
}
