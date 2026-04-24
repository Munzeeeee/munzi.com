import type { Metadata } from "next";
import { Check, Server, Shield, HeadphonesIcon, Zap } from "lucide-react";
import { hostingPlans } from "@/content/hosting-plans";
import { PricingCard } from "@/components/hosting/PricingCard";
import { HostingOrderForm } from "@/components/hosting/HostingOrderForm";

export const metadata: Metadata = {
  title: "Managed Hosting Plans",
  description:
    "Fast, managed web hosting from Munzeer.com. Powered by Hostinger Agency — personally set up and managed by our team.",
};

const features = [
  { icon: Zap, title: "Fast SSD hosting", desc: "NVMe SSD storage on every plan for blazing fast load times." },
  { icon: Shield, title: "Free SSL on all plans", desc: "Let's Encrypt SSL included and auto-renewed on every domain." },
  { icon: Server, title: "Managed by us", desc: "We set up your hosting and handle the technical side for you." },
  { icon: HeadphonesIcon, title: "WhatsApp support", desc: "Direct support from the person who set up your hosting." },
];

export default function HostingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 pt-12 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Web Hosting
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Fast, managed hosting
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Powered by our Hostinger Agency plan. Personally provisioned and managed — so you don't have to deal with any of it.
          </p>
          <div className="inline-flex items-center gap-6 text-sm text-zinc-400 flex-wrap justify-center gap-y-2">
            {["99.9% uptime", "Free SSL", "Daily backups", "cPanel included", "1-click WordPress"].map((f) => (
              <span key={f} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green-400" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {hostingPlans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="text-center text-sm text-zinc-400 mt-8">
          All prices in USD. Need a custom plan?{" "}
          <a
            href="https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+discuss+hosting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 font-medium hover:underline"
          >
            WhatsApp us
          </a>
        </p>
      </section>

      {/* Features */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="w-11 h-11 bg-violet-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <f.icon className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="font-semibold text-zinc-950 mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order form */}
      <section id="order" className="section">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-zinc-950 mb-2">Order your hosting</h2>
            <p className="text-zinc-500 text-sm">
              Fill this form and we'll have your hosting ready within 24 hours.
            </p>
          </div>
          <div className="card">
            <HostingOrderForm />
          </div>
        </div>
      </section>
    </>
  );
}
