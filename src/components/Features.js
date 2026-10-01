'use client';

import { Zap, ShieldCheck, BarChart3, WifiOff, FileCheck2, Network, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    icon: Zap,
    title: "High-Velocity POS Engine",
    category: "Retail Performance",
    description: "Sub-second barcode lookups, streamlined multi-item checkout, and queue-busting architecture engineered for Pakistan's busiest retail hours."
  },
  {
    icon: WifiOff,
    title: "Offline-First Resilience",
    category: "Architecture",
    description: "Built-in local database failover ensures your business runs uninterrupted during internet blackouts or load-shedding, syncing silently when reconnected."
  },
  {
    icon: BarChart3,
    title: "Predictive Inventory & Expiry AI",
    category: "Data Intelligence",
    description: "Proactive expiry date alarms, batch management, and automatic reorder thresholds that systematically eliminate retail wastage and dead stock."
  },
  {
    icon: FileCheck2,
    title: "Tax & Financial Tracking",
    category: "Accounting",
    description: "Configurable sales tax, custom retail discounts, detailed prescription audit logs, and instant financial balance sheets."
  },
  {
    icon: Network,
    title: "Multi-Store Cloud Consolidation",
    category: "Enterprise Scale",
    description: "Consolidate sales, stock transfers, and branch-level performance into a single unified executive dashboard from anywhere in the world."
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Data Security",
    category: "Infrastructure",
    description: "Automated end-of-day encrypted backups, role-based employee permission gates, and comprehensive tamper-proof audit trails."
  }
];

export default function Features() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/60 dark:bg-gray-900/60 border-y border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Systems Ltd Style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 dark:text-white tracking-tight">
              Enterprise Technology Designed for Operational Excellence
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md">
            Combining global software standards with local market realities to deliver unbreakable retail infrastructure.
          </p>
        </div>
        
        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {cap.category}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-cyan-500 group-hover:to-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {cap.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-gray-800/60 flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  <span>Enterprise Grade</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-gray-900 via-gray-950 to-slate-900 text-white border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Guaranteed Resilience</span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1">Ready to upgrade your enterprise infrastructure?</h4>
            <p className="text-sm text-gray-400 mt-1">Deploy our systems with zero migration downtime and complete staff onboarding.</p>
          </div>
          <Link
            href="/#contact"
            className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-sm whitespace-nowrap transition-all shadow-lg hover:scale-105"
          >
            Speak with an Engineer
          </Link>
        </div>
      </div>
    </section>
  );
}