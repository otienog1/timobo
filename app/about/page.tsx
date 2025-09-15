"use client";

import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Metadata } from "next";

// Note: metadata should be in layout.tsx or a separate metadata file for client components

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero
        title="About Timobo Safaris Ltd"
        subtitle="18+ Years of African Safari Excellence"
        description="Discover our story, meet our team, and learn about our commitment to creating meaningful African experiences while supporting conservation and communities."
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
      />

      {/* Our Story - Narrative Driven */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
                Our Story
              </h2>

              <div className="space-y-6 font-sofia-pro text-lg lg:text-xl leading-relaxed text-stone-700">
                <p>
                  Founded in 2006, Timobo Safaris Ltd was born from a deep passion for Africa's untamed wilderness and rich cultural heritage. What started as a vision to share authentic African experiences has evolved into one of the region's most trusted safari and MICE solutions partners.
                </p>

                <p>
                  We don't just sell destinations – we share our home. Every journey we craft tells a story of conservation, community empowerment, and the transformative power of authentic travel experiences.
                </p>

                <p>
                  From the vast savannas of the Maasai Mara to the pristine beaches of Zanzibar, from intimate wildlife encounters to seamless corporate events, we've spent over 18 years perfecting the art of African hospitality.
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80"
                  alt="African safari landscape showcasing our heritage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>


      {/* What Makes Us Different - Enhanced Design */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
              The Timobo Difference
            </h2>
            <p className="font-sofia-pro text-xl text-stone-600 max-w-3xl mx-auto">
              We don't just plan trips – we craft transformative journeys that connect you to Africa's soul
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h3 className="font-freight-display-pro text-3xl font-light mb-12 text-stone-800">Our Expertise</h3>
              <div className="space-y-8">
                <div className="border-l-4 border-stone-300 pl-6">
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Tailor-Made Safaris</h4>
                  <p className="font-sofia-pro text-stone-700">Bespoke safari experiences across Eastern & Southern Africa, designed around your interests, pace, and dreams.</p>
                </div>

                <div className="border-l-4 border-stone-300 pl-6">
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Special Interest Tours</h4>
                  <p className="font-sofia-pro text-stone-700">Specialized journeys for photographers, filmmakers, researchers, birders, and adventure seekers.</p>
                </div>

                <div className="border-l-4 border-stone-300 pl-6">
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">MICE Solutions</h4>
                  <p className="font-sofia-pro text-stone-700">Seamless corporate events and incentive programs in Africa's most inspiring destinations.</p>
                </div>

                <div className="border-l-4 border-stone-300 pl-6">
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Purpose-Driven Travel</h4>
                  <p className="font-sofia-pro text-stone-700">Every journey supports wildlife conservation, cultural preservation, and community empowerment.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-freight-display-pro text-3xl font-light mb-12 text-stone-800">Our Clients</h3>
              <div className="grid gap-6">
                <Card className="border-none shadow-sm bg-stone-50">
                  <CardContent className="p-6">
                    <h4 className="font-sofia-pro text-lg font-semibold mb-2 text-stone-800">Adventure Seekers</h4>
                    <p className="font-sofia-pro text-stone-600">Passionate travelers seeking authentic, transformative experiences beyond the ordinary.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-stone-50">
                  <CardContent className="p-6">
                    <h4 className="font-sofia-pro text-lg font-semibold mb-2 text-stone-800">Conservation Champions</h4>
                    <p className="font-sofia-pro text-stone-600">Wildlife enthusiasts and conservationists committed to protecting Africa's natural heritage.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-stone-50">
                  <CardContent className="p-6">
                    <h4 className="font-sofia-pro text-lg font-semibold mb-2 text-stone-800">Creative Professionals</h4>
                    <p className="font-sofia-pro text-stone-600">Photographers, filmmakers, and content creators capturing Africa's raw beauty.</p>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm bg-stone-50">
                  <CardContent className="p-6">
                    <h4 className="font-sofia-pro text-lg font-semibold mb-2 text-stone-800">Global Organizations</h4>
                    <p className="font-sofia-pro text-stone-600">International brands and corporations seeking unique African venues for their events.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values - Card-Based Layout */}
      <Section className="py-20 lg:py-28 bg-stone-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
              Our Core Values
            </h2>
            <p className="font-sofia-pro text-xl text-stone-600 max-w-3xl mx-auto">
              The principles that guide every decision and shape every journey we create
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">Honesty and transparency in every interaction, building trust through authentic relationships and ethical practices.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">We offer and deliver nothing but the best, continuously raising the bar for African travel experiences.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">Protecting Africa's environment and wildlife while empowering local communities through responsible tourism.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">Creative solutions for safaris and events, constantly evolving to exceed expectations and create unique experiences.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Passion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">We love Africa deeply, and this passion shines through in every detail of our work and service.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-md bg-white">
              <CardHeader>
                <CardTitle className="font-freight-display-pro text-2xl text-stone-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-sofia-pro text-stone-600">Building meaningful connections between travelers and local communities, creating mutual understanding and respect.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Our Impact - Enhanced with Visual Elements */}
      <Section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-6xl font-light mb-8 text-stone-800 leading-tight">
              Our Impact
            </h2>
            <p className="font-sofia-pro text-xl text-stone-600 max-w-3xl mx-auto">
              We believe travel should leave the world better than we found it. Every journey creates positive change.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Wildlife Conservation</h4>
                  <p className="font-sofia-pro text-stone-700">Partnering with conservation organizations to protect endangered species and preserve Africa's natural heritage for future generations.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Cultural Preservation</h4>
                  <p className="font-sofia-pro text-stone-700">Showcasing and respecting Africa's rich traditions while ensuring local cultures benefit from and maintain control over their heritage.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Community Empowerment</h4>
                  <p className="font-sofia-pro text-stone-700">Creating sustainable economic opportunities for local people through tourism, ensuring communities are partners in and beneficiaries of our success.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-stone-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-sofia-pro text-xl font-semibold mb-3 text-stone-800">Transformative Experiences</h4>
                  <p className="font-sofia-pro text-stone-700">Creating authentic Experiences of Africa that change perspectives, build connections, and inspire lifelong conservation advocates.</p>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <Card className="border-none shadow-lg bg-stone-100">
                <CardContent className="p-8">
                  <blockquote className="font-sofia-pro text-2xl font-light italic text-stone-700 mb-6 leading-relaxed">
                    "Travel is the only thing you buy that makes you richer. At Timobo, we ensure that richness extends to the communities and wildlife that make Africa extraordinary."
                  </blockquote>
                  <div className="text-center">
                    <div className="w-16 h-px bg-stone-400 mx-auto mb-4"></div>
                    <p className="font-sofia-pro text-stone-600 font-medium">The Timobo Promise</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-16">
            <AnimatedButton asChild variant="primary" size="lg">
              <Link href="/contact">
                Start Your Journey With Us
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </Section>
    </main>
  );
}