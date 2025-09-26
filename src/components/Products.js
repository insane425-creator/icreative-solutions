'use client';

import { ArrowRight, Package, ShoppingCart, Users, Star } from 'lucide-react';

const products = [
  {
    icon: Package,
    title: "PharmAssist",
    subtitle: "Pharmacy POS & Management System",
    description: "The complete POS solution for pharmacies in Pakistan. Manage inventory, prescriptions, and compliance in one powerful platform.",
    features: [
      "Prescription & inventory tracking",
      "Expiry date alerts & notifications",
      "Patient & customer records",
      "Insurance & billing integration",
      "Regulatory compliance tools"
    ],
    demoLink: "/pharmassist",
    comingSoon: false,
    badge: "Most Popular"
  },
  {
    icon: ShoppingCart,
    title: "GrowAssist",
    subtitle: "Grocery Store POS System",
    description: "A modern POS designed for supermarkets, kiryana stores, and retail shops across Pakistan.",
    features: [
      "Multi-category inventory management",
      "Barcode scanning & dynamic pricing",
      "Customer loyalty programs",
      "Supplier & purchase management",
      "Real-time sales analytics"
    ],
    demoLink: "https://growassist.vercel.app",
    comingSoon: false,
    badge: "New"
  }
];

function ProductCard({ icon: Icon, title, subtitle, description, features, comingSoon = false, demoLink, badge }) {
  const handleViewProduct = () => {
    if (!comingSoon && demoLink) {
      window.open(demoLink, '_blank');
    }
  };

  const handleRequestDemo = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      {badge && (
        <div className="absolute top-6 right-6 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-sm">
            <Star className="w-3 h-3 mr-1" />
            {badge}
          </span>
        </div>
      )}
      
      <div className="p-8">
        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        
        {/* Content */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-3">
            {subtitle}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        {/* Actions */}
        <div className="flex flex-col space-y-3">
          <button 
            onClick={handleViewProduct}
            className="group/btn w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={comingSoon}
          >
            <span>{comingSoon ? 'Coming Soon' : 'View Product'}</span>
            {!comingSoon && <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />}
          </button>
          
          <button 
            onClick={handleRequestDemo}
            className="w-full px-6 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 transition-all duration-300"
          >
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
            Our POS Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Built for Pakistani Businesses
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            Specialized POS solutions combining global tech standards with local business needs. 
            Fast, secure, and designed for the unique challenges of running businesses in Pakistan.
          </p>
        </div>
        
        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              subtitle={product.subtitle}
              description={product.description}
              features={product.features}
              demoLink={product.demoLink}
              comingSoon={product.comingSoon}
              badge={product.badge}
            />
          ))}
        </div>
        
        {/* Coming Soon Section */}
        <div className="text-center">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 border border-cyan-200/50 dark:border-cyan-700/50 p-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-sky-500/5"></div>
            <div className="relative">
              <Users className="w-12 h-12 mx-auto mb-4 text-cyan-500" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                More Solutions Coming Soon
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
                We're constantly innovating to help more businesses succeed. Upcoming solutions include 
                <span className="font-semibold text-cyan-600 dark:text-cyan-400"> RestaurantAssist</span> and 
                <span className="font-semibold text-cyan-600 dark:text-cyan-400"> RetailAssist</span>, 
                designed for Pakistan's evolving retail sector.
              </p>
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold border border-gray-200 dark:border-gray-600 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300">
                <span>Get Notified</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}