import React from "react";
import { Bot } from "lucide-react";

export default function ResumeReviewAIPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Bot className="text-orange-300" />
        <h1 className="text-2xl font-bold">Review with AI</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Let our AI review your resume instantly. Get quick, actionable feedback and tips for improvement.</p>
        <button className="px-4 py-2 rounded bg-orange-300 text-white font-medium hover:bg-orange-400 transition">Start AI Review</button>
      </div>
    </section>
  );
}
