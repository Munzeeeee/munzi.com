export interface HostingPlan {
  id: string;
  name: string;
  tagline: string;
  price: number;
  billingPeriod: "month" | "year";
  badge?: string;
  features: {
    websites: number | "Unlimited";
    storage: string;
    bandwidth: string;
    emails: number | "Unlimited";
    ssl: boolean;
    backups: string;
    support: string;
    cpanel: boolean;
    wordpressInstaller: boolean;
    freeDomain: boolean;
  };
  cta: string;
  popular?: boolean;
}

export const hostingPlans: HostingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for personal sites and small projects",
    price: 5,
    billingPeriod: "month",
    features: {
      websites: 1,
      storage: "10 GB SSD",
      bandwidth: "100 GB",
      emails: 5,
      ssl: true,
      backups: "Weekly",
      support: "Email",
      cpanel: true,
      wordpressInstaller: true,
      freeDomain: false,
    },
    cta: "Order Starter",
  },
  {
    id: "business",
    name: "Business",
    tagline: "Best for growing businesses and WordPress sites",
    price: 12,
    billingPeriod: "month",
    badge: "Most Popular",
    popular: true,
    features: {
      websites: 5,
      storage: "50 GB SSD",
      bandwidth: "Unlimited",
      emails: 50,
      ssl: true,
      backups: "Daily",
      support: "Email + WhatsApp",
      cpanel: true,
      wordpressInstaller: true,
      freeDomain: true,
    },
    cta: "Order Business",
  },
  {
    id: "agency",
    name: "Agency",
    tagline: "For agencies and clients needing multiple sites",
    price: 25,
    billingPeriod: "month",
    badge: "Best Value",
    features: {
      websites: "Unlimited",
      storage: "200 GB SSD",
      bandwidth: "Unlimited",
      emails: "Unlimited",
      ssl: true,
      backups: "Daily",
      support: "Priority WhatsApp",
      cpanel: true,
      wordpressInstaller: true,
      freeDomain: true,
    },
    cta: "Order Agency",
  },
];

export const hostingFeatureLabels: Record<string, string> = {
  websites: "Websites",
  storage: "Storage",
  bandwidth: "Bandwidth",
  emails: "Email Accounts",
  ssl: "Free SSL Certificate",
  backups: "Backups",
  support: "Support",
  cpanel: "cPanel Access",
  wordpressInstaller: "1-Click WordPress Install",
  freeDomain: "Free Domain (1 year)",
};
