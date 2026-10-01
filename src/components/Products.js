'use client';

import { ArrowRight, Pill, ShoppingCart, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    icon: Pill,
    title: "PharmAssist",
    category: "Healthcare & Pharmacy POS",
    subtitle: "Complete Pharmacy Management & Retail System",
    description: "Built for Pakistani pharmacies and medical stores to streamline high-volume dispensing, eliminate expiry dead-stock, and ensure effortless compliance.",
    highlights: [
      "14,000+ Preloaded Pakistani Medicine Database",
      "Proactive Expiry Date Tracking & Shelf Audits",
      "Offline-First Engine — 100% Billing Uptime",
      "Digital Invoicing, Thermal Receipts & Audit Trails",
      "Wholesale Supplier Ledger & Narcotics Register"
    ],
    link: "/pharmassist",
    badge: "Flagship POS Suite",
    isExternal: false,
    ctaText: "Explore Platform & Packages"
  },
  {
    icon: ShoppingCart,
    title: "GrowAssist",
    category: "Supermarket & Retail POS",
    subtitle: "Omnichannel Grocery & Departmental Platform",
    description: "Engineered for high-footfall supermarkets, marts, and FMCG retailers with sub-second barcode scans and multi-counter real-time ledger sync.",
    highlights: [
      "Sub-second Barcode Processing & Multi-Counter Sync",
      "Dynamic Promotional Pricing & Bulk Wholesale Rates",
      "Inventory Reorder Triggers & Stock Shrinkage Alerts",
      "Customer Credit Ledger (Khata) & Loyalty Points",
      "Cloud Analytics & Remote Owner Mobile App"
    ],
    link: "https://growassist.vercel.app",
    badge: "Retail & Mart Edition",
    isExternal: true,
    ctaText: "Launch Live Demo"
  }
];

export default function Products() {
  const handleRequestDemo = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            <span>Proprietary Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 dark:text-white tracking-tight mb-6">
            Industry-Specific Solutions Engineered for Scale
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Our purpose-built software architectures empower enterprise retailers to replace obsolete desktop billing software with modern, reliable, and intelligent systems.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl bg-gray-50/70 dark:bg-gray-900/60 border border-gray-200/80 dark:border-gray-800 p-8 sm:p-10 shadow-sm hover:shadow-2xl hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Category */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/25">
                      {product.badge}
                    </span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      {product.category}
                    </span>
                  </div>

                  {/* Header Title */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-sky-500 text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-3 mb-10">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-gray-200">
                      Key Technical Capabilities:
                    </p>
                    {product.highlights.map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-3 text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-gray-200/70 dark:border-gray-800/80 flex flex-col sm:flex-row gap-3">
                  {product.isExternal ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-center flex items-center justify-center space-x-2"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <Link
                      href={product.link}
                      className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-center flex items-center justify-center space-x-2"
                    >
                      <span>{product.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                  <button
                    onClick={handleRequestDemo}
                    className="px-6 py-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold text-sm hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all text-center"
                  >
                    Schedule Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enterprise Roadmap / R&D Strip (Systems Ltd Style) */}
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-950 to-slate-900 border border-gray-800 p-8 sm:p-10 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-start space-x-5 max-w-2xl">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 mt-1">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-2">
                R&D & Enterprise Roadmap
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">Custom Enterprise Engineering & Vertical Extensions</h3>
              <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                Beyond PharmAssist and GrowAssist, we design custom multi-branch ERP integrations, restaurant management engines, and automated cloud sync architectures for large retail groups.
              </p>
            </div>
          </div>
          <button
            onClick={handleRequestDemo}
            className="w-full lg:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-gray-950 font-bold text-sm whitespace-nowrap transition-all shadow-lg hover:scale-105"
          >
            Consult Our Engineering Team
          </button>
        </div>
      </div>
    </section>
  );
}