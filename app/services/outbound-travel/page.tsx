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

      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">Outbound Travel Services</h2>
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

      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Global Reach</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">Popular International Destinations</h2>
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
