//src/components/pharmassist/PharmHero.js
'use client';

import { ArrowRight, Play, Shield, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PharmHero() {
  const handleRequestDemo = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreFeatures = () => {
    document.getElementById('pharm-features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pharm-hero" className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wIDUwQzI1IDI1IDc1IDc1IDEwMCA1MFYxMDBIMFY1MFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjAiIHkxPSIwIiB4Mj0iMTAwIiB5Mj0iMTAwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMwNkI2RDQiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwRjg0RjMiIHN0b3Atb3BhY2l0eT0iMC4xIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+')] opacity-30"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-cyan-200/50 dark:border-cyan-700/50 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse"></div>
            Pakistan's Most Reliable Pharmacy POS
          </motion.div>
          
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 bg-clip-text text-transparent">
              PharmAssist
            </span>
            <br />
            <span className="text-gray-900 dark:text-white text-3xl md:text-4xl">
              Complete Pharmacy POS for Pakistan
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300"
          >
            Manage prescriptions, inventory, and compliance with Pakistan's most reliable pharmacy management software. Built with local regulations and bilingual support.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button 
              onClick={handleRequestDemo}
              className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <span>Request Demo</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={handleExploreFeatures}
              className="group px-8 py-3 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
            >
              <Play className="w-4 h-4" />
              <span>Explore Features</span>
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-cyan-100 dark:border-cyan-900/50">
              <Users className="w-5 h-5 text-cyan-500" />
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">100+ Pharmacies</div>
                <div className="text-xs">Trust PharmAssist</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-cyan-100 dark:border-cyan-900/50">
              <Shield className="w-5 h-5 text-cyan-500" />
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">Bank-Grade Security</div>
                <div className="text-xs">99.9% Uptime</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 text-sm text-gray-600 dark:text-gray-400 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-cyan-100 dark:border-cyan-900/50">
              <Clock className="w-5 h-5 text-cyan-500" />
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">24/7 Support</div>
                <div className="text-xs">Local Pakistani Team</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}