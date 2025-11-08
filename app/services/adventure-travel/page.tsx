"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
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
      description: "Journey to Kenya's remote northern frontier, exploring the jade waters of Lake Turkana and encountering Samburu's unique wildlife in pristine desert landscapes.",
      highlights: [
        "Lake Turkana - Africa's largest desert lake",
        "Samburu's Special Five wildlife",
        "Traditional pastoralist communities",
        "Remote desert camping"
      ]
    },
    {
      title: "Ethiopian Highlands Discovery",
      subtitle: "Ancient Churches & Tribal Cultures",
      duration: "12 Days",
      startingPrice: "From $5,200",
      image: "/images/services/Adventure-travel/ethiopian-highland-discovery.jpg",
      description: "Explore the cradle of civilization with ancient rock-hewn churches, dramatic mountain landscapes, and encounters with traditional tribal communities.",
      highlights: [
        "Lalibela's rock-hewn churches",
        "Simien Mountains trekking",
        "Danakil Depression expeditions",
        "Omo Valley tribal encounters"
      ]
    },
    {
      title: "Southern Tanzania Explorer",
      subtitle: "Selous & Mafia Island Adventure",
      duration: "14 Days",
      startingPrice: "From $6,750",
      image: "/images/services/Adventure-travel/southern-tanzania-explorer.jpg",
      description: "Discover Tanzania's largest wilderness areas combined with pristine island paradise. Experience walking safaris and world-class diving in untouched locations.",
      highlights: [
        "Nyerere National Park expeditions",
        "Ruaha's massive elephant herds",
        "Mafia Island marine sanctuary",
        "Historical Kilwa ruins"
      ]
    },
    {
      title: "Gorilla Trekking Expedition",
      subtitle: "Rwanda & Uganda Primates",
      duration: "8 Days",
      startingPrice: "From $7,200",
      image: "/images/services/Adventure-travel/gorilla-trekking-expedition.jpg",
      description: "Come face-to-face with endangered mountain gorillas and chimpanzees in the misty forests of Rwanda and Uganda's pristine highlands.",
      highlights: [
        "Mountain gorilla encounters",
        "Chimpanzee tracking in Kibale",
        "Golden monkey experiences",
        "Canopy walks in ancient forests"
      ]
    },
    {
      title: "Namibia Desert Adventure",
      subtitle: "Sossusvlei & Skeleton Coast",
      duration: "11 Days",
      startingPrice: "From $5,950",
      image: "/images/services/Adventure-travel/namibia-desert-adventure.jpg",
      description: "Traverse towering red sand dunes and explore the desolate beauty of the Skeleton Coast in one of Africa's most dramatic landscapes.",
      highlights: [
        "Sossusvlei's towering dunes",
        "Skeleton Coast expeditions",
        "Desert-adapted wildlife",
        "Himba cultural encounters"
      ]
    },
    {
      title: "Multi-Country Expedition",
      subtitle: "East to Southern Africa Overland",
      duration: "21 Days",
      startingPrice: "From $12,500",
      image: "/images/services/Adventure-travel/multi-country-expedition.jpg",
      description: "Epic overland journey connecting multiple countries and diverse ecosystems. Experience the full spectrum of African wilderness and cultures.",
      highlights: [
        "Cross-border migrations",
        "Diverse ecosystem experiences",
        "Cultural exchange opportunities",
        "Comprehensive African adventure"
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Adventure Travel"
        subtitle="African Expeditions"
        description="Join our carefully curated adventure journeys to Africa's most remote and spectacular destinations. Experience authentic wilderness encounters away from the crowds."
        backgroundImage="/images/services/service-adventure-travel.jpg"
      />

      {/* Introduction Section */}
      <Section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Beyond the Ordinary
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            Our adventure expeditions take you to Africa&apos;s most remote wilderness areas, ancient cultural sites, and pristine landscapes. Each journey is designed for travelers seeking authentic, transformative experiences beyond traditional safari routes.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* Adventure Journeys Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              Adventure Expeditions
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Carefully planned expeditions to Africa&apos;s most spectacular and remote destinations. All journeys include expert guides, premium accommodations, and comprehensive logistics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventureJourneys.map((journey, index) => (
              <div key={index} className="bg-white overflow-hidden group transition-all duration-300">
                {/* Journey Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={journey.image}
                    alt={journey.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Journey Content */}
                <div className="p-6 px-0">
                  <div className="mb-4">
                    <h3 className="font-freight-display-pro text-xl font-bold text-stone-800 mb-2">
                      {journey.title}
                    </h3>
                    <p className="font-sofia-pro text-sm text-stone-600 mb-3">
                      {journey.subtitle}
                    </p>
                  </div>

                  <p className="font-sofia-pro text-sm text-stone-700 leading-relaxed mb-4">
                    {journey.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-sofia-pro text-xs uppercase tracking-wide text-stone-600 mb-3 font-semibold">
                      Expedition Highlights
                    </h4>
                    <div className="space-y-2">
                      {journey.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start space-x-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                          <span className="font-sofia-pro text-xs text-stone-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Expertise Section */}
      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-8 text-stone-800">
                Adventure Travel Expertise
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Safety & Security</h3>
                    <p className="font-sofia-pro text-stone-700">Comprehensive risk assessment and safety protocols for remote area travel with emergency communication systems.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Local Partnerships</h3>
                    <p className="font-sofia-pro text-stone-700">Strong relationships with local communities, guides, and operators in remote regions across Africa.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Authentic Experiences</h3>
                    <p className="font-sofia-pro text-stone-700">Genuine cultural interactions and wilderness experiences away from tourist crowds.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Environmental Responsibility</h3>
                    <p className="font-sofia-pro text-stone-700">Leave No Trace principles and support for local conservation efforts in remote areas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                <Image
                  src="/images/services/Adventure-travel/ethiopian-highland-discovery.jpg"
                  alt="Adventure travel expertise"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/Adventure-travel/multi-country-expedition.jpg"
            alt="Adventure travel"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Your Adventure Awaits
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to explore Africa&apos;s most remote and spectacular destinations? Our adventure travel specialists are here to craft your perfect expedition.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm shadow-2xl relative z-20">
              Plan Your Adventure
            </Link>
            <Link href="/destinations" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 bg-transparent shadow-black/10 hover:shadow-white/20 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm border-2 border-white text-white hover:bg-white hover:text-stone-800 shadow-2xl relative z-20">
              Explore Destinations
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-sofia-pro text-white/80 text-sm mb-4">Adventure travel specialists for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Remote Expeditions</span>
              <span>•</span>
              <span>Safety Focused</span>
              <span>•</span>
              <span>Local Partnerships</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}