import React from "react";
import { User } from "lucide-react";

export default function ResumeReviewHumanPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <User className="text-orange-400" />
        <h1 className="text-2xl font-bold">Review with Human</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Book a session with a real expert to review your resume. Get personalized feedback and actionable suggestions.</p>
        <button className="px-4 py-2 rounded bg-orange-400 text-white font-medium hover:bg-orange-500 transition">Book Session</button>
      </div>
    </section>
  );
}
