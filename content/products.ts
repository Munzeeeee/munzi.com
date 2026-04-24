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
}

export const products: Product[] = [
  {
    slug: "shopify-launch-checklist",
    name: "Shopify Launch Checklist",
    tagline: "Everything you need to launch your Shopify store right",
    description:
      "A comprehensive 80-point checklist covering store setup, SEO, analytics, legal pages, payment configuration, and post-launch checks. Used by our team on every Shopify project.",
    price: 19,
    category: "Templates",
    badge: "Bestseller",
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
    slug: "ai-automation-guide",
    name: "AI Automation for Small Business",
    tagline: "Save 10+ hours/week with these proven automation workflows",
    description:
      "A practical eBook covering 20 real automation workflows using Make.com, Zapier, and ChatGPT. Includes step-by-step setup guides for WhatsApp auto-reply, lead qualification, invoice automation, and social media scheduling.",
    price: 49,
    category: "eBooks",
    badge: "New",
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
    slug: "amazon-listing-swipe-file",
    name: "Amazon Listing Swipe File",
    tagline: "Proven listing templates that rank and convert",
    description:
      "50 high-converting Amazon listing templates across 10 categories. Includes title formulas, bullet point frameworks, and A+ content guidelines. Used to optimise 200+ Amazon listings.",
    price: 35,
    category: "Templates",
    features: [
      "50 listing templates (10 categories)",
      "Title formulas that rank",
      "Bullet point frameworks",
      "A+ Content layout guide",
      "Backend keyword strategy",
    ],
    deliveryFormat: "Word + PDF",
  },
  {
    slug: "chatgpt-prompt-pack-business",
    name: "ChatGPT Prompt Pack for Business",
    tagline: "200+ prompts for marketing, sales, operations, and support",
    description:
      "A curated pack of 200+ ChatGPT prompts organised by business function. Covers social media, email marketing, customer support, product descriptions, SEO, HR, and more.",
    price: 25,
    category: "Prompt Packs",
    badge: "Popular",
    features: [
      "200+ battle-tested prompts",
      "Organised by business function",
      "Copywriting + content prompts",
      "Customer support scripts",
      "SEO and product description prompts",
    ],
    deliveryFormat: "Notion + PDF",
  },
];
