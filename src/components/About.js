export default function About() {
  const stats = [
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
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
            About iCreative Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Digitally Transforming Pakistani Businesses
          </h2>
        </div>
        
        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="text-lg leading-relaxed space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                Founded with a mission to <span className="font-semibold text-cyan-600 dark:text-cyan-400">digitally transform Pakistani businesses</span>, 
                iCreative Solutions develops powerful yet affordable POS systems that simplify operations, 
                improve customer experience, and drive sustainable growth.
              </p>
              
              <p>
                Our team combines deep technical expertise with extensive knowledge of Pakistani business 
                operations, ensuring our solutions are not just technologically advanced but also 
                practically relevant for local entrepreneurs and growing enterprises.
              </p>
              
              <p>
                We believe that every Pakistani business, regardless of size, deserves access to 
                <span className="font-semibold text-cyan-600 dark:text-cyan-400"> cutting-edge tools without complexity</span>. 
                That's why we're committed to building scalable solutions that grow with your business and 
                adapt to the unique challenges of the Pakistani market.
              </p>
            </div>
            
            {/* Mission Statement */}
            <div className="mt-8 p-6 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    To empower every Pakistani business with intelligent technology that drives growth, 
                    efficiency, and success in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-sky-500/5 rounded-2xl"></div>
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-2xl mb-4">
                  <span className="text-white font-bold text-2xl">iC</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  iCreative Solutions
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
                  Smart POS Systems in Pakistan
                </p>
                
                {/* Key Values */}
                <div className="space-y-3 text-left">
                  {[
                    "🚀 Fast, Secure, Reliable",
                    "📊 Data-driven insights",
                    "⚡ Designed for Pakistan",
                    "🌍 Scalable solutions"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
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
        
        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <blockquote className="text-xl font-medium text-gray-700 dark:text-gray-300 italic max-w-3xl mx-auto">
            "Every Pakistani business deserves access to modern technology that can streamline operations, 
            improve customer experience, and drive sustainable growth."
          </blockquote>
          <cite className="block mt-4 text-sm text-gray-500 dark:text-gray-400">
            — iCreative Solutions Team
          </cite>
        </div>
      </div>
    </section>
  );
}