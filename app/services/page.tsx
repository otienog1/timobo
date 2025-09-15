"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Safari Experiences",
      subtitle: "African Wildlife Adventures",
      description: "Step into the wild with custom-designed safari itineraries that connect you to Africa's most iconic destinations. From luxury lodge stays to cultural encounters and conservation experiences.",
      image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
      image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
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
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
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
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      highlights: [
        "Coastal paradise destinations",
        "Private conservancy lodges",
        "Luxury beach resorts",
        "City & nature combinations"
      ],
      link: "/destinations"
    },
    {
      title: "Transport Solutions",
      subtitle: "Seamless African Travel",
      description: "Enjoy seamless travel with our range of transport services designed for comfort, safety, and reliability throughout your African journey.",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      highlights: [
        "Safari vehicles & game drives",
        "Airport transfers & logistics",
        "VIP transport & security",
        "Inter-destination connections"
      ],
      link: "/contact"
    },
    {
      title: "Outbound Travel",
      subtitle: "International Travel Services",
      description: "Plan your international trips with confidence through our comprehensive outbound travel services and expert guidance for destinations worldwide.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      highlights: [
        "International travel consultancy",
        "Visa processing assistance",
        "Flight bookings & tickets",
        "Travel insurance solutions"
      ],
      link: "/contact"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Our Services"
        subtitle="African Travel Excellence"
        description="With over 18 years of expertise, we specialize in creating unforgettable journeys and corporate travel solutions across Africa. From luxury safaris to adventure expeditions and world-class MICE experiences."
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
      />

      {/* Introduction Section */}
      <Section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Precision, Purpose & Passion
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            Whether you dream of tracking the Big Five, exploring Ethiopia's cultural treasures, hosting a seamless conference, or relaxing on pristine beaches, we make it happen with expertise and attention to detail.
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
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Service Content */}
                <div className="p-6">
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
                <img
                  src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
                  alt="Timobo Safaris team expertise"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
            alt="African safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Ready to Create Your African Experience?
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our team of safari specialists and event planners are ready to craft your perfect African adventure or corporate event. Let's turn your vision into an unforgettable experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AnimatedButton asChild variant="primary" size="xl" className="bg-amber-500 hover:bg-amber-600 shadow-2xl">
              <Link href="/contact">
                Start Planning
              </Link>
            </AnimatedButton>
            <AnimatedButton asChild variant="outline" size="xl" className="border-2 border-white text-white hover:bg-white hover:text-stone-900 shadow-2xl">
              <Link href="/destinations">
                Explore Destinations
              </Link>
            </AnimatedButton>
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