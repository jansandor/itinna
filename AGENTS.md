<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Itinna — Agent Instructions

This file guides AI coding agents implementing and iterating on the Itinna **homepage**. It translates the product and UX decisions in [src/docs/homepage.md](src/docs/homepage.md) into practical implementation rules. Treat `homepage.md` as the source of truth for product, content and information-architecture decisions — this file exists so you don't have to re-derive that context from scratch every session.

If a rule here ever conflicts with `homepage.md`, `homepage.md` wins; update this file to match it.

---

## 1. Product Context

**Itinna** is a marketplace where local experts turn their travel knowledge into paid, downloadable **guides** that travelers use during a trip.

- A **guide** is the core product unit: a collection of hand-picked places, curated by a specific creator for a specific destination, delivered as an interactive map with offline access (see §5 for related terms like Trip/Itinerary).
- **Primary audience — Travelers**: the acquisition and monetization audience. Every homepage decision should optimize for their experience first.
- **Secondary audience — Creators** (influencers / local experts): they supply the inventory. They matter, but the homepage is not creator-first.
- **Traveler value proposition**: authentic, trustworthy recommendations from people who actually know the destination, delivered as an interactive, offline-capable map — going beyond generic "top 10" tourist content.
- **Creator value proposition**: a way to package scattered travel knowledge (PDFs, slide decks, shared links, DMs, notes apps) into one interactive, sellable guide, reach travelers directly, and earn from their expertise.
- **The problem Itinna solves for creators**: today, recommendations are fragmented across formats that are hard to use on the ground (static PDFs, presentations, plain link lists) and impossible to monetize directly. Itinna replaces that fragmentation with a single interactive, offline, purchasable product.

Keep this framing in mind for copy, empty states, and any new content: travelers are solving "where should I go and what should I do," creators are solving "how do I turn what I know into something sellable."

---

## 2. Homepage Information Architecture

Implement the homepage as the following ordered sections (`src/app/page.tsx`). Each section is a distinct component under `src/components/`.

| #   | Section               | Purpose                                                                       | Implementation notes                                                                                                                                                                                                                                                                                                                     |
| --- | --------------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Navigation**        | Wayfinding + primary conversion path                                          | Logo scrolls to top/hero. `Explore`, `How it works`, `For creators` are in-page anchor links to the sections below (not separate routes). `Explore guides` is the primary CTA and is the only link that navigates away, to the guide discovery/marketplace route. Keep it simple — do not add a `Creators` nav item or other routes yet. |
| 2   | **Hero**              | Communicate what Itinna is, its value, and the next action within seconds     | Traveler-first headline + supporting copy + primary CTA. Visual should blend real travel photography with product UI (map/pins), not read as a generic photo hero or a generic SaaS hero.                                                                                                                                                |
| 3   | **Explore Guides**    | Prove Itinna is a real marketplace with concrete products                     | Horizontal carousel showing ~3 guide cards at once on desktop with the next card partially visible (signals more content). Each card: destination, guide title, creator name, place count, duration, price. Ends with a CTA into the full marketplace route.                                                                             |
| 4   | **Meet the Creators** | Traveler-facing trust/discovery section — _not_ a creator-acquisition section | Horizontal carousel of creator profile cards (portrait, name, destination, guide count). More personal/portrait-driven than the guide cards.                                                                                                                                                                                             |
| 5   | **How It Works**      | Explain the mechanics of both sides of the marketplace in one glance          | Two-column layout: Travelers (Find → Download → Explore) and Creators (Create → Share → Earn). Should be understandable from the visuals/numbering alone, without reading every line.                                                                                                                                                    |
| 6   | **For Creators**      | Creator acquisition: _why_ become a creator (not _how_, that's §5)            | Headline + value propositions (see §1) + `Create a guide` CTA. Do not restate the 3-step creator flow here.                                                                                                                                                                                                                              |
| 7   | **Final CTA**         | Send travelers back into the marketplace after all context has been given     | Short, single CTA (`Explore guides`), no new information.                                                                                                                                                                                                                                                                                |
| 8   | **Footer**            | Simple sitemap + legal + social                                               | Links mirror the nav anchors, plus social, legal (Terms/Privacy/Contact), and copyright. Keep it minimal — this is not a full sitemap.                                                                                                                                                                                                   |

---

## 3. UX and Product Rules

- **Traveler-first, always.** When a decision could favor either audience, favor the traveler's clarity and momentum toward `Explore guides`.
- **Creators are secondary but not an afterthought.** They get one full section (`For Creators`) plus a supporting appearance in `Meet the Creators` and `How It Works`. Don't expand their footprint beyond that without a reason grounded in `homepage.md`.
- **Homepage vs. marketplace route.** The homepage is a curated preview, not the catalog. `Explore guides` CTAs (nav, hero, Explore section, final CTA) all point to the dedicated guide discovery/marketplace page — do not build a full browsing/filtering experience on the homepage itself.
- **Discovery/purchase flow is conceptual only, on the homepage.** The homepage should communicate that travelers can discover a guide → download it → use it offline, and that they can purchase it on the marketplace page. Do not implement real navigation into guide detail pages, cart, checkout, or payment from the homepage — see §7.
- **`How It Works` ≠ `For Creators`.** `How It Works` answers "how does this work, mechanically, for each side?" (numbered steps). `For Creators` answers "why should I, as a creator, bother?" (value propositions + CTA). Never merge these or duplicate the 3-step flow inside `For Creators`.
- **Two-sided marketplace framing must stay visible.** Even though travelers are primary, the homepage should always make clear Itinna has two sides (people who make guides, people who use them) — this is core to the product's credibility ("real people made this").

---

## 4. Design Direction

- **Vibe:** clean, fresh, trustworthy — an editorial travel-marketplace feel, not a generic tech/SaaS landing page.
- **Explicitly avoid:** the typical "startup blue" gradient-hero SaaS look, stock-photo-with-overlay-text clichés, boxed feature-icon grids, and heavy animation/motion for its own sake.
- **Photography carries emotion.** Large, high-quality destination photography (hero, guide cards, creator portraits) is the primary way the product feels like travel rather than software.
- **Product UI carries credibility.** Map/pin UI layered over or alongside photography (hero, guide cards) signals "this is a real, working product," not just a marketing site.
- **Creator imagery is personal.** Creator cards should read as portraits of real people, distinct in tone from the more "destination-first" guide cards.
- **No invented visual system.** Do not invent specific color palettes, typography scales, spacing tokens, or a design system beyond what's already reflected in the existing Tailwind setup and components ([src/app/globals.css](src/app/globals.css), [src/components](src/components)) or explicitly stated in `homepage.md`. Extend the existing look consistently rather than introducing a new one.

---

## 5. Content and Terminology

Preserve the product's agreed vocabulary. Do not silently swap in generic alternatives.

- **Guide** — the sellable product a creator publishes (a set of curated places for a destination). This is the primary noun travelers browse and buy.
- **Trip / Itinerary** — used when referring to the traveler's actual experience of using a guide (e.g., "your trip," "follow the itinerary"), not as a synonym for the product itself. Don't rename "guide" to "trip" or "itinerary" in primary UI (cards, CTAs, nav).
- **Explore** — the verb/action of browsing the marketplace (nav item, CTA copy "Explore guides"). Used for traveler-facing discovery actions.
- **Discover** — used for the emotional/value framing of finding places or people ("Discover places worth the trip," "discover hand-picked places," "discover creators"), more than as a UI action label.
- Copy in `homepage.md` (headlines, supporting copy, section headings) is **working copy** — it can be refined for tone or length, but keep the same meaning, terminology, and section intent unless the user asks for a copy change.

---

## 6. Implementation Guidance

Stack (verify against [package.json](package.json) before assuming otherwise): Next.js (App Router) + React + TypeScript + Tailwind CSS v4, linted with `oxlint` (`pnpm lint`) and formatted with `prettier` (`pnpm format`).

- **Structure:** one section = one component under `src/components/<SectionName>/<SectionName>.tsx`, re-exported via a local `index.ts` and the root [src/components/index.ts](src/components/index.ts) barrel, matching the existing `Hero`/`Navigation` pattern.
- **Composition:** [src/app/page.tsx](src/app/page.tsx) should stay a thin composition of section components in the order defined in §2 — avoid putting section markup or logic directly in the page file.
- **Data:** keep mock guide/creator data (arrays of objects) separate from presentational components — e.g., a local `data.ts`/`constants.ts` next to the component or a shared `src/data/` module — rather than inlining large literals inside JSX.
- **Responsiveness & accessibility:** the homepage must work on mobile through desktop; use semantic HTML (`section`, `nav`, `header`, `footer`, heading levels), meaningful `alt` text, visible focus states, and sufficient color contrast, consistent with the existing `Hero`/`Navigation` components.
- **Simplicity first:** prefer plain React/Tailwind for carousels and interactions where reasonable; only reach for a new dependency (carousel library, animation library, state library, etc.) if a simple implementation is clearly insufficient, and note why.
- **Follow existing conventions** (Server Components by default, `"use client"` only where interactivity requires it, path alias `@/`, Tailwind utility classes, `oxlint`/`prettier` config) rather than introducing new patterns.

---

## 7. Scope — What NOT to Implement

Per `homepage.md`, the homepage assignment is scoped to marketing/presentation, not the product itself. Do not implement:

- Authentication / user accounts / sign-in flows.
- Checkout, payment, or pricing logic beyond displaying a price on a guide card.
- A functional, interactive map (real map libraries, real geodata, pan/zoom) — map imagery on the homepage is illustrative/visual, not a working map component.
- Real guide detail pages, cart, or purchase flows — CTAs point to the marketplace route as a link, nothing further.
- Unnecessary animation/motion, parallax effects, or dark mode.
- A dedicated `/creators` marketplace page or a `Creators` nav item — creators are represented only through the `Meet the Creators` homepage section for now.

If a request implies building one of these, flag it and confirm scope before implementing.

---

## 8. Decision-Making Principles

When a requirement is ambiguous or not explicitly covered:

1. **`homepage.md` is the source of truth** for product, content, and IA decisions — check it before inventing new sections, copy, or flows.
2. **Prioritize traveler experience** over creator experience or general "marketing site best practices."
3. **Don't add sections or features just because they're common on marketing sites** (testimonials, pricing tables, FAQ accordions, newsletter signups, etc.) unless `homepage.md` calls for them.
4. **Don't contradict existing decisions** (this file, `homepage.md`, or existing code) without a clear, stated reason — surface the conflict instead of silently overriding it.
5. **Prefer clarity and hierarchy over visual or technical complexity.** A simpler implementation that communicates the product clearly beats a more elaborate one that doesn't.

---
