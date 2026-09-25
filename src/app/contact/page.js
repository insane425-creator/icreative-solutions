//src/app/contact/page.js
import NavigationBar from '../../components/NavigationBar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with iCreative Solutions. Book a free demo, ask about PharmAssist or GrowAssist, or call us at +92 327 5848916.',
  alternates: {
    canonical: 'https://icreative.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact Us | iCreative Solutions',
    description: 'Reach out for a free POS software demo or business inquiry. We reply instantly via WhatsApp.',
    url: 'https://icreative.vercel.app/contact',
    type: 'website',
  },
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