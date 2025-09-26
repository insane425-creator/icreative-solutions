import { motion } from 'framer-motion';
import { Zap, Shield, BarChart3, Globe, Clock, Headphones } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Checkout",
    description: "Barcode-first & keyboard-first layouts with F1-F11 shortcuts for peak hours.",
    highlights: ["Barcode + Keyboard", "F1-F11 Shortcuts", "Zero Learning Curve"]
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "99.9% uptime guarantee with secure transactions and full audit trails.",
    highlights: ["Daily Backups", "99.9% Uptime", "Audit Trails"]
  },
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "15+ real-time stat cards with sales trends and cash flow insights.",
    highlights: ["15+ Widgets", "Real-time Data", "Custom Ranges"]
  },
  {
    icon: Globe,
    title: "Built for Pakistan",
    description: "Dual language support with local compliance and offline-first design.",
    highlights: ["Urdu/English", "Local Compliance", "Offline-First"]
  },
  {
    icon: Clock,
    title: "24/7 Reliability",
    description: "Always-on system with automatic updates and emergency support.",
    highlights: ["Auto Updates", "Monitoring", "Emergency Support"]
  },
  {
    icon: Headphones,
    title: "Local Support",
    description: "Pakistani support team available round-the-clock with local expertise.",
    highlights: ["Pakistani Team", "24/7 Available", "Local Expertise"]
  }
];

export default function PharmFeatures() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-4"
          >
            Why PharmAssist?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            More Than a Billing Tool
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          >
            Smart pharmacy management system designed for Pakistani businesses with
            <span className="font-semibold text-cyan-600 dark:text-cyan-400"> compliance, profitability, and automation</span>.
          </motion.p>
        </div>

        {/* Compact Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {feature.highlights.map((highlight, idx) => (
                  <span key={idx} className="text-xs bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full font-medium">
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-6 p-4 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50">
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