"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+know+more+about+your+services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl shadow-green-900/40 transition-all duration-200 hover:scale-110 active:scale-95"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
        <MessageCircle className="w-6 h-6 text-white relative z-10" />

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 bg-zinc-950 text-white text-xs font-semibold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl">
          Chat on WhatsApp
          <span className="absolute right-[-5px] top-1/2 -translate-y-1/2 border-4 border-transparent border-l-zinc-950" />
        </span>
      </Link>
    </div>
  );
}
