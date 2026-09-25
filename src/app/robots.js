// src/app/robots.js
// Next.js App Router — generates /robots.txt automatically at build time.

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://icreative.vercel.app/sitemap.xml',
    host: 'https://icreative.vercel.app',
  };
}
