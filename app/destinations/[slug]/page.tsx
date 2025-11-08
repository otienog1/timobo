import { getSiteContent, getDestinationBySlug, getDestinationSlugs } from "@/lib/content";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Itinerary from "@/components/Itinerary";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams(): { slug: string }[] {
  // Get all destination slugs dynamically from content
  const slugs = getDestinationSlugs();
  const params = slugs.map(slug => ({ slug }));

  // Add alias for South Africa to handle both URLs
  params.push({ slug: 'south-africa' });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  
  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `${destination.name} Safari Tours - Timobo Safaris Ltd`,
    description: `${destination.tagline} ${destination.description.substring(0, 150)}...`,
    keywords: [`${destination.name} safari`, `${destination.name} tours`, "African wildlife", "safari packages"],
    openGraph: {
      title: `${destination.name} Safari Tours`,
      description: destination.tagline,
      type: "website",
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  // Map slugs to their corresponding destination images
  const getDestinationImage = (slug: string): string => {
    const imageMap: Record<string, string> = {
      'kenya': '/images/destinations/destination-kenya.jpg',
      'tanzania': '/images/destinations/destination-tanzania.jpg',
      'southern-tanzania': '/images/destinations/destination-southern-tanzania.jpg',
      'rwanda': '/images/destinations/destination-rwanda.jpg',
      'uganda': '/images/destinations/destination-uganda.jpg',
      'ethiopia': '/images/destinations/destination-ethiopia.jpg',
      'south-africa-and-cape-town': '/images/destinations/destination-southern-africa.jpg',
      'south-africa': '/images/destinations/destination-southern-africa.jpg', // Alias for South Africa
      'zimbabwe': '/images/destinations/destination-zimbabwe.jpg',
      'zambia': '/images/destinations/destination-zambia.jpg',
      'botswana': '/images/destinations/destination-botswana.jpg',
      'namibia': '/images/destinations/destination-namibia.jpg'
    };

    return imageMap[slug] || '/images/destinations/all-destinations-hero.jpg';
  };

  return (
    <main className="min-h-screen">
      <Hero
        title={destination.name}
        subtitle={destination.tagline}
        backgroundImage={getDestinationImage(slug)}
      />

      <Section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-stone max-w-none mb-12">
              <p className="text-xl leading-relaxed text-stone-700 text-justify">
                {destination.description}
              </p>
            </div>

            {destination.attractions.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-stone-800">
                  Top Attractions & Experiences
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {destination.attractions.map((attraction, index) => (
                    <div key={index} className="bg-stone-50 p-6 rounded-lg">
                      <p className="text-stone-700">{attraction}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {destination.bestTimeToVisit.length > 0 && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-8 text-stone-800">
                  Best Time to Visit
                </h2>
                <div className="space-y-4">
                  {destination.bestTimeToVisit.map((period, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-3 h-3 bg-amber-500 rounded-full mt-2"></div>
                      <p className="text-stone-700">{period}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {destination.itinerary && (
              <div className="mb-12">
                <Itinerary 
                  title={destination.itinerary.name}
                  days={destination.itinerary.days}
                />
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section className="py-16 bg-stone-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            Let our expert team create a customized itinerary for your {destination.name} adventure. 
            We&apos;ll handle every detail to ensure your journey is unforgettable.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/contact"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
            >
              Start Planning Your Journey
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}