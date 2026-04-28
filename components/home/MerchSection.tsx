"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Truck, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const tees: { slug: string; name: string; price: number; image: string; waMsg: string }[] = [
  {
    slug: "lazy-monkey-tee",
    name: "Lazy Monkey",
    price: 15,
    image: "/merch/lazy-monkey.jpg",
    waMsg: "Hi%2C+I%27d+like+to+order+the+Lazy+Monkey+Tee.+My+size%3A+",
  },
  {
    slug: "savage-claw-tee",
    name: "Savage Claw",
    price: 15,
    image: "/merch/savage-claw.jpg",
    waMsg: "Hi%2C+I%27d+like+to+order+the+Savage+Claw+Tee.+My+size%3A+",
  },
  {
    slug: "shadow-kitty-tee",
    name: "Shadow Kitty",
    price: 15,
    image: "/merch/shadow-kitty-tee.jpg",
    waMsg: "Hi%2C+I%27d+like+to+order+the+Shadow+Kitty+Tee.+My+size%3A+",
  },
  {
    slug: "stealth-paw-tee",
    name: "Stealth Paw",
    price: 15,
    image: "/merch/stealth-paw.jpg",
    waMsg: "Hi%2C+I%27d+like+to+order+the+Stealth+Paw+Tee.+My+size%3A+",
  },
  {
    slug: "unknown-being-tee",
    name: "Unknown Being",
    price: 15,
    image: "/merch/unknown-being.jpg",
    waMsg: "Hi%2C+I%27d+like+to+order+the+Unknown+Being+Tee.+My+size%3A+",
  },
];

const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

// Per-position visual config: diff = cardIndex - activeIndex (wrapped to -2..2)
const SLOT: Record<number, { x: number; scale: number; opacity: number; z: number }> = {
  [-2]: { x: -370, scale: 0.60, opacity: 0.45, z: 1 },
  [-1]: { x: -195, scale: 0.78, opacity: 0.75, z: 2 },
  [0]:  { x: 0,    scale: 1.00, opacity: 1.00, z: 4 },
  [1]:  { x:  195, scale: 0.78, opacity: 0.75, z: 2 },
  [2]:  { x:  370, scale: 0.60, opacity: 0.45, z: 1 },
};

function getDiff(index: number, active: number, total: number) {
  let d = index - active;
  if (d >  Math.floor(total / 2)) d -= total;
  if (d < -Math.floor(total / 2)) d += total;
  return d;
}

export function MerchSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = () => setActive((p) => (p + 1) % tees.length);
  const retreat = () => setActive((p) => (p - 1 + tees.length) % tees.length);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(advance, 2800);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  return (
    <section
      className="bg-white py-20 border-t border-zinc-100"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-violet-600 text-sm font-semibold uppercase tracking-widest mb-2">
              Merch Drop
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
              Wear something worth talking about
            </h2>
            <p className="mt-2 text-zinc-500">
              Premium 100% cotton · Sizes S–3XL · Ships worldwide · $15 each
            </p>
          </div>
          <Link
            href="/products"
            className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors shrink-0"
          >
            View all merch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Coverflow carousel */}
        <div className="relative flex items-center justify-center">

          {/* Prev / Next arrows */}
          <button
            onClick={retreat}
            className="absolute left-0 z-20 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:shadow-lg transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={advance}
            className="absolute right-0 z-20 w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-md flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:shadow-lg transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards track */}
          <div className="relative w-full h-[460px] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              {tees.map((tee, i) => {
                const diff = getDiff(i, active, tees.length);
                const slot = SLOT[diff] ?? SLOT[diff > 0 ? 2 : -2];
                const isActive = diff === 0;

                return (
                  <div
                    key={tee.slug}
                    onClick={() => !isActive && setActive(i)}
                    style={{
                      position: "absolute",
                      width: 240,
                      transform: `translateX(${slot.x}px) scale(${slot.scale})`,
                      opacity: slot.opacity,
                      zIndex: slot.z,
                      transition: "transform 0.55s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.55s ease",
                      cursor: isActive ? "default" : "pointer",
                    }}
                  >
                    <div
                      className={`bg-white rounded-2xl overflow-hidden flex flex-col ${
                        isActive
                          ? "shadow-2xl shadow-zinc-300/60 ring-1 ring-zinc-200"
                          : "shadow-md shadow-zinc-200/40"
                      }`}
                    >
                      {/* Photo */}
                      <div className="relative aspect-square bg-zinc-50 overflow-hidden">
                        <Image
                          src={tee.image}
                          alt={tee.name}
                          fill
                          className="object-cover"
                          sizes="240px"
                          priority={isActive}
                        />
                      </div>

                      {/* Info — only fully visible on active card */}
                      <div className="p-4">
                        <p className="font-bold text-zinc-950 text-sm leading-tight mb-3">
                          {tee.name}
                        </p>

                        {/* Sizes */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {sizes.map((s) => (
                            <span
                              key={s}
                              className="text-[10px] font-medium text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5 bg-zinc-50"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-zinc-950">${tee.price}</span>
                          <a
                            href={`https://wa.me/971569793494?text=${tee.waMsg}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold bg-green-600 hover:bg-green-500 text-white px-3 py-2 rounded-xl transition-colors"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {tees.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 h-2 bg-violet-600"
                  : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-5">
          <div className="flex items-center gap-3 text-sm text-zinc-600">
            <Truck className="w-5 h-5 text-zinc-400 shrink-0" />
            <span>
              Order via WhatsApp — reply with your size and we&apos;ll send a payment link.
              Worldwide Shipping Available.
            </span>
          </div>
          <a
            href="https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+browse+your+merch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Browse on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
