import fs from "fs";
import path from "path";

export interface DestinationItinerary {
  day: number;
  description: string;
}

export interface Destination {
  name: string;
  tagline: string;
  description: string;
  sampleItinerary: string;
  attractions: string[];
  bestTimeToVisit: string[];
  itinerary?: {
    name: string;
    days: string[];
  };
}

export interface AboutSection {
  story: string;
  expertise: string[];
  clients: string[];
  mission: string;
  vision: string;
  values: Record<string, string>;
  impact: string[];
}

export interface Service {
  category: string;
  title: string;
  description: string;
  options: string[];
}

export interface ContactInfo {
  heading: string;
  shortText: string;
  details: string;
}

export interface SiteContent {
  home: {
    welcomeMessage: string;
    description: string;
    whyChoose: string[];
    callToAction: string;
  };
  destinations: {
    eastern: Destination[];
    southern: Destination[];
  };
  about: AboutSection;
  services: Service[];
  contact: ContactInfo;
}

export function getSiteContent(): SiteContent {
  const filePath = path.join(process.cwd(), "docs", "TSL_website_content_full.json");
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Content file not found at ${filePath}`);
  }
  
  const rawData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const sections = rawData.document_sections;
  
  // Parse the flat array structure into our structured format
  const content: SiteContent = {
    home: {
      welcomeMessage: sections[7] || "Welcome to Timobo Safaris Ltd",
      description: sections[8] || "",
      whyChoose: parseWhyChoose(sections[11]),
      callToAction: sections[12] || ""
    },
    destinations: {
      eastern: parseDestinations(sections, "eastern"),
      southern: parseDestinations(sections, "southern")
    },
    about: parseAboutSection(sections),
    services: parseServices(sections),
    contact: parseContact(sections)
  };

  return content;
}

function parseWhyChoose(text: string): string[] {
  if (!text) return [];
  return text.split('\n').filter(line => line.startsWith('✔')).map(line => line.substring(2).trim());
}

function parseDestinations(sections: string[], region: "eastern" | "southern"): Destination[] {
  const destinations: Destination[] = [];
  
  if (region === "eastern") {
    // Parse Kenya
    const kenyaIndex = sections.findIndex(s => s === "KENYA");
    if (kenyaIndex > -1) {
      destinations.push(parseDestination(sections, kenyaIndex, "KENYA"));
    }

    // Parse Tanzania (Northern)
    const tanzaniaIndex = sections.findIndex(s => s === "TANZANIA");
    if (tanzaniaIndex > -1) {
      destinations.push(parseDestination(sections, tanzaniaIndex, "TANZANIA"));
    }

    // Parse Southern Tanzania as separate destination
    const southernTanzaniaIndex = sections.findIndex(s => s.includes("Top Attractions & Experiences – Southern Tanzania"));
    if (southernTanzaniaIndex > -1) {
      destinations.push(parseSouthernTanzania(sections, southernTanzaniaIndex));
    }
    
    // Parse Rwanda
    const rwandaIndex = sections.findIndex(s => s === "RWANDA");
    if (rwandaIndex > -1) {
      destinations.push(parseDestination(sections, rwandaIndex, "RWANDA"));
    }
    
    // Parse Uganda
    const ugandaIndex = sections.findIndex(s => s === "UGANDA");
    if (ugandaIndex > -1) {
      destinations.push(parseDestination(sections, ugandaIndex, "UGANDA"));
    }
    
    // Parse Ethiopia
    const ethiopiaIndex = sections.findIndex(s => s === "ETHIOPIA");
    if (ethiopiaIndex > -1) {
      destinations.push(parseDestination(sections, ethiopiaIndex, "ETHIOPIA"));
    }
  }
  
  if (region === "southern") {
    // Parse South Africa
    const southAfricaIndex = sections.findIndex(s => s === "SOUTH AFRICA & CAPE TOWN");
    if (southAfricaIndex > -1) {
      destinations.push(parseDestination(sections, southAfricaIndex, "SOUTH AFRICA & CAPE TOWN"));
    }
    
    // Parse Zimbabwe
    const zimbabweIndex = sections.findIndex(s => s === "ZIMBABWE");
    if (zimbabweIndex > -1) {
      destinations.push(parseDestination(sections, zimbabweIndex, "ZIMBABWE"));
    }
    
    // Parse Zambia
    const zambiaIndex = sections.findIndex(s => s === "ZAMBIA");
    if (zambiaIndex > -1) {
      destinations.push(parseDestination(sections, zambiaIndex, "ZAMBIA"));
    }
    
    // Parse Botswana
    const botswanaIndex = sections.findIndex(s => s === "BOTSWANA");
    if (botswanaIndex > -1) {
      destinations.push(parseDestination(sections, botswanaIndex, "BOTSWANA"));
    }
    
    // Parse Namibia
    const namibiaIndex = sections.findIndex(s => s === "NAMIBIA");
    if (namibiaIndex > -1) {
      destinations.push(parseDestination(sections, namibiaIndex, "NAMIBIA"));
    }
  }
  
  return destinations;
}

function parseSouthernTanzania(sections: string[], attractionsIndex: number): Destination {
  const name = "Southern Tanzania";
  const tagline = "Wild beauty meets Island paradise – from the highest peak to endless plains and spice-scented shores.";
  const description = "Discover the untamed wilderness of Southern Tanzania, featuring Africa's largest wild sanctuary in Nyerere National Park (formerly Selous), the remote and spectacular Ruaha National Park, the best-kept safari secret of Katavi National Park, and the chimpanzee haven of Mahale Mountains National Park on the shores of Lake Tanganyika.";
  const sampleItinerary = "Southern Tanzania boasts legendary wilderness areas and hidden gems, offering some of Africa's most authentic and remote safari experiences away from the crowds.";

  // Parse attractions for Southern Tanzania
  const attractions: string[] = [
    "Selous Game Reserve (Nyerere National Park) – Africa's largest wild sanctuary, endless wilderness and river adventures.",
    "Ruaha National Park – Tanzania's untamed heart where giants roam the wilderness.",
    "Katavi National Park – Africa's best-kept safari secret, raw, remote and remarkable.",
    "Mahale Mountains National Park – Chimpanzees by the shores of Tanganyika, the Africa's deepest lake."
  ];

  // Best time to visit for Southern Tanzania
  const bestTimeToVisit: string[] = [
    "January to February – short dry months best for wildlife viewing and animal calving",
    "June to October – Dry months characterized by minimal rainfall hence best time for wildlife viewing as animals gather around water sources"
  ];

  // Parse the 14-day itinerary
  const itineraryStart = sections.findIndex(s => s.includes("14 – Days Untamed Wilderness Safari"));
  let itinerary: { name: string; days: string[] } | undefined;

  if (itineraryStart > -1) {
    const itineraryName = sections[itineraryStart];
    const days: string[] = [];

    for (let i = itineraryStart + 1; i < sections.length; i++) {
      const section = sections[i];
      if (section.startsWith("Day ")) {
        days.push(section);
      } else if (section.length > 0 && !section.startsWith("Day ") && !section.includes("RWANDA")) {
        break;
      }
    }

    itinerary = { name: itineraryName, days };
  }

  return {
    name,
    tagline,
    description,
    sampleItinerary,
    attractions,
    bestTimeToVisit,
    itinerary
  };
}

function parseDestination(sections: string[], startIndex: number, name: string): Destination {
  const tagline = sections[startIndex + 1] || "";
  const description = sections[startIndex + 2] || "";
  const sampleItinerary = sections[startIndex + 3] || "";
  
  // Find attractions section
  const attractionsStart = sections.findIndex((s, i) => i > startIndex && s.includes("Top Attractions"));
  const attractions: string[] = [];
  if (attractionsStart > -1) {
    for (let i = attractionsStart + 1; i < sections.length; i++) {
      const section = sections[i];
      if (section.includes("Best Time to Visit") || section.includes("–")) {
        break;
      }
      if (section.includes("–") || section.includes("-")) {
        attractions.push(section);
      }
    }
  }
  
  // Find best time to visit
  const bestTimeStart = sections.findIndex((s, i) => i > startIndex && s.includes("Best Time to Visit"));
  const bestTimeToVisit: string[] = [];
  if (bestTimeStart > -1) {
    for (let i = bestTimeStart + 1; i < sections.length; i++) {
      const section = sections[i];
      if (section.includes("Days") || section.includes(":")) {
        break;
      }
      if (section.includes("–") || section.includes("-")) {
        bestTimeToVisit.push(section);
      }
    }
  }
  
  // Find itinerary
  const itineraryStart = sections.findIndex((s, i) => i > startIndex && s.includes("Days"));
  let itinerary: { name: string; days: string[] } | undefined;
  
  if (itineraryStart > -1) {
    const itineraryName = sections[itineraryStart];
    const days: string[] = [];
    
    for (let i = itineraryStart + 1; i < sections.length; i++) {
      const section = sections[i];
      if (section.startsWith("Day ")) {
        days.push(section);
      } else if (section.length > 0 && !section.startsWith("Day ")) {
        break;
      }
    }
    
    itinerary = { name: itineraryName, days };
  }
  
  return {
    name,
    tagline,
    description,
    sampleItinerary,
    attractions,
    bestTimeToVisit,
    itinerary
  };
}

function parseAboutSection(sections: string[]): AboutSection {
  const aboutIndex = sections.findIndex(s => s === "WHO WE ARE | ABOUT US");
  
  return {
    story: sections[269] || "",
    expertise: parseListItems(sections[272]),
    clients: parseListItems(sections[277]),
    mission: sections[284] || "",
    vision: sections[286] || "",
    values: parseValues(sections.slice(288, 294)),
    impact: parseListItems(sections[294])
  };
}

function parseListItems(text: string): string[] {
  if (!text) return [];
  return text.split('\n').filter(line => line.trim().length > 0);
}

function parseValues(valuesSections: string[]): Record<string, string> {
  const values: Record<string, string> = {};
  
  valuesSections.forEach(section => {
    if (section.includes("–")) {
      const [key, value] = section.split("–").map(s => s.trim());
      if (key && value) {
        values[key] = value;
      }
    }
  });
  
  return values;
}

function parseServices(sections: string[]): Service[] {
  const servicesIndex = sections.findIndex(s => s === "SERVICES | WHAT WE OFFER");
  
  return [
    {
      category: "Safari Experiences",
      title: "Authentic Journeys into Africa's Wilderness",
      description: sections[333] || "",
      options: parseListItems(sections[334])
    },
    {
      category: "Adventure Travel",
      title: "Beyond the Ordinary",
      description: sections[342] || "",
      options: parseListItems(sections[344])
    },
    {
      category: "Holiday Getaways",
      title: "Exotic African Escapes",
      description: sections[349] || "",
      options: parseListItems(sections[351])
    },
    {
      category: "MICE Solutions",
      title: "Meetings, Incentives, Conferences & Events",
      description: sections[355] || "",
      options: parseListItems(sections[357])
    },
    {
      category: "Transport Solutions",
      title: "Safe, Reliable & Comfortable",
      description: sections[362] || "",
      options: parseListItems(sections[363])
    },
    {
      category: "Outbound Travel",
      title: "Your Gateway to the World",
      description: sections[367] || "",
      options: parseListItems(sections[368])
    }
  ];
}

function parseContact(sections: string[]): ContactInfo {
  const contactIndex = sections.findIndex(s => s === "Contact Section");
  
  return {
    heading: sections[375] || "Get in Touch",
    shortText: sections[376] || "",
    details: sections[377] || ""
  };
}

// Helper function to get destination by name
export function getDestinationBySlug(slug: string): Destination | undefined {
  const content = getSiteContent();
  const allDestinations = [...content.destinations.eastern, ...content.destinations.southern];
  
  return allDestinations.find(dest => 
    dest.name.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and') === slug.toLowerCase()
  );
}

// Helper function to get all destination slugs for static generation
export function getDestinationSlugs(): string[] {
  const content = getSiteContent();
  const allDestinations = [...content.destinations.eastern, ...content.destinations.southern];
  
  return allDestinations.map(dest => 
    dest.name.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and')
  );
}