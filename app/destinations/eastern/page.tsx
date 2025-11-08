import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
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
      bestTime: "July-October (Migration), Jan-March (Beach)"
    },
    {
      name: "Tanzania",
      description: "Tanzania is home to legendary wilderness icons – the vast Serengeti National Park, the awe-inspiring Ngorongoro Crater, and Africa's highest peak, Mount Kilimanjaro. Witness the drama of the Great Migration and explore untamed beauty.",
      image: "/images/destinations/destination-tanzania.jpg",
      highlight: "Serengeti & Ngorongoro Crater",
      bestTime: "June-October (Safari), Dec-Feb (Zanzibar)"
    },
    {
      name: "Southern Tanzania",
      description: "Discover the untamed wilderness of Southern Tanzania, featuring Africa's largest wild sanctuary in Nyerere National Park, the remote Ruaha National Park, and the chimpanzee haven of Mahale Mountains National Park.",
      image: "/images/destinations/destination-southern-tanzania.jpg",
      highlight: "Remote Wilderness & Chimpanzees",
      bestTime: "June-October (Dry season)"
    },
    {
      name: "Rwanda",
      description: "Rwanda offers a once-in-a-lifetime chance to trek endangered mountain gorillas in Volcanoes National Park. Discover the tranquil beauty of Lake Kivu and immerse yourself in the inspiring culture of Kigali.",
      image: "/images/destinations/destination-rwanda.jpg",
      highlight: "Mountain Gorilla Trekking",
      bestTime: "June-September, December-February"
    },
    {
      name: "Uganda",
      description: "Uganda is a land of rare encounters – from gorilla trekking in Bwindi Impenetrable Forest to chimpanzee tracking in Kibale National Park. Cruise the legendary Nile River and enjoy classic savannah safaris.",
      image: "/images/destinations/destination-uganda.jpg",
      highlight: "Gorillas & Chimpanzees",
      bestTime: "June-September, December-February"
    },
    {
      name: "Ethiopia",
      description: "Ethiopia blends rich history with breathtaking landscapes – from the ancient rock-hewn churches of Lalibela to the surreal Danakil Depression. Trek the majestic Simien Mountains and immerse yourself in vibrant traditions.",
      image: "/images/destinations/destination-ethiopia.jpg",
      highlight: "Ancient Churches & Highland Treks",
      bestTime: "October-March"
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Eastern Africa"
        subtitle="The Birthplace of Safari"
        description="Experience the iconic landscapes of Eastern Africa, home to the Great Migration, mountain gorillas, and some of the world's most diverse wildlife ecosystems."
        backgroundImage="/images/destinations/eastern-africa-hero.jpg"
      />

      {/* Philosophical Introduction Section */}
      <Section className="py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-stone-800">
            Where Every Sunrise Tells a Story
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-stone-700 leading-relaxed mb-8">
            From Kenya&apos;s legendary Maasai Mara to Tanzania&apos;s endless Serengeti plains, from Rwanda&apos;s misty mountain forests to Uganda&apos;s pristine wilderness areas, Eastern Africa offers the ultimate safari experience where ancient traditions meet incredible wildlife encounters.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </Section>

      {/* Eastern Africa Destinations Grid */}
      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl font-bold mb-6 text-stone-800">
              Eastern Africa Destinations
            </h2>
            <p className="font-sofia-pro text-lg text-stone-700 max-w-3xl mx-auto">
              Discover the iconic destinations of Eastern Africa, each offering unique wildlife encounters, breathtaking landscapes, and unforgettable cultural experiences.
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
                Discover Eastern Africa&apos;s Wonders
              </h2>
              <p className="font-sofia-pro text-base lg:text-lg text-stone-700 mb-8 leading-relaxed">
                With 18+ years of experience in Eastern Africa, we know every hidden gem, every migration pattern, and every cultural nuance. Let us craft your perfect safari adventure across this incredible region.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Witness the Great Migration spectacle</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Trek with mountain gorillas in Rwanda & Uganda</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Explore Ethiopia&apos;s ancient churches and highlands</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                  <p className="font-sofia-pro text-stone-700">Experience authentic Maasai and other local cultures</p>
                </div>
              </div>
              <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-12 px-6 text-base rounded-sm">
                <span className="relative z-20">Get Your Eastern Africa Quote</span>
              </Link>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                  <Image
                    src="/images/destinations/destination-kenya.jpg"
                    alt="Great Migration in Kenya"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                  <Image
                    src="/images/destinations/destination-rwanda.jpg"
                    alt="Mountain gorillas in Rwanda"
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
            src="/images/destinations/eastern-africa-hero.jpg"
            alt="Eastern Africa sunset"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white">
            Your Eastern African Adventure Begins
          </h2>
          <p className="font-sofia-pro text-lg lg:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            From the thundering hooves of wildebeest to the gentle eyes of mountain gorillas, Eastern Africa offers wildlife encounters that will forever change your perspective on the natural world.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-14 px-8 text-lg rounded-sm shadow-2xl relative z-20">
              Get Your Itinerary
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="font-sofia-pro text-white/80 text-sm mb-4">Eastern Africa specialists for over 18 years</p>
            <div className="flex justify-center items-center space-x-8 text-white/60 text-xs">
              <span>Great Migration Experts</span>
              <span>•</span>
              <span>Gorilla Trek Specialists</span>
              <span>•</span>
              <span>Cultural Immersion</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}