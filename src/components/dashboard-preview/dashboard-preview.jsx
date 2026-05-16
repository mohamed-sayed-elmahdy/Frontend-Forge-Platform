"use client";

import { useState } from "react";
import { motion } from "motion/react";

const tabs = [
  { key: "Signals", label: "Signal health" },
  { key: "Pipeline", label: "Pipeline view" },
  { key: "Revenue", label: "Revenue mix" },
];

const overviewMetrics = [
  { label: "Active teams", value: "18", accent: "+12%" },
  { label: "Weekly touchpoints", value: "4.2k", accent: "+22%" },
  { label: "Forecast accuracy", value: "91%", accent: "+6 pts" },
];

const detailRows = [
  { project: "Growth launch", progress: "72%", owner: "Maya", status: "On track" },
  { project: "Customer signals", progress: "54%", owner: "Noel", status: "Needs review" },
  { project: "Partner sync", progress: "88%", owner: "Ari", status: "Live" },
];

const activityFeed = [
  { label: "New AI insight", value: "Sales cadence anomaly detected", time: "2m ago" },
  { label: "Update", value: "Weekly forecast synced with revenue bridge", time: "10m ago" },
  { label: "Signal", value: "VIP account showing intent", time: "22m ago" },
];

const chartData = {
  Signals: [18, 22, 24, 30, 26, 34, 38],
  Pipeline: [12, 16, 19, 15, 22, 27, 32],
  Revenue: [24, 28, 31, 29, 34, 42, 47],
};

const chartLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("Signals");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    setCursor({ x: x * 0.05, y: y * 0.05 });
  }

  function handleMouseLeave() {
    setCursor({ x: 0, y: 0 });
  }

  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-[2.25rem] bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-900/90 shadow-[0_60px_120px_-60px_rgba(15,23,42,0.9)]" />
            <motion.div
              className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/95 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cyan-400/15 to-transparent" />
              <div className="pointer-events-none absolute -left-10 top-16 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="pointer-events-none absolute right-6 top-20 h-20 w-20 rounded-full bg-violet-400/10 blur-3xl" />
              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.32em] text-slate-300 backdrop-blur">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.45)]" />
                      live preview
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                      Designed to feel like a high-end SaaS product.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-300 shadow-inner shadow-black/20 backdrop-blur">
                    Updated 2m ago
                  </div>
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                  <aside className="rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>Workspace</span>
                      <span className="rounded-full bg-white/5 px-2 py-1 text-xs uppercase tracking-[0.32em] text-slate-300">Beta</span>
                    </div>
                    <div className="mt-6 space-y-3">
                      {[
                        "Overview",
                        "Signals",
                        "Pipeline",
                        "Insights",
                        "Archive",
                      ].map((item, index) => (
                        <button
                          key={item}
                          type="button"
                          className="group flex w-full items-center justify-between rounded-3xl border border-transparent bg-slate-950/70 px-4 py-3 text-left text-sm text-slate-300 transition hover:border-cyan-400/20 hover:bg-slate-900/95 hover:text-white"
                        >
                          <span>{item}</span>
                          {index === 1 && (
                            <span className="rounded-full bg-cyan-400/15 px-2 py-0.5 text-[11px] uppercase tracking-[0.3em] text-cyan-200">3</span>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/80 p-4 text-sm text-slate-400">
                      <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.32em] text-slate-500">
                        <span>Team pulse</span>
                        <span className="text-emerald-300">+14%</span>
                      </div>
                      <div className="grid gap-3">
                        <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                          <span>Alerts</span>
                          <span className="text-slate-200">12</span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                          <span>Signals</span>
                          <span className="text-slate-200">8</span>
                        </div>
                      </div>
                    </div>
                  </aside>

                  <main className="space-y-6">
                    <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Executive view</p>
                          <p className="mt-2 text-2xl font-semibold text-white">Team signal momentum</p>
                        </div>
                        <div className="rounded-3xl bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                          This week
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-3">
                        {tabs.map((tab) => (
                          <motion.button
                            key={tab.key}
                            type="button"
                            onClick={() => setActiveTab(tab.key)}
                            whileHover={{ y: -1 }}
                            className={`rounded-full border px-4 py-2 text-sm transition ${
                              activeTab === tab.key
                                ? "border-cyan-400/35 bg-cyan-400/12 text-white"
                                : "border-white/10 bg-transparent text-slate-400 hover:border-cyan-400/20 hover:text-white"
                            }`}
                          >
                            {tab.label}
                          </motion.button>
                        ))}
                      </div>

                      <div className="mt-6 overflow-hidden rounded-[1.5rem] bg-slate-900 px-4 py-5 sm:px-5">
                        <div className="relative h-56 overflow-hidden rounded-[1.5rem] bg-[#061217] p-4">
                          <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-cyan-400/10 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 to-transparent" />
                          <div className="relative h-full">
                            <div className="absolute inset-x-0 top-6 flex items-end justify-between gap-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                              {chartLabels.map((label) => (
                                <span key={label} className="w-full text-center">{label}</span>
                              ))}
                            </div>
                            <div className="absolute inset-x-0 bottom-4 flex items-end justify-between gap-3 px-2">
                              {chartData[activeTab].map((value, index) => {
                                const height = 22 + (value / 1.2);
                                return (
                                  <div key={index} className="relative w-full">
                                    <div className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-slate-800" />
                                    <div
                                      className="mx-auto h-full w-full max-w-[18px] rounded-full bg-gradient-to-t from-cyan-400/90 to-slate-500/20 shadow-[0_12px_35px_-22px_rgba(56,189,248,0.8)]"
                                      style={{ height: `${height}%` }}
                                    />
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="absolute left-4 top-6 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.35)]" />
                        </div>
                        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-sm text-slate-400">
                          <span>{activeTab} overview from the signal engine.</span>
                          <span className="text-cyan-300">+{chartData[activeTab].slice(-1)[0] - chartData[activeTab][0]}% momentum</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {overviewMetrics.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-4 transition hover:border-cyan-400/25 hover:bg-slate-900/95"
                        >
                          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{stat.label}</p>
                          <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
                          <p className="mt-2 text-sm text-emerald-300">{stat.accent}</p>
                        </div>
                      ))}
                    </div>
                  </main>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex items-center justify-between text-sm text-slate-400">
                      <span>Insights</span>
                      <span className="rounded-full bg-cyan-400/12 px-3 py-1 text-xs uppercase tracking-[0.32em] text-cyan-200">AI</span>
                    </div>
                    <div className="mt-4 space-y-4 text-sm text-slate-300">
                      <p>High-value accounts showing increased engagement in the last 8 hours.</p>
                      <p className="rounded-3xl bg-slate-900/80 p-3 text-slate-200">Next best action: prioritize the top 12 signals from outbound sequences.</p>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Roster</p>
                        <p className="mt-2 text-2xl font-semibold text-white">12 active users</p>
                      </div>
                      <div className="flex -space-x-3">
                        {["MC","AR","NO","JS"].map((initial) => (
                          <div key={initial} className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-white shadow-lg shadow-black/20">
                            {initial}
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-400">Engagement pulse and team readiness for the next release cycle.</p>
                  </div>
                </div>

                <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>Live activity</span>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.32em] text-slate-300">Live</span>
                  </div>
                  <div className="mt-5 space-y-4">
                    {activityFeed.map((item) => (
                      <div key={item.value} className="rounded-3xl border border-white/10 bg-slate-900/60 px-4 py-3 transition hover:border-cyan-400/25 hover:bg-slate-900/80">
                        <div className="flex items-center justify-between gap-3">
                          <div className="space-y-1">
                            <p className="text-sm font-semibold text-white">{item.label}</p>
                            <p className="text-sm text-slate-400">{item.value}</p>
                          </div>
                          <span className="text-xs text-slate-500">{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pb-2">
                  <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/85 px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
                      <span>Focused projects</span>
                      <span className="text-cyan-300">3 high-priority items</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      {detailRows.map((row) => (
                        <div key={row.project} className="flex items-center justify-between rounded-3xl bg-slate-900/60 px-4 py-3 transition hover:bg-slate-900/80">
                          <div>
                            <p className="font-medium text-white">{row.project}</p>
                            <p className="text-sm text-slate-400">{row.owner} · {row.progress} complete</p>
                          </div>
                          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">{row.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
