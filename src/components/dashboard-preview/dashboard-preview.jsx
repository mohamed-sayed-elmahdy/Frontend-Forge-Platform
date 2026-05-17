
"use client"

import { motion } from "motion/react"
import {
  BookOpen,
  BrainCircuit,
  ClipboardList,
  FileText,
  Map,
  GraduationCap,
  Trophy,
  NotebookPen,
  Flame,
  LayoutDashboard,
  Sparkles,
  Settings,
  ChevronRight,
  PanelLeft,
  SunMedium,
} from "lucide-react"

const sidebarItems = [
  { label: "My Feed", icon: LayoutDashboard, color: "#3B82F6" },
  { label: "Mock Interviews", icon: BrainCircuit, color: "#8B5CF6" },
  { label: "Interviews", icon: ClipboardList, color: "#06B6D4" },
  { label: "Resume Review", icon: FileText, color: "#F97316" },
  { label: "Roadmaps", icon: Map, color: "#22C55E" },
  { label: "Tutorials", icon: GraduationCap, color: "#EAB308" },
  { label: "How To", icon: Sparkles, color: "#F97316" },
  { label: "Tips & Tricks", icon: Sparkles, color: "#EAB308" },
  { label: "Cheat Sheets", icon: BookOpen, color: "#06B6D4" },
  { label: "Best Practices", icon: Sparkles, color: "#10B981" },
  { label: "Troubleshooting", icon: Sparkles, color: "#EF4444" },
  { label: "Challenges", icon: Trophy, color: "#F59E0B" },
  { label: "Notes", icon: NotebookPen, color: "#6366F1" },
  { label: "Bookmarks", icon: Flame, color: "#FB7185" },
  { label: "Blogs", icon: BookOpen, color: "#0EA5E9" },
  { label: "Documentation", icon: BookOpen, color: "#A855F7" },
  { label: "AI Assistant", icon: BrainCircuit, color: "#A855F7" },
  { label: "Settings", icon: Settings, color: "#9CA3AF" },
]

const topCards = [
  {
    title: "Interview Readiness",
    value: "82%",
    subtitle: "React + TypeScript",
  },
  {
    title: "Learning Streak",
    value: "12 Days",
    subtitle: "Consistency is growing",
  },
  {
    title: "AI Feedback",
    value: "Strong",
    subtitle: "Communication improved",
  },
]

const activities = [
  "Completed React Hooks mock interview",
  "Saved Advanced TypeScript notes",
  "Finished 3 JavaScript challenges",
  "AI Assistant suggested Next.js roadmap",
]

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden  px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0  " />

      <div className="mx-auto max-w-[1600px]">
        <div className="mb-12 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium tracking-wide text-zinc-300 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
            Interactive dashboard preview
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Your developer growth system.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-500">
            Practice interviews, follow structured roadmaps, track learning progress,
            and improve faster with AI-powered guidance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
relative overflow-hidden rounded-[32px]
border-[12px] border-white/10
bg-[#050505]/95
shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(0,0,0,0.55)]
backdrop-blur-2xl
before:pointer-events-none
before:absolute
before:inset-0
before:rounded-[32px]
before:border
before:border-white/[0.06]
before:bg-white/[0.015]
before:[mask-image:linear-gradient(to_bottom,white,transparent)]
"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_30%)]" />

          <div className="relative flex h-[860px] overflow-hidden">
            {/* Sidebar */}
            <aside className="w-[240px] shrink-0 border-r border-white/5 bg-white/[0.02]">
              <div className="flex h-full flex-col">
                <div className="border-b border-white/5 px-5 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-[#2563EB] text-white shadow-lg shadow-blue-500/20">
                      <Sparkles size={18} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white">Acme Inc</p>
                      <p className="text-xs text-zinc-500">Enterprise</p>
                    </div>
                  </div>
                </div>

                <div className="px-5 pt-5">
                  <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-600">
                    Platform
                  </p>
                </div>

                <div className="custom-scrollbar flex-1 overflow-y-auto px-3 pb-6">
                  <nav className="space-y-1">
                    {sidebarItems.map((item, index) => {
                      const Icon = item.icon

                      return (
                        <motion.button
                          key={item.label}
                          whileHover={{ x: 2 }}
                          className={`group flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-all duration-300 ${index === 0
                              ? "bg-white/[0.04] text-white"
                              : "text-zinc-400 hover:bg-white/[0.03] hover:text-white"
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon
                              size={16}
                              style={{ color: item.color }}
                              className="shrink-0"
                            />

                            <span className="text-[14px] font-medium tracking-tight">
                              {item.label}
                            </span>
                          </div>

                          <ChevronRight
                            size={14}
                            className="opacity-40 transition-opacity group-hover:opacity-100"
                          />
                        </motion.button>
                      )
                    })}
                  </nav>
                </div>

                <div className="border-t border-white/5 p-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-3">
                    <img
                      src="https://i.pravatar.cc/100"
                      alt="avatar"
                      className="size-10 rounded-xl object-cover"
                    />

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-white">
                        Mohamed Sayed
                      </p>

                      <p className="truncate text-xs text-zinc-500">
                        m@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-hidden bg-black">
              {/* Topbar */}
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <PanelLeft size={16} />

                  <div className="h-4 w-px bg-white/10" />

                  <span className="text-zinc-300">Your Feed</span>

                  <ChevronRight size={14} />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2 py-1">
                    <div className="h-5 w-5 rounded-full bg-white" />
                    <span className="text-xs font-semibold text-white">EN</span>
                  </div>

                  <SunMedium size={18} className="text-zinc-400" />
                </div>
              </div>

              <div className="h-[calc(100%-73px)] overflow-hidden p-5">
                <div className="mb-6">
                  <h3 className="text-[42px] font-semibold tracking-tight text-white">
                    Hello Mohamed, User
                  </h3>
                </div>

                {/* Top Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {topCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className="group relative h-[280px] overflow-hidden rounded-[24px] border border-white/5 bg-[#070707] p-6"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative flex h-full flex-col justify-between">
                        <div>
                          <p className="text-sm text-zinc-500">{card.title}</p>

                          <h4 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                            {card.value}
                          </h4>
                        </div>

                        <div>
                          <div className="mb-4 h-[6px] overflow-hidden rounded-full bg-white/5">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${65 + index * 10}%` }}
                              transition={{ duration: 1 }}
                              className="h-full rounded-full bg-white"
                            />
                          </div>

                          <p className="text-sm text-zinc-500">{card.subtitle}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Large Bottom Area */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative mt-4 h-[420px] overflow-hidden rounded-[28px] border border-white/5 bg-[#070707]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.04),transparent_35%)]" />

                  <div className="relative grid h-full grid-cols-[1.3fr_0.7fr] gap-6 p-7">
                    {/* Left Side */}
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-zinc-500">
                              Frontend Engineer Roadmap
                            </p>

                            <h4 className="mt-2 text-2xl font-semibold text-white">
                              Continue learning
                            </h4>
                          </div>

                          <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
                            64% Complete
                          </div>
                        </div>

                        <div className="mt-10 space-y-5">
                          {[72, 54, 88, 40].map((value, index) => (
                            <div key={index}>
                              <div className="mb-2 flex items-center justify-between text-sm">
                                <span className="text-zinc-400">
                                  {[
                                    "React Architecture",
                                    "TypeScript",
                                    "Next.js App Router",
                                    "System Design",
                                  ][index]}
                                </span>

                                <span className="text-zinc-500">{value}%</span>
                              </div>

                              <div className="h-[7px] overflow-hidden rounded-full bg-white/5">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${value}%` }}
                                  transition={{ duration: 1, delay: index * 0.1 }}
                                  className="h-full rounded-full bg-white"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom floating stats */}
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          ["12", "Day Streak"],
                          ["34", "Mock Interviews"],
                          ["67", "Challenges Solved"],
                        ].map((item) => (
                          <div
                            key={item[1]}
                            className="rounded-2xl border border-white/5 bg-white/[0.03] p-4"
                          >
                            <p className="text-2xl font-semibold text-white">
                              {item[0]}
                            </p>

                            <p className="mt-1 text-sm text-zinc-500">
                              {item[1]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Activity Panel */}
                    <div className="rounded-[24px] border border-white/5 bg-black/40 p-5 backdrop-blur-xl">
                      <div className="mb-6 flex items-center justify-between">
                        <div>
                          <p className="text-sm text-zinc-500">Activity</p>

                          <h5 className="mt-1 text-lg font-semibold text-white">
                            Recent learning
                          </h5>
                        </div>

                        <div className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                          <Sparkles size={16} className="text-white" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        {activities.map((activity, index) => (
                          <motion.div
                            key={activity}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.08 }}
                            whileHover={{ x: 2 }}
                            className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 transition-colors hover:bg-white/[0.05]"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-1 h-2 w-2 rounded-full bg-white" />

                              <div>
                                <p className="text-sm leading-6 text-zinc-200">
                                  {activity}
                                </p>

                                <p className="mt-1 text-xs text-zinc-500">
                                  Updated just now
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-6 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-zinc-500">AI Insight</p>

                            <h6 className="mt-2 text-lg font-medium text-white">
                              Your React interview performance improved by 18% this week.
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </main>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

