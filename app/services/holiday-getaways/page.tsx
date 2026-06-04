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

      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">Holiday Experiences</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {holidayPackages.map((pkg, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={pkg.image} alt={pkg.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
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

      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Promise</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">The Timobo Difference</h2>
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
