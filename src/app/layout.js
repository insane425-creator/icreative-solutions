// src/app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppFloatingWidget from '../components/WhatsAppFloatingWidget'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://icreative.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'iCreative Solutions – Smart POS Software for Pakistani Businesses',
    template: '%s | iCreative Solutions',
  },
  description:
    'iCreative Solutions empowers pharmacies and grocery stores across Pakistan with intelligent, offline-capable point-of-sale software — PharmAssist & GrowAssist.',
  keywords: [
    'POS software Pakistan',
    'pharmacy POS Pakistan',
    'grocery store POS',
    'point of sale Abbottabad',
    'PharmAssist',
    'GrowAssist',
    'retail management software Pakistan',
    'iCreative Solutions',
  ],
  authors: [{ name: 'iCreative Solutions', url: SITE_URL }],
  creator: 'iCreative Solutions',
  publisher: 'iCreative Solutions',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: 'iCreative Solutions – Smart POS Software for Pakistani Businesses',
    description:
      'Intelligent, offline-capable POS systems designed specifically for pharmacies and grocery stores in Pakistan.',
    url: SITE_URL,
    siteName: 'iCreative Solutions',
    locale: 'en_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iCreative Solutions – Smart POS Software',
    description:
      'Intelligent POS systems for pharmacies & grocery stores in Pakistan.',
    creator: '@icreativepk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <WhatsAppFloatingWidget />
      </body>
    </html>
  )
}