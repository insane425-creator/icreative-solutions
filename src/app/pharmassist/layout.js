// src/app/pharmassist/layout.js
// Server component — exports metadata for the /pharmassist route.
// page.js stays 'use client'; Next.js reads metadata from this layout during SSR.

export const metadata = {
  title: 'PharmAssist – Pharmacy POS Software',
  description:
    'PharmAssist is an intelligent, offline-capable pharmacy management and point-of-sale system built for Pakistani pharmacies. Manage inventory, billing, and reports effortlessly.',
  alternates: {
    canonical: 'https://icreative.vercel.app/pharmassist',
  },
  keywords: [
    'pharmacy software Pakistan',
    'pharmacy POS',
    'pharmacy management system',
    'PharmAssist',
    'medical store software Pakistan',
    'offline pharmacy billing',
  ],
  openGraph: {
    title: 'PharmAssist – Pharmacy POS Software | iCreative Solutions',
    description:
      'Smart, offline-first pharmacy POS software for Pakistani pharmacies. Inventory, billing & reports in one place.',
    url: 'https://icreative.vercel.app/pharmassist',
    type: 'website',
  },
};

export default function PharmAssistLayout({ children }) {
  return children;
}
