import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Southern Africa Safari Destinations - Timobo Safaris Ltd",
  description: "Discover Southern Africa's dramatic landscapes including South Africa's wine regions, Botswana's Okavango Delta, Zimbabwe's Victoria Falls, and Namibia's desert wilderness.",
  keywords: ["Southern Africa safari", "South Africa tours", "Botswana Okavango", "Zimbabwe Victoria Falls", "Namibia desert"],
};

export default function SouthernAfricaPage() {
  const destinations = [
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
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Southern Africa"
        subtitle="Dramatic Landscapes & Pristine Wilderness"
        description="Discover the raw beauty of Southern Africa, from the Kalahari Desert's vast expanses to the lush waterways of the Okavango Delta and the thundering majesty of Victoria Falls."
        backgroundImage="https://images.unsplash.com/photo-1484318571209-661cf29a69ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      />

      {/* Philosophical Introduction Section */}
      <Section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Where Contrasts Create Magic
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            From South Africa&apos;s diverse ecosystems and world-class wine regions to Botswana&apos;s pristine wilderness, Zimbabwe&apos;s thundering waterfalls, and Namibia&apos;s otherworldly desert landscapes, Southern Africa offers dramatic contrasts that create unforgettable experiences.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* Southern Africa Destinations Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              Southern Africa Destinations
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Experience the dramatic contrasts of Southern Africa, from thundering waterfalls and pristine deltas to towering desert dunes and vibrant cities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => {
              const slug = destination.name.toLowerCase().replace(/\s+/g, '-');

              return (
                <div key={index} className="bg-white overflow-hidden">
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
                Explore Southern Africa&apos;s Contrasts
              </h2>
              <p className="font-sofia-pro text-base lg:text-lg text-stone-700 mb-8 leading-relaxed">
                From luxury lodges to adventurous camping safaris, we craft unforgettable journeys that showcase Southern Africa&apos;s incredible diversity. Our expert guides know every hidden waterhole, every migration route, and every cultural story.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Marvel at Victoria Falls from multiple viewpoints</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Cruise through the Okavango Delta&apos;s pristine waterways</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Explore Namibia&apos;s towering desert dunes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Experience South Africa&apos;s wine regions and Cape Town</p>
                </div>
              </div>
              <AnimatedButton asChild variant="primary" size="lg">
                <Link href="/contact">
                  Get Your Southern Africa Quote
                </Link>
              </AnimatedButton>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1605026163234-85f4b8c038f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Victoria Falls Zimbabwe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551375073-4a96641d4d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Okavango Delta Botswana"
                    className="w-full h-full object-cover"
                  />
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
            src="https://images.unsplash.com/photo-1484318571209-661cf29a69ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Southern Africa sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Discover Southern Africa&apos;s Magic
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            From the thundering spectacle of Victoria Falls to the ethereal beauty of the Okavango Delta, Southern Africa offers dramatic landscapes that will leave you breathless and forever changed.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <AnimatedButton asChild variant="primary" size="xl" className="shadow-2xl">
              <Link href="/contact">
                Start Your Journey
              </Link>
            </AnimatedButton>
            <AnimatedButton asChild variant="outline" size="xl" className="border-2 border-white text-white hover:bg-white hover:text-stone-800 shadow-2xl">
              <Link href="/destinations/eastern">
                Explore Eastern Africa
              </Link>
            </AnimatedButton>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-sofia-pro text-white/80 text-sm mb-4">Southern Africa specialists for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Victoria Falls Experts</span>
              <span>•</span>
              <span>Delta Expeditions</span>
              <span>•</span>
              <span>Desert Adventures</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}