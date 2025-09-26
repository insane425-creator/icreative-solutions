//src/components/pharmassist/PharmInventory.js
'use client';

import { motion } from 'framer-motion';
import { Package, AlertTriangle, Calendar, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const inventoryFeatures = [
  {
    icon: Package,
    title: "Batch-Level Tracking",
    description: "Track every unit from boxes to individual tablets with complete batch information",
    details: ["Boxes, strips, tablets, packs", "Batch numbers & suppliers", "Purchase dates & costs", "Location tracking"]
  },
  {
    icon: AlertTriangle, 
    title: "Smart Expiry Management",
    description: "Never lose money to expired stock with intelligent alerts and notifications",
    details: ["Pre-expiry notifications", "Color-coded stock status", "Automatic reorder suggestions", "Disposal tracking"]
  },
  {
    icon: TrendingUp,
    title: "Real-time Stock Health",
    description: "Monitor inventory status with visual indicators for healthy, low, and expiring items",
    details: ["Stock level indicators", "Movement analytics", "Demand forecasting", "Seasonal trends"]
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Built-in tools to ensure your pharmacy meets all Pakistani regulatory requirements",
    details: ["Drug authority compliance", "Audit trail maintenance", "Prescription tracking", "Controlled substance logs"]
  }
];

const stockStatuses = [
  {
    status: "Healthy Stock",
    count: 234,
    color: "bg-green-500",
    description: "Items with sufficient quantity and good expiry dates"
  },
  {
    status: "Low Stock",
    count: 12,
    color: "bg-yellow-500", 
    description: "Items below minimum stock level - reorder recommended"
  },
  {
    status: "Expiring Soon",
    count: 8,
    color: "bg-orange-500",
    description: "Items expiring within next 30 days"
  },
  {
    status: "Critical",
    count: 3,
    color: "bg-red-500",
    description: "Items requiring immediate attention"
  }
];

const complianceFeatures = [
  "Drug Controller compliance",
  "Prescription record maintenance", 
  "Controlled substance tracking",
  "Audit trail for all transactions",
  "Regulatory reporting tools",
  "License renewal reminders"
];

export default function PharmInventory() {
  return (
    <section id="pharm-inventory" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
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
            Inventory & Compliance
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Never Lose Money to Expired Stock
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Advanced inventory management with batch-level tracking, expiry alerts, and regulatory compliance tools. 
            Keep your pharmacy profitable and compliant with smart automation.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {inventoryFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 hover:shadow-lg transition-all duration-300"
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
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stock Status Dashboard */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Real-time Stock Health Indicators
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Visual indicators help you quickly identify items that need attention. 
              Color-coded system makes inventory management intuitive and efficient.
            </p>
            
            <div className="space-y-4">
              {stockStatuses.map((status, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                >
                  <div className={`w-4 h-4 rounded-full ${status.color}`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-gray-900 dark:text-white">{status.status}</span>
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">{status.count}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{status.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mock Inventory Screen */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Inventory Overview</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Live Updates</span>
              </div>
            </div>

            {/* Sample inventory items */}
            <div className="space-y-3">
              {[
                { name: "Panadol 500mg", batch: "PAN123", expiry: "Dec 2025", status: "healthy", qty: "250 strips" },
                { name: "Augmentin 625mg", batch: "AUG456", expiry: "Mar 2025", status: "low", qty: "12 strips" },
                { name: "Disprin Tablet", batch: "DIS789", expiry: "Jan 2025", status: "expiring", qty: "45 strips" },
                { name: "Brufen 400mg", batch: "BRU012", expiry: "Nov 2024", status: "critical", qty: "3 strips" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 dark:text-white">{item.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Batch: {item.batch} | Exp: {item.expiry}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white">{item.qty}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'healthy' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                      item.status === 'low' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      item.status === 'expiring' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' :
                      'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {item.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-xl border border-cyan-200/50 dark:border-cyan-700/50">
              <div className="flex items-center space-x-2 text-cyan-700 dark:text-cyan-300">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-semibold text-sm">Smart Alert</span>
              </div>
              <p className="text-sm text-cyan-600 dark:text-cyan-400 mt-2">
                4 items need attention: 1 critical low stock, 3 expiring within 30 days
              </p>
            </div>
          </motion.div>
        </div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-cyan-200/50 dark:border-cyan-700/50"
        >
          <div className="text-center mb-8">
            <Shield className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Built for Pakistani Pharmacy Regulations
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay compliant with all regulatory requirements with built-in tools designed 
              specifically for Pakistani pharmacy operations and drug authority guidelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-700 rounded-xl border border-cyan-200 dark:border-cyan-600"
              >
                <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}