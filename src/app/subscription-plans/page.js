import NavigationBar from '../../components/NavigationBar';
import Pricing from '../../components/Pricing';
import Footer from '../../components/Footer';
import { ShieldCheck, Check, Clock, Headphones, Award, Sparkles, Server } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Subscription Plans & Pricing | iCreative Solutions',
  description:
    'Transparent, predictable B2B subscription plans for PharmAssist and GrowAssist POS systems. 7-day free trial, zero setup fees, and dedicated local support across Pakistan.',
  alternates: {
    canonical: 'https://icreative.vercel.app/subscription-plans',
  },
  openGraph: {
    title: 'Subscription Plans & Pricing | iCreative Solutions',
    description: 'Affordable retail & pharmacy POS software plans tailored for Pakistani businesses. From single stores to retail chains.',
    url: 'https://icreative.vercel.app/subscription-plans',
    type: 'website',
  },
};

export default function SubscriptionPlansPage() {
  const comparisonFeatures = [
    { name: "Device / Cash Counter Access", starter: "1 Device", semiAnnual: "1 Device", annual: "1 Device", enterprise: "Up to 3 Devices" },
    { name: "Offline-First Engine (Zero-Downtime Billing)", starter: true, semiAnnual: true, annual: true, enterprise: true },
    { name: "Pakistani Preloaded Drug & FMCG Database", starter: true, semiAnnual: true, annual: true, enterprise: true },
    { name: "Batch & Proactive Expiry Date Tracking", starter: "Basic", semiAnnual: "Advanced", annual: "Advanced", enterprise: "Advanced" },
    { name: "Local LAN Multi-Counter Real-time Sync", starter: false, semiAnnual: false, annual: false, enterprise: true },
    { name: "Thermal Receipts & Invoicing (80mm & 58mm)", starter: true, semiAnnual: true, annual: true, enterprise: true },
    { name: "Wholesale Supplier Ledger & Narcotics Register", starter: false, semiAnnual: true, annual: true, enterprise: true },
    { name: "Customer Credit Khata & Loyalty Program", starter: "Basic", semiAnnual: true, annual: true, enterprise: true },
    { name: "Free Software Updates & Bug Fixes", starter: true, semiAnnual: true, annual: true, enterprise: true },
    { name: "On-Site Setup & Technician Visit", starter: "Optional Add-on", semiAnnual: "1 Free Visit", annual: "2 Free Visits", enterprise: "Priority On-Site Visits" },
    { name: "Customer Support Channel", starter: "WhatsApp & Remote", semiAnnual: "Priority Remote", annual: "Dedicated Phone + Remote", enterprise: "24/7 Dedicated Manager" },
    { name: "Free Trial / Guarantee", starter: "7-Day Free Trial", semiAnnual: "30-Day Guarantee", annual: "30-Day Guarantee", enterprise: "Proof of Concept Pilot" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-500/10 dark:bg-cyan-600/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>B2B Software Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Predictable, Transparent Plans for{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-sky-500 dark:from-cyan-400 dark:to-sky-400 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Engineered specifically for Pakistani retail pharmacies, medical stores, supermarkets, and wholesale marts. No surprise fees, no lock-in contracts, and guaranteed offline reliability.
          </p>

          {/* Quick Value Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>100% Offline-First Engine</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
              <Clock className="w-4 h-4 text-green-500" />
              <span>7-Day Risk-Free Trial</span>
            </div>
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 shadow-sm">
              <Headphones className="w-4 h-4 text-blue-500" />
              <span>Local Pakistani Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Cards Component */}
      <Pricing />

      {/* Detailed Feature Comparison Table */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/70 dark:bg-gray-900/50 border-t border-gray-200/60 dark:border-gray-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Compare Plan Capabilities
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Review what is included in each plan to find the right operational scale for your store.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md bg-white dark:bg-gray-900">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100/80 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-4 sm:p-5 font-bold text-gray-900 dark:text-white">Feature</th>
                  <th className="p-4 sm:p-5 font-bold text-gray-900 dark:text-white text-center">Starter</th>
                  <th className="p-4 sm:p-5 font-bold text-gray-900 dark:text-white text-center">Semi-Annual</th>
                  <th className="p-4 sm:p-5 font-bold text-cyan-600 dark:text-cyan-400 text-center bg-cyan-50/50 dark:bg-cyan-900/20">Annual (Best Value)</th>
                  <th className="p-4 sm:p-5 font-bold text-purple-600 dark:text-purple-400 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {comparisonFeatures.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/60 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="p-4 sm:p-5 font-medium text-gray-900 dark:text-gray-200">
                      {row.name}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-600 dark:text-gray-300">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300 dark:text-gray-600">—</span>
                      ) : row.starter}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-600 dark:text-gray-300">
                      {typeof row.semiAnnual === 'boolean' ? (
                        row.semiAnnual ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-300 dark:text-gray-600">—</span>
                      ) : row.semiAnnual}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-900 dark:text-white font-semibold bg-cyan-50/30 dark:bg-cyan-900/10">
                      {typeof row.annual === 'boolean' ? (
                        row.annual ? <Check className="w-5 h-5 text-cyan-500 mx-auto" /> : <span className="text-gray-300 dark:text-gray-600">—</span>
                      ) : row.annual}
                    </td>
                    <td className="p-4 sm:p-5 text-center text-gray-600 dark:text-gray-300">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? <Check className="w-5 h-5 text-purple-500 mx-auto" /> : <span className="text-gray-300 dark:text-gray-600">—</span>
                      ) : row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enterprise Custom Solutions Callout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-gray-900 via-slate-900 to-gray-950 text-white p-8 sm:p-12 border border-gray-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Server className="w-4 h-4" />
              <span>Multi-Branch & Custom Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Need a Tailored Chain Solution?</h3>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl">
              Running a pharmacy chain, wholesale depot, or supermarket franchise? We offer custom multi-branch synchronization, server deployments, and dedicated on-site engineer support.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold text-center transition-all shadow-lg hover:scale-105"
            >
              Contact Sales Team
            </Link>
            <a
              href="https://wa.me/923275848916?text=Hi%20iCreative%20Solutions%2C%20I%20need%20a%20custom%20POS%20consultation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-center border border-white/20 transition-all hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
