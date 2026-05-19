"use client";
import React, { useState } from "react";
import { BrainCircuit, Users, Bot, Calendar, Clock } from "lucide-react";

export default function MockInterviewsPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: "human",
      title: "Interview with Human",
      description: "Get realistic feedback from experienced developers",
      icon: Users,
      color: "text-violet-500",
      benefits: ["Real-world questions", "Personalized feedback", "Video interview", "Certificate"],
      price: "$49/session",
      duration: "45 minutes",
    },
    {
      id: "ai",
      title: "AI Mock Interview",
      description: "Practice 24/7 with AI-powered interviewer",
      icon: Bot,
      color: "text-violet-400",
      benefits: ["Instant feedback", "Unlimited attempts", "Multiple topics", "Progress tracking"],
      price: "Free/Premium",
      duration: "30 minutes",
    },
  ];

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      <header className="flex items-center gap-3">
        <BrainCircuit className="text-violet-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">Mock Interviews</h1>
          <p className="text-muted-foreground">Prepare for your next big opportunity</p>
        </div>
      </header>

      {/* Interview Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {options.map((option) => (
          <div
            key={option.id}
            className={`rounded-xl border p-6 cursor-pointer transition ${
              selectedOption === option.id
                ? "border-blue-500 bg-blue-500/5"
                : "hover:border-gray-400 bg-card"
            }`}
            onClick={() => setSelectedOption(option.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <option.icon className={`${option.color}`} size={28} />
              <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">{option.price}</span>
            </div>
            <h2 className="text-xl font-bold mb-2">{option.title}</h2>
            <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} />
                <span>{option.duration}</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {option.benefits.map((benefit, i) => (
                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            <button
              className={`w-full py-2 rounded font-medium transition ${
                selectedOption === option.id
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              {selectedOption === option.id ? "Continue" : "Select"}
            </button>
          </div>
        ))}
      </div>

      {/* Booking Section */}
      {selectedOption && (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Schedule Your Interview</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Select Date</label>
              <input type="date" className="w-full p-2 rounded border bg-muted/50 text-foreground" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Select Time</label>
                <select className="w-full p-2 rounded border bg-muted/50 text-foreground">
                  <option>9:00 AM</option>
                  <option>10:00 AM</option>
                  <option>2:00 PM</option>
                  <option>4:00 PM</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Topic</label>
                <select className="w-full p-2 rounded border bg-muted/50 text-foreground">
                  <option>React</option>
                  <option>JavaScript</option>
                  <option>Next.js</option>
                  <option>TypeScript</option>
                </select>
              </div>
            </div>
            <button className="w-full py-3 rounded font-medium bg-blue-500 text-white hover:bg-blue-600 transition">
              Book Interview
            </button>
          </div>
        </div>
      )}

      {/* Upcoming Interviews */}
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Your Interviews</h2>
        <div className="space-y-3">
          {[
            { date: "May 25, 2026", time: "2:00 PM", topic: "React Hooks", type: "AI" },
            { date: "May 28, 2026", time: "10:00 AM", topic: "Next.js Performance", type: "Human" },
          ].map((interview, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
              <div>
                <p className="font-medium">{interview.topic}</p>
                <div className="flex gap-3 mt-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {interview.date}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {interview.time}</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">{interview.type}</span>
                </div>
              </div>
              <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition">Join</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}