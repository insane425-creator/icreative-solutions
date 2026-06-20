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
    imagePath: "/community/core/Saad.jpeg"
  }
];

const extendedMember = {
  name: "Huzaifa Shams",
  title: "Tech Enthusiast",
  tagline: "Dedicated to pushing boundaries and exploring new technologies 💻",
  imagePath: "/community/group-tech/huzaifa.jpg"
};

export default function CoreTeamSection({ imageErrors, onImageError }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Professional background glowing orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 dark:bg-white/10 text-gray-900 dark:text-white font-medium mb-6 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
            <Users className="w-4 h-4 mr-2 text-blue-500" />
            Core Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            The incredible people who make the magic happen. Our leadership team brings decades of combined experience in technology, design, and customer success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto mb-32">
          {coreTeamData.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Image Frame with Professional Glow Animation */}
              <div className="relative group w-full max-w-[320px]">
                {/* Glowing Background that expands on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-3xl opacity-30 dark:opacity-40 blur-md group-hover:opacity-60 dark:group-hover:opacity-100 group-hover:blur-xl transition-all duration-700"></div>
                
                <div className="relative h-[400px] rounded-3xl bg-white dark:bg-gray-900 p-1 shadow-xl">
                  <div className="w-full h-full rounded-[22px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <ProfileImage
                      src={member.imagePath}
                      alt={member.name}
                      name={member.name}
                      className="w-full h-full text-5xl object-cover transition-transform duration-700 group-hover:scale-110"
                      imageErrors={imageErrors}
                      onError={onImageError}
                    />
                  </div>
                  {/* Floating Star Badge */}
                  <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 group-hover:-translate-y-2 transition-transform duration-500">
                    <Star className="w-6 h-6 text-cyan-500 dark:text-cyan-400 fill-current" />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center mt-12 space-y-4">
                <h4 className="text-3xl font-bold text-gray-900 dark:text-white tracking-wide">
                  {member.name}
                </h4>
                <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                  {member.title}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic text-lg max-w-sm mx-auto">
                  "{member.tagline}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Member Section (The Heart of Our Success) */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Heart of Our Success
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated enthusiast shaping our vibrant tech ecosystem
          </p>
        </div>

        <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
          {/* Image Frame with Professional Glow Animation */}
          <div className="relative group w-full max-w-[320px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 rounded-3xl opacity-30 dark:opacity-40 blur-md group-hover:opacity-60 dark:group-hover:opacity-100 group-hover:blur-xl transition-all duration-700"></div>
            
            <div className="relative h-[400px] rounded-3xl bg-white dark:bg-gray-900 p-1 shadow-xl">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                <ProfileImage
                  src={extendedMember.imagePath}
                  alt={extendedMember.name}
                  name={extendedMember.name}
                  className="w-full h-full text-5xl object-cover transition-transform duration-700 group-hover:scale-110"
                  imageErrors={imageErrors}
                  onError={onImageError}
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 group-hover:-translate-y-2 transition-transform duration-500">
                <Star className="w-6 h-6 text-pink-500 fill-current" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center mt-12 space-y-4">
            <h4 className="text-3xl font-bold text-gray-900 dark:text-white tracking-wide">
              {extendedMember.name}
            </h4>
            <div className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
              {extendedMember.title}
            </div>
            <p className="text-gray-600 dark:text-gray-400 italic text-lg max-w-sm mx-auto">
              "{extendedMember.tagline}"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}