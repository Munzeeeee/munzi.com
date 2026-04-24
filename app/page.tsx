import { Hero } from "@/components/home/Hero";
import { LogoBar } from "@/components/home/LogoBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { HostingPreview } from "@/components/home/HostingPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoBar />
      <ServicesGrid />
      <HowItWorks />
      <ProductsPreview />
      <HostingPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
