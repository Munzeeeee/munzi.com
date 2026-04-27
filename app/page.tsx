import { Hero } from "@/components/home/Hero";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WebsitePackages } from "@/components/home/WebsitePackages";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { HostingPreview } from "@/components/home/HostingPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WebsitePackages />
      <HowItWorks />
      <ProductsPreview />
      <HostingPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
