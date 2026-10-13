// /sitemap.xml — built from the same data as the pages, so it can't drift.
// Each page lists its English and Tamil versions as alternates. A <lastmod> date is
// given only where the site actually records one (articles, guides, info pages).
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { allArticles } from '../data/articles';
import { hasTranslation } from '../data/articleFiles';
import { financeTopics } from '../data/home';
import { hasTopicTranslation } from '../data/topics';
import { sectionOrder } from '../data/sections';
import { infoPages, pagesUpdated, type PageKey } from '../data/pages';
import type { Lang } from '../i18n/ui';

interface Entry {
  /** Path after the language prefix, e.g. "" (home) or "articles/why-is-the-sky-blue/". */
  path: string;
  langs: Lang[];
  lastmod?: string;
}

const day = (d: Date | string) => new Date(d).toISOString().slice(0, 10);
const both: Lang[] = ['en', 'ta'];

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('Set `site` in astro.config.mjs to build the sitemap.');
  const origin = site.origin;

  const articles = await getCollection('articles');
  const topics = await getCollection('topics');
  const published = (slug: string) => articles.find((e) => e.id === `en/${slug}`)?.data.published;
  const updated = (slug: string) => topics.find((e) => e.id === `en/${slug}`)?.data.updated;

  const entries: Entry[] = [
    { path: '', langs: both },
    ...sectionOrder.map((s): Entry => ({ path: `${s}/`, langs: both })),
    { path: 'topics/', langs: both },
    { path: 'articles/', langs: both },
    ...allArticles.map((a): Entry => ({
      path: `articles/${a.slug}/`,
      langs: hasTranslation('ta', a.slug) ? both : ['en'],
      lastmod: published(a.slug) ? day(published(a.slug)!) : undefined,
    })),
    ...financeTopics.map((f): Entry => ({
      path: `markets/${f.slug}/`,
      langs: hasTopicTranslation(f.slug) ? both : ['en'],
      lastmod: updated(f.slug) ? day(updated(f.slug)!) : undefined,
    })),
    ...(Object.keys(infoPages) as PageKey[]).map((k): Entry => ({
      path: `${k}/`,
      langs: both,
      lastmod: day(pagesUpdated),
    })),
  ];

  const url = (lang: Lang, path: string) => `${origin}/${lang}/${path}`;
  const body = entries
    .flatMap((e) =>
      e.langs.map((lang) => {
        const alternates = [
          ...e.langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${url(l, e.path)}"/>`),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${url('en', e.path)}"/>`,
        ].join('\n');
        return [
          '  <url>',
          `    <loc>${url(lang, e.path)}</loc>`,
          e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : '',
          alternates,
          '  </url>',
        ]
          .filter(Boolean)
          .join('\n');
      }),
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
