import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Truck, ArrowRight } from "lucide-react";

const tees = [
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
  // Dev tees (no photo — CSS mockup)
  {
    slug: "sudo-make-me-a-sandwich-tee",
    name: "sudo sandwich",
    price: 15,
    image: null,
    darkMockup: true,
    mockupText: ["sudo make me", "a sandwich"],
    waMsg:
      "Hi%2C+I%27d+like+to+order+the+sudo+make+me+a+sandwich+Tee.+My+size%3A+",
  },
  {
    slug: "hello-world-developer-tee",
    name: "Hello, World!",
    price: 15,
    image: null,
    darkMockup: false,
    mockupText: ["Hello,", "World!"],
    waMsg:
      "Hi%2C+I%27d+like+to+order+the+Hello+World+Developer+Tee.+My+size%3A+",
  },
];

const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

export function MerchSection() {
  return (
    <section className="bg-white py-20 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
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
            href="/products#merchandise"
            className="flex items-center gap-1.5 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors shrink-0"
          >
            View all merch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {tees.slice(0, 5).map((tee) => (
            <TeeCard key={tee.slug} tee={tee} />
          ))}
        </div>

        {/* Dev tees row */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
          {tees.slice(5).map((tee) => (
            <TeeCard key={tee.slug} tee={tee} wide />
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-5">
          <div className="flex items-center gap-3 text-sm text-zinc-600">
            <Truck className="w-5 h-5 text-zinc-400 shrink-0" />
            <span>
              Order via WhatsApp — reply with your size and we&apos;ll send a payment link.
              Ships to UAE and worldwide.
            </span>
          </div>
          <Link
            href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+browse+your+merch`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            Browse on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}

function TeeCard({ tee, wide = false }: { tee: (typeof tees)[number]; wide?: boolean }) {
  return (
    <Link
      href={`/products/${tee.slug}`}
      className="group bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/70 hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Image / mockup */}
      <div className={`relative overflow-hidden bg-zinc-50 ${wide ? "aspect-video" : "aspect-square"}`}>
        {tee.image ? (
          <Image
            src={tee.image}
            alt={tee.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${tee.darkMockup ? "bg-zinc-950" : "bg-zinc-50"}`}>
            {tee.darkMockup ? (
              <div className="text-center font-mono px-4">
                <p className="text-green-400 text-xs mb-2 opacity-70">$ ▊</p>
                {tee.mockupText!.map((line, i) => (
                  <p key={i} className="text-white font-bold text-sm leading-snug">{line}</p>
                ))}
              </div>
            ) : (
              <div className="text-center px-4">
                {tee.mockupText!.map((line, i) => (
                  <p key={i} className="text-zinc-950 font-black text-2xl leading-none tracking-tighter">{line}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 flex-1 flex flex-col">
        <p className="font-semibold text-zinc-950 text-sm group-hover:text-violet-600 transition-colors leading-tight mb-2">
          {tee.name}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {sizes.map((s) => (
            <span key={s} className="text-[10px] font-medium text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5 bg-zinc-50">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-zinc-100">
          <span className="font-bold text-zinc-950">${tee.price}</span>
          <Link
            href={`https://wa.me/971569793494?text=${tee.waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-xs font-semibold bg-green-600 hover:bg-green-500 text-white px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            Buy
          </Link>
        </div>
      </div>
    </Link>
  );
}
