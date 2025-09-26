//src/components/pharmassist/PharmCTA.js
'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Phone, MessageCircle, CheckCircle } from 'lucide-react';

const actionButtons = [
  {
    title: "Request Demo",
    subtitle: "See PharmAssist in action",
    icon: Phone,
    primary: true,
    action: "demo"
  },
  {
    title: "Talk to Expert", 
    subtitle: "Get consultation",
    icon: MessageCircle,
    primary: false,
    action: "expert"
  },
  {
    title: "Download Brochure",
    subtitle: "Feature overview",
    icon: Download,
    primary: false,
    action: "brochure"
  }
];

const benefits = [
  "No setup hassle - we handle everything",
  "No hidden costs - transparent pricing",
  "Free training for your team",
  "30-day money-back guarantee",
  "Pakistani rupee pricing",
  "Local installation support"
];

export default function PharmCTA() {
  const handleAction = (actionType) => {
    switch(actionType) {
      case 'demo':
      case 'expert':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'brochure':
        console.log('Download brochure');
        break;
      default:
        break;
    }
  };

  return (
    <section id="pharm-cta" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Transform Your Pharmacy?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
          >
            Join hundreds of Pakistani pharmacies using PharmAssist to streamline operations and drive growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mt-4"
          >
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm">Trusted by 100+ pharmacies across Pakistan</span>
          </motion.div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {actionButtons.map((button, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleAction(button.action)}
              className={`group p-6 rounded-xl border-2 transition-all duration-300 ${
                button.primary 
                  ? 'bg-white text-cyan-600 border-white hover:bg-gray-50 shadow-lg' 
                  : 'bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-lg mb-3 ${
                  button.primary 
                    ? 'bg-cyan-100 text-cyan-600' 
                    : 'bg-white/20 text-white'
                }`}>
                  <button.icon className="w-6 h-6" />
                </div>
                
                <h3 className={`text-lg font-bold mb-2 ${
                  button.primary ? 'text-cyan-600' : 'text-white'
                }`}>
                  {button.title}
                </h3>
                
                <p className={`text-sm ${
                  button.primary ? 'text-cyan-500' : 'text-white/80'
                } mb-3`}>
                  {button.subtitle}
                </p>
                
                <div className={`flex items-center space-x-2 ${
                  button.primary ? 'text-cyan-600' : 'text-white'
                }`}>
                  <span className="font-medium text-sm">Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-center mb-6">
            Get started today with these guarantees:
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-white/90 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-lg mb-6 opacity-90">
            "PharmAssist turns your pharmacy into a smarter business."
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {[
              "Pharmacy POS",
              "Pharmacy Management Software", 
              "Pakistan Pharmacy Billing",
              "iCreative Solutions"
            ].map((tag, index) => (
              <div key={index} className="bg-white/10 px-3 py-1 rounded-lg">
                {tag}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}