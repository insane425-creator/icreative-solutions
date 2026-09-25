// src/app/about/layout.js
// Server component — exports metadata for the /about route.
// page.js stays 'use client'; Next.js reads metadata from this layout during SSR.

export const metadata = {
  title: 'About Us',
  description:
    'Meet the team behind iCreative Solutions — our founder, core leadership, and the innovation community building POS software for Pakistani businesses.',
  alternates: {
    canonical: 'https://icreative.vercel.app/about',
  },
  openGraph: {
    title: 'About Us | iCreative Solutions',
    description:
      'Discover the passionate team at iCreative Solutions building smart POS software for pharmacies and grocery stores across Pakistan.',
    url: 'https://icreative.vercel.app/about',
    type: 'website',
  },
};

export default function AboutLayout({ children }) {
  return children;
}
