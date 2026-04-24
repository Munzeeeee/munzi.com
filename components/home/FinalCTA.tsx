import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="relative bg-zinc-950 rounded-3xl overflow-hidden px-8 py-16 sm:px-16 sm:py-20 text-center">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-3xl" />
        </div>

        <div className="relative">
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Get started
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Ready to grow your business online?
          </h2>
          <p className="text-lg text-zinc-400 max-w-lg mx-auto mb-10">
            Book a free 30-minute strategy call. No commitment, no sales pressure — just honest advice about what will move the needle for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact" className="btn-primary text-base py-3.5 px-8">
              <CalendarDays className="w-4 h-4" />
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+a+free+strategy+call`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-base py-3.5 px-8 rounded-xl transition-colors border border-zinc-700"
            >
              WhatsApp us instead
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
