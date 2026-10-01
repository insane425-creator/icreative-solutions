const statsData = [
  { 
    value: "Zero", 
    label: "Migration Downtime",
    description: "Seamless data transition with zero sales interruptions"
  },
  { 
    value: "99.9%", 
    label: "System Uptime",
    description: "Continuous operational stability for your counters"
  },
  { 
    value: "100%", 
    label: "Offline-First",
    description: "Zero downtime during internet or power disruptions"
  },
  { 
    value: "24/7", 
    label: "Local Support",
    description: "Direct engineering assistance via WhatsApp & phone"
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