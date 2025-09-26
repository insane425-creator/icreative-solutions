//src/app/page.js
import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />
      <Hero />
      <Features />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}