import Link from "next/link";
import Image from "next/image";
import { Download, Truck } from "lucide-react";
import type { Product } from "@/content/products";

interface ProductCardProps {
  product: Product;
}

const isShipped = (fmt: string) => fmt.toLowerCase().includes("ship");

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col bg-white border border-zinc-200 rounded-[1rem] overflow-hidden hover:shadow-[0_4px_24px_0_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-200"
    >
      {/* Cover */}
      <div className={`relative w-full h-40 flex items-center justify-center ${product.coverBg || "bg-zinc-50"}`}>
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-5xl select-none" role="img" aria-label={product.name}>
            {product.coverEmoji || "📦"}
          </span>
        )}
        {product.badge && (
          <span className="absolute top-3 left-3 text-xs font-semibold text-violet-600 bg-white/90 backdrop-blur-sm border border-violet-100 px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <span className="self-start badge text-xs mb-2">{product.category}</span>
        <h3 className="font-semibold text-zinc-950 mb-1.5 group-hover:text-violet-600 transition-colors leading-snug">
          {product.name}
        </h3>
        <p className="text-sm text-zinc-500 mb-4 leading-relaxed flex-1">{product.tagline}</p>
        <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
          <div>
            <span className="text-xl font-bold text-zinc-950">${product.price}</span>
            {!isShipped(product.deliveryFormat) && (
              <span className="text-xs text-zinc-400 ml-1">one-time</span>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs text-zinc-400">
            {isShipped(product.deliveryFormat) ? (
              <Truck className="w-3 h-3" />
            ) : (
              <Download className="w-3 h-3" />
            )}
            {product.deliveryFormat}
          </span>
        </div>
      </div>
    </Link>
  );
}
