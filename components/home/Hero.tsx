"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, MessageCircle, Globe, BarChart2, Users,
  ShoppingCart, TrendingUp, Zap, Megaphone, UserPlus,
  ThumbsUp, Cpu, Database,
} from "lucide-react";

/* ─── SVG layout constants (viewBox 0 0 1100 370) ──────────────────── */
const LEFT_Y  = [60, 110, 160, 210, 260, 310];
const RIGHT_Y = [65, 125, 185, 245, 305];

const COLLECT_CX      = 270;
const COLLECT_CY      = 185;
const AUTO_CX         = 830;
const AUTO_CY         = 185;
const LEFT_PILL_RIGHT = 176;
const RIGHT_PILL_LEFT = 895;
const DASH_LEFT       = 350;
const DASH_RIGHT      = 730;

/* ─── Data ──────────────────────────────────────────────────────────── */
const leftItems = [
  { label: "Website",      Icon: Globe,        iconColor: "#3b82f6", iconBg: "#eff6ff" },
  { label: "Google Ads",   Icon: Globe,        iconColor: "#f97316", iconBg: "#fff7ed" },
  { label: "Social Media", Icon: ThumbsUp,     iconColor: "#2563eb", iconBg: "#eff6ff" },
  { label: "CRM",          Icon: Users,        iconColor: "#6366f1", iconBg: "#eef2ff" },
  { label: "E-commerce",   Icon: ShoppingCart, iconColor: "#7c3aed", iconBg: "#f5f3ff" },
  { label: "Analytics",    Icon: BarChart2,    iconColor: "#0f766e", iconBg: "#f0fdfa" },
];

const rightItems = [
  { label: "AI Automations",      Icon: Cpu,       iconColor: "#7c3aed", iconBg: "#f5f3ff" },
  { label: "Smart Campaigns",     Icon: Megaphone, iconColor: "#2563eb", iconBg: "#eff6ff" },
  { label: "Lead Nurturing",      Icon: UserPlus,  iconColor: "#4f46e5", iconBg: "#eef2ff" },
  { label: "Analytics & Reports", Icon: BarChart2, iconColor: "#ea580c", iconBg: "#fff7ed" },
  { label: "Business Growth",     Icon: TrendingUp,iconColor: "#16a34a", iconBg: "#f0fdf4" },
];

const metrics = [
  { label: "Visitors",       value: "12.5K", change: "+12.4%", path: "M0,18 L6,15 L12,12 L18,13 L24,9 L30,7 L36,4 L42,3",  color: "#6366f1" },
  { label: "Leads",          value: "342",   change: "+8.7%",  path: "M0,17 L6,15 L12,14 L18,11 L24,10 L30,8 L36,6 L42,4",  color: "#22c55e" },
  { label: "AI Automations", value: "28",    change: "+18.7%", path: "M0,16 L6,18 L12,14 L18,11 L24,13 L30,9 L36,6 L42,3",  color: "#22c55e" },
  { label: "Revenue",        value: "$8.7K", change: "+23.6%", path: "M0,19 L6,17 L12,15 L18,14 L24,11 L30,8 L36,5 L42,2",  color: "#22c55e" },
];

/* ─── Brand Logo SVGs ───────────────────────────────────────────────── */

function ShopifyLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg className="h-6 w-auto" viewBox="0 0 109 124" fill="#96BF48">
        <path d="M74.7 14.8c-.1-.6-.6-1-1.2-1-.5 0-10.4-.2-10.4-.2s-8.3-8-9-8.8c-.3-.3-.6-.4-.9-.4l-4.2 106.5 32-7.1L96.9 46c-.1-.6-.6-1-1.2-1-.5 0-10.4-.2-10.4-.2s-8.3-8-9-8.8c-.8-.8-2.3-.5-2.9-.4 0 0-1.6.5-4.2 1.3-1.4-4.1-3.9-7.7-8.3-7.7h-.7c-1.3-1.6-2.9-2.3-4.3-2.3C44.3 17 38.8 27.3 37 35.9l-8 2.5c-2.3.7-2.4.8-2.7 3L22 97.4l54 9.6V14.8zM59.4 18.7v.5c-2.8.9-5.8 1.8-8.8 2.7.8-3.2 2.4-6.4 5.1-7.7.9 1.3 2.7 3.6 3.7 4.5zm-6.6-5.1c.4 0 .9.1 1.3.3-3.3 1.5-6.8 5.4-8.3 13.1l-6.3 2C41.3 21.7 46.6 13.6 52.8 13.6zm5.1 54.2c-.4-.2-.8-.4-1.3-.5-2.4-.7-3.5-1.3-3.5-2.7 0-1.2 1.1-2 2.8-2 1.7 0 3.3.7 3.3.7l1.2-3.7s-1.1-.9-4.2-.9c-4.4 0-7.4 2.5-7.4 6 0 3.2 2.3 5 6 6.2 2 .6 2.8 1.3 2.8 2.4 0 1.2-1 1.9-2.8 1.9-2.7 0-5.2-1.4-5.2-1.4l-1.3 3.7s2.2 1.7 6.2 1.7c4.6 0 7.7-2.3 7.7-6.2-.1-3.4-2.1-5.1-4.3-6.2z"/>
      </svg>
      <span className="text-[15px] font-bold text-[#96BF48]">shopify</span>
    </div>
  );
}

function GoogleLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg className="h-5 w-5" viewBox="0 0 48 48">
        <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.3 9 3.4l6.7-6.7C35.7 2.7 30.2.5 24 .5 14.8.5 6.9 5.9 3.2 13.8l7.8 6C12.8 13.8 17.9 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.6 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h12.7c-.6 3-2.2 5.5-4.5 7.2l7.1 5.5c4.2-3.9 6.3-9.6 6.3-16.7z"/>
        <path fill="#34A853" d="M10.9 28.2A14.6 14.6 0 0 1 9.5 24c0-1.5.3-2.9.7-4.2l-7.8-6A23.5 23.5 0 0 0 .5 24c0 3.8.9 7.4 2.4 10.7l8-6.5z"/>
        <path fill="#FBBC05" d="M24 47.5c6.2 0 11.4-2 15.2-5.5l-7.1-5.5c-2 1.4-4.6 2.2-8.1 2.2-6.1 0-11.2-4.1-13-9.7l-8 6.5C6.7 42.1 14.8 47.5 24 47.5z"/>
      </svg>
      <span className="font-semibold text-[15px] text-zinc-600">Google</span>
    </div>
  );
}

function MetaLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg className="h-4 w-auto" viewBox="0 0 64 20">
        <path fill="#0082FB" d="M3.9 10c0-1.6.3-3 .9-4 .6-1 1.4-1.5 2.4-1.5 1.3 0 2.5.7 3.8 2.2 1.2 1.4 2.2 3.2 3 5.3-1 1.7-2 3-2.9 3.8-.9.8-1.8 1.2-2.8 1.2-1 0-1.9-.6-2.6-1.7-.6-1.1-.8-2.5-.8-5.3zm19.9-5c-1.3-1.4-2.9-2.1-4.7-2.1-1.3 0-2.6.5-3.9 1.4-1.1.8-2 1.9-2.8 3.3-.9-1.5-1.8-2.7-2.8-3.5-1-.8-2.2-1.2-3.5-1.2-2 0-3.6.9-4.8 2.6C.2 7.1-.4 9.3-.4 12.1c0 2.8.7 5.1 2 6.7 1.3 1.6 3 2.4 5 2.4 1.4 0 2.7-.5 3.9-1.4 1.2-.9 2.3-2.3 3.4-4.1.9 1.7 1.9 3 2.9 3.9 1 .9 2.2 1.6 3.6 1.6 2 0 3.7-.9 5-2.7 1.3-1.8 1.9-4.1 1.9-7 0-2.7-.6-4.9-1.9-6.4zm-5.9 10c-.9.8-1.8 1.2-2.7 1.2-1 0-2-.5-2.8-1.5-.9-1-1.8-2.7-2.7-4.9 1-1.7 2-3 3-3.8.9-.8 1.9-1.2 2.8-1.2 1.2 0 2.2.6 3 1.8.8 1.1 1.2 2.6 1.2 4.3 0 1.9-.6 3.3-1.8 4.1zm15.8-10c-1.3-1.4-3-2.1-5-2.1h-.7v2.3h.7c1.2 0 2.2.6 3 1.8.7 1.2 1.1 2.6 1.1 4.3 0 1.7-.4 3.1-1.1 4.1-.7 1-1.6 1.5-2.8 1.5h-.9v2.3h.9c2.1 0 3.8-.9 5.1-2.6 1.3-1.8 1.9-4 1.9-6.7 0-2.4-.7-4.5-2.2-6z"/>
      </svg>
      <span className="font-bold text-[15px] text-zinc-600">Meta</span>
    </div>
  );
}

function TikTokLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg className="h-5 w-5" viewBox="0 0 48 48" fill="currentColor">
        <path d="M41 10.5A10 10 0 0 1 31 .5h-7v32.2a5.3 5.3 0 0 1-5.3 5 5.3 5.3 0 0 1-5.3-5.3 5.3 5.3 0 0 1 5.3-5.3c.5 0 1 .1 1.5.2v-7.2a12.6 12.6 0 0 0-1.5-.1A12.6 12.6 0 0 0 6 32.7 12.6 12.6 0 0 0 18.7 45.3a12.6 12.6 0 0 0 12.6-12.6V18a17 17 0 0 0 10 3.2v-6.9a10 10 0 0 1-5.7-3.7C35.2 10.5 41 10.5 41 10.5z"/>
      </svg>
      <span className="font-bold text-[14px] text-zinc-700 tracking-tight">TikTok</span>
    </div>
  );
}

function OpenAILogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg className="h-5 w-5" viewBox="0 0 40 40" fill="#1a1a1a">
        <path d="M37.5 16.3a9.6 9.6 0 0 0-.8-7.9 9.8 9.8 0 0 0-10.5-4.7 9.6 9.6 0 0 0-7.2-3.2 9.8 9.8 0 0 0-9.3 6.8 9.6 9.6 0 0 0-6.4 4.6 9.8 9.8 0 0 0 1.2 11.5 9.6 9.6 0 0 0 .8 7.9 9.8 9.8 0 0 0 10.5 4.7 9.6 9.6 0 0 0 7.2 3.2 9.8 9.8 0 0 0 9.3-6.8 9.6 9.6 0 0 0 6.4-4.6 9.8 9.8 0 0 0-1.2-11.5zM22.4 37a7.3 7.3 0 0 1-4.7-1.7l.2-.1 7.8-4.5a1.3 1.3 0 0 0 .6-1.1V18.1l3.3 1.9v9.1A7.3 7.3 0 0 1 22.4 37zm-15.7-6.7a7.3 7.3 0 0 1-.9-4.9l.2.1 7.8 4.5a1.3 1.3 0 0 0 1.3 0l9.5-5.5v3.8L15.7 33a7.3 7.3 0 0 1-9-.7zM5.5 13.2a7.3 7.3 0 0 1 3.8-3.2v9.2a1.3 1.3 0 0 0 .6 1.1l9.5 5.5-3.3 1.9-7.8-4.5a7.3 7.3 0 0 1-2.8-10zm17.6 16L14 24l-3.3-1.9V14l3.3-1.9 9.1 5.2 3.3-1.9-9.1-5.2a1.3 1.3 0 0 0-1.3 0l-7.8 4.5V11l8.9-5.1 3.3 1.9V17l-3.3-1.9zm1.5-3.4V18l3.3 1.9v7.9l-3.3-1.9zm7.7-9.3-.2-.1-7.8-4.5a1.3 1.3 0 0 0-1.3 0l-9.5 5.5v-3.8l8.9-5.1a7.3 7.3 0 0 1 9.9 7.6v.4zm.9 4.3-3.3-1.9V10.7a7.3 7.3 0 0 1 4.8 9.8l-.2-.1-1.3-3.6z"/>
      </svg>
      <span className="font-semibold text-[14px] text-zinc-700">OpenAI</span>
    </div>
  );
}

function AmazonLogo() {
  return (
    <div className="flex flex-col items-start leading-none">
      <span className="text-[16px] font-bold text-zinc-700" style={{ fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>amazon</span>
      <svg className="w-14 h-2.5 -mt-0.5" viewBox="0 0 56 10">
        <path d="M2 6 Q14 10 28 8 Q42 6 54 2" stroke="#FF9900" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M50 0 L54 2 L52 5" stroke="#FF9900" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function WooCommerceLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg className="h-5 w-auto" viewBox="0 0 45 28" fill="none">
        <rect width="45" height="28" rx="7" fill="#7F54B3"/>
        <path d="M6 7.5c-.3 0-.5.2-.5.5l-1.2 12 3.2-1.6 2 4.1c.2.3.5.4.8.3.3-.1.4-.4.4-.7l.3-13.1H6zm11 0c-.3 0-.5.2-.5.5l-1.2 12 3.2-1.6 2 4.1c.2.3.5.4.8.3.3-.1.4-.4.4-.7l.3-13.1H17zm11 0c-.3 0-.5.2-.5.5l-1.2 12 3.2-1.6 2 4.1c.2.3.5.4.8.3.3-.1.4-.4.4-.7L33 8H28z" fill="white"/>
      </svg>
      <span className="font-semibold text-[13px] text-zinc-500">WooCommerce</span>
    </div>
  );
}

/* ─── Sub-components ────────────────────────────────────────────────── */

function PillCard({ label, Icon, iconColor, iconBg, delay = 0 }: {
  label: string; Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor: string; iconBg: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
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

function RightPillCard({ label, Icon, iconColor, iconBg, delay = 0 }: {
  label: string; Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  iconColor: string; iconBg: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
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
    <svg viewBox="0 0 42 22" className="w-full h-6" fill="none" preserveAspectRatio="none">
      <path d={path} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d={`${path} L42,22 L0,22 Z`} fill={color} fillOpacity="0.08" />
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
      style={{ width: 380, position: "absolute", left: DASH_LEFT, top: 95, zIndex: 10 }}
    >
      <div className="px-4 pt-3.5 pb-2.5 border-b border-zinc-100">
        <div className="flex items-center justify-between mb-0.5">
          <div className="flex items-center gap-1.5">
            <span className="text-sm">🌤️</span>
            <p className="text-[13px] font-semibold text-zinc-900">
              Good morning, <span className="text-violet-600">Mate!</span>
            </p>
          </div>
          <button className="text-zinc-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <circle cx="4" cy="10" r="1.5"/><circle cx="10" cy="10" r="1.5"/><circle cx="16" cy="10" r="1.5"/>
            </svg>
          </button>
        </div>
        <p className="text-[11px] text-zinc-400">Here's what's happening with your digital ecosystem.</p>
      </div>
      <div className="grid grid-cols-4 divide-x divide-zinc-100">
        {metrics.map((m) => (
          <div key={m.label} className="px-2.5 py-2.5">
            <p className="text-[10px] text-zinc-400 mb-0.5 leading-none">{m.label}</p>
            <p className="text-[14px] font-bold text-zinc-950 leading-none mb-0.5">{m.value}</p>
            <p className="text-[10px] font-semibold text-emerald-600 mb-1.5">{m.change}</p>
            <Sparkline path={m.path} color={m.color} />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Hero ─────────────────────────────────────────────────────── */

export function Hero() {
  return (
    <section className="bg-white overflow-hidden">

      {/* Heading area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-3 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex justify-center mb-2"
        >
          <span className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-violet-700 text-[13px] font-medium px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            Your global digital growth partner
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-[52px] sm:text-[64px] lg:text-[72px] font-extrabold text-zinc-950 leading-[1.04] tracking-[-0.03em] mb-3"
        >
          Web. Marketing.
          <br />
          <span className="text-violet-600">AI.</span> All in one team.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-[16px] text-zinc-500 max-w-xl mx-auto mb-5"
        >
          From your first website to full AI automation —<br className="hidden sm:block" />
          we build, market, and grow your digital presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white text-[15px] font-semibold px-7 py-3 rounded-xl transition-colors"
          >
            See Our Services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+discuss+my+project"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-[15px] font-semibold px-7 py-3 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us Now
          </Link>
        </motion.div>
      </div>

      {/* Connection Diagram — desktop */}
      <div className="hidden lg:block">
        <div className="relative mx-auto" style={{ width: 1100, height: 370 }}>

          {/* SVG lines */}
          <svg viewBox="0 0 1100 370" className="absolute inset-0 w-full h-full" fill="none">
            {LEFT_Y.map((cy, i) => (
              <path key={`lc-${i}`}
                d={`M ${LEFT_PILL_RIGHT} ${cy} C 220 ${cy} 220 ${COLLECT_CY} ${COLLECT_CX - 38} ${COLLECT_CY}`}
                stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
            ))}
            <path d={`M ${COLLECT_CX + 38} ${COLLECT_CY} L ${DASH_LEFT} ${COLLECT_CY}`}
              stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
            <path d={`M ${DASH_RIGHT} ${AUTO_CY} L ${AUTO_CX - 38} ${AUTO_CY}`}
              stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
            {RIGHT_Y.map((cy, i) => (
              <path key={`ar-${i}`}
                d={`M ${AUTO_CX + 38} ${AUTO_CY} C 882 ${AUTO_CY} 882 ${cy} ${RIGHT_PILL_LEFT} ${cy}`}
                stroke="#e4e4e7" strokeWidth="1.5" strokeDasharray="4 3" />
            ))}

            {/* Traveling dots — left */}
            {[0, 2, 4].map((idx) => (
              <motion.circle key={`dotl-${idx}`} r="4" fill="#7c3aed"
                initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }}
                transition={{ duration: 2.4, delay: idx * 0.8, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: `path('M ${LEFT_PILL_RIGHT} ${LEFT_Y[idx]} C 220 ${LEFT_Y[idx]} 220 ${COLLECT_CY} ${COLLECT_CX - 38} ${COLLECT_CY}')` } as React.CSSProperties}
              />
            ))}

            {/* Traveling dots — right */}
            {[0, 2, 4].map((idx) => (
              <motion.circle key={`dotr-${idx}`} r="4" fill="#7c3aed"
                initial={{ offsetDistance: "0%" }} animate={{ offsetDistance: "100%" }}
                transition={{ duration: 2.4, delay: idx * 0.8 + 0.4, repeat: Infinity, ease: "linear" }}
                style={{ offsetPath: `path('M ${AUTO_CX + 38} ${AUTO_CY} C 882 ${AUTO_CY} 882 ${RIGHT_Y[idx]} ${RIGHT_PILL_LEFT} ${RIGHT_Y[idx]}')` } as React.CSSProperties}
              />
            ))}

            {/* Junction dots */}
            {LEFT_Y.map((cy, i) => (
              <circle key={`jl-${i}`} cx={LEFT_PILL_RIGHT} cy={cy} r="3.5" fill="#7c3aed" opacity="0.35" />
            ))}
            {RIGHT_Y.map((cy, i) => (
              <circle key={`jr-${i}`} cx={RIGHT_PILL_LEFT} cy={cy} r="3.5" fill="#7c3aed" opacity="0.35" />
            ))}
            <circle cx={COLLECT_CX + 38} cy={COLLECT_CY} r="4" fill="#7c3aed" opacity="0.5" />
            <circle cx={DASH_RIGHT} cy={AUTO_CY} r="4" fill="#7c3aed" opacity="0.5" />
          </svg>

          {/* Left pills */}
          <div className="absolute left-0" style={{ top: 40 }}>
            <div className="flex flex-col gap-[14px]">
              {leftItems.map((item, i) => <PillCard key={item.label} {...item} delay={0.1 + i * 0.07} />)}
            </div>
          </div>

          {/* Collect hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: COLLECT_CX - 40, top: COLLECT_CY - 52 }}
          >
            <div className="w-[80px] h-[80px] rounded-2xl bg-white border border-zinc-200 shadow-lg flex items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Database className="w-5 h-5 text-violet-600" />
              </div>
            </div>
            <span className="text-[12px] font-semibold text-zinc-600">Collect</span>
          </motion.div>

          {/* Dashboard */}
          <DashboardCard />

          {/* Automate hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="absolute flex flex-col items-center gap-1"
            style={{ left: AUTO_CX - 40, top: AUTO_CY - 52 }}
          >
            <div className="w-[80px] h-[80px] rounded-2xl bg-white border border-zinc-200 shadow-lg flex items-center justify-center">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-violet-600" />
              </div>
            </div>
            <span className="text-[12px] font-semibold text-zinc-600 text-center leading-tight">Automate<br />&amp; Grow</span>
          </motion.div>

          {/* Right pills */}
          <div className="absolute right-0" style={{ top: 47 }}>
            <div className="flex flex-col gap-[18px]">
              {rightItems.map((item, i) => <RightPillCard key={item.label} {...item} delay={0.1 + i * 0.07} />)}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile simplified */}
      <div className="lg:hidden px-4 pb-4">
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {leftItems.slice(0, 4).map((item) => (
            <div key={item.label} className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-3 py-2.5 shadow-sm">
              <div className="w-6 h-6 rounded-md flex items-center justify-center shrink-0" style={{ background: item.iconBg }}>
                <item.Icon className="w-3 h-3" style={{ color: item.iconColor }} />
              </div>
              <span className="text-xs font-semibold text-zinc-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center py-2">
        <p className="inline-flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
          <span className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center">
            <Zap className="w-3 h-3 text-violet-600" />
          </span>
          Unified data. Smart automations. Real growth.
        </p>
      </div>

      {/* Logo bar */}
      <div className="border-t border-zinc-100 py-4">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-center text-[11px] font-medium text-zinc-400 uppercase tracking-widest mb-4">
            Trusted by businesses worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <ShopifyLogo />
            <GoogleLogo />
            <MetaLogo />
            <TikTokLogo />
            <OpenAILogo />
            <AmazonLogo />
            <WooCommerceLogo />
          </div>
        </div>
      </div>
    </section>
  );
}
