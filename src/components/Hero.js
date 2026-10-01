'use client';

import { ArrowRight, Play, Users, ShieldCheck, Cpu, Database, Activity } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const handleExploreProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRequestDemo = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Background with modern enterprise mesh gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-sky-500/10 to-blue-600/10 dark:from-cyan-500/15 dark:via-blue-600/15 dark:to-indigo-600/15 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          {/* Systems Ltd Style Enterprise Category Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="uppercase tracking-wider">Enterprise Digital Solutions & Retail Tech</span>
          </div>
          
          {/* Main Heading - Confident & Powerful */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-950 dark:text-white tracking-tight leading-[1.12] mb-8">
            Reimagining Possibilities with{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-blue-600 dark:from-cyan-400 dark:via-sky-300 dark:to-blue-500 bg-clip-text text-transparent">
              Intelligent Software
            </span>
          </h1>
          
          {/* Subtitle with Enterprise Positioning */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
            We partner with forward-thinking businesses and retail leaders across Pakistan to engineer resilient POS architectures, automated workflows, and data-driven growth.
          </p>
          
          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-20">
            <button 
              onClick={handleExploreProducts}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-sky-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <span>Explore Enterprise Solutions</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={handleRequestDemo}
              className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl font-semibold border border-gray-200 dark:border-gray-800 shadow-sm hover:border-cyan-500/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
            >
              <Play className="w-4 h-4 fill-cyan-500 text-cyan-500" />
              <span>Request Consultation</span>
            </button>

            <Link 
              href="/about"
              className="w-full sm:w-auto px-8 py-4 bg-gray-100/80 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Users className="w-4 h-4 text-cyan-500" />
              <span>About iCreative</span>
            </Link>
          </div>
          
          {/* Systems Ltd Style Enterprise Impact Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-gray-200/80 dark:border-gray-800/80 text-left">
            <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-800/60 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-2">
                <Activity className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white">Zero</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                Migration Downtime
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-800/60 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white">99.9%</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                High-Availability Uptime SLA
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-800/60 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-2">
                <Database className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white">100%</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                Offline-First Fault Tolerance
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-800/60 backdrop-blur-sm">
              <div className="flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 mb-2">
                <Cpu className="w-5 h-5" />
                <span className="text-2xl sm:text-3xl font-bold text-gray-950 dark:text-white">24/7</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                Local Engineering Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}