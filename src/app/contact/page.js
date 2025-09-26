//src/app/contact/page.js
import NavigationBar from '../../components/NavigationBar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Contact - iCreative Solutions',
  description: 'Get in touch with iCreative Solutions for POS system demos and business inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}