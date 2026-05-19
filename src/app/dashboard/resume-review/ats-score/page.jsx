import React from "react";
import { BarChart2 } from "lucide-react";

export default function ATSScoreCheckerPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <BarChart2 className="text-orange-200" />
        <h1 className="text-2xl font-bold">ATS Score Checker</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Check how your resume performs with Applicant Tracking Systems. Get a detailed score and suggestions for improvement.</p>
        <button className="px-4 py-2 rounded bg-orange-200 text-white font-medium hover:bg-orange-300 transition">Check Score</button>
      </div>
    </section>
  );
}
