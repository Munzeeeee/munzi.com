import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  TrendingUp,
  Zap,
  ShoppingCart,
  Cpu,
  ArrowRight,
  Star,
  Users,
  Briefcase,
  Award,
} from "lucide-react";
import { serviceCategories } from "@/content/services";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export const metadata: Metadata = {
  title: "Services — Web, Marketing, AI & Smart Business Tools",
  description:
    "Explore all 20+ services from Munzeer.com — web development, digital marketing, AI automation, marketplace listings, and smart business tools.",
};

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "web-development": Globe,
  "digital-marketing": TrendingUp,
  "smart-tools": Zap,
  "marketplace-listings": ShoppingCart,
  "tech-build": Cpu,
};

const categoryColors = {
  "web-development": { text: "text-violet-600", bg: "bg-violet-50", border: "border-violet-200", pill: "bg-violet-100 text-violet-700" },
  "digital-marketing": { text: "text-teal-600", bg: "bg-teal-50", border: "border-teal-200", pill: "bg-teal-100 text-teal-700" },
  "smart-tools": { text: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200", pill: "bg-amber-100 text-amber-700" },
  "marketplace-listings": { text: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200", pill: "bg-orange-100 text-orange-700" },
  "tech-build": { text: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", pill: "bg-blue-100 text-blue-700" },
} as Record<string, { text: string; bg: string; border: string; pill: string }>;

const stats = [
  { value: 20, suffix: "+", label: "Services", icon: Briefcase },
  { value: 50, suffix: "+", label: "Projects Delivered", icon: Award },
  { value: 15, suffix: "+", label: "Countries Served", icon: Users },
  { value: 5, suffix: "★", label: "Average Rating", icon: Star },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 pt-12 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            All Services
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
            Everything your business needs
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            20+ services across 5 categories. One team, one point of contact, zero agency runaround.
          </p>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-zinc-900 border border-zinc-800 rounded-2xl py-4 px-3">
                <div className="text-2xl font-bold text-white">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section">
        <div className="space-y-16">
          {serviceCategories.map((cat) => {
            const Icon = categoryIcons[cat.slug];
            const colors = categoryColors[cat.slug];
            return (
              <div key={cat.slug}>
                {/* Category header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${colors.bg}`}>
                      {Icon && <Icon className={`w-5 h-5 ${colors.text}`} />}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-zinc-950">{cat.name}</h2>
                      <p className="text-sm text-zinc-500">{cat.description}</p>
                    </div>
                  </div>
                  <Link
                    href={`/services/${cat.slug}`}
                    className={`flex items-center gap-1.5 text-sm font-semibold ${colors.text} whitespace-nowrap`}
                  >
                    Explore {cat.name}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Service pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${cat.slug}/${svc.slug}`}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all hover:shadow-sm hover:-translate-y-0.5 ${colors.border} ${colors.bg} ${colors.text}`}
                    >
                      {svc.name}
                      <ArrowRight className="w-3 h-3 opacity-60" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-zinc-950 mb-3">Not sure where to start?</h2>
          <p className="text-zinc-500 mb-8">
            Book a free 30-minute strategy call. We'll listen, ask the right questions, and recommend exactly what will move the needle for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+discuss+which+services+I+need`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
