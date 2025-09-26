'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function NavigationBar() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#home', label: 'Home' },
    { 
      label: 'Products',
      dropdown: [
        { href: '/pharmassist', label: 'PharmAssist', description: 'Pharmacy POS System' },
        { href: '/growassist', label: 'GrowAssist', description: 'Grocery Store POS' },
        { href: '/#products', label: 'All Products', description: 'View all solutions' }
      ]
    },
    { href: '/about', label: 'About' },
    { href: '/#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-xl shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">iC</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
              iCreative Solutions
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative">
                {link.dropdown ? (
                  <div
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                    className="relative"
                  >
                    <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium">
                      <span>{link.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-3 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 py-2 backdrop-blur-xl">
                        {link.dropdown.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.href}
                            className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 border-l-2 border-transparent hover:border-cyan-500"
                          >
                            <div className="font-medium">{item.label}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 dark:border-gray-800/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl py-4 rounded-b-2xl shadow-lg">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.dropdown ? (
                    <div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium px-4 py-2 block">
                        {link.label}
                      </span>
                      <div className="ml-4 space-y-1">
                        {link.dropdown.map((item, itemIndex) => (
                          <a
                            key={itemIndex}
                            href={item.href}
                            className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 transition-all duration-300 rounded-lg"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="font-medium text-sm">{item.label}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">{item.description}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-900/20 transition-all duration-300 font-medium px-4 py-2 block rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}