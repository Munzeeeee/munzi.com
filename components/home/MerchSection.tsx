import Link from "next/link";
import { MessageCircle, Truck, Shirt } from "lucide-react";

const tees = [
  {
    slug: "sudo-make-me-a-sandwich-tee",
    name: '"sudo make me a sandwich"',
    subtitle: "The Linux classic",
    price: 15,
    waMsg:
      "Hi%2C+I%27d+like+to+order+the+%22sudo+make+me+a+sandwich%22+Tee.+My+size%3A+",
    // Dark tee mockup content
    dark: true,
    mockup: {
      topLine: "$ _",
      line1: "sudo make me",
      line2: "a sandwich",
    },
  },
  {
    slug: "hello-world-developer-tee",
    name: '"Hello, World!"',
    subtitle: "The dev origin story",
    price: 15,
    waMsg:
      "Hi%2C+I%27d+like+to+order+the+%22Hello%2C+World%21%22+Developer+Tee.+My+size%3A+",
    dark: false,
    mockup: {
      topLine: null,
      line1: "Hello,",
      line2: "World!",
    },
  },
];

const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

export function MerchSection() {
  return (
    <section className="bg-white py-20 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 text-violet-600 text-sm font-semibold uppercase tracking-widest mb-3">
            <Shirt className="w-4 h-4" />
            Dev Merch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-950 tracking-tight">
            Rep your stack.{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
              Wear your craft.
            </span>
          </h2>
          <p className="mt-3 text-zinc-500 text-lg max-w-md mx-auto">
            Premium cotton tees for developers. Ships worldwide — just tell us your size.
          </p>
        </div>

        {/* Tee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {tees.map((tee) => (
            <div
              key={tee.slug}
              className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* T-shirt mockup */}
              <div
                className={`relative flex items-center justify-center px-8 py-14 ${
                  tee.dark ? "bg-zinc-950" : "bg-zinc-50"
                }`}
              >
                {/* Subtle tee silhouette */}
                <div
                  className={`absolute inset-0 opacity-[0.04] ${
                    tee.dark ? "bg-white" : "bg-zinc-950"
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='1' fill='%23000'/%3E%3C/svg%3E")`,
                    backgroundSize: "40px 40px",
                  }}
                />

                {tee.dark ? (
                  /* Terminal style — black tee */
                  <div className="relative font-mono text-center">
                    <p className="text-green-400 text-sm mb-3 opacity-70">
                      $ <span className="animate-pulse">▊</span>
                    </p>
                    <p className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                      {tee.mockup.line1}
                    </p>
                    <p className="text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                      {tee.mockup.line2}
                    </p>
                  </div>
                ) : (
                  /* Clean type — white tee */
                  <div className="relative text-center">
                    <p className="text-zinc-950 text-4xl sm:text-5xl font-black leading-none tracking-tighter">
                      {tee.mockup.line1}
                    </p>
                    <p className="text-zinc-950 text-4xl sm:text-5xl font-black leading-none tracking-tighter">
                      {tee.mockup.line2}
                    </p>
                  </div>
                )}

                {/* Color label */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
                  <span
                    className={`w-4 h-4 rounded-full border-2 ${
                      tee.dark
                        ? "bg-zinc-950 border-zinc-600"
                        : "bg-white border-zinc-300"
                    }`}
                  />
                  <span
                    className={`text-xs font-medium ${
                      tee.dark ? "text-zinc-500" : "text-zinc-400"
                    }`}
                  >
                    {tee.dark ? "Black" : "White"}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                {/* Name + price */}
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-bold text-zinc-950 leading-snug font-mono">
                    {tee.name}
                  </h3>
                  <span className="text-2xl font-bold text-zinc-950 shrink-0">
                    ${tee.price}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 mb-5">{tee.subtitle}</p>

                {/* Sizes */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    Available sizes
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {sizes.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-medium text-zinc-600 border border-zinc-200 rounded-md px-2 py-1 bg-zinc-50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Shipping note */}
                <div className="flex items-center gap-1.5 text-xs text-zinc-400 mb-5">
                  <Truck className="w-3.5 h-3.5 shrink-0" />
                  100% combed cotton · Ships worldwide
                </div>

                {/* CTA */}
                <Link
                  href={`https://wa.me/971569793494?text=${tee.waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold py-3 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order on WhatsApp
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-zinc-400 mt-8">
          Reply with your size after tapping Order — we&apos;ll confirm and send a payment link.
        </p>
      </div>
    </section>
  );
}
