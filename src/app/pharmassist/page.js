//src/app/pharmassist/page.js
'use client';

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

// Import PharmAssist-specific components
import PharmHero from '../../components/pharmassist/PharmHero';
import PharmFeatures from '../../components/pharmassist/PharmFeatures';
import PharmDashboard from '../../components/pharmassist/PharmDashboard';
import PharmPOS from '../../components/pharmassist/PharmPOS';
import PharmInventory from '../../components/pharmassist/PharmInventory';
import PharmOperations from '../../components/pharmassist/PharmOperations';
import PharmAbout from '../../components/pharmassist/PharmAbout';
import PharmCTA from '../../components/pharmassist/PharmCTA';

// Lazy load the 3D scene for better performance
const PharmacyScene = lazy(() => import('../../components/PharmacyScene'));

// Enhanced loading component with better UX
function SceneLoader() {
  const [loadingText, setLoadingText] = useState('Initializing 3D Environment');
  
  useEffect(() => {
    const messages = [
      'Initializing 3D Environment',
      'Loading Pharmacy Models',
      'Preparing Interactive Tour',
      'Almost Ready...'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.length;
      setLoadingText(messages[index]);
    }, 1200);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center max-w-md">
        {/* Enhanced loading animation */}
        <div className="relative mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 w-16 h-16 border-2 border-sky-400 border-b-transparent rounded-full"
          />
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Loading PharmAssist
        </motion.h2>
        
        <motion.p 
          key={loadingText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-gray-600 dark:text-gray-400 text-lg"
        >
          {loadingText}
        </motion.p>

        {/* Loading progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500 to-sky-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}

// Enhanced Experience Mode Toggle with better styling
function ExperienceToggle({ isClassic, onToggle }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-5 right-2 z-50"
    >
      <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/50 dark:border-gray-700/50">
        <div className="flex items-center space-x-4">
          <span className={`text-sm font-semibold transition-all duration-300 ${
            isClassic ? 'text-cyan-600 scale-105' : 'text-gray-500'
          }`}>
            Classic
          </span>
          
          <button
            onClick={onToggle}
            className={`relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${
              isClassic 
                ? 'bg-gray-300 hover:bg-gray-400' 
                : 'bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-600 hover:to-sky-700 shadow-lg'
            }`}
          >
            <span
              className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 shadow-md ${
                isClassic ? 'translate-x-1' : 'translate-x-8'
              }`}
            />
          </button>
          
          <span className={`text-sm font-semibold transition-all duration-300 ${
            !isClassic ? 'text-cyan-600 scale-105' : 'text-gray-500'
          }`}>
            3D View
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Enhanced Classic 2D Experience with better performance
function ClassicExperience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <PharmHero />
      <PharmFeatures />
      <PharmDashboard />
      <PharmPOS />
      <PharmInventory />
      <PharmOperations />
      <PharmAbout />
      <PharmCTA />
    </div>
  );
}

// Error boundary for 3D scene
class SceneErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Scene Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              3D Experience Unavailable
            </h2>
            <p className="text-gray-600 mb-6">
              There was an issue loading the 3D tour. Please try refreshing the page or switch to classic view.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default function PharmAssistPage() {
  const [isClassic, setIsClassic] = useState(true); // Default to classic for better UX
  const [isClient, setIsClient] = useState(false);
  const [preloadComplete, setPreloadComplete] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Preload fonts
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
        
        // Small delay to ensure smooth transition
        setTimeout(() => setPreloadComplete(true), 100);
      } catch (error) {
        console.warn('Preloading failed:', error);
        setPreloadComplete(true);
      }
    };

    preloadResources();
  }, []);

  // Don't render until client-side and preload complete
  if (!isClient || !preloadComplete) {
    return <SceneLoader />;
  }

  return (
    <div className="relative">
      <NavigationBar />
      
      <ExperienceToggle 
        isClassic={isClassic} 
        onToggle={() => setIsClassic(!isClassic)} 
      />

      {isClassic ? (
        <ClassicExperience />
      ) : (
        <SceneErrorBoundary>
          <Suspense fallback={<SceneLoader />}>
            <PharmacyScene />
          </Suspense>
        </SceneErrorBoundary>
      )}

      {isClassic && <Footer />}
    </div>
  );
}