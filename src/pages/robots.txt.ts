// /robots.txt — lets all crawlers in and points them to the sitemap.
// Built from `site` in astro.config.mjs, so it follows a custom domain automatically.
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error('Set `site` in astro.config.mjs to build robots.txt.');
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', site).href}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
