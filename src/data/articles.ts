// The article registry: which articles exist, and checks that they are complete.
//
// Titles, categories and pictures come from src/data/home.ts; the text comes from
// the `articles` content collection (src/content/articles/<lang>/<slug>.md).
//
// To add an article:
//   1. add it to one of the lists in src/data/home.ts (slug, category, title, image);
//   2. add src/content/articles/en/<slug>.md  (with dek, published and related);
//   3. optionally add src/content/articles/ta/<slug>.md (with dek).
// The build stops with a clear message if any of this is inconsistent.

import { getCollection, getEntry } from 'astro:content';
import {
  type Article,
  type CategoryKey,
  featured,
  topStories,
  marketAnalysis,
  latestArticles,
} from './home';
import { hasTranslation } from './articleFiles';
import type { Lang } from '../i18n/ui';

/** Every article, once each, in the order they appear on the homepage. */
export const allArticles: Article[] = (() => {
  const seen = new Set<string>();
  const list: Article[] = [];
  for (const a of [featured, ...topStories, marketAnalysis, ...latestArticles]) {
    if (!seen.has(a.slug)) {
      seen.add(a.slug);
      list.push(a);
    }
  }
  return list;
})();

export const getArticle = (slug: string): Article | undefined => allArticles.find((a) => a.slug === slug);

/** The articles that belong to one section. */
export const articlesFor = (category: CategoryKey): Article[] => allArticles.filter((a) => a.category === category);

/** The one-line summary of an article in a language, falling back to English. */
export async function getDek(slug: string, lang: Lang): Promise<string> {
  const where: Lang = lang === 'ta' && hasTranslation('ta', slug) ? 'ta' : 'en';
  const entry = await getEntry('articles', `${where}/${slug}`);
  if (!entry) throw new Error(`No article text found for "${slug}"`);
  return entry.data.dek;
}

/**
 * Stops the build, with a message that says what to fix, when the article files and
 * the registry disagree. Called when the article pages are generated.
 */
export async function checkArticles(): Promise<void> {
  const entries = await getCollection('articles');
  const ids = new Set(entries.map((e) => e.id));
  const problems: string[] = [];
  const known = new Set(allArticles.map((a) => a.slug));

  for (const a of allArticles) {
    const master = entries.find((e) => e.id === `en/${a.slug}`);
    if (!master) {
      problems.push(`"${a.slug}" is on the site but has no English file (src/content/articles/en/${a.slug}.md)`);
      continue;
    }
    if (!master.data.published) problems.push(`en/${a.slug}.md needs a "published" date`);
    const related = master.data.related ?? [];
    if (related.length === 0) problems.push(`en/${a.slug}.md needs at least one "related" article`);
    for (const r of related) {
      if (!known.has(r)) problems.push(`en/${a.slug}.md lists related article "${r}", which does not exist`);
      if (r === a.slug) problems.push(`en/${a.slug}.md lists itself as related`);
    }
  }

  for (const e of entries) {
    const [lang, slug] = e.id.split('/');
    if (lang !== 'en' && lang !== 'ta') problems.push(`${e.id}: unknown language folder "${lang}"`);
    else if (!known.has(slug)) problems.push(`${e.id}.md has no matching article in src/data/home.ts`);
    else if (lang === 'ta' && !ids.has(`en/${slug}`)) problems.push(`ta/${slug}.md has no English original`);
  }

  if (problems.length > 0) {
    throw new Error(`Article check failed:\n  - ${problems.join('\n  - ')}`);
  }
}
