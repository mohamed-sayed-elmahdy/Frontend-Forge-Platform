import React from "react";
import { User } from "lucide-react";

export default function SettingsGeneralPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <User className="text-gray-400" />
        <h1 className="text-2xl font-bold">General</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Update profile, email, and basic account settings.</p>
        <button className="px-4 py-2 rounded bg-gray-400 text-white font-medium hover:bg-gray-500 transition">Edit Profile</button>
      </div>
    </section>
  );
}
