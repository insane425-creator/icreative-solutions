import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    products: [
      { name: "PharmAssist", href: "/pharmassist" },
      { name: "GrowAssist", href: "/growassist" },
      { name: "Coming Soon", href: "#" }
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
      { name: "API Reference", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "GitHub", href: "#", icon: "⚡" }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">iC</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                  iCreative Solutions
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                Empowering Pakistani businesses with intelligent POS systems.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-8 h-8 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-sm font-medium">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Products
              </h4>
              <div className="space-y-3">
                {footerLinks.products.map((link, index) => (
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
            
            {/* Company */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Company
              </h4>
              <div className="space-y-3">
                {footerLinks.company.map((link, index) => (
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
            
            {/* Resources */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Resources
              </h4>
              <div className="space-y-3">
                {footerLinks.resources.map((link, index) => (
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
            
            {/* Legal */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Legal
              </h4>
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
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              <span>© 2024 iCreative Solutions. All rights reserved.</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>All systems operational</span>
              </div>
            </div>
            
            <div className="text-cyan-600 dark:text-cyan-400 font-medium">
              Made in Pakistan 🇵🇰
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}