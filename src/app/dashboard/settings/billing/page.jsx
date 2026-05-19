import React from "react";
import { CreditCard } from "lucide-react";

export default function SettingsBillingPage() {
  return (
    <section className="p-8 min-h-[60vh] flex flex-col gap-8 bg-background text-foreground">
      <header className="flex items-center gap-3">
        <CreditCard className="text-emerald-400" />
        <h1 className="text-2xl font-bold">Billing</h1>
      </header>
      <div className="rounded-xl border bg-card p-6 shadow-sm max-w-2xl">
        <p className="mb-4 text-muted-foreground">Manage your subscription, invoices, and payment methods securely.</p>
        <button className="px-4 py-2 rounded bg-emerald-400 text-white font-medium hover:bg-emerald-500 transition">Manage Billing</button>
      </div>
    </section>
  );
}
