import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Shopify Store", href: "/services/web-development/shopify-store" },
    { label: "WooCommerce", href: "/services/web-development/woocommerce-store" },
    { label: "Google Ads", href: "/services/digital-marketing/google-ads" },
    { label: "Meta Ads", href: "/services/digital-marketing/meta-ads" },
    { label: "SEO Services", href: "/services/digital-marketing/seo" },
    { label: "AI Automation", href: "/services/tech-build/ai-automation" },
    { label: "MVP Development", href: "/services/tech-build/mvp-development" },
  ],
  tools: [
    { label: "Google Review Card", href: "/services/smart-tools/google-review-card" },
    { label: "Digital Business Card", href: "/services/smart-tools/digital-business-card" },
    { label: "Custom QR Code", href: "/services/smart-tools/qr-code" },
    { label: "3D Business Card", href: "/services/smart-tools/3d-business-card" },
    { label: "AI Chatbot", href: "/services/smart-tools/ai-chatbot" },
    { label: "Amazon Listing", href: "/services/marketplace-listings/amazon-listing" },
    { label: "Noon Listing", href: "/services/marketplace-listings/noon-listing" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Hosting Plans", href: "/hosting" },
    { label: "Digital Products", href: "/products" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-zinc-950 font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                Munzeer<span className="text-violet-400">.com</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Your global digital growth partner. Web development, digital marketing, AI automation, and smart business tools — all in one team.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="mailto:info@munzeer.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                info@munzeer.com
              </a>
              <a
                href="https://wa.me/971569793494"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +971 56 979 3494
              </a>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 shrink-0" />
                Serving clients worldwide
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Smart Tools */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Smart Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-white mb-3">Ready to grow?</p>
              <Link
                href={`https://wa.me/971569793494?text=Hi%2C+I%27d+like+to+discuss+a+project`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
              >
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Munzeer.com. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
