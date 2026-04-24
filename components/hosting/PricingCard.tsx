import Link from "next/link";
import { Check, X } from "lucide-react";
import type { HostingPlan } from "@/content/hosting-plans";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  plan: HostingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div
      id={plan.id}
      className={cn(
        "rounded-2xl p-7 border flex flex-col",
        plan.popular
          ? "bg-violet-600 border-violet-500 shadow-2xl shadow-violet-200 scale-[1.02]"
          : "bg-white border-zinc-200"
      )}
    >
      {plan.badge && (
        <span
          className={cn(
            "self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-4",
            plan.popular ? "bg-white/20 text-white" : "bg-violet-100 text-violet-700"
          )}
        >
          {plan.badge}
        </span>
      )}
      <h3 className={cn("text-2xl font-bold mb-1", plan.popular ? "text-white" : "text-zinc-950")}>
        {plan.name}
      </h3>
      <p className={cn("text-sm mb-5", plan.popular ? "text-violet-100" : "text-zinc-500")}>
        {plan.tagline}
      </p>
      <div className="flex items-baseline gap-1 mb-7">
        <span className={cn("text-5xl font-bold", plan.popular ? "text-white" : "text-zinc-950")}>
          ${plan.price}
        </span>
        <span className={cn("text-sm", plan.popular ? "text-violet-200" : "text-zinc-400")}>/month</span>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {[
          { label: `${plan.features.websites} website${plan.features.websites === 1 ? "" : "s"}`, included: true },
          { label: plan.features.storage, included: true },
          { label: `${plan.features.bandwidth} bandwidth`, included: true },
          { label: `${plan.features.emails} email accounts`, included: true },
          { label: "Free SSL Certificate", included: plan.features.ssl },
          { label: `${plan.features.backups} backups`, included: true },
          { label: "Free domain (1 year)", included: plan.features.freeDomain },
          { label: "cPanel access", included: plan.features.cpanel },
          { label: "1-click WordPress install", included: plan.features.wordpressInstaller },
          { label: `${plan.features.support} support`, included: true },
        ].map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            {item.included ? (
              <Check className={cn("w-4 h-4 shrink-0", plan.popular ? "text-violet-200" : "text-violet-500")} />
            ) : (
              <X className={cn("w-4 h-4 shrink-0", plan.popular ? "text-violet-300/50" : "text-zinc-300")} />
            )}
            <span
              className={cn(
                "text-sm",
                item.included
                  ? plan.popular ? "text-violet-100" : "text-zinc-700"
                  : plan.popular ? "text-violet-300/60 line-through" : "text-zinc-300 line-through"
              )}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={`/hosting#order-${plan.id}`}
        className={cn(
          "w-full text-center py-3 rounded-xl text-sm font-semibold transition-colors",
          plan.popular
            ? "bg-white text-violet-700 hover:bg-violet-50"
            : "bg-zinc-950 text-white hover:bg-zinc-800"
        )}
      >
        {plan.cta}
      </Link>
    </div>
  );
}
