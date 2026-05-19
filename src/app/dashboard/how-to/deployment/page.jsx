import React from "react";
import { UploadCloud } from "lucide-react";

export default function DeploymentGuidePage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <UploadCloud className="text-red-300" />
        <h1 className="text-2xl font-bold">Deploy Next.js App</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">A complete guide to deploying your Next.js app. Covers Vercel, custom servers, CI/CD, and troubleshooting.</p>
        <button className="px-4 py-2 rounded bg-red-300 text-white font-medium hover:bg-red-400 transition">View Deployment</button>
      </div>
    </section>
  );
}
