import { SectionHeader } from "@/components/shared/SectionHeader";
import { MessageSquare, FileText, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Tell us your goal",
    description:
      "Fill out the quote form or WhatsApp us. We reply within 2 hours during business hours.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Get a clear proposal",
    description:
      "We send a detailed scope, timeline, and fixed price. No surprises, no vague estimates.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "We build & deliver",
    description:
      "Our team executes — you get updates throughout. Most projects deliver in under 14 days.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Ongoing support",
    description:
      "We don't disappear after delivery. 30-day support on every project, retainers available.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            From enquiry to live — in days
          </h2>
          <p className="mt-4 text-lg text-zinc-400 max-w-xl mx-auto">
            A simple, proven process that delivers results without the agency runaround.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-zinc-700 to-transparent z-0" />
              )}
              <div className="relative w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-violet-800 transition-colors flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-violet-400 font-mono text-sm font-bold">{step.number}</span>
                  <div className="w-9 h-9 rounded-lg bg-violet-950 flex items-center justify-center">
                    <step.icon className="w-4.5 h-4.5 text-violet-400" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
