'use client';

import { useState } from 'react';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import { HelpCircle, ChevronDown, Search, MessageSquare, Phone, ShieldCheck, Zap, HardDrive, Cpu, CreditCard } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'offline', label: 'Offline & Reliability' },
    { id: 'hardware', label: 'Hardware & Printers' },
    { id: 'migration', label: 'Data & Migration' },
    { id: 'pricing', label: 'Pricing & Licensing' },
    { id: 'support', label: 'Support & On-Site Visits' },
  ];

  const faqs = [
    {
      category: 'offline',
      question: 'Does the software require internet to bill customers during store hours?',
      answer: 'No. PharmAssist and GrowAssist are built with a 100% offline-first engine. All billing, inventory lookup, customer balance adjustments, and barcode scans happen instantaneously on your local machine with zero internet dependency. You can bill customers seamlessly even during broadband fiber cuts or mobile data outages.'
    },
    {
      category: 'offline',
      question: 'How does it handle power cuts or sudden load-shedding?',
      answer: 'Our software incorporates atomic database write transactions. If power cuts out mid-transaction, your database avoids corruption. Once power is restored or your UPS/generator kicks in, the software boots back up with your entire ledger and inventory state intact.'
    },
    {
      category: 'offline',
      question: 'Can multiple cash counters sync together without an internet connection?',
      answer: 'Yes! On our multi-device plans, multiple cash counters communicate over your in-store Local Area Network (LAN or Wi-Fi router) without needing any internet connection. Counter 1, Counter 2, and Counter 3 deduct from the same central store stock in real-time.'
    },
    {
      category: 'hardware',
      question: 'What computer hardware do I need to run PharmAssist or GrowAssist?',
      answer: 'Our software is lightweight and engineered to run smoothly on standard, cost-effective Windows hardware. A basic desktop or laptop with an Intel Core i3 (4th gen or higher), 4GB of RAM, and Windows 10 or 11 is more than sufficient.'
    },
    {
      category: 'hardware',
      question: 'Does it support my existing thermal receipt printer and barcode scanner?',
      answer: 'Yes. We support all industry-standard 80mm and 58mm thermal receipt printers (Epson, Xprinter, Rongta, Black Copper, Posiflex, etc.), USB barcode laser scanners, 2D QR scanners, electronic cash drawers, and weight scales.'
    },
    {
      category: 'migration',
      question: 'Can you migrate my existing stock and customer records from my old software?',
      answer: 'Yes, absolutely. We provide a Zero-Downtime Data Migration service. Our technical team can safely import your existing stock list, wholesale supplier ledgers, customer khatas, and purchase prices from Excel, CSV, or old desktop/DOS POS databases so you never have to re-enter thousands of items manually.'
    },
    {
      category: 'migration',
      question: 'Does PharmAssist include preloaded Pakistani medicines?',
      answer: 'Yes! PharmAssist comes pre-indexed with 14,000+ registered Pakistani medicines, including generic formulas, trade names, manufacturers, potencies, and packaging configurations. You can start billing standard medicines on day one without having to type everything from scratch.'
    },
    {
      category: 'pricing',
      question: 'Is there a free trial before I pay for a subscription?',
      answer: 'Yes. We provide a 7-day risk-free trial on our Starter package so you can install the system on your actual store counter, experience the speed, test receipt printing, and train your staff before making any financial commitment.'
    },
    {
      category: 'pricing',
      question: 'How do subscription renewals and payments work in Pakistan?',
      answer: 'We accept payments via direct online bank transfer (IBFT), JazzCash, EasyPaisa, or on-site cash collection via our regional technicians in Abbottabad, Hazara, and surrounding districts.'
    },
    {
      category: 'pricing',
      question: 'Are future software updates included in my plan?',
      answer: 'Yes. All active subscribers receive regular software updates, performance improvements, security enhancements, and regulatory updates (such as updated drug registers and tax compliance tools) at zero additional charge.'
    },
    {
      category: 'support',
      question: 'What kind of support do you provide if a problem occurs during peak hours?',
      answer: 'We offer immediate WhatsApp support, direct phone lines, and remote screen-sharing via AnyDesk/TeamViewer. For critical issues, our senior engineers respond within minutes to ensure your sales counter never stops.'
    },
    {
      category: 'support',
      question: 'Do you offer on-site technician visits to our pharmacy or store?',
      answer: 'Yes! Our Semi-Annual and Annual plans include free scheduled on-site visits for hardware setup, staff onboarding, and network configuration in Abbottabad, Mansehra, Haripur, Rawalpindi/Islamabad, and partner coverage zones across Pakistan.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesQuery = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <NavigationBar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-sky-50/50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 border-b border-gray-200/60 dark:border-gray-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-gray-950 dark:text-white">
            Everything You Need to Know About Our POS Systems
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Answers to common questions from Pakistani pharmacy owners, supermarkets, and wholesale businesses.
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by keyword (e.g. offline, hardware, printer, trial, migration)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 shadow-sm transition-all"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-gray-950 shadow-md scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="py-8 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-8">
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              No answers matching "{searchQuery}".
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Have a specific technical question? Contact our engineering team directly on WhatsApp.
            </p>
            <a
              href="https://wa.me/923275848916?text=Hi%20iCreative%20Solutions%2C%20I%20have%20a%20question%20about%20your%20POS%20software."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-6 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-snug">
                      {faq.question}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-cyan-500 text-gray-950 rotate-180' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed border-t border-gray-100 dark:border-gray-800/80 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Support Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-gray-900 via-slate-900 to-gray-950 text-white border border-gray-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Have More Questions?</h3>
            <p className="text-sm text-gray-400 max-w-md">
              Speak directly with an engineer to discuss your store layout, hardware, or multi-counter needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              href="https://wa.me/923275848916?text=Hi%20iCreative%20Solutions%2C%20I%20have%20questions%20regarding%20POS%20setup."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm text-center flex items-center justify-center space-x-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm text-center border border-white/20 transition-all hover:scale-105"
            >
              Request a Call Back
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
