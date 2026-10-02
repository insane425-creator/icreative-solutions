'use client';

import { Check, Star, Users, Zap, Shield, Headphones } from 'lucide-react';

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      subtitle: "For single-counter pharmacies & stores",
      price: "2,000",
      period: "month",
      onboarding: "FREE Remote Onboarding",
      originalPrice: null,
      description: "Zero commitment, 7-day risk-free trial",
      badge: "7-Day Free Trial",
      badgeColor: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
      buttonStyle: "btn-secondary",
      features: [
        "1 device (Manager + POS in one)",
        "Zero setup / onboarding fee",
        "14,000+ Pakistani medicines preloaded",
        "100% offline billing with thermal receipts",
        "Free updates + remote support",
        "Customer ledger & khata tracking"
      ],
      popular: false,
      savings: null
    },
    {
      name: "Annual Pro",
      subtitle: "Best value for standalone stores",
      price: "20,000",
      period: "year",
      onboarding: "FREE Remote Onboarding",
      monthlyEquivalent: "1,666",
      originalPrice: "24,000",
      description: "2-year locked maintenance rate guarantee",
      badge: "2-Year Rate Lock",
      badgeColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
      buttonStyle: "btn-secondary",
      features: [
        "1 Store Manager + 1 Cashier terminal",
        "Rate locked at PKR 20,000/yr for 2 years",
        "2 on-site technician visits included per year",
        "Proactive batch & expiry date tracking",
        "Priority WhatsApp & phone support (Mon-Sat)",
        "Wholesale supplier ledger & credit tracking"
      ],
      popular: false,
      savings: "Save PKR 4,000/yr"
    },
    {
      name: "Multi-Counter",
      subtitle: "Official Full-Store Agreement License",
      price: "20,000",
      period: "year",
      onboarding: "PKR 30,000 Setup (Was 50k)",
      monthlyEquivalent: "1,666",
      originalPrice: "50,000 setup",
      description: "Milestone: 70% upfront, 30% after 7-day live operation",
      badge: "Up to 5 Devices Included",
      badgeColor: "bg-gradient-to-r from-cyan-500 to-sky-500 text-white",
      buttonStyle: "btn-primary",
      features: [
        "Up to 5 devices (1 Manager + 4 Cashiers)",
        "On-site installation & staff training",
        "Local LAN sync (cashiers need zero internet)",
        "Terminal prefixing (C1-44, C2-44) zero bill conflict",
        "2 free hardware PC replacements per year",
        "2 installation visits + 2 annual visits included",
        "Additional cashier terminal: PKR 8,000 lifetime"
      ],
      popular: true,
      savings: "40% Off Installation"
    },
    {
      name: "Enterprise Chain",
      subtitle: "For pharmacy chains, marts & depots",
      price: "Custom",
      period: "license",
      onboarding: "Dedicated Engineer Deployment",
      description: "Multi-branch sync & custom architectures",
      badge: "Multi-Branch & Marts",
      badgeColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
      buttonStyle: "btn-secondary",
      features: [
        "Unlimited counters & warehouse depots",
        "Centralized multi-store inventory synchronization",
        "Dedicated technical account manager",
        "Custom accounting & ERP export pipelines",
        "Emergency on-site response SLA",
        "Custom role permissions (Cashier, Manager, Auditor)"
      ],
      popular: false,
      savings: "Volume Pricing"
    }
  ];

  const handlePlanSelect = (planName) => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      const msg = encodeURIComponent(`Hello iCreative Solutions, I am interested in getting started with the ${planName} Plan for my store. Please provide onboarding details.`);
      window.open(`https://wa.me/923275848916?text=${msg}`, '_blank');
    }
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            No hidden fees, no setup costs. Start with our 7-day free trial and scale as your business grows.
          </p>

          {/* Money Back Guarantee */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full text-green-700 dark:text-green-400 text-sm font-medium">
            <Shield className="w-4 h-4" />
            <span>30-day money-back guarantee</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            // Define colors for each plan
            const cardColors = [
              'bg-gradient-to-b from-sky-50/70 to-cyan-50/40 border-sky-200/50 dark:from-sky-900/20 dark:to-cyan-900/10 dark:border-sky-700/30',
              'bg-gradient-to-b from-cyan-50/70 to-sky-50/40 border-cyan-200/50 dark:from-cyan-900/20 dark:to-sky-900/10 dark:border-cyan-700/30',
              'bg-gradient-to-b from-cyan-200/80 to-sky-200/60 border-cyan-400/70 dark:from-cyan-800/50 dark:to-sky-800/35 dark:border-cyan-500/60',
              'bg-gradient-to-b from-orange-100/90 to-red-100/70 border-orange-300/60 dark:from-orange-900/40 dark:to-red-900/25 dark:border-orange-600/50'
            ];

            return (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${plan.popular
                    ? 'shadow-xl shadow-cyan-500/10 ' + cardColors[index]
                    : 'hover:shadow-lg ' + cardColors[index]
                  }`}
              >

                <div className="p-8 flex flex-col flex-grow">
                  {/* Plan Badge */}
                  <div className="mb-4 flex-shrink-0">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${plan.badgeColor}`}>
                      {plan.badge}
                    </span>
                  </div>

                  {/* Plan Details */}
                  <div className="mb-6 flex-shrink-0">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {plan.subtitle}
                    </p>

                    {/* Pricing */}
                    <div className="flex items-baseline space-x-2 mb-2">
                      {plan.originalPrice && (
                        <span className="text-lg text-gray-400 dark:text-gray-500 line-through">
                          PKR {plan.originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        PKR {plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        /{plan.period}
                      </span>
                    </div>

                    {/* Monthly Equivalent */}
                    {plan.monthlyEquivalent && (
                      <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                        ≈ PKR {plan.monthlyEquivalent}/month
                      </p>
                    )}

                    {/* Savings */}
                    {plan.savings && (
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {plan.savings}
                      </p>
                    )}

                    {/* Onboarding note */}
                    {plan.onboarding && (
                      <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700 text-xs font-semibold text-gray-800 dark:text-gray-200 shadow-sm">
                        <span>⚡ Setup: {plan.onboarding}</span>
                      </div>
                    )}

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="flex-shrink-0 mt-auto">
                    <button
                      onClick={() => handlePlanSelect(plan.name)}
                      className={`w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${plan.buttonStyle === 'btn-primary'
                          ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 hover:scale-105'
                          : 'border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20'
                        }`}
                    >
                      {plan.name === 'Starter' ? 'Start Free Trial' : 'Get Started'}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Feature Highlights */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Every Plan Includes
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized for busy Pakistani businesses with instant transaction processing"
              },
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description: "Your data is encrypted and backed up with 99.9% uptime guarantee"
              },
              {
                icon: Headphones,
                title: "Local Support",
                description: "Dedicated Pakistani support team available when you need help"
              }
            ].map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white mb-4">
                  <highlight.icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Questions About Pricing?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our team is here to help you choose the right plan for your business needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contact';
                }
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
            </button>

            <a
              href="tel:+923275848916"
              className="px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
            >
              Call: +92 327 5848916
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}