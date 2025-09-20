import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Briefcase, Users, Code, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { stats, services, testimonials, blogPosts } from '../data/mock';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop",
      title: "Innovative IT Solutions for a Digital World",
      subtitle: "Driving Business Growth Through Technology"
    },
    {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop",
      title: "Your Partner in Digital Transformation",
      subtitle: "Expertise, Innovation, and Results"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&fit=crop",
      title: "Building the Future of Your Business",
      subtitle: "Custom Software and Cloud Solutions"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.number / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(current);
            return newStats;
          });
        }, 30);
      });
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
      }
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            </div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/services"
                className="group bg-gradient-to-r from-blue-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group flex items-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="text-lg">Watch Our Intro</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-blue-500/50 transition-all duration-300 z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full hover:bg-blue-500/50 transition-all duration-300 z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-500 w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-gradient-to-r from-slate-800 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.id} className="text-center group">
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-2xl border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-105">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-2">
                    {animatedStats[index]}{stat.suffix}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide a wide range of IT services to help your business succeed in the digital age.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(services || []).slice(0, 3).map((service) => (

              <div key={service.id} className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link
                    to={`/services?filter=${service.id}`}
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories from businesses we've helped transform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-blue-500/20 transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Insights Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Latest News & Insights
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest trends and news in the IT industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400 font-medium">
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-semibold"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <span>Visit Our Blog</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;