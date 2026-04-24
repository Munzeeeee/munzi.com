# Munzeer.com — Setup Guide

## Prerequisites

Install Node.js (v20+ recommended): https://nodejs.org

## Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy environment variables
cp .env.example .env.local

# 3. Fill in your .env.local values:
#    RESEND_API_KEY      — from resend.com (free tier works)
#    SUPABASE_URL        — from supabase.com project settings
#    SUPABASE_ANON_KEY   — from supabase.com project settings
#    OWNER_EMAIL         — your email (enquiry.munzeer@gmail.com)

# 4. Run development server
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add your environment variables in Vercel project settings.

## Key Files

| File | Purpose |
|---|---|
| `content/services.ts` | All 15 service definitions |
| `content/products.ts` | Digital product listings |
| `content/hosting-plans.ts` | Hosting plan data |
| `content/blog/*.mdx` | Blog posts (add new .mdx files here) |
| `app/api/quote/route.ts` | Quote form email handler |
| `app/api/contact/route.ts` | Contact form email handler |
| `app/api/hosting-order/route.ts` | Hosting order email handler |
| `components/layout/Navbar.tsx` | Mega-menu navigation |

## Adding a New Blog Post

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2025-04-01"
category: "Web Development"
readTime: "5 min read"
excerpt: "A short description for the blog index page."
---

Your content here in Markdown...
```

## Adding a New Service

Add an entry to `content/services.ts` following the `Service` interface, then the dynamic routes at `app/services/[category]/[slug]/page.tsx` will handle it automatically.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Your production domain |
| `RESEND_API_KEY` | Yes | For contact/quote/order emails |
| `OWNER_EMAIL` | Yes | Where form submissions are sent |
| `SUPABASE_URL` | Optional | Only if using database features |
| `SUPABASE_ANON_KEY` | Optional | Only if using database features |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Yes | WhatsApp number (digits only) |
