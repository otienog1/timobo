import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
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
      bestTime: "May–September (Safari), Oct–April (Cape Town)"
    },
    {
      name: "Zimbabwe",
      description: "Home to the majestic Victoria Falls, Zimbabwe offers dramatic landscapes, abundant wildlife in Hwange National Park and authentic cultural experiences in a warm, welcoming setting.",
      image: "/images/destinations/destination-zimbabwe.jpg",
      highlight: "Victoria Falls & Big Game",
      bestTime: "March–May, May–October"
    },
    {
      name: "Zambia",
      description: "Famous for walking safaris and stunning views of Victoria Falls, Zambia offers pristine wilderness in South Luangwa and thrilling river adventures along the Zambezi River.",
      image: "/images/destinations/destination-zambia.jpg",
      highlight: "Walking Safaris & Victoria Falls",
      bestTime: "June–October"
    },
    {
      name: "Botswana",
      description: "Discover the wild beauty of the Okavango Delta – a vast, wildlife-rich UNESCO World Heritage Site – and marvel at the great elephant herds of Chobe National Park.",
      image: "/images/destinations/destination-botswana.jpg",
      highlight: "Okavango Delta & Chobe",
      bestTime: "May–October"
    },
    {
      name: "Namibia",
      description: "Marvel at the towering red dunes of Sossusvlei, roam the untamed Skeleton Coast, and encounter rare desert-adapted wildlife in one of Africa's most breathtaking landscapes.",
      image: "/images/destinations/destination-namibia.jpg",
      highlight: "Desert Dunes & Skeleton Coast",
      bestTime: "May–October"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Southern Africa"
        subtitle="Dramatic landscapes from Victoria Falls to the Okavango Delta and the ancient dunes of Namibia."
        backgroundImage="/images/destinations/southern-africa-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Dramatic Wilderness</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Where Contrasts Create Magic
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            From South Africa&apos;s diverse ecosystems and world-class wine regions to Botswana&apos;s pristine wilderness, Zimbabwe&apos;s thundering waterfalls, and Namibia&apos;s otherworldly desert landscapes, Southern Africa offers dramatic contrasts that create unforgettable experiences.
          </p>
        </div>
      </Section>

      {/* Destinations Grid */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-4">
              Southern Africa Destinations
            </h2>
            <p className="font-sofia-pro text-sm text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Experience the dramatic contrasts of Southern Africa, from thundering waterfalls and pristine deltas to towering desert dunes and vibrant cities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => {
              const slug = destination.name.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={index} className="bg-white overflow-hidden">
                  <Link href={`/destinations/${slug}`} className="relative aspect-[4/3] overflow-hidden block">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} safari destination`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </Link>
                  <div className="pt-5 pb-2">
                    <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-2">{destination.highlight}</p>
                    <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3">{destination.name}</h3>
                    <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-5">{destination.description}</p>
                    <Link href={`/destinations/${slug}`} className="font-sofia-pro text-[11px] tracking-[0.15em] uppercase text-stone-800 hover:text-amber-600 transition-colors duration-200 inline-flex items-center gap-2">
                      Explore {destination.name}
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Planning Section */}
      <Section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Expert Guidance</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
                Explore Southern Africa&apos;s Contrasts
              </h2>
              <p className="font-sofia-pro text-sm text-stone-600 mb-8 leading-relaxed">
                From luxury lodges to adventurous camping safaris, we craft unforgettable journeys that showcase Southern Africa&apos;s incredible diversity. Our expert guides know every hidden waterhole, every migration route, and every cultural story.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Marvel at Victoria Falls from multiple viewpoints",
                  "Cruise through the Okavango Delta's pristine waterways",
                  "Explore Namibia's towering desert dunes",
                  "Experience South Africa's wine regions and Cape Town",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mt-2" />
                    <p className="font-sofia-pro text-sm text-stone-700">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(28,25,23,0.25)] hover:shadow-[0_2px_8px_rgba(28,25,23,0.35)]"
              >
                Get Your Southern Africa Quote
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src="/images/destinations/destination-zimbabwe.jpg" alt="Victoria Falls Zimbabwe" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src="/images/destinations/destination-botswana.jpg" alt="Okavango Delta Botswana" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src="/images/destinations/southern-africa-hero.jpg" alt="Southern Africa" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Southern Africa</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Discover Southern Africa&apos;s Magic
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                From the thundering spectacle of Victoria Falls to the ethereal beauty of the Okavango Delta, Southern Africa offers dramatic landscapes that will leave you breathless and forever changed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(140,110,35,0.5)] hover:shadow-[0_2px_8px_rgba(140,110,35,0.65)]"
                >
                  Start Your Journey
                </Link>
                <Link
                  href="/destinations/eastern"
                  className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm"
                >
                  Explore Eastern Africa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
