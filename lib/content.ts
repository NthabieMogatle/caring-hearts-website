// All site copy and structured content lives here so non-engineers can edit
// without touching component code.

export const site = {
  brand: "Caring Hearts Assisted Living",
  wordmark: { line1: "CARING HEARTS", line2: "ASSISTED LIVING" },
  tagline: "Compassionate Care. Safe Living. Dignified Life.",
  heroLine: "A Place to Call Home.",
  phone: "860.930.1305",
  phoneHref: "tel:+18609301305",
  email: "maqubelaanelisa28@icloud.com",
  emailHref: "mailto:maqubelaanelisa28@icloud.com",
  city: "Hartford, CT",
  address: "Hartford, Connecticut",
  hours: [
    { label: "Tours & Visits — Weekdays", value: "Mon – Fri, 9:00 AM – 5:00 PM" },
    { label: "Tours & Visits — Saturday", value: "Sat, 9:00 AM – 3:00 PM" },
    { label: "Resident Care", value: "24 hours a day, 7 days a week" },
  ],
  // Address line shown in the footer next to the copyright. The actual state
  // license number can be added here once it's issued.
  license: "Hartford, Connecticut",
  // Add { name, href } entries here when social accounts go live — the footer
  // hides the social row entirely while this list is empty.
  socials: [] as { name: string; href: string }[],
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "/contact" },
];

// Unsplash CDN URL convention used throughout this file:
//   https://images.unsplash.com/photo-<PHOTO_ID>?w=<WIDTH>&q=<QUALITY>&auto=format&fit=crop
//
// Always pin to a specific PHOTO_ID (the long alphanumeric in the URL). Never
// use search-based or source.unsplash.com URLs — they can change without
// notice. If a photo's source is ever taken down, next/image will load the
// SafeImage fallback (soft tan/gold panel with the logo mark) automatically.

export const hero = {
  // https://unsplash.com/photos/IBaVuZsJJTo — caregiver and elderly resident,
  // hands in close-up. Unsplash license: free for commercial use.
  image:
    "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=2400&q=85&auto=format&fit=crop",
  alt: "A caregiver gently holding the hand of an elderly resident",
  primary: { label: "Schedule a Visit", href: "/contact" },
  secondary: { label: `Call ${site.phone}`, href: site.phoneHref },
};

export const intro = {
  heading: "Where Every Day Feels Like Home",
  script: "A Place to Call Home.",
  body: "At Caring Hearts Assisted Living, we provide a warm, home-like environment where residents receive personalized care, companionship, and support to live each day with comfort, dignity, and joy.",
};

export const promises = [
  {
    icon: "heart",
    title: "Compassionate Care",
    body: "Attentive, kind, and respectful care from a team that treats every resident like family.",
  },
  {
    icon: "home",
    title: "Safe & Comfortable Home",
    body: "A secure, welcoming environment designed for peace of mind, day and night.",
  },
  {
    icon: "person",
    title: "Personalized Support",
    body: "Care plans tailored to each resident's needs, preferences, and routines.",
  },
  {
    icon: "leaf",
    title: "Dignity & Respect Always",
    body: "Every interaction grounded in honoring the person and their life story.",
  },
] as const;

// Unsplash image references. All images depict older adults (65+) in care or
// companionship contexts. Source URLs documented in comments so licensing can
// be verified. Unsplash license: free for commercial use, no attribution required.
// https://unsplash.com/license

export const services = [
  {
    title: "Daily Living Assistance",
    body: "Gentle, dignified help with bathing, dressing, grooming, and mobility — always at the resident's pace.",
    // https://unsplash.com/photos/IBaVuZsJJTo — caregiver with senior, hands close-up
    image:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=1600&q=80&auto=format&fit=crop",
    alt: "A caregiver gently holding the hand of an elderly resident",
  },
  {
    title: "Medication Management & Wellness Checks",
    body: "Daily medication oversight and proactive wellness monitoring by trained staff, with clear records shared with the family.",
    // https://unsplash.com/photos/8manzosDSGM — elderly patient with caregiver
    image:
      "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1600&q=80&auto=format&fit=crop",
    alt: "A caregiver assisting an elderly woman with medication",
  },
  {
    title: "Nutritious Home-Cooked Meals",
    body: "Three thoughtful meals a day plus snacks — fresh, balanced, and tailored to dietary needs and personal preferences.",
    // Replaced 2026-05-12 (prior photo-1556909114 returned a broken image on
    // the live site). New photo: Anna Pelzer's widely-used salad bowl — one of
    // Unsplash's most-shared food photos. Fresh, nutritious, premium feel.
    // https://unsplash.com/photos/IGfIGP5ONV0
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80&auto=format&fit=crop",
    alt: "A fresh, colorful home-cooked meal plated and ready to serve",
  },
  {
    title: "Companionship & Social Engagement",
    body: "Conversation, games, music, and shared activities that keep hearts and minds engaged every day.",
    // Replaced 2026-05-12 (prior photo-1574610409625 returned a broken image
    // on the live site). New photo: two seniors playing chess — captures
    // shared activity and social connection. Widely-shared, stable.
    image:
      "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1600&q=80&auto=format&fit=crop",
    alt: "Two elderly residents enjoying a friendly chess game together",
  },
  {
    title: "24/7 Caregiver Support",
    body: "Trained, compassionate caregivers on-site around the clock — so help is always a moment away.",
    // https://unsplash.com/photos/_3Q3tsJ01nc — caregiver and senior
    image:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1600&q=80&auto=format&fit=crop",
    alt: "A caregiver smiling beside an elderly resident in a sunlit room",
  },
  {
    title: "Family Communication & Involvement",
    body: "Regular updates, open visiting, and an open door — because family is part of the care team.",
    // https://unsplash.com/photos/szRY8w1zJBs — family with senior
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=80&auto=format&fit=crop",
    alt: "An adult daughter visiting her elderly mother",
  },
];

export const whyUs = {
  heading: "Why Caring Hearts",
  script: "A small home, a big heart.",
  body: "We're not a large institution — we're a small, locally-owned home in Hartford with the time, attention, and warmth your loved one deserves.",
  points: [
    {
      title: "A true home, not an institution",
      body: "Small by design — quiet hallways, real conversations, and the rhythm of family life.",
    },
    {
      title: "Low caregiver-to-resident ratio",
      body: "Fewer residents per caregiver means more time, more attention, and care that actually responds.",
    },
    {
      title: "Locally owned & operated",
      body: "Run by your neighbors. The owner answers the phone. The same faces greet your loved one every morning.",
    },
    {
      title: "Rooted in the Hartford community",
      body: "Connected to local doctors, faith communities, and family networks — care that knows the neighborhood.",
    },
  ],
  // https://unsplash.com/photos/2cdzDZ90M1k — caregiver assisting senior outside
  image:
    "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1600&q=80&auto=format&fit=crop",
  imageAlt:
    "A caregiver walking arm-in-arm with an elderly woman in a sunlit garden",
};

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1516307365426-bea591f05011?w=1200&q=80&auto=format&fit=crop",
    alt: "A caregiver holding the hand of an elderly resident",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&q=80&auto=format&fit=crop",
    alt: "An adult daughter visiting her elderly mother",
    aspect: "wide",
  },
  {
    // Replaced 2026-05-12 — matches the new Service 03 meals image.
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&q=80&auto=format&fit=crop",
    alt: "A fresh, colorful home-cooked meal plated and ready to serve",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=1200&q=80&auto=format&fit=crop",
    alt: "A caregiver walking with an elderly woman in a garden",
    aspect: "tall",
  },
  {
    // Replaced 2026-05-12 — matches the new Service 04 companionship image.
    src: "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&q=80&auto=format&fit=crop",
    alt: "Two elderly residents enjoying a friendly chess game together",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&q=80&auto=format&fit=crop",
    alt: "A caregiver smiling beside an elderly resident in a sunlit room",
    aspect: "square",
  },
  {
    src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80&auto=format&fit=crop",
    alt: "A caregiver assisting an elderly woman with her medication",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?w=1200&q=80&auto=format&fit=crop",
    alt: "An elderly resident reading peacefully by a window",
    aspect: "wide",
  },
] as const;

// PLACEHOLDER TESTIMONIALS — tasteful samples written for the demo.
// Replace with real, attributed quotes (with permission) before launch.
export const testimonials = [
  {
    quote:
      "Moving Mom into Caring Hearts was the hardest decision I've ever made — and the right one. They treat her like their own grandmother. I sleep at night because of them.",
    name: "Linda M.",
    relation: "Daughter of resident",
  },
  {
    quote:
      "Dad lights up when his caregiver walks in the room. After years of feeling like a name on a chart, he finally feels seen. That's everything to us.",
    name: "Marcus T.",
    relation: "Son of resident",
  },
  {
    quote:
      "The house feels like a home — not a facility. Real food, real laughter, real conversations. We can't imagine a better place for our aunt.",
    name: "Patricia & James R.",
    relation: "Family of resident",
  },
];

export const ctaBand = {
  eyebrow: "Schedule a Visit",
  heading: "Come see the home, meet the team, ask anything.",
  body: "Tours are free, unhurried, and at your pace. We'll walk you through the home, introduce you to caregivers, and answer every question you have.",
  primary: { label: "Schedule a Visit", href: "/contact" },
  secondary: { label: `Call ${site.phone}`, href: site.phoneHref },
};

export const seo = {
  title: "Caring Hearts Assisted Living — Compassionate Senior Care in Hartford, CT",
  description:
    "A warm, home-like assisted living residence in Hartford, CT. Compassionate, personalized care for seniors, with dignity at the center of every day.",
  ogAlt: "Caring Hearts Assisted Living — A Place to Call Home",
};
