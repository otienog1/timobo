"use client";

import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <PageHero
        title="Get in Touch"
        subtitle="Your journey specialist is ready to help you plan a seamless, unforgettable African adventure."
        backgroundImage="/images/contact/contact-hero.jpg"
      />

      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Reach Us */}
            <div>
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Reach Us</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-4 leading-tight">
                Contact Information
              </h2>
              <div className="flex items-center gap-3 mb-12">
                <span className="h-px w-14 bg-stone-300" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
                <span className="h-px w-14 bg-stone-300" />
              </div>

              <div className="divide-y divide-stone-100">
                <ContactCard
                  icon="phone"
                  title="Call Us"
                  details={["+254 104 560 540"]}
                  links={["tel:+254104560540"]}
                />
                <ContactCard
                  icon="email"
                  title="Email Us"
                  details={["karibu@timobosafaris.com"]}
                  links={["mailto:karibu@timobosafaris.com"]}
                />
                <ContactCard
                  icon="clock"
                  title="Business Hours"
                  details={[
                    "Monday – Friday: 9:00 AM – 5:00 PM",
                    "Saturday: 9:00 AM – 1:00 PM",
                    "Sunday: Closed",
                  ]}
                />
                <ContactCard
                  icon="location"
                  title="Office Location"
                  details={["Nairobi, Kenya", "Serving Eastern & Southern Africa"]}
                />
              </div>
            </div>

            {/* Send a Message */}
            <div>
              <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Send a Message</p>
              <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 mb-4 leading-tight">
                Tell Us About Your Dream Journey
              </h2>
              <div className="flex items-center gap-3 mb-12">
                <span className="h-px w-14 bg-stone-300" />
                <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
                <span className="h-px w-14 bg-stone-300" />
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Planning Panel */}
          <div className="mt-20 pt-14 border-t border-stone-100">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-start">
              <div>
                <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-4">Why Plan With Us</p>
                <h3 className="font-freight-display-pro text-2xl sm:text-3xl text-stone-800 mb-5 leading-tight">
                  Planning Your Safari?
                </h3>
                <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed">
                  Our safari specialists are ready to help you create the perfect African adventure. Whether you&apos;re interested in wildlife safaris, cultural experiences, or MICE services, we&apos;ll craft a personalised itinerary just for you.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "Free consultation and trip planning",
                  "Custom itinerary design",
                  "18+ years of expertise",
                  "Sustainable and ethical tourism",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block mt-2" aria-hidden="true" />
                    <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-16">
            <p className="font-sofia-pro text-[11px] tracking-[0.2em] uppercase text-amber-600 mb-5">Common Questions</p>
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800 leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-14 bg-stone-300" />
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-400/70 inline-block shrink-0" />
              <span className="h-px w-14 bg-stone-300" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-stone-200 max-w-5xl mx-auto">
            {[
              {
                q: "How far in advance should I book my safari?",
                a: "We recommend booking 3–6 months in advance for the best selection of accommodations and to ensure availability during peak seasons like the Great Migration.",
              },
              {
                q: "Do you provide travel insurance?",
                a: "Yes, we offer comprehensive travel insurance options to ensure your peace of mind during your African adventure. We'll help you choose the right coverage.",
              },
              {
                q: "Can you help with visa requirements?",
                a: "Absolutely. We provide visa processing assistance and guidance on entry requirements for all our destination countries.",
              },
              {
                q: "What's included in your safari packages?",
                a: "Our packages typically include accommodation, meals, game drives, transfers, and professional guide services. We'll provide a detailed breakdown for your specific itinerary.",
              },
              {
                q: "Do you offer group discounts?",
                a: "Yes, we offer competitive group rates for parties of 6 or more. We also specialize in MICE solutions for corporate groups with special pricing and services.",
              },
              {
                q: "What makes Timobo Safaris different?",
                a: "With 18+ years of experience, we focus on purpose-driven travel that supports conservation, cultural preservation, and community empowerment while delivering authentic African experiences.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white p-8">
                <h3 className="font-sofia-pro-bold text-base mb-3 text-stone-800">{q}</h3>
                <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="py-20 lg:py-28 bg-stone-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-screen-xl">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl mb-6 leading-tight">
            Ready to Start Planning?
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-14 bg-amber-200/60" />
            <span className="w-1.5 h-1.5 rotate-45 bg-amber-200/80 inline-block shrink-0" />
            <span className="h-px w-14 bg-amber-200/60" />
          </div>
          <p className="font-sofia-pro text-base text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don&apos;t wait to create memories that will last a lifetime. Our expert safari specialists are ready to craft your perfect African adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/destinations"
              className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(140,110,35,0.5)] hover:shadow-[0_2px_8px_rgba(140,110,35,0.65)]"
            >
              Explore Destinations
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center font-sofia-pro text-[11px] tracking-[0.2em] uppercase px-8 py-4 border border-white/65 hover:border-white/90 text-white hover:bg-white/10 transition-all duration-300 rounded-sm"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}
