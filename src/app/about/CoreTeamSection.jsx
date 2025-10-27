import { useState, useEffect } from 'react';
import { Users, Star } from 'lucide-react';
import ProfileImage from './ProfileImage';

const coreTeamData = [
  {
    name: "Noman Mujeeb",
    title: "Chief Technology Officer",
    tagline: "Code wizard who turns coffee into scalable solutions ☕️",
    imagePath: "/community/core/noman.jpg"
  },
  {
    name: "Saad Ali",
    title: "Customer Success Manager",
    tagline: "Customer happiness engineer and problem-solving ninja ⚡",
    imagePath: "/community/core/saad.jpg"
  },
  {
    name: "Sarah Khan",
    title: "Head of Design",
    tagline: "Makes interfaces so beautiful, even bugs look elegant ✨",
    imagePath: "/community/core/girl.png"
  }
];

function RotatingTeamMember({ members, imageErrors, onImageError }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('opacity-0');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
        setFadeClass('opacity-100');
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [members.length]);

  const currentMember = members[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`transition-opacity duration-300 ${fadeClass}`}>
        <div className="relative group">
          <div className="w-72 h-80 lg:w-80 lg:h-96 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-900 p-0.5 shadow-xl">
            <ProfileImage
              src={currentMember.imagePath}
              alt={currentMember.name}
              name={currentMember.name}
              className="w-full h-full text-5xl rounded-2xl"
              imageErrors={imageErrors}
              onError={onImageError}
            />
          </div>
          <div className="absolute -bottom-3 -right-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-3 rounded-xl shadow-lg">
            <Star className="w-5 h-5" />
          </div>
        </div>
        <div className="text-center mt-6 space-y-2">
          <h4 className="text-xl font-bold text-cyan-400 dark:text-white">
            {currentMember.name}
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            {currentMember.title}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 italic">
            {currentMember.tagline}
          </p>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {members.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-gray-900 dark:bg-white w-8'
                : 'bg-gray-300 dark:bg-gray-600 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CoreTeamSection({ imageErrors, onImageError }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <RotatingTeamMember 
              members={coreTeamData} 
              imageErrors={imageErrors}
              onImageError={onImageError}
            />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Core Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              The incredible people who make the magic happen. Our leadership team brings decades of combined experience in technology, design, and customer success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}