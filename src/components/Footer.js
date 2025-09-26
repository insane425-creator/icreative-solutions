import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    products: [
      { name: "PharmAssist", href: "/pharmassist", description: "Pharmacy POS System" },
      { name: "GrowAssist", href: "/growassist", description: "Grocery Store POS" },
      { name: "Coming Soon", href: "#", description: "More solutions" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Support", href: "#" },
      { name: "Careers", href: "#" }
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "API Reference", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "GitHub", href: "#", icon: "⚡" },
    { name: "YouTube", href: "#", icon: "▶" }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">iC</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                  iCreative Solutions
                </span>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed max-w-md">
                Empowering Pakistani businesses with intelligent POS systems that drive growth, 
                efficiency, and success in the digital age.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">100+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Businesses</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">99.9%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-xl font-bold text-cyan-600 dark:text-cyan-400">24/7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <span className="font-bold text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
                Products
              </h4>
              <div className="space-y-4">
                {footerLinks.products.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-start justify-between text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    <div>
                      <div className="font-medium">{link.name}</div>
                      {link.description && (
                        <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          {link.description}
                        </div>
                      )}
                    </div>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
                Company
              </h4>
              <div className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Resources & Legal */}
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
                Resources
              </h4>
              <div className="space-y-4 mb-8">
                {footerLinks.resources.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
              
              <h5 className="font-semibold text-gray-900 dark:text-white mb-4">
                Legal
              </h5>
              <div className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get the latest updates on new features and Pakistani business insights.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <span>© 2024 iCreative Solutions.</span>
              <span>All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
              
              <div className="text-cyan-600 dark:text-cyan-400 font-medium">
                Made in Pakistan 🇵🇰
              </div>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="text-center py-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-500 italic">
            "Empowering Pakistani businesses with intelligent POS solutions - Building the future of local commerce"
          </p>
        </div>
      </div>
    </footer>
  );
}