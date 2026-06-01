import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eastern Africa Safari Destinations - Timobo Safaris Ltd",
  description: "Explore Eastern Africa's premier safari destinations including Kenya's Maasai Mara, Tanzania's Serengeti, Rwanda's mountain gorillas, and Uganda's pristine wilderness.",
  keywords: ["Eastern Africa safari", "Kenya Maasai Mara", "Tanzania Serengeti", "Rwanda gorillas", "Uganda wildlife"],
};

export default function EasternAfricaPage() {
  const destinations = [
    {
      name: "Kenya",
      description: "Kenya is home to the world-famous Maasai Mara, where the awe-inspiring Great Wildebeest Migration takes center stage each year. Explore Amboseli, renowned for its large-tusked elephants and stunning views of Mount Kilimanjaro.",
      image: "/images/destinations/destination-kenya.jpg",
      highlight: "Great Migration & Big Five",
      bestTime: "July–October (Migration), Jan–March (Beach)"
    },
    {
      name: "Tanzania",
      description: "Tanzania is home to legendary wilderness icons – the vast Serengeti National Park, the awe-inspiring Ngorongoro Crater, and Africa's highest peak, Mount Kilimanjaro. Witness the drama of the Great Migration and explore untamed beauty.",
      image: "/images/destinations/destination-tanzania.jpg",
      highlight: "Serengeti & Ngorongoro Crater",
      bestTime: "June–October (Safari), Dec–Feb (Zanzibar)"
    },
    {
      name: "Southern Tanzania",
      description: "Discover the untamed wilderness of Southern Tanzania, featuring Africa's largest wild sanctuary in Nyerere National Park, the remote Ruaha National Park, and the chimpanzee haven of Mahale Mountains National Park.",
      image: "/images/destinations/destination-southern-tanzania.jpg",
      highlight: "Remote Wilderness & Chimpanzees",
      bestTime: "June–October (Dry season)"
    },
    {
      name: "Rwanda",
      description: "Rwanda offers a once-in-a-lifetime chance to trek endangered mountain gorillas in Volcanoes National Park. Discover the tranquil beauty of Lake Kivu and immerse yourself in the inspiring culture of Kigali.",
      image: "/images/destinations/destination-rwanda.jpg",
      highlight: "Mountain Gorilla Trekking",
      bestTime: "June–September, December–February"
    },
    {
      name: "Uganda",
      description: "Uganda is a land of rare encounters – from gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale National Park. Cruise the legendary Nile River and enjoy classic savannah safaris.",
      image: "/images/destinations/destination-uganda.jpg",
      highlight: "Gorillas & Chimpanzees",
      bestTime: "June–September, December–February"
    },
    {
      name: "Ethiopia",
      description: "Ethiopia blends rich history with breathtaking landscapes – from the ancient rock-hewn churches of Lalibela to the surreal Danakil Depression. Trek the majestic Simien Mountains and immerse yourself in vibrant traditions.",
      image: "/images/destinations/destination-ethiopia.jpg",
      highlight: "Ancient Churches & Highland Treks",
      bestTime: "October–March"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Eastern Africa"
        subtitle="Experience the iconic landscapes where the Great Migration unfolds and mountain gorillas roam ancient forests."
        backgroundImage="/images/destinations/eastern-africa-hero.jpg"
      />

      {/* Introduction */}
      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">The Birthplace of Safari</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            Where Every Sunrise Tells a Story
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            From Kenya&apos;s legendary Maasai Mara to Tanzania&apos;s endless Serengeti plains, from Rwanda&apos;s misty mountain forests to Uganda&apos;s pristine wilderness areas, Eastern Africa offers the ultimate safari experience where ancient traditions meet incredible wildlife encounters.
          </p>
        </div>
      </Section>

      {/* Destinations Grid */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-4">
              Eastern Africa Destinations
            </h2>
            <p className="font-sofia-pro text-sm text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Discover the iconic destinations of Eastern Africa, each offering unique wildlife encounters, breathtaking landscapes, and unforgettable cultural experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => {
              const slug = destination.name.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={index} className="bg-white overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={`${destination.name} safari destination`}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
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
                Discover Eastern Africa&apos;s Wonders
              </h2>
              <p className="font-sofia-pro text-sm text-stone-600 mb-8 leading-relaxed">
                With 18+ years of experience in Eastern Africa, we know every hidden gem, every migration pattern, and every cultural nuance. Let us craft your perfect safari adventure across this incredible region.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Witness the Great Migration spectacle",
                  "Trek with mountain gorillas in Rwanda & Uganda",
                  "Explore Ethiopia's ancient churches and highlands",
                  "Experience authentic Maasai and other local cultures",
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
                Get Your Eastern Africa Quote
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src="/images/destinations/destination-kenya.jpg" alt="Great Migration in Kenya" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src="/images/destinations/destination-rwanda.jpg" alt="Mountain gorillas in Rwanda" fill className="object-cover" />
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
            <Image src="/images/destinations/eastern-africa-hero.jpg" alt="Eastern Africa" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Eastern Africa</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Your Eastern African Adventure Begins
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                From the thundering hooves of wildebeest to the gentle eyes of mountain gorillas, Eastern Africa offers wildlife encounters that will forever change your perspective on the natural world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(140,110,35,0.5)] hover:shadow-[0_2px_8px_rgba(140,110,35,0.65)]"
                >
                  Get Your Itinerary
                </Link>
                <Link
                  href="/destinations/southern"
                  className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm"
                >
                  Explore Southern Africa
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
