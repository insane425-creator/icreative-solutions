//src/components/pharmassist/PharmPOS.js
'use client';

import { motion } from 'framer-motion';
import { Scan, Keyboard, CreditCard, Receipt, Zap, CheckCircle } from 'lucide-react';

const posFeatures = [
  {
    icon: Scan,
    title: "Barcode-First Design",
    description: "Lightning-fast scanning with instant product lookup and pricing",
    keypoints: ["Instant scanning", "Auto-complete", "Batch tracking"]
  },
  {
    icon: Keyboard,
    title: "Keyboard Shortcuts",
    description: "F1-F11 shortcuts for pharmacists who prefer keyboard navigation",
    keypoints: ["F1-F11 shortcuts", "Tab navigation", "Quick calculations"]
  },
  {
    icon: CreditCard,
    title: "Customer Ledger",
    description: "Complete customer credit management with payment history",
    keypoints: ["Credit tracking", "Payment history", "Refund management"]
  },
  {
    icon: Receipt,
    title: "Smart Transactions",
    description: "Handle invoices, returns, refunds with Alt+ shortcuts",
    keypoints: ["Alt+ shortcuts", "Return processing", "Invoice management"]
  }
];

const shortcuts = [
  { key: "F1", action: "New Sale" },
  { key: "F2", action: "Customer Search" },
  { key: "F3", action: "Product Lookup" },
  { key: "F5", action: "Payment Screen" },
  { key: "Alt+R", action: "Process Return" },
  { key: "Alt+C", action: "Customer Credit" }
];

export default function PharmPOS() {
  return (
    <section id="pharm-pos" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
            Speed Meets Precision
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Barcode-first and keyboard-first layouts designed for busy pharmacy workflows.
          </motion.p>
        </div>

        {/* POS Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {posFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white mr-3">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {feature.description}
              </p>
              
              <div className="space-y-2">
                {feature.keypoints.map((point, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    <CheckCircle className="w-3 h-3 text-cyan-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Shortcuts Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Master the Shortcuts
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Navigate the entire POS without lifting your hands off the keyboard.
            </p>
            
            <div className="space-y-3">
              {[
                "Handle rush hours with confidence",
                "Reduce training time for new staff", 
                "Increase transaction speed by 40%"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <Zap className="w-4 h-4 text-cyan-500 mr-3" />
                  <span className="text-gray-600 dark:text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-center">
              Essential Shortcuts
            </h4>
            
            <div className="grid grid-cols-2 gap-3">
              {shortcuts.map((shortcut, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="font-mono text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-900 dark:text-white">
                    {shortcut.key}
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">
                    {shortcut.action}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
              <p className="text-xs text-cyan-700 dark:text-cyan-400">
                All shortcuts work in both Urdu and English interface modes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}