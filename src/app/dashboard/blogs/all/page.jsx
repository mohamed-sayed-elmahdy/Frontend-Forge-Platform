import React from "react";
import { BookOpen } from "lucide-react";

export default function AllBlogsPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <BookOpen className="text-sky-400" />
        <h1 className="text-2xl font-bold">All Blogs</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Browse all blog posts, tutorials, and articles. Stay up to date with the latest in web development.</p>
        <button className="px-4 py-2 rounded bg-sky-400 text-white font-medium hover:bg-sky-500 transition">View Blogs</button>
      </div>
    </section>
  );
}
