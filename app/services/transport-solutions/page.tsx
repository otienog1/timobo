"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import Image from "next/image";

export default function TransportSolutionsPage() {
  const transportServices = [
    {
      title: "Safari Vehicles",
      subtitle: "Specialized Game Drive Vehicles",
      description: "Purpose-built safari vehicles with pop-up roofs, comfortable seating, and expert drivers for optimal wildlife viewing throughout your journey.",
      image: "/images/services/service-transport-solutions.jpg",
      highlights: [
        "4x4 safari vehicles with pop-up roofs",
        "Expert safari drivers",
        "Two-way radio communication",
        "Cooler boxes and refreshments"
      ]
    },
    {
      title: "Airport Transfers",
      subtitle: "Seamless Airport Logistics",
      description: "Professional meet-and-greet services with reliable transfers between airports, hotels, and safari lodges across Eastern and Southern Africa.",
      image: "/images/services/service-transport-solutions.jpg",
      highlights: [
        "Meet-and-greet services",
        "Flight monitoring",
        "Luggage assistance",
        "Comfortable air-conditioned vehicles"
      ]
    },
    {
      title: "VIP Transport",
      subtitle: "Executive & VIP Services",
      description: "Premium transport solutions for corporate executives and VIP clients, including security escorts and luxury vehicle options.",
      image: "/images/services/service-mice-solutions.jpg",
      highlights: [
        "Luxury vehicle fleet",
        "Professional chauffeurs",
        "Security escort options",
        "Discreet and reliable service"
      ]
    },
    {
      title: "Inter-Destination Transfers",
      subtitle: "Seamless Multi-City Logistics",
      description: "Coordinated transfers between destinations, lodges, and attractions ensuring smooth transitions throughout your African journey.",
      image: "/images/services/service-transport-solutions.jpg",
      highlights: [
        "Multi-destination coordination",
        "Lodge-to-lodge transfers",
        "Border crossing assistance",
        "Flexible scheduling"
      ]
    },
    {
      title: "Group Transport",
      subtitle: "Large Group Logistics",
      description: "Efficient transport solutions for groups, conferences, and events with coaches, minibuses, and coordinated vehicle fleets.",
      image: "/images/services/service-mice-solutions.jpg",
      highlights: [
        "Coaches and minibuses",
        "Multi-vehicle coordination",
        "Event logistics support",
        "Professional group handling"
      ]
    },
    {
      title: "Private Charters",
      subtitle: "Exclusive Vehicle Hire",
      description: "Private vehicle charters with dedicated drivers for your exclusive use, offering flexibility and personalized service throughout your trip.",
      image: "/images/services/service-transport-solutions.jpg",
      highlights: [
        "Dedicated vehicles and drivers",
        "Flexible itineraries",
        "Privacy and comfort",
        "Customized route planning"
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Transport Solutions"
        subtitle="Seamless African Travel"
        description="Experience reliable, comfortable, and safe transport throughout your African journey. Our comprehensive transport services ensure seamless logistics from arrival to departure."
        backgroundImage="/images/services/service-transport-solutions.jpg"
      />

      {/* Introduction Section */}
      <Section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Safe, Reliable & Comfortable
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            Our fleet of well-maintained vehicles and experienced drivers ensure your comfort and safety throughout your African adventure. From airport pickups to safari game drives, we handle every detail.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* Transport Services Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              Transport Services
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Comprehensive transport solutions designed for comfort, safety, and reliability across all your travel needs in Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportServices.map((service, index) => (
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

      {/* Fleet Section */}
      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-8 text-stone-800">
                Our Fleet & Standards
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Well-Maintained Vehicles</h3>
                    <p className="font-sofia-pro text-stone-700">Regular servicing and maintenance ensure reliability and safety throughout your journey.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Experienced Drivers</h3>
                    <p className="font-sofia-pro text-stone-700">Professional, licensed drivers with extensive knowledge of routes and local conditions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Safety & Insurance</h3>
                    <p className="font-sofia-pro text-stone-700">Full insurance coverage and adherence to all safety regulations and standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">24/7 Support</h3>
                    <p className="font-sofia-pro text-stone-700">Round-the-clock support and coordination for any transport-related needs or emergencies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                <Image
                  src="/images/services/service-transport-solutions.jpg"
                  alt="Transport solutions"
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
            src="/images/services/service-transport-solutions.jpg"
            alt="Transport services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Reliable Transport, Every Mile
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let us handle your transport logistics with professional drivers, well-maintained vehicles, and comprehensive support throughout your African journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm shadow-2xl relative z-20">
              Request Transport Quote
            </Link>
            <Link href="/services" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 bg-transparent shadow-black/10 hover:shadow-white/20 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm border-2 border-white text-white hover:bg-white hover:text-stone-800 shadow-2xl relative z-20">
              View All Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-sofia-pro text-white/80 text-sm mb-4">Transport specialists for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Safe & Reliable</span>
              <span>•</span>
              <span>Professional Drivers</span>
              <span>•</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
