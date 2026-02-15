export const personalInfo = {
  name: "Alex Morgan",
  title: "Creative Marketing Strategist",
  tagline: "Crafting stories that move people and brands forward",
  email: "alex@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/alexmorgan",
  location: "Los Angeles, CA",
  resumeUrl: "/resume.pdf",
  avatar: "/headshot.jpg",
}

export const aboutMe = {
  bio: `I'm a multidisciplinary creative professional with over 8 years of experience in marketing, visual storytelling, and brand strategy. My work sits at the intersection of creativity and data—where compelling narratives meet measurable results.

I've had the privilege of working with brands ranging from scrappy startups to Fortune 500 companies, helping them find their voice and connect authentically with their audiences. Whether I'm behind a camera, in front of a whiteboard, or deep in analytics, I approach every project with the same goal: creating work that resonates.

When I'm not crafting campaigns, you'll find me exploring local coffee shops, shooting street photography, or getting lost in a good documentary.`,
  languages: ["English (Native)", "Spanish (Fluent)", "French (Conversational)"],
  hobbies: ["Street Photography", "Documentary Films", "Coffee Tasting", "Hiking", "Vintage Vinyl"],
}

export const skills = [
  {
    category: "Marketing & Strategy",
    items: ["Brand Strategy", "Campaign Development", "Market Research", "Content Marketing", "SEO/SEM", "Email Marketing"],
  },
  {
    category: "Creative Production",
    items: ["Photography", "Video Production", "Photo Editing", "Motion Graphics", "Art Direction", "Storyboarding"],
  },
  {
    category: "Design & Tools",
    items: ["Adobe Creative Suite", "Figma", "DaVinci Resolve", "Lightroom", "After Effects", "Premiere Pro"],
  },
  {
    category: "Analytics & Platforms",
    items: ["Google Analytics", "Meta Business Suite", "Hootsuite", "Mailchimp", "HubSpot", "Sprout Social"],
  },
  {
    category: "testing",
    items: ["hey"]
  }
]

export type ExperienceField = "marketing" | "design" | "media" | "all"

export interface Experience {
  id: string
  role: string
  organization: string
  startDate: string
  endDate: string
  description: string
  field: ExperienceField
  skills: string[]
}

export const experiences: Experience[] = [
  {
    id: "1",
    role: "Senior Marketing Manager",
    organization: "Horizon Creative Agency",
    startDate: "2022",
    endDate: "Present",
    description: "Lead integrated marketing campaigns for Fortune 500 clients, managing cross-functional teams of 12+ creatives. Increased client retention by 40% through strategic brand storytelling initiatives.",
    field: "marketing",
    skills: ["Brand Strategy", "Team Leadership", "Campaign Management"],
  },
  {
    id: "2",
    role: "Creative Director",
    organization: "Pulse Digital Studio",
    startDate: "2020",
    endDate: "2022",
    description: "Directed visual identity and campaign creative for tech startups and lifestyle brands. Oversaw production of 50+ video campaigns with combined reach of 10M+ views.",
    field: "design",
    skills: ["Art Direction", "Visual Identity", "Video Production"],
  },
  {
    id: "3",
    role: "Brand Strategist",
    organization: "NorthStar Consulting",
    startDate: "2018",
    endDate: "2020",
    description: "Developed comprehensive brand strategies for emerging companies, including positioning, messaging, and go-to-market plans. Successfully launched 15+ brands into competitive markets.",
    field: "marketing",
    skills: ["Brand Positioning", "Market Research", "Go-to-Market Strategy"],
  },
  {
    id: "4",
    role: "Video Producer & Editor",
    organization: "Freelance",
    startDate: "2016",
    endDate: "2018",
    description: "Produced documentary-style brand films, commercials, and social content for diverse clients. Managed end-to-end production from concept development to final delivery.",
    field: "media",
    skills: ["Video Production", "Editing", "Documentary Filmmaking"],
  },
  {
    id: "5",
    role: "Marketing Coordinator",
    organization: "Ember & Co",
    startDate: "2014",
    endDate: "2016",
    description: "Coordinated multi-channel marketing initiatives, managed social media presence, and produced content for email campaigns with 25%+ open rates.",
    field: "marketing",
    skills: ["Social Media", "Email Marketing", "Content Creation"],
  },
]

export type ProjectCategory = "photo" | "video" | "graphics" | "campaign" | "all"

export interface Project {
  id: string
  title: string
  description: string
  category: ProjectCategory
  thumbnail: string
  images?: string[]
  videoUrl?: string
  client?: string
  year: string
  tags: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Wanderlust Collection",
    description: "A curated photography series capturing the essence of Pacific Northwest landscapes. Shot over 6 months exploring remote locations from coastal cliffs to alpine meadows.",
    category: "photo",
    thumbnail: "/projects/wanderlust-thumb.jpg",
    images: ["/projects/wanderlust-1.jpg", "/projects/wanderlust-2.jpg", "/projects/wanderlust-3.jpg"],
    year: "2024",
    tags: ["Landscape", "Nature", "Editorial"],
    featured: true,
  },
  {
    id: "2",
    title: "Urban Pulse Documentary",
    description: "A short documentary exploring the revival of downtown arts districts in post-pandemic cities. Featured interviews with local artists, business owners, and urban planners.",
    category: "video",
    thumbnail: "/projects/urban-pulse-thumb.jpg",
    videoUrl: "https://vimeo.com/example",
    client: "City Arts Commission",
    year: "2024",
    tags: ["Documentary", "Urban", "Culture"],
    featured: true,
  },
  {
    id: "3",
    title: "Brew & Bond Rebrand",
    description: "Complete visual identity redesign for a craft coffee roaster, including logo, packaging, and environmental graphics for their flagship cafe.",
    category: "graphics",
    thumbnail: "/projects/brew-bond-thumb.jpg",
    images: ["/projects/brew-bond-1.jpg", "/projects/brew-bond-2.jpg"],
    client: "Brew & Bond Coffee",
    year: "2023",
    tags: ["Branding", "Packaging", "Identity"],
    featured: true,
  },
  {
    id: "4",
    title: "Summer of Discovery",
    description: "An integrated marketing campaign for a national outdoor retailer, spanning digital ads, social content, email sequences, and in-store displays. Achieved 3.2M impressions and 28% lift in seasonal sales.",
    category: "campaign",
    thumbnail: "/projects/discovery-thumb.jpg",
    images: ["/projects/discovery-1.jpg", "/projects/discovery-2.jpg", "/projects/discovery-3.jpg"],
    client: "TrailBlazer Outdoor Co",
    year: "2023",
    tags: ["Integrated Campaign", "Retail", "Digital Marketing"],
    featured: true,
  },
  {
    id: "5",
    title: "Portrait Series: Makers",
    description: "An ongoing portrait project documenting craftspeople and artisans in their workshops. Each session captures the intimate relationship between maker and craft.",
    category: "photo",
    thumbnail: "/projects/makers-thumb.jpg",
    images: ["/projects/makers-1.jpg", "/projects/makers-2.jpg"],
    year: "2023",
    tags: ["Portrait", "Documentary", "Editorial"],
  },
  {
    id: "6",
    title: "Product Launch Film",
    description: "A cinematic product reveal video for a sustainable fashion brand's new collection, blending lifestyle footage with product close-ups.",
    category: "video",
    thumbnail: "/projects/launch-film-thumb.jpg",
    videoUrl: "https://vimeo.com/example2",
    client: "Verdant Apparel",
    year: "2023",
    tags: ["Commercial", "Fashion", "Product"],
  },
  {
    id: "7",
    title: "Festival Identity System",
    description: "Created the complete visual system for an annual music festival, including posters, wayfinding, digital assets, and merchandise.",
    category: "graphics",
    thumbnail: "/projects/festival-thumb.jpg",
    images: ["/projects/festival-1.jpg", "/projects/festival-2.jpg"],
    client: "SoundWave Festival",
    year: "2022",
    tags: ["Event Branding", "Print", "Environmental"],
  },
  {
    id: "8",
    title: "Health & Wellness App Launch",
    description: "Multi-platform launch campaign for a meditation app, including video content, social strategy, influencer partnerships, and performance marketing.",
    category: "campaign",
    thumbnail: "/projects/wellness-thumb.jpg",
    images: ["/projects/wellness-1.jpg", "/projects/wellness-2.jpg"],
    client: "Mindful Moments",
    year: "2022",
    tags: ["App Launch", "Digital Campaign", "Social Media"],
  },
]

export const navLinks = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]
