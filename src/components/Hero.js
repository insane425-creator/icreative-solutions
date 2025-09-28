'use client';

import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const handleExploreProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestDemo = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with subtle gradient and wave pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDUwQzI1IDI1IDc1IDc1IDEwMCA1MFYxMDBIMFY1MFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwNkI2RDQiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwRjg0RjMiIHN0b3Atb3BhY2l0eT0iMC4xIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-8 shadow-sm">
            <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></div>
            Revolutionizing POS Solutions in Pakistan
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
              Smarter POS Solutions
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              for Pakistani Businesses
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300 font-light">
            Empowering pharmacies and grocery stores with intelligent, 
            user-friendly POS systems designed specifically for local business needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button 
              onClick={handleExploreProducts}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Explore Our Products</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={handleRequestDemo}
              className="group px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Request Demo</span>
            </button>
          </div>
          
          {/* Secondary CTA - Team */}
          <div className="flex justify-center mb-16">
            <a 
              href="/about"
              className="group inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium text-lg underline-offset-4 hover:underline"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>100+ Businesses Trust Us</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">⚡</span>
              </div>
              <span>99.9% Uptime Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">24</span>
              </div>
              <span>24/7 Local Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}