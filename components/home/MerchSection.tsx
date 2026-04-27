import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Truck, ArrowRight } from "lucide-react";

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
          {tees.map((tee) => (
            <TeeCard key={tee.slug} tee={tee} />
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

function TeeCard({ tee }: { tee: (typeof tees)[number] }) {
  return (
    <div className="group bg-white border border-zinc-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-zinc-200/70 hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Clickable image → product page */}
      <Link href={`/products/${tee.slug}`} className="block aspect-square relative overflow-hidden bg-zinc-50">
        <Image
          src={tee.image}
          alt={tee.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </Link>

      {/* Info */}
      <div className="p-3 flex-1 flex flex-col">
        <Link href={`/products/${tee.slug}`} className="font-semibold text-zinc-950 text-sm hover:text-violet-600 transition-colors leading-tight mb-2 block">
          {tee.name}
        </Link>
        <div className="flex flex-wrap gap-1 mb-3">
          {sizes.map((s) => (
            <span key={s} className="text-[10px] font-medium text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5 bg-zinc-50">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-zinc-100">
          <span className="font-bold text-zinc-950">${tee.price}</span>
          <a
            href={`https://wa.me/971569793494?text=${tee.waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold bg-green-600 hover:bg-green-500 text-white px-2.5 py-1.5 rounded-lg transition-colors"
          >
            <MessageCircle className="w-3 h-3" />
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
