import Link from "next/link";
import { Globe, TrendingUp, Zap, ShoppingCart, Cpu, Puzzle, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const categories = [
  {
    name: "Web Development",
    slug: "web-development",
    description: "Shopify, WooCommerce, and company websites built to convert visitors into customers.",
    icon: Globe,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
    services: ["Shopify Store", "WooCommerce", "Company Website"],
  },
  {
    name: "Digital Marketing",
    slug: "digital-marketing",
    description: "Google Ads, Meta, TikTok, LinkedIn campaigns + organic SEO that actually delivers.",
    icon: TrendingUp,
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    services: ["Google Ads", "Meta Ads", "TikTok + LinkedIn", "SEO"],
  },
  {
    name: "Smart Business Tools",
    slug: "smart-tools",
    description: "NFC cards, QR codes, digital business cards, and AI chatbots for modern businesses.",
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    services: ["Google Review Card", "Digital Business Card", "QR Code", "AI Chatbot"],
  },
  {
    name: "Marketplace Listings",
    slug: "marketplace-listings",
    description: "Amazon and Noon listing optimisation to rank higher and sell more.",
    icon: ShoppingCart,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-100",
    services: ["Amazon Listing", "Noon Listing"],
  },
  {
    name: "Tech Build + AI",
    slug: "tech-build",
    description: "AI automation, MVP development, and custom SaaS products from idea to launch.",
    icon: Cpu,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    services: ["AI Automation", "MVP Development", "SaaS Products"],
  },
  {
    name: "Web Tools & Plugins",
    slug: "web-tools",
    description: "Chrome extensions, WordPress plugins, REST APIs, and custom web tools built to spec.",
    icon: Puzzle,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    services: ["Chrome Extension", "WordPress Plugin", "REST API", "Web Tool"],
  },
];

export function ServicesGrid() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="What we do"
        heading="Everything your business needs online"
        subheading="25+ services across 6 categories. One team, one invoice, zero hand-off headaches."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/services/${cat.slug}`}
            className={`card group hover:-translate-y-1 transition-all duration-200 border ${cat.border}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${cat.bg} shrink-0`}>
                <cat.icon className={`w-5 h-5 ${cat.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-zinc-950 text-base group-hover:text-violet-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-zinc-500 mt-1 leading-snug">{cat.description}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {cat.services.map((svc) => (
                <span key={svc} className="badge text-xs">
                  {svc}
                </span>
              ))}
            </div>
            <div className={`flex items-center gap-1.5 text-sm font-semibold ${cat.color}`}>
              Explore {cat.name}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
