import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import type { Product } from "@/content/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card group hover:-translate-y-1 transition-all duration-200 flex flex-col"
    >
      {/* Category badge */}
      <span className="self-start badge text-xs mb-3">{product.category}</span>
      {product.badge && (
        <span className="self-start text-xs font-semibold text-violet-600 bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-full mb-3">
          {product.badge}
        </span>
      )}
      <h3 className="font-semibold text-zinc-950 mb-1.5 group-hover:text-violet-600 transition-colors leading-snug">
        {product.name}
      </h3>
      <p className="text-sm text-zinc-500 mb-4 leading-relaxed flex-1">{product.tagline}</p>
      <ul className="space-y-1.5 mb-5">
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
        <div>
          <span className="text-xl font-bold text-zinc-950">${product.price}</span>
          <span className="text-xs text-zinc-400 ml-1">one-time</span>
        </div>
        <span className="flex items-center gap-1 text-xs text-zinc-400">
          <Download className="w-3 h-3" />
          {product.deliveryFormat}
        </span>
      </div>
    </Link>
  );
}
