'use client';

import { Building2, Store, Truck, HeartPulse, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare & Pharmaceuticals",
    subtitle: "Pharmacies, Clinics & Hospital Stores",
    description: "Purpose-built compliance and dispensing engines that manage medicine lifecycles, eliminate expired stock losses, and ensure rapid customer checkout.",
    capabilities: [
      "40,000+ Preloaded Drug Formulations",
      "Expiry Alarms & Batch Control",
      "Controlled Substance Registers"
    ]
  },
  {
    icon: Store,
    title: "Supermarkets & Departmental Marts",
    subtitle: "High-Volume Retail & Kiryana Stores",
    description: "Queue-busting architectures with sub-second barcode resolution, dynamic discounts, and seamless cashier shift reconciliations.",
    capabilities: [
      "Multi-Counter Live Synchronization",
      "Wholesale & Retail Tiered Pricing",
      "Customer Khata & Digital Invoicing"
    ]
  },
  {
    icon: Truck,
    title: "Distribution & Wholesale Centers",
    subtitle: "FMCG & Medicine Distributors",
    description: "Comprehensive dealer ledger tracking, bulk order picking lists, and real-time inventory allocation across primary and regional warehouses.",
    capabilities: [
      "Supplier Order Automations",
      "Dealer Credit Limit Enforcement",
      "Automated Stock Reordering"
    ]
  },
  {
    icon: Building2,
    title: "Multi-Outlet Retail Chains",
    subtitle: "Franchises & Growing Brands",
    description: "Centralized cloud control that unifies product catalogs, enables branch-to-branch transfers, and aggregates group financial analytics.",
    capabilities: [
      "Head-Office Centralized Catalog",
      "Inter-Branch Stock Transfers",
      "Consolidated Executive Telemetry"
    ]
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/70 dark:bg-gray-900/50 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Industry Verticals
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 dark:text-white tracking-tight">
              Transforming Key Retail & Healthcare Sectors
            </h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-md">
            Engineered to address the exact regulatory, logistical, and commercial demands of Pakistani commerce.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-950 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-600 dark:text-cyan-400 mb-4">
                    {ind.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {ind.capabilities.map((cap, cIndex) => (
                      <div key={cIndex} className="flex items-center text-xs text-gray-600 dark:text-gray-300">
                        <Check className="w-3.5 h-3.5 text-cyan-500 mr-2 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center text-xs font-bold text-gray-900 dark:text-gray-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                  >
                    <span>Request Sector Briefing</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
