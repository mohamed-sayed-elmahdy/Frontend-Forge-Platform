import React from "react";
import { Bot } from "lucide-react";

export default function MockInterviewAIPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Bot className="text-violet-400" />
        <h1 className="text-2xl font-bold">Mock Interview with AI</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Practice your interview skills with an advanced AI interviewer. Get instant feedback and improve your confidence.</p>
        <button className="px-4 py-2 rounded bg-violet-400 text-white font-medium hover:bg-violet-500 transition">Start AI Interview</button>
      </div>
    </section>
  );
}
