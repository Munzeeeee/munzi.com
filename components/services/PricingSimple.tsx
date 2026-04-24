import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

interface PricingSimpleProps {
  serviceName: string;
  deliveryTime: string;
}

export function PricingSimple({ serviceName, deliveryTime }: PricingSimpleProps) {
  return (
    <section className="bg-zinc-50 border-y border-zinc-200 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">
          Pricing
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 mb-4">
          Price on request
        </h2>
        <p className="text-zinc-500 mb-6 leading-relaxed">
          Every project is different. We quote after understanding your specific scope, goals, and timeline.
          Most {serviceName} projects are delivered in{" "}
          <span className="font-semibold text-zinc-700">{deliveryTime}</span>.
        </p>
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 mb-8 text-left max-w-md mx-auto">
          <p className="text-sm font-semibold text-zinc-700 mb-3">What affects the price:</p>
          <ul className="space-y-2 text-sm text-zinc-500">
            {["Scope and complexity of the project", "Number of pages / products / features", "Timeline and urgency", "Add-on integrations or custom work"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#quote" className="btn-primary">
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+a+quote+for+${encodeURIComponent(serviceName)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="w-4 h-4" />
            Ask on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
