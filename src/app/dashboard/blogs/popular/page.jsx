import React from "react";
import { BookOpen } from "lucide-react";

export default function PopularBlogsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <BookOpen className="text-pink-400" />
        <h1 className="text-2xl font-bold">Popular Posts</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">See the most popular and highly rated blog posts. Discover what’s trending in the community.</p>
        <button className="px-4 py-2 rounded bg-pink-400 text-white font-medium hover:bg-pink-500 transition">View Popular</button>
      </div>
    </section>
  );
}
