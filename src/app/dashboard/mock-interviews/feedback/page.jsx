import React from "react";
import { MessageCircle } from "lucide-react";

export default function InterviewFeedbackPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <MessageCircle className="text-violet-300" />
        <h1 className="text-2xl font-bold">Interview Feedback</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">View detailed feedback from your recent mock interviews. Track your progress and focus on areas for improvement.</p>
        <button className="px-4 py-2 rounded bg-violet-300 text-white font-medium hover:bg-violet-400 transition">View Feedback</button>
      </div>
    </section>
  );
}
