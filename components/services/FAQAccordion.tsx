"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/shared/SectionHeader";
import type { Service } from "@/content/services";

interface FAQAccordionProps {
  faqs: Service["faqs"];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <SectionHeader
        eyebrow="FAQs"
        heading="Common questions"
        subheading="Everything you need to know before getting started."
      />
      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-zinc-200 rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-zinc-50 transition-colors"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-semibold text-zinc-950 text-sm pr-4">{faq.q}</span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200",
                  open === i && "rotate-180"
                )}
              />
            </button>
            {open === i && (
              <div className="px-5 pb-4 text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
