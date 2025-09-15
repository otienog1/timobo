"use client";

import HeroSlider from "@/components/HeroSlider";
import Section from "@/components/Section";
import { AnimatedButton } from "@/components/ui/animated-button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Wildlife Photographer",
    company: "UK",
    testimonial:
      "An absolutely incredible experience! The Great Migration in Masai Mara was breathtaking, and our guide was knowledgeable and passionate about wildlife conservation. Timobo made our dream safari a reality.",
  },
  {
    id: 2,
    name: "Michael Chen", 
    designation: "CEO",
    company: "Tech Solutions Inc.",
    testimonial:
      "Our corporate retreat in Tanzania was flawlessly organized. The team handled every detail with professionalism, from airport transfers to luxury accommodations. Our team came back inspired and rejuvenated.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    designation: "Adventure Traveler", 
    company: "Spain",
    testimonial:
      "The gorilla trekking experience in Rwanda was life-changing. Coming face-to-face with these magnificent creatures in their natural habitat was emotional and unforgettable. Thank you for this incredible journey.",
  },
  {
    id: 4,
    name: "David Thompson",
    designation: "Conservation Photographer",
    company: "National Geographic",
    testimonial:
      "Timobo's commitment to conservation shines through every aspect of their tours. The elephant safari in Amboseli was not just beautiful, but educational and meaningful. They truly care about protecting Africa's wildlife.",
  },
  {
    id: 5,
    name: "Lisa Williams",
    designation: "Travel Blogger",
    company: "Wanderlust Adventures",
    testimonial:
      "The best investment we've made for our content! The Okavango Delta experience was magical - gliding through waterways in traditional mokoros while elephants bathed nearby. Timobo exceeded all expectations.",
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => (
  <div className="mb-8 bg-white border border-stone-200 rounded-xl py-8 px-6 sm:py-6 shadow-sm">
    <div className="flex items-center justify-between gap-20">
      <div className="hidden lg:block relative shrink-0 aspect-3/4 max-w-[18rem] w-full bg-stone-50 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1869&q=80"
          alt="Safari testimonial"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/4 right-0 translate-x-1/2 h-12 w-12 bg-amber-500 rounded-full flex items-center justify-center">
          <svg
            width="102"
            height="102"
            viewBox="0 0 102 102"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
          >
            <path
              d="M26.0063 19.8917C30.0826 19.8625 33.7081 20.9066 36.8826 23.024C40.057 25.1414 42.5746 28.0279 44.4353 31.6835C46.2959 35.339 47.2423 39.4088 47.2744 43.8927C47.327 51.2301 44.9837 58.4318 40.2444 65.4978C35.4039 72.6664 28.5671 78.5755 19.734 83.2249L2.54766 74.1759C8.33598 71.2808 13.2548 67.9334 17.3041 64.1335C21.2515 60.3344 23.9203 55.8821 25.3105 50.7765C20.5179 50.4031 16.6348 48.9532 13.6612 46.4267C10.5864 44.0028 9.03329 40.5999 9.00188 36.2178C8.97047 31.8358 10.5227 28.0029 13.6584 24.7192C16.693 21.5381 20.809 19.9289 26.0063 19.8917ZM77.0623 19.5257C81.1387 19.4965 84.7641 20.5406 87.9386 22.6581C91.1131 24.7755 93.6306 27.662 95.4913 31.3175C97.3519 34.9731 98.2983 39.0428 98.3304 43.5268C98.383 50.8642 96.0397 58.0659 91.3004 65.1319C86.4599 72.3005 79.6231 78.2095 70.79 82.859L53.6037 73.8099C59.392 70.9149 64.3108 67.5674 68.3601 63.7676C72.3075 59.9685 74.9763 55.5161 76.3665 50.4105C71.5739 50.0372 67.6908 48.5873 64.7172 46.0608C61.6424 43.6369 60.0893 40.2339 60.0579 35.8519C60.0265 31.4698 61.5787 27.6369 64.7145 24.3532C67.7491 21.1722 71.865 19.563 77.0623 19.5257Z"
              className="fill-white"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between gap-1">
          <div className="hidden sm:flex md:hidden items-center gap-4">
            <Avatar className="w-8 h-8 md:w-10 md:h-10">
              <AvatarFallback className="text-xl font-medium bg-amber-500 text-white">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-sofia-pro-bold text-lg">{testimonial.name}</p>
              <p className="font-sofia-pro text-sm text-stone-600">{testimonial.designation}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-5 h-5 fill-amber-500 stroke-amber-500" />
            ))}
          </div>
        </div>
        <p className="font-sofia-pro mt-6 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium tracking-tight text-stone-700">
          {testimonial.testimonial}
        </p>
        <div className="flex sm:hidden md:flex mt-6 items-center gap-4">
          <Avatar>
            <AvatarFallback className="text-xl font-medium bg-amber-500 text-white">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-sofia-pro-bold text-lg">{testimonial.name}</p>
            <p className="font-sofia-pro text-sm text-muted-foreground">{testimonial.designation}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default function HomePage() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  const heroSlides = [
    {
      id: "masai-mara",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      title: "Masai Mara Expeditions",
      subtitle: "Witness the Great Migration",
      description: "Experience Kenya's premier wildlife destination with over 1.5 million wildebeest, zebras, and gazelles during the annual Great Migration."
    },
    {
      id: "serengeti",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Serengeti Safari Adventures",
      subtitle: "Tanzania's Crown Jewel",
      description: "Discover endless plains teeming with wildlife in Tanzania's most famous national park, home to Africa's Big Five."
    },
    {
      id: "gorilla-tracking",
      image: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
      title: "Mountain Gorilla Encounters",
      subtitle: "Rwanda & Uganda Adventures",
      description: "Come face-to-face with endangered mountain gorillas in the misty forests of Volcanoes National Park and Bwindi Impenetrable Forest."
    },
    {
      id: "okavango",
      image: "https://images.unsplash.com/photo-1551375073-4a96641d4d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Okavango Delta Explorations",
      subtitle: "Botswana's Water Wilderness",
      description: "Navigate the pristine waterways of the world's largest inland delta, where elephants wade through crystal-clear channels."
    }
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSlider slides={heroSlides} />


      <Section className="py-16 lg:py-24 lg:flex lg:items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="font-sofia-pro text-base lg:text-lg text-stone-700 mb-6 leading-relaxed">
                At Timobo Safaris Ltd, we&apos;ve spent over 18 years designing exceptional journeys across Africa. Our expertise lies in planning, coordinating, and executing tailor-made safaris and special-interest tours, as well as seamless MICE solutions for corporate clients across Eastern and Southern Africa.
              </p>
              <p className="font-sofia-pro text-base lg:text-lg text-stone-700 mb-6 lg:mb-6 leading-relaxed">
                We are more than a safari company – we are travel designers and event specialists committed to creating journeys that connect people with nature, culture, and community ensuring Experiences of Africa to all our clients. With nearly two decades of experience, we have mastered the art of planning and executing tailor-made safaris while supporting purpose-driven travel that promotes wildlife conservation, cultural preservation, and community empowerment.
              </p>
              
              {/* Mobile Image - shows between paragraphs on mobile only */}
              <div className="lg:hidden mb-6">
                <div className="relative aspect-[4/3] bg-stone-50 overflow-hidden">
                  <img
                    src="/safari-portrait.jpg"
                    alt="Portrait of safari guide with wildlife"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <p className="font-sofia-pro text-base lg:text-lg text-stone-700 leading-relaxed">
                Our journeys are designed for passionate travelers seeking authentic experiences, wildlife enthusiasts and conservationists, professional photographers and content creators, adventure lovers and special interest groups, as well as global brands and corporate clients looking for seamless MICE solutions in Africa.
              </p>
            </div>
            
            {/* Desktop Image - shows on right side for desktop only */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="relative aspect-[3/4] bg-stone-50 overflow-hidden">
                <img
                  src="/safari-portrait.jpg"
                  alt="Portrait of safari guide with wildlife"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-stone-50 lg:flex lg:items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="font-freight-display-pro text-2xl sm:text-3xl lg:text-4xl text-stone-800 leading-tight max-w-4xl mx-auto text-center">
              At Timobo Safaris Ltd, we specialize in creating unforgettable journeys and corporate travel solutions across Africa. With over 18 years of expertise, we craft <span className="underline decoration-amber-500 decoration-2 underline-offset-4">tailor-made safaris</span>, <span className="underline decoration-amber-500 decoration-2 underline-offset-4">exotic holidays</span>, <span className="underline decoration-amber-500 decoration-2 underline-offset-4">adventure trips</span>, and world-class <span className="underline decoration-amber-500 decoration-2 underline-offset-4">MICE experiences</span>.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Safari Experiences */}
            <div className="space-y-6">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Wildlife safari experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">Safari Experiences</h3>
                <p className="font-sofia-pro text-stone-700 mb-4">
                  Step into the wild with custom-designed safari itineraries that connect you to Africa&apos;s most iconic destinations. From luxury lodge stays to cultural encounters and conservation experiences.
                </p>
                <ul className="font-sofia-pro text-sm text-stone-600 space-y-2">
                  <li>• Wildlife & Cultural Safaris</li>
                  <li>• Beach & Bush Combos</li>
                  <li>• Photography & Conservation Tours</li>
                  <li>• Luxury & Specialized Safaris</li>
                </ul>
              </div>
            </div>

            {/* Adventure Travel */}
            <div className="space-y-6">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                  alt="Adventure travel in Africa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">Adventure Travel</h3>
                <p className="font-sofia-pro text-stone-700 mb-4">
                  For explorers seeking raw, authentic experiences, our adventure packages take you off the beaten path to discover Africa&apos;s hidden gems.
                </p>
                <ul className="font-sofia-pro text-sm text-stone-600 space-y-2">
                  <li>• Northern Kenya Expeditions</li>
                  <li>• Ethiopia Cultural Discoveries</li>
                  <li>• Gorilla & Chimpanzee Treks</li>
                  <li>• Southern Tanzania Wilderness</li>
                </ul>
              </div>
            </div>

            {/* MICE Solutions */}
            <div className="space-y-6">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Corporate meetings and events in Africa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-sofia-pro-bold text-xl mb-4 text-stone-800">MICE Solutions</h3>
                <p className="font-sofia-pro text-stone-700 mb-4">
                  Professional, end-to-end MICE services across Eastern and Southern Africa, ensuring stress-free event planning and flawless execution.
                </p>
                <ul className="font-sofia-pro text-sm text-stone-600 space-y-2">
                  <li>• Corporate Conferences & Meetings</li>
                  <li>• Workshops & Training Programs</li>
                  <li>• Incentive Travel Packages</li>
                  <li>• Special Events & Entertainment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-stone-800 text-white lg:flex lg:items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-freight-display-pro">
                Discover Eastern & Southern Africa
              </h2>
              <p className="font-sofia-pro text-lg text-stone-300 mb-6">
                Kenya is home to the world-famous Maasai Mara, where the awe-inspiring Great Wildebeest Migration takes center stage each year. Explore Amboseli, renowned for its large-tusked elephants and stunning views of Mount Kilimanjaro.
              </p>
              <p className="font-sofia-pro text-lg text-muted-foreground mb-8">
                From the vast plains of the Maasai Mara to Tanzania&apos;s Serengeti, Rwanda&apos;s mountain gorillas, and Botswana&apos;s Okavango Delta - we craft journeys to Africa&apos;s most iconic destinations.
              </p>
              <AnimatedButton asChild variant="primary" size="lg">
                <Link href="/destinations">
                  Explore All Destinations
                </Link>
              </AnimatedButton>
            </div>
            <div className="grid grid-cols-2 gap-4 aspect-[4/3] lg:aspect-[3/2]">
              {/* Large image - spans full height */}
              <div className="relative bg-stone-50 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80"
                  alt="African wildlife in their natural habitat"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Right side - 2 stacked images */}
              <div className="grid grid-rows-2 gap-4">
                <div className="relative bg-stone-50 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="Safari landscape with acacia trees"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative bg-stone-50 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Mountain gorilla in Rwanda"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-background">
        <div className="w-full">
          <h2 className="font-freight-display-pro text-3xl sm:text-4xl lg:text-5xl font-semibold text-center tracking-[-0.03em] text-stone-800">
            What Our Travelers Say
          </h2>
          <p className="font-sofia-pro mt-3 text-center text-stone-700 text-lg lg:text-xl">
            Discover why travelers choose Timobo Safaris for their African adventures
          </p>
          <div className="mt-12 lg:mt-16 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <Carousel setApi={setApi}>
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <TestimonialCard testimonial={testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex items-center justify-center gap-2 mt-8">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={cn("h-3.5 w-3.5 rounded-full border-2 transition-colors", {
                    "bg-amber-500 border-amber-500": current === index + 1,
                    "border-stone-600 hover:border-stone-800": current !== index + 1,
                  })}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-16 lg:py-24 bg-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-screen-xl">
          <h2 className="text-3xl font-bold mb-8 text-stone-800">
            Ready for Your African Adventure?
          </h2>
          <p className="text-base lg:text-lg text-stone-700 mb-8 max-w-2xl mx-auto">
            Let us craft your perfect African adventure with our 18+ years of expertise in safari planning and MICE solutions across Eastern and Southern Africa.
          </p>
          <AnimatedButton asChild variant="secondary" size="xl">
            <Link href="/contact">
              Start Planning Your Journey
            </Link>
          </AnimatedButton>
        </div>
      </Section>
    </main>
  );
}