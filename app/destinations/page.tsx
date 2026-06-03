"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const destinations = {
    eastern: [
      {
        name: "Kenya",
        description: "Kenya is home to the world-famous Maasai Mara, where the awe-inspiring Great Wildebeest Migration takes center stage each year. Explore Amboseli, renowned for its large-tusked elephants and stunning views of Mount Kilimanjaro.",
        image: "/images/destinations/destination-kenya.jpg",
        highlight: "Great Migration & Big Five",
        bestTime: "July–October (Migration), Jan–March (Beach)"
      },
      {
        name: "Tanzania",
        description: "Home to the Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara in the north — and the remote wilderness of Nyerere, Ruaha, and Mahale in the south. Finish on the spice-scented shores of Zanzibar.",
        image: "/images/destinations/destination-tanzania.jpg",
        highlight: "Serengeti · Ngorongoro · Zanzibar",
        bestTime: "June–October (Safari), Dec–Feb (Zanzibar)"
      },
      {
        name: "Zanzibar",
        description: "An island of ivory-white beaches, turquoise waters, and a UNESCO-listed Stone Town steeped in Swahili, Arab, and Portuguese history. The perfect complement to any Tanzania safari.",
        image: "/images/destinations/destination-southern-tanzania.jpg",
        highlight: "Beaches & Stone Town",
        bestTime: "June–October, December–February"
      },
      {
        name: "Rwanda",
        description: "Rwanda offers a once-in-a-lifetime chance to trek endangered mountain gorillas in Volcanoes National Park. Discover the tranquil beauty of Lake Kivu and immerse yourself in the inspiring culture of Kigali.",
        image: "/images/destinations/destination-rwanda.jpg",
        highlight: "Mountain Gorilla Trekking",
        bestTime: "June–September, December–February"
      },
      {
        name: "Uganda",
        description: "Uganda is a land of rare encounters – from gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale National Park. Cruise the legendary Nile River and enjoy classic savannah safaris.",
        image: "/images/destinations/destination-uganda.jpg",
        highlight: "Gorillas & Chimpanzees",
        bestTime: "June–September, December–February"
      },
      {
        name: "Ethiopia",
        description: "Ethiopia blends rich history with breathtaking landscapes – from the ancient rock-hewn churches of Lalibela to the surreal Danakil Depression. Trek the majestic Simien Mountains and immerse yourself in vibrant traditions.",
        image: "/images/destinations/destination-ethiopia.jpg",
        highlight: "Ancient Churches & Highland Treks",
        bestTime: "October–March"
      },
    ],
    southern: [
      {
        name: "South Africa",
        description: "From thrilling Big Five safaris in Kruger National Park to vibrant Cape Town with its iconic Table Mountain and world-class Cape Winelands, South Africa offers a seamless blend of wildlife, rich culture, and unforgettable adventure.",
        image: "/images/destinations/destination-southern-africa.jpg",
        highlight: "Big Five & Cape Town",
        bestTime: "May–September (Safari), Oct–April (Cape Town)"
      },
      {
        name: "Zimbabwe",
        description: "Home to the majestic Victoria Falls, Zimbabwe offers dramatic landscapes, abundant wildlife in Hwange National Park and authentic cultural experiences in a warm, welcoming setting.",
        image: "/images/destinations/destination-zimbabwe.jpg",
        highlight: "Victoria Falls & Big Game",
        bestTime: "March–May, May–October"
      },
      {
        name: "Zambia",
        description: "Famous for walking safaris and stunning views of Victoria Falls, Zambia offers pristine wilderness in South Luangwa and thrilling river adventures along the Zambezi River.",
        image: "/images/destinations/destination-zambia.jpg",
        highlight: "Walking Safaris & Victoria Falls",
        bestTime: "June–October"
      },
      {
        name: "Botswana",
        description: "Discover the wild beauty of the Okavango Delta – a vast, wildlife-rich UNESCO World Heritage Site – and marvel at the great elephant herds of Chobe National Park.",
        image: "/images/destinations/destination-botswana.jpg",
        highlight: "Okavango Delta & Chobe",
        bestTime: "May–October"
      },
      {
        name: "Namibia",
        description: "Marvel at the towering red dunes of Sossusvlei, roam the untamed Skeleton Coast, and encounter rare desert-adapted wildlife in one of Africa's most breathtaking landscapes.",
        image: "/images/destinations/destination-namibia.jpg",
        highlight: "Desert Dunes & Skeleton Coast",
        bestTime: "May–October"
      }
    ]
  };

  const allDestinations = [...destinations.eastern, ...destinations.southern];
  const filteredDestinations = selectedRegion === 'all'
    ? allDestinations
    : selectedRegion === 'eastern'
    ? destinations.eastern
    : destinations.southern;

  const filters = [
    { key: 'all', label: 'All Destinations' },
    { key: 'eastern', label: 'Eastern Africa' },
    { key: 'southern', label: 'Southern Africa' },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="African Destinations"
        subtitle="From the vast savannas of East Africa to the dramatic landscapes of the south — explore destinations that will leave you breathless."
        backgroundImage="/images/destinations/all-destinations-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Where Africa Calls</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Where Africa Calls to the Soul
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            Each destination in Africa tells a story that transcends the ordinary. From the thundering hooves of the Great Migration to the gentle whispers of mountain gorillas, every journey becomes a chapter in your personal narrative of discovery.
          </p>
        </div>
      </Section>

      {/* Region Filter */}
      <Section className="py-6 bg-white sticky top-20 z-40 border-b border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setSelectedRegion(key)}
                className={`font-sofia-pro text-[11px] tracking-[0.2em] uppercase pb-1 transition-all duration-200 ${
                  selectedRegion === key
                    ? 'text-stone-900 border-b border-stone-900'
                    : 'text-stone-400 hover:text-stone-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Destinations Grid */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-4">
              {selectedRegion === 'all' ? 'All African Destinations' :
               selectedRegion === 'eastern' ? 'Eastern Africa' :
               'Southern Africa'}
            </h2>
            <p className="font-sofia-pro text-sm text-stone-500 max-w-2xl mx-auto leading-relaxed">
              {selectedRegion === 'all' ? 'Discover the incredible diversity of African destinations, from the iconic savannas of East Africa to the dramatic landscapes of Southern Africa.' :
               selectedRegion === 'eastern' ? 'Discover the iconic destinations of Eastern Africa, each offering unique wildlife encounters, breathtaking landscapes, and cultural experiences.' :
               'Experience the dramatic contrasts of Southern Africa, from thundering waterfalls and pristine deltas to towering desert dunes and vibrant cities.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => {
              const region = destinations.eastern.includes(destination) ? 'eastern' : 'southern';
              const rawSlug = destination.name.toLowerCase().replace(/\s+/g, '-');
              const slug = rawSlug === 'zanzibar' ? 'tanzania#zanzibar' : rawSlug;

              return (
                <div key={`${region}-${index}`} className="bg-white overflow-hidden">
                  <Link href={`/destinations/${slug}`} className="relative aspect-[4/3] overflow-hidden block">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} safari destination`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>
                  <div className="pt-5 pb-2">
                    <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{destination.highlight}</p>
                    <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3">
                      {destination.name}
                    </h3>
                    <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-5">
                      {destination.description}
                    </p>
                    <Link href={`/destinations/${slug}`} className="font-sofia-pro text-[11px] tracking-[0.15em] uppercase text-stone-800 hover:text-amber-600 transition-colors duration-200 inline-flex items-center gap-2">
                      Explore {destination.name}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Planning Section */}
      <Section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Expert Guidance</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
                Planning Your African Adventure?
              </h2>
              <p className="font-sofia-pro text-sm text-stone-600 mb-8 leading-relaxed">
                Our safari specialists have decades of experience across Africa. We&apos;ll help you choose the perfect destinations, plan your itinerary, and ensure every moment of your journey is unforgettable.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Expert destination recommendations based on your interests",
                  "Custom itinerary planning with optimal timing",
                  "Seamless coordination across multiple countries",
                  "Support for conservation and local communities",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mt-2" />
                    <p className="font-sofia-pro text-sm text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(28,25,23,0.25)] hover:shadow-[0_2px_8px_rgba(28,25,23,0.35)]"
              >
                Get Personal Recommendations
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src="/images/destinations/destination-kenya.jpg" alt="African wildlife safari" fill className="object-cover" />
                </div>
                <div className="space-y-3">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/images/destinations/destination-tanzania.jpg" alt="African landscape" fill className="object-cover" />
                  </div>
                  <div className="relative aspect-square overflow-hidden">
                    <Image src="/images/destinations/destination-rwanda.jpg" alt="Mountain gorillas" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/destinations/all-destinations-hero.jpg" alt="African destinations" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">African Destinations</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Your African Story Awaits
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                Let us craft a journey that transcends the ordinary. From the thundering wildebeest migration to intimate encounters with mountain gorillas, your African adventure begins with a single conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(140,110,35,0.5)] hover:shadow-[0_2px_8px_rgba(140,110,35,0.65)]"
                >
                  Begin Your Journey
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm"
                >
                  Discover Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
