<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Itinna — Homepage

---

# Product Priorities

## Primary audience

### Travelers

They are the main acquisition and monetization audience.

## Secondary audience

### Creators / influencers / local experts

They supply the content and create the marketplace inventory.

#### Core traveler value

- Authentic recommendations
- Guides created by people who know the destination
- Interactive map
- Offline availability
- Discovering places beyond generic tourist recommendations

#### Core creator value

- Turn travel knowledge into a product
- Give their audience useful travel content
- Build a creator presence around their travel expertise
- Earn money from guides
- One place to deliver your travel knowledge: Replace scattered PDFs, presentations, links and recommendations with one interactive guide.
- Make your guides easier to use: Turn your recommendations into an interactive map that travelers can access and use offline.
- Reach travelers directly: Give your audience a simple place to discover, access and purchase your guides.
- Turn travel knowledge into a product: Package your favorite places, recommendations and expertise into guides people can actually use.
- Earn from your expertise - Get paid when travelers purchase your guides.

---

# Overall Homepage Structure

```text
┌───────────────────────────────────────────────────────┐
│ NAVIGATION                                            │
│                                                       │
│ ITINNA   Explore   How it works   For creators        │
│                                      [Explore guides] │
├───────────────────────────────────────────────────────┤
│                                                       │
│ HERO                                                  │
│                                                       │
│              Discover places                          │
│              worth the trip.          PHOTO + MAP     │
│                                                       │
│                  [Explore guides]                     │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│ EXPLORE                                               │
│                                                       │
│       [ GUIDE ] [ GUIDE ] [ GUIDE ] [ → ]             │
│                                                       │
│              [Explore more guides]                    │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│ MEET THE CREATORS                                     │
│                                                       │
│       [ CREATOR ] [ CREATOR ] [ CREATOR ]             │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│ HOW IT WORKS                                          │
│                                                       │
│     ┌──────────────────┬──────────────────┐           │
│     │    TRAVELERS     │     CREATORS     │           │
│     │                  │                  │           │
│     │  01 Find         │  01 Create       │           │
│     │  02 Download     │  02 Share        │           │
│     │  03 Explore      │  03 Earn         │           │
│     └──────────────────┴──────────────────┘           │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│ FOR CREATORS                                          │
│                                                       │
│           You know the place.                         │
│           We help you share it.                       │
│                                                       │
│                  [Create a guide]                     │
│                                                       │
├───────────────────────────────────────────────────────┤
│                                                       │
│ NEXT ACTION / FINAL CTA                               │
│                                                       │
│                Where will you go next?                │
│                                                       │
│                  [Explore guides]                     │
│                                                       │
├───────────────────────────────────────────────────────┤
│ FOOTER                                                │
└───────────────────────────────────────────────────────┘
```

---
