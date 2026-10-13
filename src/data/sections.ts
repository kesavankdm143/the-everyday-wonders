// The eight top-level sections of the site, shared by every section page.
// Titles come from `categoryLabel` in home.ts so a section is named the same
// everywhere. To change what a section page says, edit it here.

import {
  type Article,
  type Bi,
  type CategoryKey,
  featured,
  topStories,
  marketAnalysis,
  latestArticles,
} from './home';

/** The sections in the same order as the header navigation. */
export const sectionOrder: CategoryKey[] = [
  'science',
  'space',
  'technology',
  'nature',
  'human-body',
  'facts',
  'markets',
  'business',
];

const art = (name: string) => `/images/art/${name}.svg`;

export const sections: Record<CategoryKey, { image: string; description: Bi }> = {
  science: {
    image: art('science'),
    description: {
      en: 'Simple explanations of how everyday things work — from the colour of the sky to the forces around us.',
      ta: 'வானத்தின் நிறம் முதல் நம்மைச் சுற்றியுள்ள விசைகள் வரை, அன்றாட விஷயங்கள் எப்படி இயங்குகின்றன என்பதற்கான எளிய விளக்கங்கள்.',
    },
  },
  space: {
    image: art('space'),
    description: {
      en: 'Planets, stars, black holes and rockets — a friendly guide to what lies beyond Earth.',
      ta: 'கோள்கள், விண்மீன்கள், கருந்துளைகள், ராக்கெட்டுகள் — பூமிக்கு அப்பால் இருப்பவற்றுக்கான எளிய வழிகாட்டி.',
    },
  },
  technology: {
    image: art('technology'),
    description: {
      en: 'How the gadgets, networks and machines in our lives actually work.',
      ta: 'நம் வாழ்வில் உள்ள கருவிகளும் வலையமைப்புகளும் இயந்திரங்களும் உண்மையில் எப்படி வேலை செய்கின்றன.',
    },
  },
  nature: {
    image: art('nature'),
    description: {
      en: 'Forests, oceans, weather and wildlife — how the living world keeps itself going.',
      ta: 'காடுகள், கடல்கள், வானிலை, வனவிலங்குகள் — உயிர்ச் சூழல் தன்னை எப்படித் தக்கவைத்துக்கொள்கிறது.',
    },
  },
  'human-body': {
    image: art('human-body'),
    description: {
      en: 'A tour of the heart, the brain and the amazing systems that keep us alive.',
      ta: 'இதயம், மூளை மற்றும் நம்மை உயிர்ப்புடன் வைத்திருக்கும் வியக்கத்தக்க உடல் அமைப்புகளின் அறிமுகம்.',
    },
  },
  facts: {
    image: art('facts'),
    description: {
      en: 'Surprising, bite-sized facts that make everyday life a little more wonderful.',
      ta: 'அன்றாட வாழ்வை இன்னும் வியப்பாக்கும் சுவாரஸ்யமான சிறு தகவல்கள்.',
    },
  },
  markets: {
    image: art('market-chart'),
    description: {
      en: 'Gold, oil, stock indices and crypto explained in plain language — for learning, not for trading tips.',
      ta: 'தங்கம், எண்ணெய், பங்குச் சந்தைக் குறியீடுகள், கிரிப்டோ — எளிய மொழியில் விளக்கம்; கற்றுக்கொள்ள மட்டுமே, முதலீட்டு ஆலோசனை அல்ல.',
    },
  },
  business: {
    image: art('company'),
    description: {
      en: 'How companies, money and the economy work — the ideas behind the headlines.',
      ta: 'நிறுவனங்கள், பணம், பொருளாதாரம் எப்படி இயங்குகின்றன — செய்திகளுக்குப் பின்னால் உள்ள கருத்துகள்.',
    },
  },
};

const allSampleArticles: Article[] = [featured, ...topStories, marketAnalysis, ...latestArticles];

/** The SAMPLE articles that belong to a section (each one only once). */
export function sampleArticlesFor(key: CategoryKey): Article[] {
  const seen = new Set<string>();
  const result: Article[] = [];
  for (const a of allSampleArticles) {
    if (a.category === key && !seen.has(a.slug)) {
      seen.add(a.slug);
      result.push(a);
    }
  }
  return result;
}
