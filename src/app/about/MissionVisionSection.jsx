import { Target, Eye } from 'lucide-react';

const missionVisionData = {
  mission: {
    title: "Our Mission",
    description: "To empower every Pakistani business with intelligent technology that drives growth, efficiency, and success in the digital age.",
    icon: Target
  },
  vision: {
    title: "Our Vision",
    description: "To be Pakistan's leading provider of innovative business solutions, making advanced technology accessible to businesses of all sizes.",
    icon: Eye
  }
};

export default function MissionVisionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl">
                <missionVisionData.mission.icon className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">
                {missionVisionData.mission.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {missionVisionData.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-gray-100 dark:bg-gray-900 rounded-xl">
                <missionVisionData.vision.icon className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white pt-2">
                {missionVisionData.vision.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {missionVisionData.vision.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}