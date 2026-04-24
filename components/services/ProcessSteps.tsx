import type { Service } from "@/content/services";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface ProcessStepsProps {
  process: Service["process"];
}

export function ProcessSteps({ process }: ProcessStepsProps) {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Our process"
        heading="How we deliver"
        subheading="A transparent, step-by-step process so you always know what's happening."
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-zinc-200 hidden sm:block" />

        <div className="space-y-6">
          {process.map((item, i) => (
            <div key={item.step} className="relative flex gap-6 sm:gap-8">
              {/* Step number */}
              <div className="relative z-10 w-12 h-12 rounded-full bg-zinc-950 text-white flex items-center justify-center font-bold text-sm shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="flex-1 pb-6 sm:pb-8">
                <h3 className="font-semibold text-zinc-950 text-base mb-1">{item.step}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
