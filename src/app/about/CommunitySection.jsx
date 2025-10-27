import { useState, useEffect } from 'react';
import { Heart, Star, ChevronDown, ChevronUp } from 'lucide-react';
import ProfileImage from './ProfileImage';

const communityGroups = [
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
];

function RotatingGroupMember({ members, imageErrors, onImageError }) {
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
    <div className="flex flex-col items-center">
      <div className={`transition-opacity duration-300 ${fadeClass}`}>
        <div className="relative">
          <div className="w-40 h-52 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-900 p-0.5">
            <ProfileImage
              src={currentMember.imagePath}
              alt={currentMember.name}
              name={currentMember.name}
              className="w-full h-full text-3xl rounded-xl"
              imageErrors={imageErrors}
              onError={onImageError}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-2 rounded-lg shadow-lg">
            <Star className="w-3 h-3" />
          </div>
        </div>
        <p className="text-center mt-3 font-medium text-sm text-gray-900 dark:text-white">
          {currentMember.name}
        </p>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center mt-3 space-x-1.5">
        {members.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? 'bg-gray-900 dark:bg-white w-6'
                : 'bg-gray-300 dark:bg-gray-600 w-1'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CommunitySection({ imageErrors, onImageError }) {
  const [expandedCommunity, setExpandedCommunity] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Our Community
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Heart of Our Success
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the passionate individuals who make our community thrive
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 lg:p-12">
            {!expandedCommunity ? (
              <>
                {/* Desktop: 5 columns */}
                <div className="hidden lg:grid lg:grid-cols-5 gap-8 mb-8">
                  {communityGroups.map((group, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-3">{group.icon}</div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">
                          {group.groupName}
                        </h3>
                      </div>
                      <RotatingGroupMember 
                        members={group.members}
                        imageErrors={imageErrors}
                        onImageError={onImageError}
                      />
                    </div>
                  ))}
                </div>

                {/* Mobile: 1 column */}
                <div className="lg:hidden space-y-6 mb-8">
                  {communityGroups.map((group, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-3">{group.icon}</div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">
                          {group.groupName}
                        </h3>
                      </div>
                      <RotatingGroupMember 
                        members={group.members}
                        imageErrors={imageErrors}
                        onImageError={onImageError}
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => setExpandedCommunity(true)}
                    className="flex items-center space-x-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300"
                  >
                    <span>View All Members</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-12 mb-8">
                  {communityGroups.map((group, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-center space-x-3 mb-8">
                        <div className="text-3xl">{group.icon}</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {group.groupName}
                        </h3>
                        <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-semibold">
                          {group.members.length}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {group.members.map((member, memberIndex) => (
                          <div key={memberIndex} className="text-center">
                            <div className="relative mb-3">
                              <div className="w-28 h-36 mx-auto rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-900 p-0.5">
                                <ProfileImage
                                  src={member.imagePath}
                                  alt={member.name}
                                  name={member.name}
                                  className="w-full h-full text-2xl rounded-xl"
                                  imageErrors={imageErrors}
                                  onError={onImageError}
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-1.5 rounded-lg">
                                <Star className="w-3 h-3" />
                              </div>
                            </div>
                            <p className="font-medium text-sm text-gray-900 dark:text-white">
                              {member.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => setExpandedCommunity(false)}
                    className="flex items-center space-x-2 px-8 py-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
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
  );
}