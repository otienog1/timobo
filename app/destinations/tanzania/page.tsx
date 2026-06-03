import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import Itinerary from "@/components/Itinerary";
import BestTimeToVisit from "@/components/BestTimeToVisit";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tanzania Safari Destinations - Timobo Safaris Ltd",
  description: "Explore Tanzania's legendary landscapes — the Serengeti, Ngorongoro Crater, and Tarangire in the north; Nyerere, Ruaha, and Mahale in the south; and the spice-scented shores of Zanzibar.",
  keywords: ["Tanzania safari", "Serengeti", "Ngorongoro Crater", "Zanzibar", "Nyerere National Park", "Ruaha", "Mahale Mountains", "Tarangire", "Lake Manyara"],
};

const northernParks = [
  {
    name: "Ngorongoro Crater",
    description: "The world's largest intact volcanic caldera, sheltering the greatest concentration of wildlife on earth. Lions, elephants, black rhinos, and flamingos share this natural amphitheatre.",
  },
  {
    name: "Serengeti National Park",
    description: "Africa's most celebrated wilderness — infinite golden plains where the Great Wildebeest Migration thunders through each year, and the Big Five roam freely.",
  },
  {
    name: "Lake Manyara National Park",
    description: "A compact jewel famed for its tree-climbing lions, vast flocks of flamingos on the alkaline lake, and rich birdlife in the groundwater forest.",
  },
  {
    name: "Tarangire National Park",
    description: "The land of giants — ancient baobabs and the highest elephant concentration in northern Tanzania, alongside vast herds of zebra and wildebeest in the dry season.",
  },
];

const southernParks = [
  {
    name: "Nyerere National Park",
    description: "Formerly the Selous Game Reserve — Africa's largest protected wild sanctuary. Explore its palm-fringed rivers on a boat safari, on foot, or by game drive in total seclusion.",
  },
  {
    name: "Mahale Mountains National Park",
    description: "A remote paradise on the forested shores of Lake Tanganyika, home to habituated chimpanzees. Trek deep into the rainforest and watch chimps at close range.",
  },
  {
    name: "Ruaha National Park",
    description: "Tanzania's largest national park — wild, remote, and spectacular. Elephant herds, African wild dogs, lions, and leopards in an ancient landscape of baobabs and rocky escarpments.",
  },
];

const northernBestTime = [
  {
    heading: "June–October",
    detail: "The dry season is the classic safari season — clear skies, sparse vegetation, and animals concentrated around water sources in the Serengeti and Ngorongoro.",
  },
  {
    heading: "January–March",
    detail: "The short rains bring lush green landscapes, the Serengeti calving season, and far fewer visitors. Lake Manyara's flamingo flocks are at their most spectacular.",
  },
];

const southernBestTime = [
  {
    heading: "June–October",
    detail: "The dry season draws animals to water sources and clears the bush for excellent visibility — prime time for game viewing across Nyerere, Ruaha, and Mahale.",
  },
  {
    heading: "January–February",
    detail: "A quieter period with excellent wildlife viewing, lush green landscapes, and the calving season bringing new life to the southern wilderness.",
  },
];

const northernItinerary = {
  name: "10-Day Northern Tanzania & Zanzibar Safari",
  days: [
    "Day 1: Arrive at Kilimanjaro International Airport. Transfer to Arusha for overnight stay and safari briefing.",
    "Day 2: Drive to Tarangire National Park. Afternoon game drive among ancient baobabs and large elephant herds.",
    "Day 3: Full day in Tarangire. Morning and evening game drives. Overnight at tented camp.",
    "Day 4: Drive to Lake Manyara National Park. Afternoon game drive in search of tree-climbing lions and flamingos.",
    "Day 5: Early morning in Lake Manyara. Drive to the Ngorongoro Conservation Area. Sundowners at the crater rim.",
    "Day 6: Full descent into Ngorongoro Crater. A full day among the greatest concentration of wildlife on earth.",
    "Day 7: Drive to the Serengeti via the Ngorongoro highlands. Afternoon game drive on the central plains.",
    "Day 8: Full day in the Serengeti — morning and afternoon game drives in search of the Big Five and the Migration.",
    "Day 9: Fly from the Serengeti to Zanzibar. Check in to your beach resort. Explore Stone Town at leisure.",
    "Day 10: Morning on Zanzibar's white beaches. Optional spice tour or snorkelling excursion. Depart.",
  ],
};

const southernItinerary = {
  name: "12-Day Southern Tanzania & Zanzibar Safari",
  days: [
    "Day 1: Arrive Dar es Salaam. Transfer to hotel. Welcome briefing with your safari team.",
    "Day 2: Fly to Nyerere National Park (formerly Selous). Afternoon boat safari on the Rufiji River.",
    "Day 3: Full day in Nyerere — morning game drive and guided boat safari through palm-fringed channels.",
    "Day 4: Continue exploring Nyerere's remote wilderness. Late afternoon fly-out to Ruaha National Park.",
    "Day 5: Full day in Ruaha. Morning and afternoon game drives. Elephant herds and rare African wild dogs.",
    "Day 6: Walking safari in Ruaha with expert guides through the ancient baobab-studded landscape.",
    "Day 7: Fly to Mahale Mountains National Park on the shores of Lake Tanganyika.",
    "Day 8: Chimpanzee trekking in the Mahale forest. Afternoon relaxation by the clear waters of Lake Tanganyika.",
    "Day 9: Early morning chimp habituation walk. Boat excursion and snorkelling in the crystal-clear lake.",
    "Day 10: Fly to Zanzibar via Dar es Salaam. Check in to beachfront resort in Nungwi or Paje.",
    "Day 11: Explore Stone Town — a UNESCO World Heritage Site. Optional spice farm tour and sunset dhow cruise.",
    "Day 12: Morning at leisure on Zanzibar's turquoise shores. Depart.",
  ],
};

export default function TanzaniaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Tanzania"
        subtitle="From the endless Serengeti plains and the ancient Ngorongoro Crater to the remote southern wilderness and the spice-scented shores of Zanzibar."
        backgroundImage="/images/destinations/destination-tanzania.jpg"
      />

      {/* Introduction */}
      <Section className="py-20 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Africa&apos;s Greatest Stage</p>
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
            One Country, Infinite Landscapes
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-stone-300" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
            <span className="h-px w-14 bg-stone-300" />
          </div>
          <p className="font-sofia-pro text-base lg:text-[1.05rem] text-stone-600 leading-relaxed">
            Tanzania holds some of the most extraordinary wild places on earth. The north is legendary — the Serengeti, the Ngorongoro Crater, Lake Manyara, and Tarangire compose a circuit of wildlife spectacle unmatched anywhere on the continent. Venture south and you enter a different Tanzania entirely: vast, remote, and raw. And at the end of any journey, Zanzibar waits — white sands, warm Indian Ocean waters, and centuries of Swahili culture.
          </p>
        </div>
      </Section>

      {/* ── Northern Tanzania ── */}
      <Section className="py-20 lg:py-28 bg-white" id="northern-tanzania">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-end mb-16">
            <div>
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Northern Circuit</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
                Northern Tanzania
              </h2>
            </div>
            <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed mt-6 lg:mt-0">
              The northern circuit is Tanzania at its most iconic — a continuous arc of wilderness stretching from the baobab-filled plains of Tarangire through the flamingo-fringed shores of Lake Manyara, to the volcanic wonder of Ngorongoro and the infinite Serengeti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-100">
            {northernParks.map(({ name, description }, index) => (
              <div key={name} className="bg-white p-8 lg:p-10">
                <span
                  className="font-freight-display-pro text-4xl text-stone-100 leading-none select-none block mb-5"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{name}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Northern Tanzania Best Time ── */}
      <BestTimeToVisit
        destinationName="Northern Tanzania"
        seasons={northernBestTime}
        sectionClassName="bg-stone-50"
      />

      {/* ── Northern Tanzania Itinerary ── */}
      <Section className="py-20 lg:py-28 bg-stone-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-5">Sample Itinerary</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white leading-tight">
              {northernItinerary.name}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-white/20" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
              <span className="h-px w-14 bg-white/20" />
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <Itinerary title={northernItinerary.name} days={northernItinerary.days} isDark />
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

      {/* ── Southern Tanzania ── */}
      <Section className="py-20 lg:py-28 bg-stone-50" id="southern-tanzania">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-end mb-16">
            <div>
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Southern Circuit</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight">
                Southern Tanzania
              </h2>
            </div>
            <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed mt-6 lg:mt-0">
              Tanzania&apos;s south is remote, raw, and deeply rewarding. Far from the crowds of the north, these vast wilderness areas offer some of Africa&apos;s most intimate and exclusive safari experiences — from boat safaris on the Rufiji River to chimpanzee trekking on the shores of Lake Tanganyika.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-stone-200">
            {southernParks.map(({ name, description }, index) => (
              <div key={name} className="bg-white p-8 lg:p-10">
                <span
                  className="font-freight-display-pro text-4xl text-stone-100 leading-none select-none block mb-5"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-freight-display-pro text-xl text-stone-800 mb-3 leading-snug">{name}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Southern Tanzania Best Time ── */}
      <BestTimeToVisit
        destinationName="Southern Tanzania"
        seasons={southernBestTime}
      />

      {/* ── Southern Tanzania Itinerary ── */}
      <Section className="py-20 lg:py-28 bg-stone-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-5">Sample Itinerary</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white leading-tight">
              {southernItinerary.name}
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="h-px w-14 bg-white/20" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
              <span className="h-px w-14 bg-white/20" />
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <Itinerary title={southernItinerary.name} days={southernItinerary.days} isDark />
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

      {/* ── Zanzibar ── */}
      <Section className="py-20 lg:py-28 bg-white" id="zanzibar">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

            <div className="relative aspect-[4/3] overflow-hidden mb-12 lg:mb-0">
              <Image
                src="/images/destinations/destination-southern-tanzania.jpg"
                alt="Zanzibar island"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">The Spice Island</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-6 leading-tight">
                Zanzibar
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-14 bg-stone-300" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
                <span className="h-px w-14 bg-stone-300" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-8">
                Zanzibar is the perfect counterpoint to the intensity of a safari — an island of ivory-white beaches, turquoise shallows, and a historic Stone Town laced with centuries of Swahili, Arab, and Portuguese influence. A UNESCO World Heritage Site, Stone Town&apos;s labyrinthine lanes reveal spice markets, carved wooden doorways, and rooftop terraces overlooking the Indian Ocean.
              </p>

              <div className="space-y-3 mb-10">
                {[
                  "Stone Town — a UNESCO World Heritage Site",
                  "Pristine beaches: Nungwi, Kendwa, and Paje",
                  "Spice farm tours and sunset dhow cruises",
                  "World-class snorkelling and diving",
                  "Fresh seafood and Swahili cuisine",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/80 inline-block mt-2" />
                    <p className="font-sofia-pro text-sm text-stone-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-amber-300/60 pl-4">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-1">Best Time</p>
                  <p className="font-freight-display-pro text-base text-stone-800">June–October &amp; Dec–Feb</p>
                </div>
                <div className="border-l-2 border-amber-300/60 pl-4">
                  <p className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-amber-600 mb-1">Highlight</p>
                  <p className="font-freight-display-pro text-base text-stone-800">Beaches &amp; Stone Town</p>
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
            <Image src="/images/destinations/destination-tanzania.jpg" alt="Tanzania safari" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 bg-stone-900 flex items-center">
            <div className="px-8 py-14 sm:px-12 lg:px-16 lg:py-20">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-300 mb-6">Tanzania</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-white mb-6 leading-tight">
                Ready to Explore Tanzania?
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-14 bg-white/20" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-300/60 inline-block shrink-0" />
                <span className="h-px w-14 bg-white/20" />
              </div>
              <p className="font-sofia-pro text-sm text-stone-400 mb-10 leading-relaxed max-w-sm">
                Let our expert team craft a bespoke Tanzania journey — whether you dream of the Serengeti Migration, a remote southern safari, or lazy days on a Zanzibar beach. Every detail handled, every moment unforgettable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm"
                >
                  Plan Your Safari
                </Link>
                <Link
                  href="/destinations"
                  className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/30 hover:border-white/60 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 rounded-sm"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
