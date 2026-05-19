import React from "react";
import { FileCode } from "lucide-react";

export default function NextjsInterviewsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <FileCode className="text-cyan-500" />
        <h1 className="text-2xl font-bold">Next.js Interviews</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Practice and review real Next.js interview questions. Get detailed explanations and sample answers to help you prepare for your next interview.</p>
        <button className="px-4 py-2 rounded bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition">Start Practicing</button>
      </div>
    </section>
  );
}
