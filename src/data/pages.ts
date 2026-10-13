// The text of the four information pages linked from the footer.
// Edit the wording here; the pages are built by src/components/InfoPage.astro.
// Only say things here that are true of the site as it is built today.

import type { Bi } from './home';

export type PageKey = 'about' | 'contact' | 'privacy-policy' | 'disclaimer';

/** The day the page text was last changed (YYYY-MM-DD). */
export const pagesUpdated = '2026-10-13';

type Block =
  | { type: 'h2'; text: Bi }
  | { type: 'p'; text: Bi }
  | { type: 'ul'; items: Bi[] };

export interface InfoPageData {
  title: Bi;
  description: Bi;
  blocks: Block[];
}

const h2 = (en: string, ta: string): Block => ({ type: 'h2', text: { en, ta } });
const p = (en: string, ta: string): Block => ({ type: 'p', text: { en, ta } });
const ul = (...items: [string, string][]): Block => ({
  type: 'ul',
  items: items.map(([en, ta]) => ({ en, ta })),
});

export const infoPages: Record<PageKey, InfoPageData> = {
  about: {
    title: { en: 'About', ta: 'எங்களைப் பற்றி' },
    description: {
      en: 'What The Everyday Wonders is, who it is for and how its articles are written.',
      ta: 'The Everyday Wonders என்றால் என்ன, யாருக்காக, அதன் கட்டுரைகள் எப்படி எழுதப்படுகின்றன என்பது பற்றி.',
    },
    blocks: [
      p(
        'The Everyday Wonders explains how the world works in simple language, in English and in Tamil. It covers science, space, technology, nature, the human body, interesting facts, and the ideas behind money and markets.',
        'The Everyday Wonders உலகம் எப்படி இயங்குகிறது என்பதை எளிய மொழியில், ஆங்கிலத்திலும் தமிழிலும் விளக்குகிறது. அறிவியல், விண்வெளி, தொழில்நுட்பம், இயற்கை, மனித உடல், சுவாரஸ்யத் தகவல்கள், பணமும் சந்தைகளும் பற்றிய கருத்துகள் ஆகியவற்றை இது உள்ளடக்குகிறது.',
      ),
      h2('Who it is for', 'யாருக்காக?'),
      p(
        'Anyone who is curious. You do not need a science or finance background to read an article here.',
        'ஆர்வம் உள்ள எவருக்கும். இங்குள்ள கட்டுரைகளைப் படிக்க அறிவியல் அல்லது நிதிப் பின்னணி தேவையில்லை.',
      ),
      h2('How the articles are written', 'கட்டுரைகள் எப்படி எழுதப்படுகின்றன?'),
      ul(
        [
          'Each article is an explainer: it aims to make an idea clear, not to report breaking news.',
          'Each article explains well-established ideas in plain words and avoids numbers and claims that cannot be checked.',
          'Articles are written in English first and then translated into Tamil.',
        ],
        [
          'ஒவ்வொரு கட்டுரையும் ஒரு விளக்கக் கட்டுரை: அது ஒரு கருத்தைத் தெளிவுபடுத்தும் நோக்கம் கொண்டது; அவசரச் செய்திகளை வழங்குவது அல்ல.',
          'நன்கு நிறுவப்பட்ட கருத்துகளை எளிய சொற்களில் விளக்குகிறது; சரிபார்க்க முடியாத எண்களையும் கூற்றுகளையும் தவிர்க்கிறது.',
          'கட்டுரைகள் முதலில் ஆங்கிலத்தில் எழுதப்பட்டு, பின்னர் தமிழில் மொழிபெயர்க்கப்படுகின்றன.',
        ],
      ),
      h2('Market figures', 'சந்தை எண்கள்'),
      p(
        'The market figures shown on the site are samples for illustration. They are not live prices and should not be used to make decisions. Please read the Disclaimer.',
        'தளத்தில் காட்டப்படும் சந்தை எண்கள் விளக்கத்துக்கான மாதிரிகள் மட்டுமே. அவை நேரலை விலைகள் அல்ல; முடிவுகள் எடுக்க அவற்றைப் பயன்படுத்தக் கூடாது. தயவுசெய்து பொறுப்புத் துறப்பைப் படியுங்கள்.',
      ),
      h2('A work in progress', 'தொடர்ந்து வளரும் தளம்'),
      p(
        'The site is new and still growing. More sections and articles will be added over time.',
        'தளம் புதியது; இன்னும் வளர்ந்து வருகிறது. காலப்போக்கில் மேலும் பிரிவுகளும் கட்டுரைகளும் சேர்க்கப்படும்.',
      ),
    ],
  },

  contact: {
    title: { en: 'Contact', ta: 'தொடர்புக்கு' },
    description: {
      en: 'How to get in touch with The Everyday Wonders.',
      ta: 'The Everyday Wonders-ஐத் தொடர்புகொள்வது எப்படி.',
    },
    blocks: [
      p(
        'We do not yet have a public contact address, and this page does not list one on purpose. We would rather say so than show a way of reaching us that does not work.',
        'எங்களிடம் இன்னும் பொது தொடர்பு முகவரி இல்லை; அதனால் இந்தப் பக்கத்தில் ஒன்றையும் குறிப்பிடவில்லை. வேலை செய்யாத தொடர்பு வழியைக் காட்டுவதை விட, இதை நேர்மையாகச் சொல்வதே சரி என்று கருதுகிறோம்.',
      ),
      h2('What this means', 'இதன் பொருள்'),
      ul(
        [
          'The site has no contact form, comment section or newsletter, so it does not collect any messages or personal details.',
          'A contact method will be added to this page when one is ready.',
        ],
        [
          'தளத்தில் தொடர்புப் படிவம், கருத்துப் பகுதி, செய்திமடல் எதுவும் இல்லை; எனவே இது எந்தச் செய்திகளையோ தனிப்பட்ட விவரங்களையோ சேகரிப்பதில்லை.',
          'ஒரு தொடர்பு வழி தயாரானதும் இந்தப் பக்கத்தில் சேர்க்கப்படும்.',
        ],
      ),
      h2('Found a mistake?', 'தவறு கண்டீர்களா?'),
      p(
        'Corrections are welcome. Until a contact method is added, we are unable to receive them through this site.',
        'திருத்தங்கள் வரவேற்கப்படுகின்றன. தொடர்பு வழி சேர்க்கப்படும் வரை, இந்தத் தளம் வழியாக அவற்றைப் பெற இயலாது.',
      ),
    ],
  },

  'privacy-policy': {
    title: { en: 'Privacy Policy', ta: 'தனியுரிமைக் கொள்கை' },
    description: {
      en: 'What information The Everyday Wonders does and does not collect about its visitors.',
      ta: 'The Everyday Wonders தன் பார்வையாளர்களைப் பற்றி எந்தத் தகவல்களைச் சேகரிக்கிறது, எவற்றைச் சேகரிப்பதில்லை.',
    },
    blocks: [
      p(
        'This page explains, in plain words, what happens to your information when you visit this site. It describes the site as it is built today.',
        'நீங்கள் இந்தத் தளத்துக்கு வரும்போது உங்கள் தகவல்களுக்கு என்ன நடக்கிறது என்பதை இந்தப் பக்கம் எளிய சொற்களில் விளக்குகிறது. தளம் இன்று எப்படி உருவாக்கப்பட்டுள்ளதோ அதை இது விவரிக்கிறது.',
      ),
      h2('What the site does not do', 'தளம் செய்யாதவை'),
      ul(
        [
          'It does not ask you to create an account or to enter any personal details.',
          'It does not set cookies of its own and does not store information in your browser.',
          'It does not use analytics or tracking tools.',
          'It does not show advertising.',
          'It does not load fonts, scripts or images from other companies. Everything is served from the site itself.',
        ],
        [
          'கணக்கு உருவாக்குமாறோ எந்தத் தனிப்பட்ட விவரத்தையும் உள்ளிடுமாறோ கேட்பதில்லை.',
          'தனக்கென்று குக்கீகளை அமைப்பதில்லை; உங்கள் உலாவியில் தகவல்களைச் சேமிப்பதில்லை.',
          'பகுப்பாய்வுக் கருவிகளையோ கண்காணிப்புக் கருவிகளையோ பயன்படுத்துவதில்லை.',
          'விளம்பரங்களைக் காட்டுவதில்லை.',
          'பிற நிறுவனங்களிடமிருந்து எழுத்துருக்கள், ஸ்கிரிப்டுகள், படங்களை ஏற்றுவதில்லை. அனைத்தும் தளத்திலிருந்தே வழங்கப்படுகின்றன.',
        ],
      ),
      h2('Hosting', 'தள ஹோஸ்டிங்'),
      p(
        'The site is hosted by Cloudflare. Like any web host, it handles technical information about each request, such as your IP address and the type of browser you use, in order to deliver the pages and keep the service secure. That processing is done by Cloudflare under its own privacy policy, and we do not receive it as a list of visitors.',
        'தளம் Cloudflare மூலம் ஹோஸ்ட் செய்யப்படுகிறது. எந்த இணைய ஹோஸ்டையும் போலவே, பக்கங்களை வழங்கவும் சேவையைப் பாதுகாப்பாக வைத்திருக்கவும், உங்கள் IP முகவரி, நீங்கள் பயன்படுத்தும் உலாவி வகை போன்ற ஒவ்வொரு கோரிக்கையின் தொழில்நுட்பத் தகவல்களை அது கையாள்கிறது. அந்தச் செயலாக்கம் Cloudflare-இன் சொந்தத் தனியுரிமைக் கொள்கையின்படி நடக்கிறது; பார்வையாளர் பட்டியலாக அதை நாங்கள் பெறுவதில்லை.',
      ),
      h2('Language choice', 'மொழித் தேர்வு'),
      p(
        'Choosing English or Tamil simply takes you to the page in that language. Your choice is not saved.',
        'ஆங்கிலம் அல்லது தமிழைத் தேர்ந்தெடுப்பது, அந்த மொழியிலுள்ள பக்கத்துக்கு உங்களை அழைத்துச் செல்வதே. உங்கள் தேர்வு சேமிக்கப்படுவதில்லை.',
      ),
      h2('Changes to this policy', 'இந்தக் கொள்கையில் மாற்றங்கள்'),
      p(
        'If the site starts to collect information, for example through analytics or a contact form, this page will be updated first and the date below will change.',
        'தளம் தகவல்களைச் சேகரிக்கத் தொடங்கினால், உதாரணமாக பகுப்பாய்வு அல்லது தொடர்புப் படிவம் மூலம், இந்தப் பக்கம் முதலில் புதுப்பிக்கப்படும்; கீழே உள்ள தேதியும் மாறும்.',
      ),
    ],
  },

  disclaimer: {
    title: { en: 'Disclaimer', ta: 'பொறுப்புத் துறப்பு' },
    description: {
      en: 'Important notes about the educational nature of the content on The Everyday Wonders.',
      ta: 'The Everyday Wonders உள்ளடக்கத்தின் கல்வித் தன்மை பற்றிய முக்கியக் குறிப்புகள்.',
    },
    blocks: [
      p(
        'Everything on The Everyday Wonders is general educational information. It is written to help you understand ideas, not to tell you what to do.',
        'The Everyday Wonders-இல் உள்ள அனைத்தும் பொதுவான கல்வித் தகவல்களே. அவை உங்களுக்கு என்ன செய்ய வேண்டும் என்று சொல்வதற்காக அல்ல, கருத்துகளைப் புரிந்துகொள்ள உதவுவதற்காக எழுதப்பட்டவை.',
      ),
      h2('Finance and markets', 'நிதியும் சந்தைகளும்'),
      ul(
        [
          'Articles about money, markets, gold, shares, indices and similar topics are for education only.',
          'They are not investment, tax, legal or financial advice, and they do not take your personal situation into account.',
          'Nothing on the site is a recommendation to buy, sell or hold anything.',
          'Investments can lose value. Please speak to a qualified professional before making financial decisions.',
        ],
        [
          'பணம், சந்தைகள், தங்கம், பங்குகள், குறியீடுகள் போன்ற தலைப்புகளிலான கட்டுரைகள் கல்விக்காக மட்டுமே.',
          'அவை முதலீட்டு, வரி, சட்ட அல்லது நிதி ஆலோசனை அல்ல; உங்கள் தனிப்பட்ட சூழ்நிலையையும் கணக்கில் கொள்ளவில்லை.',
          'எதையும் வாங்கவோ விற்கவோ வைத்திருக்கவோ தளத்தில் உள்ள எதுவும் பரிந்துரை அல்ல.',
          'முதலீடுகள் மதிப்பை இழக்கக்கூடும். நிதி முடிவுகள் எடுக்கும் முன் தகுதிவாய்ந்த நிபுணரிடம் பேசுங்கள்.',
        ],
      ),
      h2('Sample market figures', 'மாதிரிச் சந்தை எண்கள்'),
      p(
        'The market figures shown on the site are samples for illustration. They are not live, may not be accurate, and must not be used to make decisions.',
        'தளத்தில் காட்டப்படும் சந்தை எண்கள் விளக்கத்துக்கான மாதிரிகள். அவை நேரலை அல்ல; துல்லியமாக இல்லாமலும் இருக்கலாம்; முடிவுகள் எடுக்க அவற்றைப் பயன்படுத்தக் கூடாது.',
      ),
      h2('Health topics', 'உடல்நலத் தலைப்புகள்'),
      p(
        'Articles about the human body are general education and are not medical advice. If you have a health concern, please speak to a doctor.',
        'மனித உடல் பற்றிய கட்டுரைகள் பொதுக் கல்விக்கானவை; மருத்துவ ஆலோசனை அல்ல. உடல்நலம் குறித்த கவலை இருந்தால் மருத்துவரிடம் பேசுங்கள்.',
      ),
      h2('Accuracy', 'துல்லியம்'),
      p(
        'We take care to explain well-established ideas correctly, but we cannot promise that every article is complete, up to date or free of mistakes. The site is provided as it is, and you use the information at your own judgement.',
        'நன்கு நிறுவப்பட்ட கருத்துகளைச் சரியாக விளக்க நாங்கள் கவனம் எடுக்கிறோம்; ஆனால் ஒவ்வொரு கட்டுரையும் முழுமையானது, புதுப்பிக்கப்பட்டது அல்லது பிழையற்றது என்று உறுதியளிக்க இயலாது. தளம் உள்ளவாறே வழங்கப்படுகிறது; தகவல்களை உங்கள் சொந்த விவேகத்தின்படி பயன்படுத்துங்கள்.',
      ),
    ],
  },
};
