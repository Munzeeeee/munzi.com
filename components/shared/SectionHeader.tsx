import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight leading-tight">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg text-zinc-500 max-w-2xl leading-relaxed mx-auto">
          {subheading}
        </p>
      )}
    </div>
  );
}
