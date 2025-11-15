"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import Image from "next/image";

export default function SafariExperiencesPage() {
  const safariExperiences = [
    {
      title: "Wildlife Safaris",
      subtitle: "Big Five & Great Migration",
      description: "Witness the Great Migration in Maasai Mara and explore the Big Five hotspots such as Amboseli, Samburu, and Tsavo. Experience close encounters with Africa's most iconic wildlife.",
      image: "/images/services/safari-experiences/wildlife-safaris.jpg",
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
      image: "/images/services/safari-experiences/cultural-safaris.jpg",
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
      image: "/images/services/safari-experiences/beach-bush-combo.jpg",
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
      image: "/images/services/safari-experiences/photography-safaris.jpg",
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
      image: "/images/services/safari-experiences/conservation-safaris.jpg",
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
      image: "/images/services/safari-experiences/luxury-safaris.jpg",
      highlights: [
        "Private safari vehicles and guides",
        "Luxury tented camps and lodges",
        "Gourmet dining experiences",
        "Personalized itineraries"
      ]
    },
    {
      title: "Elephant Safaris",
      subtitle: "Majestic Giants of Africa",
      description: "Specialized safaris focused on elephant encounters in prime habitats. Witness Africa's gentle giants in Amboseli, Chobe, and other renowned elephant sanctuaries.",
      image: "/images/services/safari-experiences/wildlife-safaris.jpg",
      highlights: [
        "Elephant-focused game drives",
        "Expert elephant behavior guides",
        "Prime elephant habitats in Amboseli and Chobe",
        "Conservation education programs"
      ]
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Safari Experiences"
        subtitle="African Wildlife Adventures"
        description="From wildlife encounters and cultural immersions to luxury comfort and conservation participation, our safari experiences connect you to Africa's most iconic destinations with purpose and passion."
        backgroundImage="/images/services/service-safari-experiences.jpg"
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
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Experience Content */}
                <div className="p-6 px-0">
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
                <Image
                  src="/images/services/safari-experiences/wildlife-safaris.jpg"
                  alt="Safari planning expertise"
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
            src="/images/services/safari-experiences/photography-safaris.jpg"
            alt="Safari adventure"
            fill
            className="object-cover"
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
            <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm shadow-2xl relative z-20">
              Plan Your Safari
            </Link>
            <Link href="/destinations" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 bg-transparent shadow-black/10 hover:shadow-white/20 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm border-2 border-white text-white hover:bg-white hover:text-stone-800 shadow-2xl relative z-20">
              Explore Destinations
            </Link>
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