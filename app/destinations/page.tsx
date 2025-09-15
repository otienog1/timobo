"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import { useState } from "react";

// Note: metadata should be in layout.tsx or a separate metadata file for client components

export default function DestinationsPage() {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const destinations = {
    eastern: [
      {
        name: "Kenya",
        description: "Kenya is home to the world-famous Maasai Mara, where the awe-inspiring Great Wildebeest Migration takes center stage each year. Explore Amboseli, renowned for its large-tusked elephants and stunning views of Mount Kilimanjaro.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        highlight: "Great Migration & Big Five",
        bestTime: "July-October (Migration), Jan-March (Beach)"
      },
      {
        name: "Tanzania",
        description: "Tanzania is home to legendary wilderness icons – the vast Serengeti National Park, the awe-inspiring Ngorongoro Crater, and Africa's highest peak, Mount Kilimanjaro. Witness the drama of the Great Migration and explore untamed beauty.",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        highlight: "Serengeti & Ngorongoro Crater",
        bestTime: "June-October (Safari), Dec-Feb (Zanzibar)"
      },
      {
        name: "Rwanda",
        description: "Rwanda offers a once-in-a-lifetime chance to trek endangered mountain gorillas in Volcanoes National Park. Discover the tranquil beauty of Lake Kivu and immerse yourself in the inspiring culture of Kigali.",
        image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
        highlight: "Mountain Gorilla Trekking",
        bestTime: "June-September, December-February"
      },
      {
        name: "Uganda",
        description: "Uganda is a land of rare encounters – from gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale National Park. Cruise the legendary Nile River and enjoy classic savannah safaris.",
        image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        highlight: "Gorillas & Chimpanzees",
        bestTime: "June-September, December-February"
      },
      {
        name: "Ethiopia",
        description: "Ethiopia blends rich history with breathtaking landscapes – from the ancient rock-hewn churches of Lalibela to the surreal Danakil Depression. Trek the majestic Simien Mountains and immerse yourself in vibrant traditions.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        highlight: "Ancient Churches & Highland Treks",
        bestTime: "October-March"
      }
    ],
    southern: [
      {
        name: "South Africa",
        description: "From thrilling Big Five safaris in Kruger National Park to vibrant Cape Town with its iconic Table Mountain and world-class Cape Winelands, South Africa offers a seamless blend of wildlife, rich culture, and unforgettable adventure.",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        highlight: "Big Five & Cape Town",
        bestTime: "May-September (Safari), Oct-April (Cape Town)"
      },
      {
        name: "Zimbabwe",
        description: "Home to the majestic Victoria Falls, Zimbabwe offers dramatic landscapes, abundant wildlife in Hwange National Park and authentic cultural experiences in a warm, welcoming setting.",
        image: "https://images.unsplash.com/photo-1605026163234-85f4b8c038f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        highlight: "Victoria Falls & Big Game",
        bestTime: "March-May, May-October"
      },
      {
        name: "Zambia",
        description: "Famous for walking safaris and stunning views of Victoria Falls, Zambia offers pristine wilderness in South Luangwa and thrilling river adventures along the Zambezi River.",
        image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        highlight: "Walking Safaris & Victoria Falls",
        bestTime: "June-October"
      },
      {
        name: "Botswana",
        description: "Discover the wild beauty of the Okavango Delta – a vast, wildlife-rich UNESCO World Heritage Site – and marvel at the great elephant herds of Chobe National Park.",
        image: "https://images.unsplash.com/photo-1551375073-4a96641d4d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        highlight: "Okavango Delta & Chobe",
        bestTime: "May-October"
      },
      {
        name: "Namibia",
        description: "Marvel at the towering red dunes of Sossusvlei, roam the untamed Skeleton Coast, and encounter rare desert-adapted wildlife in one of Africa's most breathtaking landscapes.",
        image: "https://images.unsplash.com/photo-1578750019427-fc5b98dbc9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        highlight: "Desert Dunes & Skeleton Coast",
        bestTime: "May-October"
      }
    ]
  };

  const allDestinations = [...destinations.eastern, ...destinations.southern];
  const filteredDestinations = selectedRegion === 'all'
    ? allDestinations
    : selectedRegion === 'eastern'
    ? destinations.eastern
    : destinations.southern;

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="African Destinations"
        subtitle="Discover Africa's Most Incredible Places"
        description="From the vast savannas of East Africa to the dramatic landscapes of Southern Africa, explore destinations that will leave you breathless."
        backgroundImage="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      />

      {/* Philosophical Introduction Section */}
      <Section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Where Africa Calls to the Soul
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            Each destination in Africa tells a story that transcends the ordinary. From the thundering hooves of the Great Migration to the gentle whispers of mountain gorillas, every journey becomes a chapter in your personal narrative of discovery.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* Region Filter Navigation */}
      <Section className="py-8 bg-white sticky top-20 z-40 border-b border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-8 py-3 rounded-full font-sofia-pro text-sm transition-all duration-300 ${
                selectedRegion === 'all'
                  ? 'bg-stone-800 text-white shadow-md'
                  : 'bg-stone-50 text-stone-600 hover:bg-amber-50 hover:text-stone-800'
              }`}
            >
              All Destinations
            </button>
            <button
              onClick={() => setSelectedRegion('eastern')}
              className={`px-8 py-3 rounded-full font-sofia-pro text-sm transition-all duration-300 ${
                selectedRegion === 'eastern'
                  ? 'bg-stone-800 text-white shadow-md'
                  : 'bg-stone-50 text-stone-600 hover:bg-amber-50 hover:text-stone-800'
              }`}
            >
              Eastern Africa
            </button>
            <button
              onClick={() => setSelectedRegion('southern')}
              className={`px-8 py-3 rounded-full font-sofia-pro text-sm transition-all duration-300 ${
                selectedRegion === 'southern'
                  ? 'bg-stone-800 text-white shadow-md'
                  : 'bg-stone-50 text-stone-600 hover:bg-amber-50 hover:text-stone-800'
              }`}
            >
              Southern Africa
            </button>
          </div>
        </div>
      </Section>

      {/* African Destinations Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              {selectedRegion === 'all' ? 'All African Destinations' :
               selectedRegion === 'eastern' ? 'Eastern Africa Destinations' :
               'Southern Africa Destinations'}
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              {selectedRegion === 'all' ? 'Discover the incredible diversity of African destinations, from the iconic savannas of East Africa to the dramatic landscapes of Southern Africa.' :
               selectedRegion === 'eastern' ? 'Discover the iconic destinations of Eastern Africa, each offering unique wildlife encounters, breathtaking landscapes, and unforgettable cultural experiences.' :
               'Experience the dramatic contrasts of Southern Africa, from thundering waterfalls and pristine deltas to towering desert dunes and vibrant cities.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => {
              const region = destinations.eastern.includes(destination) ? 'eastern' : 'southern';
              const slug = destination.name.toLowerCase().replace(/\s+/g, '-');

              return (
                <div key={`${region}-${index}`} className="bg-white overflow-hidden">
                  {/* Destination Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={destination.image}
                      alt={`${destination.name} safari destination`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Destination Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-freight-display-pro text-xl font-bold text-stone-800 mb-2">
                        {destination.name}
                      </h3>
                      <p className="font-sofia-pro text-sm text-stone-600 mb-3">
                        {destination.highlight}
                      </p>
                    </div>

                    <p className="font-sofia-pro text-sm text-stone-700 leading-relaxed mb-6">
                      {destination.description}
                    </p>

                    {/* Destination Link */}
                    <Link href={`/destinations/${slug}`} className="font-sofia-pro text-sm text-amber-600 hover:text-amber-700 transition-colors duration-200 inline-flex items-center">
                      Explore {destination.name}
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
                Planning Your African Adventure?
              </h2>
              <p className="font-sofia-pro text-base lg:text-lg text-stone-700 mb-8 leading-relaxed">
                Our safari specialists have decades of experience across Africa. We'll help you choose the perfect destinations, plan your itinerary, and ensure every moment of your journey is unforgettable.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Expert destination recommendations based on your interests</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Custom itinerary planning with optimal timing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Seamless coordination across multiple countries</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Support for conservation and local communities</p>
                </div>
              </div>
              <AnimatedButton asChild variant="primary" size="lg">
                <Link href="/contact">
                  Get Personal Recommendations
                </Link>
              </AnimatedButton>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
                    alt="African wildlife safari"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="relative aspect-square bg-stone-50 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                      alt="African landscape"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative aspect-square bg-stone-50 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Mountain gorillas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Immersive CTA Section */}
      <Section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            alt="African safari sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Your African Story Awaits
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let us craft a journey that transcends the ordinary. From the thundering wildebeest migration to intimate encounters with mountain gorillas, your personalized African adventure begins with a single conversation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AnimatedButton asChild variant="primary" size="xl" className="shadow-2xl">
              <Link href="/contact">
                Begin Your Journey
              </Link>
            </AnimatedButton>
            <AnimatedButton asChild variant="outline" size="xl" className="border-2 border-white text-white hover:bg-white hover:text-stone-800 shadow-2xl">
              <Link href="/services">
                Discover Our Services
              </Link>
            </AnimatedButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-sofia-pro text-white/80 text-sm mb-4">Trusted by travelers for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Award-Winning Service</span>
              <span>•</span>
              <span>Local Expertise</span>
              <span>•</span>
              <span>Conservation Focused</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}