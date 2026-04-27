import type { Metadata } from "next";
import { products } from "@/content/products";
import { ProductCard } from "@/components/products/ProductCard";

export const metadata: Metadata = {
  title: "Products — Templates, eBooks, Plugins & Merch",
  description:
    "Digital products from Munzeer.com — marketing templates, eBooks, AI prompt packs, WordPress plugins, printables, and developer merch. Instant download.",
};

export default function ProductsPage() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      {/* Hero */}
      <section className="bg-zinc-950 pt-12 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Digital Products
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Templates, eBooks & tools — instant download
          </h1>
          <p className="text-xl text-zinc-400">
            Practical resources our team actually uses. Ready to use today.
          </p>
        </div>
      </section>

      {/* Products by category */}
      <section className="section">
        {categories.map((category) => (
          <div key={category} className="mb-14">
            <h2 className="text-xl font-bold text-zinc-950 mb-6 pb-3 border-b border-zinc-100">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* Custom request CTA */}
      <section className="bg-zinc-50 border-t border-zinc-200 py-16 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-zinc-950 mb-3">Can't find what you need?</h2>
          <p className="text-zinc-500 mb-6 text-sm">
            We create custom templates and tools for specific industries. WhatsApp us with your requirements.
          </p>
          <a
            href="https://wa.me/971569793494?text=Hi%2C+I%27m+looking+for+a+specific+digital+product"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Request a custom product
          </a>
        </div>
      </section>
    </>
  );
}
