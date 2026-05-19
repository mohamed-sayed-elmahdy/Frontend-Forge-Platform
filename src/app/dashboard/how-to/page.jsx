import React from "react";
import { Wrench } from "lucide-react";

export default function HowToPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Wrench className="text-red-500" />
        <h1 className="text-2xl font-bold">How To</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Step-by-step guides for common developer tasks: authentication, deployment, performance, and more. Learn by doing!</p>
        <button className="px-4 py-2 rounded bg-red-500 text-white font-medium hover:bg-red-600 transition">Browse Guides</button>
      </div>
    </section>
  );
}
