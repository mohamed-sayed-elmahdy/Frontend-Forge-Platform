import React from "react";
import { Bug } from "lucide-react";

export default function HydrationErrorsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Bug className="text-orange-400" />
        <h1 className="text-2xl font-bold">Fix Hydration Errors</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Diagnose and resolve React hydration errors. Step-by-step fixes and best practices for seamless SSR/CSR.</p>
        <button className="px-4 py-2 rounded bg-orange-400 text-white font-medium hover:bg-orange-500 transition">Fix Now</button>
      </div>
    </section>
  );
}
