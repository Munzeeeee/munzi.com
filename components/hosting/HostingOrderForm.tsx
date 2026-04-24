"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { hostingPlans } from "@/content/hosting-plans";

export function HostingOrderForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    plan: "",
    domain: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/hosting-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-zinc-950 mb-2">Order received!</h3>
        <p className="text-zinc-500">We'll set up your hosting within 24 hours and send you login details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} id="order" className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">Full name *</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">Email *</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            placeholder="you@example.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">WhatsApp</label>
          <input
            name="whatsapp"
            type="tel"
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
            placeholder="+971 50 000 0000"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1.5">Hosting plan *</label>
          <select
            name="plan"
            required
            value={form.plan}
            onChange={handleChange}
            className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition bg-white"
          >
            <option value="">Select a plan</option>
            {hostingPlans.map((p) => (
              <option key={p.id} value={p.id}>{p.name} — ${p.price}/month</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1.5">Your domain name</label>
        <input
          name="domain"
          value={form.domain}
          onChange={handleChange}
          className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
          placeholder="yourdomain.com (leave blank if you need a new one)"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 mb-1.5">Additional notes</label>
        <textarea
          name="notes"
          rows={3}
          value={form.notes}
          onChange={handleChange}
          className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition resize-none"
          placeholder="Anything else we should know?"
        />
      </div>
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please WhatsApp us directly.
        </div>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full justify-center"
      >
        <Send className="w-4 h-4" />
        {status === "loading" ? "Sending..." : "Place Order"}
      </button>
    </form>
  );
}
