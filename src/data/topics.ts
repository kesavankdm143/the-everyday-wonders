// The "Money & Markets" guides: /en/markets/<slug>/ and /ta/markets/<slug>/.
// Title, picture and short description come from `financeTopics` in home.ts; the
// text comes from the `topics` content collection (src/content/topics/<lang>/).

import { getCollection, getEntry } from 'astro:content';
import { financeTopics } from './home';
import { getArticle } from './articles';
import type { MarketItem } from './home';
import type { Lang } from '../i18n/ui';

const taFiles = import.meta.glob('/src/content/topics/ta/*.md');
const taSlugs = new Set(Object.keys(taFiles).map((p) => p.split('/').pop()!.replace(/\.md$/, '')));

/** Where a guide lives for a reader of `lang` (their language if translated, else English). */
export function topicHref(lang: Lang, slug: string): string {
  const where = lang === 'ta' && !taSlugs.has(slug) ? 'en' : lang;
  return `/${where}/markets/${slug}/`;
}
export const hasTopicTranslation = (slug: string) => taSlugs.has(slug);

/** Which SAMPLE market tiles to show on each guide (none for company results). */
export const topicMarkets: Record<string, MarketItem['icon'][]> = {
  'gold-silver': ['gold', 'silver'],
  'crude-oil-copper': ['oil', 'copper'],
  'bitcoin-crypto': ['bitcoin'],
  'company-results': [],
};

export const getTopic = (slug: string) => financeTopics.find((f) => f.slug === slug);

export async function getTopicDek(slug: string, lang: Lang): Promise<string> {
  const where: Lang = lang === 'ta' && taSlugs.has(slug) ? 'ta' : 'en';
  const entry = await getEntry('topics', `${where}/${slug}`);
  if (!entry) throw new Error(`No guide text for "${slug}"`);
  return entry.data.dek;
}

/** Stops the build with a clear message when guide files and the registry disagree. */
export async function checkTopics(): Promise<void> {
  const entries = await getCollection('topics');
  const ids = new Set(entries.map((e) => e.id));
  const problems: string[] = [];
  for (const f of financeTopics) {
    const en = entries.find((e) => e.id === `en/${f.slug}`);
    if (!en) { problems.push(`topic "${f.slug}" has no English file (src/content/topics/en/${f.slug}.md)`); continue; }
    if (!en.data.updated) problems.push(`en/${f.slug}.md needs an "updated" date`);
    for (const r of en.data.related ?? []) if (!getArticle(r)) problems.push(`en/${f.slug}.md lists unknown article "${r}"`);
    if (!(f.slug in topicMarkets)) problems.push(`topic "${f.slug}" is missing from topicMarkets`);
  }
  for (const e of entries) {
    const [lang, slug] = e.id.split('/');
    if (!getTopic(slug)) problems.push(`${e.id}.md has no matching topic in src/data/home.ts`);
    else if (lang === 'ta' && !ids.has(`en/${slug}`)) problems.push(`ta/${slug}.md has no English original`);
  }
  if (problems.length) throw new Error(`Topic check failed:\n  - ${problems.join('\n  - ')}`);
}
