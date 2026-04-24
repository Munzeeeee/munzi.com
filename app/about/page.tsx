import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Heart, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Munzeer.com",
  description:
    "Learn about Munzeer.com — a global digital agency helping businesses grow online through web development, digital marketing, and AI automation.",
};

const values = [
  {
    icon: Zap,
    title: "Speed without corners cut",
    description: "We deliver fast because we're efficient — not because we skip the important parts.",
  },
  {
    icon: Heart,
    title: "We care about your results",
    description: "Your growth is our metric. We measure success by what it does for your business.",
  },
  {
    icon: Globe,
    title: "Global reach, personal service",
    description: "Clients in 15+ countries, but you always talk to a real person who knows your project.",
  },
  {
    icon: Users,
    title: "Long-term relationships",
    description: "We don't disappear after launch. Most of our clients have been with us for years.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-violet-600 text-sm font-semibold uppercase tracking-widest mb-4">
            About us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-950 mb-6 tracking-tight">
            We help businesses grow online
          </h1>
          <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl mx-auto">
            Munzeer.com is a global digital agency offering web development, digital marketing, AI automation, marketplace listings, and smart business tools — all in one place.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="border-y border-zinc-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-zinc-950 mb-5">Our story</h2>
              <div className="space-y-4 text-zinc-500 leading-relaxed">
                <p>
                  Munzeer.com was built to solve a real problem: businesses needed multiple agencies — one for their website, another for ads, another for Amazon, and another for tech — each with its own invoices, logins, and communication channels.
                </p>
                <p>
                  We built a single, capable team that can handle all of it. Web, marketing, AI, tools, and marketplace listings under one roof — so our clients get faster results and a single point of contact they can trust.
                </p>
                <p>
                  Today we serve clients across the Middle East, UK, Europe, and beyond. Our clients range from solo founders to established businesses — what they have in common is a desire to grow digitally and a preference for getting things done without the runaround.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Projects delivered" },
                { value: "15+", label: "Countries served" },
                { value: "20+", label: "Services offered" },
                { value: "5★", label: "Average rating" },
              ].map((stat) => (
                <div key={stat.label} className="bg-zinc-950 text-white rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-violet-400 mb-1">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zinc-950 mb-3">How we work</h2>
            <p className="text-zinc-500">The principles that guide every project we take on.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="font-semibold text-zinc-950 mb-2">{v.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Let's work together</h2>
          <p className="text-zinc-400 mb-8">
            Tell us about your business and we'll figure out together how we can help.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
