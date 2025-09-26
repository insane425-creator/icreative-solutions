//src/components/pharmassist/PharmOperations.js
'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Receipt, RotateCcw, FileText, Settings, Download } from 'lucide-react';

const operationsModules = [
  {
    icon: ShoppingBag,
    title: "Purchase Management",
    description: "Streamlined purchasing with supplier management, projections, and automated reorder suggestions",
    features: ["Quick purchase entry", "Supplier management", "Stock projections", "Reorder alerts", "Cost tracking", "Payment terms"]
  },
  {
    icon: Receipt,
    title: "Transaction Hub", 
    description: "Handle all transaction types with Alt+ shortcuts for maximum efficiency during busy periods",
    features: ["Invoice generation", "Return processing", "Refund management", "Alt+ shortcuts", "Payment tracking", "Customer receipts"]
  },
  {
    icon: RotateCcw,
    title: "Returns & Refunds",
    description: "Complete return management system with automatic inventory updates and customer satisfaction",
    features: ["Return processing", "Refund calculations", "Inventory updates", "Reason tracking", "Customer history", "Exchange handling"]
  },
  {
    icon: FileText,
    title: "Audit Trails",
    description: "Complete transaction history with detailed logs for compliance and business analysis",
    features: ["Transaction logs", "User activity tracking", "Compliance reports", "Change history", "Security monitoring", "Data integrity"]
  }
];

const exportOptions = [
  { type: "Sales Reports", format: "PDF/CSV", description: "Daily, weekly, monthly sales analysis" },
  { type: "Purchase History", format: "PDF/CSV", description: "Complete supplier and purchase tracking" },
  { type: "Customer Data", format: "CSV/Excel", description: "Customer profiles and transaction history" },
  { type: "Inventory Reports", format: "PDF/CSV", description: "Stock levels, expiry dates, valuations" },
  { type: "Financial Summary", format: "PDF", description: "Profit/loss, cash flow, tax reports" },
  { type: "Compliance Reports", format: "PDF", description: "Regulatory and audit documentation" }
];

const settingsCategories = [
  {
    title: "Interface Settings",
    options: ["Urdu/English language toggle", "Dark/Light mode", "Font size adjustment", "Layout customization"]
  },
  {
    title: "User Management", 
    options: ["Role-based permissions", "Staff accounts", "Access controls", "Activity monitoring"]
  },
  {
    title: "Business Configuration",
    options: ["Tax settings", "Receipt templates", "Store information", "Operating hours"]
  },
  {
    title: "System Preferences",
    options: ["Backup schedules", "Notification settings", "Integration options", "Security settings"]
  }
];

export default function PharmOperations() {
  return (
    <section id="pharm-operations" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
            Operations Hub
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Complete Business Operations
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Manage every aspect of your pharmacy operations from purchases to compliance reporting. 
            Built for efficiency with comprehensive tools and intelligent automation.
          </motion.p>
        </div>

        {/* Operations Modules */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {operationsModules.map((module, index) => (
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
                  <module.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {module.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {module.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {module.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Export & Reports Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Download className="w-8 h-8 text-cyan-500" />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Export Everything
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Generate comprehensive reports in multiple formats. Perfect for accountants, 
              tax filing, business analysis, and regulatory compliance.
            </p>
            
            <div className="space-y-4">
              {exportOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{option.type}</h4>
                    <span className="text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300 px-2 py-1 rounded-full font-medium">
                      {option.format}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Settings Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Settings className="w-8 h-8 text-cyan-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Flexible Configuration
              </h3>
            </div>
            
            <div className="space-y-6">
              {settingsCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0 last:pb-0"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    {category.title}
                  </h4>
                  <div className="space-y-2">
                    {category.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center space-x-2">
                        <div className="w-1 h-1 rounded-full bg-cyan-500"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{option}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-xl border border-cyan-200/50 dark:border-cyan-700/50">
              <h4 className="font-semibold text-cyan-700 dark:text-cyan-300 mb-2">
                Bilingual Interface
              </h4>
              <p className="text-sm text-cyan-600 dark:text-cyan-400">
                Switch between Urdu and English interfaces instantly. All features work seamlessly in both languages.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-cyan-200/50 dark:border-cyan-700/50"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need for Modern Pharmacy Operations
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              From quick purchases to detailed compliance reports, PharmAssist handles it all. 
              Built with Pakistani pharmacists in mind, designed for real-world efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-cyan-200 dark:border-cyan-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Real-time Operations</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-cyan-200 dark:border-cyan-600">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Complete Audit Trail</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-cyan-200 dark:border-cyan-600">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span className="text-gray-700 dark:text-gray-300">Regulatory Compliant</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}