import React, { useState } from 'react';
import { Filter, CheckCircle, Briefcase, Code, Users } from 'lucide-react';
import { services } from '../data/mock';

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'data', name: 'Data' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'security', name: 'Security' },
    { id: 'innovation', name: 'Innovation' },
  ];

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT solutions to drive your business forward.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-r from-slate-800 to-gray-800 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-semibold">Filter by Category</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-teal-600 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/20" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-6">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedService.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/quote" className="flex-1 bg-gradient-to-r from-blue-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-700 transition-all duration-300 text-center">
                  Request a Quote
                </a>
                <a href="/contact" className="flex-1 border border-blue-500 text-blue-400 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 text-center">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your needs and how we can help you achieve your goals.
          </p>
          <div className="flex justify-center">
            <a
              href="/quote"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;