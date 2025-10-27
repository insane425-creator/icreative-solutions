'use client';

import { useState, lazy, Suspense } from 'react';
import NavigationBar from '../../components/NavigationBar';
import FounderSection from './FounderSection';

// Lazy load all sections
// const FounderSection = lazy(() => import('./FounderSection'));
const CoreTeamSection = lazy(() => import('./CoreTeamSection'));
const MissionVisionSection = lazy(() => import('./MissionVisionSection'));
const StatsSection = lazy(() => import('./StatsSection'));
const CommunitySection = lazy(() => import('./CommunitySection'));
const CTASection = lazy(() => import('./CTASection'));

// Loading skeleton component
function SectionSkeleton({ height = "h-96" }) {
  return (
    <div className={`${height} px-4 sm:px-6 lg:px-8 py-20`}>
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-2/3 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const [imageErrors, setImageErrors] = useState(new Set());

  const handleImageError = (imagePath) => {
    setImageErrors(prev => new Set(prev).add(imagePath));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavigationBar />
      
      {/* Hero Spacer */}
      <div className="pt-20"></div>

      {/* Founder Section - Load immediately (above fold) */}
      <Suspense fallback={<SectionSkeleton />}>
        <FounderSection 
          imageErrors={imageErrors}
          onImageError={handleImageError}
        />
      </Suspense>

      {/* Mission & Vision - Lazy load */}
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <MissionVisionSection />
      </Suspense>

      {/* Core Team - Lazy load */}
      <Suspense fallback={<SectionSkeleton />}>
        <CoreTeamSection 
          imageErrors={imageErrors}
          onImageError={handleImageError}
        />
      </Suspense>

      {/* Stats - Lazy load */}
      <Suspense fallback={<SectionSkeleton height="h-48" />}>
        <StatsSection />
      </Suspense>

      {/* Community - Lazy load */}
      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <CommunitySection 
          imageErrors={imageErrors}
          onImageError={handleImageError}
        />
      </Suspense>

      {/* Call to Action - Lazy load */}
      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <CTASection />
      </Suspense>
    </div>
  );
}