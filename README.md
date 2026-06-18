# LaunchPropFirm — Landing Page

Premium fintech SaaS landing page built from the approved design spec
(`LaunchPropFirm-Elementor-Build-Plan.md`), translated to:

- **Next.js 15** (App Router) · **TypeScript** · **Tailwind CSS**
- Fully responsive (desktop > 1024 / tablet ≤ 1024 / mobile ≤ 767)
- Entrance animations on desktop/tablet, disabled on mobile (per spec)
- `prefers-reduced-motion` respected

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/
  layout.tsx          Inter font, metadata, globals
  page.tsx            Section assembly (spec order 1–13)
  globals.css         Tokens, blur, reveal + bounce animations
components/
  links.ts            All WhatsApp deep links (exact prefilled messages) + demo URL placeholders
  icons.tsx           Inline SVG icons (no icon CDN)
  Reveal.tsx          IntersectionObserver fade-in-up / zoom-in
  Header.tsx          Sticky blurred header (logo, anchors, WhatsApp pill)
  Hero.tsx            S1 — H1, dual CTA, checks, media frame, radial glows
  ProofStrip.tsx      S2 — 3 clickable screenshots
  ThreePaths.tsx      S3 — Build/Rent/Own cards (light)
  LiveDemo.tsx        S4 — #demo · Trader + Admin cards + quote box
  Walkthrough.tsx     S5 — 5 zig-zag feature rows
  CertificateSpotlight.tsx  S6 — zoom-in certificate
  WhoThisIsFor.tsx    S7 — 3 founder cards (light)
  LaunchProcess.tsx   S8 — 3 steps + refund guarantee
  Pricing.tsx         S9 — #pricing · 3 tiers, payments strip, trust block, scarcity
  FAQ.tsx             S10 — accordion, first item open
  AboutBuilder.tsx    S11 — about Haris
  FinalCta.tsx        S12 — fixed-bg final CTA
  Footer.tsx          S13 — 3 cols + legal disclosure
  FloatingWhatsApp.tsx  Fixed FAB, bounce-in @2s
public/images/        9 generated placeholders — replace with real screenshots
```

## Before go-live

1. Replace `public/images/*.jpg` with real platform screenshots (same filenames).
2. Update `DEMO.trader` and `DEMO.certificate` in `components/links.ts` with real demo URLs.
3. Optionally swap the hero image for a muted/looping MP4.
