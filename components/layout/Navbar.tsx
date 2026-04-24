"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Globe, TrendingUp, Zap, ShoppingCart, Cpu, ChevronDown,
  Menu, X, ShoppingBag, Store, Search, Megaphone, Video,
  Star, QrCode, CreditCard, Layers, MessageSquare, Package, Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";

const megaMenuData = [
  {
    category: "Web Development", slug: "web-development", icon: Globe,
    color: "text-violet-600", bg: "bg-violet-50",
    services: [
      { name: "Shopify Store", slug: "shopify-store", icon: ShoppingBag },
      { name: "WooCommerce", slug: "woocommerce-store", icon: Store },
      { name: "Company Website", slug: "company-website", icon: Globe },
    ],
  },
  {
    category: "Digital Marketing", slug: "digital-marketing", icon: TrendingUp,
    color: "text-teal-600", bg: "bg-teal-50",
    services: [
      { name: "Google Ads", slug: "google-ads", icon: Search },
      { name: "Meta Ads", slug: "meta-ads", icon: Megaphone },
      { name: "TikTok + LinkedIn", slug: "tiktok-linkedin-ads", icon: Video },
      { name: "SEO", slug: "seo", icon: TrendingUp },
    ],
  },
  {
    category: "Smart Tools", slug: "smart-tools", icon: Zap,
    color: "text-amber-600", bg: "bg-amber-50",
    services: [
      { name: "Google Review Card", slug: "google-review-card", icon: Star },
      { name: "Custom QR Code", slug: "qr-code", icon: QrCode },
      { name: "Digital Business Card", slug: "digital-business-card", icon: CreditCard },
      { name: "3D Business Card", slug: "3d-business-card", icon: Layers },
      { name: "AI Chatbot", slug: "ai-chatbot", icon: MessageSquare },
    ],
  },
  {
    category: "Marketplace", slug: "marketplace-listings", icon: ShoppingCart,
    color: "text-orange-600", bg: "bg-orange-50",
    services: [
      { name: "Amazon Listing", slug: "amazon-listing", icon: Package },
      { name: "Noon Listing", slug: "noon-listing", icon: ShoppingCart },
    ],
  },
  {
    category: "Tech Build + AI", slug: "tech-build", icon: Cpu,
    color: "text-blue-600", bg: "bg-blue-50",
    services: [
      { name: "AI Automation", slug: "ai-automation", icon: Zap },
      { name: "MVP Development", slug: "mvp-development", icon: Rocket },
      { name: "SaaS Products", slug: "saas-products", icon: Layers },
    ],
  },
];

const navLinks = [
  { label: "Products", href: "/products", hasArrow: true },
  { label: "Hosting", href: "/hosting", hasArrow: true },
  { label: "About Us", href: "/about", hasArrow: false },
  { label: "Tools", href: "/services/smart-tools", hasArrow: true },
];

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-sm"
            : "bg-white border-b border-zinc-100"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[60px] flex items-center justify-between gap-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-zinc-950 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm tracking-tight">M</span>
            </div>
            <span className="font-bold text-zinc-950 text-[17px] tracking-tight">Munzeer</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {/* Services mega trigger */}
            <button
              className={cn(
                "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                servicesOpen ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"
              )}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", servicesOpen && "rotate-180")} />
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-950"
                )}
              >
                {link.label}
                {link.hasArrow && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link href="/contact" className="text-sm font-medium text-zinc-500 hover:text-zinc-950 transition-colors px-3">
              Contact
            </Link>
            <Link
              href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+get+a+quote`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-950 hover:bg-zinc-800 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mega Menu */}
        {servicesOpen && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-xl"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-5 gap-6">
                {megaMenuData.map((cat) => (
                  <div key={cat.slug}>
                    <Link href={`/services/${cat.slug}`} className="flex items-center gap-2 mb-3 group">
                      <div className={cn("w-6 h-6 rounded-md flex items-center justify-center", cat.bg)}>
                        <cat.icon className={cn("w-3.5 h-3.5", cat.color)} />
                      </div>
                      <span className="text-sm font-semibold text-zinc-950 group-hover:text-violet-600 transition-colors">
                        {cat.category}
                      </span>
                    </Link>
                    <ul className="space-y-0.5">
                      {cat.services.map((svc) => (
                        <li key={svc.slug}>
                          <Link
                            href={`/services/${cat.slug}/${svc.slug}`}
                            className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-sm text-zinc-500 hover:text-zinc-950 hover:bg-zinc-50 transition-colors"
                          >
                            <svc.icon className="w-3.5 h-3.5 shrink-0" />
                            {svc.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-zinc-100 flex items-center justify-between">
                <p className="text-sm text-zinc-500">
                  Not sure what you need?{" "}
                  <Link href="/contact" className="text-violet-600 font-medium hover:underline">
                    Tell us your goal →
                  </Link>
                </p>
                <Link href="/services" className="text-sm font-medium text-zinc-950 hover:text-violet-600 transition-colors">
                  View all services →
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer */}
      <div className={cn("fixed inset-0 z-40 lg:hidden transition-all duration-300", mobileOpen ? "visible" : "invisible")}>
        <div
          className={cn("absolute inset-0 bg-black/20 transition-opacity duration-300", mobileOpen ? "opacity-100" : "opacity-0")}
          onClick={() => setMobileOpen(false)}
        />
        <div className={cn("absolute top-[60px] left-0 right-0 bottom-0 bg-white overflow-y-auto transition-transform duration-300", mobileOpen ? "translate-y-0" : "-translate-y-full")}>
          <div className="px-4 py-5 space-y-1">
            <button
              className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-zinc-950 hover:bg-zinc-50 transition-colors"
              onClick={() => setMobileCategory(mobileCategory === "services" ? null : "services")}
            >
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileCategory === "services" && "rotate-180")} />
            </button>
            {mobileCategory === "services" && (
              <div className="mt-1 space-y-3 px-2 pb-2">
                {megaMenuData.map((cat) => (
                  <div key={cat.slug}>
                    <Link href={`/services/${cat.slug}`} className={cn("flex items-center gap-2 py-1.5 text-sm font-semibold", cat.color)}>
                      <cat.icon className="w-3.5 h-3.5" />{cat.category}
                    </Link>
                    <div className="ml-5 space-y-1">
                      {cat.services.map((svc) => (
                        <Link key={svc.slug} href={`/services/${cat.slug}/${svc.slug}`}
                          className="block py-1 text-sm text-zinc-500 hover:text-zinc-950 transition-colors">
                          {svc.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {[...navLinks, { label: "Contact", href: "/contact", hasArrow: false }].map((link) => (
              <Link key={link.href} href={link.href}
                className="block px-3 py-3 rounded-lg text-sm font-semibold text-zinc-950 hover:bg-zinc-50 transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-zinc-100">
              <Link href="https://wa.me/971569793494" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center bg-zinc-950 text-white text-sm font-semibold py-3 rounded-xl">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[60px]" />
    </>
  );
}
