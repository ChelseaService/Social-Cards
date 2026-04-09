// ─────────────────────────────────────────────────────────────────────────────
// SLIDES CONFIG
// Edit this file to change the content of each slide.
// Each slide picks a template (one–six) and fills in its fields.
// ─────────────────────────────────────────────────────────────────────────────

export interface Slide1 {
  template: 'one'
  eyebrow: string
  headline: [string, string, string] // third line gets the accent color
  body: string
  badge: string
  cta: string
  accentColor: string
}

export interface Slide2 {
  template: 'two'
  pillLabel: string
  pillText: string
  headline: string
  headlineSuffix: string // rendered italic at end of headline
  body: string
  brand: string
  category: string
}

export interface Slide3 {
  template: 'three'
  logo: string
  headline: [string, string, string] // third line gets gradient
  body: string
  partnerText: string
  brands: string[]
}

export interface Slide4 {
  template: 'four'
  headline: string // use \n for line breaks
  body: string
  brand: string
}

export interface Slide5 {
  template: 'five'
  headlineBlack: string // italic
  headlineGray: string  // italic, gray
  body: string
  brand: string
}

export interface Slide6 {
  template: 'six'
  eyebrow: string
  headlineLine1: string
  headlineLine2Italic: string  // source serif italic
  headlineLine2Normal: string
  body: string
  pills: [string, string]
}

export type SlideConfig =
  | Slide1
  | Slide2
  | Slide3
  | Slide4
  | Slide5
  | Slide6

// ─────────────────────────────────────────────────────────────────────────────
// YOUR SLIDES — edit below
// ─────────────────────────────────────────────────────────────────────────────

export const slides: SlideConfig[] = [
  {
    template: 'one',
    eyebrow: 'The Future Is Now',
    headline: ['Simplify', 'Your Work', 'With AI'],
    body: 'Automate repetitive tasks, generate content in seconds, and let intelligent tools handle the heavy lifting — so you can focus on what truly matters.',
    badge: 'AI Powered',
    cta: 'Learn More',
    accentColor: '#f59e0b',
  },
  {
    template: 'two',
    pillLabel: 'New',
    pillText: 'Say Hello to Corewave v3.2',
    headline: 'Your Insights.\nOne Clear',
    headlineSuffix: 'Overview.',
    body: 'Neuralyn helps teams track metrics, goals, and progress with precision.',
    brand: 'Neuralyn',
    category: 'Analytics',
  },
  {
    template: 'three',
    logo: 'Stellar.ai',
    headline: ['Work Smarter.', 'Move Faster.', 'AI Powers You Up.'],
    body: 'Intelligent automation syncs with the tools you love to streamline tasks, boost output, and save time.',
    partnerText: 'Collaborating with top aerospace pioneers globally',
    brands: ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'],
  },
  {
    template: 'four',
    headline: 'Focus in a\nDistracted World',
    body: 'Designing tools for deep thinkers, bold creators, and quiet rebels. Digital spaces for sharp focus and inspired work.',
    brand: 'Velorah®',
  },
  {
    template: 'five',
    headlineBlack: 'Beyond silence,',
    headlineGray: 'we build the eternal.',
    body: 'Platforms for deep thinkers and fearless makers. Digital havens for focused work and pure creative flow.',
    brand: 'Aethera®',
  },
  {
    template: 'six',
    eyebrow: 'AI-Powered Floral Design',
    headlineLine1: 'Innovating the',
    headlineLine2Italic: 'spirit of',
    headlineLine2Normal: ' bloom',
    body: "Where artificial intelligence meets nature's artistry. Sculpting living compositions beyond imagination.",
    pills: ['AI Generation', '3D Structures'],
  },
]
