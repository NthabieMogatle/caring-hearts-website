# Caring Hearts Assisted Living — Website

Marketing site for **Caring Hearts Assisted Living**, a small, locally-owned
assisted living home in Hartford, CT. Built for warmth, dignity, and trust —
optimized for adult children researching senior care for an aging parent.

> Compassionate Care. Safe Living. Dignified Life.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion (with `prefers-reduced-motion` respected) |
| Fonts | Cormorant Garamond, Great Vibes, Inter (via `next/font/google`) |
| Images | Royalty-free Unsplash via `next/image` |
| Hosting | Vercel |

## Brand

| Token | Value |
|---|---|
| Charcoal | `#0E0E10` |
| Gold | `#C9A35B` |
| Cream | `#FAF6EF` |
| Heart red | `#C8262C` |
| Muted text | `#4A4A4A` |

## Getting started

```bash
npm install
cp .env.local.example .env.local   # fill in when integrating email
npm run dev
```

Open http://localhost:3000.

Useful scripts:

```bash
npm run dev         # Next.js dev server
npm run build       # Production build
npm run start       # Run production build locally
npm run typecheck   # tsc --noEmit
npm run lint        # next lint
```

## Routes

- `/` — Single-page marketing site (Hero, Intro, Promises, Services, Why Us, Gallery, Testimonials, CTA band, Contact)
- `/contact` — Standalone contact page (same Contact section, dedicated route for direct linking)
- `/api/contact` — POST endpoint stub; logs submissions and returns `{ ok, message }`
- `/opengraph-image` — Auto-generated social preview (1200×630 PNG)

## Editing content

All copy lives in **`lib/content.ts`** — phone number, services, promises,
testimonials, hours, social links, and Unsplash image URLs. Non-engineers can
edit this file without touching components.

## Images

Photos are hot-linked from Unsplash via `next/image`. The remote hostnames
`images.unsplash.com` and `plus.unsplash.com` are allowed in
`next.config.mjs`. Each image reference in `lib/content.ts` has a comment
above it with the Unsplash photo page URL so licensing can be verified at any
time.

Unsplash license: free for commercial use, no attribution required
(https://unsplash.com/license).

To replace an image: edit the `image:` URL in `lib/content.ts`. Use the
highest quality variant by setting `w=2400&q=85` for hero / above-the-fold
images and `w=1400&q=80` for cards.

## Accessibility

- WCAG AA contrast against cream/charcoal backgrounds.
- 17px body text by default.
- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`.
- Visible focus ring (gold) on all interactive elements.
- `prefers-reduced-motion` respected — all Framer Motion animations short-circuit.
- Lightbox supports `Esc` / `←` / `→` keyboard navigation.
- All images have descriptive `alt` text.

## Contact form

`/api/contact/route.ts` is a stub — it validates payload shape and logs to
the server console. Before launch, wire it to:

- **Resend** (`RESEND_API_KEY`) — recommended for simplicity
- **SendGrid** / **Postmark** — for higher volume
- A CRM (HubSpot, Pipedrive) if you want lead tracking

The client form (`components/ContactForm.tsx`) does its own validation and
expects the `{ ok, message }` response shape — keep that contract stable.

## Things stubbed / assumed (replace before launch)

- **Business hours** in `lib/content.ts` — used a sensible default (`Mon–Sat 9–6` for tours, `24/7` for care). Replace with the real schedule.
- **License number** — placeholder text "Licensed Assisted Living • Hartford, CT" in `lib/content.ts → site.license`. Add the actual license number when available.
- **Social links** — Facebook / Instagram / LinkedIn all set to `#`. Replace with real URLs in `lib/content.ts → site.socials`.
- **Testimonials** — three sample testimonials written for the demo, clearly disclaimed on the page ("Quotes shown are illustrative samples…"). Replace with real, attributed quotes once families share them.
- **Map** — embeds a generic "Hartford, CT" Google Maps view. Swap to the actual address when you're ready to list it publicly.
- **Contact API** — logs to console only. Wire up an email provider (`Resend` recommended).
- **`NEXT_PUBLIC_SITE_URL`** — used for absolute metadata URLs in production.

## Deploying to Vercel

1. Push to GitHub (`git remote add origin <your-repo>`; `git push -u origin main`).
2. Import the repo on Vercel.
3. No env vars are required for the initial deploy — the contact form will log to Vercel logs.
4. Add `RESEND_API_KEY` (and any other env vars) on the Vercel project when wiring up email.
5. Set the production domain — DNS A/AAAA or `CNAME` to Vercel.

## Project structure

```
caring-hearts-website/
├── app/
│   ├── api/contact/route.ts     # Lead form submission stub
│   ├── contact/page.tsx         # /contact route
│   ├── globals.css              # Tailwind + brand tokens + button classes
│   ├── icon.svg                 # Favicon
│   ├── layout.tsx               # Fonts, metadata, OG, viewport
│   ├── not-found.tsx            # 404 page
│   ├── opengraph-image.tsx      # Auto-generated OG image
│   └── page.tsx                 # Single-page marketing site
├── components/
│   ├── ContactForm.tsx          # Client-validated lead form
│   ├── Footer.tsx
│   ├── Lightbox.tsx             # Gallery image viewer (keyboard nav)
│   ├── Logo.tsx                 # SVG mark + wordmark + lockup
│   ├── Nav.tsx                  # Sticky top nav with mobile sheet
│   ├── Ornament.tsx             # Gold hairline + heart divider
│   ├── PromiseIcon.tsx          # Thin gold line-icons
│   ├── SectionHeader.tsx        # Eyebrow → heading → script → ornament → body
│   └── sections/
│       ├── Hero.tsx
│       ├── Intro.tsx
│       ├── Promises.tsx
│       ├── Services.tsx
│       ├── WhyUs.tsx
│       ├── Gallery.tsx
│       ├── Testimonials.tsx
│       ├── CTABand.tsx
│       └── Contact.tsx
├── lib/
│   └── content.ts               # ALL editable copy + image URLs
├── next.config.mjs              # Unsplash remotePatterns
├── tailwind.config.ts           # Brand palette + fonts + animations
├── tsconfig.json
└── README.md
```

## License

Proprietary — © Caring Hearts Assisted Living.
