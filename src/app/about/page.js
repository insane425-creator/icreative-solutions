import NavigationBar from '../../components/NavigationBar';
import About from '../../components/About';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About - iCreative Solutions',
  description: 'Learn about iCreative Solutions mission to transform Pakistani businesses with intelligent POS systems.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </div>
  );
}