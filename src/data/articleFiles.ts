// Facts about the article files that have to be known immediately (not after an
// `await`): how long each article takes to read, and which languages exist.
// The article text itself is loaded through the `articles` content collection.

import type { Lang } from '../i18n/ui';

const files = {
  en: import.meta.glob('/src/content/articles/en/*.md', { query: '?raw', import: 'default', eager: true }),
  ta: import.meta.glob('/src/content/articles/ta/*.md', { query: '?raw', import: 'default', eager: true }),
} as Record<Lang, Record<string, string>>;

const slugOf = (path: string) => path.split('/').pop()!.replace(/\.md$/, '');

/** Slugs that have an article file, per language. */
export const articleSlugs: Record<Lang, Set<string>> = {
  en: new Set(Object.keys(files.en).map(slugOf)),
  ta: new Set(Object.keys(files.ta).map(slugOf)),
};

export const hasTranslation = (lang: Lang, slug: string) => articleSlugs[lang].has(slug);

// A rough reading time: the English text at 200 words a minute, rounded up.
// Both languages show this same figure because it is the same article.
const WORDS_PER_MINUTE = 200;

function wordCount(markdown: string): number {
  const body = markdown.replace(/^---[\s\S]*?\n---/, '');
  const words = body.replace(/^[\s>#*-]+/gm, '').match(/\S+/g);
  return words ? words.length : 0;
}

export const readingMinutes: Record<string, number> = Object.fromEntries(
  Object.entries(files.en).map(([path, md]) => [
    slugOf(path),
    Math.max(1, Math.ceil(wordCount(md) / WORDS_PER_MINUTE)),
  ]),
);

/** Reading time for an article. Throws if the English file is missing, so a typo can't ship. */
export function minutesFor(slug: string): number {
  const minutes = readingMinutes[slug];
  if (minutes === undefined) {
    throw new Error(`No English article file for "${slug}" (expected src/content/articles/en/${slug}.md)`);
  }
  return minutes;
}

/**
 * Where an article lives for a reader of `lang`: their own language when it has
 * been translated, otherwise the English article.
 */
export function articleHref(lang: Lang, slug: string): string {
  const where = lang === 'ta' && !hasTranslation('ta', slug) ? 'en' : lang;
  return `/${where}/articles/${slug}/`;
}
