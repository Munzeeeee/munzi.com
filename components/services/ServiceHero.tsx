import Link from "next/link";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import * as Icons from "lucide-react";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  "web-development": { bg: "bg-violet-50", text: "text-violet-600", badge: "bg-violet-100 text-violet-700" },
  "digital-marketing": { bg: "bg-teal-50", text: "text-teal-600", badge: "bg-teal-100 text-teal-700" },
  "smart-tools": { bg: "bg-amber-50", text: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
  "marketplace-listings": { bg: "bg-orange-50", text: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
  "tech-build": { bg: "bg-blue-50", text: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
};

interface ServiceHeroProps {
  service: Service;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const colors = categoryColors[service.categorySlug] || categoryColors["web-development"];
  const IconComponent = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[service.icon];

  return (
    <section className="relative bg-white pt-8 pb-12 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
          <Link href="/services" className="hover:text-zinc-700 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            All Services
          </Link>
          <span>/</span>
          <Link
            href={`/services/${service.categorySlug}`}
            className="hover:text-zinc-700 transition-colors"
          >
            {service.category}
          </Link>
          <span>/</span>
          <span className="text-zinc-600">{service.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              {IconComponent && (
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", colors.bg)}>
                  <IconComponent className={cn("w-6 h-6", colors.text)} />
                </div>
              )}
              <span className={cn("text-sm font-semibold px-3 py-1 rounded-full", colors.badge)}>
                {service.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight leading-tight mb-3">
              {service.name}
            </h1>
            <p className={cn("text-xl font-medium mb-4", colors.text)}>{service.tagline}</p>
            <p className="text-zinc-500 leading-relaxed mb-6 text-base">{service.description}</p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <Clock className="w-4 h-4" />
                <span>{service.deliveryTime}</span>
              </div>
              <div className="text-sm font-semibold text-zinc-950 bg-zinc-100 px-3 py-1.5 rounded-lg">
                {service.startingPrice}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#quote" className="btn-primary">
                Get a Quote
              </a>
              <Link
                href={`https://wa.me/971569793494?text=Hi%2C+I%27m+interested+in+${encodeURIComponent(service.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Link>
            </div>
          </div>

          {/* Features preview */}
          <div className={cn("rounded-2xl p-6 border", colors.bg, "border-transparent")}>
            <p className="text-sm font-semibold text-zinc-700 mb-4 uppercase tracking-wide">What's included</p>
            <ul className="space-y-3">
              {service.features.slice(0, 6).map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5", colors.bg, "border", colors.text)}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-zinc-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
