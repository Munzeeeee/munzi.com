"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, MessageCircle, Globe, BarChart2, Users,
  ShoppingCart, TrendingUp, Zap, Megaphone, UserPlus,
  ThumbsUp, Cpu, Database, Activity,
} from "lucide-react";

/* ─── Data ────────────────────────────────────────────────────────────────── */

const leftItems = [
  { label: "Website",     Icon: Globe,      iconColor: "#3b82f6", iconBg: "#eff6ff" },
  { label: "Google Ads",  Icon: Activity,   iconColor: "#f97316", iconBg: "#fff7ed" },
  { label: "Social Media",Icon: ThumbsUp,   iconColor: "#2563eb", iconBg: "#eff6ff" },
  { label: "CRM",         Icon: Users,      iconColor: "#6366f1", iconBg: "#eef2ff" },
  { label: "E-commerce",  Icon: ShoppingCart,iconColor: "#7c3aed", iconBg: "#f5f3ff" },
  { label: "Analytics",   Icon: BarChart2,  iconColor: "#0f766e", iconBg: "#f0fdfa" },
];

const rightItems = [
  { label: "AI Automations",     Icon: Cpu,       iconColor: "#7c3aed", iconBg: "#f5f3ff" },
  { label: "Smart Campaigns",    Icon: Megaphone, iconColor: "#2563eb", iconBg: "#eff6ff" },
  { label: "Lead Nurturing",     Icon: UserPlus,  iconColor: "#4f46e5", iconBg: "#eef2ff" },
  { label: "Analytics & Reports",Icon: BarChart2, iconColor: "#ea580c", iconBg: "#fff7ed" },
  { label: "Business Growth",    Icon: TrendingUp,iconColor: "#16a34a", iconBg: "#f0fdf4" },
];

const metrics = [
  { label: "Visitors",       value: "12.5K", change: "+12.4%", path: "M0,18 L6,15 L12,12 L18,13 L24,9 L30,7 L36,4 L42,3",  color: "#6366f1" },
  { label: "Leads",          value: "342",   change: "+8.7%",  path: "M0,17 L6,15 L12,14 L18,11 L24,10 L30,8 L36,6 L42,4",  color: "#22c55e" },
  { label: "AI Automations", value: "28",    change: "+18.7%", path: "M0,16 L6,18 L12,14 L18,11 L24,13 L30,9 L36,6 L42,3",  color: "#22c55e" },
  { label: "Revenue",        value: "$8.7K", change: "+23.6%", path: "M0,19 L6,17 L12,15 L18,14 L24,11 L30,8 L36,5 L42,2",  color: "#22c55e" },
];

const brandLogos = [
  { name: "Shopify",     style: "font-bold text-[15px]" },
  { name: "Google",      style: "font-semibold text-[15px]" },
  { name: "Meta",        style: "font-bold text-[15px]" },
  { name: "TikTok",      style: "font-bold text-[14px] tracking-tight" },
  { name: "OpenAI",      style: "font-semibold text-[14px]" },
  { name: "amazon",      style: "font-bold text-[15px]" },
  { name: "WooCommerce", style: "font-semibold text-[14px]" },
];

/* ─── SVG layout constants (viewBox 0 0 1100 480) ─────────────────────────── */
// Left pills: top values [80,136,192,248,304,360], height=40 → centerY = top+20
const LEFT_Y  = [100, 156, 212, 268, 324, 380];
// Right pills: top values [100,160,220,280,340], height=40 → centerY = top+20
const RIGHT_Y = [120, 180, 240, 300, 360];

const COLLECT_CX = 270;
const COLLECT_CY = 240;
const AUTO_CX    = 830;
const AUTO_CY    = 240;

const LEFT_PILL_RIGHT  = 176;   // right edge of left pill
const RIGHT_PILL_LEFT  = 895;   // left edge of right pill
const DASH_LEFT        = 350;   // left edge of dashboard card
const DASH_RIGHT       = 730;   // right edge of dashboard card (350+380)

/* ─── Sub-components ──────────────────────────────────────────────────────── */

function PillCard({
  label, Icon, iconColor, iconBg, delay = 0,
}: {
  label: string; Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor: string; iconBg: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-2.5 bg-white border border-zinc-200/80 rounded-xl px-3.5 py-2 shadow-sm w-[176px] shrink-0"
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: iconBg }}>
        <Icon className="w-3.5 h-3.5" style={{ color: iconColor }} />
      </div>
      <span className="text-[13px] font-semibold text-zinc-800 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

function RightPillCard({
  label, Icon, iconColor, iconBg, delay = 0,
}: {
  label: string; Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor: string; iconBg: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-2.5 bg-white border border-zinc-200/80 rounded-xl px-3.5 py-2 shadow-sm w-[205px] shrink-0"
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0" style={{ background: iconBg }}>
        <Icon className="w-3.5 h-3.5" style={{ color: iconColor }} />
      </div>
      <span className="text-[13px] font-semibold text-zinc-800 whitespace-nowrap">{label}</span>
    </motion.div>
  );
}

function Sparkline({ path, color }: { path: string; color: string }) {
  return (
    <svg viewBox="0 0 42 22" className="w-full h-7" fill="none" preserveAspectRatio="none">
      <path d={path} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d={`${path} L42,22 L0,22 Z`}
        fill={color}
        fillOpacity="0.08"
      />
    </svg>
  );
}

function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-2xl border border-zinc-200/80 shadow-xl shadow-zinc-200/60 overflow-hidden"
      style={{ width: 380, position: "absolute", left: DASH_LEFT, top: 130, zIndex: 10 }}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-zinc-100">
        <div className="flex items-center justify-between mb-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-base">🌤️</span>
            <p className="text-[13px] font-semibold text-zinc-900">
              Good morning, <span className="text-violet-600">Mate!</span>
            </p>
          </div>
          <button className="text-zinc-400 hover:text-zinc-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <circle cx="4" cy="10" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/>
            </svg>
          </button>
        </div>
        <p className="text-[11px] text-zinc-400">Here's what's happening with your digital ecosystem.</p>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-4 divide-x divide-zinc-100">
        {metrics.map((m) => (
          <div key={m.label} className="px-2.5 py-3">
            <p className="text-[10px] text-zinc-400 mb-1 leading-none">{m.label}</p>
            <p className="text-[15px] font-bold text-zinc-950 leading-none mb-0.5">{m.value}</p>
            <p className="text-[10px] font-semibold text-emerald-600 mb-2">{m.change}</p>
            <Sparkline path={m.path} color={m.color} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Hero ───────────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      {/* ── Heading area ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-14 pb-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center mb-5"
        >
          <span className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-violet-700 text-[13px] font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            Your global digital growth partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-[56px] sm:text-[68px] lg:text-[80px] font-extrabold text-zinc-950 leading-[1.04] tracking-[-0.03em] mb-5"
        >
          Web. Marketing.
          <br />
          <span className="text-violet-600">AI.</span> All in one team.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-lg text-zinc-500 max-w-xl mx-auto mb-9"
        >
          From your first website to full AI automation —<br className="hidden sm:block" />
          we build, market, and grow your digital presence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white text-[15px] font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            See Our Services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+discuss+my+project`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-[15px] font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us Now
          </Link>
        </motion.div>
      </div>

      {/* ── Connection Diagram (desktop only) ── */}
      <div className="hidden lg:block">
        <div
          className="relative mx-auto"
          style={{ width: 1100, height: 480 }}
        >
          {/* SVG connection lines */}
          <svg
            viewBox="0 0 1100 480"
            className="absolute inset-0 w-full h-full"
            fill="none"
          >
            {/* Left pill → Collect curves */}
            {LEFT_Y.map((cy, i) => (
              <path
                key={`lc-${i}`}
                d={`M ${LEFT_PILL_RIGHT} ${cy} C 220 ${cy} 220 ${COLLECT_CY} ${COLLECT_CX - 38} ${COLLECT_CY}`}
                stroke="#e4e4e7"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            ))}

            {/* Collect → Dashboard */}
            <path
              d={`M ${COLLECT_CX + 38} ${COLLECT_CY} L ${DASH_LEFT} ${COLLECT_CY}`}
              stroke="#e4e4e7"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />

            {/* Dashboard → Automate */}
            <path
              d={`M ${DASH_RIGHT} ${AUTO_CY} L ${AUTO_CX - 38} ${AUTO_CY}`}
              stroke="#e4e4e7"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />

            {/* Automate → Right pill curves */}
            {RIGHT_Y.map((cy, i) => (
              <path
                key={`ar-${i}`}
                d={`M ${AUTO_CX + 38} ${AUTO_CY} C 882 ${AUTO_CY} 882 ${cy} ${RIGHT_PILL_LEFT} ${cy}`}
                stroke="#e4e4e7"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
            ))}

            {/* Animated traveling dot — left side */}
            {[0, 2, 4].map((idx) => (
              <motion.circle
                key={`dotl-${idx}`}
                r="4"
                fill="#7c3aed"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 2.4, delay: idx * 0.8, repeat: Infinity, ease: "linear" }}
                style={{
                  offsetPath: `path('M ${LEFT_PILL_RIGHT} ${LEFT_Y[idx]} C 220 ${LEFT_Y[idx]} 220 ${COLLECT_CY} ${COLLECT_CX - 38} ${COLLECT_CY}')`,
                } as React.CSSProperties}
              />
            ))}

            {/* Animated traveling dot — right side */}
            {[0, 2, 4].map((idx) => (
              <motion.circle
                key={`dotr-${idx}`}
                r="4"
                fill="#7c3aed"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 2.4, delay: idx * 0.8 + 0.4, repeat: Infinity, ease: "linear" }}
                style={{
                  offsetPath: `path('M ${AUTO_CX + 38} ${AUTO_CY} C 882 ${AUTO_CY} 882 ${RIGHT_Y[idx]} ${RIGHT_PILL_LEFT} ${RIGHT_Y[idx]}')`,
                } as React.CSSProperties}
              />
            ))}

            {/* Static junction dots */}
            {LEFT_Y.map((cy, i) => (
              <circle key={`jl-${i}`} cx={LEFT_PILL_RIGHT} cy={cy} r="3.5" fill="#7c3aed" opacity="0.35" />
            ))}
            {RIGHT_Y.map((cy, i) => (
              <circle key={`jr-${i}`} cx={RIGHT_PILL_LEFT} cy={cy} r="3.5" fill="#7c3aed" opacity="0.35" />
            ))}
            <circle cx={COLLECT_CX + 38} cy={COLLECT_CY} r="4" fill="#7c3aed" opacity="0.5" />
            <circle cx={DASH_RIGHT} cy={AUTO_CY} r="4" fill="#7c3aed" opacity="0.5" />
          </svg>

          {/* Left pill cards */}
          <div className="absolute left-0" style={{ top: 80 }}>
            <div className="flex flex-col gap-[16px]">
              {leftItems.map((item, i) => (
                <PillCard key={item.label} {...item} delay={0.1 + i * 0.07} />
              ))}
            </div>
          </div>

          {/* Collect hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: COLLECT_CX - 40, top: COLLECT_CY - 56 }}
          >
            <div className="w-[80px] h-[80px] rounded-2xl bg-white border border-zinc-200 shadow-lg flex items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Database className="w-5 h-5 text-violet-600" />
              </div>
            </div>
            <span className="text-[12px] font-semibold text-zinc-600">Collect</span>
          </motion.div>

          {/* Dashboard card */}
          <DashboardCard />

          {/* Automate hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: AUTO_CX - 40, top: AUTO_CY - 56 }}
          >
            <div className="w-[80px] h-[80px] rounded-2xl bg-white border border-zinc-200 shadow-lg flex items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-violet-600" />
              </div>
            </div>
            <span className="text-[12px] font-semibold text-zinc-600 text-center leading-tight">Automate<br />&amp; Grow</span>
          </motion.div>

          {/* Right pill cards */}
          <div className="absolute right-0" style={{ top: 100 }}>
            <div className="flex flex-col gap-[20px]">
              {rightItems.map((item, i) => (
                <RightPillCard key={item.label} {...item} delay={0.1 + i * 0.07} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile simplified diagram */}
      <div className="lg:hidden px-4 pb-4">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {[...leftItems.slice(0, 4)].map((item) => (
            <div key={item.label} className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-3 py-2.5 shadow-sm">
              <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: item.iconBg }}>
                <item.Icon className="w-3 h-3" style={{ color: item.iconColor }} />
              </div>
              <span className="text-xs font-semibold text-zinc-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tagline ── */}
      <div className="text-center py-5">
        <p className="inline-flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center">
            <Zap className="w-3 h-3 text-violet-600" />
          </span>
          Unified data. Smart automations. Real growth.
        </p>
      </div>

      {/* ── Logo bar ── */}
      <div className="border-t border-zinc-100 py-8">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[12px] font-medium text-zinc-400 uppercase tracking-widest mb-6">
            Trusted by businesses worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {brandLogos.map((b) => (
              <span
                key={b.name}
                className={`${b.style} text-zinc-400 select-none`}
              >
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
