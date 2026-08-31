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

# 1. Navigation Section

### Primary navigation

- Logo + `itinna`
- `Explore` -
- `How it works`
- `For creators`

### Primary CTA

- `Explore guides`

### Navigation behavior

- Logo + `itinna` - brings user to the hero section/scroll to the top of the page
- `Explore` → scroll to the Explore section
- `How it works` → scroll to the How It Works section
- `For creators` → scroll to the For Creators section
- `Explore guides` → `/explore` — clicking it navigates user to the dedicated marketplace / guide discovery page

The navigation should remain intentionally simple. The homepage is primarily traveler-focused, while still clearly addressing creators as the second side of the marketplace.

---

# 2. Hero Section

## Purpose

The hero should communicate within a few seconds:

1. What Itinna is.
2. Why it is valuable to travelers.
3. What the user should do next.

Travelers are the primary audience, so the hero is traveler-first.

## Visual direction

Large destination/travel photography.

The visual should also incorporate the product itself — ideally an interactive-looking map, pins or map UI layered into / over the photography.

The goal is:

> **Travel emotion + actual product**

It should feel like a real travel product rather than a generic travel blog or SaaS landing page.

## Working copy

### Headline

> **Discover places worth the trip.**

### Supporting copy

Working direction:

> Discover hand-picked places from people who know them best — mapped out for your trip and available offline.

### CTA

> **Explore guides** - brings the user to the `/explore` page (marketplace)

---

# 3. Explore Section

## Purpose

Show that Itinna is an actual marketplace with concrete products that travelers can discover and eventually purchase.

The homepage should provide a curated preview rather than trying to display the entire marketplace.

## Section

### Working heading

> **Explore guides**

### Supporting copy

Short explanation that guides are created by people who genuinely know the destination.

## UI

Horizontal carousel / swiper.

Show approximately 3 cards at once on desktop, with part of the next card visible to communicate that more content is available.

Example:

```text
┌───────────────┐ ┌───────────────┐ ┌───────────────┐ ┌────
│               │ │               │ │               │ │
│    LISBON     │ │   DOLOMITES   │ │     TOKYO     │ │ ...
│               │ │               │ │               │ │
│     PHOTO     │ │     PHOTO     │ │     PHOTO     │ │
│               │ │               │ │               │ │
├───────────────┤ ├───────────────┤ ├───────────────┤
│ Lisbon Slowly │ │ Dolomites     │ │ Tokyo After   │
│ Sofia Mendes  │ │ Marco Bellini │ │ Yuki Tanaka   │
│ 38 places     │ │ 52 places     │ │ 41 places     │
│ 4 days · €12  │ │ 5 days · €15  │ │ 3 days · €10  │
└───────────────┘ └───────────────┘ └───────────────┘
```

### CTA

> **Explore guides** - brings the user to the `/explore` page (marketplace)

---

# 4. Meet the Creators Section

## Purpose

This section is primarily a **traveler value proposition**, not a creator acquisition section.

After showing travelers the guides, Itinna introduces the people behind them.

The section should communicate:

- Guides are created by real people.
- Travelers can discover creators whose taste and expertise they trust.
- Travelers may eventually follow / save / discover creators.
- Creators provide personality and credibility to the marketplace.

## Working heading

> **Meet the people behind the guides.**

## UI

Horizontal carousel / swiper focused on creator profiles rather than guides.

Example:

```text
┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐
│                    │ │                    │ │                    │
│      PORTRAIT      │ │      PORTRAIT      │ │      PORTRAIT      │
│                    │ │                    │ │                    │
├────────────────────┤ ├────────────────────┤ ├────────────────────┤
│ Sofia Mendes       │ │ Marco Bellini      │ │ Yuki Tanaka        │
│ Lisbon             │ │ Dolomites          │ │ Tokyo              │
│                    │ │                    │ │                    │
│ 3 guides           │ │ 5 guides           │ │ 4 guides           │
└────────────────────┘ └────────────────────┘ └────────────────────┘
```

The creator cards should feel more personal than the guide cards.

## Creator Marketplace

A dedicated `/creators` page could eventually exist.

Possible structure:

```text
/creators
    ↓
Creator marketplace
    ↓
Grid of creators
    ↓
Creator profile
    ↓
Creator's guides -> trips -> itineraries
```

This would give travelers two discovery paths:

- I am looking for a guide/trip or
- I am looking for a creator whose travel style I like

For the current homepage challenge, this should only be represented through the homepage creator section.
Do not overcomplicate the current navigation with a separate Creators item yet.

---

# 5. How It Works Section

## Purpose

Explain how Itinna works for both sides of the marketplace.

Use one visually strong section divided into two columns:

- Travelers
- Creators

The goal is to make both flows immediately understandable without requiring a lot of text.

How It Works answers:

- For travelers: How does Itinna work?
- For Creators: Why should I become an Itinna creator?

## Working heading

> **One platform. Two ways to explore.**

---

## For Travelers

### 01 — Find a guide

Explore guides from people you trust.

### 02 — Take it with you

Download your map and use it offline.

### 03 — Explore

Follow recommendations wherever you go.

---

## For Creators

### 01 — Create a guide

Turn your favorite places into a guide.

### 02 — Share it

Publish your guide for travelers to discover.

### 03 — Earn

Get paid when travelers buy your guide.

---

## Visual Direction

The two flows should be visually distinct.

### Traveler flow

Find Guide → Download → Offline Map with pins → Explore

### Creator flow

Places → Create guide → Publish → Traveler → Earn

The section should be understandable visually even without reading every word.

## Layout

```text
┌───────────────────────────────┬───────────────────────────────┐
│                               │                               │
│        FOR TRAVELERS          │         FOR CREATORS          │
│                               │                               │
│   01  Find a guide            │   01  Create a guide          │
│                               │                               │
│   Browse guides from          │   Turn your favorite          │
│   people you trust.           │   places into a guide.        │
│                               │                               │
│   02  Take it with you        │   02  Share it                │
│                               │                               │
│   Download your map and       │   Publish your guide          │
│   use it offline.             │   for travelers to discover.  │
│                               │                               │
│   03  Explore                 │   03  Earn                    │
│                               │                               │
│   Follow recommendations      │   Get paid when travelers     │
│   wherever you go.            │   buy your guide.             │
│                               │                               │
└───────────────────────────────┴───────────────────────────────┘
```

---

# 6. For Creators Section

## Purpose

This section should **not repeat the creator workflow** already explained in `How It Works`.

Instead, it should answer:

> **Why should I become an Itinna creator?**

`How It Works` = **How does it work?**

`For Creators` = **Why should I do it?**

---

## Working Concept

### Headline

> **You know the place. We help you share it.**

### Supporting Copy

Working direction:

> Turn your favorite places, local knowledge and travel stories into guides that people can take with them.

---

## Possible Value Propositions

### One place to deliver your travel knowledge

Replace scattered PDFs, presentations, links and recommendations with one interactive guide.

### Make your guides easier to use

Turn your recommendations into an interactive map that travelers can access and use offline.

### Reach travelers directly

Give your audience a simple place to discover, access and purchase your guides.

### Turn travel knowledge into a product

Package your favorite places, recommendations and expertise into guides people can actually use.

### Earn from your expertise

Get paid when travelers purchase your guides.

## CTA

> **Create a guide →**

This is the main creator acquisition CTA.

---

# 7. Footer Section

Simple footer.

## Possible structure

```text
ITINNA

Explore
How it works
For creators

Instagram
TikTok

Terms
Privacy
Contact

© Itinna
```
