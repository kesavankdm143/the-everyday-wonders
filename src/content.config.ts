// Where the article text lives.
//
//   src/content/articles/en/<slug>.md   the English article (the master record)
//   src/content/articles/ta/<slug>.md   its Tamil translation (optional)
//
// The slug is the file name and must match an article in src/data/home.ts, which
// holds the title, category and picture. A Tamil page only exists when a Tamil
// file does; until then Tamil readers are sent to the English article.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    /** One or two sentences: shown under the title and used as the page description. */
    dek: z.string().min(20),
    /** The day the article went live on this site (English file only). */
    published: z.coerce.date().optional(),
    /** Slugs of related articles, 2–3 of them (English file only). */
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
