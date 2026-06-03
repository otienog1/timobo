"use client";

import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollTrigger } from "@/lib/gsap";

const testimonials = [
  {
    id: 1,
    name: "Barbara, Tucker, JB & Bickell",
    designation: "",
    company: "",
    testimonial:
      "Josphat, we enjoyed meeting you and thank you for your excellent support on our trip. With best wishes for a wonderful 2011.",
  },
  {
    id: 2,
    name: "Jean",
    designation: "",
    company: "",
    testimonial:
      "We want to thank you for making our anniversary so special. The trip was outstanding, and the dinner at the Mara Serena was over the top. We both had a great dinner and a great night. You truly are and always will be our dearest friend. Please come to the US. We would love to have you come to our home. Until we meet again, may God bless you. You hold a special place in our hearts and always will. With many thanks and much love.",
  },
  {
    id: 3,
    name: "Mum, Dad, Leslie & Ritchie",
    designation: "",
    company: "",
    testimonial:
      "To our dearest special friend. Asante sana. Thank you from all of us for all you did to make this another trip of a lifetime. We love you.",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <div className="text-center max-w-3xl mx-auto px-4 sm:px-8 pb-4">
    <div className="font-freight-display-pro text-[6rem] text-amber-200 leading-none mb-2" aria-hidden="true">&ldquo;</div>
    <p className="font-freight-display-pro-italic text-xl sm:text-2xl lg:text-[1.65rem] leading-relaxed text-stone-700 -mt-6 mb-10">
      {testimonial.testimonial}
    </p>
    <div className="h-px w-10 bg-amber-300/50 mx-auto mb-5" />
    <p className="font-sofia-pro-bold text-sm text-stone-800 tracking-[0.08em]">{testimonial.name}</p>
    {(testimonial.designation || testimonial.company) && (
      <p className="font-sofia-pro text-xs text-stone-400 tracking-[0.2em] uppercase mt-1.5">
        {[testimonial.designation, testimonial.company].filter(Boolean).join(" · ")}
      </p>
    )}
  </div>
);


const TESTIMONIAL_COUNT = testimonials.length;

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const mainRef = useRef<HTMLElement>(null);

  const goTo = (index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((index + TESTIMONIAL_COUNT) % TESTIMONIAL_COUNT);
      setVisible(true);
    }, 250);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const ease = "power3.out";
      const fadeUp = { opacity: 0, y: 24 } as const;
      const fadeIn = { opacity: 1, y: 0, duration: 0.8, ease } as const;

      // ── About ──────────────────────────────────────────
      const aboutTl = gsap.timeline({
        scrollTrigger: { trigger: "[data-s='about']", start: "top 78%", toggleActions: "play none none none" },
      });
      aboutTl
        .fromTo("[data-s='about-eyebrow']", fadeUp, fadeIn)
        .fromTo("[data-s='about-intro']", fadeUp, fadeIn, "-=0.55")
        .fromTo("[data-s='about-divider']", { scaleX: 0 }, { scaleX: 1, duration: 0.55, ease: "power2.inOut", transformOrigin: "left" }, "-=0.55")
        .fromTo("[data-s='about-col']", fadeUp, { ...fadeIn, stagger: 0.12 }, "-=0.55")
        .fromTo("[data-s='about-image']", fadeUp, { ...fadeIn, duration: 0.85 }, "<0.25");

      // ── Services ───────────────────────────────────────
      const servicesTl = gsap.timeline({
        scrollTrigger: { trigger: "[data-s='services']", start: "top 78%", toggleActions: "play none none none" },
      });
      servicesTl
        .fromTo("[data-s='services-header'] > *", fadeUp, { ...fadeIn, stagger: 0.12 })
        .fromTo("[data-s='services-card']", fadeUp, { ...fadeIn, stagger: 0.12 }, "-=0.3");

      // ── Destinations ───────────────────────────────────
      const destTl = gsap.timeline({
        scrollTrigger: { trigger: "[data-s='dest']", start: "top 78%", toggleActions: "play none none none" },
      });
      destTl
        .fromTo("[data-s='dest-content'] > *", fadeUp, { ...fadeIn, stagger: 0.12 })
        .fromTo("[data-s='dest-img']", { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", stagger: 0.12 }, "-=0.55");

      // ── Testimonials ───────────────────────────────────
      const testimonialsTl = gsap.timeline({
        scrollTrigger: { trigger: "[data-s='testimonials']", start: "top 78%", toggleActions: "play none none none" },
      });
      testimonialsTl
        .fromTo("[data-s='testimonials-header'] > *", fadeUp, { ...fadeIn, stagger: 0.12 })
        .fromTo("[data-s='testimonials-body']", fadeUp, fadeIn, "-=0.3");

      // ── CTA ────────────────────────────────────────────
      const ctaTl = gsap.timeline({
        scrollTrigger: { trigger: "[data-s='cta']", start: "top 78%", toggleActions: "play none none none" },
      });
      ctaTl.fromTo("[data-s='cta-content'] > *", fadeUp, { ...fadeIn, stagger: 0.12 });

      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen overflow-x-hidden">
      <HeroSlider />

      {/* ── About / Story ─────────────────────────────── */}
      <Section data-s="about" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-center">

            {/* ── Content column ── */}
            <div className="lg:col-span-7 flex flex-col justify-center">

              {/* Eyebrow */}
              <div data-s="about-eyebrow" className="mb-6">
                <p className="font-sofia-pro text-[10px] tracking-[0.3em] uppercase text-amber-500 mb-3">
                  About Timobo Safaris
                </p>
                <div className="h-px w-8 bg-amber-300/60" />
              </div>

              {/* Intro paragraph */}
              <div data-s="about-intro" className="mb-6">
                <p className="font-sofia-pro text-base lg:text-lg text-stone-700 leading-relaxed">
                  At Timobo Safaris Ltd, we&apos;ve spent over 18 years designing exceptional journeys across Africa. Our expertise lies in planning, coordinating, and executing tailor-made safaris and special-interest tours, as well as seamless MICE solutions for corporate clients across Eastern and Southern Africa.
                </p>
              </div>

              <div data-s="about-divider" className="h-px w-full bg-stone-100 mb-6" />

              {/* Split: purpose + audience */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div data-s="about-col">
                  <p className="font-sofia-pro-bold text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-3">Our Purpose</p>
                  <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed">
                    We are more than a safari company — we are travel designers and event specialists committed to creating journeys that connect people with nature, culture, and community. With nearly two decades of experience, we champion purpose-driven travel that promotes wildlife conservation, cultural preservation, and community empowerment.
                  </p>
                </div>
                <div data-s="about-col">
                  <p className="font-sofia-pro-bold text-[10px] tracking-[0.2em] uppercase text-stone-400 mb-3">Who We Serve</p>
                  <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed">
                    Our journeys are designed for passionate travelers seeking authentic experiences, wildlife enthusiasts, professional photographers, adventure lovers, and global brands and corporate clients looking for seamless MICE solutions across Africa.
                  </p>
                </div>
              </div>

            </div>
            {/* ── Image column ── */}
            <div className="lg:col-span-5 mt-10 lg:mt-0">
              <div data-s="about-image" className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/homepage/homepage-section2.jpg"
                  alt="Safari guide in the African wilderness"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* ── Services / Expertise ──────────────────────── */}
      <Section data-s="services" className="py-20 lg:py-28 bg-stone-50 border-t border-stone-100 lg:flex lg:items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div data-s="services-header" className="text-center mb-12 lg:mb-20">

            <p className="font-sofia-pro text-xs tracking-[0.25em] uppercase text-amber-400 mb-4">
              Our Expertise
            </p>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10 bg-amber-300/50" />
              <span className="w-1 h-1 rotate-45 bg-amber-300/60 inline-block" />
              <span className="h-px w-10 bg-amber-300/50" />
            </div>

            <h2 className="font-freight-display-pro text-2xl sm:text-3xl lg:text-4xl text-stone-800 leading-tight max-w-4xl mx-auto">
              At Timobo Safaris Ltd, we specialize in creating unforgettable journeys and corporate travel solutions across Africa. With over 18 years of expertise, we craft <span className="underline decoration-amber-300 decoration-2 underline-offset-4">tailor-made safaris</span>, <span className="underline decoration-amber-300 decoration-2 underline-offset-4">exotic holidays</span>, <span className="underline decoration-amber-300 decoration-2 underline-offset-4">adventure trips</span>, and world-class <span className="underline decoration-amber-300 decoration-2 underline-offset-4">MICE experiences</span>.
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-0 border border-stone-200">

            {/* Safari Experiences */}
            <div data-s="services-card" className="group flex flex-col border-b lg:border-b-0 lg:border-r border-stone-200">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-safari-experiences.jpg"
                  alt="Wildlife safari experience"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <span className="absolute top-4 left-4 font-freight-display-pro text-5xl text-white/20 leading-none select-none">01</span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-freight-display-pro text-2xl text-stone-800 mb-3">Safari Experiences</h3>
                <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                  Custom-designed safari itineraries connecting you to Africa&apos;s most iconic destinations — from luxury lodge stays and wildlife encounters to photography tours and conservation experiences.
                </p>
                <Link
                  href="/services/safari-experiences"
                  className="font-sofia-pro-bold text-[10px] tracking-[0.2em] uppercase text-amber-500 hover:text-amber-400 inline-flex items-center gap-2 transition-colors"
                >
                  Discover More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Adventure Travel */}
            <div data-s="services-card" className="group flex flex-col border-b lg:border-b-0 lg:border-r border-stone-200">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-adventure-travel.jpg"
                  alt="Adventure travel in Africa"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <span className="absolute top-4 left-4 font-freight-display-pro text-5xl text-white/20 leading-none select-none">02</span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-freight-display-pro text-2xl text-stone-800 mb-3">Adventure Travel</h3>
                <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                  Off-the-beaten-path expeditions across Northern Kenya, Ethiopia, Rwanda, and Tanzania — gorilla treks, cultural discoveries, and wilderness journeys for the true explorer.
                </p>
                <Link
                  href="/services/adventure-travel"
                  className="font-sofia-pro-bold text-[10px] tracking-[0.2em] uppercase text-amber-500 hover:text-amber-400 inline-flex items-center gap-2 transition-colors"
                >
                  Discover More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* MICE Solutions */}
            <div data-s="services-card" className="group flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/images/homepage/homepage-mice-solutions.jpg"
                  alt="Corporate meetings and events in Africa"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                <span className="absolute top-4 left-4 font-freight-display-pro text-5xl text-white/20 leading-none select-none">03</span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-freight-display-pro text-2xl text-stone-800 mb-3">MICE Solutions</h3>
                <p className="font-sofia-pro text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                  End-to-end corporate event services across Eastern and Southern Africa — conferences, incentive travel, workshops, and special events planned and executed flawlessly.
                </p>
                <Link
                  href="/services/mice-solutions"
                  className="font-sofia-pro-bold text-[10px] tracking-[0.2em] uppercase text-amber-500 hover:text-amber-400 inline-flex items-center gap-2 transition-colors"
                >
                  Discover More <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* ── Destinations ──────────────────────────────── */}
      <Section data-s="dest" className="py-20 lg:py-28 bg-stone-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">

            {/* ── Content ── */}
            <div data-s="dest-content" className="lg:col-span-6 mb-12 lg:mb-0">

              <div className="mb-6">
                <p className="font-sofia-pro text-[10px] tracking-[0.3em] uppercase text-amber-200 mb-3">
                  Explore Africa
                </p>
                <div className="h-px w-8 bg-amber-200/40" />
              </div>

              <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight mb-6">
                Discover Eastern &amp; Southern Africa
              </h2>

              <p className="font-sofia-pro text-base text-stone-300 leading-relaxed mb-5">
                Kenya is home to the world-famous Maasai Mara, where the awe-inspiring Great Wildebeest Migration takes center stage each year. Explore Amboseli, renowned for its large-tusked elephants and stunning views of Mount Kilimanjaro.
              </p>
              <p className="font-sofia-pro text-base text-stone-300 leading-relaxed mb-10">
                From the vast plains of the Maasai Mara to Tanzania&apos;s Serengeti, Rwanda&apos;s mountain gorillas, and Botswana&apos;s Okavango Delta — we craft journeys to Africa&apos;s most iconic destinations.
              </p>

              <Link
                href="/destinations"
                className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-8 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(140,110,35,0.5)] hover:shadow-[0_2px_8px_rgba(140,110,35,0.65)]"
              >
                Explore All Destinations
              </Link>
            </div>

            {/* ── Images — staggered mosaic ── */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-12 grid-rows-2 gap-3 h-[420px] lg:h-[480px]">
                {/* Large left image — spans full height */}
                <div data-s="dest-img" className="col-span-7 row-span-2 relative overflow-hidden">
                  <Image src="/images/homepage/discover-ea-sa-1.jpg" alt="African wildlife in their natural habitat" fill className="object-cover" />
                </div>
                {/* Top-right image */}
                <div data-s="dest-img" className="col-span-5 row-span-1 relative overflow-hidden">
                  <Image src="/images/homepage/discover-ea-sa-2.jpg" alt="Safari landscape with acacia trees" fill className="object-cover" />
                </div>
                {/* Bottom-right image */}
                <div data-s="dest-img" className="col-span-5 row-span-1 relative overflow-hidden">
                  <Image src="/images/homepage/discover-ea-sa-3.jpg" alt="Mountain gorilla in Rwanda" fill className="object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* ── Testimonials ──────────────────────────────── */}
      <Section data-s="testimonials" className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">

          {/* Header */}
          <div data-s="testimonials-header" className="text-center mb-14">
            <p className="font-sofia-pro text-[10px] tracking-[0.3em] uppercase text-amber-400 mb-4">
              Guest Experiences
            </p>
            <div className="h-px w-8 bg-amber-300/60 mx-auto mb-6" />
            <h2 className="font-freight-display-pro text-3xl sm:text-4xl text-stone-800">
              Traveler Stories
            </h2>
          </div>

          <div data-s="testimonials-body">
            {/* Fade testimonial */}
            <div
              className="transition-opacity duration-300 ease-in-out"
              style={{ opacity: visible ? 1 : 0 }}
            >
              <TestimonialCard testimonial={testimonials[current]} />
            </div>

            {/* Minimal counter navigation */}
            <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={() => goTo(current - 1)}
              aria-label="Previous testimonial"
              className="font-sofia-pro text-stone-400 hover:text-stone-800 transition-colors text-lg leading-none"
            >
              ←
            </button>
            <span className="font-sofia-pro text-xs tracking-[0.25em] text-stone-400">
              {String(current + 1).padStart(2, "0")} / {String(TESTIMONIAL_COUNT).padStart(2, "0")}
            </span>
            <button
              onClick={() => goTo(current + 1)}
              aria-label="Next testimonial"
              className="font-sofia-pro text-stone-400 hover:text-stone-800 transition-colors text-lg leading-none"
            >
              →
            </button>
            </div>
          </div>

        </div>
      </Section>

      {/* ── CTA ───────────────────────────────────────── */}
      <Section data-s="cta" className="py-20 lg:py-32 bg-stone-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div data-s="cta-content" className="max-w-2xl mx-auto text-center">

            <p className="font-sofia-pro text-[10px] tracking-[0.35em] uppercase text-amber-200 mb-8">
              Begin Your Journey
            </p>

            <h2 className="font-freight-display-pro text-4xl sm:text-5xl lg:text-[3.25rem] text-white leading-[1.15] mb-8">
              Ready for Your African Adventure?
            </h2>

            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="h-px w-16 bg-amber-200/30" />
              <span className="w-1 h-1 rotate-45 bg-amber-200/50 inline-block shrink-0" />
              <span className="h-px w-16 bg-amber-200/30" />
            </div>

            <p className="font-sofia-pro text-base text-stone-400 leading-relaxed mb-12">
              Timobo Safaris invites you to discover Africa — where every journey tells a story, every safari supports sustainability, and every experience stays with you forever.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sofia-pro-bold text-[11px] tracking-[0.2em] uppercase px-10 py-4 bg-amber-200 hover:bg-amber-300 text-stone-900 transition-all duration-300 rounded-sm shadow-[0_2px_6px_rgba(140,110,35,0.5)] hover:shadow-[0_2px_8px_rgba(140,110,35,0.65)]"
            >
              Start Planning Your Journey
            </Link>

          </div>
        </div>
      </Section>
    </main>
  );
}
