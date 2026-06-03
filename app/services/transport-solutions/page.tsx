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

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              Transport Services
            </h2>
          </div>

          <div className="divide-y divide-stone-100">
            {transportServices.map((service, index) => (
              <div key={index} className="py-12 lg:py-14">
                <div className="relative aspect-[4/3] overflow-hidden mb-8 lg:hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="flex gap-6 lg:gap-10 items-start">
                  <span className="font-freight-display-pro text-3xl lg:text-5xl text-stone-200 leading-none select-none flex-shrink-0 pt-1 w-10 lg:w-14" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0 flex flex-col lg:flex-row lg:gap-12 gap-5 lg:items-start">
                    <div className="lg:w-52 lg:flex-shrink-0">
                      <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{service.subtitle}</p>
                      <h3 className="font-freight-display-pro text-2xl text-stone-800 leading-snug">{service.title}</h3>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-5">{service.description}</p>
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
                  <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
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
            <Image src="/images/services/service-transport-solutions.jpg" alt="Our fleet and standards" fill className="object-cover" />
          </div>
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">Our Standards</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-2xl">
              Our Fleet &amp; Standards
            </h2>
          </div>
          <div className="divide-y divide-stone-200">
            {fleetFeatures.map(({ title, body }) => (
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
