//src/components/pharmassist/PharmOperations.js
'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Receipt, RotateCcw, FileText, Settings, Download } from 'lucide-react';

const operationsModules = [
  {
    icon: ShoppingBag,
    title: "Purchase Management",
    description: "Streamlined purchasing with supplier management and automated reorder suggestions",
    features: ["Quick purchase entry", "Supplier management", "Stock projections", "Reorder alerts"]
  },
  {
    icon: Receipt,
    title: "Transaction Hub", 
    description: "Handle all transaction types with Alt+ shortcuts for maximum efficiency",
    features: ["Invoice generation", "Return processing", "Alt+ shortcuts", "Payment tracking"]
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    description: "Complete return management system with automatic inventory updates",
    features: ["Return processing", "Refund calculations", "Inventory updates", "Reason tracking"]
  },
  {
    icon: FileText,
    title: "Audit Trails",
    description: "Complete transaction history with detailed logs for compliance",
    features: ["Transaction logs", "User activity", "Compliance reports", "Change history"]
  }
];

const exportOptions = [
  { type: "Sales Reports", format: "PDF/CSV" },
  { type: "Purchase History", format: "PDF/CSV" },
  { type: "Customer Data", format: "CSV/Excel" },
  { type: "Inventory Reports", format: "PDF/CSV" },
  { type: "Financial Summary", format: "PDF" },
  { type: "Compliance Reports", format: "PDF" }
];

const settingsCategories = [
  {
    title: "Interface Settings",
    options: ["Urdu/English toggle", "Dark/Light mode", "Font size", "Layout"]
  },
  {
    title: "User Management", 
    options: ["Role permissions", "Staff accounts", "Access controls", "Activity monitoring"]
  },
  {
    title: "Business Config",
    options: ["Tax settings", "Receipt templates", "Store info", "Operating hours"]
  },
  {
    title: "System Preferences",
    options: ["Backup schedules", "Notifications", "Integrations", "Security"]
  }
];

export default function PharmOperations() {
  return (
    <section id="pharm-operations" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
            Complete Business Operations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Manage every aspect of your pharmacy from purchases to compliance reporting.
          </motion.p>
        </div>

        {/* Operations Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {operationsModules.map((module, index) => (
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
                  <module.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                  {module.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {module.description}
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {module.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs">
                    <div className="w-1 h-1 rounded-full bg-cyan-500 mr-2"></div>
                    <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Export & Settings Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Download className="w-6 h-6 text-cyan-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Export Everything
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Generate comprehensive reports in multiple formats for accounting and compliance.
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {exportOptions.map((option, index) => (
                <div key={index} className="p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="font-medium text-gray-900 dark:text-white text-sm">{option.type}</div>
                  <div className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">{option.format}</div>
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
            <div className="flex items-center mb-4">
              <Settings className="w-6 h-6 text-cyan-500 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Flexible Configuration
              </h3>
            </div>
            
            <div className="space-y-4">
              {settingsCategories.map((category, index) => (
                <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-b-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {category.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center text-xs">
                        <div className="w-1 h-1 rounded-full bg-cyan-500 mr-2"></div>
                        <span className="text-gray-600 dark:text-gray-400">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
              <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 text-sm mb-1">
                Bilingual Interface
              </h4>
              <p className="text-xs text-cyan-600 dark:text-cyan-400">
                Switch between Urdu and English interfaces instantly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}