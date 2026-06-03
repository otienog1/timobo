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

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">Our Offerings</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-xl">
              Comprehensive Travel Solutions
            </h2>
          </div>

          <div className="divide-y divide-stone-100">
            {services.map((service, index) => (
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
                      <h3 className="font-freight-display-pro text-2xl text-stone-800 leading-snug mb-4">{service.title}</h3>
                      <Link
                        href={service.link}
                        className="font-sofia-pro text-[10px] tracking-[0.18em] uppercase text-stone-400 hover:text-amber-600 transition-colors duration-200 inline-flex items-center gap-1.5"
                      >
                        Learn more
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
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
            <Image src="/images/services/services-why-choose-timobo.jpg" alt="Why choose Timobo Safaris" fill className="object-cover" />
          </div>
          <div className="mb-12">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">Our Distinction</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight max-w-2xl">
              Why Choose Timobo Safaris?
            </h2>
          </div>
          <div className="divide-y divide-stone-200">
            {reasons.map(({ title, body }) => (
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
