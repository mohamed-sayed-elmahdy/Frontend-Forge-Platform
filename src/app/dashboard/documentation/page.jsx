import Link from "next/link";
import { Rocket, BookOpen, Code2, FileText } from "lucide-react";

export default function DocumentationPage() {
  const docs = [
    {
      title: "Getting Started",
      description: "Quick onboarding guide for new users",
      icon: Rocket,
      href: "/dashboard/documentation/getting-started",
      color: "text-purple-500",
    },
    {
      title: "API Reference",
      description: "Complete API documentation and endpoints",
      icon: Code2,
      href: "/dashboard/documentation/api-reference",
      color: "text-blue-500",
    },
    {
      title: "Components",
      description: "UI components library and usage patterns",
      icon: BookOpen,
      href: "/dashboard/documentation/components",
      color: "text-green-500",
    },
    {
      title: "Changelog",
      description: "See what's new in each release",
      icon: FileText,
      href: "/dashboard/documentation/changelog",
      color: "text-orange-500",
    },
  ];

  const recentUpdates = [
    { version: "2.5.0", date: "May 18, 2026", changes: "Added new AI Assistant features" },
    { version: "2.4.8", date: "May 10, 2026", changes: "Performance improvements" },
    { version: "2.4.7", date: "May 1, 2026", changes: "Bug fixes and UI enhancements" },
  ];

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      <header className="flex items-center gap-3">
        <Rocket className="text-purple-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">Documentation</h1>
          <p className="text-muted-foreground">Everything you need to get started and master the platform</p>
        </div>
      </header>

      {/* Documentation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {docs.map((doc, i) => {
          const Icon = doc.icon;
          return (
            <Link
              key={i}
              href={doc.href}
              className="rounded-xl border bg-card p-6 hover:shadow-md transition cursor-pointer group"
            >
              <Icon className={`${doc.color} mb-3 group-hover:scale-110 transition`} size={28} />
              <h2 className="font-bold text-lg mb-2">{doc.title}</h2>
              <p className="text-sm text-muted-foreground">{doc.description}</p>
            </Link>
          );
        })}
      </div>

      {/* Search Documentation */}
      <div className="rounded-xl border bg-card p-6">
        <input
          type="text"
          placeholder="Search documentation..."
          className="w-full p-3 rounded border bg-muted/50 text-foreground placeholder-muted-foreground"
        />
      </div>

      {/* Recent Updates */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
        <div className="space-y-3">
          {recentUpdates.map((update, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition">
              <div>
                <p className="font-medium">Version {update.version}</p>
                <p className="text-sm text-muted-foreground">{update.changes}</p>
              </div>
              <p className="text-xs text-muted-foreground">{update.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="grid grid-cols-2 gap-2">
          <Link href="#" className="p-2 rounded bg-muted text-sm hover:bg-muted/80 transition">
            FAQ
          </Link>
          <Link href="#" className="p-2 rounded bg-muted text-sm hover:bg-muted/80 transition">
            Support
          </Link>
          <Link href="#" className="p-2 rounded bg-muted text-sm hover:bg-muted/80 transition">
            GitHub
          </Link>
          <Link href="#" className="p-2 rounded bg-muted text-sm hover:bg-muted/80 transition">
            Community
          </Link>
        </div>
      </div>
    </section>
  );
}