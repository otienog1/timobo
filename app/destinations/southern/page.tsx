import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import Image from "next/image";
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
      image: "/images/destinations/destination-southern-africa.jpg",
      highlight: "Big Five & Cape Town",
      bestTime: "May-September (Safari), Oct-April (Cape Town)"
    },
    {
      name: "Zimbabwe",
      description: "Home to the majestic Victoria Falls, Zimbabwe offers dramatic landscapes, abundant wildlife in Hwange National Park and authentic cultural experiences in a warm, welcoming setting.",
      image: "/images/destinations/destination-zimbabwe.jpg",
      highlight: "Victoria Falls & Big Game",
      bestTime: "March-May, May-October"
    },
    {
      name: "Zambia",
      description: "Famous for walking safaris and stunning views of Victoria Falls, Zambia offers pristine wilderness in South Luangwa and thrilling river adventures along the Zambezi River.",
      image: "/images/destinations/destination-zambia.jpg",
      highlight: "Walking Safaris & Victoria Falls",
      bestTime: "June-October"
    },
    {
      name: "Botswana",
      description: "Discover the wild beauty of the Okavango Delta – a vast, wildlife-rich UNESCO World Heritage Site – and marvel at the great elephant herds of Chobe National Park.",
      image: "/images/destinations/destination-botswana.jpg",
      highlight: "Okavango Delta & Chobe",
      bestTime: "May-October"
    },
    {
      name: "Namibia",
      description: "Marvel at the towering red dunes of Sossusvlei, roam the untamed Skeleton Coast, and encounter rare desert-adapted wildlife in one of Africa's most breathtaking landscapes.",
      image: "/images/destinations/destination-namibia.jpg",
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
        backgroundImage="/images/destinations/southern-africa-hero.jpg"
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
                    <Image
                      src={destination.image}
                      alt={`${destination.name} safari destination`}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Destination Content */}
                  <div className="p-6 px-0">
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
              <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-12 px-6 text-base rounded-sm">
                <span className="relative z-20">Get Your Southern Africa Quote</span>
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                  <Image
                    src="/images/destinations/destination-zimbabwe.jpg"
                    alt="Victoria Falls Zimbabwe"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                  <Image
                    src="/images/destinations/destination-botswana.jpg"
                    alt="Okavango Delta Botswana"
                    fill
                    className="object-cover"
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
          <Image
            src="/images/destinations/southern-africa-hero.jpg"
            alt="Southern Africa sunset"
            fill
            className="object-cover"
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
            <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm shadow-2xl relative z-20">
              Start Your Journey
            </Link>
            <Link href="/destinations/eastern" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 bg-transparent shadow-black/10 hover:shadow-white/20 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm border-2 border-white text-white hover:bg-white hover:text-stone-800 shadow-2xl relative z-20">
              Explore Eastern Africa
            </Link>
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