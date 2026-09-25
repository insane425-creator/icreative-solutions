import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'GrowAssist – Grocery Store POS Software',
  description:
    'GrowAssist is a smart grocery store POS system coming soon from iCreative Solutions. Join the waitlist for early access.',
  alternates: {
    canonical: 'https://icreative.vercel.app/growassist',
  },
  openGraph: {
    title: 'GrowAssist – Grocery Store POS | iCreative Solutions',
    description: 'Advanced grocery store POS software for Pakistani businesses. Coming soon — request early access today.',
    url: 'https://icreative.vercel.app/growassist',
    type: 'website',
  },
};

export default function GrowAssistPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <NavigationBar />
      <div className="pt-32 pb-20 px-4 text-center">
        <h1 className="text-6xl font-bold mb-6 gradient-text">
          GrowAssist
        </h1>
        <p className="text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Advanced grocery store POS system coming soon...
        </p>
        <a
          href="/#contact"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <span>Request Early Access</span>
        </a>
      </div>
      <Footer />
    </div>
  );
}