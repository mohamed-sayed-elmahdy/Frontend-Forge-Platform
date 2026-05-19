import React, { useState } from "react";
import { FileText, Users, Bot, BarChart3 } from "lucide-react";

export default function ResumeReviewPage() {
  const services = [
    { id: 1, title: "Human Review", desc: "Expert review from industry professionals", icon: Users, color: "text-blue-500", href: "/dashboard/resume-review/human", price: "$49" },
    { id: 2, title: "AI Analysis", desc: "Instant AI-powered resume analysis", icon: Bot, color: "text-violet-400", href: "/dashboard/resume-review/ai", price: "$9" },
    { id: 3, title: "ATS Score", desc: "Check your ATS compatibility score", icon: BarChart3, color: "text-green-500", href: "/dashboard/resume-review/ats-score", price: "Free" },
  ];

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      <header className="flex items-center gap-3">
        <FileText className="text-orange-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">Resume Review</h1>
          <p className="text-muted-foreground">Get your resume reviewed and optimized for success</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(s => {
          const Icon = s.icon;
          return (
            <a key={s.id} href={s.href} className="rounded-xl border bg-card p-6 hover:shadow-md transition group">
              <Icon className={`${s.color} mb-3 group-hover:scale-110 transition`} size={28} />
              <h2 className="font-bold text-lg mb-2">{s.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">{s.price}</span>
                <span className="text-xs text-muted-foreground">→</span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
