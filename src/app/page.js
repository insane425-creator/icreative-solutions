import NavigationBar from '../components/NavigationBar';
import Hero from '../components/Hero';
import Products from '../components/Products';
import HomeFounderSection from '../components/HomeFounderSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata = {
  title: 'iCreative Solutions – Enterprise Software & Smart POS Solutions',
  description:
    'Engineering next-generation digital solutions, resilient POS architectures, and enterprise software for Pakistani businesses and retail leaders.',
  alternates: {
    canonical: 'https://icreative.vercel.app',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />
      <Hero />
      <Products />
      <HomeFounderSection />
      <Contact />
      <Footer />
    </div>
  );
}