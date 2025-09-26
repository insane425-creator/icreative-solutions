import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'GrowAssist - Coming Soon',
  description: 'Advanced grocery store POS system coming soon.',
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