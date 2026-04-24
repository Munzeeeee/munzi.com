import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Globe, TrendingUp, Zap, ShoppingCart, Cpu } from "lucide-react";
import { serviceCategories, services } from "@/content/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FinalCTA } from "@/components/home/FinalCTA";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "web-development": Globe,
  "digital-marketing": TrendingUp,
  "smart-tools": Zap,
  "marketplace-listings": ShoppingCart,
  "tech-build": Cpu,
};

const categoryColors = {
  "web-development": { text: "text-violet-600", bg: "bg-violet-50" },
  "digital-marketing": { text: "text-teal-600", bg: "bg-teal-50" },
  "smart-tools": { text: "text-amber-600", bg: "bg-amber-50" },
  "marketplace-listings": { text: "text-orange-600", bg: "bg-orange-50" },
  "tech-build": { text: "text-blue-600", bg: "bg-blue-50" },
} as Record<string, { text: string; bg: string }>;

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = serviceCategories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} Services`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = serviceCategories.find((c) => c.slug === category);
  if (!cat) notFound();

  const Icon = categoryIcons[cat.slug];
  const colors = categoryColors[cat.slug] || { text: "text-violet-600", bg: "bg-violet-50" };

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-zinc-100 pt-8 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/services" className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-8 inline-block">
            ← All Services
          </Link>
          <div className="flex items-start gap-4">
            {Icon && (
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${colors.bg}`}>
                <Icon className={`w-7 h-7 ${colors.text}`} />
              </div>
            )}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight mb-2">
                {cat.name}
              </h1>
              <p className="text-lg text-zinc-500 max-w-xl">{cat.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cat.services.map((svc) => (
            <ServiceCard key={svc.slug} service={svc} />
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
