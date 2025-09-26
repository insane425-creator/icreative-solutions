//src/components/pharmassist/PharmInventory.js
'use client';

import { motion } from 'framer-motion';
import { Package, AlertTriangle, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const inventoryFeatures = [
  {
    icon: Package,
    title: "Batch-Level Tracking",
    description: "Track every unit from boxes to individual tablets with complete batch information",
    highlights: ["Batch numbers", "Purchase dates", "Location tracking"]
  },
  {
    icon: AlertTriangle, 
    title: "Smart Expiry Management",
    description: "Never lose money to expired stock with intelligent alerts and notifications",
    highlights: ["Pre-expiry alerts", "Color-coded status", "Disposal tracking"]
  },
  {
    icon: TrendingUp,
    title: "Real-time Stock Health",
    description: "Monitor inventory status with visual indicators for healthy, low, and expiring items",
    highlights: ["Stock indicators", "Movement analytics", "Demand forecasting"]
  },
  {
    icon: Shield,
    title: "Regulatory Compliance",
    description: "Built-in tools to ensure your pharmacy meets all Pakistani regulatory requirements",
    highlights: ["Drug authority compliance", "Audit trails", "Prescription tracking"]
  }
];

const stockStatuses = [
  { status: "Healthy", count: 234, color: "bg-green-500" },
  { status: "Low Stock", count: 12, color: "bg-yellow-500" },
  { status: "Expiring", count: 8, color: "bg-orange-500" },
  { status: "Critical", count: 3, color: "bg-red-500" }
];

export default function PharmInventory() {
  return (
    <section id="pharm-inventory" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
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
            Never Lose Money to Expired Stock
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Advanced inventory management with batch-level tracking, expiry alerts, and regulatory compliance.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {inventoryFeatures.map((feature, index) => (
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
                {feature.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-xs">
                    <CheckCircle className="w-3 h-3 text-cyan-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stock Status Dashboard */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Real-time Stock Health
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Visual indicators help you quickly identify items that need attention.
            </p>
            
            <div className="space-y-4">
              {stockStatuses.map((status, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${status.color} mr-3`}></div>
                    <span className="font-medium text-gray-900 dark:text-white">{status.status}</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">{status.count}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900 dark:text-white">Inventory Overview</h4>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Live</span>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: "Panadol 500mg", batch: "PAN123", status: "healthy", qty: "250" },
                { name: "Augmentin 625mg", batch: "AUG456", status: "low", qty: "12" },
                { name: "Disprin Tablet", batch: "DIS789", status: "expiring", qty: "45" },
                { name: "Brufen 400mg", batch: "BRU012", status: "critical", qty: "3" }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">{item.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Batch: {item.batch}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.qty}</div>
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

            <div className="mt-4 p-3 bg-cyan-50 dark:bg-cyan-900/20 rounded-lg">
              <div className="flex items-center text-cyan-700 dark:text-cyan-300">
                <AlertTriangle className="w-4 h-4 mr-2" />
                <span className="font-medium text-sm">Smart Alert</span>
              </div>
              <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-1">
                4 items need attention: 1 critical low stock, 3 expiring within 30 days
              </p>
            </div>
          </motion.div>
        </div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-cyan-50 dark:bg-cyan-900/10 rounded-xl p-8 border border-cyan-200 dark:border-cyan-700/50"
        >
          <div className="text-center mb-6">
            <Shield className="w-10 h-10 text-cyan-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Built for Pakistani Pharmacy Regulations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay compliant with regulatory requirements using built-in tools for Pakistani pharmacy operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Drug Controller compliance",
              "Prescription record maintenance", 
              "Controlled substance tracking",
              "Audit trail for transactions",
              "Regulatory reporting tools",
              "License renewal reminders"
            ].map((feature, index) => (
              <div key={index} className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                <CheckCircle className="w-4 h-4 text-cyan-500 mr-3" />
                <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}