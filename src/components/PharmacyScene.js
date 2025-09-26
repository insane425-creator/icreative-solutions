'use client';

import React, { useRef, useState, useEffect, useMemo, Suspense, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';
import * as THREE from 'three';
import { ChevronLeft, ChevronRight, ZoomIn, X, Menu } from 'lucide-react';

// Screenshot panel data
const screenshotPanels = [
  { 
    id: 'dashboard', 
    title: 'Analytics Dashboard',
    image: '/pharmassist/images/dashboard.jpg',
    description: 'Real-time analytics and business insights for your pharmacy operations.'
  },
  { 
    id: 'inventory', 
    title: 'Inventory Management',
    image: '/pharmassist/images/inventory.jpg',
    description: 'Complete stock management with automated reordering and expiry tracking.'
  },
  { 
    id: 'pos', 
    title: 'Point of Sale',
    image: '/pharmassist/images/pos.jpg',
    description: 'Fast and efficient billing system with prescription management.'
  },
  { 
    id: 'poslayout2', 
    title: 'POS Layout',
    image: '/pharmassist/images/poslayout2.jpg',
    description: 'Customizable point-of-sale interface designed for pharmacy workflows.'
  },
  { 
    id: 'purchase', 
    title: 'Purchase Management',
    image: '/pharmassist/images/purchase.jpg',
    description: 'Streamlined procurement process with supplier management and cost tracking.'
  },
  { 
    id: 'settings', 
    title: 'System Settings',
    image: '/pharmassist/images/settings.jpg',
    description: 'Comprehensive configuration options to customize your pharmacy system.'
  }
];

// Modern marble pillar with professional finish
const ModernPillar = React.memo(({ position, height = 12 }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle lighting variation
      meshRef.current.material.emissiveIntensity = 0.05 + Math.sin(state.clock.elapsedTime * 0.3) * 0.02;
    }
  });

  return (
    <group position={position}>
      {/* Main pillar */}
      <mesh ref={meshRef}>
        <cylinderGeometry args={[0.8, 0.9, height, 16]} />
        <meshStandardMaterial 
          color="#f5f5f5" 
          emissive="#ffffff"
          emissiveIntensity={0.05}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
      
      {/* Capital */}
      <mesh position={[0, height/2 + 0.3, 0]}>
        <cylinderGeometry args={[1.1, 0.8, 0.6, 16]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.15}
          metalness={0.2}
        />
      </mesh>
      
      {/* Base */}
      <mesh position={[0, -height/2 - 0.3, 0]}>
        <cylinderGeometry args={[0.9, 1.1, 0.6, 16]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.15}
          metalness={0.2}
        />
      </mesh>
    </group>
  );
});

// Professional building hall environment
const BuildingHallEnvironment = React.memo(() => {
  return (
    <group>
      {/* Floor - marble pattern */}
      <mesh position={[0, -6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#f0f0f0"
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>
      
      {/* Ceiling */}
      <mesh position={[0, 10, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#ffffff"
          roughness={0.8}
        />
      </mesh>

      {/* Side walls */}
      <mesh position={[-25, 2, 0]}>
        <planeGeometry args={[100, 16]} />
        <meshStandardMaterial 
          color="#fafafa"
          roughness={0.7}
        />
      </mesh>
      
      <mesh position={[25, 2, 0]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[100, 16]} />
        <meshStandardMaterial 
          color="#fafafa"
          roughness={0.7}
        />
      </mesh>

      {/* Back wall with gradient effect */}
      <mesh position={[0, 2, -50]}>
        <planeGeometry args={[100, 16]} />
        <meshStandardMaterial 
          color="#e8e8e8"
          roughness={0.6}
        />
      </mesh>

      {/* Professional pillars in rows */}
      {Array.from({ length: 6 }).map((_, i) => (
        <React.Fragment key={i}>
          <ModernPillar position={[-12, 0, -5 - i * 8]} height={16} />
          <ModernPillar position={[12, 0, -5 - i * 8]} height={16} />
        </React.Fragment>
      ))}

      {/* Professional lighting fixtures */}
      {Array.from({ length: 8 }).map((_, i) => (
        <group key={`light-${i}`} position={[0, 8, -8 - i * 6]}>
          <mesh>
            <cylinderGeometry args={[1.5, 1.5, 0.3, 8]} />
            <meshStandardMaterial 
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.3}
            />
          </mesh>
          <pointLight
            position={[0, -2, 0]}
            intensity={0.8}
            distance={20}
            color="#ffffff"
          />
        </group>
      ))}

      {/* Windows on side walls */}
      {Array.from({ length: 4 }).map((_, i) => (
        <React.Fragment key={`windows-${i}`}>
          <mesh position={[-24.5, 4, -10 - i * 10]}>
            <planeGeometry args={[3, 6]} />
            <meshStandardMaterial 
              color="#87CEEB"
              transparent
              opacity={0.7}
              emissive="#ffffff"
              emissiveIntensity={0.1}
            />
          </mesh>
          <mesh position={[24.5, 4, -10 - i * 10]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[3, 6]} />
            <meshStandardMaterial 
              color="#87CEEB"
              transparent
              opacity={0.7}
              emissive="#ffffff"
              emissiveIntensity={0.1}
            />
          </mesh>
        </React.Fragment>
      ))}
    </group>
  );
});

// 3D Preview panel 
const PreviewPanel = React.memo(({ panel, isVisible, onClick, position }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [textureError, setTextureError] = useState(false);

  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(
      panel.image,
      undefined,
      undefined,
      () => setTextureError(true)
    );
    tex.flipY = false;
    return tex;
  }, [panel.image]);

  const { scale, opacity } = useSpring({
    scale: isVisible ? (hovered ? 1.05 : 1) : 0,
    opacity: isVisible ? 0.9 : 0,
    config: { tension: 200, friction: 25 }
  });

  useFrame((state) => {
    if (meshRef.current && isVisible) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
      meshRef.current.lookAt(state.camera.position);
    }
  });

  if (!isVisible) return null;

  return (
    <group position={position}>
      <animated.mesh
        scale={scale.to(s => s * 1.02)}
        position={[0, 0, -0.01]}
      >
        <planeGeometry args={[4.2, 3.2]} />
        <meshStandardMaterial 
          color="#333333" 
          transparent 
          opacity={0.1}
        />
      </animated.mesh>

      <animated.mesh
        ref={meshRef}
        scale={scale}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[4, 3]} />
        {!textureError ? (
          <animated.meshStandardMaterial 
            map={texture}
            transparent
            opacity={opacity}
          />
        ) : (
          <animated.meshStandardMaterial 
            color="#f8f9fa"
            transparent
            opacity={opacity}
          />
        )}
      </animated.mesh>

      <Text
        position={[0, 1.8, 0.01]}
        fontSize={0.2}
        color="#333333"
        anchorX="center"
        anchorY="middle"
        maxWidth={4}
        font="/fonts/inter-bold.woff"
      >
        Next: {panel.title}
      </Text>
    </group>
  );
});

// Camera controller
const CameraController = React.memo(({ currentStep, onComplete }) => {
  const { camera } = useThree();
  
  const { position } = useSpring({
    position: [0, 3, 2 - (currentStep * 4)],
    config: { tension: 100, friction: 80 },
    onRest: onComplete
  });

  useFrame(() => {
    const pos = position.get();
    camera.position.set(pos[0], pos[1], pos[2]);
    camera.lookAt(0, 2, pos[2] - 10);
  });

  return null;
});

// Hook for mobile detection
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
};

// Main component
function ProfessionalPharmacyWalkthrough() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFullscreen, setShowFullscreen] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const isMobile = useIsMobile();

  const goNext = useCallback(() => {
    if (currentStep < screenshotPanels.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentStep(prev => prev + 1);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [currentStep, screenshotPanels.length, isAnimating]);

  const goPrevious = useCallback(() => {
    if (currentStep > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentStep(prev => prev - 1);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isAnimating]);

  const currentPanel = screenshotPanels[currentStep];

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') return;
      
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          goNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          goPrevious();
          break;
        case 'Escape':
          if (showFullscreen) setShowFullscreen(false);
          if (showMobileMenu) setShowMobileMenu(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goNext, goPrevious, showFullscreen, showMobileMenu]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 overflow-hidden">
      <Canvas
        camera={{ position: [0, 3, 2], fov: isMobile ? 85 : 75 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#f5f5f5', 1);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
      >
        <CameraController 
          currentStep={currentStep}
          onComplete={() => setIsAnimating(false)} 
        />
        
        {/* Professional lighting */}
        <ambientLight intensity={0.6} color="#ffffff" />
        <directionalLight
          position={[10, 20, 10]}
          intensity={1}
          color="#ffffff"
          castShadow
        />
        <pointLight
          position={[0, 8, 0]}
          intensity={0.8}
          distance={50}
          color="#ffffff"
        />

        {/* Building hall environment */}
        <BuildingHallEnvironment />

        {/* Next panel preview */}
        <Suspense fallback={null}>
          {currentStep < screenshotPanels.length - 1 && (
            <PreviewPanel
              panel={screenshotPanels[currentStep + 1]}
              isVisible={true}
              onClick={goNext}
              position={[0, 3, 2 - (currentStep * 4) - 15]}
            />
          )}
        </Suspense>

        {/* Title text */}
        <Text
          position={[0, 7, 0]}
          fontSize={isMobile ? 0.6 : 1}
          color="#1f2937"
          anchorX="center"
          anchorY="middle"
          maxWidth={12}
        >
          PharmAssist Professional Suite
        </Text>
        
        <Text
          position={[0, 6, 0]}
          fontSize={isMobile ? 0.25 : 0.4}
          color="#6b7280"
          anchorX="center"
          anchorY="middle"
          maxWidth={15}
        >
          Comprehensive Pharmacy Management Solutions
        </Text>
      </Canvas>

      {/* Mobile menu toggle */}
      {isMobile && (
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="absolute top-4 right-4 z-20 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Navigation UI - responsive */}
      <div className={`absolute ${
        isMobile 
          ? `${showMobileMenu ? 'bottom-4' : '-bottom-20'} left-4 right-4 transition-all duration-300`
          : 'bottom-8 left-1/2 transform -translate-x-1/2'
      } z-10`}>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 bg-white/95 backdrop-blur-lg rounded-2xl px-6 py-4 border border-gray-200/50 shadow-xl">
          
          {/* Progress info - mobile friendly */}
          <div className="text-center sm:order-2">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {screenshotPanels.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-500 ${
                    index === currentStep
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125 shadow-lg shadow-blue-500/50'
                      : index < currentStep
                      ? 'bg-blue-300 scale-110'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-gray-600">
              {currentStep + 1} of {screenshotPanels.length}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center space-x-4 sm:order-1">
            <button
              onClick={goPrevious}
              disabled={currentStep === 0 || isAnimating}
              className={`p-3 sm:p-4 rounded-full transition-all duration-300 ${
                currentStep === 0 || isAnimating
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
              }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={goNext}
              disabled={currentStep === screenshotPanels.length - 1 || isAnimating}
              className={`p-3 sm:p-4 rounded-full transition-all duration-300 ${
                currentStep === screenshotPanels.length - 1 || isAnimating
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
              }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          <div className="sm:order-3">
            <p className="text-xs text-gray-500 text-center sm:text-left">
              Use ← → keys to navigate
            </p>
          </div>
        </div>
      </div>

      {/* Current image display - responsive */}
      <div className={`absolute ${
        isMobile 
          ? 'top-16 left-4 right-4 max-w-none'
          : 'top-4 right-4 max-w-md xl:max-w-lg'
      } z-10 transition-all duration-500`}>
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-4 sm:p-6 border border-gray-200/50 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 truncate">
              {currentPanel.title}
            </h3>
            <button
              onClick={() => setShowFullscreen(true)}
              className="p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
            >
              <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
          
          <div className="mb-4">
            <img 
              src={currentPanel.image}
              alt={currentPanel.title}
              className={`w-full ${
                isMobile ? 'h-48' : 'h-64 lg:h-80'
              } object-cover rounded-xl border border-gray-200`}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            {currentPanel.description}
          </p>
        </div>
      </div>

      {/* Fullscreen viewer - responsive */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl max-h-full">
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white border border-gray-200 z-10 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="bg-white/95 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200 shadow-2xl max-h-full overflow-y-auto">
              <img 
                src={currentPanel.image}
                alt={currentPanel.title}
                className="w-full max-h-[70vh] object-contain"
              />
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                  {currentPanel.title}
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {currentPanel.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfessionalPharmacyWalkthrough;