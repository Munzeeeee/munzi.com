import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import * as Icons from "lucide-react";
import type { Service } from "@/content/services";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  "web-development": "text-violet-600",
  "digital-marketing": "text-teal-600",
  "smart-tools": "text-amber-600",
  "marketplace-listings": "text-orange-600",
  "tech-build": "text-blue-600",
};

const categoryBg: Record<string, string> = {
  "web-development": "bg-violet-50",
  "digital-marketing": "bg-teal-50",
  "smart-tools": "bg-amber-50",
  "marketplace-listings": "bg-orange-50",
  "tech-build": "bg-blue-50",
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const color = categoryColors[service.categorySlug] || "text-violet-600";
  const bg = categoryBg[service.categorySlug] || "bg-violet-50";
  const IconComponent =
    (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[service.icon] ||
    Icons.Package;

  return (
    <Link
      href={`/services/${service.categorySlug}/${service.slug}`}
      className="card group hover:-translate-y-1 transition-all duration-200"
    >
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", bg)}>
        {IconComponent && <IconComponent className={cn("w-5 h-5", color)} />}
      </div>
      <h3 className="font-semibold text-zinc-950 mb-1 group-hover:text-violet-600 transition-colors">
        {service.name}
      </h3>
      <p className={cn("text-sm font-medium mb-2", color)}>{service.tagline}</p>
      <p className="text-sm text-zinc-500 line-clamp-2 mb-4 leading-relaxed">
        {service.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-zinc-400">
          <Clock className="w-3 h-3" />
          {service.deliveryTime}
        </span>
        <span className={cn("flex items-center gap-1 text-xs font-semibold", color)}>
          Learn more
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
