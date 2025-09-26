// src/app/layout.js
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'iCreative Solutions - Smarter POS Solutions for Pakistani Businesses',
  description: 'Empowering pharmacies and grocery stores with intelligent, user-friendly point-of-sale systems designed specifically for local business needs.',
  keywords: 'POS, Pakistan, Pharmacy, Grocery, Point of Sale, Business Software',
  authors: [{ name: 'iCreative Solutions' }],
  openGraph: {
    title: 'iCreative Solutions - Smarter POS Solutions',
    description: 'Intelligent POS systems for Pakistani businesses',
    url: 'https://icreative.vercel.app',
    siteName: 'iCreative Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'iCreative Solutions - Smarter POS Solutions',
    description: 'Intelligent POS systems for Pakistani businesses',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}