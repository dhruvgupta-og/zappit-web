# Zappit — Campus Food Delivery Website

Production-ready Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion
marketing site for Zappit, built to drive Android APK downloads.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configuration

Everything editable lives in **`config/site.ts`**:

- `APP_DOWNLOAD_URL` — the single source of truth for the APK link. Every
  download button on the site imports this constant, so updating it once
  updates every CTA.
- `SITE_NAME`, `SITE_DESCRIPTION`, `SITE_URL`
- `CONTACT_EMAIL`, `INSTAGRAM_URL`, `LINKEDIN_URL`, `X_URL`
- `trackDownloadClick(source)` — analytics hook, currently `console.log`s;
  wire it into GA4 / Plausible / Mixpanel / PostHog etc.

## Structure

```
app/
  page.tsx            → assembles the landing page from components/
  download/page.tsx   → dedicated /download page
  privacy/page.tsx
  terms/page.tsx
  layout.tsx          → SEO metadata, fonts, global layout
  globals.css
components/
  Navbar.tsx
  Hero.tsx
  PhoneMockup.tsx
  StatsStrip.tsx
  HowItWorks.tsx
  AppShowcase.tsx
  Features.tsx
  DownloadSection.tsx
  Testimonials.tsx
  FAQ.tsx
  FinalCTA.tsx
  Footer.tsx
  MobileDownloadBar.tsx
config/
  site.ts             → all editable brand/content constants
public/
  robots.txt, sitemap.xml, manifest.json
  zappit/             → placeholder asset slots, see zappit/README.md
```

## What's placeholder and needs replacing before launch

- `APP_DOWNLOAD_URL` in `config/site.ts` — currently `"YOUR_ZAPPIT_APK_URL"`.
- App icon, logo, OG image, and app screenshots in `public/zappit/` (see that
  folder's README).
- Testimonial quotes in `components/Testimonials.tsx` (clearly marked as
  placeholders — `Student User`, `Campus User`, `Beta User`).
- Legal copy in `app/privacy/page.tsx` and `app/terms/page.tsx` — needs review
  by legal counsel.
- Social links and contact email in `config/site.ts`.
- A real QR code image generated from `APP_DOWNLOAD_URL` (the QR "boxes" in
  `DownloadSection.tsx` and `app/download/page.tsx` are visual placeholders —
  swap in a generated QR `<Image>`).

## Notes on the 3D / motion work

- The hero phone mockup (`PhoneMockup.tsx`) tilts toward the cursor using
  Framer Motion's `useMotionValue` + `useSpring`, no Three.js needed — this
  keeps the bundle light and hits 60fps on mid-range devices.
- `AppShowcase.tsx` animates three mini phone mockups into a fanned layout on
  scroll via `whileInView`.
- All motion respects `prefers-reduced-motion` via the rule in
  `app/globals.css`.
- Nothing here uses React Three Fiber — it wasn't necessary for the effects
  requested. If a genuine 3D scene is wanted later (e.g. a real GLTF phone
  model), it would slot into `PhoneMockup.tsx`.

## Deployment

Any Next.js host works (Vercel, Netlify, self-hosted Node). Update
`SITE_URL` in `config/site.ts` and the sitemap/robots URLs in `public/`
to match your production domain before deploying.
