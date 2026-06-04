# Service Pages Redesign

**Date:** 2026-06-04
**Scope:** Services overview page + all 6 individual service pages

---

## Overview

Replace the current numbered `divide-y` list layout used across all service pages with two new distinct layouts:
- **Overview page** (`/services`): alternating full-width image/text rows per service
- **Individual service pages**: 2-column card grid for sub-items

The "Why Choose / Standards" section on every service page is also redesigned from a banner image + horizontal list into a 4-column card grid matching the Contact page's "Planning Your Safari?" section.

All other sections (PageHero, intro, CTA split) are kept as-is.

---

## Pages in Scope

| Page | Route |
|------|-------|
| Services Overview | `/services` |
| Safari Experiences | `/services/safari-experiences` |
| Adventure Travel | `/services/adventure-travel` |
| MICE Solutions | `/services/mice-solutions` |
| Holiday Getaways | `/services/holiday-getaways` |
| Transport Solutions | `/services/transport-solutions` |
| Outbound Travel | `/services/outbound-travel` |

---

## Services Overview Page (`/services`)

### Section 1 — PageHero
No change.

### Section 2 — Intro
No change. Centred text, `bg-stone-50`.

### Section 3 — Services List (REDESIGNED)

**Replace:** Current `divide-y divide-stone-100` numbered list with small images on the right.

**With:** Alternating full-width rows. Each service occupies a full-width row divided 45/55 between image and text. Image side alternates: odd items (1, 3, 5) have image on the **left**, even items (2, 4, 6) have image on the **right**.

**Row anatomy (text side):**
- Eyebrow label: `font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600` — the service subtitle
- Title: `font-freight-display-pro text-3xl sm:text-4xl text-stone-800`
- Diamond divider
- Description: `font-sofia-pro text-sm text-stone-600 leading-relaxed`
- Bullet highlights: amber `◆` diamond + `font-sofia-pro text-xs text-stone-500`
- "Explore →" link: `font-sofia-pro text-[10px] tracking-[0.18em] uppercase text-stone-400 hover:text-amber-600`

**Image side:**
- `relative overflow-hidden` with `Image fill className="object-cover"`
- Fixed height per row: `min-h-[420px] lg:min-h-[520px]`
- Subtle hover scale: `transition-transform duration-700 hover:scale-105`

**Section background:** `bg-white`

**Mobile:** Image stacks above text (full width, `aspect-[16/10]`), text below.

### Section 4 — Why Choose Timobo? (REDESIGNED)

**Replace:** Wide banner image + `divide-y` horizontal list.

**With:** 4-column card grid — identical pattern to the "Planning Your Safari?" section on the Contact page.

```
bg-stone-50 border-t border-stone-200
  Centred: eyebrow "Our Distinction" + h2 "Why Choose Timobo Safaris?" + diamond divider
  grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200
    Each card (bg-white p-8 lg:p-10):
      amber diamond accent (w-1.5 h-1.5 rotate-45 bg-amber-400/80 mb-6)
      h3 font-freight-display-pro text-xl text-stone-800 mb-3
      p font-sofia-pro text-sm text-stone-500 leading-relaxed
```

Cards: "18+ Years of Excellence", "Sustainable Tourism", "Bespoke Itineraries", "Professional MICE"

### Section 5 — CTA Split
No change.

---

## Individual Service Pages (all 6)

All six pages follow the same updated structure.

### Section 1 — PageHero
No change.

### Section 2 — Intro
No change. Centred text, `bg-stone-50`.

### Section 3 — Sub-items (REDESIGNED)

**Replace:** Current `divide-y divide-stone-100` numbered list.

**With:** 2-column card grid. Each card:
- Image: `relative aspect-[4/3] overflow-hidden` with `Image fill object-cover transition-transform duration-500 hover:scale-105`
- Eyebrow: `font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2` — the item's subtitle
- Title: `font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug`
- Description: `font-sofia-pro text-sm text-stone-500 leading-relaxed mb-4`
- Highlights: amber diamond bullets, `font-sofia-pro text-xs text-stone-500`

**Grid:** `grid md:grid-cols-2 gap-px bg-stone-200` — thin stone dividers between cards, each card `bg-white p-8 lg:p-10`

**Section:** `bg-white`, section header left-aligned with eyebrow + h2.

**Mobile:** Single column (grid naturally stacks).

### Section 4 — Why Choose / Standards (REDESIGNED)

**Replace:** Wide banner image + `divide-y` horizontal list (same pattern as services overview section 4).

**With:** Same 4-column card grid pattern. Eyebrow and h2 are page-specific (e.g. "Our Standards" / "Safari Planning Excellence" for Safari Experiences). Cards are also page-specific (each page keeps its 4 existing reasons).

```
bg-stone-50 border-t border-stone-200
  Centred: eyebrow + h2 + diamond divider
  grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200
    bg-white p-8 lg:p-10 cards
```

### Section 5 — CTA Split
No change.

---

## Implementation Notes

- The alternating layout on the overview page uses a simple `index % 2 === 0` check to swap image/text order — no new component needed.
- The card grid on individual pages mirrors the destination pages' attractions grid pattern (`gap-px bg-stone-200` wrapper, `bg-white` cards) already in use.
- The 4-column card grid for "Why Choose" is copy-paste from the Contact page's "Planning Your Safari?" section — same classes, different data.
- No new components need to be created. All patterns exist in the codebase already.
- Pages are `"use client"` only where needed — the current pages all have `"use client"` at the top; this can remain unchanged.

---

## File List

Files to modify:
- `app/services/page.tsx`
- `app/services/safari-experiences/page.tsx`
- `app/services/adventure-travel/page.tsx`
- `app/services/mice-solutions/page.tsx`
- `app/services/holiday-getaways/page.tsx`
- `app/services/transport-solutions/page.tsx`
- `app/services/outbound-travel/page.tsx`

No new files. No new components.
