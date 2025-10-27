'use client';

import { useState, useEffect } from 'react';
import { Star, Users, Target, Eye, Award, Heart, ChevronDown, ChevronUp, Mail, MessageSquare, Sparkles, Trophy } from 'lucide-react';
import NavigationBar from '../../components/NavigationBar';

const aboutData = {
  founder: {
    name: "Imad Khan Lodhi",
    title: "Founder & CEO, iCreative Solutions",
    bio: "Passionate about transforming Pakistani businesses through innovative POS solutions. Building the future of retail technology, one business at a time.",
    imagePath: "/community/founder.png",
    achievements: [
      "100+ Businesses Digitally Transformed",
      "Leading Pakistan's POS Revolution",
      "Tech Entrepreneur & Innovator"
    ]
  },
  coreTeam: [
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
    },
  ],
  communityGroups: [
    {
      groupName: "Tech Enthusiasts",
      icon: "💻",
      members: [
        { name: "Huzaifa Shams", imagePath: "/community/group-tech/huzaifa.jpg" },
        { name: "Awais Mughal", imagePath: "/community/group-tech/awais.jpg" },
        { name: "Zaki Jadoon", imagePath: "/community/group-tech/zaki.jpg" },
        { name: "Musawar Ali", imagePath: "/community/group-tech/musawar.jpeg" },
        { name: "Muneer Ahmad", imagePath: "/community/group-tech/person5.jpg" }
      ]
    },
    {
      groupName: "Business Supporters",
      icon: "📈",
      members: [
        { name: "Husnain Mughal", imagePath: "/community/group-business/husnain.jpeg" },
        { name: "Sardar Danial", imagePath: "/community/group-business/dani.jpeg" },
        { name: "Malik Asjid", imagePath: "/community/group-business/asjid.jpg" },
        { name: "Azam Lodhi", imagePath: "/community/group-business/azam.jpg" },
        { name: "Sana Malik", imagePath: "/community/group-business/girl3.png" },
        { name: "Naqash Khan", imagePath: "/community/group-business/naqash.jpeg" }
      ]
    },
    {
      groupName: "Design Lovers",
      icon: "🎨",
      members: [
        { name: "Mairaj Khan", imagePath: "/community/group-design/mairaj.jpg" },
        { name: "Maryam Noor", imagePath: "/community/group-design/girl3.png" },
        { name: "Hina Afridi", imagePath: "/community/group-design/person3.jpg" },
        { name: "Zain Baloch", imagePath: "/community/group-design/zain.jpg" },
        { name: "Amna Saleem", imagePath: "/community/group-design/girl3.png" },
        { name: "Waseem Abbas", imagePath: "/community/group-design/person6.jpg" }
      ]
    },
    {
      groupName: "Student Ambassadors",
      icon: "🎓",
      members: [
        { name: "Moiz Awan", imagePath: "/community/group-students/moiz.jpeg" },
        { name: "Zohaib Ali", imagePath: "/community/group-students/person2.jpg" },
        { name: "Shahzaib Ali", imagePath: "/community/group-students/person3.jpg" },
        { name: "Mahnoor Khan", imagePath: "/community/group-students/girl3.png" },
        { name: "Osama Bin Tariq", imagePath: "/community/group-students/person5.jpg" },
        { name: "Zara Akram", imagePath: "/community/group-students/person6.jpg" }
      ]
    },
    {
      groupName: "Innovation Partners",
      icon: "🚀",
      members: [
        { name: "Ahtesham Awan", imagePath: "/community/group-innovation/aht.jpg" },
        { name: "Zulfiqar Khan", imagePath: "/community/group-innovation/zulfiqar.png" },
        { name: "Dr. Imran Malik", imagePath: "/community/group-innovation/person3.jpg" },
        { name: "Shazia Parveen", imagePath: "/community/group-innovation/girl3.png" },
        { name: "Muhammad Azeem", imagePath: "/community/group-innovation/person5.jpg" }
      ]
    }
  ],
  stats: [
    { 
      value: "100+", 
      label: "Businesses Served",
      description: "Pakistani businesses trust our solutions"
    },
    { 
      value: "99.9%", 
      label: "Uptime Guarantee",
      description: "Always-on reliability for your business"
    },
    { 
      value: "24/7", 
      label: "Local Support",
      description: "Dedicated Pakistani support team"
    },
    { 
      value: "50+", 
      label: "Team Members",
      description: "Passionate individuals driving innovation"
    }
  ],
  mission: {
    title: "Our Mission",
    description: "To empower every Pakistani business with intelligent technology that drives growth, efficiency, and success in the digital age.",
    icon: "🎯"
  },
  vision: {
    title: "Our Vision",
    description: "To be Pakistan's leading provider of innovative business solutions, making advanced technology accessible to businesses of all sizes.",
    icon: "👁️"
  }
};

// Profile Image Component
const ProfileImage = ({ src, alt, name, className = "w-full h-full", imageErrors, onError }) => {
  if (imageErrors && imageErrors.has(src)) {
    return (
      <div className={`${className} rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white text-4xl`}>
        {name.charAt(0)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} rounded-xl object-cover`}
      onError={() => onError && onError(src)}
      loading="lazy"
    />
  );
};

// Rotating Single Image Component for Individual Groups
const RotatingSingleImage = ({ members, imageErrors, onImageError }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('opacity-100');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('opacity-0');
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
        setFadeClass('opacity-100');
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [members.length]);

  const currentMember = members[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`transition-opacity duration-300 ${fadeClass}`}>
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <div className="relative w-32 h-40 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 p-1 shadow-xl">
            <ProfileImage
              src={currentMember.imagePath}
              alt={currentMember.name}
              name={currentMember.name}
              className="w-full h-full text-3xl rounded-xl"
              imageErrors={imageErrors}
              onError={onImageError}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-xl shadow-lg">
            <Star className="w-3 h-3" />
          </div>
        </div>
        <div className="text-center mt-3">
          <div className="font-semibold text-sm text-gray-900 dark:text-white">
            {currentMember.name}
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-4 space-x-1.5">
        {members.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 w-6'
                : 'bg-gray-300 dark:bg-gray-600 w-1.5'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const [expandedCommunity, setExpandedCommunity] = useState(false);
  const [imageErrors, setImageErrors] = useState(new Set());

  const handleImageError = (imagePath) => {
    setImageErrors(prev => new Set(prev).add(imagePath));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <NavigationBar />
      
      {/* Hero Section - Founder */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Meet the Visionary
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Founder
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The mastermind behind Pakistan's digital transformation
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="relative group flex-shrink-0">
                  <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 p-1 shadow-lg">
                    <ProfileImage
                      src={aboutData.founder.imagePath}
                      alt={aboutData.founder.name}
                      name={aboutData.founder.name}
                      className="w-full h-full text-6xl"
                      imageErrors={imageErrors}
                      onError={handleImageError}
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-xl shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    {aboutData.founder.name}
                  </h2>
                  <div className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4 inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full">
                    {aboutData.founder.title}
                  </div>
                  <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {aboutData.founder.bio}
                  </p>
                  
                  <div className="space-y-3">
                    {aboutData.founder.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center justify-center lg:justify-start space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <Star className="w-5 h-5 text-blue-500 fill-current flex-shrink-0" />
                        <span className="text-sm text-gray-800 dark:text-gray-200 font-medium">
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

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-100 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-4xl">{aboutData.mission.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {aboutData.mission.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {aboutData.mission.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-indigo-100 dark:border-indigo-800">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-4xl">{aboutData.vision.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {aboutData.vision.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {aboutData.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white font-medium mb-6">
              <Users className="w-4 h-4 mr-2" />
              Core Team
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              The incredible people who make the magic happen
            </p>
          </div>

          <RotatingSingleImage 
            members={aboutData.coreTeam} 
            imageErrors={imageErrors}
            onImageError={handleImageError}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Groups - Single Box with Sub-boxes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Community
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              The Heart of Our Success
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Meet the passionate individuals who make our community thrive
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-8 lg:p-12">
              {!expandedCommunity ? (
                <>
                  {/* Desktop: 5 columns in one row */}
                  <div className="hidden lg:grid lg:grid-cols-5 gap-6 mb-8">
                    {aboutData.communityGroups.map((group, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                        <div className="text-center mb-4">
                          <div className="text-4xl mb-3">{group.icon}</div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                            {group.groupName}
                          </h3>
                        </div>
                        <RotatingSingleImage 
                          members={group.members}
                          imageErrors={imageErrors}
                          onImageError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Mobile: 1 column per row */}
                  <div className="lg:hidden space-y-6 mb-8">
                    {aboutData.communityGroups.map((group, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800">
                        <div className="text-center mb-4">
                          <div className="text-4xl mb-3">{group.icon}</div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                            {group.groupName}
                          </h3>
                        </div>
                        <RotatingSingleImage 
                          members={group.members}
                          imageErrors={imageErrors}
                          onImageError={handleImageError}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setExpandedCommunity(true)}
                      className="flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span>View All Members</span>
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-12 mb-8">
                    {aboutData.communityGroups.map((group, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-center space-x-3 mb-6">
                          <div className="text-4xl">{group.icon}</div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {group.groupName}
                          </h3>
                          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                            {group.members.length}
                          </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                          {group.members.map((member, memberIndex) => (
                            <div key={memberIndex} className="text-center">
                              <div className="relative mb-3">
                                <div className="w-28 h-36 mx-auto rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 p-1 shadow-md">
                                  <ProfileImage
                                    src={member.imagePath}
                                    alt={member.name}
                                    name={member.name}
                                    className="w-full h-full text-3xl"
                                    imageErrors={imageErrors}
                                    onError={handleImageError}
                                  />
                                </div>
                                <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-1.5 rounded-lg shadow">
                                  <Star className="w-3 h-3" />
                                </div>
                              </div>
                              <div className="font-semibold text-sm text-gray-900 dark:text-white">
                                {member.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setExpandedCommunity(false)}
                      className="flex items-center space-x-2 px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                    >
                      <span>Show Less</span>
                      <ChevronUp className="w-5 h-5" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-6">❤️</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Join Our Family?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, designer, or business professional, we'd love to have you as part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 border-2 border-blue-400">
              <MessageSquare className="w-5 h-5 mr-2" />
              Join Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}