"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";

export default function MICESolutionsPage() {
  const miceServices = [
    {
      title: "Corporate Conferences & Meetings",
      subtitle: "Professional Business Events",
      description: "World-class venues and expert event management for corporate conferences, board meetings, and business gatherings across Africa's leading urban destinations.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      highlights: [
        "Premium conference venues selection",
        "State-of-the-art audio-visual technology",
        "Professional event coordination",
        "Delegate registration and management"
      ]
    },
    {
      title: "Incentive Travel Programs",
      subtitle: "Reward & Motivate Teams",
      description: "Reward your team with curated African experiences that combine business objectives with unforgettable adventures and cultural immersion.",
      image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Customized incentive safari packages",
        "Luxury lodge and beach resort experiences",
        "Team building safari activities",
        "Cultural experiences and workshops"
      ]
    },
    {
      title: "Workshops & Training Programs",
      subtitle: "Learning & Development",
      description: "Tailored setups for productivity with inspiring African backdrops that enhance learning, creativity, and team collaboration.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Purpose-built training facilities",
        "Outdoor workshop spaces in nature",
        "Leadership development in wilderness settings",
        "Cultural immersion learning experiences"
      ]
    },
    {
      title: "Special Events & Celebrations",
      subtitle: "Corporate Entertainment",
      description: "Bush dinners, themed events, and cultural performances that create unforgettable corporate celebrations and milestone events.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      highlights: [
        "Bush dinner experiences under stars",
        "Cultural entertainment and performances",
        "Themed corporate parties",
        "Product launches in unique venues"
      ]
    },
    {
      title: "Exhibition Support",
      subtitle: "Trade Shows & Exhibitions",
      description: "Comprehensive support for trade shows, exhibitions, and industry events across major African business hubs with local expertise and logistics.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Exhibition venue sourcing and booking",
        "Stand design and construction coordination",
        "Logistics and shipping support",
        "Local regulatory compliance assistance"
      ]
    },
    {
      title: "Executive Retreats",
      subtitle: "Strategic Planning & Leadership",
      description: "Exclusive executive retreats in Africa's most inspiring locations, combining strategic planning sessions with luxury experiences and adventure.",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      highlights: [
        "Private luxury lodges and villas",
        "Strategic planning facilitation",
        "Executive coaching and development",
        "Exclusive safari and adventure experiences"
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="MICE Solutions"
        subtitle="Corporate Events & Business Travel"
        description="Professional, end-to-end MICE services across Eastern and Southern Africa. We ensure stress-free event planning and flawless execution with authentic African hospitality."
        backgroundImage="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      />

      {/* Introduction Section */}
      <Section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Corporate Excellence
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            From intimate executive retreats to large-scale conferences, we manage every detail to ensure your business events succeed while showcasing the best of Africa's hospitality, culture, and natural beauty.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* MICE Services Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              MICE Services
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Comprehensive corporate event management services designed to blend business success with authentic African experiences across Eastern and Southern Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {miceServices.map((service, index) => (
              <div key={index} className="bg-white overflow-hidden group transition-all duration-300">
                {/* Service Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
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
                      Service Features
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
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              Why Choose Timobo for MICE?
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Our extensive experience and local expertise make us the ideal partner for your corporate events and business travel needs across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-sofia-pro text-lg mb-4 text-stone-800 font-semibold">18+ Years MICE Expertise</h3>
              <p className="font-sofia-pro text-stone-700">Nearly two decades of experience managing corporate events and MICE programs across Eastern and Southern Africa.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-sofia-pro text-lg mb-4 text-stone-800 font-semibold">Pan-African Network</h3>
              <p className="font-sofia-pro text-stone-700">Strong partnerships and local expertise across major business destinations in Eastern and Southern Africa.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-sofia-pro text-lg mb-4 text-stone-800 font-semibold">Cultural Integration</h3>
              <p className="font-sofia-pro text-stone-700">Unique ability to blend business objectives with authentic African cultural experiences and adventures.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-sofia-pro text-lg mb-4 text-stone-800 font-semibold">End-to-End Management</h3>
              <p className="font-sofia-pro text-stone-700">Complete event management from initial planning to final execution, ensuring seamless experiences.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Corporate events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Ready for Your Corporate Event?
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            From intimate board meetings to large-scale conferences and incentive programs, our MICE specialists will ensure your corporate event exceeds expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AnimatedButton asChild variant="primary" size="xl" className="bg-amber-500 hover:bg-amber-600 shadow-2xl">
              <Link href="/contact">
                Discuss Your Event
              </Link>
            </AnimatedButton>
            <AnimatedButton asChild variant="outline" size="xl" className="border-2 border-white text-white hover:bg-white hover:text-stone-900 shadow-2xl">
              <Link href="/destinations">
                Explore Event Destinations
              </Link>
            </AnimatedButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-sofia-pro text-white/80 text-sm mb-4">MICE specialists for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Corporate Events</span>
              <span>•</span>
              <span>Incentive Travel</span>
              <span>•</span>
              <span>Executive Retreats</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}