/**
 * Usage: node scripts/screenshot.mjs
 * Requires the dev server running: npm run dev
 */

import { chromium } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE      = join(__dirname, "..", "screenshots");
const BASE_URL  = "http://localhost:3000";
const VIEWPORT  = { width: 1440, height: 900 };

/* ── Sections to capture ─────────────────────────────────────────────
   Each entry: { dir, file, url, selector? }
   - selector: CSS selector of the element to clip. Omit for full page.
   - If the element needs scrolling into view, we handle that.
─────────────────────────────────────────────────────────────────────── */
const sections = [
  // ── Navbar ──
  { dir: "navbar", file: "01-navbar-default.png",    url: "/",      selector: "header" },
  { dir: "navbar", file: "02-navbar-scrolled.png",   url: "/",      selector: "header", scrollY: 200 },

  // ── Home page sections ──
  { dir: "home",   file: "01-hero.png",              url: "/",      selector: "section:first-of-type" },
  { dir: "home",   file: "02-logo-bar.png",          url: "/",      selector: "section:first-of-type .border-t" },
  { dir: "home",   file: "03-services-grid.png",     url: "/",      selector: "section:nth-of-type(2)" },
  { dir: "home",   file: "04-how-it-works.png",      url: "/",      selector: "section:nth-of-type(3)" },
  { dir: "home",   file: "05-products-preview.png",  url: "/",      selector: "section:nth-of-type(4)" },
  { dir: "home",   file: "06-hosting-preview.png",   url: "/",      selector: "section:nth-of-type(5)" },
  { dir: "home",   file: "07-testimonials.png",      url: "/",      selector: "section:nth-of-type(6)" },
  { dir: "home",   file: "08-final-cta.png",         url: "/",      selector: "section:nth-of-type(7)" },
  { dir: "home",   file: "09-footer.png",            url: "/",      selector: "footer" },
  { dir: "home",   file: "00-full-page.png",         url: "/",      fullPage: true },

  // ── Services ──
  { dir: "services", file: "00-services-page.png",     url: "/services",                          fullPage: true },
  { dir: "services", file: "01-web-dev-hero.png",       url: "/services/web-development/shopify-store", selector: "section:first-of-type" },
  { dir: "services", file: "02-service-page-full.png",  url: "/services/web-development/shopify-store", fullPage: true },

  // ── Hosting ──
  { dir: "hosting", file: "00-hosting-page.png",  url: "/hosting", fullPage: true },
  { dir: "hosting", file: "01-pricing-cards.png", url: "/hosting", selector: "section:first-of-type" },

  // ── Products ──
  { dir: "products", file: "00-products-page.png", url: "/products", fullPage: true },

  // ── Other pages ──
  { dir: "pages", file: "about.png",   url: "/about",   fullPage: true },
  { dir: "pages", file: "contact.png", url: "/contact", fullPage: true },
  { dir: "pages", file: "blog.png",    url: "/blog",    fullPage: true },
];

async function run() {
  const browser = await chromium.launch();
  const page    = await browser.newPage();
  await page.setViewportSize(VIEWPORT);

  let passed = 0;
  let failed = 0;

  for (const s of sections) {
    const dir  = join(BASE, s.dir);
    const file = join(dir, s.file);
    mkdirSync(dir, { recursive: true });

    try {
      await page.goto(`${BASE_URL}${s.url}`, { waitUntil: "load", timeout: 30000 });

      // Optional scroll before screenshot
      if (s.scrollY) await page.evaluate((y) => window.scrollTo(0, y), s.scrollY);

      // Wait a moment for animations
      await page.waitForTimeout(600);

      if (s.fullPage) {
        await page.screenshot({ path: file, fullPage: true });
      } else if (s.selector) {
        const el = await page.$(s.selector);
        if (el) {
          await el.scrollIntoViewIfNeeded();
          await page.screenshot({ path: file, clip: await el.boundingBox() ?? undefined });
        } else {
          // Fallback to viewport screenshot
          await page.screenshot({ path: file });
          console.warn(`  ⚠  selector not found: ${s.selector} — used viewport`);
        }
      } else {
        await page.screenshot({ path: file });
      }

      console.log(`  ✓  ${s.dir}/${s.file}`);
      passed++;
    } catch (err) {
      console.error(`  ✗  ${s.dir}/${s.file}: ${err.message}`);
      failed++;
    }
  }

  await browser.close();
  console.log(`\nDone — ${passed} captured, ${failed} failed`);
  console.log(`Screenshots saved to: screenshots/`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
