//src/components/pharmassist/PharmAbout.js
'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Globe, Clock, Zap, Award, Star } from 'lucide-react';

const aboutStats = [
  { 
    value: "100+", 
    label: "Pharmacies Served",
    description: "Pakistani pharmacies trust PharmAssist",
    icon: Users
  },
  { 
    value: "99.9%", 
    label: "Uptime Guarantee",
    description: "Reliable operations when you need it most",
    icon: Shield
  },
  { 
    value: "24/7", 
    label: "Local Support",
    description: "Pakistani support team always available",
    icon: Clock
  },
  { 
    value: "50M+", 
    label: "Transactions Processed",
    description: "Proven at scale across Pakistan",
    icon: Zap
  }
];

const keyPoints = [
  {
    icon: Globe,
    title: "Built for Pakistan",
    description: "PharmAssist understands the unique challenges of running pharmacies in Pakistan. From local regulations to business practices, every feature is designed with Pakistani pharmacists in mind."
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Stay compliant with Pakistani pharmacy regulations and drug authority requirements. Built-in compliance tools ensure your business meets all legal standards."
  },
  {
    icon: Users,
    title: "Local Expertise", 
    description: "Our team combines deep technical knowledge with extensive understanding of Pakistani pharmacy operations, ensuring practical solutions for real-world challenges."
  }
];

const testimonialHighlight = {
  quote: "PharmAssist transformed our pharmacy operations. The bilingual interface and local compliance features make it perfect for Pakistani businesses.",
  author: "Dr. Ahmad Khan",
  position: "Pharmacy Owner, Lahore",
  rating: 5
};

export default function PharmAbout() {
  return (
    <section id="pharm-about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
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
            About PharmAssist
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Pakistan's Leading Pharmacy POS
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            PharmAssist is part of iCreative Solutions' Smart POS Systems in Pakistan, built specifically for pharmacies, 
            grocery stores, and local businesses. With real-time analytics, expiry management, and bilingual support.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl text-white mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Points */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl text-white mb-6">
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {point.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-cyan-200/50 dark:border-cyan-700/50 mb-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(testimonialHighlight.rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium text-gray-700 dark:text-gray-300 italic mb-6">
              "{testimonialHighlight.quote}"
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-gray-900 dark:text-white">
                {testimonialHighlight.author}
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {testimonialHighlight.position}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            The Smart Choice for Modern Pakistani Pharmacies
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              PharmAssist represents the future of pharmacy management in Pakistan. 
              Built by a team that understands both technology and local business needs, 
              it bridges the gap between global software standards and Pakistani market requirements.
            </p>
            
            <p>
              From small neighborhood pharmacies to large chains, PharmAssist scales with your business. 
              Our commitment to local support, continuous innovation, and regulatory compliance makes us 
              the trusted choice for Pakistan's growing pharmacy sector.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-cyan-500" />
              <span className="text-gray-700 dark:text-gray-300">Pharmacy POS Leader</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-cyan-500" />
              <span className="text-gray-700 dark:text-gray-300">Regulatory Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-cyan-500" />
              <span className="text-gray-700 dark:text-gray-300">Made in Pakistan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}