"use client";

import Link from "next/link";
import { Check, Globe, Star, Crown, MessageCircle, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

const WA = "971569793494";

const packages = [
  {
    id: "basic",
    name: "Basic",
    price: "$150",
    period: "one-time",
    tagline: "Everything a new business needs to get online fast.",
    icon: Globe,
    iconBg: "bg-teal-500/20",
    iconColor: "text-teal-400",
    borderColor: "border-zinc-800 hover:border-teal-800/60",
    checkColor: "text-teal-400",
    waMsg:
      "Hi%2C+I%27d+like+to+know+more+about+the+Basic+Website+Package+%28%24150%29",
    features: [
      { text: "4–5 pages — Home, About, Services, Contact + 2 bonus pages", free: false },
      { text: "WhatsApp integration", free: false },
      { text: "Enquiry form", free: false },
      { text: "1-year domain registration", free: true },
      { text: "1-year hosting", free: true },
      { text: "3 business emails (1 GB each)", free: false },
    ],
  },
  {
    id: "standard",
    name: "Standard",
    price: "$300",
    period: "one-time",
    tagline: "Growth tools built in — drive traffic, show products, sell via WhatsApp.",
    icon: Star,
    highlight: true,
    waMsg:
      "Hi%2C+I%27d+like+to+know+more+about+the+Standard+Website+Package+%28%24300%29",
    features: [
      { text: "Everything in Basic Package", free: false },
      { text: "Google Business Profile setup", free: false },
      { text: "5 blog articles (SEO optimised)", free: false },
      { text: "Product upload — up to 20 products", free: false },
      { text: '"Buy on WhatsApp" option', free: false },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "Custom",
    period: "quote",
    tagline: "Full-featured site for ambitious businesses that need every tool.",
    icon: Crown,
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
    borderColor: "border-zinc-800 hover:border-amber-800/60",
    checkColor: "text-amber-400",
    waMsg:
      "Hi%2C+I%27d+like+to+discuss+the+Premium+Website+Package",
    features: [
      { text: "Everything in Standard Package", free: false },
      { text: "Payment gateway integration", free: false },
      { text: "AI Chatbot integration", free: false },
      { text: "10–15 page website", free: false },
      { text: "Booking system integration", free: false },
      { text: "Advanced SEO setup", free: false },
    ],
  },
];

export function WebsitePackages() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ccircle cx='24' cy='24' r='1.5' fill='%23ffffff'/%3E%3C/svg%3E")`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-teal-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Website Packages
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            A complete website —{" "}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              ready to launch
            </span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Domain, hosting, emails, and design all included. No hidden fees, no tech headaches.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.id}
                className={cn(
                  "relative flex flex-col rounded-2xl transition-all duration-300",
                  pkg.highlight
                    ? "bg-gradient-to-br from-violet-600 via-violet-700 to-violet-900 p-8 shadow-2xl shadow-violet-950/60 ring-1 ring-violet-400/40 lg:-my-5 z-10"
                    : `bg-zinc-900/80 border p-7 ${pkg.borderColor}`
                )}
              >
                {/* Popular badge */}
                {pkg.highlight && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-white text-violet-700 text-xs font-bold px-4 py-1.5 rounded-full shadow-xl">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon + name + price */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={cn(
                      "w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5",
                      pkg.highlight ? "bg-white/20" : pkg.iconBg
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        pkg.highlight ? "text-white" : pkg.iconColor
                      )}
                    />
                  </div>
                  <div>
                    <p
                      className={cn(
                        "text-xs font-bold uppercase tracking-widest mb-0.5",
                        pkg.highlight ? "text-violet-300" : "text-zinc-500"
                      )}
                    >
                      {pkg.name}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span
                        className={cn(
                          "text-4xl font-bold tracking-tight",
                          pkg.highlight ? "text-white" : "text-zinc-100"
                        )}
                      >
                        {pkg.price}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-medium",
                          pkg.highlight ? "text-violet-300" : "text-zinc-500"
                        )}
                      >
                        {pkg.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p
                  className={cn(
                    "text-sm leading-relaxed mb-7 pb-7 border-b",
                    pkg.highlight
                      ? "text-violet-200 border-white/10"
                      : "text-zinc-400 border-zinc-800"
                  )}
                >
                  {pkg.tagline}
                </p>

                {/* Features */}
                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                          pkg.highlight ? "bg-white/15" : "bg-zinc-800"
                        )}
                      >
                        <Check
                          className={cn(
                            "w-3 h-3",
                            pkg.highlight ? "text-white" : pkg.checkColor
                          )}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        className={cn(
                          "text-sm",
                          pkg.highlight ? "text-violet-100" : "text-zinc-300"
                        )}
                      >
                        {f.free ? (
                          <>
                            <span className="inline-flex items-center gap-1 text-green-400 font-semibold text-xs mr-1.5 bg-green-950/60 border border-green-800/50 px-1.5 py-0.5 rounded-md">
                              <Gift className="w-2.5 h-2.5" />
                              FREE
                            </span>
                            {f.text}
                          </>
                        ) : (
                          f.text
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={`https://wa.me/${WA}?text=${pkg.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95",
                    pkg.highlight
                      ? "bg-white text-violet-700 hover:bg-violet-50 shadow-lg shadow-white/10"
                      : "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-950/50"
                  )}
                >
                  <MessageCircle className="w-4 h-4" />
                  {pkg.price === "Custom" ? "Get a Custom Quote" : "Order on WhatsApp"}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-between gap-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl px-8 py-6">
          <div>
            <p className="text-white font-semibold text-lg">Not sure which package suits you?</p>
            <p className="text-zinc-400 text-sm mt-1">
              Tell us about your business and we&apos;ll recommend the right fit — no pressure.
            </p>
          </div>
          <Link
            href={`https://wa.me/${WA}?text=Hi%2C+I%27d+like+some+advice+on+which+website+package+suits+my+business`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors shadow-lg shadow-green-950/40 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
