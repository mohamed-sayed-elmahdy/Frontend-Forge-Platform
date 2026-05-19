import React from "react";
import { GraduationCap } from "lucide-react";

export default function TutorialsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <GraduationCap className="text-yellow-500" />
        <h1 className="text-2xl font-bold">Tutorials</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Browse premium tutorials for React, Next.js, and TypeScript. Learn by doing with hands-on guides and real-world projects.</p>
        <button className="px-4 py-2 rounded bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition">View All Tutorials</button>
      </div>
    </section>
  );
}
