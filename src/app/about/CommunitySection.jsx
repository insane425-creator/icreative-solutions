import { Heart, Star } from 'lucide-react';
import ProfileImage from './ProfileImage';

const communityMember = {
  name: "Huzaifa Shams",
  title: "Tech Enthusiast",
  tagline: "Dedicated to pushing boundaries and exploring new technologies with the community 💻",
  imagePath: "/community/group-tech/huzaifa.jpg"
};

export default function CommunitySection({ imageErrors, onImageError }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Heart of Our Success
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the dedicated enthusiast shaping our vibrant tech ecosystem
          </p>
        </div>

        {/* Single Member Layout */}
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
          {/* Image Frame with Professional Glow Animation (Exactly like Core) */}
          <div className="relative group w-full max-w-[320px]">
            {/* Glowing Background that expands on hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-3xl opacity-30 dark:opacity-40 blur-md group-hover:opacity-60 dark:group-hover:opacity-100 group-hover:blur-xl transition-all duration-700"></div>
            
            <div className="relative h-[400px] rounded-3xl bg-white dark:bg-gray-900 p-1 shadow-xl">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <ProfileImage
                  src={communityMember.imagePath}
                  alt={communityMember.name}
                  name={communityMember.name}
                  className="w-full h-full text-5xl object-cover transition-transform duration-700 group-hover:scale-110"
                  imageErrors={imageErrors}
                  onError={onImageError}
                />
              </div>
              {/* Floating Star Badge */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 group-hover:-translate-y-2 transition-transform duration-500">
                <Star className="w-6 h-6 text-pink-500 fill-current" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center mt-12 space-y-4">
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white tracking-wide">
              {communityMember.name}
            </h4>
            <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
              {communityMember.title}
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic text-lg mx-auto">
              "{communityMember.tagline}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}