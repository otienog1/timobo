export type SearchItem = {
  title: string
  description: string
  image: string
  href: string
  category: "Destination" | "Service"
  keywords: string[]
}

export const searchData: SearchItem[] = [
  // ── Destinations ─────────────────────────────────────────────
  {
    title: "Kenya",
    category: "Destination",
    description: "Home to the Maasai Mara, the Great Wildebeest Migration, and Amboseli with its iconic views of Kilimanjaro.",
    image: "/images/destinations/destination-kenya.jpg",
    href: "/destinations/kenya",
    keywords: ["maasai mara", "amboseli", "kilimanjaro", "migration", "big five", "nairobi", "eastern africa"],
  },
  {
    title: "Tanzania",
    category: "Destination",
    description: "Serengeti plains, Ngorongoro Crater, Tarangire, and the spice-scented shores of Zanzibar.",
    image: "/images/destinations/destination-tanzania.jpg",
    href: "/destinations/tanzania",
    keywords: ["serengeti", "ngorongoro", "zanzibar", "kilimanjaro", "tarangire", "eastern africa"],
  },
  {
    title: "Rwanda",
    category: "Destination",
    description: "Trek endangered mountain gorillas in Volcanoes National Park and explore the tranquil beauty of Lake Kivu.",
    image: "/images/destinations/destination-rwanda.jpg",
    href: "/destinations/rwanda",
    keywords: ["gorilla", "volcanoes", "lake kivu", "kigali", "trekking", "eastern africa"],
  },
  {
    title: "Uganda",
    category: "Destination",
    description: "Gorilla trekking in Bwindi, chimpanzee tracking in Kibale, and legendary Nile River cruises.",
    image: "/images/destinations/destination-uganda.jpg",
    href: "/destinations/uganda",
    keywords: ["gorilla", "bwindi", "chimpanzee", "kibale", "nile", "eastern africa"],
  },
  {
    title: "Ethiopia",
    category: "Destination",
    description: "Ancient rock-hewn churches of Lalibela, the surreal Danakil Depression, and Simien Mountains treks.",
    image: "/images/destinations/destination-ethiopia.jpg",
    href: "/destinations/ethiopia",
    keywords: ["lalibela", "danakil", "simien", "addis ababa", "history", "culture", "eastern africa"],
  },
  {
    title: "South Africa",
    category: "Destination",
    description: "Thrilling Big Five safaris in Kruger alongside vibrant Cape Town and world-class Cape Winelands.",
    image: "/images/destinations/destination-southern-africa.jpg",
    href: "/destinations/south-africa-and-cape-town",
    keywords: ["kruger", "cape town", "table mountain", "winelands", "big five", "southern africa"],
  },
  {
    title: "Zimbabwe",
    category: "Destination",
    description: "Majestic Victoria Falls, dramatic landscapes, and abundant wildlife in Hwange National Park.",
    image: "/images/destinations/destination-zimbabwe.jpg",
    href: "/destinations/zimbabwe",
    keywords: ["victoria falls", "hwange", "zambezi", "southern africa"],
  },
  {
    title: "Zambia",
    category: "Destination",
    description: "Famous for walking safaris, Victoria Falls, and pristine wilderness in South Luangwa.",
    image: "/images/destinations/destination-zambia.jpg",
    href: "/destinations/zambia",
    keywords: ["victoria falls", "south luangwa", "walking safari", "zambezi", "southern africa"],
  },
  {
    title: "Botswana",
    category: "Destination",
    description: "The wildlife-rich Okavango Delta and great elephant herds of Chobe National Park.",
    image: "/images/destinations/destination-botswana.jpg",
    href: "/destinations/botswana",
    keywords: ["okavango", "chobe", "elephant", "delta", "mokoro", "southern africa"],
  },
  {
    title: "Namibia",
    category: "Destination",
    description: "Towering red dunes of Sossusvlei, the Skeleton Coast, and rare desert-adapted wildlife.",
    image: "/images/destinations/destination-namibia.jpg",
    href: "/destinations/namibia",
    keywords: ["sossusvlei", "skeleton coast", "desert", "dunes", "etosha", "southern africa"],
  },

  // ── Services ──────────────────────────────────────────────────
  {
    title: "Safari Experiences",
    category: "Service",
    description: "Custom-designed itineraries from luxury lodge stays and wildlife encounters to photography tours and conservation experiences.",
    image: "/images/services/service-safari-experiences.jpg",
    href: "/services/safari-experiences",
    keywords: ["wildlife", "lodge", "photography", "conservation", "big five", "luxury"],
  },
  {
    title: "Adventure Travel",
    category: "Service",
    description: "Off-the-beaten-path expeditions — gorilla treks, cultural discoveries, and wilderness journeys for the true explorer.",
    image: "/images/services/service-adventure-travel.jpg",
    href: "/services/adventure-travel",
    keywords: ["gorilla", "trekking", "expedition", "remote", "explore", "cultural"],
  },
  {
    title: "MICE Solutions",
    category: "Service",
    description: "End-to-end corporate event services — conferences, incentive travel, workshops, and special events across Africa.",
    image: "/images/services/service-mice-solutions.jpg",
    href: "/services/mice-solutions",
    keywords: ["corporate", "conference", "incentive", "meetings", "events", "business", "mice"],
  },
  {
    title: "Holiday Getaways",
    category: "Service",
    description: "Luxury holidays perfect for honeymoons, family escapes, and romantic retreats across Africa's most beautiful destinations.",
    image: "/images/services/service-holiday-getaways.jpg",
    href: "/services/holiday-getaways",
    keywords: ["honeymoon", "family", "luxury", "beach", "holiday", "romantic", "resort"],
  },
  {
    title: "Transport Solutions",
    category: "Service",
    description: "Reliable transport throughout your African journey — airport pickups, safari game drives, and inter-lodge transfers.",
    image: "/images/services/service-transport-solutions.jpg",
    href: "/services/transport-solutions",
    keywords: ["transfer", "airport", "game drive", "vehicle", "logistics", "transport"],
  },
  {
    title: "Outbound Travel",
    category: "Service",
    description: "International travel services — flights, visas, insurance, and expert guidance for destinations worldwide.",
    image: "/images/services/services-hero.jpg",
    href: "/services/outbound-travel",
    keywords: ["flights", "visa", "insurance", "international", "worldwide", "outbound"],
  },
]
