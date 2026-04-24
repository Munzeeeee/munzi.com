import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section flex flex-col items-center justify-center min-h-[60vh] text-center">
      <p className="text-8xl font-bold text-zinc-100 mb-4 select-none">404</p>
      <h1 className="text-2xl font-bold text-zinc-950 mb-3">Page not found</h1>
      <p className="text-zinc-500 mb-8 max-w-sm">
        This page doesn't exist or may have been moved. Let's get you back on track.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="btn-primary">
          <Home className="w-4 h-4" />
          Go home
        </Link>
        <Link href="/services" className="btn-outline">
          View services
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
