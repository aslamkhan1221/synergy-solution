import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', path: '/services' },
        { name: 'Web Development', path: '/services?filter=web-development' },
        { name: 'Cloud Solutions', path: '/services?filter=cloud-solutions' },
        { name: 'Data Analytics', path: '/services?filter=data-analytics' },
        { name: 'IT Consulting', path: '/services?filter=it-consulting' }
      ]
    },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-blue-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-blue-500 to-teal-600 p-2 rounded-lg transform group-hover:scale-110 transition-transform duration-200">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                Synergy Solutions
              </h1>
              <p className="text-xs text-gray-300 -mt-1">IT Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                      isActive(item.path) ? 'text-blue-400' : 'text-gray-300'
                    }`}>
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-blue-500/20 overflow-hidden">
                        {item.dropdownItems.map((dropItem) => (
                          <Link
                            key={dropItem.name}
                            to={dropItem.path}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-slate-700/50 transition-colors duration-200"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                      isActive(item.path) ? 'text-blue-400' : 'text-gray-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="bg-slate-800/95 backdrop-blur-md rounded-lg border border-blue-500/20 overflow-hidden">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-sm font-medium border-b border-slate-700 last:border-b-0 transition-colors duration-200 hover:bg-slate-700/50 ${
                    isActive(item.path) 
                      ? 'text-blue-400 bg-slate-700/30' 
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-4 my-3 text-center bg-gradient-to-r from-blue-500 to-teal-600 text-white py-2 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-teal-700 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;