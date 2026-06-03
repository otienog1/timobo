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

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              Safari Experiences
            </h2>
          </div>

          <div className="divide-y divide-stone-100">
            {safariExperiences.map((experience, index) => (
              <div key={index} className="py-12 lg:py-14">
                <div className="relative aspect-[4/3] overflow-hidden mb-8 lg:hidden">
                  <Image src={experience.image} alt={experience.title} fill className="object-cover" />
                </div>
                <div className="flex gap-6 lg:gap-10 items-start">
                  <span className="font-freight-display-pro text-3xl lg:text-5xl text-stone-200 leading-none select-none flex-shrink-0 pt-1 w-10 lg:w-14" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0 flex flex-col lg:flex-row lg:gap-12 gap-5 lg:items-start">
                    <div className="lg:w-52 lg:flex-shrink-0">
                      <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{experience.subtitle}</p>
                      <h3 className="font-freight-display-pro text-2xl text-stone-800 leading-snug">{experience.title}</h3>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-5">{experience.description}</p>
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
                  <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={experience.image} alt={experience.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="relative aspect-[16/7] overflow-hidden mb-14">
            <Image src="/images/services/safari-experiences/wildlife-safaris.jpg" alt="Safari planning excellence" fill className="object-cover" />
          </div>
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">Our Standards</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-2xl">
              Safari Planning Excellence
            </h2>
          </div>
          <div className="divide-y divide-stone-200">
            {planningFeatures.map(({ title, body }) => (
              <div key={title} className="flex flex-col lg:flex-row lg:gap-20 py-8 lg:items-start">
                <h3 className="font-freight-display-pro text-xl text-stone-800 lg:w-72 lg:flex-shrink-0 mb-2 lg:mb-0 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed flex-1">{body}</p>
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
