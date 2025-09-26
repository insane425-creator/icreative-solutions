// src/app/prducts/page.js
import NavigationBar from '../../components/NavigationBar';
import Products from '../../components/Products';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Products - iCreative Solutions',
  description: 'Explore our range of POS solutions including PharmAssist and GrowAssist for Pakistani businesses.',
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