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

      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">The Expeditions</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">Adventure Expeditions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {adventureJourneys.map((journey, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={journey.image} alt={journey.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-8 lg:p-10">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{journey.subtitle}</p>
                  <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{journey.title}</h3>
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

      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Standards</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">Adventure Travel Expertise</h2>
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
