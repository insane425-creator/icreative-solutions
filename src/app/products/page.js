// src/app/prducts/page.js
import NavigationBar from '../../components/NavigationBar';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Our Products',
  description:
    'Explore PharmAssist (pharmacy POS) and GrowAssist (grocery store POS) — intelligent retail management software built for Pakistani businesses.',
  alternates: {
    canonical: 'https://icreative.vercel.app/products',
  },
  openGraph: {
    title: 'Our Products | iCreative Solutions',
    description: 'PharmAssist & GrowAssist — smart, offline-capable POS software for pharmacies and grocery stores in Pakistan.',
    url: 'https://icreative.vercel.app/products',
    type: 'website',
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />
      <div className="pt-24">
        <Products />
      </div>
      <Footer />
    </div>
  );
}