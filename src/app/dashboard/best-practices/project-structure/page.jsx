import React from "react";
import { ShieldCheck } from "lucide-react";

export default function ProjectStructurePage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <ShieldCheck className="text-blue-400" />
        <h1 className="text-2xl font-bold">Project Structure</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Best practices for organizing your project files and folders. Make your codebase scalable and easy to navigate.</p>
        <button className="px-4 py-2 rounded bg-blue-400 text-white font-medium hover:bg-blue-500 transition">See Structure</button>
      </div>
    </section>
  );
}
