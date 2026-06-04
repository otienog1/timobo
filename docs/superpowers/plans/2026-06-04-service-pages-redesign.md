# Service Pages Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the numbered `divide-y` list layout on all service pages with alternating image/text rows on the overview and 2-column card grids on individual pages, plus redesign all "Why Choose/Standards" sections to 4-column card grids.

**Architecture:** Pure layout changes — no new components, no new files. Each page is a self-contained rewrite of its Section 3 (items list) and Section 4 (standards/why-choose). Section 1 (PageHero), Section 2 (intro), and Section 5 (CTA split) are kept untouched. Outbound Travel is a special case: its items have no images and its Section 4 is a "Popular Destinations" list (not a standards list) — both are handled explicitly.

**Tech Stack:** Next.js App Router, Tailwind CSS, `next/image`, `next/link`

---

## File List

| File | Change |
|------|--------|
| `app/services/page.tsx` | Section 3: divide-y list → alternating rows. Section 4: banner+list → 4-col card grid |
| `app/services/safari-experiences/page.tsx` | Section 3: divide-y list → 2-col card grid. Section 4: banner+list → 4-col card grid |
| `app/services/adventure-travel/page.tsx` | Section 3: divide-y list → 2-col card grid (includes duration/price). Section 4: banner+list → 4-col card grid |
| `app/services/mice-solutions/page.tsx` | Section 3: divide-y list → 2-col card grid. Section 4: banner+list → 4-col card grid |
| `app/services/holiday-getaways/page.tsx` | Section 3: divide-y list → 2-col card grid. Section 4: banner+list → 4-col card grid |
| `app/services/transport-solutions/page.tsx` | Section 3: divide-y list → 2-col card grid. Section 4: banner+list → 4-col card grid |
| `app/services/outbound-travel/page.tsx` | Section 3: divide-y list → 2-col text card grid (no images). Section 4: 2-col layout → 4-col card grid |

---

## Task 1: Services Overview Page

**File:** `app/services/page.tsx`

- [ ] **Step 1: Replace Section 3 (services list) and Section 4 (why choose) with the new layout**

Replace the entire file content with:

```tsx
"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Safari Experiences",
      subtitle: "African Wildlife Adventures",
      image: "/images/services/service-safari-experiences.jpg",
      description: "Custom-designed safari itineraries connecting you to Africa's most iconic destinations. From luxury lodge stays and cultural encounters to conservation experiences and the Great Migration.",
      highlights: ["Wildlife & Big Five safaris", "Cultural immersion experiences", "Beach & bush combinations", "Conservation participation"],
      link: "/services/safari-experiences"
    },
    {
      title: "Adventure Travel",
      subtitle: "Off-the-Beaten-Path Expeditions",
      image: "/images/services/service-adventure-travel.jpg",
      description: "For explorers seeking raw, authentic Africa. Our expeditions take you to remote wilderness areas, ancient cultural sites, and landscapes that few travellers ever witness.",
      highlights: ["Northern Kenya expeditions", "Ethiopia cultural discoveries", "Gorilla & chimpanzee treks", "Multi-country overland journeys"],
      link: "/services/adventure-travel"
    },
    {
      title: "MICE Solutions",
      subtitle: "Corporate Events & Business Travel",
      image: "/images/services/service-mice-solutions.jpg",
      description: "Professional, end-to-end MICE services across Eastern and Southern Africa. Seamless event planning and flawless execution, infused with authentic African hospitality.",
      highlights: ["Corporate conferences & meetings", "Incentive travel programmes", "Executive retreats", "Exhibition support"],
      link: "/services/mice-solutions"
    },
    {
      title: "Holiday Getaways",
      subtitle: "Luxury African Holidays",
      image: "/images/services/service-holiday-getaways.jpg",
      description: "Luxury holidays across Africa's most beautiful destinations. Perfect for honeymoons, family escapes, and romantic retreats — each one crafted with personal attention.",
      highlights: ["Coastal paradise destinations", "Private conservancy lodges", "Luxury beach resorts", "City & nature combinations"],
      link: "/services/holiday-getaways"
    },
    {
      title: "Transport Solutions",
      subtitle: "Seamless African Travel",
      image: "/images/services/service-transport-solutions.jpg",
      description: "Reliable, comfortable transport throughout your African journey. From airport pickups to safari game drives and inter-lodge transfers — handled with professionalism.",
      highlights: ["Safari vehicles & game drives", "Airport transfers & logistics", "VIP transport & security", "Inter-destination connections"],
      link: "/services/transport-solutions"
    },
    {
      title: "Outbound Travel",
      subtitle: "International Travel Services",
      image: "/images/services/services-hero.jpg",
      description: "Plan your international trips with confidence. Comprehensive outbound services — flights, visas, insurance, and expert guidance for destinations worldwide.",
      highlights: ["International travel consultancy", "Visa processing assistance", "Flight bookings & tickets", "Travel insurance solutions"],
      link: "/services/outbound-travel"
    }
  ];

  const reasons = [
    { title: "18+ Years of Excellence", body: "Nearly two decades of expertise in African safari planning and MICE solutions across Eastern and Southern Africa." },
    { title: "Sustainable Tourism", body: "A genuine commitment to conservation, cultural preservation, and responsible travel that benefits the communities we work with." },
    { title: "Bespoke Itineraries", body: "No templates, no compromises. Every journey is designed from scratch around your interests, pace, and vision." },
    { title: "Professional MICE", body: "Comprehensive corporate event services delivered with local expertise, seamless coordination, and consistent excellence." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Our Services"
        subtitle="With over 18 years of expertise, we create unforgettable journeys and corporate travel solutions across Africa."
        backgroundImage="/images/services/services-hero.jpg"
      />

      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">What We Do</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Precision, Purpose &amp; Passion
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            Whether you dream of tracking the Big Five, exploring Ethiopia&apos;s cultural treasures, hosting a seamless conference, or relaxing on pristine beaches — we make it happen with expertise and genuine care.
          </p>
        </div>
      </Section>

      {/* Section 3 — Alternating Services */}
      <Section className="bg-white overflow-hidden border-t border-stone-100">
        <div className="max-w-screen-xl mx-auto divide-y divide-stone-100">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
              >
                <div className="relative w-full lg:w-[45%] aspect-[16/10] lg:aspect-auto lg:min-h-[480px] overflow-hidden flex-shrink-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex items-center px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
                  <div className="max-w-lg">
                    <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-3">{service.subtitle}</p>
                    <h3 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-4 leading-tight">{service.title}</h3>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-14 bg-stone-300" />
                      <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
                      <span className="h-px w-14 bg-stone-300" />
                    </div>
                    <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-6">{service.description}</p>
                    <div className="space-y-2.5 mb-8">
                      {service.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2.5">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block mt-1" aria-hidden="true" />
                          <span className="font-sofia-pro text-xs text-stone-500">{h}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={service.link}
                      className="font-sofia-pro text-[10px] tracking-[0.18em] uppercase text-stone-400 hover:text-amber-600 transition-colors duration-200 inline-flex items-center gap-1.5"
                    >
                      Explore
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Section 4 — Why Choose Timobo (4-col card grid) */}
      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Distinction</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
              Why Choose Timobo Safaris?
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {reasons.map(({ title, body }) => (
              <div key={title} className="bg-white p-8 lg:p-10">
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mb-6" aria-hidden="true" />
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/services/services-hero.jpg" alt="African safari" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Begin Your Journey</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Ready to Create Your African Experience?
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                Our safari specialists and event planners are ready to craft your perfect African adventure or corporate event. Let&apos;s turn your vision into an unforgettable experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm">
                  Start Planning
                </Link>
                <Link href="/destinations" className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm">
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
```

- [ ] **Step 2: Verify visually**

Run `npm run dev` (if not already running). Open http://localhost:3000/services and confirm:
- Services display as alternating full-width rows with image on left for odd, right for even
- "Why Choose Timobo?" shows 4 white cards in a grid with amber diamond accents
- Mobile: image stacks above text for each service row

- [ ] **Step 3: Commit**

```bash
git add app/services/page.tsx
git commit -m "redesign: services overview — alternating rows + card grid"
```

---

## Task 2: Safari Experiences Page

**File:** `app/services/safari-experiences/page.tsx`

- [ ] **Step 1: Replace the file**

```tsx
"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function SafariExperiencesPage() {
  const safariExperiences = [
    {
      title: "Wildlife Safaris",
      subtitle: "Big Five & Great Migration",
      image: "/images/services/safari-experiences/wildlife-safaris.jpg",
      description: "Witness the Great Migration in Maasai Mara and explore Big Five hotspots — Amboseli, Samburu, Tsavo. Expert naturalist guides bring Africa's most iconic encounters to life.",
      highlights: ["Great Migration viewing in Maasai Mara", "Big Five encounters in Amboseli and Samburu", "Expert naturalist guides", "Luxury lodge accommodations"]
    },
    {
      title: "Cultural Safaris",
      subtitle: "Authentic Cultural Immersion",
      image: "/images/services/safari-experiences/cultural-safaris.jpg",
      description: "Engage with the Maasai, Samburu, and other indigenous communities. Learn ancient traditions, witness ceremonies, and participate in community-based experiences that leave a lasting impact.",
      highlights: ["Authentic cultural village visits", "Traditional ceremonies and dances", "Local craft workshops", "Community-based tourism projects"]
    },
    {
      title: "Beach & Bush Combos",
      subtitle: "Safari & Coastal Paradise",
      image: "/images/services/safari-experiences/beach-bush-combo.jpg",
      description: "Combine thrilling game drives with pristine coastlines. Diani, Zanzibar, and Lamu offer the perfect counterpoint to the savannah — adventure and relaxation in one seamless journey.",
      highlights: ["Safari and beach combination packages", "Coastal destinations: Diani, Lamu, Zanzibar", "Seamless transfers between locations", "Beach resort accommodations"]
    },
    {
      title: "Photography Safaris",
      subtitle: "Professional Wildlife Photography",
      image: "/images/services/safari-experiences/photography-safaris.jpg",
      description: "Specialist tours for photographers and content creators. Expert guidance on timing, light, and positioning ensures every frame captures Africa's raw, extraordinary beauty.",
      highlights: ["Professional photography guidance", "Optimal timing for wildlife photography", "Specialised photo vehicles", "Portfolio development sessions"]
    },
    {
      title: "Conservation Safaris",
      subtitle: "Conservation & Research",
      image: "/images/services/safari-experiences/conservation-safaris.jpg",
      description: "Participate in conservation programmes and wildlife research. Contribute meaningfully to Africa's wild future while experiencing its present in the most intimate, purposeful way.",
      highlights: ["Wildlife conservation participation", "Research project involvement", "Anti-poaching unit visits", "Wildlife rehabilitation centres"]
    },
    {
      title: "Luxury Safaris",
      subtitle: "Ultimate Comfort & Exclusivity",
      image: "/images/services/safari-experiences/luxury-safaris.jpg",
      description: "Private charters, exclusive tented camps, and five-star service in Africa's most remote wilderness. Experience the wild without compromise — in absolute comfort and understated style.",
      highlights: ["Private safari vehicles and guides", "Luxury tented camps and lodges", "Gourmet dining experiences", "Personalised itineraries"]
    },
    {
      title: "Elephant Safaris",
      subtitle: "Majestic Giants of Africa",
      image: "/images/services/safari-experiences/wildlife-safaris.jpg",
      description: "Dedicated expeditions to Africa's great elephant habitats. Amboseli and beyond — witness herds in their natural landscape with expert guides who understand their every behaviour.",
      highlights: ["Elephant-focused game drives", "Expert elephant behaviour guides", "Prime habitat: Amboseli", "Conservation education programmes"]
    }
  ];

  const planningFeatures = [
    { title: "Expert Naturalist Guides", body: "Professional guides with deep knowledge of wildlife behaviour, ecology, and conservation practice — chosen for their passion as much as their expertise." },
    { title: "Premium Accommodations", body: "Carefully selected lodges and camps that blend authentic African character with world-class hospitality, from tented camps to private conservancy lodges." },
    { title: "Conservation Focus", body: "Every safari contributes to conservation efforts and supports local communities through responsible, intentional tourism." },
    { title: "Customised Itineraries", body: "No two journeys are alike. We design every itinerary around your interests, pace, and vision — crafted with precision and personal attention." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Safari Experiences"
        subtitle="From wildlife encounters and cultural immersions to luxury comfort and conservation — every safari crafted for meaning and magic."
        backgroundImage="/images/services/service-safari-experiences.jpg"
      />

      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Approach</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Meaning &amp; Magic
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            With over 18 years of expertise, we design transformative journeys that connect you to Africa&apos;s untamed wilderness, diverse cultures, and conservation story. Each safari is bespoke — shaped around you.
          </p>
        </div>
      </Section>

      {/* Section 3 — 2-col card grid */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              Safari Experiences
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {safariExperiences.map((experience, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{experience.subtitle}</p>
                  <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{experience.title}</h3>
                  <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed mb-5">{experience.description}</p>
                  <div className="space-y-2.5">
                    {experience.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block mt-1" aria-hidden="true" />
                        <span className="font-sofia-pro text-xs text-stone-500">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — 4-col card grid */}
      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Standards</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
              Safari Planning Excellence
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {planningFeatures.map(({ title, body }) => (
              <div key={title} className="bg-white p-8 lg:p-10">
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mb-6" aria-hidden="true" />
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/services/safari-experiences/photography-safaris.jpg" alt="Safari adventure" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Craft Your Safari</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Your Safari Awaits
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                From the Great Migration to intimate cultural encounters, let us craft your perfect African safari — creating lasting memories and meaningful impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm">
                  Plan Your Safari
                </Link>
                <Link href="/destinations" className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm">
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
```

- [ ] **Step 2: Verify visually**

Open http://localhost:3000/services/safari-experiences and confirm:
- 7 experience cards in a 2-column grid, each with an image on top and content below
- "Safari Planning Excellence" shows 4 white cards with amber diamond accents

- [ ] **Step 3: Commit**

```bash
git add app/services/safari-experiences/page.tsx
git commit -m "redesign: safari experiences — card grid + standards cards"
```

---

## Task 3: Adventure Travel Page

**File:** `app/services/adventure-travel/page.tsx`

Note: Items have `duration` and `startingPrice` fields — show these below the title in each card.

- [ ] **Step 1: Replace the file**

```tsx
"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function AdventureTravelPage() {
  const adventureJourneys = [
    {
      title: "Northern Kenya Expedition",
      subtitle: "Lake Turkana & Samburu Wilderness",
      duration: "10 Days",
      startingPrice: "From $4,850",
      image: "/images/services/Adventure-travel/northern-kenya-retreat.jpg",
      description: "Journey to Kenya's remote northern frontier — the jade waters of Lake Turkana, Samburu's unique wildlife, and ancient pastoralist communities in pristine desert landscapes.",
      highlights: ["Lake Turkana — Africa's largest desert lake", "Samburu's Special Five wildlife", "Traditional pastoralist communities", "Remote desert camping"]
    },
    {
      title: "Ethiopian Highlands Discovery",
      subtitle: "Ancient Churches & Tribal Cultures",
      duration: "12 Days",
      startingPrice: "From $5,200",
      image: "/images/services/Adventure-travel/ethiopian-highland-discovery.jpg",
      description: "Explore the cradle of civilisation. Rock-hewn churches, dramatic highland scenery, and the Omo Valley's tribal cultures offer a journey unlike any other on the continent.",
      highlights: ["Lalibela's rock-hewn churches", "Simien Mountains trekking", "Danakil Depression expeditions", "Omo Valley tribal encounters"]
    },
    {
      title: "Southern Tanzania Explorer",
      subtitle: "Selous & Mafia Island Adventure",
      duration: "14 Days",
      startingPrice: "From $6,750",
      image: "/images/services/Adventure-travel/southern-tanzania-explorer.jpg",
      description: "Tanzania's vast southern wilderness combined with pristine island paradise. Walking safaris, river expeditions, and world-class diving in untouched, uncrowded locations.",
      highlights: ["Nyerere National Park expeditions", "Ruaha's massive elephant herds", "Mafia Island marine sanctuary", "Historical Kilwa ruins"]
    },
    {
      title: "Gorilla Trekking Expedition",
      subtitle: "Rwanda & Uganda Primates",
      duration: "8 Days",
      startingPrice: "From $7,200",
      image: "/images/services/Adventure-travel/gorilla-trekking-expedition.jpg",
      description: "Come face-to-face with endangered mountain gorillas and chimpanzees in the misty highlands of Rwanda and Uganda — a transformative encounter unlike any other in Africa.",
      highlights: ["Mountain gorilla encounters", "Chimpanzee tracking in Kibale", "Golden monkey experiences", "Canopy walks in ancient forests"]
    },
    {
      title: "Namibia Desert Adventure",
      subtitle: "Sossusvlei & Skeleton Coast",
      duration: "11 Days",
      startingPrice: "From $5,950",
      image: "/images/services/Adventure-travel/namibia-desert-adventure.jpg",
      description: "Traverse the world's oldest desert — towering red dunes, the desolate Skeleton Coast, and the extraordinary desert-adapted wildlife that calls this stark landscape home.",
      highlights: ["Sossusvlei's towering dunes", "Skeleton Coast expeditions", "Desert-adapted wildlife", "Himba cultural encounters"]
    },
    {
      title: "Multi-Country Expedition",
      subtitle: "East to Southern Africa Overland",
      duration: "21 Days",
      startingPrice: "From $12,500",
      image: "/images/services/Adventure-travel/multi-country-expedition.jpg",
      description: "An epic overland journey connecting nations and ecosystems. The full spectrum of African wilderness, cultures, and landscapes — a journey that defines the continent.",
      highlights: ["Cross-border migrations", "Diverse ecosystem experiences", "Cultural exchange opportunities", "Comprehensive African adventure"]
    }
  ];

  const expertiseFeatures = [
    { title: "Safety & Security", body: "Comprehensive risk assessment and safety protocols for remote-area travel, with emergency communication systems and experienced field teams." },
    { title: "Local Partnerships", body: "Deep relationships with local communities, guides, and specialist operators across Africa's most remote regions — built over nearly two decades." },
    { title: "Authentic Experiences", body: "Genuine cultural interactions and wilderness encounters far from tourist circuits, shaped by local knowledge and genuine respect for place." },
    { title: "Environmental Responsibility", body: "Leave No Trace principles embedded in every expedition, alongside active support for local conservation efforts in the communities we visit." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Adventure Travel"
        subtitle="Off-the-beaten-path expeditions to Africa's most remote and spectacular destinations."
        backgroundImage="/images/services/service-adventure-travel.jpg"
      />

      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Off the Beaten Path</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Beyond the Ordinary
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            Our expeditions take you to Africa&apos;s most remote wilderness areas, ancient cultural sites, and pristine landscapes. Designed for travellers seeking authentic, transformative experiences beyond the familiar safari trail.
          </p>
        </div>
      </Section>

      {/* Section 3 — 2-col card grid */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">The Expeditions</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              Adventure Expeditions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {adventureJourneys.map((journey, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={journey.image}
                    alt={journey.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{journey.subtitle}</p>
                  <h3 className="font-freight-display-pro text-xl text-stone-800 mb-2 leading-snug">{journey.title}</h3>
                  <p className="font-sofia-pro text-[10px] tracking-[0.12em] uppercase text-stone-400 mb-4">
                    {journey.duration}&nbsp;&nbsp;·&nbsp;&nbsp;{journey.startingPrice}
                  </p>
                  <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed mb-5">{journey.description}</p>
                  <div className="space-y-2.5">
                    {journey.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block mt-1" aria-hidden="true" />
                        <span className="font-sofia-pro text-xs text-stone-500">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — 4-col card grid */}
      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Standards</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
              Adventure Travel Expertise
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {expertiseFeatures.map(({ title, body }) => (
              <div key={title} className="bg-white p-8 lg:p-10">
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mb-6" aria-hidden="true" />
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/services/Adventure-travel/multi-country-expedition.jpg" alt="Adventure travel" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Plan Your Expedition</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Your Adventure Awaits
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                Ready to explore Africa&apos;s most remote and spectacular destinations? Our adventure travel specialists are here to craft your perfect expedition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm">
                  Plan Your Adventure
                </Link>
                <Link href="/destinations" className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm">
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
```

- [ ] **Step 2: Verify visually**

Open http://localhost:3000/services/adventure-travel and confirm:
- 6 expedition cards in 2-column grid, each showing duration and price below the title
- "Adventure Travel Expertise" shows 4 white cards

- [ ] **Step 3: Commit**

```bash
git add app/services/adventure-travel/page.tsx
git commit -m "redesign: adventure travel — card grid + standards cards"
```

---

## Task 4: MICE Solutions Page

**File:** `app/services/mice-solutions/page.tsx`

- [ ] **Step 1: Replace the file**

```tsx
"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function MICESolutionsPage() {
  const miceServices = [
    {
      title: "Corporate Conferences & Meetings",
      subtitle: "Professional Business Events",
      image: "/images/services/mice-solutions/corporate-conference-meetings.jpg",
      description: "World-class venues and expert event management for corporate conferences, board meetings, and business gatherings across Africa's leading urban and safari destinations.",
      highlights: ["Premium conference venue selection", "State-of-the-art audio-visual technology", "Professional event coordination", "Delegate registration and management"]
    },
    {
      title: "Incentive Travel Programs",
      subtitle: "Reward & Motivate Teams",
      image: "/images/services/mice-solutions/incentive-travel-programs.jpg",
      description: "Reward exceptional performance with curated African experiences that blend business objectives with unforgettable adventure, cultural depth, and genuine luxury.",
      highlights: ["Customised incentive safari packages", "Luxury lodge and beach resort experiences", "Team building safari activities", "Cultural experiences and workshops"]
    },
    {
      title: "Workshops & Training Programs",
      subtitle: "Learning & Development",
      image: "/images/services/mice-solutions/workshop-training.jpg",
      description: "Inspiring African settings that enhance learning, creativity, and collaboration. Purpose-built facilities and immersive outdoor environments for meaningful professional development.",
      highlights: ["Purpose-built training facilities", "Outdoor workshop spaces in nature", "Leadership development in wilderness settings", "Cultural immersion learning experiences"]
    },
    {
      title: "Special Events & Celebrations",
      subtitle: "Corporate Entertainment",
      image: "/images/services/mice-solutions/special-events-celebration.jpg",
      description: "Bush dinners, themed events, and cultural performances that transform corporate celebrations into extraordinary, unforgettable moments your team will talk about for years.",
      highlights: ["Bush dinner experiences under stars", "Cultural entertainment and performances", "Themed corporate parties", "Product launches in unique venues"]
    },
    {
      title: "Exhibition Support",
      subtitle: "Trade Shows & Exhibitions",
      image: "/images/services/mice-solutions/exhibition-support.jpg",
      description: "Comprehensive support for trade shows, exhibitions, and industry events across major African business hubs — local expertise, logistics, and regulatory guidance included.",
      highlights: ["Exhibition venue sourcing and booking", "Stand design and construction coordination", "Logistics and shipping support", "Local regulatory compliance assistance"]
    },
    {
      title: "Executive Retreats",
      subtitle: "Strategic Planning & Leadership",
      image: "/images/services/mice-solutions/executive-retreat.jpg",
      description: "Exclusive executive retreats in Africa's most inspiring locations. Strategic planning sessions combined with luxury experiences and adventure that sharpen and restore in equal measure.",
      highlights: ["Private luxury lodges and villas", "Strategic planning facilitation", "Executive coaching and development", "Exclusive safari and adventure experiences"]
    }
  ];

  const whyChoose = [
    { title: "18+ Years MICE Expertise", body: "Nearly two decades of experience managing corporate events and MICE programmes across Eastern and Southern Africa." },
    { title: "Pan-African Network", body: "Strong partnerships and deep local expertise across major business and safari destinations throughout the continent." },
    { title: "Cultural Integration", body: "A unique ability to weave authentic African experiences into corporate programmes — creating events with lasting meaning." },
    { title: "End-to-End Management", body: "Complete event management from initial brief to final execution. Every detail handled, every outcome assured." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="MICE Solutions"
        subtitle="Professional, end-to-end corporate event management across Eastern and Southern Africa."
        backgroundImage="/images/services/service-mice-solutions.jpg"
      />

      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Business in Africa</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Corporate Excellence
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            From intimate executive retreats to large-scale conferences, we manage every detail so your business events succeed — while showcasing the best of Africa&apos;s hospitality, culture, and natural beauty.
          </p>
        </div>
      </Section>

      {/* Section 3 — 2-col card grid */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              MICE Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {miceServices.map((service, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{service.subtitle}</p>
                  <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{service.title}</h3>
                  <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed mb-5">{service.description}</p>
                  <div className="space-y-2.5">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block mt-1" aria-hidden="true" />
                        <span className="font-sofia-pro text-xs text-stone-500">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — 4-col card grid */}
      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Distinction</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
              Why Choose Timobo for MICE?
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {whyChoose.map(({ title, body }) => (
              <div key={title} className="bg-white p-8 lg:p-10">
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mb-6" aria-hidden="true" />
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/services/mice-solutions/corporate-conference-meetings.jpg" alt="Corporate events" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Plan Your Event</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Ready for Your Corporate Event?
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                From intimate board meetings to large-scale conferences and incentive programmes, our MICE specialists will ensure your corporate event exceeds every expectation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm">
                  Plan Your Event
                </Link>
                <Link href="/destinations" className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm">
                  Event Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
```

- [ ] **Step 2: Verify visually**

Open http://localhost:3000/services/mice-solutions and confirm the 2-column card grid and 4-column standards section render correctly.

- [ ] **Step 3: Commit**

```bash
git add app/services/mice-solutions/page.tsx
git commit -m "redesign: mice solutions — card grid + standards cards"
```

---

## Task 5: Holiday Getaways Page

**File:** `app/services/holiday-getaways/page.tsx`

- [ ] **Step 1: Replace the file**

```tsx
"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function HolidayGetawaysPage() {
  const holidayPackages = [
    {
      title: "Beach Holidays",
      subtitle: "Coastal Paradise Retreats",
      image: "/images/services/service-holiday-getaways.jpg",
      description: "Pristine white-sand beaches in Diani, Zanzibar, Lamu, and Watamu. The Indian Ocean at its most inviting — perfect for honeymoons, family escapes, and pure relaxation.",
      highlights: ["Luxury beach resorts and boutique hotels", "Water sports and diving experiences", "Spice tours and cultural activities", "Private beach access"]
    },
    {
      title: "City & Nature Combos",
      subtitle: "Urban Meets Wilderness",
      image: "/images/services/service-safari-experiences.jpg",
      description: "The energy of Cape Town, Nairobi, or Kigali paired with nearby wilderness. Experience Africa's vibrant urban culture alongside world-class natural landscapes in one journey.",
      highlights: ["City tours and cultural experiences", "Nearby national parks and reserves", "Fine dining and entertainment", "Shopping and local markets"]
    },
    {
      title: "Luxury Lodge Getaways",
      subtitle: "Exclusive Wilderness Retreats",
      image: "/images/services/safari-experiences/luxury-safaris.jpg",
      description: "Africa's finest private conservancies and luxury lodges. Intimate wildlife experiences, exceptional hospitality, and absolute seclusion — a rare privilege in the wild.",
      highlights: ["Private conservancy access", "Exclusive wildlife experiences", "Five-star accommodations", "Personalised service"]
    },
    {
      title: "Honeymoon Packages",
      subtitle: "Romantic African Escapes",
      image: "/images/services/service-holiday-getaways.jpg",
      description: "Celebrate love in Africa's most romantic settings. Bespoke honeymoon journeys combining safari, beach, and luxury — curated to begin your story in extraordinary style.",
      highlights: ["Romantic safari lodges", "Private beach villas", "Couples spa treatments", "Champagne sundowners"]
    },
    {
      title: "Family Holidays",
      subtitle: "Memorable Family Adventures",
      image: "/images/services/service-safari-experiences.jpg",
      description: "Family holidays designed for every age. Safe, engaging, educational experiences that bond generations and create the kind of memories that last a lifetime.",
      highlights: ["Family-friendly accommodations", "Kid-safe wildlife experiences", "Educational programmes", "Multi-generational activities"]
    },
    {
      title: "Wellness Retreats",
      subtitle: "Rejuvenation & Relaxation",
      image: "/images/services/safari-experiences/luxury-safaris.jpg",
      description: "Reconnect with yourself in Africa's most restorative landscapes. Spa treatments, yoga, and wellness rituals framed by nature — deeply relaxing and genuinely renewing.",
      highlights: ["Spa and wellness facilities", "Yoga and meditation sessions", "Healthy cuisine options", "Nature immersion experiences"]
    }
  ];

  const reasons = [
    { title: "Bespoke by Design", body: "Every holiday is shaped entirely around you — your interests, pace, and vision. No templates, no compromises." },
    { title: "Trusted Accommodations", body: "A carefully curated network of luxury lodges, boutique hotels, and private villas, vetted for quality and character." },
    { title: "End-to-End Care", body: "From the first enquiry to your return flight, every detail is handled with care by a dedicated travel specialist." },
    { title: "Local Knowledge", body: "Nearly two decades of on-the-ground expertise across Eastern and Southern Africa, for the recommendations that matter." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Holiday Getaways"
        subtitle="Unforgettable holidays across Africa's most beautiful destinations — from pristine beaches to exclusive wilderness lodges."
        backgroundImage="/images/services/service-holiday-getaways.jpg"
      />

      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Indulge in Africa</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Unforgettable Escapes
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            Whether you seek adventure, relaxation, or romance, we create perfect African getaways tailored to your dream. Every holiday is crafted with personal attention and an intimate knowledge of the continent.
          </p>
        </div>
      </Section>

      {/* Section 3 — 2-col card grid */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              Holiday Experiences
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {holidayPackages.map((pkg, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{pkg.subtitle}</p>
                  <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{pkg.title}</h3>
                  <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed mb-5">{pkg.description}</p>
                  <div className="space-y-2.5">
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block mt-1" aria-hidden="true" />
                        <span className="font-sofia-pro text-xs text-stone-500">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — 4-col card grid */}
      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Promise</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
              The Timobo Difference
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {reasons.map(({ title, body }) => (
              <div key={title} className="bg-white p-8 lg:p-10">
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mb-6" aria-hidden="true" />
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/services/service-holiday-getaways.jpg" alt="Holiday getaway" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Your Perfect Escape</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Your Perfect Holiday Awaits
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                From romantic beach escapes to family adventures, let us create your perfect African holiday with attention to every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm">
                  Plan Your Holiday
                </Link>
                <Link href="/destinations" className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm">
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
```

- [ ] **Step 2: Verify visually**

Open http://localhost:3000/services/holiday-getaways and confirm the card grid and 4-column section render correctly.

- [ ] **Step 3: Commit**

```bash
git add app/services/holiday-getaways/page.tsx
git commit -m "redesign: holiday getaways — card grid + standards cards"
```

---

## Task 6: Transport Solutions Page

**File:** `app/services/transport-solutions/page.tsx`

- [ ] **Step 1: Replace the file**

```tsx
"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function TransportSolutionsPage() {
  const transportServices = [
    {
      title: "Safari Vehicles",
      subtitle: "Specialised Game Drive Vehicles",
      image: "/images/services/service-transport-solutions.jpg",
      description: "Purpose-built safari vehicles with pop-up roofs, comfortable seating, and experienced drivers — engineered for optimal wildlife viewing and built for Africa's most demanding terrain.",
      highlights: ["4x4 safari vehicles with pop-up roofs", "Expert safari drivers", "Two-way radio communication", "Cooler boxes and refreshments"]
    },
    {
      title: "Airport Transfers",
      subtitle: "Seamless Airport Logistics",
      image: "/images/services/service-transport-solutions.jpg",
      description: "Professional meet-and-greet services with reliable transfers between airports, hotels, and safari lodges. Your journey begins the moment you land.",
      highlights: ["Meet-and-greet services", "Flight monitoring", "Luggage assistance", "Comfortable air-conditioned vehicles"]
    },
    {
      title: "VIP Transport",
      subtitle: "Executive & VIP Services",
      image: "/images/services/service-mice-solutions.jpg",
      description: "Premium transport for corporate executives and VIP clients. Discreet, reliable, and impeccably presented — with security escort options where required.",
      highlights: ["Luxury vehicle fleet", "Professional chauffeurs", "Security escort options", "Discreet and reliable service"]
    },
    {
      title: "Inter-Destination Transfers",
      subtitle: "Seamless Multi-City Logistics",
      image: "/images/services/service-transport-solutions.jpg",
      description: "Coordinated transfers between destinations, lodges, and attractions — ensuring smooth transitions throughout your African journey without a moment of uncertainty.",
      highlights: ["Multi-destination coordination", "Lodge-to-lodge transfers", "Border crossing assistance", "Flexible scheduling"]
    },
    {
      title: "Group Transport",
      subtitle: "Large Group Logistics",
      image: "/images/services/service-mice-solutions.jpg",
      description: "Efficient, well-coordinated transport for groups, conferences, and events. Coaches, minibuses, and multi-vehicle fleets managed with precision and professionalism.",
      highlights: ["Coaches and minibuses", "Multi-vehicle coordination", "Event logistics support", "Professional group handling"]
    },
    {
      title: "Private Charters",
      subtitle: "Exclusive Vehicle Hire",
      image: "/images/services/service-transport-solutions.jpg",
      description: "A dedicated vehicle and driver for your exclusive use. Total flexibility, complete privacy, and a personalised route — your journey, your way.",
      highlights: ["Dedicated vehicles and drivers", "Flexible itineraries", "Privacy and comfort", "Customised route planning"]
    }
  ];

  const fleetFeatures = [
    { title: "Well-Maintained Vehicles", body: "Regular servicing and rigorous maintenance schedules ensure reliability and safety throughout every journey, on every road." },
    { title: "Experienced Drivers", body: "Professional, licensed drivers with extensive knowledge of routes, local conditions, and the subtle art of making guests feel at ease." },
    { title: "Safety & Insurance", body: "Full insurance coverage and strict adherence to all safety regulations — so you travel with complete confidence and peace of mind." },
    { title: "24/7 Support", body: "Round-the-clock coordination and support for any transport-related needs, changes, or emergencies throughout your African journey." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Transport Solutions"
        subtitle="Reliable, comfortable, and safe transport throughout your African journey — from arrival to departure."
        backgroundImage="/images/services/service-transport-solutions.jpg"
      />

      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Seamless Logistics</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Safe, Reliable &amp; Comfortable
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            Our fleet of well-maintained vehicles and experienced drivers ensure your comfort and safety from the moment you arrive. From airport pickups to safari game drives, every transfer is handled with care.
          </p>
        </div>
      </Section>

      {/* Section 3 — 2-col card grid */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              Transport Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {transportServices.map((service, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{service.subtitle}</p>
                  <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{service.title}</h3>
                  <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed mb-5">{service.description}</p>
                  <div className="space-y-2.5">
                    {service.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block mt-1" aria-hidden="true" />
                        <span className="font-sofia-pro text-xs text-stone-500">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — 4-col card grid */}
      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Standards</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
              Our Fleet &amp; Standards
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {fleetFeatures.map(({ title, body }) => (
              <div key={title} className="bg-white p-8 lg:p-10">
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mb-6" aria-hidden="true" />
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/services/service-transport-solutions.jpg" alt="Transport services" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Seamless Logistics</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Reliable Transport, Every Mile
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                Let us handle your transport logistics with professional drivers, well-maintained vehicles, and comprehensive support throughout your African journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm">
                  Request Transport Quote
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
```

- [ ] **Step 2: Verify visually**

Open http://localhost:3000/services/transport-solutions and confirm the layout renders correctly.

- [ ] **Step 3: Commit**

```bash
git add app/services/transport-solutions/page.tsx
git commit -m "redesign: transport solutions — card grid + standards cards"
```

---

## Task 7: Outbound Travel Page

**File:** `app/services/outbound-travel/page.tsx`

Note: Services have no images — cards use text-only layout. The "Popular Destinations" section replaces the old 2-col layout with the same 4-column card grid pattern.

- [ ] **Step 1: Replace the file**

```tsx
"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

export default function OutboundTravelPage() {
  const outboundServices = [
    {
      title: "International Flight Bookings",
      subtitle: "Competitive Airfare Worldwide",
      description: "Access to competitive international airfares and comprehensive flight booking services for all global destinations — with expert guidance on routes, connections, and airline preferences.",
      highlights: ["Competitive international airfares", "Multi-city and complex routing", "Airline preference management", "Flight schedule optimisation"]
    },
    {
      title: "Visa Processing Assistance",
      subtitle: "Expert Visa Support",
      description: "Comprehensive visa application support and guidance for African travellers going worldwide. We navigate the documentation so your journey begins without complication.",
      highlights: ["Visa requirements consultation", "Application form assistance", "Document preparation support", "Embassy liaison services"]
    },
    {
      title: "Travel Insurance",
      subtitle: "Comprehensive Coverage",
      description: "Travel insurance solutions that provide genuine peace of mind — comprehensive coverage for international trips including medical, trip cancellation, and emergency assistance.",
      highlights: ["Medical coverage worldwide", "Trip cancellation protection", "Emergency evacuation", "24/7 assistance services"]
    },
    {
      title: "Hotel Reservations",
      subtitle: "Global Accommodation",
      description: "Access to hotels and accommodations worldwide. Competitive rates, expert recommendations, and the personal attention that ensures every stay meets your expectations.",
      highlights: ["Global hotel network access", "Competitive rates", "Accommodation recommendations", "Special requests handling"]
    },
    {
      title: "Tour Packages",
      subtitle: "Curated International Tours",
      description: "Pre-designed and custom tour packages to popular international destinations — Europe, Asia, the Americas, and the Middle East — crafted with the same care as our African journeys.",
      highlights: ["Popular destination packages", "Custom tour design", "Group tour arrangements", "Multi-country itineraries"]
    },
    {
      title: "Travel Consultancy",
      subtitle: "Expert Travel Guidance",
      description: "Professional travel consultancy providing expert insight on destinations, visa requirements, optimal travel times, cultural nuance, and end-to-end itinerary planning support.",
      highlights: ["Destination expertise", "Travel requirement advice", "Cultural insights", "Itinerary planning support"]
    }
  ];

  const popularDestinations = [
    { region: "Europe", body: "UK, France, Italy, Spain, and Germany — comprehensive tour packages and independent travel arrangements across Europe's most iconic destinations." },
    { region: "Asia", body: "Dubai, Thailand, China, India, Singapore — expert guidance on Asia's most diverse and captivating travel experiences." },
    { region: "Americas", body: "USA, Canada, Brazil, and beyond — comprehensive support for North and South American adventures and city breaks." },
    { region: "Middle East", body: "Turkey, Egypt, and the Gulf States — a region of extraordinary history, culture, and modern luxury." },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Outbound Travel"
        subtitle="Plan your international journeys with confidence — from visa assistance to flights and travel insurance."
        backgroundImage="/images/services/services-hero.jpg"
      />

      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Beyond Africa</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Your Gateway to the World
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            With an extensive global network and deep expertise in international travel, we provide comprehensive support for African travellers exploring the world. Let us handle the complexity while you focus on the journey.
          </p>
        </div>
      </Section>

      {/* Section 3 — 2-col text card grid (no images) */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              Outbound Travel Services
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {outboundServices.map((service, index) => (
              <div key={index} className="bg-white p-8 lg:p-10">
                <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{service.subtitle}</p>
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{service.title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed mb-5">{service.description}</p>
                <div className="space-y-2.5">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block mt-1" aria-hidden="true" />
                      <span className="font-sofia-pro text-xs text-stone-500">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section 4 — Popular Destinations as 4-col card grid */}
      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Global Reach</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
              Popular International Destinations
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200">
            {popularDestinations.map(({ region, body }) => (
              <div key={region} className="bg-white p-8 lg:p-10">
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mb-6" aria-hidden="true" />
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{region}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/services/services-hero.jpg" alt="Outbound travel" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Travel Worldwide</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Explore the World with Confidence
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                From visa processing to flight bookings and travel insurance, let our expert team handle every detail of your international journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm">
                  Plan Your International Trip
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
```

- [ ] **Step 2: Verify visually**

Open http://localhost:3000/services/outbound-travel and confirm:
- 6 text-only cards (no images) in a 2-column grid
- "Popular International Destinations" shows 4 white cards (Europe, Asia, Americas, Middle East) with amber diamond accents

- [ ] **Step 3: Commit**

```bash
git add app/services/outbound-travel/page.tsx
git commit -m "redesign: outbound travel — text card grid + destinations cards"
```
