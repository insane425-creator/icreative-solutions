import { Mail, MessageSquare } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-5xl mb-8">❤️</div>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Join Our Family?
        </h2>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you're a developer, designer, or business professional, we'd love to have you as part of our growing community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg">
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </button>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition-all duration-300 border-2 border-gray-700">
            <MessageSquare className="w-5 h-5 mr-2" />
            Join Discussion
          </button>
        </div>
      </div>
    </section>
  );
}