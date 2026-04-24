import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio — Our Work",
  description: "Selected projects from Munzeer.com — web development, digital marketing, and AI automation case studies.",
};

const projects = [
  {
    title: "Bloom Skincare — Shopify Store",
    category: "Web Development",
    tags: ["Shopify", "Custom Theme", "WhatsApp Integration"],
    description: "Custom Shopify store with branded theme, 120+ products, and seamless checkout flow. Launched in 10 days.",
    result: "40% increase in sales within 30 days",
    color: "bg-pink-50 border-pink-100",
    badge: "text-pink-600 bg-pink-100",
  },
  {
    title: "TechFlow — Google Ads",
    category: "Digital Marketing",
    tags: ["Google Ads", "Conversion Tracking", "B2B"],
    description: "Complete Google Ads overhaul for a B2B SaaS company. Restructured campaigns, rewrote all ad copy, and added proper conversion tracking.",
    result: "60% reduction in cost-per-lead",
    color: "bg-blue-50 border-blue-100",
    badge: "text-blue-600 bg-blue-100",
  },
  {
    title: "Dubai Restaurant Group — AI Chatbot",
    category: "Smart Tools",
    tags: ["AI Chatbot", "Arabic + English", "WhatsApp Handoff"],
    description: "Custom AI chatbot trained on menu, reservation process, and FAQs. Handles 80% of enquiries automatically in Arabic and English.",
    result: "80% of queries handled automatically",
    color: "bg-amber-50 border-amber-100",
    badge: "text-amber-600 bg-amber-100",
  },
  {
    title: "FreshMart UAE — Amazon Listings",
    category: "Marketplace Listings",
    tags: ["Amazon UAE", "A+ Content", "Keyword Optimisation"],
    description: "Optimised 45 Amazon product listings for a UAE grocery brand. Full keyword research, rewritten titles and bullets, and custom A+ content.",
    result: "2.3x click-through rate improvement",
    color: "bg-orange-50 border-orange-100",
    badge: "text-orange-600 bg-orange-100",
  },
  {
    title: "Zahra Consulting — Company Website",
    category: "Web Development",
    tags: ["Next.js", "SEO", "Lead Generation"],
    description: "Modern 8-page company website for a professional consulting firm. Optimised for local SEO, with contact forms and WhatsApp integration.",
    result: "3x organic enquiries in 60 days",
    color: "bg-violet-50 border-violet-100",
    badge: "text-violet-600 bg-violet-100",
  },
  {
    title: "StartupXYZ — MVP Development",
    category: "Tech Build + AI",
    tags: ["Next.js", "Supabase", "MVP"],
    description: "Full-stack MVP for a marketplace startup — user auth, listings, messaging, and admin dashboard. Delivered in 8 weeks from discovery to launch.",
    result: "MVP launched in 8 weeks, 200 beta users",
    color: "bg-teal-50 border-teal-100",
    badge: "text-teal-600 bg-teal-100",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 pt-12 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work that speaks for itself
          </h1>
          <p className="text-xl text-zinc-400">
            Selected projects across web, marketing, AI, and marketplaces.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`rounded-2xl border p-6 flex flex-col hover:shadow-md transition-shadow ${project.color}`}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${project.badge}`}>
                  {project.category}
                </span>
              </div>
              <h3 className="font-bold text-zinc-950 mb-2">{project.title}</h3>
              <p className="text-sm text-zinc-600 mb-4 flex-1 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-white/70 text-zinc-600 border border-white/50 px-2 py-0.5 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-black/5">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1">Result</p>
                <p className="text-sm font-bold text-zinc-950">{project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-zinc-950 mb-3">Want results like these?</h2>
          <p className="text-zinc-500 mb-8 text-sm">
            Every project in our portfolio started with a single conversation. Let's talk about yours.
          </p>
          <Link href="/contact" className="btn-primary">
            Start a project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
