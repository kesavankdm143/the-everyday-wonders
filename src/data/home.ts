// Homepage content: the article cards (titles, categories, pictures, reading
// time) and the SAMPLE market figures. The articles are real — their text lives
// in src/content/articles/ — but the market figures are placeholders, not live
// data, and are labelled that way on screen.

import type { Lang } from '../i18n/ui';
import { minutesFor } from './articleFiles';

export type Bi = Record<Lang, string>;

export type CategoryKey =
  | 'science'
  | 'space'
  | 'technology'
  | 'nature'
  | 'human-body'
  | 'facts'
  | 'markets'
  | 'business';

export interface Article {
  slug: string;
  category: CategoryKey;
  title: Bi;
  summary?: Bi;
  image: string;
  minutes: number;
}

const img = (name: string) => `/images/art/${name}.svg`;

export const categoryLabel: Record<CategoryKey, Bi> = {
  science: { en: 'Science', ta: 'அறிவியல்' },
  space: { en: 'Space', ta: 'விண்வெளி' },
  technology: { en: 'Technology', ta: 'தொழில்நுட்பம்' },
  nature: { en: 'Nature', ta: 'இயற்கை' },
  'human-body': { en: 'Human Body', ta: 'மனித உடல்' },
  facts: { en: 'Interesting Facts', ta: 'சுவாரஸ்யத் தகவல்கள்' },
  markets: { en: 'Markets', ta: 'சந்தைகள்' },
  business: { en: 'Business', ta: 'வணிகம்' },
};

/** The six large visual cards in "Explore Categories". */
export const exploreCategories: { key: CategoryKey; image: string }[] = [
  { key: 'science', image: img('science') },
  { key: 'space', image: img('space') },
  { key: 'technology', image: img('technology') },
  { key: 'nature', image: img('nature') },
  { key: 'human-body', image: img('human-body') },
  { key: 'facts', image: img('facts') },
];

/** SAMPLE market figures — clearly labelled on the page as not live. */
export interface MarketItem {
  name: Bi;
  value: string;
  unit?: string;
  change: string;
  up: boolean;
  spark: number[];
  icon: 'index' | 'gold' | 'silver' | 'oil' | 'copper' | 'bitcoin';
}

export const sampleMarkets: MarketItem[] = [
  {
    name: { en: 'Nifty 50', ta: 'நிஃப்டி 50' },
    value: '24,620.30',
    change: '+120.45 (+0.49%)',
    up: true,
    spark: [12, 14, 13, 16, 15, 18, 17, 19, 18, 21, 20, 23],
    icon: 'index',
  },
  {
    name: { en: 'Sensex', ta: 'சென்செக்ஸ்' },
    value: '81,330.25',
    change: '+310.22 (+0.38%)',
    up: true,
    spark: [10, 12, 11, 13, 15, 14, 16, 15, 17, 19, 18, 20],
    icon: 'index',
  },
  {
    name: { en: 'Gold (24K)', ta: 'தங்கம் (24K)' },
    value: '₹7,245',
    unit: '/g',
    change: '+32 (+0.44%)',
    up: true,
    spark: [9, 10, 10, 12, 11, 12, 13, 13, 14, 13, 15, 16],
    icon: 'gold',
  },
  {
    name: { en: 'Silver', ta: 'வெள்ளி' },
    value: '₹89,300',
    unit: '/kg',
    change: '+410 (+0.46%)',
    up: true,
    spark: [14, 13, 15, 14, 16, 15, 15, 17, 16, 18, 17, 19],
    icon: 'silver',
  },
  {
    name: { en: 'Crude Oil (Brent)', ta: 'கச்சா எண்ணெய் (பிரெண்ட்)' },
    value: '$82.15',
    unit: '/bbl',
    change: '−0.48 (−0.58%)',
    up: false,
    spark: [20, 19, 20, 18, 17, 18, 16, 17, 15, 16, 14, 13],
    icon: 'oil',
  },
  {
    name: { en: 'Copper', ta: 'தாமிரம்' },
    value: '$9,250',
    unit: '/t',
    change: '+35 (+0.38%)',
    up: true,
    spark: [11, 12, 11, 13, 12, 14, 13, 15, 14, 14, 16, 17],
    icon: 'copper',
  },
  {
    name: { en: 'Bitcoin', ta: 'பிட்காயின்' },
    value: '$67,420',
    change: '+1,230 (+1.86%)',
    up: true,
    spark: [8, 11, 9, 13, 12, 10, 14, 13, 17, 15, 19, 22],
    icon: 'bitcoin',
  },
];

/** The featured story for the large hero card. */
export const featured: Article = {
  slug: 'how-the-solar-system-works',
  category: 'space',
  title: {
    en: 'How Does the Solar System Work?',
    ta: 'சூரியக் குடும்பம் எப்படி இயங்குகிறது?',
  },
  summary: {
    en: 'A friendly tour of the Sun, its eight planets and the invisible pull that keeps them all in orbit.',
    ta: 'சூரியன், அதன் எட்டுக் கோள்கள், அவற்றைச் சுற்றுப்பாதையில் வைத்திருக்கும் கண்ணுக்குத் தெரியாத ஈர்ப்பு விசை — ஓர் எளிய அறிமுகம்.',
  },
  image: img('hero-solar-system'),
  minutes: minutesFor('how-the-solar-system-works'),
};

/** "Top Stories" sidebar items. */
export const topStories: Article[] = [
  {
    slug: 'how-rockets-reach-orbit',
    category: 'space',
    title: { en: 'How Rockets Reach Orbit', ta: 'ராக்கெட்டுகள் சுற்றுப்பாதையை எப்படி அடைகின்றன?' },
    image: img('space'),
    minutes: minutesFor('how-rockets-reach-orbit'),
  },
  {
    slug: 'why-gold-holds-its-value',
    category: 'markets',
    title: { en: 'Why Gold Holds Its Value', ta: 'தங்கம் ஏன் தன் மதிப்பைத் தக்கவைக்கிறது?' },
    image: img('gold-silver'),
    minutes: minutesFor('why-gold-holds-its-value'),
  },
  {
    slug: 'what-a-stock-index-measures',
    category: 'markets',
    title: {
      en: 'What a Stock Index Really Measures',
      ta: 'பங்குச் சந்தைக் குறியீடு உண்மையில் எதை அளக்கிறது?',
    },
    image: img('market-chart'),
    minutes: minutesFor('what-a-stock-index-measures'),
  },
  {
    slug: 'how-ev-batteries-store-energy',
    category: 'technology',
    title: {
      en: 'How EV Batteries Store Energy',
      ta: 'மின்சார வாகன பேட்டரிகள் ஆற்றலை எப்படிச் சேமிக்கின்றன?',
    },
    image: img('ev-battery'),
    minutes: minutesFor('how-ev-batteries-store-energy'),
  },
];

/** The educational market explainer. */
export const marketAnalysis: Article = {
  slug: 'what-moves-the-stock-market',
  category: 'markets',
  title: {
    en: 'What Moves the Stock Market Each Day?',
    ta: 'பங்குச் சந்தை தினமும் ஏன் ஏறி இறங்குகிறது?',
  },
  summary: {
    en: 'Interest rates, company results and global news — the forces behind daily price moves, explained simply.',
    ta: 'வட்டி விகிதங்கள், நிறுவன முடிவுகள், உலகச் செய்திகள் — தினசரி விலை மாற்றங்களின் பின்னணி, எளிய விளக்கம்.',
  },
  image: img('market-chart'),
  minutes: minutesFor('what-moves-the-stock-market'),
};

/** "Latest Articles" grid. */
export const latestArticles: Article[] = [
  {
    slug: 'what-is-a-black-hole',
    category: 'space',
    title: { en: 'What Is a Black Hole?', ta: 'கருந்துளை என்றால் என்ன?' },
    image: img('black-hole'),
    minutes: minutesFor('what-is-a-black-hole'),
  },
  {
    slug: 'why-is-the-sky-blue',
    category: 'science',
    title: { en: 'Why Is the Sky Blue?', ta: 'வானம் ஏன் நீல நிறமாகத் தெரிகிறது?' },
    image: img('science'),
    minutes: minutesFor('why-is-the-sky-blue'),
  },
  {
    slug: 'how-your-heart-pumps-blood',
    category: 'human-body',
    title: {
      en: 'How Your Heart Pumps Blood',
      ta: 'உங்கள் இதயம் இரத்தத்தை எப்படிச் செலுத்துகிறது?',
    },
    image: img('human-body'),
    minutes: minutesFor('how-your-heart-pumps-blood'),
  },
  {
    slug: 'how-rainforests-make-rain',
    category: 'nature',
    title: {
      en: 'How Rainforests Make Their Own Rain',
      ta: 'மழைக்காடுகள் தங்களுக்கான மழையை எப்படி உருவாக்குகின்றன?',
    },
    image: img('nature'),
    minutes: minutesFor('how-rainforests-make-rain'),
  },
  {
    slug: 'how-wifi-passes-through-walls',
    category: 'technology',
    title: {
      en: 'How Does Wi-Fi Pass Through Walls?',
      ta: 'வைஃபை சுவர்களைக் கடந்து எப்படிச் செல்கிறது?',
    },
    image: img('technology'),
    minutes: minutesFor('how-wifi-passes-through-walls'),
  },
  {
    slug: 'why-we-have-leap-years',
    category: 'facts',
    title: { en: 'Why Do We Have Leap Years?', ta: 'லீப் ஆண்டு ஏன் வருகிறது?' },
    image: img('facts'),
    minutes: minutesFor('why-we-have-leap-years'),
  },
];

/** "Money & Markets" topic cards. */
export const financeTopics: { slug: string; title: Bi; desc: Bi; image: string }[] = [
  {
    slug: 'gold-silver',
    title: { en: 'Gold & Silver', ta: 'தங்கம் & வெள்ளி' },
    desc: {
      en: 'How precious-metal prices are set and tracked in India.',
      ta: 'இந்தியாவில் விலைமதிப்புள்ள உலோகங்களின் விலை எப்படி நிர்ணயிக்கப்படுகிறது.',
    },
    image: img('gold-silver'),
  },
  {
    slug: 'crude-oil-copper',
    title: { en: 'Crude Oil & Copper', ta: 'கச்சா எண்ணெய் & தாமிரம்' },
    desc: {
      en: 'Why energy and industrial metals move the whole economy.',
      ta: 'எரிசக்தியும் தொழில்துறை உலோகங்களும் பொருளாதாரத்தை எப்படி அசைக்கின்றன.',
    },
    image: img('oil-copper'),
  },
  {
    slug: 'bitcoin-crypto',
    title: { en: 'Bitcoin & Crypto', ta: 'பிட்காயின் & கிரிப்டோ' },
    desc: {
      en: 'Plain-language guides to digital currencies — and their risks.',
      ta: 'டிஜிட்டல் நாணயங்களும் அவற்றின் அபாயங்களும் — எளிய விளக்கம்.',
    },
    image: img('bitcoin'),
  },
  {
    slug: 'company-results',
    title: { en: 'Company Results', ta: 'நிறுவன நிதி முடிவுகள்' },
    desc: {
      en: 'How to read quarterly results without the jargon.',
      ta: 'காலாண்டு நிதி முடிவுகளைக் குழப்பமின்றிப் புரிந்துகொள்வது எப்படி.',
    },
    image: img('company'),
  },
];
