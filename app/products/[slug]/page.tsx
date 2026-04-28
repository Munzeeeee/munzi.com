import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check, Download, Truck, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { products } from "@/content/products";

const isShipped = (fmt: string) => fmt.toLowerCase().includes("ship");

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="section">
        <Link href="/products" className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 mb-8 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          All Products
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: details */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge">{product.category}</span>
              {product.badge && (
                <span className="text-xs font-semibold text-violet-600 bg-violet-50 border border-violet-100 px-2.5 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-950 mb-2 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-violet-600 font-medium mb-4">{product.tagline}</p>
            <p className="text-zinc-500 leading-relaxed mb-6">{product.description}</p>
            {!product.comingSoon && (
              <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
                {isShipped(product.deliveryFormat) ? <Truck className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                {isShipped(product.deliveryFormat) ? "Delivery:" : "Delivered as:"}{" "}
                <span className="font-medium text-zinc-700">{product.deliveryFormat}</span>
              </div>
            )}

            {product.comingSoon ? (
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 text-zinc-600 text-sm font-semibold px-5 py-3 rounded-xl mb-4">
                  <Clock className="w-4 h-4" />
                  Coming Soon
                </div>
                <p className="text-sm text-zinc-400">
                  This product is not yet available. Join our WhatsApp to be notified when it launches.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-5xl font-bold text-zinc-950">${product.price}</span>
                  <span className="text-zinc-400 text-sm">one-time payment</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+buy+${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Buy via WhatsApp
                  </Link>
                  <Link href="/contact" className="btn-outline">
                    Ask a question
                  </Link>
                </div>
                <p className="text-xs text-zinc-400 mt-3">
                  Payment link sent via WhatsApp after enquiry. Instant delivery on payment.
                </p>
              </>
            )}
          </div>

          {/* Right: cover + features */}
          <div className="space-y-5">
            {/* Cover image */}
            <div className={`w-full h-56 rounded-2xl flex items-center justify-center overflow-hidden ${product.coverBg || "bg-zinc-50"}`}>
              {product.image ? (
                <Image src={product.image} alt={product.name} width={600} height={224} className="w-full h-full object-cover" />
              ) : (
                <span className="text-7xl select-none" role="img" aria-label={product.name}>{product.coverEmoji || "📦"}</span>
              )}
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-7">
            <h2 className="font-semibold text-zinc-950 mb-5">What you get</h2>
            <ul className="space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-violet-600" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-zinc-700">{f}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section border-t border-zinc-100">
          <h2 className="text-xl font-bold text-zinc-950 mb-6">More products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="card group hover:-translate-y-1 transition-all">
                <span className="badge text-xs mb-3">{p.category}</span>
                <h3 className="font-semibold text-zinc-950 text-sm mb-1 group-hover:text-violet-600 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-zinc-400 mb-3">{p.tagline}</p>
                <span className="font-bold text-zinc-950">${p.price}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
