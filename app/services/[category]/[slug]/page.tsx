import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, serviceCategories } from "@/content/services";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { PricingSimple } from "@/components/services/PricingSimple";
import { FAQAccordion } from "@/components/services/FAQAccordion";
import { QuoteForm } from "@/components/services/QuoteForm";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Check } from "lucide-react";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return services.map((svc) => ({
    category: svc.categorySlug,
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return {};
  return {
    title: svc.name,
    description: svc.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { category, slug } = await params;
  const service = services.find((s) => s.slug === slug && s.categorySlug === category);
  if (!service) notFound();

  const related = services
    .filter((s) => s.categorySlug === service.categorySlug && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <ServiceHero service={service} />

      {/* Full features section */}
      <section className="section border-b border-zinc-100">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            eyebrow="Features"
            heading="Everything included"
            align="left"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-violet-600" strokeWidth={3} />
                </div>
                <span className="text-sm text-zinc-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps process={service.process} />
      <PricingSimple serviceName={service.name} deliveryTime={service.deliveryTime} />
      <FAQAccordion faqs={service.faqs} />
      <QuoteForm serviceName={service.name} />

      {/* Related services */}
      {related.length > 0 && (
        <section className="section border-t border-zinc-100">
          <SectionHeader
            eyebrow="Related services"
            heading="You might also need"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((svc) => (
              <ServiceCard key={svc.slug} service={svc} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
