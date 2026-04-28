"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Download, Truck } from "lucide-react";
import { products } from "@/content/products";

// Show all non-merchandise digital/physical products
const items = products.filter((p) => p.category !== "Merchandise");

const VISIBLE = 4; // cards visible at once on desktop

const isShipped = (fmt: string) => fmt.toLowerCase().includes("ship");

export function ProductsPreview() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const max = items.length - VISIBLE;

  const next = () => setStart((p) => (p >= max ? 0 : p + 1));
  const prev = () => setStart((p) => (p <= 0 ? max : p - 1));

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 2600);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, max]);

  return (
    <section
      className="section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div className="text-center sm:text-left">
          <span className="inline-block text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">
            Digital Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Templates, eBooks & tools
          </h2>
          <p className="mt-2 text-zinc-500 text-lg">
            Practical resources our team actually uses. Ready to use today.
          </p>
        </div>
        <Link
          href="/products"
          className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors shrink-0 self-center sm:self-end"
        >
          View all products <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-zinc-200 shadow-md flex items-center justify-center text-zinc-500 hover:text-zinc-950 hover:shadow-lg transition-all"
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-zinc-200 shadow-md flex items-center justify-center text-zinc-500 hover:text-zinc-950 hover:shadow-lg transition-all"
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${start} * (100% / ${VISIBLE} + 20px / ${VISIBLE} * (${VISIBLE} - 1))))` }}
          >
            {items.map((product, idx) => {
              const isActive = idx >= start && idx < start + VISIBLE;
              return (
                <div
                  key={product.slug}
                  className="shrink-0"
                  style={{ width: `calc((100% - ${(VISIBLE - 1) * 20}px) / ${VISIBLE})` }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className={`group flex flex-col bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                      isActive ? "animate-card-glow" : "border border-zinc-200"
                    }`}
                  >
                    {/* Cover */}
                    <div className={`relative w-full aspect-square flex items-center justify-center overflow-hidden ${product.coverBg || "bg-zinc-50"}`}>
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="25vw"
                        />
                      ) : (
                        <span className="text-6xl select-none" role="img" aria-label={product.name}>
                          {product.coverEmoji || "📦"}
                        </span>
                      )}
                      {product.comingSoon ? (
                        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
                          <span className="flex items-center gap-1 bg-zinc-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                            Coming Soon
                          </span>
                        </div>
                      ) : product.badge ? (
                        <span className="absolute top-2 left-2 text-xs font-semibold text-violet-600 bg-white/90 backdrop-blur-sm border border-violet-100 px-2 py-0.5 rounded-full shadow-sm">
                          {product.badge}
                        </span>
                      ) : null}
                    </div>

                    {/* Info */}
                    <div className="p-4 flex flex-col flex-1">
                      <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        {product.category}
                      </span>
                      <h3 className="font-semibold text-zinc-950 text-sm leading-snug mb-1 group-hover:text-violet-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed flex-1 line-clamp-2 mb-3">
                        {product.tagline}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                        {product.comingSoon ? (
                          <span className="text-xs font-semibold text-zinc-400 bg-zinc-100 px-2.5 py-1 rounded-full">
                            Coming Soon
                          </span>
                        ) : (
                          <>
                            <span className="font-bold text-zinc-950">${product.price}</span>
                            <span className="flex items-center gap-1 text-[10px] text-zinc-400">
                              {isShipped(product.deliveryFormat) ? (
                                <Truck className="w-3 h-3" />
                              ) : (
                                <Download className="w-3 h-3" />
                              )}
                              {isShipped(product.deliveryFormat) ? "Shipped" : "Instant download"}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dot indicators — outside relative wrapper so arrows center on track only */}
      <div className="flex items-center justify-center gap-1.5 mt-7">
        {Array.from({ length: max + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            className={`rounded-full transition-all duration-300 ${
              i === start ? "w-5 h-2 bg-violet-600" : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
