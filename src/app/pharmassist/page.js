//src/app/pharmassist/page.js
'use client';

import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import { Eye } from 'lucide-react';

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

// Simple embedded 3D toggle component
function Embedded3DToggle({ onToggle }) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                Try our 3D Interactive Tour
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Experience the software in an immersive walkthrough
              </p>
            </div>
          </div>
          <button
            onClick={() => onToggle(false)}
            className="bg-gradient-to-r from-orange-500 to-red-500 dark:from-orange-400 dark:to-red-400 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-red-600 dark:hover:from-orange-500 dark:hover:to-red-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Launch 3D Tour
          </button>
        </div>
      </div>
    </div>
  );
}

// Enhanced Classic 2D Experience with embedded 3D toggle
function ClassicExperience({ onToggle3D }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <PharmHero />
      <Embedded3DToggle onToggle={onToggle3D} />
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
              onClick={() => this.props.onBackToClassic()}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 mr-4"
            >
              Switch to Classic View
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gray-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
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

  const handleExperienceToggle = (classicMode) => {
    setIsClassic(classicMode);
  };

  const handleBackToClassic = () => {
    setIsClassic(true);
  };

  // Don't render until client-side and preload complete
  if (!isClient || !preloadComplete) {
    return <SceneLoader />;
  }

  return (
    <div className="relative">
      <NavigationBar />

      {/* Render content based on selection */}
      {!isClassic ? (
        <SceneErrorBoundary onBackToClassic={handleBackToClassic}>
          <Suspense fallback={<SceneLoader />}>
            <PharmacyScene />
          </Suspense>
        </SceneErrorBoundary>
      ) : (
        <ClassicExperience onToggle3D={handleExperienceToggle} />
      )}

      {/* Only show footer for classic experience */}
      {isClassic && <Footer />}
    </div>
  );
}