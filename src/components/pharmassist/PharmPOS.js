//src/components/pharmassist/PharmPOS.js
'use client';

import { motion } from 'framer-motion';
import { Scan, Keyboard, CreditCard, Receipt, Users, ArrowRight } from 'lucide-react';

const posFeatures = [
  {
    icon: Scan,
    title: "Barcode-First Design",
    description: "Lightning-fast scanning with instant product lookup and pricing",
    keypoints: ["Instant barcode scanning", "Product auto-complete", "Batch tracking", "Quick quantity entry"]
  },
  {
    icon: Keyboard,
    title: "Keyboard-First Layouts",
    description: "Optimized shortcuts (F1-F11) for pharmacists who prefer keyboard navigation",
    keypoints: ["F1-F11 shortcuts", "Tab navigation", "Quick search", "Instant calculations"]
  },
  {
    icon: CreditCard,
    title: "Integrated Ledger System",
    description: "Complete customer credit management with sales tracking and payment history",
    keypoints: ["Customer credit tracking", "Payment history", "Refund management", "Voucher system"]
  },
  {
    icon: Receipt,
    title: "Smart Transaction Management",
    description: "Handle invoices, returns, refunds with Alt+ shortcuts for maximum efficiency",
    keypoints: ["Alt+ shortcuts", "Return processing", "Refund handling", "Invoice management"]
  }
];

const workflowSteps = [
  {
    step: "1",
    title: "Scan or Search",
    description: "Use barcode scanner or type product name for instant lookup",
    icon: "🔍"
  },
  {
    step: "2", 
    title: "Verify & Adjust",
    description: "Check expiry dates, adjust quantities, apply discounts",
    icon: "✅"
  },
  {
    step: "3",
    title: "Payment Processing",
    description: "Cash, card, or credit - handle all payment methods seamlessly",
    icon: "💳"
  },
  {
    step: "4",
    title: "Receipt & Record",
    description: "Print receipt, update inventory, record transaction automatically",
    icon: "📋"
  }
];

const shortcuts = [
  { key: "F1", action: "New Sale" },
  { key: "F2", action: "Customer Search" },
  { key: "F3", action: "Product Lookup" },
  { key: "F4", action: "Quick Discount" },
  { key: "F5", action: "Payment Screen" },
  { key: "F6", action: "Print Receipt" },
  { key: "Alt+R", action: "Process Return" },
  { key: "Alt+C", action: "Customer Credit" }
];

export default function PharmPOS() {
  return (
    <section id="pharm-pos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
            POS Made for Pharmacies
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Speed Meets Precision
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Built for busy pharmacy workflows with barcode-first and keyboard-first layouts. 
            Handle peak hours with confidence using our optimized interface and shortcut system.
          </motion.p>
        </div>

        {/* POS Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {posFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {feature.keypoints.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Streamlined Checkout Workflow
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From product scan to receipt printing - every step optimized for pharmacy efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Connection Line */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-cyan-200 dark:bg-cyan-800 transform translate-x-3 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  </div>
                )}

                <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-4 mx-auto">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Shortcuts Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Master the Shortcuts
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Designed for pharmacists who value speed. Our comprehensive shortcut system 
              lets you navigate the entire POS without lifting your hands off the keyboard.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Benefits:</h4>
              <div className="space-y-3">
                {[
                  "Handle rush hours with confidence",
                  "Reduce training time for new staff",
                  "Minimize mouse dependency",
                  "Increase transaction speed by 40%"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                    <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">
              Essential Keyboard Shortcuts
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              {shortcuts.map((shortcut, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors duration-300"
                >
                  <span className="font-mono text-xs bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-gray-900 dark:text-white">
                    {shortcut.key}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">
                    {shortcut.action}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-200 dark:border-cyan-700/50">
              <div className="flex items-center space-x-2 text-cyan-700 dark:text-cyan-300">
                <Keyboard className="w-5 h-5" />
                <span className="font-semibold text-sm">Pro Tip:</span>
              </div>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 mt-2">
                All shortcuts work in both Urdu and English interface modes, ensuring consistent workflow regardless of language preference.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}