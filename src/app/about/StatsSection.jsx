const statsData = [
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
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}