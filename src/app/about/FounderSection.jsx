import { Award, Star, Sparkles } from 'lucide-react';
import ProfileImage from './ProfileImage';

const founderData = {
  name: "Imad Khan Lodhi",
  title: "Founder & CEO, iCreative Solutions",
  bio: "Passionate about transforming Pakistani businesses through innovative POS solutions. Building the future of retail technology, one business at a time.",
  imagePath: "/community/founder.jpg",
  achievements: [
    "100+ Businesses Digitally Transformed",
    "Leading Pakistan's POS Revolution",
    "Tech Entrepreneur & Innovator"
  ]
};

export default function FounderSection({ imageErrors, onImageError }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 text-gray-900 dark:text-white font-medium mb-6 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
            Leadership
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The visionary leading Pakistan's digital transformation
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[360px]">
              {/* Glowing Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl opacity-30 dark:opacity-40 blur-md group-hover:opacity-60 dark:group-hover:opacity-100 group-hover:blur-xl transition-all duration-700"></div>
              
              <div className="relative h-[450px] rounded-3xl bg-white dark:bg-gray-900 p-1 shadow-2xl">
                <div className="w-full h-full rounded-[22px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <ProfileImage
                    src={founderData.imagePath}
                    alt={founderData.name}
                    name={founderData.name}
                    className="w-full h-full text-6xl object-cover transition-transform duration-700 group-hover:scale-110"
                    imageErrors={imageErrors}
                    onError={onImageError}
                    priority={true}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 group-hover:-translate-y-2 transition-transform duration-500">
                  <Award className="w-8 h-8 text-cyan-500 dark:text-cyan-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              {founderData.name}
            </h3>
            <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold text-lg">
              {founderData.title}
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {founderData.bio}
            </p>

            {/* Achievements */}
            <div className="space-y-4 mt-8 pt-4">
              {founderData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center lg:justify-start space-x-4 p-5 bg-white/60 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <Star className="w-6 h-6 text-yellow-500 fill-current flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg text-gray-800 dark:text-gray-200 font-medium">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}