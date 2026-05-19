import React from "react";
import { Lock } from "lucide-react";

export default function AuthenticationGuidePage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <Lock className="text-red-400" />
        <h1 className="text-2xl font-bold">Build Authentication</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Learn how to implement secure authentication in your apps. Includes best practices, code samples, and real-world tips.</p>
        <button className="px-4 py-2 rounded bg-red-400 text-white font-medium hover:bg-red-500 transition">View Guide</button>
      </div>
    </section>
  );
}
