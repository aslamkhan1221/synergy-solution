import React, { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { portfolio } from '../data/mock';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'Web Development', name: 'Web Development' },
    { id: 'Cloud Solutions', name: 'Cloud Solutions' },
    { id: 'Data Analytics', name: 'Data Analytics' },
    { id: 'IT Consulting', name: 'IT Consulting' },
    { id: 'Cybersecurity', name: 'Cybersecurity' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolio 
    : portfolio.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A showcase of our successful projects and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-r from-slate-800 to-gray-800 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-semibold">Filter Projects</span>
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

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                  <span className="text-blue-400 text-sm capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/20">
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[70vh] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {selectedProject.category}
                </span>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  This project showcases our expertise in {selectedProject.category}. We delivered a high-quality solution that met the client's needs and exceeded their expectations.
                </p>
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
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Contact us for a free consultation.
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

export default Portfolio;