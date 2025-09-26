'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    { 
      icon: Mail, 
      label: "contact@icreativesolutions.pk",
      description: "Email us anytime",
      href: "mailto:contact@icreativesolutions.pk"
    },
    { 
      icon: Phone, 
      label: "+92 370 6352186",
      description: "Call for immediate assistance",
      href: "tel:+923706352186"
    },
    { 
      icon: MapPin, 
      label: "Abbottabad, Pakistan",
      description: "Visit our office",
      href: "#"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            Let's discuss how our POS solutions can help you streamline operations, 
            improve customer experience, and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="group">
                    <a 
                      href={contact.href}
                      className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 border border-gray-200 dark:border-gray-700 hover:border-cyan-200 dark:hover:border-cyan-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <contact.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {contact.label}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {contact.description}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="p-6 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Emergency Support Only</span>
                </div>
              </div>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  24/7 Emergency Support Available
                </span>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                    Request a Demo
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                        required
                      />
                    </div>
                    
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                    />
                    
                    <select 
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300"
                    >
                      <option value="">Select Product Interest</option>
                      <option value="PharmAssist">PharmAssist - Pharmacy POS</option>
                      <option value="GrowAssist">GrowAssist - Grocery POS</option>
                      <option value="Custom Solution">Custom Solution</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                    
                    <textarea
                      name="message"
                      placeholder="Tell us about your business needs..."
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-4 focus:ring-cyan-500/20 resize-none transition-all duration-300"
                    />
                    
                    <button 
                      type="submit" 
                      className="group w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-sky-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
                    >
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      <span>Send Request</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We've received your request and will contact you within 24 hours.
                  </p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Redirecting you back to the form...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              Be part of Pakistan's digital business revolution
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}