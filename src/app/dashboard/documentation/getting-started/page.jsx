import React from "react";
import { Rocket } from "lucide-react";

export default function GettingStartedPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Rocket className="text-purple-400" />
        <h1 className="text-2xl font-bold">Getting Started</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Kickstart your journey with our platform. Learn how to set up, navigate, and make the most of all features.</p>
        <button className="px-4 py-2 rounded bg-purple-400 text-white font-medium hover:bg-purple-500 transition">Start Here</button>
      </div>
    </section>
  );
}
