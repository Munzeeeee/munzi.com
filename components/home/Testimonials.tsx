import { Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Sarah Al-Mansouri",
    designation: "Founder",
    country: "🇦🇪 UAE",
    text: "Munzeer built our Shopify store in 10 days and it looked better than anything I'd seen at twice the price. They stayed in touch throughout and fixed every small thing without a fuss. Sales are up 40% since launch.",
    rating: 5,
    service: "Shopify Store",
  },
  {
    name: "James Okafor",
    designation: "Marketing Manager",
    country: "🇬🇧 UK",
    text: "We'd been burning budget on Google Ads with no results. Munzeer audited our account, restructured everything, and within a month our cost-per-lead dropped by 60%. They know what they're doing.",
    rating: 5,
    service: "Google Ads",
  },
  {
    name: "Fatima Zahra",
    designation: "CEO",
    country: "🇸🇦 Saudi Arabia",
    text: "The AI chatbot they built for our website handles 80% of customer queries automatically now. Setup was smooth, Arabic support works perfectly, and the WhatsApp handoff feature is exactly what we needed.",
    rating: 5,
    service: "AI Chatbot",
  },
  {
    name: "Ravi Menon",
    designation: "E-commerce Director",
    country: "🇮🇳 India",
    text: "Our Amazon listings were buried on page 5. After Munzeer's optimisation they moved to page 1 within 3 weeks. Revenue from Amazon doubled in the first month. Absolutely worth every dirham.",
    rating: 5,
    service: "Amazon Listing",
  },
  {
    name: "Layla Hassan",
    designation: "Brand Manager",
    country: "🇦🇪 UAE",
    text: "We got the Google Review NFC card and it's a game-changer. Customers tap, leave a review, done. Our rating went from 3.8 to 4.7 in two months. Every business with a physical location needs this.",
    rating: 5,
    service: "Google Review Card",
  },
  {
    name: "Marco Pellegrini",
    designation: "Creative Director",
    country: "🇮🇹 Italy",
    text: "The digital business card is stunning. I tap phones with someone and they instantly have my full profile, portfolio, and links. No more paper cards. It's the kind of first impression that sticks.",
    rating: 5,
    service: "Digital Business Card",
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="card flex flex-col">
            {/* Stars + service tag */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2 py-1 rounded-full whitespace-nowrap">
                {t.service}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="text-zinc-600 text-sm leading-relaxed flex-1 mb-5">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-400 to-blue-400 flex items-center justify-center text-white font-semibold text-sm shrink-0">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-zinc-950 text-sm leading-tight">{t.name}</p>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {t.designation} · {t.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
