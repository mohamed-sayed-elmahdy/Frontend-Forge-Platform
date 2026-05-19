import React from "react";
import { Map } from "lucide-react";

export default function FrontendRoadmapPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Map className="text-green-400" />
        <h1 className="text-2xl font-bold">Frontend Roadmap</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">A step-by-step roadmap to become a modern frontend developer. Includes HTML, CSS, JavaScript, frameworks, and best practices.</p>
        <button className="px-4 py-2 rounded bg-green-400 text-white font-medium hover:bg-green-500 transition">Explore Frontend</button>
      </div>
    </section>
  );
}
