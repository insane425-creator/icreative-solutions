import { Award, Star, Sparkles } from 'lucide-react';
import ProfileImage from './ProfileImage';

const founderData = {
  name: "Imad Khan Lodhi",
  title: "Founder & CEO, iCreative Solutions",
  bio: "Passionate about transforming Pakistani businesses through innovative POS solutions. Building the future of retail technology, one business at a time.",
  imagePath: "/community/founder.png",
  achievements: [
    "100+ Businesses Digitally Transformed",
    "Leading Pakistan's POS Revolution",
    "Tech Entrepreneur & Innovator"
  ]
};

export default function FounderSection({ imageErrors, onImageError }) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Leadership
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Founder
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The visionary leading Pakistan's digital transformation
          </p>
        </div>
        
        {/* Founder Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Profile Image - Priority loading (above fold) */}
              <div className="relative group flex-shrink-0">
                <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-900 p-0.5 shadow-xl">
                  <ProfileImage
                    src={founderData.imagePath}
                    alt={founderData.name}
                    name={founderData.name}
                    className="w-full h-full text-6xl rounded-2xl"
                    imageErrors={imageErrors}
                    onError={onImageError}
                    priority={true} // Load immediately
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-4 rounded-xl shadow-lg">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {founderData.name}
                </h3>
                <div className="inline-block text-base text-gray-600 dark:text-gray-400 font-medium mb-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                  {founderData.title}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  {founderData.bio}
                </p>
                
                {/* Achievements */}
                <div className="space-y-3">
                  {founderData.achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-center lg:justify-start space-x-3 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-700"
                    >
                      <Star className="w-5 h-5 text-gray-900 dark:text-white fill-current flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}