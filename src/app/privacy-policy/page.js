import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import { Shield, Lock, Database, EyeOff, FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | iCreative Solutions',
  description:
    'Our B2B Privacy Policy for PharmAssist and GrowAssist POS software. Understand how we protect your store ledgers, customer khatas, inventory, and local database records.',
  alternates: {
    canonical: 'https://icreative.vercel.app/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | iCreative Solutions',
    description: 'B2B Enterprise POS Data Protection Policy. 100% Client Data Ownership and Offline-First Local Storage.',
    url: 'https://icreative.vercel.app/privacy-policy',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2026";

  const corePillars = [
    {
      icon: Database,
      title: "100% Commercial Data Ownership",
      description: "Your sales volumes, supplier purchase costs, profit margins, patient records, and customer credit (Khata) are strictly your business property. We never claim ownership or sell your business data."
    },
    {
      icon: EyeOff,
      title: "Zero Third-Party Data Monetization",
      description: "Unlike consumer mobile apps or ad-supported platforms, iCreative Solutions operates exclusively on a direct B2B subscription model. We never monetize, scrape, or share your transactional data with brokers or advertisers."
    },
    {
      icon: Lock,
      title: "Offline-First Local Storage",
      description: "PharmAssist and GrowAssist store your operational database directly on your local store PC or in-store local server. Your day-to-day billing functions with zero mandatory cloud exposure."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />

      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 border-b border-gray-200/60 dark:border-gray-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            <span>B2B Commercial Data Protection</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-950 dark:text-white">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            How iCreative Solutions safeguards your retail store records, financial ledgers, and POS database.
          </p>

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            Last Updated: {lastUpdated} &bull; Applicable to PharmAssist, GrowAssist & Custom POS Deployments
          </p>
        </div>
      </section>

      {/* Core Privacy Pillars */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {corePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{pillar.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Legal Content */}
      <section className="py-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose dark:prose-invert max-w-none space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">1</span>
              Scope & B2B Commercial Context
            </h2>
            <p>
              This Privacy Policy applies to all business-to-business (B2B) software products, desktop point-of-sale applications, and customer support services provided by <strong>iCreative Solutions</strong> ("we", "our", or "us"), located in Abbottabad, Khyber Pakhtunkhwa, Pakistan. Our primary software products include <strong>PharmAssist</strong> (pharmacy and medical store retail management) and <strong>GrowAssist</strong> (supermarket, mart, and grocery retail management).
            </p>
            <p className="mt-3">
              Unlike consumer software or mobile applications distributed via app stores, our systems are business enterprise tools deployed on client hardware. This document outlines our strict commitments regarding the proprietary business data generated by your commercial operations.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">2</span>
              What Information We Collect
            </h2>
            <p>We collect only the minimum information necessary to execute business contracts, activate software licenses, and provide technical assistance:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Business Contact Information:</strong> Business name, owner/representative name, registered store address, contact telephone numbers (WhatsApp), and billing email.</li>
              <li><strong>License Activation & Device Identifiers:</strong> A one-way cryptographic hardware hash (CPU/motherboard ID) to generate and validate your authorized terminal license key and prevent unauthorized license cloning.</li>
              <li><strong>Technical Diagnostics & Error Telemetry:</strong> Anonymized application crash logs (e.g., database timeout errors or unhandled system exceptions) to troubleshoot technical glitches and release patches.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">3</span>
              Your Store Data Stays On Your Machine (Offline-First Architecture)
            </h2>
            <p>
              We recognize that inventory quantities, supplier trade discounts, profit margins, sales velocity, customer phone numbers, and patient prescription histories represent sensitive trade secrets.
            </p>
            <div className="my-4 p-5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 text-sm">
              <strong>Guaranteed Local Data Residence:</strong> All operational data created by your cashiers, pharmacists, and store managers resides exclusively in an encrypted, local relational database located on your physical in-store computer. iCreative Solutions does not automatically copy, sync, or transmit your transaction databases to any remote cloud servers without your explicit written request.
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">4</span>
              Remote Technical Support & On-Site Assistance
            </h2>
            <p>
              When you request technical support, staff training, or database troubleshooting via AnyDesk, TeamViewer, UltraViewer, or during an on-site technician visit:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Remote screen-sharing sessions are only initiated with your active consent and session code.</li>
              <li>Our engineers only access database files necessary to rectify corrupted indexes, resolve receipt printer drivers, or perform scheduled system upgrades.</li>
              <li>Our engineers are bound by strict non-disclosure agreements forbidding the extraction, disclosure, or personal storage of client business records.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">5</span>
              Data Portability & Database Backups
            </h2>
            <p>
              You maintain total data portability. Our POS platforms include built-in, unencrypted and encrypted one-click database export tools (CSV, Excel, and SQL dump formats). If you ever choose to discontinue our services, your historical business records remain completely accessible to you and can be exported at zero cost.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">6</span>
              Contact Our Data Protection Officer
            </h2>
            <p>
              If you have any questions or concerns regarding our privacy standards, database security practices, or commercial contracts, please contact our management team directly:
            </p>
            <div className="mt-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm space-y-2">
              <p><strong>iCreative Solutions — Data & Security Office</strong></p>
              <p>Abbottabad, Khyber Pakhtunkhwa, Pakistan</p>
              <p>Email: <a href="mailto:contact@icreativesolutions.pk" className="text-cyan-600 dark:text-cyan-400 underline">contact@icreativesolutions.pk</a></p>
              <p>Support Hotline: <a href="tel:+923275848916" className="text-cyan-600 dark:text-cyan-400 font-semibold">+92 327 5848916</a></p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
