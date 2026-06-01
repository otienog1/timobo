"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

const expertise = [
  { title: "Tailor-Made Safaris", body: "Bespoke safari experiences across Eastern & Southern Africa, designed around your interests, pace, and dreams — with no templates and no compromises." },
  { title: "Special Interest Tours", body: "Specialised journeys for photographers, filmmakers, researchers, birders, and adventure seekers who want Africa on their own terms." },
  { title: "MICE Solutions", body: "Seamless corporate events and incentive programmes in Africa's most inspiring destinations, delivered with local expertise and precision." },
  { title: "Purpose-Driven Travel", body: "Every journey supports wildlife conservation, cultural preservation, and community empowerment — travel that leaves Africa better than it found it." },
];

const values = [
  { title: "Integrity", body: "Honesty and transparency in every interaction, building trust through authentic relationships and ethical practice." },
  { title: "Excellence", body: "We offer and deliver nothing but the best, continuously raising the bar for African travel experiences." },
  { title: "Sustainability", body: "Protecting Africa's environment and wildlife while empowering local communities through responsible tourism." },
  { title: "Innovation", body: "Creative solutions for safaris and events, constantly evolving to exceed expectations and create unique experiences." },
  { title: "Passion", body: "We love Africa deeply, and this passion shines through in every detail of our work and service." },
  { title: "Community", body: "Building meaningful connections between travellers and local communities, creating mutual understanding and respect." },
];

const impacts = [
  { title: "Wildlife Conservation", body: "Partnering with conservation organisations to protect endangered species and preserve Africa's natural heritage for future generations." },
  { title: "Cultural Preservation", body: "Showcasing and respecting Africa's rich traditions while ensuring local cultures benefit from and maintain ownership of their heritage." },
  { title: "Community Empowerment", body: "Creating sustainable economic opportunities for local people through tourism — ensuring communities are partners in, and beneficiaries of, our success." },
  { title: "Transformative Experiences", body: "Creating authentic encounters with Africa that change perspectives, build connections, and inspire lifelong conservation advocates." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="About Timobo Safaris"
        subtitle="18+ years connecting travellers to Africa's untamed wilderness with purpose and passion."
        backgroundImage="/images/about/about-hero.jpg"
      />

      {/* Our Story */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="order-2 lg:order-1">
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Our Story</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight mb-5">
                Born from a deep love of Africa
              </h2>
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-14 bg-stone-300" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
                <span className="h-px w-14 bg-stone-300" />
              </div>
              <div className="space-y-5 font-sofia-pro text-sm lg:text-base leading-relaxed text-stone-600">
                <p>
                  Timobo Safaris Ltd was born from a deep passion for Africa&apos;s untamed wilderness and rich cultural heritage. What started as a vision to share authentic African experiences has evolved into one of the region&apos;s most trusted safari and MICE solutions partners.
                </p>
                <p>
                  We don&apos;t just sell destinations — we share our home. Every journey we craft tells a story of conservation, community empowerment, and the transformative power of authentic travel.
                </p>
                <p>
                  From the vast savannas of the Maasai Mara to the pristine beaches of Zanzibar, from intimate wildlife encounters to seamless corporate events, we&apos;ve spent over 18 years perfecting the art of African hospitality.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about/about-our-story.jpg"
                  alt="African safari landscape"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* The Timobo Difference */}
      <Section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">What Sets Us Apart</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight mb-5">
              The Timobo Difference
            </h2>
          </div>

          <div className="relative aspect-[16/7] overflow-hidden mb-14">
            <Image
              src="/images/about/about-our-story.jpg"
              alt="The Timobo Difference"
              fill
              className="object-cover"
            />
          </div>

          <div className="divide-y divide-stone-200">
            {expertise.map(({ title, body }) => (
              <div key={title} className="flex flex-col lg:flex-row lg:gap-20 py-8 lg:items-start">
                <h3 className="font-freight-display-pro text-xl text-stone-800 lg:w-72 lg:flex-shrink-0 mb-2 lg:mb-0 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed flex-1">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">What We Stand For</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight mb-5">
              Our Core Values
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
            <p className="font-sofia-pro text-base text-stone-500 leading-relaxed">
              The principles that guide every decision and shape every journey we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
            {values.map(({ title, body }, index) => (
              <div key={title}>
                <span
                  className="font-freight-display-pro text-4xl text-stone-100 leading-none select-none block mb-5"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-freight-display-pro text-2xl text-stone-800 mb-3 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Impact */}
      <Section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">

          {/* Header */}
          <div className="mb-14">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Making a Difference</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight mb-5">
              Our Impact
            </h2>
            <div className="flex items-center gap-3">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>

          {/* Pull quote */}
          <div className="max-w-3xl mb-16">
            <blockquote className="font-freight-display-pro-italic text-3xl lg:text-[2.25rem] text-stone-700 leading-snug mb-8">
              &ldquo;Travel is the only thing you buy that makes you richer. At Timobo, we ensure that richness extends to the communities and wildlife that make Africa extraordinary.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="font-sofia-pro text-[10px] tracking-[0.2em] uppercase text-stone-400 ml-1">The Timobo Promise</span>
            </div>
          </div>

          {/* Impact rows */}
          <div className="divide-y divide-stone-200">
            {impacts.map(({ title, body }) => (
              <div key={title} className="flex flex-col lg:flex-row lg:gap-20 py-8 lg:items-start">
                <h3 className="font-freight-display-pro text-xl text-stone-800 lg:w-72 lg:flex-shrink-0 mb-2 lg:mb-0 leading-snug">{title}</h3>
                <p className="font-sofia-pro text-sm text-stone-500 leading-relaxed flex-1">{body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 pt-10 border-t border-stone-200">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(28,25,23,0.25)] hover:shadow-[0_2px_8px_rgba(28,25,23,0.35)]"
            >
              Start Your Journey With Us
            </Link>
          </div>

        </div>
      </Section>
    </main>
  );
}
