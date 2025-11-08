"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Safari Experiences",
      subtitle: "African Wildlife Adventures",
      description: "Step into the wild with custom-designed safari itineraries that connect you to Africa's most iconic destinations. From luxury lodge stays to cultural encounters and conservation experiences.",
      image: "/images/services/service-safari-experiences.jpg",
      highlights: [
        "Wildlife & Big Five safaris",
        "Cultural immersion experiences",
        "Beach & bush combinations",
        "Conservation participation"
      ],
      link: "/services/safari-experiences"
    },
    {
      title: "Adventure Travel",
      subtitle: "Off-the-Beaten-Path Expeditions",
      description: "For explorers seeking raw, authentic experiences, our adventure packages take you off the beaten path to discover Africa's hidden gems and remote wilderness areas.",
      image: "/images/services/service-adventure-travel.jpg",
      highlights: [
        "Northern Kenya expeditions",
        "Ethiopia cultural discoveries",
        "Gorilla & chimpanzee treks",
        "Multi-country overland journeys"
      ],
      link: "/services/adventure-travel"
    },
    {
      title: "MICE Solutions",
      subtitle: "Corporate Events & Business Travel",
      description: "Professional, end-to-end MICE services across Eastern and Southern Africa, ensuring stress-free event planning and flawless execution with authentic African hospitality.",
      image: "/images/services/service-mice-solutions.jpg",
      highlights: [
        "Corporate conferences & meetings",
        "Incentive travel programs",
        "Executive retreats",
        "Exhibition support"
      ],
      link: "/services/mice-solutions"
    },
    {
      title: "Holiday Getaways",
      subtitle: "Luxury African Holidays",
      description: "Indulge in luxury holidays across Africa's most beautiful destinations. Perfect for vacations, honeymoons, family holidays, and romantic retreats.",
      image: "/images/services/service-holiday-getaways.jpg",
      highlights: [
        "Coastal paradise destinations",
        "Private conservancy lodges",
        "Luxury beach resorts",
        "City & nature combinations"
      ],
      link: "/services/holiday-getaways"
    },
    {
      title: "Transport Solutions",
      subtitle: "Seamless African Travel",
      description: "Enjoy seamless travel with our range of transport services designed for comfort, safety, and reliability throughout your African journey.",
      image: "/images/services/service-transport-solutions.jpg",
      highlights: [
        "Safari vehicles & game drives",
        "Airport transfers & logistics",
        "VIP transport & security",
        "Inter-destination connections"
      ],
      link: "/services/transport-solutions"
    },
    {
      title: "Outbound Travel",
      subtitle: "International Travel Services",
      description: "Plan your international trips with confidence through our comprehensive outbound travel services and expert guidance for destinations worldwide.",
      image: "/images/services/services-hero.jpg",
      highlights: [
        "International travel consultancy",
        "Visa processing assistance",
        "Flight bookings & tickets",
        "Travel insurance solutions"
      ],
      link: "/services/outbound-travel"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Our Services"
        subtitle="African Travel Excellence"
        description="With over 18 years of expertise, we specialize in creating unforgettable journeys and corporate travel solutions across Africa. From luxury safaris to adventure expeditions and world-class MICE experiences."
        backgroundImage="/images/services/services-hero.jpg"
      />

      {/* Introduction Section */}
      <Section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Precision, Purpose & Passion
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            Whether you dream of tracking the Big Five, exploring Ethiopia&apos;s cultural treasures, hosting a seamless conference, or relaxing on pristine beaches, we make it happen with expertise and attention to detail.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              Our Services
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Comprehensive travel and event solutions designed to showcase the best of Africa while creating meaningful, transformative experiences for every traveler.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white overflow-hidden group transition-all duration-300">
                {/* Service Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6 px-0">
                  <div className="mb-4">
                    <h3 className="font-freight-display-pro text-xl font-bold text-stone-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="font-sofia-pro text-sm text-stone-600 mb-3">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="font-sofia-pro text-sm text-stone-700 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-sofia-pro text-xs uppercase tracking-wide text-stone-600 mb-3 font-semibold">
                      Service Highlights
                    </h4>
                    <div className="space-y-2">
                      {service.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start space-x-2">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                          <span className="font-sofia-pro text-xs text-stone-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Service Link */}
                  <Link href={service.link} className="font-sofia-pro text-sm text-amber-600 hover:text-amber-700 transition-colors duration-200 inline-flex items-center">
                    Explore {service.title}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-8 text-stone-800">
                Why Choose Timobo Safaris?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">18</span>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Years of Excellence</h3>
                    <p className="font-sofia-pro text-stone-700">18 years of excellence in African safari planning and MICE solutions across Eastern and Southern Africa.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Sustainable Tourism</h3>
                    <p className="font-sofia-pro text-stone-700">Commitment to sustainable tourism, conservation and cultural preservation through responsible travel practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Bespoke Itineraries</h3>
                    <p className="font-sofia-pro text-stone-700">Tailor-made itineraries designed around your interests, preferences, and objectives for individuals, groups, and corporates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Professional MICE</h3>
                    <p className="font-sofia-pro text-stone-700">Comprehensive MICE services with local expertise and seamless execution across Eastern & Southern Africa.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                <Image
                  src="/images/services/services-why-choose-timobo.jpg"
                  alt="Why choose Timobo Safaris"
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
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
            alt="African safari"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Ready to Create Your African Experience?
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our team of safari specialists and event planners are ready to craft your perfect African adventure or corporate event. Let&apos;s turn your vision into an unforgettable experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm shadow-2xl relative z-20">
              Start Planning
            </Link>
            <Link href="/destinations" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 bg-transparent shadow-black/10 hover:shadow-white/20 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm border-2 border-white text-white hover:bg-white hover:text-stone-800 shadow-2xl relative z-20">
              Explore Destinations
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-sofia-pro text-white/80 text-sm mb-4">African travel specialists for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Safari Experts</span>
              <span>•</span>
              <span>MICE Solutions</span>
              <span>•</span>
              <span>Adventure Travel</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}