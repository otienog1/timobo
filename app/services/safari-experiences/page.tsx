"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";

export default function SafariExperiencesPage() {
  const safariExperiences = [
    {
      title: "Wildlife Safaris",
      subtitle: "Big Five & Great Migration",
      description: "Witness the Great Migration in Maasai Mara and explore the Big Five hotspots such as Amboseli, Samburu, and Tsavo. Experience close encounters with Africa's most iconic wildlife.",
      image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      highlights: [
        "Great Migration viewing in Maasai Mara",
        "Big Five encounters in Amboseli and Samburu",
        "Expert naturalist guides",
        "Luxury lodge accommodations"
      ]
    },
    {
      title: "Cultural Safaris",
      subtitle: "Authentic Cultural Immersion",
      description: "Engage with local tribes and learn ancient traditions. Meet the Maasai, Samburu, and other indigenous communities while experiencing their rich cultural heritage.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1869&q=80",
      highlights: [
        "Authentic cultural village visits",
        "Traditional ceremonies and dances",
        "Local craft workshops",
        "Community-based tourism projects"
      ]
    },
    {
      title: "Beach & Bush Combos",
      subtitle: "Safari & Coastal Paradise",
      description: "Combine thrilling game drives with white-sand beaches in Diani, Zanzibar, and Lamu. The perfect blend of adventure and relaxation.",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      highlights: [
        "Safari and beach combination packages",
        "Coastal destinations: Diani, Lamu, Zanzibar",
        "Seamless transfers between locations",
        "Beach resort accommodations"
      ]
    },
    {
      title: "Photography Safaris",
      subtitle: "Professional Wildlife Photography",
      description: "Specialized tours for photographers and content creators. Expert guidance on wildlife photography with the best lighting and positioning.",
      image: "https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
      highlights: [
        "Professional photography guidance",
        "Optimal timing for wildlife photography",
        "Specialized photo vehicles and equipment",
        "Portfolio development sessions"
      ]
    },
    {
      title: "Conservation Safaris",
      subtitle: "Conservation & Research",
      description: "Participate in conservation programs and wildlife research. Make a meaningful impact while experiencing Africa's wildlife.",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
      highlights: [
        "Wildlife conservation participation",
        "Research project involvement",
        "Anti-poaching unit visits",
        "Wildlife rehabilitation centers"
      ]
    },
    {
      title: "Luxury Safaris",
      subtitle: "Ultimate Comfort & Exclusivity",
      description: "Private charters, luxury camps, and five-star services. Experience Africa's wilderness in ultimate comfort and style.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      highlights: [
        "Private safari vehicles and guides",
        "Luxury tented camps and lodges",
        "Gourmet dining experiences",
        "Personalized itineraries"
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Safari Experiences"
        subtitle="African Wildlife Adventures"
        description="From wildlife encounters and cultural immersions to luxury comfort and conservation participation, our safari experiences connect you to Africa's most iconic destinations with purpose and passion."
        backgroundImage="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Introduction Section */}
      <Section className="py-16 lg:py-20 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Meaning & Magic
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            Every safari is crafted for meaning and magic, connecting you to Africa&apos;s untamed wilderness, diverse cultures, and conservation efforts. With over 18 years of expertise, we design transformative journeys.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* Safari Experiences Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              Safari Experiences
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Diverse safari experiences designed to go beyond wildlife viewing, creating transformative journeys that support conservation, cultural preservation, and community empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariExperiences.map((experience, index) => (
              <div key={index} className="bg-white overflow-hidden group transition-all duration-300">
                {/* Experience Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Experience Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="font-freight-display-pro text-xl font-bold text-stone-800 mb-2">
                      {experience.title}
                    </h3>
                    <p className="font-sofia-pro text-sm text-stone-600 mb-3">
                      {experience.subtitle}
                    </p>
                  </div>

                  <p className="font-sofia-pro text-sm text-stone-700 leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-sofia-pro text-xs uppercase tracking-wide text-stone-600 mb-3 font-semibold">
                      Experience Highlights
                    </h4>
                    <div className="space-y-2">
                      {experience.highlights.map((highlight, highlightIndex) => (
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

      {/* Safari Planning Section */}
      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-8 text-stone-800">
                Safari Planning Excellence
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Expert Naturalist Guides</h3>
                    <p className="font-sofia-pro text-stone-700">Professional guides with deep knowledge of wildlife behavior, ecology, and conservation practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Premium Accommodations</h3>
                    <p className="font-sofia-pro text-stone-700">Carefully selected lodges and camps that combine comfort with authentic African experiences.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Conservation Focus</h3>
                    <p className="font-sofia-pro text-stone-700">All safaris contribute to conservation efforts and support local communities through responsible tourism.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sofia-pro text-lg mb-2 text-stone-800 font-semibold">Customized Itineraries</h3>
                    <p className="font-sofia-pro text-stone-700">Tailor-made safari experiences designed around your interests, schedule, and travel preferences.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative aspect-[4/3] bg-stone-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Safari planning expertise"
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
            src="https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
            alt="Safari adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Your Safari Adventure Awaits
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            From the Great Migration to intimate cultural encounters, let us craft your perfect African safari experience that creates lasting memories and meaningful impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AnimatedButton asChild variant="primary" size="xl" className="bg-amber-500 hover:bg-amber-600 shadow-2xl">
              <Link href="/contact">
                Plan Your Safari
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
            <p className="font-sofia-pro text-white/80 text-sm mb-4">Safari specialists for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Wildlife Experts</span>
              <span>•</span>
              <span>Conservation Focus</span>
              <span>•</span>
              <span>Cultural Immersion</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}