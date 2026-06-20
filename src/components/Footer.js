import { ArrowUpRight, Mail, Phone, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const footerData = {
    industries: [
      { name: "Pharmacy", href: "/pharmassist" },
      { name: "Grocery", href: "/growassist" },
    ],
    locations: [
      "Punjab",
      "Sindh",
      "Khyber Pakhtunkhwa",
      "Azad Kashmir",
      "Gilgit-Baltistan"
    ],
    cities: [
      "Lahore", "Karachi", "Islamabad", "Rawalpindi",
      "Peshawar", "Multan", "Faisalabad", "Sialkot",
      "Gujranwala", "Abbottabad", "Swat", "Mardan",
      "Mirpur", "Quetta"
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "WhatsApp Support", href: "#" },
      { name: "Video Tutorials", href: "#" }
    ]
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

          {/* Brand Section (Spans 2 columns) */}
          <div className="lg:col-span-2 flex flex-col">
            <Link href="/" className="flex items-center space-x-3 mb-6 group inline-flex w-max">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl tracking-wider">iC</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                iCreative Solutions
              </span>
            </Link>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-sm">
              Next-generation retail management software designed for seamless operations. Empowering your business to thrive, online or offline.
            </p>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 font-medium">
              <a href="mailto:info@icreativesolutions.pk" className="flex items-center space-x-3 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors w-max">
                <Mail className="w-5 h-5 text-cyan-500" />
                <span>info@icreativesolutions.pk</span>
              </a>
              <a href="tel:+923471867197" className="flex items-center space-x-3 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors w-max">
                <Phone className="w-5 h-5 text-cyan-500" />
                <span dir="ltr">+92 347 1867197</span>
              </a>
            </div>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Industries
            </h3>
            <ul className="space-y-4">
              {footerData.industries.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Locations
            </h3>
            <ul className="space-y-4">
              {footerData.locations.map((loc, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-400 font-medium">
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Cities
            </h3>
            <ul className="space-y-3">
              {footerData.cities.map((city, index) => (
                <li key={index} className="text-gray-500 dark:text-gray-400 text-sm">
                  {city}
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Support & Contact
            </h3>
            <ul className="space-y-4">
              {footerData.support.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link href="https://github.com/insane425-creator/pharm_Assist/releases" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg">
                  <span>Download App V1.4.0</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 font-medium text-center md:text-left">
            <span>© {new Date().getFullYear()} iCreative Solutions.</span>
            <span className="hidden sm:inline">Proudly engineered in Pakistan 🇵🇰</span>
          </div>

          {/* Mobile only "Made in Pakistan" */}
          <div className="sm:hidden text-sm text-gray-600 dark:text-gray-400 font-medium flex items-center">
            Proudly engineered in Pakistan 🇵🇰
          </div>

          <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 px-4 py-2 rounded-xl border border-blue-100 dark:border-cyan-800/30 shadow-sm transition-all hover:scale-105">
            <Shield className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-800 dark:text-cyan-300">
              100% Secure Local Storage
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}