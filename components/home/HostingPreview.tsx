import Link from "next/link";
import { ArrowRight, Check, Server } from "lucide-react";
import { hostingPlans } from "@/content/hosting-plans";
import { cn } from "@/lib/utils";

export function HostingPreview() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-2">
              Hosting
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Fast, managed hosting
            </h2>
            <p className="mt-2 text-zinc-400 max-w-md">
              Resold from our Hostinger Agency plan. Personally set up and managed by us.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5">
            <Server className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-zinc-300 font-medium">99.9% uptime SLA</span>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {hostingPlans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "rounded-2xl p-6 border transition-all duration-200",
                plan.popular
                  ? "bg-violet-600 border-violet-500 shadow-2xl shadow-violet-900/30 scale-[1.02]"
                  : "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
              )}
            >
              {plan.badge && (
                <span
                  className={cn(
                    "inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3",
                    plan.popular
                      ? "bg-white/20 text-white"
                      : "bg-zinc-800 text-zinc-300"
                  )}
                >
                  {plan.badge}
                </span>
              )}
              <h3 className={cn("text-xl font-bold mb-1", plan.popular ? "text-white" : "text-white")}>
                {plan.name}
              </h3>
              <p className={cn("text-sm mb-4", plan.popular ? "text-violet-100" : "text-zinc-400")}>
                {plan.tagline}
              </p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className={cn("text-4xl font-bold", plan.popular ? "text-white" : "text-white")}>
                  ${plan.price}
                </span>
                <span className={cn("text-sm", plan.popular ? "text-violet-200" : "text-zinc-500")}>
                  /month
                </span>
              </div>
              <ul className="space-y-2.5 mb-6">
                {[
                  `${plan.features.websites} website${plan.features.websites === 1 ? "" : "s"}`,
                  plan.features.storage,
                  `${plan.features.emails} email${plan.features.emails === 1 ? "" : "s"}`,
                  `${plan.features.backups} backups`,
                  plan.features.support,
                  plan.features.freeDomain ? "Free domain (1 year)" : null,
                ]
                  .filter(Boolean)
                  .map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check
                        className={cn(
                          "w-4 h-4 shrink-0",
                          plan.popular ? "text-violet-200" : "text-violet-400"
                        )}
                      />
                      <span className={cn("text-sm", plan.popular ? "text-violet-100" : "text-zinc-300")}>
                        {feature}
                      </span>
                    </li>
                  ))}
              </ul>
              <Link
                href={`/hosting#${plan.id}`}
                className={cn(
                  "w-full text-center block py-2.5 rounded-xl text-sm font-semibold transition-colors",
                  plan.popular
                    ? "bg-white text-violet-700 hover:bg-violet-50"
                    : "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/hosting"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium transition-colors text-sm"
          >
            View full plan details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
