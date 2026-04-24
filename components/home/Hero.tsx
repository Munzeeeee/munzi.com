"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const platforms = [
  { name: "Shopify", color: "#96bf48", letter: "S" },
  { name: "Google", color: "#4285f4", letter: "G" },
  { name: "Meta", color: "#1877f2", letter: "M" },
  { name: "Amazon", color: "#ff9900", letter: "A" },
  { name: "TikTok", color: "#000000", letter: "T" },
  { name: "OpenAI", color: "#10a37f", letter: "AI" },
  { name: "Noon", color: "#feee00", letter: "N", textColor: "#000" },
  { name: "WooCommerce", color: "#96588a", letter: "W" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-20 sm:pt-12 sm:pb-28">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#09090b 1px, transparent 1px), linear-gradient(90deg, #09090b 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 text-sm font-medium px-4 py-1.5 rounded-full border border-violet-100">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            Your global digital growth partner
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-zinc-950 tracking-tight leading-[1.05]">
            Web. Marketing.
            <br />
            <span className="gradient-text">AI.</span>{" "}
            <span className="text-zinc-950">All in one team.</span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg sm:text-xl text-zinc-500 max-w-2xl mx-auto mb-10"
        >
          From your first website to full AI automation — we build, market, and
          grow your digital presence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Link href="/services" className="btn-primary text-base py-3.5 px-7">
            See Our Services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+discuss+my+project`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base py-3.5 px-7"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us Now
          </Link>
        </motion.div>

        {/* Connection Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="relative h-[320px] sm:h-[380px]">
            {/* SVG connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 700 380"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Left side connections */}
              <line x1="130" y1="60" x2="350" y2="190" stroke="#e4e4e7" strokeWidth="1.5" className="connection-line" />
              <line x1="80" y1="140" x2="350" y2="190" stroke="#e4e4e7" strokeWidth="1.5" className="connection-line" />
              <line x1="110" y1="230" x2="350" y2="190" stroke="#e4e4e7" strokeWidth="1.5" className="connection-line" />
              <line x1="130" y1="320" x2="350" y2="190" stroke="#e4e4e7" strokeWidth="1.5" className="connection-line" />
              {/* Right side connections */}
              <line x1="570" y1="60" x2="350" y2="190" stroke="#e4e4e7" strokeWidth="1.5" className="connection-line" />
              <line x1="620" y1="140" x2="350" y2="190" stroke="#e4e4e7" strokeWidth="1.5" className="connection-line" />
              <line x1="590" y1="230" x2="350" y2="190" stroke="#e4e4e7" strokeWidth="1.5" className="connection-line" />
              <line x1="570" y1="320" x2="350" y2="190" stroke="#e4e4e7" strokeWidth="1.5" className="connection-line" />
            </svg>

            {/* Left platform icons */}
            {platforms.slice(0, 4).map((platform, i) => {
              const yPositions = [60, 140, 230, 320];
              return (
                <motion.div
                  key={platform.name}
                  className="absolute"
                  style={{ left: "6%", top: `${yPositions[i] - 22}px`, transform: "translateX(-50%)" }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.5 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md border border-zinc-100"
                    style={{ backgroundColor: platform.color }}
                  >
                    <span
                      className="font-bold text-sm"
                      style={{ color: platform.textColor || "#fff" }}
                    >
                      {platform.letter}
                    </span>
                  </div>
                  <p className="text-center text-xs text-zinc-400 mt-1">{platform.name}</p>
                </motion.div>
              );
            })}

            {/* Right platform icons */}
            {platforms.slice(4).map((platform, i) => {
              const yPositions = [60, 140, 230, 320];
              return (
                <motion.div
                  key={platform.name}
                  className="absolute"
                  style={{ right: "6%", top: `${yPositions[i] - 22}px`, transform: "translateX(50%)" }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2.5 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4 + 0.2,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shadow-md border border-zinc-100"
                    style={{ backgroundColor: platform.color }}
                  >
                    <span
                      className="font-bold text-sm"
                      style={{ color: platform.textColor || "#fff" }}
                    >
                      {platform.letter}
                    </span>
                  </div>
                  <p className="text-center text-xs text-zinc-400 mt-1">{platform.name}</p>
                </motion.div>
              );
            })}

            {/* Central Munzeer node */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full bg-violet-100 animate-ping opacity-30 scale-150" />
              <div className="absolute inset-0 rounded-full bg-violet-50 scale-125" />
              <div className="relative w-20 h-20 rounded-2xl bg-zinc-950 shadow-2xl flex flex-col items-center justify-center border-4 border-white">
                <span className="text-white font-bold text-xl leading-none">M</span>
                <span className="text-violet-400 text-xs font-semibold">Munzeer</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-400"
        >
          {[
            "20+ Services",
            "50+ Projects Delivered",
            "Clients Worldwide",
            "5-Star Rated",
          ].map((stat, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="hidden sm:inline text-zinc-200">·</span>}
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
