"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import ContactCard from "@/components/ContactCard";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";

// Note: metadata should be in layout.tsx or a separate metadata file for client components

export default function ContactPage() {

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="Get in Touch"
        subtitle="Your Journey Specialist is Here to Help"
        description="Have questions? Need a custom itinerary? Your journey specialist is here to help you plan a seamless, unforgettable African adventure."
        backgroundImage="/images/contact/contact-hero.jpg"
      />

      <Section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-freight-display-pro text-3xl lg:text-4xl font-bold mb-8 text-stone-800">
                Contact Information
              </h2>

              <div className="space-y-6 mb-8">
                <ContactCard
                  icon="phone"
                  title="Call Us"
                  details={[
                    "+254 104 560 540",
                  ]}
                  links={[
                    "tel:+254104560540",
                  ]}
                />

                <ContactCard
                  icon="email"
                  title="Email Us"
                  details={[
                    "karibu@timobosafaris.com",
                  ]}
                  links={[
                    "mailto:karibu@timobosafaris.com",
                  ]}
                />

                <ContactCard
                  icon="clock"
                  title="Business Hours"
                  details={[
                    "Monday - Friday: 9:00 AM - 5:00 PM",
                    "Saturday: 9:00 AM - 1:00 PM",
                    "Sunday: Closed"
                  ]}
                />

                <ContactCard
                  icon="location"
                  title="Office Location"
                  details={[
                    "Nairobi, Kenya",
                    "Serving Eastern & Southern Africa"
                  ]}
                />
              </div>

              <div className="bg-amber-50 p-8 rounded-lg">
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">
                  Planning Your Safari?
                </h3>
                <p className="font-sofia-pro text-stone-700 mb-6 leading-relaxed">
                  Our safari specialists are ready to help you create the perfect African adventure. Whether you&apos;re interested in wildlife safaris, cultural experiences, or MICE services, we&apos;ll craft a personalized itinerary just for you.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                    <p className="font-sofia-pro text-stone-700">Free consultation and trip planning</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                    <p className="font-sofia-pro text-stone-700">Custom itinerary design</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                    <p className="font-sofia-pro text-stone-700">18+ years of expertise</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-amber-500 rounded-full mt-3"></div>
                    <p className="font-sofia-pro text-stone-700">Sustainable and ethical tourism</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-stone-200">
              <h2 className="font-freight-display-pro text-2xl lg:text-3xl font-bold mb-6 text-stone-800">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-screen-xl">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 lg:mb-12 text-stone-800">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm text-left border border-stone-200 hover:shadow-md transition-shadow">
              <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">
                How far in advance should I book my safari?
              </h3>
              <p className="font-sofia-pro text-stone-700 leading-relaxed">
                We recommend booking 3-6 months in advance for the best selection of accommodations and to ensure availability during peak seasons like the Great Migration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-left border border-stone-200 hover:shadow-md transition-shadow">
              <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">
                Do you provide travel insurance?
              </h3>
              <p className="font-sofia-pro text-stone-700 leading-relaxed">
                Yes, we offer comprehensive travel insurance options to ensure your peace of mind during your African adventure. We&apos;ll help you choose the right coverage.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-left border border-stone-200 hover:shadow-md transition-shadow">
              <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">
                Can you help with visa requirements?
              </h3>
              <p className="font-sofia-pro text-stone-700 leading-relaxed">
                Absolutely! We provide visa processing assistance and guidance on entry requirements for all our destination countries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-left border border-stone-200 hover:shadow-md transition-shadow">
              <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">
                What&apos;s included in your safari packages?
              </h3>
              <p className="font-sofia-pro text-stone-700 leading-relaxed">
                Our packages typically include accommodation, meals, game drives, transfers, and professional guide services. We&apos;ll provide a detailed breakdown for your specific itinerary.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-left border border-stone-200 hover:shadow-md transition-shadow">
              <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">
                Do you offer group discounts?
              </h3>
              <p className="font-sofia-pro text-stone-700 leading-relaxed">
                Yes, we offer competitive group rates for parties of 6 or more. We also specialize in MICE solutions for corporate groups with special pricing and services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-left border border-stone-200 hover:shadow-md transition-shadow">
              <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">
                What makes Timobo Safaris different?
              </h3>
              <p className="font-sofia-pro text-stone-700 leading-relaxed">
                With 18+ years of experience, we focus on purpose-driven travel that supports conservation, cultural preservation, and community empowerment while delivering authentic African experiences.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-screen-xl">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
            Ready to Start Planning?
          </h2>
          <p className="font-sofia-pro text-base lg:text-lg text-stone-300 mb-8 max-w-3xl mx-auto">
            Don&apos;t wait to create memories that will last a lifetime. Our expert safari specialists are ready to craft your perfect African adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg shadow-amber-600/20 hover:shadow-amber-700/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-amber-700 after:to-amber-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-12 px-6 text-base rounded-sm">
              <span className="relative z-20">Explore Destinations</span>
            </Link>
            <Link href="/services" className="relative inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer overflow-hidden z-10 text-white bg-gradient-to-r from-stone-700 to-stone-800 hover:from-stone-800 hover:to-stone-900 shadow-lg shadow-stone-700/20 hover:shadow-stone-800/30 before:absolute before:content-[''] before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rotate-45 before:transition-all before:duration-500 before:z-[-1] hover:before:top-[-100%] hover:before:left-[-100%] after:absolute after:content-[''] after:w-0 after:h-full after:top-0 after:right-0 after:z-[-1] after:bg-gradient-to-r after:from-stone-800 after:to-stone-900 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 active:scale-[0.98] active:shadow-md h-12 px-6 text-base rounded-sm">
              <span className="relative z-20">View Our Services</span>
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
}