export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  category: string;
  badge?: string;
  features: string[];
  deliveryFormat: string;
  previewUrl?: string;
  coverBg?: string;
  coverEmoji?: string;
  image?: string;
}

export const products: Product[] = [
  // ─── Templates ───────────────────────────────────────────────
  {
    slug: "shopify-launch-checklist",
    name: "Shopify Launch Checklist",
    tagline: "Everything you need to launch your Shopify store right",
    description:
      "A comprehensive 80-point checklist covering store setup, SEO, analytics, legal pages, payment configuration, and post-launch checks. Used by our team on every Shopify project.",
    price: 19,
    category: "Templates",
    badge: "Bestseller",
    coverBg: "bg-violet-100",
    coverEmoji: "✅",
    features: [
      "80-point pre-launch checklist",
      "PDF + Notion template",
      "SEO and tracking setup guide",
      "Legal pages checklist",
      "Mobile testing guide",
    ],
    deliveryFormat: "PDF + Notion",
  },
  {
    slug: "google-ads-starter-pack",
    name: "Google Ads Starter Pack",
    tagline: "Launch your first Google Ads campaign the right way",
    description:
      "Includes keyword research template, ad copy swipe file (50+ proven headlines), campaign structure guide, and conversion tracking checklist. Everything a beginner or small business needs.",
    price: 29,
    category: "Templates",
    badge: "Popular",
    coverBg: "bg-blue-100",
    coverEmoji: "📈",
    features: [
      "Keyword research Excel template",
      "50+ proven ad headline swipe file",
      "Campaign structure cheat sheet",
      "Conversion tracking setup guide",
      "Budget calculator",
    ],
    deliveryFormat: "Excel + PDF",
  },
  {
    slug: "seo-audit-template",
    name: "SEO Audit Template",
    tagline: "Run a professional SEO audit on any website in 2 hours",
    description:
      "The exact template our SEO team uses to audit client websites. Covers technical SEO, on-page, off-page, Core Web Vitals, and content gaps. Includes a scoring system and priority matrix.",
    price: 39,
    category: "Templates",
    coverBg: "bg-teal-100",
    coverEmoji: "🔍",
    features: [
      "200+ point audit checklist",
      "Google Sheets scoring template",
      "Priority matrix (effort vs impact)",
      "Core Web Vitals checklist",
      "Competitor gap analysis template",
    ],
    deliveryFormat: "Google Sheets + PDF",
  },
  {
    slug: "amazon-listing-swipe-file",
    name: "Amazon Listing Swipe File",
    tagline: "Proven listing templates that rank and convert",
    description:
      "50 high-converting Amazon listing templates across 10 categories. Includes title formulas, bullet point frameworks, and A+ content guidelines. Used to optimise 200+ Amazon listings.",
    price: 35,
    category: "Templates",
    coverBg: "bg-orange-100",
    coverEmoji: "📦",
    features: [
      "50 listing templates (10 categories)",
      "Title formulas that rank",
      "Bullet point frameworks",
      "A+ Content layout guide",
      "Backend keyword strategy",
    ],
    deliveryFormat: "Word + PDF",
  },

  // ─── eBooks ───────────────────────────────────────────────────
  {
    slug: "ai-automation-guide",
    name: "AI Automation for Small Business",
    tagline: "Save 10+ hours/week with these proven automation workflows",
    description:
      "A practical eBook covering 20 real automation workflows using Make.com, Zapier, and ChatGPT. Includes step-by-step setup guides for WhatsApp auto-reply, lead qualification, invoice automation, and social media scheduling.",
    price: 49,
    category: "eBooks",
    badge: "New",
    coverBg: "bg-indigo-100",
    coverEmoji: "🤖",
    features: [
      "20 ready-to-use automation workflows",
      "Make.com + Zapier setup guides",
      "WhatsApp automation walkthrough",
      "ChatGPT integration examples",
      "ROI calculator",
    ],
    deliveryFormat: "PDF eBook",
  },
  {
    slug: "kids-superhero-ebook",
    name: "Kids Customised SuperHero eBook",
    tagline: "Your child is the hero — personalised just for them",
    description:
      "A magical 20-page illustrated children's eBook where your child becomes the superhero. We personalise the hero's name, appearance, and superpower. Order via WhatsApp with your child's details — delivered within 24 hours.",
    price: 14,
    category: "eBooks",
    badge: "Gift Idea",
    coverBg: "bg-yellow-100",
    coverEmoji: "🦸",
    features: [
      "20-page illustrated story",
      "Child's name woven through the story",
      "Customised hero appearance",
      "Choose their superpower",
      "High-quality print-ready PDF",
    ],
    deliveryFormat: "PDF eBook (Personalised)",
  },

  // ─── Prompt Packs ─────────────────────────────────────────────
  {
    slug: "chatgpt-prompt-pack-business",
    name: "ChatGPT Prompt Pack for Business",
    tagline: "200+ prompts for marketing, sales, operations, and support",
    description:
      "A curated pack of 200+ ChatGPT prompts organised by business function. Covers social media, email marketing, customer support, product descriptions, SEO, HR, and more.",
    price: 25,
    category: "Prompt Packs",
    badge: "Popular",
    coverBg: "bg-emerald-100",
    coverEmoji: "💬",
    features: [
      "200+ battle-tested prompts",
      "Organised by business function",
      "Copywriting + content prompts",
      "Customer support scripts",
      "SEO and product description prompts",
    ],
    deliveryFormat: "Notion + PDF",
  },
  {
    slug: "ai-prompt-pack-creators",
    name: "AI Prompt Pack for Creators",
    tagline: "500+ prompts for content creators, designers & marketers",
    description:
      "A carefully curated collection of 500+ AI prompts for content creators. Covers YouTube scripts, Instagram captions, blog posts, newsletter writing, design briefs, brand storytelling, and more. Works with ChatGPT, Claude, and Gemini.",
    price: 19,
    category: "Prompt Packs",
    coverBg: "bg-purple-100",
    coverEmoji: "✨",
    features: [
      "500+ prompts across 10 creator niches",
      "YouTube, Instagram & TikTok prompts",
      "Blog & newsletter writing prompts",
      "Design brief & brand story prompts",
      "Works with ChatGPT, Claude & Gemini",
    ],
    deliveryFormat: "Notion + PDF",
  },

  // ─── Plugins & Software ───────────────────────────────────────
  {
    slug: "order-on-whatsapp-plugin",
    name: "Order on WhatsApp — WordPress Plugin",
    tagline: "Add a WhatsApp order button to any WooCommerce product",
    description:
      "A lightweight WordPress plugin that adds a customisable \"Order on WhatsApp\" button to WooCommerce product pages. Customers tap to send a pre-filled order message directly to your WhatsApp. No extra checkout steps — more conversions.",
    price: 29,
    category: "Plugins & Software",
    badge: "Popular",
    coverBg: "bg-green-100",
    coverEmoji: "🔌",
    features: [
      "WooCommerce compatible",
      "Customisable button text & colour",
      "Pre-filled order message with product details",
      "Works on mobile and desktop",
      "One-time purchase, lifetime updates",
    ],
    deliveryFormat: "WordPress Plugin (.zip)",
  },
  {
    slug: "dynamic-qr-code-software",
    name: "Dynamic QR Code Software",
    tagline: "Generate, track, and update QR codes without reprinting",
    description:
      "A web-based tool to create dynamic QR codes you can update anytime — change the destination URL without reprinting. Includes scan analytics (total scans, location, device type), custom colours, and logo embedding.",
    price: 29,
    category: "Plugins & Software",
    badge: "New",
    coverBg: "bg-cyan-100",
    coverEmoji: "⚡",
    features: [
      "Dynamic QR codes — edit destination anytime",
      "Scan analytics (count, location, device)",
      "Custom colours & logo embed",
      "Bulk QR code generation",
      "Lifetime access, no monthly fee",
    ],
    deliveryFormat: "Web App (lifetime access)",
  },

  // ─── Smart Tools ──────────────────────────────────────────────
  {
    slug: "google-review-card",
    name: "Google Review NFC Card",
    tagline: "Customers tap to leave a Google review — instantly",
    description:
      "An NFC-powered card that customers tap with their phone to land directly on your Google review page. No app needed, works with all modern smartphones. Fully branded with your business name and logo.",
    price: 49,
    category: "Smart Tools",
    badge: "Bestseller",
    coverBg: "bg-yellow-50",
    coverEmoji: "⭐",
    features: [
      "NFC + QR code dual technology",
      "Links directly to your Google review page",
      "Custom branded card design",
      "Works with all modern smartphones",
      "Tracked URL with scan analytics",
    ],
    deliveryFormat: "NFC Card (shipped)",
  },
  {
    slug: "digital-business-card",
    name: "Digital Business Card",
    tagline: "Tap to share your contact — no app needed",
    description:
      "A smart NFC card that instantly shares your contact details, social links, and website with a single tap. Your digital profile page is always up to date — no reprinting needed. Includes analytics dashboard.",
    price: 79,
    category: "Smart Tools",
    coverBg: "bg-blue-50",
    coverEmoji: "💼",
    features: [
      "NFC + QR code on one card",
      "Custom digital profile page",
      "All social & contact links",
      "Analytics dashboard",
      "Lifetime free profile updates",
    ],
    deliveryFormat: "NFC Card (shipped)",
  },

  // ─── Printables ───────────────────────────────────────────────
  {
    slug: "budget-planner-printable",
    name: "Budget Planner Printable Pack",
    tagline: "Take control of your finances with these beautiful planners",
    description:
      "A complete printable budget planner pack including monthly budget tracker, weekly expense log, debt payoff tracker, savings goal sheet, and annual financial overview. Print at home on any A4 or US Letter printer.",
    price: 9,
    category: "Printables",
    badge: "Bestseller",
    coverBg: "bg-rose-100",
    coverEmoji: "📊",
    features: [
      "12-month budget tracker",
      "Weekly expense log sheets",
      "Debt payoff tracker",
      "Savings goal sheet",
      "A4 + US Letter formats included",
    ],
    deliveryFormat: "PDF Printables",
  },
  {
    slug: "social-media-planner-printable",
    name: "Social Media Content Planner",
    tagline: "Plan 90 days of content in one afternoon",
    description:
      "A printable social media content planner with monthly calendar grid, weekly content breakdown, caption idea sheets, hashtag swipe file, and analytics tracking. Works for Instagram, TikTok, LinkedIn, and Facebook.",
    price: 9,
    category: "Printables",
    coverBg: "bg-pink-100",
    coverEmoji: "📱",
    features: [
      "90-day content calendar grid",
      "Platform-specific posting guides",
      "Caption & hashtag swipe sheets",
      "Analytics tracking sheet",
      "A4 + US Letter formats",
    ],
    deliveryFormat: "PDF Printables",
  },

  // ─── Merchandise ──────────────────────────────────────────────
  {
    slug: "lazy-monkey-tee",
    name: "Lazy Monkey Tee",
    tagline: "Your spirit animal — chillin' like a pro",
    description:
      "A cute illustrated lazy cat print on premium white cotton. Perfect for those who understand the art of doing absolutely nothing. Soft, relaxed fit.",
    price: 15,
    category: "Merchandise",
    image: "/merch/lazy-monkey.jpg",
    coverBg: "bg-zinc-100",
    coverEmoji: "🐱",
    features: [
      "100% combed cotton, 180gsm",
      "Unisex fit, sizes S–3XL",
      "White tee, illustrated print",
      "Pre-shrunk & machine washable",
      "Ships worldwide",
    ],
    deliveryFormat: "Shipped worldwide",
  },
  {
    slug: "savage-claw-tee",
    name: "Savage Claw Tee",
    tagline: "Minimal. Sharp. Untamed.",
    description:
      "Clean white tee with a striking claw mark graphic. Subtle enough for everyday wear, bold enough to make a statement. Premium cotton, relaxed fit.",
    price: 15,
    category: "Merchandise",
    image: "/merch/savage-claw.jpg",
    coverBg: "bg-zinc-100",
    coverEmoji: "🐾",
    features: [
      "100% combed cotton, 180gsm",
      "Unisex fit, sizes S–3XL",
      "White tee, graphic print",
      "Pre-shrunk & machine washable",
      "Ships worldwide",
    ],
    deliveryFormat: "Shipped worldwide",
  },
  {
    slug: "shadow-kitty-tee",
    name: "Shadow Kitty Tee",
    tagline: "Dark vibes, soft cotton",
    description:
      "A mysterious shadow cat illustration on crisp white cotton. For cat lovers who appreciate the dramatic side of life. Minimal, moody, and incredibly soft.",
    price: 15,
    category: "Merchandise",
    image: "/merch/shadow-kitty-tee.jpg",
    coverBg: "bg-zinc-100",
    coverEmoji: "🐈‍⬛",
    features: [
      "100% combed cotton, 180gsm",
      "Unisex fit, sizes S–3XL",
      "White tee, shadow print",
      "Pre-shrunk & machine washable",
      "Ships worldwide",
    ],
    deliveryFormat: "Shipped worldwide",
  },
  {
    slug: "stealth-paw-tee",
    name: "Stealth Paw Tee",
    tagline: "Soft steps. Big personality.",
    description:
      "A clean paw print graphic on premium white cotton. Simple, iconic, and loved by animal lovers everywhere. Pairs well with everything.",
    price: 15,
    category: "Merchandise",
    image: "/merch/stealth-paw.jpg",
    coverBg: "bg-zinc-100",
    coverEmoji: "🐾",
    features: [
      "100% combed cotton, 180gsm",
      "Unisex fit, sizes S–3XL",
      "White tee, paw print",
      "Pre-shrunk & machine washable",
      "Ships worldwide",
    ],
    deliveryFormat: "Shipped worldwide",
  },
  {
    slug: "unknown-being-tee",
    name: "Unknown Being Tee",
    tagline: "Not from around here",
    description:
      "A quirky little alien graphic on clean white cotton. For the curious minds who wonder if we're alone. Wear it on casual Fridays or UFO watch nights.",
    price: 15,
    category: "Merchandise",
    image: "/merch/unknown-being.jpg",
    coverBg: "bg-zinc-100",
    coverEmoji: "👽",
    features: [
      "100% combed cotton, 180gsm",
      "Unisex fit, sizes S–3XL",
      "White tee, alien graphic",
      "Pre-shrunk & machine washable",
      "Ships worldwide",
    ],
    deliveryFormat: "Shipped worldwide",
  },
];
