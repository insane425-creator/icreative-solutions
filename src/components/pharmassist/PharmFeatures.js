//src/components/pharmassist/PharmFeatures.js
'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Globe, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Checkout",
    description: "Barcode-first & keyboard-first layouts designed for peak pharmacy hours with shortcut keys (F1-F11) for instant navigation.",
    benefits: ["Barcode + keyboard layouts", "F1-F11 shortcut keys", "Optimized for busy hours", "Zero learning curve"]
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Daily backups, 99.9% uptime guarantee, and secure transactions with full audit trails for regulatory compliance.",
    benefits: ["Daily automated backups", "99.9% uptime SLA", "Secure data encryption", "Complete audit trails"]
  },
  {
    icon: BarChart3,
    title: "Smart Analytics Dashboard",
    description: "15+ real-time stat cards with sales trends, cash flow insights, and drill-down capabilities by day, week, or month.",
    benefits: ["15+ dashboard widgets", "Real-time insights", "Sales & cash flow trends", "Custom date ranges"]
  },
  {
    icon: Globe,
    title: "Built for Pakistan",
    description: "Dual language support (Urdu/English), local compliance tools, offline-first design for reliable operations.",
    benefits: ["Urdu/English interface", "Local regulations", "Offline-first design", "Pakistani business needs"]
  },
  {
    icon: Clock,
    title: "24/7 Reliability",
    description: "Always-on system with automatic updates, continuous monitoring, and emergency support for critical operations.",
    benefits: ["Automatic updates", "Continuous monitoring", "Emergency support", "Zero downtime goals"]
  },
  {
    icon: Headphones,
    title: "Local Support Team",
    description: "Dedicated Pakistani support team available round-the-clock with local language support and business understanding.",
    benefits: ["Pakistani support team", "24/7 availability", "Local language support", "Business expertise"]
  }
];

function FeatureCard({ icon: Icon, title, description, benefits }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 shadow-sm hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1"
    >
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
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {description}
        </p>
        
        {/* Benefits list */}
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PharmFeatures() {
  return (
    <section id="pharm-features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6"
          >
            Why PharmAssist?
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            More Than a Billing Tool
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            PharmAssist is a smart pharmacy management system designed for Pakistani businesses. 
            From expiry alerts to insurance billing, it keeps your pharmacy 
            <span className="font-semibold text-cyan-600 dark:text-cyan-400"> compliant, profitable, and stress-free</span>.
          </motion.p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              benefits={feature.benefits}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-6 p-6 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Trusted by 100+ Pakistani pharmacies
              </span>
            </div>
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                PharmAssist turns your pharmacy into a smarter business
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}