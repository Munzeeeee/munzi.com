"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface QuoteFormProps {
  serviceName?: string;
}

const budgetOptions = [
  "$0–500",
  "$500–1,000",
  "$1,000–3,000",
  "$3,000+",
  "Not sure",
];

const timelineOptions = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "Just exploring",
];

export function QuoteForm({ serviceName = "" }: QuoteFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: serviceName,
    budget: "",
    timeline: "",
    details: "",
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
      const res = await fetch("/api/quote", {
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
      <div id="quote" className="section">
        <div className="max-w-xl mx-auto text-center py-12">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-zinc-950 mb-2">Quote request received!</h3>
          <p className="text-zinc-500">
            We'll review your requirements and get back to you within 2 hours. Check your inbox for a confirmation.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="quote" className="section">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Get started
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950">
            Request a quote
          </h2>
          <p className="mt-2 text-zinc-500">
            Tell us what you need and we'll come back with a clear scope and price.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="name">
                Full name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="email">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="whatsapp">
                WhatsApp number
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition"
                placeholder="+971 50 000 0000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="service">
                Service <span className="text-red-500">*</span>
              </label>
              <input
                id="service"
                name="service"
                type="text"
                required
                value={form.service}
                onChange={handleChange}
                readOnly={!!serviceName}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition disabled:bg-zinc-50 disabled:text-zinc-500"
                placeholder="Which service do you need?"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="budget">
                Budget range <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                required
                value={form.budget}
                onChange={handleChange}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-white"
              >
                <option value="">Select budget range</option>
                {budgetOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="timeline">
                Timeline <span className="text-red-500">*</span>
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                value={form.timeline}
                onChange={handleChange}
                className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition bg-white"
              >
                <option value="">When do you need this?</option>
                {timelineOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1.5" htmlFor="details">
              Project details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="details"
              name="details"
              required
              rows={4}
              value={form.details}
              onChange={handleChange}
              className="w-full border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition resize-none"
              placeholder="Tell us about your business, what you need, and any specific requirements..."
            />
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
              <AlertCircle className="w-4 h-4 shrink-0" />
              Something went wrong. Please try again or WhatsApp us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                  <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Quote Request
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
