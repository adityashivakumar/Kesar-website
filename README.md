# Kesar — Website (V1)

Astro + Tailwind CSS + TypeScript build of the Kesar corporate/B2B site,
covering the V1 page set from the PRD. Aevum's full brand site is
intentionally **not** built yet — see "What's deliberately left out" below.

## Stack

- **Astro** (static output) — content pages, routing, SEO
- **Tailwind CSS v4** — styling, via the design tokens in `src/styles/global.css`
- **TypeScript**
- No backend yet. The enquiry form (`/start-a-project`) is presentational
  only — see `src/pages/start-a-project.astro` for what it needs before launch.

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to ./dist
npm run preview   # serve the production build locally
```

Requires Node 22.12+.

## Project structure

```
src/
  layouts/Layout.astro       — <head>, fonts, Nav + Footer shell
  components/
    Nav.astro                — sticky nav, solidifies on scroll, mobile menu
    Footer.astro
    MetalPlate.astro         — placeholder "material photography" block
                                (swap for real <img>/<picture> — see below)
  lib/content.ts              — capabilities, process steps, nav links,
                                 material copy — edit copy here in one place
  pages/
    index.astro               — Home
    about.astro
    precious-metal.astro      — flagship precious-metal page
    process.astro
    capabilities/
      index.astro             — capability directory
      [slug].astro            — one page per capability (10, from content.ts)
    projects.astro            — portfolio (placeholder cards only — see below)
    our-brands/
      index.astro
      aevum.astro             — holding page only (see below)
    tarini925.astro
    start-a-project.astro     — enquiry form (front-end only)
```

## Design system

Colors, type and animation tokens live in `src/styles/global.css` under
`@theme`, matching the brand notes:

- Ink `#080808`, Ivory `#f4f1ea`, Graphite `#1b1b1b`, Gold `#b89a5a`,
  Silver `#bfc0be`
- Display type: Cormorant Garamond · Body/UI: Inter
- `prefers-reduced-motion` is respected globally

## Replacing placeholder photography

Every image slot currently renders `<MetalPlate />` — a gradient/texture
placeholder, not a real photo, so nothing here misrepresents Kesar's actual
product photography. To swap one in:

```astro
<!-- before -->
<MetalPlate tone="gold" ratio="aspect-[4/3]" label="Gold watch photography" />

<!-- after -->
<img src="/images/gold-watch-01.jpg" alt="Kesar gold watch, macro case detail" class="aspect-[4/3] w-full object-cover" />
```

## What's deliberately left out of this build

- **Aevum's full brand site** — `/our-brands/aevum` is a short holding page,
  not the dedicated Aevum experience described in the PRD (hero, philosophy,
  collections, craftsmanship, enquiry). Build that as its own page/section
  when Aevum is ready to launch.
- **Real photography, copy approved by Kesar, and any factual claims** —
  see `CONTENT-NEEDED.md`.
- **Form backend** — enquiry submissions aren't stored or emailed anywhere
  yet.
- **CMS, blog/insights, 3D watch configurator** — Phase 2 per the PRD.

## Before launch

- [ ] Replace all `MetalPlate` placeholders with real photography
- [ ] Fill in verified company/product facts (see `CONTENT-NEEDED.md`)
- [ ] Wire `/start-a-project` to a real submission endpoint + storage
- [ ] Update `site` in `astro.config.mjs` if the production domain changes
- [ ] Set up analytics (see PRD §41 for the recommended event list)
- [ ] Run a Lighthouse pass (target: 90+ across the board, per PRD §38)
