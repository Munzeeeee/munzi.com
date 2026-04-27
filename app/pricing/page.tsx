import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — Munzeer.com",
  description: "Transparent, fixed-price packages for web development, digital marketing, smart tools, and more.",
};

const plans = [
  {
    category: "Web Development",
    color: "text-violet-600",
    border: "border-violet-200",
    bg: "bg-violet-50",
    packages: [
      {
        name: "Shopify Starter",
        price: "AED 2,500",
        description: "Theme setup, product import, payment & shipping config.",
        features: ["Premium theme setup", "Up to 50 products", "Payment gateway", "Mobile optimised", "30-day support"],
      },
      {
        name: "Shopify Growth",
        price: "AED 5,500",
        description: "Custom design, full store build, and conversion optimisation.",
        features: ["Custom Shopify design", "Unlimited products", "Apps & integrations", "Speed optimisation", "SEO setup", "60-day support"],
        highlight: true,
      },
      {
        name: "Company Website",
        price: "AED 3,500",
        description: "Professional multi-page website with CMS and contact forms.",
        features: ["Up to 8 pages", "CMS integration", "Contact forms", "Google Analytics", "Mobile responsive", "30-day support"],
      },
    ],
  },
  {
    category: "Digital Marketing",
    color: "text-teal-600",
    border: "border-teal-200",
    bg: "bg-teal-50",
    packages: [
      {
        name: "Ads Starter",
        price: "AED 1,500 / mo",
        description: "Single-channel ad management for Google or Meta.",
        features: ["1 ad platform", "Campaign setup", "Monthly reporting", "A/B ad testing", "Dedicated manager"],
      },
      {
        name: "Ads Growth",
        price: "AED 3,000 / mo",
        description: "Multi-channel paid ads across Google, Meta, and TikTok.",
        features: ["3 ad platforms", "Full campaign strategy", "Weekly reporting", "Audience research", "Creative guidance", "Pixel setup"],
        highlight: true,
      },
      {
        name: "SEO Package",
        price: "AED 2,000 / mo",
        description: "On-page SEO, content, backlinks, and monthly reporting.",
        features: ["Keyword research", "On-page optimisation", "4 blog articles", "Link building", "Google Search Console", "Monthly report"],
      },
    ],
  },
  {
    category: "Smart Business Tools",
    color: "text-amber-600",
    border: "border-amber-200",
    bg: "bg-amber-50",
    packages: [
      {
        name: "NFC Review Card",
        price: "AED 149",
        description: "Tap-to-review NFC card linked to your Google Business profile.",
        features: ["NFC + QR card", "Custom branding", "Direct Google review link", "Tracked tap URL", "Lifetime use"],
      },
      {
        name: "Digital Business Card",
        price: "AED 399",
        description: "Smart digital card with contact page, social links, and analytics.",
        features: ["Custom digital profile", "NFC card included", "Analytics dashboard", "Social & payment links", "vCard download"],
        highlight: true,
      },
      {
        name: "AI Chatbot",
        price: "AED 1,999",
        description: "Custom-trained AI chatbot embedded on your website.",
        features: ["GPT-4 powered", "Trained on your content", "Lead capture", "WhatsApp handoff", "Monthly maintenance"],
      },
    ],
  },
  {
    category: "Tech Build + AI",
    color: "text-blue-600",
    border: "border-blue-200",
    bg: "bg-blue-50",
    packages: [
      {
        name: "AI Automation",
        price: "From AED 3,000",
        description: "Automate repetitive workflows with AI and no-code tools.",
        features: ["Workflow audit", "Zapier / Make setup", "AI model integration", "Testing & handover", "30-day support"],
      },
      {
        name: "MVP Development",
        price: "From AED 8,000",
        description: "Minimum viable product built and deployed in 4–6 weeks.",
        features: ["Product scoping", "UI/UX design", "Full-stack build", "Hosting setup", "Source code", "60-day support"],
        highlight: true,
      },
      {
        name: "SaaS Product",
        price: "Custom quote",
        description: "End-to-end SaaS development with auth, billing, and dashboards.",
        features: ["Product strategy", "Full-stack development", "Auth & billing", "Admin dashboard", "CI/CD pipeline", "Ongoing retainer"],
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-0">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-950 tracking-tight">
            Fixed prices, zero surprises
          </h1>
          <p className="mt-4 text-lg text-zinc-500 max-w-xl mx-auto">
            Every project gets a clear scope and a fixed price before we start. No hourly billing, no hidden fees.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+get+a+quote`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Get a custom quote
            </Link>
            <Link
              href="/contact"
              className="border border-zinc-200 hover:border-zinc-400 text-zinc-700 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing categories */}
      {plans.map((group) => (
        <section key={group.category} className="section">
          <div className="mb-8">
            <h2 className={`text-2xl font-bold ${group.color} tracking-tight`}>{group.category}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {group.packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`card flex flex-col border ${pkg.highlight ? `${group.border} ring-2 ring-offset-2 ring-violet-200` : "border-zinc-100"}`}
              >
                {pkg.highlight && (
                  <span className={`inline-block text-xs font-semibold ${group.color} uppercase tracking-widest mb-3`}>
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-zinc-950">{pkg.name}</h3>
                <p className="text-sm text-zinc-500 mt-1 mb-4 leading-snug">{pkg.description}</p>
                <div className={`text-2xl font-bold text-zinc-950 mb-5`}>{pkg.price}</div>
                <ul className="space-y-2 flex-1 mb-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zinc-600">
                      <Check className={`w-4 h-4 shrink-0 ${group.color}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+enquire+about+the+${encodeURIComponent(pkg.name)}+package`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                >
                  Get started <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Custom / Enterprise CTA */}
      <section className="bg-zinc-950 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white tracking-tight">Need something custom?</h2>
          <p className="mt-4 text-zinc-400 text-lg">
            Every business is different. Tell us what you need and we&apos;ll put together a tailored proposal — no obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+a+custom+quote`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-zinc-100 text-zinc-950 text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              WhatsApp us
            </Link>
            <Link
              href="/contact"
              className="border border-zinc-700 hover:border-zinc-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Fill out the form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
