//src/components/pharmassist/PharmAbout.js
'use client';

import { motion } from 'framer-motion';
import { Shield, Users, Globe, Clock, Award, Star } from 'lucide-react';

const aboutStats = [
  { 
    value: "100+", 
    label: "Pharmacies Served",
    icon: Users
  },
  { 
    value: "99.9%", 
    label: "Uptime Guarantee",
    icon: Shield
  },
  { 
    value: "24/7", 
    label: "Local Support",
    icon: Clock
  },
  { 
    value: "50M+", 
    label: "Transactions",
    icon: Award
  }
];

const keyPoints = [
  {
    icon: Globe,
    title: "Built for Pakistan",
    description: "Understands local regulations and business practices with Pakistani pharmacists in mind."
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Stay compliant with Pakistani pharmacy regulations and drug authority requirements."
  },
  {
    icon: Users,
    title: "Local Expertise", 
    description: "Technical knowledge with extensive understanding of Pakistani pharmacy operations."
  }
];

export default function PharmAbout() {
  return (
    <section id="pharm-about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Pakistan's Leading Pharmacy POS
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Part of iCreative Solutions' Smart POS Systems, built specifically for pharmacies and local businesses.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {aboutStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-cyan-500 rounded-lg text-white mb-3 mx-auto">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-2xl font-bold text-cyan-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Points */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white mr-3">
                  <point.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {point.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-cyan-50 dark:bg-cyan-900/10 rounded-xl p-8 mb-12 border border-cyan-200 dark:border-cyan-700/50"
        >
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg font-medium text-gray-700 dark:text-gray-300 italic mb-4">
              "PharmAssist transformed our pharmacy operations. The bilingual interface and local compliance features make it perfect for Pakistani businesses."
            </blockquote>
            <div className="text-center">
              <div className="font-semibold text-gray-900 dark:text-white">
                Dr. Ahmad Khan
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                Pharmacy Owner, Lahore
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            The Smart Choice for Modern Pakistani Pharmacies
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              PharmAssist represents the future of pharmacy management in Pakistan. Built by a team that understands both technology and local business needs.
            </p>
            
            <p>
              From small neighborhood pharmacies to large chains, PharmAssist scales with your business with continuous innovation and regulatory compliance.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg">
              <Award className="w-4 h-4 text-cyan-500" />
              <span className="text-gray-700 dark:text-gray-300">POS Leader</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg">
              <Shield className="w-4 h-4 text-cyan-500" />
              <span className="text-gray-700 dark:text-gray-300">Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-3 py-2 rounded-lg">
              <Globe className="w-4 h-4 text-cyan-500" />
              <span className="text-gray-700 dark:text-gray-300">Made in Pakistan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}