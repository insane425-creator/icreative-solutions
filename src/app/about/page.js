'use client';

import { useState } from 'react';
import { Star, Users, Target, Eye, Award, Heart, ChevronDown, ChevronUp, Mail, MessageSquare } from 'lucide-react';
import NavigationBar from '../../components/NavigationBar'; // Add this import

// Import your data (you can move this to a separate file later)
const aboutData = {
  "founder": {
    "name": "Imad Khan Lodhi",
    "title": "Founder & CEO, iCreative Solutions",
    "bio": "Passionate about transforming Pakistani businesses through innovative POS solutions. Building the future of retail technology, one business at a time.",
    "imagePath": "/community/founder.png",
    "achievements": [
      "100+ Businesses Digitally Transformed",
      "Leading Pakistan's POS Revolution",
      "Tech Entrepreneur & Innovator"
    ]
  },
  "coreTeam": [
    {
      "name": "Noman Mujeeb",
      "title": "Chief Technology Officer",
      "tagline": "Code wizard who turns coffee into scalable solutions ☕️",
      "imagePath": "/community/core/noman.jpg"
    },
    {
      "name": "Sarah Khan",
      "title": "Head of Design",
      "tagline": "Makes interfaces so beautiful, even bugs look elegant ✨",
      "imagePath": "/community/core/sarah.jpg"
    },
    {
      "name": "Naqash Khan",
      "title": "Business Development Lead",
      "tagline": "Turns handshakes and ideas into partnerships 🤝",
      "imagePath": "/community/core/ali.jpg"
    },
    {
      "name": "Saad Ali",
      "title": "Customer Success Manager",
      "tagline": "Customer happiness engineer and problem-solving ninja ⚡",
      "imagePath": "/community/core/saad.jpg"
    }
  ],
  "communityGroups": [
    {
      "groupName": "Tech Enthusiasts",
      "description": "Our coding ninjas and tech visionaries who push the boundaries of what's possible",
      "icon": "💻",
      "members": [
        { "name": "Huzaifa Shams", "imagePath": "/community/group-tech/huzaifa.jpg" },
        { "name": "Awais Mughal", "imagePath": "/community/group-tech/awais.jpg" },
        { "name": "Zaki Jadoon", "imagePath": "/community/group-tech/person3.jpg" },
        { "name": "Mussavir Ali", "imagePath": "/community/group-tech/person4.jpg" },
        { "name": "Muneer Ahmad", "imagePath": "/community/group-tech/person5.jpg" },
      ]
    },
    {
      "groupName": "Business Supporters",
      "description": "Strategic minds and business leaders who help shape our market vision",
      "icon": "📈",
      "members": [
        { "name": "Husnain Mughal", "imagePath": "/community/group-business/person1.jpg" },
        { "name": "Sardar Danial", "imagePath": "/community/group-business/person2.jpg" },
        { "name": "Malik Asjid", "imagePath": "/community/group-business/asjid.jpg" },
        { "name": "Kamran Siddique", "imagePath": "/community/group-business/person4.jpg" },
        { "name": "Sana Malik", "imagePath": "/community/group-business/person5.jpg" },
        { "name": "Tariq Javed", "imagePath": "/community/group-business/person6.jpg" },
      ]
    },
    {
      "groupName": "Design Lovers",
      "description": "Creative souls who ensure our products are not just functional, but beautiful",
      "icon": "🎨",
      "members": [
        { "name": "Mairaj Khan", "imagePath": "/community/group-design/mairaj.jpg" },
        { "name": "Maryam Noor", "imagePath": "/community/group-design/person2.jpg" },
        { "name": "Hina Afridi", "imagePath": "/community/group-design/person3.jpg" },
        { "name": "Zain Baloch", "imagePath": "/community/group-design/zain.jpg" },
        { "name": "Amna Saleem", "imagePath": "/community/group-design/person5.jpg" },
        { "name": "Waseem Abbas", "imagePath": "/community/group-design/person6.jpg" }
      ]
    },
    {
      "groupName": "Student Ambassadors",
      "description": "Young innovators and future leaders spreading the word in universities",
      "icon": "🎓",
      "members": [
        { "name": "Moiz Awan", "imagePath": "/community/group-students/person1.jpg" },
        { "name": "Zohaib Ali", "imagePath": "/community/group-students/person2.jpg" },
        { "name": "Shahzaib Ali", "imagePath": "/community/group-students/person3.jpg" },
        { "name": "Mahnoor Khan", "imagePath": "/community/group-students/person4.jpg" },
        { "name": "Osama Bin Tariq", "imagePath": "/community/group-students/person5.jpg" },
        { "name": "Zara Akram", "imagePath": "/community/group-students/person6.jpg" },
      ]
    },
    {
      "groupName": "Innovation Partners",
      "description": "Thought leaders and advisors who guide our strategic direction",
      "icon": "🚀",
      "members": [
        { "name": "Ahtesham Awan", "imagePath": "/community/group-innovation/aht.jpg" },
        { "name": "Zulfiqar Khan", "imagePath": "/community/group-innovation/person1.jpg" },
        { "name": "Dr. Imran Malik", "imagePath": "/community/group-innovation/person3.jpg" },
        { "name": "Shazia Parveen", "imagePath": "/community/group-innovation/person4.jpg" },
        { "name": "Muhammad Azeem", "imagePath": "/community/group-innovation/person5.jpg" }
      ]
    }
  ],
  "stats": [
    { 
      "value": "100+", 
      "label": "Businesses Served",
      "description": "Pakistani businesses trust our solutions"
    },
    { 
      "value": "99.9%", 
      "label": "Uptime Guarantee",
      "description": "Always-on reliability for your business"
    },
    { 
      "value": "24/7", 
      "label": "Local Support",
      "description": "Dedicated Pakistani support team"
    },
    { 
      "value": "50+", 
      "label": "Team Members",
      "description": "Passionate individuals driving innovation"
    }
  ],
  "mission": {
    "title": "Our Mission",
    "description": "To empower every Pakistani business with intelligent technology that drives growth, efficiency, and success in the digital age.",
    "icon": "🎯"
  },
  "vision": {
    "title": "Our Vision",
    "description": "To be Pakistan's leading provider of innovative business solutions, making advanced technology accessible to businesses of all sizes.",
    "icon": "👁️"
  }
};

export default function About() {
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [imageErrors, setImageErrors] = useState(new Set());

  const toggleGroup = (groupIndex) => {
    setExpandedGroup(expandedGroup === groupIndex ? null : groupIndex);
  };

  // Function to determine preview count based on group size
  const getPreviewCount = (memberCount) => {
    return memberCount > 5 ? 5 : memberCount;
  };

  // Handle image load errors
  const handleImageError = (imagePath) => {
    setImageErrors(prev => new Set(prev).add(imagePath));
  };

  // Profile image component with fallback
  const ProfileImage = ({ src, alt, name, className = "w-full h-full" }) => {
    if (imageErrors.has(src)) {
      return (
        <div className={`${className} rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center font-bold text-gray-600 dark:text-gray-400`}>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Add NavigationBar component */}
      <NavigationBar />
      
      {/* Hero Section with Founder Spotlight */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-sky-100 dark:from-cyan-900/30 dark:to-sky-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-8">
              Meet the Founder
            </div>
          </div>
          
          {/* Founder Spotlight */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="relative p-12">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-transparent to-sky-50/50 dark:from-cyan-900/10 dark:to-sky-900/10"></div>
                
                <div className="relative flex flex-col lg:flex-row items-center gap-12">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 p-1 shadow-xl">
                      <ProfileImage
                        src={aboutData.founder.imagePath}
                        alt={aboutData.founder.name}
                        name={aboutData.founder.name}
                        className="w-full h-full text-8xl rounded-xl"
                      />
                    </div>
                    
                    {/* Achievement Badge */}
                    <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-2xl shadow-lg">
                      <Award className="w-8 h-8" />
                    </div>
                  </div>
                  
                  {/* Founder Info */}
                  <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                      {aboutData.founder.name}
                    </h1>
                    <div className="text-xl text-cyan-600 dark:text-cyan-400 font-semibold mb-6">
                      {aboutData.founder.title}
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
                      {aboutData.founder.bio}
                    </p>
                    
                    {/* Achievements */}
                    <div className="grid gap-4">
                      {aboutData.founder.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center justify-center lg:justify-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{aboutData.mission.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {aboutData.mission.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutData.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">{aboutData.vision.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {aboutData.vision.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {aboutData.vision.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Core Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet the incredible people who make the magic happen every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {aboutData.coreTeam.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-32 h-40 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 p-1 shadow-lg">
                      <ProfileImage
                        src={member.imagePath}
                        alt={member.name}
                        name={member.name}
                        className="w-full h-full text-4xl rounded-xl"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h4>
                    <div className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mb-4">
                      {member.title}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {member.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Groups */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Amazing Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Behind every great product is an even greater community. Meet the passionate individuals who make iCreative Solutions possible.
            </p>
          </div>

          <div className="space-y-8">
            {aboutData.communityGroups.map((group, groupIndex) => {
              const isExpanded = expandedGroup === groupIndex;
              const previewCount = getPreviewCount(group.members.length);
              const hasMoreMembers = group.members.length > previewCount;

              return (
                <div key={groupIndex} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden">
                  {/* Group Header */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{group.icon}</div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {group.groupName}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mt-1">
                            {group.description}
                          </p>
                        </div>
                      </div>
                      <div className="bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                        {group.members.length} members
                      </div>
                    </div>

                    {/* Member Preview */}
                    <div className="relative">
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {(isExpanded ? group.members : group.members.slice(0, previewCount)).map((member, memberIndex) => (
                          <div key={memberIndex} className="text-center group cursor-pointer">
                            <div className="relative mb-4">
                              <div className="w-28 h-36 mx-auto rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 p-1 group-hover:scale-105 transition-transform duration-300 shadow-md">
                                <ProfileImage
                                  src={member.imagePath}
                                  alt={member.name}
                                  name={member.name}
                                  className="w-full h-full text-2xl rounded-xl"
                                />
                              </div>
                            </div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors px-1">
                              {member.name}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Fade overlay and expand button for non-expanded groups */}
                      {!isExpanded && hasMoreMembers && (
                        <div className="relative mt-6">
                          {/* Fade overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-800 dark:via-gray-800/80 dark:to-transparent pointer-events-none -mt-16 h-24"></div>
                          
                          {/* Expand button */}
                          <div className="flex justify-center">
                            <button
                              onClick={() => toggleGroup(groupIndex)}
                              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-sky-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-sky-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                              <span className="mr-2">View all {group.members.length} members</span>
                              <ChevronDown className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* Collapse button for expanded groups */}
                      {isExpanded && (
                        <div className="flex justify-center mt-6">
                          <button
                            onClick={() => toggleGroup(groupIndex)}
                            className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
                          >
                            <span className="mr-2">Show less</span>
                            <ChevronUp className="w-5 h-5" />
                          </button>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-sky-600">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">❤️</div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Join Our Community?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Whether you're a developer, designer, business professional, or simply passionate about technology, 
            we'd love to have you as part of our growing family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-cyan-700 text-white font-semibold rounded-xl hover:bg-cyan-800 transition-colors duration-300 shadow-lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              Join Discussion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}