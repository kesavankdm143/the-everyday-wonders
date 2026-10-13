// Interface text for both languages.
// To change a label on the site, edit it here — one place for English, one for Tamil.

export const languages = {
  en: 'English',
  ta: 'தமிழ்',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'site.name.the': 'The',
    'site.name.everyday': 'Everyday',
    'site.name.wonders': 'Wonders',
    'site.tagline': 'Discover the extraordinary in everyday things',
    'site.description':
      'The Everyday Wonders explains science, space, technology, nature, the human body and finance in simple English and Tamil.',
    'skip': 'Skip to main content',
    'lang.label': 'Choose language',
    'search.label': 'Search the site',
    'search.placeholder': 'Search — coming soon',
    'menu.open': 'Open menu',
    'menu.close': 'Close menu',
    'nav.label': 'Main sections',
    'nav.home': 'Home',
    'nav.science': 'Science',
    'nav.space': 'Space',
    'nav.technology': 'Technology',
    'nav.nature': 'Nature',
    'nav.human-body': 'Human Body',
    'nav.facts': 'Facts',
    'nav.markets': 'Markets',
    'nav.business': 'Business',
    'preview.note': 'Market figures on this page are samples, not live data.',
    'markets.title': 'Market snapshot',
    'markets.badge': 'Sample data · not live',
    'markets.sample': 'Sample',
    'featured.label': 'Featured',
    'readNow': 'Read Now',
    'topStories': 'Top Stories',
    'viewAll': 'View All',
    'categories.title': 'Explore Categories',
    'analysis.title': 'Market Analysis',
    'analysis.cta': 'Read Analysis',
    'latest.title': 'Latest Articles',
    'finance.title': 'Money & Markets',
    'minRead': 'min read',
    'sample': 'Sample',
    'footer.about': 'About',
    'footer.nav': 'Footer links',
    'footer.contact': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.disclaimer': 'Disclaimer',
    'footer.blurb':
      'Simple, trustworthy explanations of how the world works — in English and Tamil.',
    'footer.finance':
      'Finance content is for education only and is not investment advice. Market figures are labelled when they are samples.',
    'footer.rights': 'All rights reserved.',
    'bottom.label': 'Quick navigation',
    'bottom.home': 'Home',
    'bottom.markets': 'Markets',
    'bottom.articles': 'Articles',
    'bottom.topics': 'Topics',
    'bottom.menu': 'Menu',
    'notfound.title': 'Page not found',
    'notfound.text':
      "We couldn't find the page you were looking for. It may have moved, or it may not have been written yet.",
    'notfound.cta': 'Back to the homepage',
    'section.articles': 'Articles in this section',
    'section.empty': 'Articles for this section are on the way. Please check back soon.',
    'section.soon': 'Coming soon',
    'section.others': 'More sections',
    'breadcrumb.label': 'Breadcrumb',
    'article.related': 'Related articles',
    'article.published': 'Published',
    'page.updated': 'Last updated',
    'topics.title': 'All topics',
    'topics.description': 'Every section of The Everyday Wonders, and plain-language guides to money and markets.',
    'topics.sections': 'Sections',
    'articles.title': 'All articles',
    'articles.description':
      'Plain-language explainers on science, space, technology, nature, the human body, facts and money.',
  },
  ta: {
    'site.name.the': 'The',
    'site.name.everyday': 'Everyday',
    'site.name.wonders': 'Wonders',
    'site.tagline': 'அன்றாட விஷயங்களில் ஒளிந்திருக்கும் அற்புதங்களைக் கண்டறியுங்கள்',
    'site.description':
      'அறிவியல், விண்வெளி, தொழில்நுட்பம், இயற்கை, மனித உடல், நிதி ஆகியவற்றை எளிய தமிழிலும் ஆங்கிலத்திலும் விளக்கும் தளம் The Everyday Wonders.',
    'skip': 'முதன்மை உள்ளடக்கத்திற்குச் செல்லவும்',
    'lang.label': 'மொழியைத் தேர்ந்தெடுக்கவும்',
    'search.label': 'தளத்தில் தேடுக',
    'search.placeholder': 'தேடல் — விரைவில் வரும்',
    'menu.open': 'மெனுவைத் திற',
    'menu.close': 'மெனுவை மூடு',
    'nav.label': 'முதன்மைப் பிரிவுகள்',
    'nav.home': 'முகப்பு',
    'nav.science': 'அறிவியல்',
    'nav.space': 'விண்வெளி',
    'nav.technology': 'தொழில்நுட்பம்',
    'nav.nature': 'இயற்கை',
    'nav.human-body': 'மனித உடல்',
    'nav.facts': 'தகவல்கள்',
    'nav.markets': 'சந்தைகள்',
    'nav.business': 'வணிகம்',
    'preview.note': 'இப்பக்கத்தில் உள்ள சந்தை எண்கள் மாதிரிகள் மட்டுமே; நேரலைத் தரவு அல்ல.',
    'markets.title': 'சந்தை நிலவரம்',
    'markets.badge': 'மாதிரித் தரவு · நேரலை அல்ல',
    'markets.sample': 'மாதிரி',
    'featured.label': 'சிறப்புக் கட்டுரை',
    'readNow': 'இப்போது படிக்க',
    'topStories': 'முக்கியக் கட்டுரைகள்',
    'viewAll': 'அனைத்தும்',
    'categories.title': 'தலைப்புகளை ஆராயுங்கள்',
    'analysis.title': 'சந்தை பகுப்பாய்வு',
    'analysis.cta': 'பகுப்பாய்வைப் படிக்க',
    'latest.title': 'சமீபத்திய கட்டுரைகள்',
    'finance.title': 'பணமும் சந்தைகளும்',
    'minRead': 'நிமிட வாசிப்பு',
    'sample': 'மாதிரி',
    'footer.about': 'எங்களைப் பற்றி',
    'footer.nav': 'அடிக்குறிப்பு இணைப்புகள்',
    'footer.contact': 'தொடர்புக்கு',
    'footer.privacy': 'தனியுரிமைக் கொள்கை',
    'footer.disclaimer': 'பொறுப்புத் துறப்பு',
    'footer.blurb':
      'உலகம் எப்படி இயங்குகிறது என்பதற்கான எளிய, நம்பகமான விளக்கங்கள் — தமிழிலும் ஆங்கிலத்திலும்.',
    'footer.finance':
      'நிதி தொடர்பான உள்ளடக்கம் கல்விக்காக மட்டுமே; இது முதலீட்டு ஆலோசனை அல்ல. மாதிரி சந்தை எண்கள் தெளிவாகக் குறிக்கப்படும்.',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'bottom.label': 'விரைவு வழிசெலுத்தல்',
    'bottom.home': 'முகப்பு',
    'bottom.markets': 'சந்தைகள்',
    'bottom.articles': 'கட்டுரைகள்',
    'bottom.topics': 'தலைப்புகள்',
    'bottom.menu': 'மெனு',
    'notfound.title': 'பக்கம் கிடைக்கவில்லை',
    'notfound.text':
      'நீங்கள் தேடிய பக்கம் கிடைக்கவில்லை. அது இடம் மாறியிருக்கலாம் அல்லது இன்னும் எழுதப்படாமல் இருக்கலாம்.',
    'notfound.cta': 'முகப்புப் பக்கத்திற்குச் செல்க',
    'section.articles': 'இந்தப் பிரிவின் கட்டுரைகள்',
    'section.empty':
      'இந்தப் பிரிவுக்கான கட்டுரைகள் விரைவில் வரும். சிறிது நாள் கழித்து மீண்டும் வந்து பாருங்கள்.',
    'section.soon': 'விரைவில்',
    'section.others': 'மேலும் பிரிவுகள்',
    'breadcrumb.label': 'பக்கப் பாதை',
    'article.related': 'தொடர்புடைய கட்டுரைகள்',
    'article.published': 'வெளியான நாள்',
    'page.updated': 'கடைசியாகப் புதுப்பிக்கப்பட்டது',
    'topics.title': 'அனைத்துத் தலைப்புகளும்',
    'topics.description': 'The Everyday Wonders-இன் அனைத்துப் பிரிவுகளும், பணம் மற்றும் சந்தைகளுக்கான எளிய மொழி வழிகாட்டிகளும்.',
    'topics.sections': 'பிரிவுகள்',
    'articles.title': 'அனைத்துக் கட்டுரைகளும்',
    'articles.description':
      'அறிவியல், விண்வெளி, தொழில்நுட்பம், இயற்கை, மனித உடல், சுவாரஸ்யத் தகவல்கள், பணம் ஆகியவற்றைப் பற்றிய எளிய மொழி விளக்கங்கள்.',
  },
} as const;

export type UiKey = keyof (typeof ui)['en'];

export function useTranslations(lang: Lang) {
  return (key: UiKey): string => ui[lang][key] ?? ui.en[key];
}

/** The other language — used for the bilingual subtitle and the language switch. */
export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'ta' : 'en';
}

/** A date written out in the reader's language, e.g. "13 October 2026". */
export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'ta' ? 'ta-IN' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
