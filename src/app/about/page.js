'use client';

import { useState, useEffect } from 'react';
import { Star, Users, Target, Eye, Award, Heart, ChevronDown, ChevronUp, Mail, MessageSquare, Sparkles, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';
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
    {
      name: "Naqash Khan",
      title: "Business Development Lead",
      tagline: "Turns handshakes and ideas into partnerships 🤝",
      imagePath: "/community/core/ali.jpg"
    }
  ],
  communityGroups: [
    {
      groupName: "Tech Enthusiasts",
      description: "Our coding ninjas and tech visionaries who push the boundaries of what's possible",
      icon: "💻",
      members: [
        { name: "Huzaifa Shams", imagePath: "/community/group-tech/huzaifa.jpg" },
        { name: "Awais Mughal", imagePath: "/community/group-tech/awais.jpg" },
        { name: "Zaki Jadoon", imagePath: "/community/group-tech/zaki.jpg" },
        { name: "Mussavir Ali", imagePath: "/community/group-tech/person4.jpg" },
        { name: "Muneer Ahmad", imagePath: "/community/group-tech/person5.jpg" }
      ]
    },
    {
      groupName: "Business Supporters",
      description: "Strategic minds and business leaders who help shape our market vision",
      icon: "📈",
      members: [
        { name: "Husnain Mughal", imagePath: "/community/group-business/husnain.jpeg" },
        { name: "Sardar Danial", imagePath: "/community/group-business/person2.jpg" },
        { name: "Malik Asjid", imagePath: "/community/group-business/asjid.jpg" },
        { name: "Azam Lodhi", imagePath: "/community/group-business/azam.jpg" },
        { name: "Sana Malik", imagePath: "/community/group-business/girl3.png" },
        { name: "Tariq Javed", imagePath: "/community/group-business/person6.jpg" }
      ]
    },
    {
      groupName: "Design Lovers",
      description: "Creative souls who ensure our products are not just functional, but beautiful",
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
      description: "Young innovators and future leaders spreading the word in universities",
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
      description: "Thought leaders and advisors who guide our strategic direction",
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
      <div className={`${className} rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-950 flex items-center justify-center font-bold text-blue-600 dark:text-blue-300`}>
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

// Enhanced Carousel Component with Touch/Swipe Support
const ImageCarousel = ({ items, isDesktop = false, showMemberInfo = false, imageErrors, onImageError }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [items.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
    
    setIsDragging(false);
  };

  // Mouse handlers for desktop drag
  const handleMouseDown = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd || !isDragging) {
      setIsDragging(false);
      return;
    }
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
    
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const getVisibleItems = () => {
    if (isDesktop) {
      const visibleCount = 5;
      const result = [];
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % items.length;
        result.push({ ...items[index], position: i });
      }
      return result;
    } else {
      // Mobile: center image + 2 side images
      const result = [];
      for (let i = -1; i <= 1; i++) {
        const index = (currentIndex + i + items.length) % items.length;
        result.push({ ...items[index], position: i + 1 });
      }
      return result;
    }
  };

  return (
    <div className="relative">
      {/* Swipeable Container */}
      <div 
        className={`flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {/* Items Container with proper spacing */}
        <div className={`flex items-center justify-center overflow-visible transition-transform duration-300 ${
          isDesktop ? 'space-x-4 py-8 px-4' : 'space-x-2 py-6 px-2'
        } ${isDesktop ? 'min-h-[280px]' : 'min-h-[240px]'} ${
          isDragging ? 'scale-105' : 'scale-100'
        }`}>
          {getVisibleItems().map((item, index) => {
            // Desktop layout styling
            let desktopClasses = '';
            let mobileClasses = '';
            
            if (isDesktop) {
              switch(item.position) {
                case 0: // Far left (4th image)
                  desktopClasses = 'scale-75 opacity-40 -translate-x-4 z-0';
                  break;
                case 1: // Left side
                  desktopClasses = 'scale-90 opacity-70 -translate-x-2 z-10';
                  break;
                case 2: // Center (main)
                  desktopClasses = 'scale-110 opacity-100 z-20 shadow-2xl';
                  break;
                case 3: // Right side
                  desktopClasses = 'scale-90 opacity-70 translate-x-2 z-10';
                  break;
                case 4: // Far right (5th image)
                  desktopClasses = 'scale-75 opacity-40 translate-x-4 z-0';
                  break;
              }
            } else {
              // Mobile layout styling
              switch(item.position) {
                case 0: // Left side
                  mobileClasses = 'scale-75 opacity-50 -translate-x-3 z-0';
                  break;
                case 1: // Center (main)
                  mobileClasses = 'scale-110 opacity-100 z-10 shadow-2xl';
                  break;
                case 2: // Right side
                  mobileClasses = 'scale-75 opacity-50 translate-x-3 z-0';
                  break;
              }
            }

            return (
              <div
                key={`${item.name}-${index}`}
                className={`transition-all duration-700 ease-in-out transform pointer-events-none ${
                  isDesktop ? desktopClasses : mobileClasses
                }`}
              >
                <div className="text-center group/item">
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur-sm opacity-30 group-hover/item:opacity-60 transition-opacity duration-300"></div>
                    <div className={`relative mx-auto rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 p-1 group-hover/item:scale-105 transition-all duration-300 shadow-xl group-hover/item:shadow-2xl ${
                      isDesktop 
                        ? item.position === 2 
                          ? 'w-40 h-52' // Center image bigger on desktop
                          : 'w-32 h-40' // Side images smaller
                        : item.position === 1
                          ? 'w-36 h-48' // Center image on mobile
                          : 'w-24 h-32' // Side images smaller on mobile
                    }`}>
                      <ProfileImage
                        src={item.imagePath}
                        alt={item.name}
                        name={item.name}
                        className={`w-full h-full rounded-xl ${
                          isDesktop 
                            ? item.position === 2 ? 'text-5xl' : 'text-4xl'
                            : item.position === 1 ? 'text-4xl' : 'text-2xl'
                        }`}
                        imageErrors={imageErrors}
                        onError={onImageError}
                      />
                    </div>
                    
                    <div className={`absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl shadow-lg group-hover/item:rotate-12 transition-transform duration-300 ${
                      isDesktop 
                        ? item.position === 2 ? 'p-3' : 'p-2'
                        : item.position === 1 ? 'p-2' : 'p-1'
                    }`}>
                      <Star className={`${
                        isDesktop 
                          ? item.position === 2 ? 'w-4 h-4' : 'w-3 h-3'
                          : item.position === 1 ? 'w-3 h-3' : 'w-2 h-2'
                      }`} />
                    </div>
                  </div>
                  
                  <div className={`font-semibold text-gray-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors px-2 leading-tight ${
                    isDesktop 
                      ? item.position === 2 ? 'text-lg' : 'text-sm'
                      : item.position === 1 ? 'text-base' : 'text-xs'
                  }`}>
                    {item.name}
                  </div>
                  
                  {showMemberInfo && item.title && (
                    <div className={`text-gray-600 dark:text-gray-400 mt-1 ${
                      isDesktop 
                        ? item.position === 2 ? 'text-sm' : 'text-xs'
                        : item.position === 1 ? 'text-sm' : 'text-xs'
                    }`}>
                      {item.title}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Swipe Instructions */}
      <div className="text-center mt-4 mb-2">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          👆 You can swipe left or right to browse 
        </p>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg scale-125'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const toggleGroup = (groupIndex) => {
    setExpandedGroup(expandedGroup === groupIndex ? null : groupIndex);
  };

  const handleImageError = (imagePath) => {
    setImageErrors(prev => new Set(prev).add(imagePath));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10">
      <NavigationBar />
      
      {/* Hero Section with Floating Elements */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Meet the Visionary
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Our Founder
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The mastermind behind Pakistan's digital transformation
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-blue-200/50 dark:border-blue-700/30 overflow-hidden hover:shadow-blue-500/20 hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
              
              <div className="relative p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative w-64 h-80 lg:w-72 lg:h-96 rounded-2xl bg-gradient-to-br from-blue-400 via-indigo-500 to-blue-500 p-1 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <ProfileImage
                        src={aboutData.founder.imagePath}
                        alt={aboutData.founder.name}
                        name={aboutData.founder.name}
                        className="w-full h-full text-8xl rounded-xl"
                        imageErrors={imageErrors}
                        onError={handleImageError}
                      />
                    </div>
                    
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-2xl shadow-xl group-hover:rotate-12 transition-transform duration-300">
                      <Award className="w-8 h-8" />
                    </div>
                    
                    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-2xl shadow-xl">
                      <Trophy className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                      {aboutData.founder.name}
                    </h2>
                    <div className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 px-4 py-2 rounded-full inline-block">
                      {aboutData.founder.title}
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
                      {aboutData.founder.bio}
                    </p>
                    
                    <div className="grid gap-4">
                      {aboutData.founder.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start space-x-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/30 dark:border-blue-700/30">
                          <Star className="w-5 h-5 text-blue-500 fill-current" />
                          <span className="text-gray-800 dark:text-gray-200 font-medium">
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
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50/80 to-blue-50/80 dark:from-gray-900/50 dark:to-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-blue-200/30 dark:border-blue-700/30 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 group hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{aboutData.mission.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {aboutData.mission.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {aboutData.mission.description}
              </p>
            </div>

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-indigo-200/30 dark:border-indigo-700/30 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 group hover:-translate-y-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{aboutData.vision.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {aboutData.vision.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {aboutData.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team - Enhanced Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.15),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(79,70,229,0.15),transparent)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 text-blue-200 font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              Core Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6">
              Meet Our Superstars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The incredible people who make the magic happen every single day
            </p>
          </div>

          {/* Desktop and Mobile Carousel */}
          <div className="hidden lg:block">
            <ImageCarousel 
              items={aboutData.coreTeam} 
              isDesktop={true} 
              showMemberInfo={true}
              imageErrors={imageErrors}
              onImageError={handleImageError}
            />
          </div>
          
          <div className="lg:hidden">
            <ImageCarousel 
              items={aboutData.coreTeam} 
              isDesktop={false} 
              showMemberInfo={true}
              imageErrors={imageErrors}
              onImageError={handleImageError}
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50/80 to-indigo-50/80 dark:from-gray-900/50 dark:to-indigo-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-blue-200/30 dark:border-blue-700/30 hover:border-blue-400 dark:hover:border-blue-600 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-3 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Groups - Enhanced with Carousel */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/80 via-indigo-50/50 to-purple-50/80 dark:from-gray-900 dark:via-blue-900/10 dark:to-indigo-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl border border-blue-200/50 dark:border-blue-700/50 text-blue-600 dark:text-blue-300 font-medium mb-8">
              <Heart className="w-5 h-5 mr-2" />
              Our Amazing Community
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Heart</span> of Our Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Meet the passionate individuals who make iCreative Solutions a thriving community of innovation and excellence.
            </p>
          </div>

          <div className="space-y-12">
            {aboutData.communityGroups.map((group, groupIndex) => {
              const isExpanded = expandedGroup === groupIndex;

              return (
                <div key={groupIndex} className="group">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl border border-blue-200/40 dark:border-blue-700/40 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden">
                    <div className="p-10 lg:p-12">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8 lg:mb-12">
                        <div className="flex items-center space-x-4 lg:space-x-6 mb-4 lg:mb-0">
                          <div className="text-4xl lg:text-6xl group-hover:scale-110 transition-transform duration-300">{group.icon}</div>
                          <div>
                            <h3 className="text-xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1 lg:mb-2">
                              {group.groupName}
                            </h3>
                            <p className="text-sm lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-snug lg:leading-relaxed">
                              {group.description}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500/30 to-indigo-500/30 dark:from-blue-400/30 dark:to-indigo-400/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-400/50 text-blue-700 dark:text-blue-300 px-4 lg:px-6 py-2 lg:py-3 rounded-2xl font-semibold text-base lg:text-lg shadow-lg self-start lg:self-center">
                          {group.members.length} amazing members
                        </div>
                      </div>

                      {/* Enhanced Carousel for Community Groups */}
                      {!isExpanded ? (
                        <div className="mb-8">
                          {/* Desktop Carousel */}
                          <div className="hidden lg:block">
                            <ImageCarousel 
                              items={group.members} 
                              isDesktop={true}
                              imageErrors={imageErrors}
                              onImageError={handleImageError}
                            />
                          </div>
                          
                          {/* Mobile Carousel */}
                          <div className="lg:hidden">
                            <ImageCarousel 
                              items={group.members} 
                              isDesktop={false}
                              imageErrors={imageErrors}
                              onImageError={handleImageError}
                            />
                          </div>
                          
                          <div className="flex justify-center mt-6 lg:mt-8">
                            <button
                              onClick={() => toggleGroup(groupIndex)}
                              className="group relative overflow-hidden px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold text-sm lg:text-lg rounded-xl lg:rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-1 hover:scale-105 border border-blue-400/20"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              <div className="relative flex items-center space-x-2 lg:space-x-3">
                                <span>View all {group.members.length}</span>
                                <ChevronDown className="w-4 h-4 lg:w-5 lg:h-5 transition-transform duration-300 group-hover:translate-y-1" />
                              </div>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                            {group.members.map((member, memberIndex) => (
                              <div key={memberIndex} className="text-center group/member cursor-pointer">
                                <div className="relative mb-4">
                                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl blur-sm opacity-30 group-hover/member:opacity-60 transition-opacity duration-300"></div>
                                  <div className="relative w-28 h-36 mx-auto rounded-2xl bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 p-1 group-hover/member:scale-110 transition-all duration-300 shadow-xl group-hover/member:shadow-2xl">
                                    <ProfileImage
                                      src={member.imagePath}
                                      alt={member.name}
                                      name={member.name}
                                      className="w-full h-full text-3xl rounded-xl"
                                      imageErrors={imageErrors}
                                      onError={handleImageError}
                                    />
                                  </div>
                                  
                                  <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-xl shadow-lg group-hover/member:rotate-12 transition-transform duration-300">
                                    <Star className="w-3 h-3" />
                                  </div>
                                </div>
                                <div className="font-semibold text-gray-900 dark:text-white group-hover/member:text-blue-600 dark:group-hover/member:text-blue-400 transition-colors px-2 leading-tight">
                                  {member.name}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-center mt-12">
                            <button
                              onClick={() => toggleGroup(groupIndex)}
                              className="inline-flex items-center px-8 py-4 bg-gray-100/90 dark:bg-gray-700/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold text-lg rounded-2xl hover:bg-gray-200/90 dark:hover:bg-gray-600/90 transition-all duration-300 border border-gray-200/60 dark:border-gray-600/60 shadow-lg hover:shadow-xl"
                            >
                              <span className="mr-3">Show less</span>
                              <ChevronUp className="w-6 h-6" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-500 dark:bg-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="text-6xl mb-6 animate-bounce">❤️</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're a developer, designer, business professional, or simply passionate about technology, 
            we'd love to have you as part of our growing community of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:-translate-y-1 hover:scale-105">
              <Mail className="w-6 h-6 mr-3" />
              Get in Touch
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold text-lg rounded-2xl hover:bg-blue-800 transition-all duration-300 shadow-2xl hover:shadow-blue-800/50 hover:-translate-y-1 hover:scale-105 border-2 border-blue-400">
              <MessageSquare className="w-6 h-6 mr-3" />
              Join Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}