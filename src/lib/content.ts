// src/lib/content.ts
// Central place for site copy and structured content.
// Marketing copy here is placeholder/draft language written for this build —
// verified facts (history, MOQ, certifications, timelines, team, facility
// details) must come from Kesar before launch. See CONTENT-NEEDED.md.

export const nav = [
  { href: "/precious-metal", label: "Precious Metal" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/process", label: "Process" },
  { href: "/our-brands", label: "Our Brands" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export type Capability = {
  slug: string;
  title: string;
  short: string;
  detail: string;
};

export const capabilities: Capability[] = [
  {
    slug: "oem-odm",
    title: "Watch OEM / ODM",
    short: "Custom manufacturing and development for existing watch brands.",
    detail:
      "For brands that already know what they want to build, Kesar develops and manufactures to specification — from a finished reference design through to production-ready output.",
  },
  {
    slug: "design",
    title: "Watch Design",
    short: "Concept and product design, from sketch to specification.",
    detail:
      "Translating an idea, a mood, or a rough sketch into a designed product — case geometry, dial layout, proportions and material direction — ready for development.",
  },
  {
    slug: "product-development",
    title: "Product Development",
    short: "Turning a concept into a manufacturable product.",
    detail:
      "Engineering a design into something that can actually be built: component specification, tolerances, sourcing and prototyping ahead of production.",
  },
  {
    slug: "components",
    title: "Components",
    short: "Cases, dials, hands, straps, movements and buckles.",
    detail:
      "Component-level capability across the parts that make up a finished watch, sourced or produced to the specification a project calls for.",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    short: "Production of watch components and finished timepieces.",
    detail:
      "Moving a specified design into production, with particular depth in gold, silver and other precious-metal casework and finishing.",
  },
  {
    slug: "assembly",
    title: "Assembly",
    short: "Watch assembly, finishing and quality checking.",
    detail:
      "Bringing components together into a finished, inspected timepiece — the stage where design and engineering meet the finished object.",
  },
  {
    slug: "white-label",
    title: "White Label",
    short: "Ready-to-brand watch solutions.",
    detail:
      "Developed watches that a business can bring to market under its own name, without starting the design and engineering process from zero.",
  },
  {
    slug: "custom-development",
    title: "Custom Development",
    short: "Product development built around a client's specific brief.",
    detail:
      "Where a project doesn't fit an existing template, Kesar scopes and develops around the client's own requirements and constraints.",
  },
  {
    slug: "sourcing",
    title: "Sourcing & Coordination",
    short: "Component sourcing and production coordination.",
    detail:
      "Coordinating the materials, components and production steps a project needs, so a client has one point of accountability rather than many.",
  },
  {
    slug: "delivery",
    title: "Distribution & Delivery",
    short: "Coordinating the finished product through to delivery.",
    detail:
      "Seeing a project through its final stage, from finished production run to delivery in the client's hands.",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  copy: string;
};

export const processSteps: ProcessStep[] = [
  { index: "01", title: "Idea", copy: "A concept, a sketch, or a brief — the starting point for a new project." },
  { index: "02", title: "Design", copy: "Shaping the idea into a real design: form, proportion, material and detail." },
  { index: "03", title: "Development", copy: "Engineering the design into something that can be manufactured." },
  { index: "04", title: "Prototype", copy: "A first physical version, built to test and confirm before production." },
  { index: "05", title: "Production", copy: "Manufacturing components and cases at the scale the project requires." },
  { index: "06", title: "Assembly", copy: "Bringing components together into finished, inspected timepieces." },
  { index: "07", title: "Branding", copy: "Applying the client's identity to the finished product." },
  { index: "08", title: "Delivery", copy: "Coordinating the finished order through to the client." },
];

export const materials = [
  {
    key: "gold",
    name: "Gold",
    words: ["Warm.", "Rare.", "Distinctive."],
    copy: "Gold gives a timepiece weight and warmth that's immediately legible — a material choice that carries the design rather than sitting underneath it.",
  },
  {
    key: "silver",
    name: "Silver",
    words: ["Refined.", "Cool.", "Versatile."],
    copy: "Silver reads quieter than gold but no less deliberate — a precious-metal case that favours restraint over statement.",
  },
];