import React from "react";
import { Settings2, User, Eye, Bell, CreditCard } from "lucide-react";

export default function SettingsPage() {
  const settingsSections = [
    {
      title: "General",
      description: "Manage profile and account information",
      icon: User,
      href: "/dashboard/settings/general",
      color: "text-gray-500",
    },
    {
      title: "Appearance",
      description: "Customize theme and display preferences",
      icon: Eye,
      href: "/dashboard/settings/appearance",
      color: "text-yellow-500",
    },
    {
      title: "Notifications",
      description: "Control how you receive alerts and updates",
      icon: Bell,
      href: "/dashboard/settings/notifications",
      color: "text-sky-500",
    },
    {
      title: "Billing",
      description: "Manage subscription and payment methods",
      icon: CreditCard,
      href: "/dashboard/settings/billing",
      color: "text-emerald-500",
    },
  ];

  return (
    <section className="p-8 min-h-screen bg-background text-foreground space-y-8">
      <header className="flex items-center gap-3">
        <Settings2 className="text-gray-500" size={32} />
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Manage your account and preferences</p>
        </div>
      </header>

      {/* Settings Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section, i) => {
          const Icon = section.icon;
          return (
            <a
              key={i}
              href={section.href}
              className="rounded-xl border bg-card p-6 hover:shadow-md transition cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <Icon className={`${section.color} group-hover:scale-110 transition`} size={32} />
                <span className="px-2 py-1 rounded bg-muted text-xs font-medium">Configure</span>
              </div>
              <h2 className="font-bold text-lg mb-2">{section.title}</h2>
              <p className="text-sm text-muted-foreground">{section.description}</p>
            </a>
          );
        })}
      </div>

      {/* Preferences */}
      <div className="rounded-xl border bg-card p-8 space-y-6">
        <h2 className="text-2xl font-bold">Quick Preferences</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates and reminders via email</p>
            </div>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-medium">Daily Digest</p>
              <p className="text-sm text-muted-foreground">Get a daily summary of new content</p>
            </div>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-medium">Dark Mode</p>
              <p className="text-sm text-muted-foreground">Use dark theme by default</p>
            </div>
            <input type="checkbox" className="w-5 h-5" defaultChecked />
          </div>

          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">Secure your account with 2FA</p>
            </div>
            <input type="checkbox" className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-8">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Danger Zone</h2>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Delete Account</p>
            <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
          </div>
          <button className="px-4 py-2 rounded bg-red-500/20 text-red-500 hover:bg-red-500/30 transition font-medium">
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}