"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import Image from "next/image";

export default function HolidayGetawaysPage() {
  const holidayPackages = [
    {
      title: "Beach Holidays",
      subtitle: "Coastal Paradise Retreats",
      description: "Relax on pristine white-sand beaches in Diani, Zanzibar, Lamu, and Watamu. Perfect for honeymoons, family vacations, and romantic getaways.",
      image: "/images/services/service-holiday-getaways.jpg",
      highlights: [
        "Luxury beach resorts and boutique hotels",
        "Water sports and diving experiences",
        "Spice tours and cultural activities",
        "Private beach access"
      ]
    },
    {
      title: "City & Nature Combos",
      subtitle: "Urban Meets Wilderness",
      description: "Combine vibrant city experiences with nature retreats. Explore Cape Town, Nairobi, Kigali, and more paired with nearby natural attractions.",
      image: "/images/services/service-safari-experiences.jpg",
      highlights: [
        "City tours and cultural experiences",
        "Nearby national parks and reserves",
        "Fine dining and entertainment",
        "Shopping and local markets"
      ]
    },
    {
      title: "Luxury Lodge Getaways",
      subtitle: "Exclusive Wilderness Retreats",
      description: "Experience Africa's finest private conservancies and luxury lodges. Intimate wildlife experiences combined with world-class hospitality.",
      image: "/images/services/safari-experiences/luxury-safaris.jpg",
      highlights: [
        "Private conservancy access",
        "Exclusive wildlife experiences",
        "Five-star accommodations",
        "Personalized service"
      ]
    },
    {
      title: "Honeymoon Packages",
      subtitle: "Romantic African Escapes",
      description: "Celebrate love in Africa's most romantic settings. Tailor-made honeymoon packages combining safari, beach, and luxury experiences.",
      image: "/images/services/service-holiday-getaways.jpg",
      highlights: [
        "Romantic safari lodges",
        "Private beach villas",
        "Couples spa treatments",
        "Champagne sundowners"
      ]
    },
    {
      title: "Family Holidays",
      subtitle: "Memorable Family Adventures",
      description: "Family-friendly holidays designed for all ages. Safe, engaging experiences that create lasting memories for the whole family.",
      image: "/images/services/service-safari-experiences.jpg",
      highlights: [
        "Family-friendly accommodations",
        "Kid-safe wildlife experiences",
        "Educational programs",
        "Multi-generational activities"
      ]
    },
    {
      title: "Wellness Retreats",
      subtitle: "Rejuvenation & Relaxation",
      description: "Reconnect with nature and rejuvenate your spirit. Wellness-focused retreats combining spa treatments, yoga, and natural healing.",
      image: "/images/services/safari-experiences/luxury-safaris.jpg",
      highlights: [
        "Spa and wellness facilities",
        "Yoga and meditation sessions",
        "Healthy cuisine options",
        "Nature immersion experiences"
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Holiday Getaways"
        subtitle="Luxury African Holidays"
        description="Indulge in unforgettable holidays across Africa's most beautiful destinations. From pristine beaches to luxury lodges, we create perfect vacations for honeymoons, family holidays, and romantic retreats."
        backgroundImage="/images/services/service-holiday-getaways.jpg"
      />

      {/* Introduction Section */}
      <Section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Unforgettable Escapes
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            Experience Africa&apos;s most beautiful destinations with our luxury holiday packages. Whether you seek adventure, relaxation, or romance, we create perfect getaways tailored to your dreams.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* Holiday Packages Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              Holiday Experiences
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Discover our curated holiday packages designed to showcase Africa&apos;s diverse beauty, from tropical beaches to luxury wilderness lodges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {holidayPackages.map((pkg, index) => (
              <div key={index} className="bg-white overflow-hidden group transition-all duration-300">
                {/* Package Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Package Content */}
                <div className="p-6 px-0">
                  <div className="mb-4">
                    <h3 className="font-freight-display-pro text-xl font-bold text-stone-800 mb-2">
                      {pkg.title}
                    </h3>
                    <p className="font-sofia-pro text-sm text-stone-600 mb-3">
                      {pkg.subtitle}
                    </p>
                  </div>

                  <p className="font-sofia-pro text-sm text-stone-700 leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-sofia-pro text-xs uppercase tracking-wide text-stone-600 mb-3 font-semibold">
                      Package Highlights
                    </h4>
                    <div className="space-y-2">
                      {pkg.highlights.map((highlight, highlightIndex) => (
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

      {/* CTA Section */}
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services/service-holiday-getaways.jpg"
            alt="Holiday getaway"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Your Perfect Holiday Awaits
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            From romantic beach escapes to family adventures, let us create your perfect African holiday experience with attention to every detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm shadow-2xl relative z-20">
              Plan Your Holiday
            </Link>
            <Link href="/destinations" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 bg-transparent shadow-black/10 hover:shadow-white/20 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm border-2 border-white text-white hover:bg-white hover:text-stone-800 shadow-2xl relative z-20">
              Explore Destinations
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-sofia-pro text-white/80 text-sm mb-4">Holiday specialists for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Beach Experts</span>
              <span>•</span>
              <span>Luxury Specialists</span>
              <span>•</span>
              <span>Family Friendly</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
