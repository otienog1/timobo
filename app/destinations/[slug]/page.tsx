import { getDestinationBySlug, getDestinationSlugs } from "@/lib/content";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Itinerary from "@/components/Itinerary";
import BestTimeToVisit from "@/components/BestTimeToVisit";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams(): { slug: string }[] {
  const slugs = getDestinationSlugs();
  const params = slugs.map(slug => ({ slug }));
  params.push({ slug: 'south-africa' });
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return { title: "Destination Not Found" };
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

function parseAttractionString(str: string): { title: string; body: string } {
  const dashIndex = str.indexOf(" – ");
  if (dashIndex !== -1) {
    return { title: str.slice(0, dashIndex).trim(), body: str.slice(dashIndex + 3).trim() };
  }
  const hyphenIndex = str.indexOf(" - ");
  if (hyphenIndex !== -1) {
    return { title: str.slice(0, hyphenIndex).trim(), body: str.slice(hyphenIndex + 3).trim() };
  }
  const commaIndex = str.indexOf(",");
  if (commaIndex !== -1 && commaIndex < 40) {
    return { title: str.slice(0, commaIndex).trim(), body: str.slice(commaIndex + 1).trim() };
  }
  return { title: str, body: "" };
}

function parseBestTimeString(str: string): { period: string; detail: string } {
  const dashIndex = str.indexOf(" – ");
  if (dashIndex !== -1) {
    return { period: str.slice(0, dashIndex).trim(), detail: str.slice(dashIndex + 3).trim() };
  }
  const hyphenIndex = str.indexOf(" - ");
  if (hyphenIndex !== -1) {
    return { period: str.slice(0, hyphenIndex).trim(), detail: str.slice(hyphenIndex + 3).trim() };
  }
  return { period: str, detail: "" };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const imageMap: Record<string, string> = {
    'kenya': '/images/destinations/destination-kenya.jpg',
    'tanzania': '/images/destinations/destination-tanzania.jpg',
    'southern-tanzania': '/images/destinations/destination-southern-tanzania.jpg',
    'rwanda': '/images/destinations/destination-rwanda.jpg',
    'uganda': '/images/destinations/destination-uganda.jpg',
    'ethiopia': '/images/destinations/destination-ethiopia.jpg',
    'south-africa-and-cape-town': '/images/destinations/destination-southern-africa.jpg',
    'south-africa': '/images/destinations/destination-southern-africa.jpg',
    'zimbabwe': '/images/destinations/destination-zimbabwe.jpg',
    'zambia': '/images/destinations/destination-zambia.jpg',
    'botswana': '/images/destinations/destination-botswana.jpg',
    'namibia': '/images/destinations/destination-namibia.jpg'
  };

  const heroImage = imageMap[slug] || '/images/destinations/all-destinations-hero.jpg';
  const parsedAttractions = destination.attractions.map(parseAttractionString);
  const parsedBestTime = destination.bestTimeToVisit.map(parseBestTimeString);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title={destination.name}
        subtitle={destination.tagline}
        backgroundImage={heroImage}
      />

      {/* Section 1 — Introduction */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-6">
            About {destination.name}
          </p>
          <h2 className="font-freight-display-pro-italic text-3xl sm:text-4xl text-stone-800 mb-7 leading-tight max-w-3xl mx-auto">
            &ldquo;{destination.tagline}&rdquo;
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            {destination.description}
          </p>
        </div>
      </Section>

      {/* Section 2 — Attractions Grid */}
      {parsedAttractions.length > 0 && (
        <Section className="py-20 lg:py-28 bg-stone-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="text-center mb-14">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">
                What Awaits You
              </p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
                Top Attractions &amp; Experiences
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
              {parsedAttractions.map(({ title, body }, index) => (
                <div key={index} className="bg-white p-8 lg:p-10">
                  <span
                    className="font-freight-display-pro text-4xl text-stone-100 leading-none select-none block mb-5"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">
                    {title}
                  </h3>
                  {body && (
                    <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">
                      {body}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Section 3 — Best Time to Visit */}
      {parsedBestTime.length > 0 && (
        <BestTimeToVisit
          destinationName={destination.name}
          seasons={parsedBestTime.map(({ period, detail }) => ({ heading: period, detail }))}
        />
      )}

      {/* Section 4 — Itinerary (dark) */}
      {destination.itinerary && (
        <Section className="py-20 lg:py-28 bg-stone-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
            <div className="text-center mb-14">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-5">
                Sample Itinerary
              </p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white leading-tight">
                {destination.itinerary.name}
              </h2>
              <div className="flex items-center justify-center gap-3 mt-6">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <Itinerary
                title={destination.itinerary.name}
                days={destination.itinerary.days}
                isDark
              />
            </div>

            <div className="mt-14 pt-10 border-t border-white/10 text-center">
              <p className="font-sofia-pro text-sm text-stone-400 mb-8 max-w-xl mx-auto leading-relaxed">
                All itineraries are fully customizable. We&apos;ll tailor every detail to your preferences, travel dates, and group size.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm"
                >
                  Customize This Itinerary
                </Link>
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/65 hover:border-white/90 text-white hover:bg-white/10 transition-all duration-300 rounded-sm"
                >
                  All Destinations
                </Link>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Section 5 — CTA */}
      <Section className="py-20 lg:py-28 bg-stone-900 overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 aspect-[16/9] lg:aspect-auto lg:min-h-[480px]">
            <Image src={heroImage} alt={destination.name} fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">{destination.name}</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Ready to Explore {destination.name}?
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                Let our expert team craft a bespoke journey to {destination.name} — every detail handled, every moment unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm"
                >
                  Start Planning Your Journey
                </Link>
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm"
                >
                  Explore All Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
