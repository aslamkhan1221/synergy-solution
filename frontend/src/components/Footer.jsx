import React from 'react';
import { Link } from 'react-router-dom';
import { Code, MapPin, Phone, Mail, Linkedin, Twitter, Github, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-blue-500 to-teal-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-200">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                  Synergy Solutions
                </h2>
                <p className="text-xs text-gray-300 -mt-1">IT Services</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering innovative IT solutions to drive business growth and efficiency. Your success is our code.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Github className="w-5h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <div className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Our Services</h3>
            <div className="space-y-2">
              {[
                'Web Development',
                'Cloud Solutions',
                'Data Analytics',
                'IT Consulting',
                'Cybersecurity',
                'AI & Machine Learning'
              ].map((service) => (
                <Link
                  key={service}
                  to="/services"
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-.400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>456 Tech Park, Silicon Valley, SV 54321</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>(555) 987-TECH</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>contact@synergysolutions.com</span>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-blue-400 mb-2">Business Hours</h4>
              <div className="text-gray-400 text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Mon - Fri:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>By Appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Synergy Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;