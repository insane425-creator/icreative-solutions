'use client';

import { useState } from 'react';
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
      imagePath: "/community/core/girl.jpg"
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
        { name: "Husnain Mughal", imagePath: "/community/group-business/person1.jpg" },
        { name: "Sardar Danial", imagePath: "/community/group-business/person2.jpg" },
        { name: "Malik Asjid", imagePath: "/community/group-business/asjid.jpg" },
        { name: "Azam Lodhi", imagePath: "/community/group-business/azam.jpg" },
        { name: "Sana Malik", imagePath: "/community/group-business/person5.jpg" },
        { name: "Tariq Javed", imagePath: "/community/group-business/person6.jpg" }
      ]
    },
    {
      groupName: "Design Lovers",
      description: "Creative souls who ensure our products are not just functional, but beautiful",
      icon: "🎨",
      members: [
        { name: "Mairaj Khan", imagePath: "/community/group-design/mairaj.jpg" },
        { name: "Maryam Noor", imagePath: "/community/group-design/person2.jpg" },
        { name: "Hina Afridi", imagePath: "/community/group-design/person3.jpg" },
        { name: "Zain Baloch", imagePath: "/community/group-design/zain.jpg" },
        { name: "Amna Saleem", imagePath: "/community/group-design/person5.jpg" },
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
        { name: "Mahnoor Khan", imagePath: "/community/group-students/person4.jpg" },
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
        { name: "Shazia Parveen", imagePath: "/community/group-innovation/person4.jpg" },
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

export default function About() {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const toggleGroup = (groupIndex) => {
    setExpandedGroup(expandedGroup === groupIndex ? null : groupIndex);
  };

  const getPreviewCount = (memberCount) => {
    return memberCount > 6 ? 6 : memberCount;
  };

  const handleImageError = (imagePath) => {
    setImageErrors(prev => new Set(prev).add(imagePath));
  };

  const ProfileImage = ({ src, alt, name, className = "w-full h-full" }) => {
    if (imageErrors.has(src)) {
      return (
        <div className={`${className} rounded-xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-neutral-900 dark:to-neutral-950 flex items-center justify-center font-bold text-orange-600 dark:text-orange-300`}>
          {name.charAt(0)}
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className={`${className} rounded-xl object-cover`}
        onError={() => handleImageError(src)}
        loading="lazy"
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/10 dark:to-red-900/10">
      <NavigationBar />
      
      {/* Hero Section with Floating Elements */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-red-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-600 dark:text-orange-300 text-sm font-medium mb-6 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Meet the Visionary
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
              Our Founder
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The mastermind behind Pakistan's digital transformation
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-200/50 dark:border-orange-700/30 overflow-hidden hover:shadow-orange-500/20 hover:shadow-3xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5"></div>
              
              <div className="relative p-10 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative w-64 h-80 lg:w-72 lg:h-96 rounded-2xl bg-gradient-to-br from-orange-400 via-red-500 to-orange-500 p-1 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <ProfileImage
                        src={aboutData.founder.imagePath}
                        alt={aboutData.founder.name}
                        name={aboutData.founder.name}
                        className="w-full h-full text-8xl rounded-xl"
                      />
                    </div>
                    
                    <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-2xl shadow-xl group-hover:rotate-12 transition-transform duration-300">
                      <Award className="w-8 h-8" />
                    </div>
                    
                    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-2xl shadow-xl">
                      <Trophy className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                      {aboutData.founder.name}
                    </h2>
                    <div className="text-xl text-orange-600 dark:text-orange-400 font-semibold mb-6 bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 px-4 py-2 rounded-full inline-block">
                      {aboutData.founder.title}
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
                      {aboutData.founder.bio}
                    </p>
                    
                    <div className="grid gap-4">
                      {aboutData.founder.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start space-x-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border border-orange-200/30 dark:border-orange-700/30">
                          <Star className="w-5 h-5 text-orange-500 fill-current" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50/80 to-orange-50/80 dark:from-gray-900/50 dark:to-orange-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-orange-200/30 dark:border-orange-700/30 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 group hover:-translate-y-2">
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

            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-red-200/30 dark:border-red-700/30 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 group hover:-translate-y-2">
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

      {/* Core Team - Much Bigger Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-600 via-amber-900 to-yellow-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.15),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.15),transparent)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-200 font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 mr-2" />
              Core Team
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent mb-6">
              Meet Our Superstars
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The incredible people who make the magic happen every single day
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {aboutData.coreTeam.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 group-hover:-translate-y-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-orange-600/10 to-amber-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative text-center">
                    <div className="relative mb-6">
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                      <div className="relative w-36 h-48 mx-auto rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 p-1 shadow-2xl group-hover:scale-110 transition-transform duration-500">
                        <ProfileImage
                          src={member.imagePath}
                          alt={member.name}
                          name={member.name}
                          className="w-full h-full text-6xl rounded-xl"
                        />
                      </div>
                      
                      <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-2xl shadow-xl group-hover:rotate-12 transition-transform duration-300">
                        <Star className="w-5 h-5" />
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-200 transition-colors">
                      {member.name}
                    </h4>
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/30 to-amber-500/30 border border-orange-500/40 text-orange-300 text-sm font-medium mb-4">
                      {member.title}
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {member.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50/80 to-amber-50/80 dark:from-gray-900/50 dark:to-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-orange-200/30 dark:border-orange-700/30 hover:border-orange-400 dark:hover:border-orange-600 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-3 group">
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
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

      {/* Community Groups - Bigger Member Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50/80 via-amber-50/50 to-yellow-50/80 dark:from-gray-900 dark:via-orange-900/10 dark:to-amber-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-xl border border-orange-200/50 dark:border-orange-700/50 text-orange-600 dark:text-orange-300 font-medium mb-8">
              <Heart className="w-5 h-5 mr-2" />
              Our Amazing Community
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              The <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent">Heart</span> of Our Success
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Meet the passionate individuals who make iCreative Solutions a thriving community of innovation and excellence.
            </p>
          </div>

          <div className="space-y-12">
            {aboutData.communityGroups.map((group, groupIndex) => {
              const isExpanded = expandedGroup === groupIndex;
              const previewCount = getPreviewCount(group.members.length);
              const hasMoreMembers = group.members.length > previewCount;

              return (
                <div key={groupIndex} className="group">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl border border-orange-200/40 dark:border-orange-700/40 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden">
                    <div className="p-10 lg:p-12">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
                        <div className="flex items-center space-x-6 mb-6 lg:mb-0">
                          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{group.icon}</div>
                          <div>
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                              {group.groupName}
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                              {group.description}
                            </p>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-orange-500/30 to-amber-500/30 dark:from-orange-400/30 dark:to-amber-400/30 backdrop-blur-sm border border-orange-200/50 dark:border-orange-400/50 text-orange-700 dark:text-orange-300 px-6 py-3 rounded-2xl font-semibold text-lg shadow-lg">
                          {group.members.length} amazing members
                        </div>
                      </div>

                      <div className="relative">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
                          {(isExpanded ? group.members : group.members.slice(0, previewCount)).map((member, memberIndex) => (
                            <div key={memberIndex} className="text-center group/member cursor-pointer">
                              <div className="relative mb-4">
                                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl blur-sm opacity-30 group-hover/member:opacity-60 transition-opacity duration-300"></div>
                                <div className="relative w-28 h-36 mx-auto rounded-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-amber-500 p-1 group-hover/member:scale-110 transition-all duration-300 shadow-xl group-hover/member:shadow-2xl">
                                  <ProfileImage
                                    src={member.imagePath}
                                    alt={member.name}
                                    name={member.name}
                                    className="w-full h-full text-3xl rounded-xl"
                                  />
                                </div>
                                
                                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-2 rounded-xl shadow-lg group-hover/member:rotate-12 transition-transform duration-300">
                                  <Star className="w-3 h-3" />
                                </div>
                              </div>
                              <div className="font-semibold text-gray-900 dark:text-white group-hover/member:text-orange-600 dark:group-hover/member:text-orange-400 transition-colors px-2 leading-tight">
                                {member.name}
                              </div>
                            </div>
                          ))}
                        </div>

                        {!isExpanded && hasMoreMembers && (
                          <div className="relative mt-12">
                            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent dark:from-gray-800/95 dark:via-gray-800/60 dark:to-transparent pointer-events-none -mt-16 h-20"></div>
                            
                            <div className="relative flex justify-center">
                              <button
                                onClick={() => toggleGroup(groupIndex)}
                                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold text-lg rounded-2xl hover:from-orange-600 hover:via-orange-700 hover:to-amber-700 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 hover:scale-105"
                              >
                                <span className="mr-3">View all {group.members.length} members</span>
                                <ChevronDown className="w-6 h-6" />
                              </button>
                            </div>
                          </div>
                        )}

                        {isExpanded && (
                          <div className="flex justify-center mt-12">
                            <button
                              onClick={() => toggleGroup(groupIndex)}
                              className="inline-flex items-center px-8 py-4 bg-gray-100/90 dark:bg-gray-700/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 font-semibold text-lg rounded-2xl hover:bg-gray-200/90 dark:hover:bg-gray-600/90 transition-all duration-300 border border-gray-200/60 dark:border-gray-600/60 shadow-lg hover:shadow-xl"
                            >
                              <span className="mr-3">Show less</span>
                              <ChevronUp className="w-6 h-6" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-400 dark:bg-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="text-6xl mb-6 animate-bounce">❤️</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're a developer, designer, business professional, or simply passionate about technology, 
            we'd love to have you as part of our growing community of innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/20 hover:-translate-y-1 hover:scale-105">
              <Mail className="w-6 h-6 mr-3" />
              Get in Touch
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-orange-700 text-white font-bold text-lg rounded-2xl hover:bg-orange-800 transition-all duration-300 shadow-2xl hover:shadow-orange-800/50 hover:-translate-y-1 hover:scale-105 border-2 border-orange-500">
              <MessageSquare className="w-6 h-6 mr-3" />
              Join Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}