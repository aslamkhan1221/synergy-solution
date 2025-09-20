import React, { useState } from 'react';
import { Calendar, User, Tag, Filter, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mock';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'Web Development', name: 'Web Development' },
    { id: 'Cloud Computing', name: 'Cloud Computing' },
    { id: 'Data Analytics', name: 'Data Analytics' },
    { id: 'Business', name: 'Business' },
    { id: 'Technology', name: 'Technology' },
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.tags.includes(activeFilter));

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay informed with our latest articles, tutorials, and industry insights.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-r from-slate-800 to-gray-800 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-blue-400" />
            <span className="text-gray-300 font-semibold">Filter Posts</span>
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

      {/* Featured Post */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Featured Post
            </h2>
          </div>
          
          {filteredPosts.length > 0 && (
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:hidden"></div>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    {filteredPosts[0].tags.map(tag => (
                      <span key={tag} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-4">{filteredPosts[0].title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{filteredPosts[0].excerpt}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span>{formatDate(filteredPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <User className="w-5 h-5 text-blue-400" />
                      <span>By {filteredPosts[0].author}</span>
                    </div>
                  </div>
                  
                  <button onClick={() => setSelectedPost(filteredPosts[0])} className="bg-gradient-to-r from-blue-500 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2 w-fit">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              All Posts
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold capitalize">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-300">
                      <User className="w-4 h-4 text-blue-400" />
                      <span>By {post.author}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-teal-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-700 transition-all duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post Details Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-blue-500/20" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-6">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedPost.title}</h2>
                <div className="flex space-x-2">
                  {selectedPost.tags.map(tag => (
                    <span key={tag} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">{formatDate(selectedPost.date)}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <User className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">By {selectedPost.author}</span>
                </div>
              </div>
              
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
                <p>{selectedPost.excerpt}</p>
                {/* Add more content here if available in mock data */}
              </div>
              
              <button onClick={() => setSelectedPost(null)} className="w-full mt-8 bg-gradient-to-r from-blue-500 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-700 transition-all duration-300">
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest articles, tutorials, and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="Enter your email" className="bg-white/20 text-white placeholder-white/70 px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-white" />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;