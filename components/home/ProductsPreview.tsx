import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { products } from "@/content/products";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function ProductsPreview() {
  const preview = products.slice(0, 4);

  return (
    <section className="section">
      <SectionHeader
        eyebrow="Digital products"
        heading="Templates, eBooks & tools — instant download"
        subheading="Practical resources our team actually uses. Ready to use today."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {preview.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="card group hover:-translate-y-1 transition-all duration-200"
          >
            {product.badge && (
              <span className="inline-block text-xs font-semibold text-violet-600 bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-full mb-3">
                {product.badge}
              </span>
            )}
            <h3 className="font-semibold text-zinc-950 text-sm mb-1.5 group-hover:text-violet-600 transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-zinc-500 mb-4 leading-relaxed line-clamp-2">
              {product.tagline}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold text-zinc-950">${product.price}</span>
              <span className="flex items-center gap-1 text-xs text-zinc-400">
                <Download className="w-3 h-3" />
                {product.deliveryFormat}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center">
        <Link href="/products" className="btn-outline">
          View all products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
