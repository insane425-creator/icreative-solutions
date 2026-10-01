import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import { RefreshCw, CheckCircle, ShieldAlert, FileText, Clock, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Refund & Cancellation Policy | iCreative Solutions',
  description:
    'Our transparent B2B Refund and Cancellation Policy for PharmAssist and GrowAssist POS software licenses, trial periods, and service plans in Pakistan.',
  alternates: {
    canonical: 'https://icreative.vercel.app/refund-policy',
  },
  openGraph: {
    title: 'Refund & Cancellation Policy | iCreative Solutions',
    description: 'B2B Software Refund Terms, 7-Day Free Trial, and 30-Day Guarantee Details.',
    url: 'https://icreative.vercel.app/refund-policy',
    type: 'website',
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = "January 15, 2026";

  const keyPoints = [
    {
      icon: Clock,
      title: "7-Day Risk-Free Trial",
      description: "Test our software on your store counter with real products and receipt printing before paying a single rupee."
    },
    {
      icon: RefreshCw,
      title: "30-Day Money-Back Guarantee",
      description: "Available on Semi-Annual and Annual plans if our platform fails to perform core advertised functions."
    },
    {
      icon: CheckCircle,
      title: "Full Data Export Guarantee",
      description: "If you decide to cancel, your business records (stock, khatas, invoices) remain 100% yours to export anytime."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />

      {/* Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 border-b border-gray-200/60 dark:border-gray-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
            <RefreshCw className="w-4 h-4" />
            <span>Customer Satisfaction & Fair Terms</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-950 dark:text-white">
            Refund & Cancellation Policy
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Clear, honest terms for our retail partners and enterprise POS subscribers across Pakistan.
          </p>

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            Last Updated: {lastUpdated} &bull; Applicable to All Software Licenses & Subscriptions
          </p>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {keyPoints.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Policy Details */}
      <section className="py-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="prose dark:prose-invert max-w-none space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">

          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">1</span>
              7-Day "Try Before You Buy" Free Trial
            </h2>
            <p>
              At iCreative Solutions, we believe that software should prove its value before any money changes hands. We encourage every new retail store or pharmacy to utilize our <strong>7-Day Free Trial</strong> on the Starter package.
            </p>
            <p className="mt-3">
              During this trial, you have full access to billing, barcode scanning, Pakistani medicine database searches, and thermal receipt printing. No credit card or upfront deposit is required. If the software does not suit your store workflow, you can simply stop using it with zero obligation.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">2</span>
              30-Day Money-Back Guarantee (Semi-Annual & Annual Plans)
            </h2>
            <p>
              For clients who purchase our <strong>Semi-Annual</strong> (PKR 10,000) or <strong>Annual</strong> (PKR 18,000) plans, we provide a 30-day money-back guarantee from the initial date of activation under the following terms:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Eligibility:</strong> If the software experiences persistent technical malfunctions or fails to execute core advertised features (e.g. inventory ledger calculation, receipt generation, or database stability), and our engineering team cannot resolve the critical defect within seven (7) business days of being reported.
              </li>
              <li>
                <strong>Refund Amount:</strong> You will receive a 100% refund of the subscription licensing fee paid for that period.
              </li>
              <li>
                <strong>Non-Refundable Services:</strong> Third-party physical hardware (e.g., barcode scanners, thermal printers, cash drawers) purchased through distributors carries standard manufacturer replacement warranties. Custom on-site travel technician allowances that were already executed are non-refundable.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">3</span>
              Subscription Cancellation & Auto-Renewal
            </h2>
            <p>
              You may cancel your subscription renewal at any time:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Monthly Plan:</strong> You can cancel prior to your next monthly billing date. Your license remains active until the end of the paid month, after which billing ceases with no cancellation penalties.
              </li>
              <li>
                <strong>Semi-Annual & Annual Plans:</strong> Cancellation requests submitted after the initial 30-day guarantee period will remain active through the duration of the paid term. Subscriptions will not automatically renew for the following year unless confirmed.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">4</span>
              Zero Data Lock-In & Export Protection
            </h2>
            <div className="my-4 p-5 rounded-2xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200 dark:border-cyan-800 text-sm">
              <strong>Your Data is Never Held Hostage:</strong> In the event of a cancellation or refund, your historical sales data, customer ledgers, and inventory counts remain strictly your property. Our team will assist you in generating a full CSV/Excel export of your entire database at no extra fee.
            </div>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 inline-flex items-center justify-center text-sm font-bold mr-3">5</span>
              How to Request a Refund
            </h2>
            <p>
              To initiate a refund request, simply contact our billing department with your store name and invoice details:
            </p>
            <div className="mt-4 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-sm space-y-2">
              <p><strong>iCreative Solutions — Billing & Accounts</strong></p>
              <p>Email: <a href="mailto:contact@icreativesolutions.pk" className="text-cyan-600 dark:text-cyan-400 underline">contact@icreativesolutions.pk</a></p>
              <p>WhatsApp / Call: <a href="https://wa.me/923275848916" className="text-cyan-600 dark:text-cyan-400 font-semibold">+92 327 5848916</a></p>
              <p className="text-gray-500 dark:text-gray-400 pt-2">
                Eligible refunds are processed within 5 to 7 business days via direct online bank transfer (IBFT), JazzCash, or EasyPaisa.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
