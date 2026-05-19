import React from "react";
import { FileText } from "lucide-react";

export default function TypescriptInterviewsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <FileText className="text-cyan-400" />
        <h1 className="text-2xl font-bold">TypeScript Interviews</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Sharpen your TypeScript interview skills with realistic questions and expert answers. Perfect for both beginners and advanced developers.</p>
        <button className="px-4 py-2 rounded bg-cyan-400 text-white font-medium hover:bg-cyan-500 transition">Practice Now</button>
      </div>
    </section>
  );
}
