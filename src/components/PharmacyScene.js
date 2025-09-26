//src/components/PharmacyScene.js

'use client';

import React, { useRef, useState, useEffect, useMemo, Suspense, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { animated, useSpring } from '@react-spring/three';
import * as THREE from 'three';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

// Screenshot panel data
const screenshotPanels = [
  { 
    id: 'dashboard', 
    title: 'Analytics Dashboard',
    image: '/pharmassist/images/dashboard.jpg',
    position: [0, 2, -5],
    description: 'Real-time analytics and business insights for your pharmacy operations.'
  },
  { 
    id: 'inventory', 
    title: 'Inventory Management',
    image: '/pharmassist/images/inventory.jpg',
    position: [0, 2, -5],
    description: 'Complete stock management with automated reordering and expiry tracking.'
  },
  { 
    id: 'pos', 
    title: 'Point of Sale',
    image: '/pharmassist/images/pos.jpg',
    position: [0, 2, -5],
    description: 'Fast and efficient billing system with prescription management.'
  },
  { 
    id: 'poslayout2', 
    title: 'POS Layout',
    image: '/pharmassist/images/poslayout2.jpg',
    position: [0, 2, -5],
    description: 'Customizable point-of-sale interface designed for pharmacy workflows.'
  },
  { 
    id: 'purchase', 
    title: 'Purchase Management',
    image: '/pharmassist/images/purchase.jpg',
    position: [0, 2, -5],
    description: 'Streamlined procurement process with supplier management and cost tracking.'
  },
  { 
    id: 'settings', 
    title: 'System Settings',
    image: '/pharmassist/images/settings.jpg',
    position: [0, 2, -5],
    description: 'Comprehensive configuration options to customize your pharmacy system.'
  }
];

// Pure white elegant pillar component
const Pillar = React.memo(({ position }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle glow effect
      meshRef.current.material.emissiveIntensity = 0.2 + Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.5, 0.5, 8, 16]} />
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#ffffff"
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
});

// Radiant white portal background
const RadiantPortal = React.memo(() => {
  const portalRef = useRef();
  const raysRef = useRef();

  useFrame((state) => {
    if (portalRef.current) {
      portalRef.current.rotation.z += 0.003;
    }
    if (raysRef.current) {
      raysRef.current.rotation.z -= 0.002;
    }
  });

  return (
    <group position={[0, 2, -40]}>
      {/* Main portal glow */}
      <mesh ref={portalRef}>
        <ringGeometry args={[10, 20, 64]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Outer portal ring */}
      <mesh>
        <ringGeometry args={[15, 25, 64]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Light rays */}
      <group ref={raysRef}>
        {Array.from({ length: 16 }).map((_, i) => (
          <mesh
            key={i}
            rotation={[0, 0, (i * Math.PI * 2) / 16]}
            position={[0, 0, 0]}
          >
            <planeGeometry args={[0.5, 35]} />
            <meshBasicMaterial 
              color="#ffffff"
              transparent
              opacity={0.3}
            />
          </mesh>
        ))}
      </group>

      {/* Central bright light */}
      <mesh>
        <circleGeometry args={[8, 32]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
});

// Floating white particles
const FloatingParticle = React.memo(({ initialPosition }) => {
  const meshRef = useRef();
  const [resetPosition] = useState(initialPosition);

  useFrame((state) => {
    if (meshRef.current) {
      // Move toward portal
      meshRef.current.position.z += 0.03;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5 + resetPosition[0]) * 0.008;
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 1.2 + resetPosition[1]) * 0.008;
      
      // Reset when reaches portal
      if (meshRef.current.position.z > -5) {
        meshRef.current.position.set(...resetPosition);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={initialPosition}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial 
        color="#ffffff"
        transparent
        opacity={0.8}
      />
    </mesh>
  );
});

// 3D Preview panel positioned far away in front of pillars
const PreviewPanel = React.memo(({ panel, isVisible, onClick, position }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [textureError, setTextureError] = useState(false);

  // Load texture
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
    scale: isVisible ? (hovered ? 1.1 : 1) : 0,
    opacity: isVisible ? 0.7 : 0,
    config: { tension: 200, friction: 25 }
  });

  useFrame((state) => {
    if (meshRef.current && isVisible) {
      // Gentle floating
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.03;
      // Always face camera
      meshRef.current.lookAt(state.camera.position);
    }
  });

  if (!isVisible) return null;

  return (
    <group position={position}>
      {/* Soft glow effect */}
      <animated.mesh
        scale={scale.to(s => s * 1.05)}
        position={[0, 0, -0.02]}
      >
        <planeGeometry args={[3.2, 2.2]} />
        <meshBasicMaterial 
          color="#ffffff" 
          transparent 
          opacity={0.2}
        />
      </animated.mesh>

      {/* Preview panel */}
      <animated.mesh
        ref={meshRef}
        scale={scale}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[3, 2]} />
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

      {/* "Next" label above panel */}
      <Text
        position={[0, 1.3, 0]}
        fontSize={0.15}
        color="#666666"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        Next
      </Text>

      {/* Title below panel */}
      <Text
        position={[0, -1.3, 0]}
        fontSize={0.12}
        color="#888888"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
      >
        {panel.title}
      </Text>
    </group>
  );
});

// Enhanced white environment
const HeavenlyEnvironment = React.memo(() => {
  return (
    <group>
      {/* Radiant portal in background */}
      <RadiantPortal />

      {/* Pure white background planes for depth */}
      <mesh position={[0, 2, -50]}>
        <planeGeometry args={[150, 100]} />
        <meshBasicMaterial 
          color="#ffffff"
          transparent
          opacity={0.8}
        />
      </mesh>

      <mesh position={[0, 2, -45]}>
        <planeGeometry args={[120, 80]} />
        <meshBasicMaterial 
          color="#f8f9fa"
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* White marble-like pillars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <React.Fragment key={i}>
          <Pillar position={[-8, 0, -2 - i * 3]} />
          <Pillar position={[8, 0, -2 - i * 3]} />
        </React.Fragment>
      ))}

      {/* Floating white particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <FloatingParticle
          key={i}
          initialPosition={[
            (Math.random() - 0.5) * 30,
            Math.random() * 12 + 1,
            -Math.random() * 35 - 10
          ]}
        />
      ))}

      {/* Additional ambient light particles */}
      {Array.from({ length: 80 }).map((_, i) => (
        <mesh
          key={`ambient-${i}`}
          position={[
            (Math.random() - 0.5) * 50,
            Math.random() * 18,
            -Math.random() * 60 - 5
          ]}
        >
          <sphereGeometry args={[0.05, 6, 6]} />
          <meshBasicMaterial 
            color="#ffffff"
            transparent 
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
});

// Camera controller - moves forward with each step
const CameraController = React.memo(({ currentStep, onComplete }) => {
  const { camera } = useThree();
  
  const { position } = useSpring({
    position: [0, 3, 2 - (currentStep * 3)], // Move forward 3 units each step
    config: { tension: 80, friction: 60 },
    onRest: onComplete
  });

  useFrame(() => {
    const pos = position.get();
    camera.position.set(pos[0], pos[1], pos[2]);
    camera.lookAt(0, 2, pos[2] - 8); // Look ahead
  });

  return null;
});

// Main component
function HeavenlyPharmacyWalkthrough() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [showFullscreen, setShowFullscreen] = useState(false);

  const goNext = useCallback(() => {
    if (currentStep < screenshotPanels.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentStep(prev => prev + 1);
      setSelectedPanel(null);
      // Reset animation state
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentStep, screenshotPanels.length, isAnimating]);

  const goPrevious = useCallback(() => {
    if (currentStep > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentStep(prev => prev - 1);
      setSelectedPanel(null);
      // Reset animation state
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isAnimating]);

  const handlePanelClick = useCallback(() => {
    // No panel click needed since image is always in corner
    return;
  }, []);

  // Get current panel and determine if it should be on left or right
  const currentPanel = screenshotPanels[currentStep];
  const isRightSide = currentStep % 2 === 0; // Even steps = right, odd steps = left

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
          if (showFullscreen) {
            setShowFullscreen(false);
          }
          break;
        case 'f':
        case 'F':
          setShowFullscreen(true);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [goNext, goPrevious, showFullscreen]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200">
      {/* Pure white radial gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.9) 0%, rgba(248, 249, 250, 0.8) 50%, rgba(229, 231, 235, 0.9) 100%)'
        }}
      />
      
      <Canvas
        camera={{ position: [0, 3, 2], fov: 75 }}
        gl={{ 
          antialias: true,
          powerPreference: "high-performance"
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#ffffff', 1);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
      >
        <CameraController 
          currentStep={currentStep}
          onComplete={() => setIsAnimating(false)} 
        />
        
        {/* Bright white lighting setup */}
        <ambientLight intensity={1.2} color="#ffffff" />
        <directionalLight
          position={[0, 15, -30]}
          intensity={2}
          color="#ffffff"
        />
        <pointLight
          position={[0, 10, -15]}
          intensity={1.5}
          distance={80}
          color="#ffffff"
        />
        <pointLight
          position={[-10, 8, 0]}
          intensity={1}
          distance={40}
          color="#ffffff"
        />
        <pointLight
          position={[10, 8, 0]}
          intensity={1}
          distance={40}
          color="#ffffff"
        />

        {/* Heavenly white environment */}
        <HeavenlyEnvironment />

        {/* 3D Preview panel positioned far away */}
        <Suspense fallback={null}>
          {currentStep < screenshotPanels.length - 1 && (
            <PreviewPanel
              panel={screenshotPanels[currentStep + 1]}
              isVisible={true}
              onClick={goNext}
              position={[
                isRightSide ? -4 : 4, // Opposite side from current camera view
                2.5, 
                2 - (currentStep * 3) - 12 // Far ahead of camera, in front of pillars
              ]}
            />
          )}
        </Suspense>

        {/* Welcome text */}
        <Text
          position={[0, 6, 0]}
          fontSize={0.8}
          color="#333333"
          anchorX="center"
          anchorY="middle"
          maxWidth={12}
        >
          PharmAssist - Journey to Excellence
        </Text>
      </Canvas>

      {/* Clean white navigation UI */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex items-center space-x-6 bg-white/90 backdrop-blur-lg rounded-full px-8 py-4 border border-gray-200 shadow-xl">
          <button
            onClick={goPrevious}
            disabled={currentStep === 0 || isAnimating}
            className={`p-4 rounded-full transition-all duration-300 ${
              currentStep === 0 || isAnimating
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Progress dots */}
          <div className="flex space-x-3">
            {screenshotPanels.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-150 shadow-lg shadow-blue-500/50'
                    : index < currentStep
                    ? 'bg-blue-300 scale-110 shadow-sm shadow-blue-300/30'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={currentStep === screenshotPanels.length - 1 || isAnimating}
            className={`p-4 rounded-full transition-all duration-300 ${
              currentStep === screenshotPanels.length - 1 || isAnimating
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
            Image {currentStep + 1} of {screenshotPanels.length} • Use ← → keys or click image
          </p>
        </div>
      </div>

      {/* Always show current image in alternating corners - BIGGER SIZE */}
      <div className={`absolute top-4 max-w-2xl z-10 transition-all duration-500 ${
        isRightSide ? 'right-4' : 'left-4'
      }`}>
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-800">
              {currentPanel.title}
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowFullscreen(true)}
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="mb-4">
            <img 
              src={currentPanel.image}
              alt={currentPanel.title}
              className="w-full h-80 object-cover rounded-xl border border-gray-200"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <p className="text-gray-700 leading-relaxed text-sm">
            {currentPanel.description}
          </p>
        </div>
      </div>

      {/* Fullscreen viewer */}
      {showFullscreen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-md z-50 flex items-center justify-center p-8">
          <div className="relative max-w-7xl w-full">
            <button
              onClick={() => setShowFullscreen(false)}
              className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-white border border-gray-200 z-10 shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="bg-white/95 backdrop-blur-lg rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
              <img 
                src={currentPanel.image}
                alt={currentPanel.title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">
                  {currentPanel.title}
                </h2>
                <p className="text-gray-700 text-lg">
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

export default HeavenlyPharmacyWalkthrough;