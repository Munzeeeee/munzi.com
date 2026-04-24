const logos = [
  { name: "Shopify", color: "#96bf48" },
  { name: "WooCommerce", color: "#96588a" },
  { name: "Google Ads", color: "#4285f4" },
  { name: "Meta", color: "#1877f2" },
  { name: "TikTok", color: "#000000" },
  { name: "Amazon", color: "#ff9900" },
  { name: "Noon", color: "#feee00", textColor: "#000" },
  { name: "Make.com", color: "#6d00cc" },
  { name: "OpenAI", color: "#10a37f" },
];

export function LogoBar() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-8">
          We work with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 bg-white border border-zinc-200 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
                style={{ backgroundColor: logo.color }}
              >
                <span
                  className="text-[10px] font-bold leading-none"
                  style={{ color: logo.textColor || "#fff" }}
                >
                  {logo.name.charAt(0)}
                </span>
              </div>
              <span className="text-sm font-medium text-zinc-700">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
