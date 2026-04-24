import { Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Sarah Al-Mansouri",
    role: "Founder, Bloom Skincare UAE",
    text: "Munzeer built our Shopify store in 10 days and it looked better than anything I'd seen at twice the price. They stayed in touch throughout and fixed every small thing without a fuss. Sales are up 40% since launch.",
    rating: 5,
    service: "Shopify Store",
  },
  {
    name: "James Okafor",
    role: "Marketing Manager, TechFlow Ltd",
    text: "We'd been burning budget on Google Ads with no results. Munzeer audited our account, restructured everything, and within a month our cost-per-lead dropped by 60%. They know what they're doing.",
    rating: 5,
    service: "Google Ads",
  },
  {
    name: "Fatima Zahra",
    role: "CEO, Zahra Consulting",
    text: "The AI chatbot they built for our website handles 80% of customer queries automatically now. Setup was smooth, Arabic support works perfectly, and the WhatsApp handoff feature is exactly what we needed.",
    rating: 5,
    service: "AI Chatbot",
  },
];

export function Testimonials() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Client reviews"
        heading="What our clients say"
        subheading="Real results from real businesses. We let the work speak for itself."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="card flex flex-col">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-zinc-600 text-sm leading-relaxed flex-1 mb-5">
              "{t.text}"
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-zinc-950 text-sm">{t.name}</p>
                <p className="text-xs text-zinc-400">{t.role}</p>
              </div>
              <span className="ml-auto text-xs font-medium text-violet-600 bg-violet-50 px-2 py-1 rounded-full whitespace-nowrap">
                {t.service}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
