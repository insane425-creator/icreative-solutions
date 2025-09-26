'use client';

import { Zap, Shield, BarChart3, Globe, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Checkout",
    description: "Optimized for peak hours and busy stores with instant transaction processing and minimal wait times."
  },
  {
    icon: Shield,
    title: "Secure & Trustworthy",
    description: "Bank-grade security with regular backups, data encryption, and 99.9% uptime guarantee for your peace of mind."
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "Comprehensive dashboards and reports that drive informed business decisions with real-time insights."
  },
  {
    icon: Globe,
    title: "Designed for Pakistan",
    description: "Local compliance, Urdu/English support, and offline-first reliability built for Pakistani businesses."
  },
  {
    icon: Clock,
    title: "24/7 Reliability",
    description: "Always-on system with automatic updates and continuous monitoring to keep your business running."
  },
  {
    icon: Headphones,
    title: "Local Support Team",
    description: "Dedicated Pakistani support team available round-the-clock to help you succeed and grow."
  }
];

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-sky-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative">
        {/* Icon */}
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <Icon className="w-7 h-7" />
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
            Why Choose iCreative Solutions?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Built with Pakistani Businesses in Mind
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            We understand the unique challenges of running businesses in Pakistan. 
            That's why our solutions combine <span className="font-semibold text-cyan-600 dark:text-cyan-400">global tech standards</span> with 
            <span className="font-semibold text-cyan-600 dark:text-cyan-400"> local business needs</span>.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Trusted by 100+ Pakistani businesses
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Growing every day
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}