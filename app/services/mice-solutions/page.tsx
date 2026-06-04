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

      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What We Offer</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">MICE Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-stone-200">
            {miceServices.map((service, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
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

      <Section className="py-20 lg:py-28 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Distinction</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">Why Choose Timobo for MICE?</h2>
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
