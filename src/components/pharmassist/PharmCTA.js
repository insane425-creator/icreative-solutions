//src/components/pharmassist/PharmCTA.js
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const ctaBenefits = [
  "No setup hassle - we handle everything",
  "No hidden costs - transparent pricing",
  "Free training for your team",
  "30-day money-back guarantee",
  "Pakistani rupee pricing",
  "Local installation support"
];

const actionButtons = [
  {
    title: "Request Free Demo",
    subtitle: "See PharmAssist in action",
    icon: Phone,
    primary: true,
    action: "demo"
  },
  {
    title: "Talk to an Expert", 
    subtitle: "Get personalized consultation",
    icon: MessageCircle,
    primary: false,
    action: "expert"
  },
  {
    title: "Download Brochure",
    subtitle: "Complete feature overview",
    icon: Download,
    primary: false,
    action: "brochure"
  }
];

export default function PharmCTA() {
  const handleAction = (actionType) => {
    switch(actionType) {
      case 'demo':
      case 'expert':
        // Scroll to contact section
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'brochure':
        // Handle brochure download
        console.log('Download brochure');
        break;
      default:
        break;
    }
  };

  return (
    <section id="pharm-cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDUwQzI1IDI1IDc1IDc1IDEwMCA1MFYxMDBIMFY1MFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4xIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-white/10 rounded-lg rotate-45 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-white/10 rounded-lg rotate-12 animate-pulse"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Ready to Transform Your Pharmacy?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
          >
            Join hundreds of Pakistani pharmacies already using PharmAssist to streamline operations, 
            improve customer experience, and drive sustainable growth.
          </motion.p>

          {/* Trust Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-12"
          >
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Trusted by 100+ pharmacies across Pakistan</span>
          </motion.div>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {actionButtons.map((button, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleAction(button.action)}
              className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                button.primary 
                  ? 'bg-white text-cyan-600 border-white hover:bg-gray-50 shadow-xl hover:shadow-2xl' 
                  : 'bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 hover:border-white/50'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-xl mb-4 ${
                  button.primary 
                    ? 'bg-cyan-100 text-cyan-600' 
                    : 'bg-white/20 text-white'
                } group-hover:scale-110 transition-transform duration-300`}>
                  <button.icon className="w-8 h-8" />
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${
                  button.primary ? 'text-cyan-600' : 'text-white'
                }`}>
                  {button.title}
                </h3>
                
                <p className={`text-sm ${
                  button.primary ? 'text-cyan-500' : 'text-white/80'
                } mb-4`}>
                  {button.subtitle}
                </p>
                
                <div className={`flex items-center space-x-2 ${
                  button.primary ? 'text-cyan-600' : 'text-white'
                }`}>
                  <span className="font-medium">Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Get started today with these guarantees:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ctaBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl mb-8 opacity-90">
            "PharmAssist turns your pharmacy into a smarter business."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Pharmacy POS</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Pharmacy Management Software</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Pakistan Pharmacy Billing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>iCreative Solutions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}