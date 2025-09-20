import React from 'react';
import { Briefcase, Users, Target, Heart, CheckCircle } from 'lucide-react';
import { team } from '../data/mock';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We are dedicated to developing cutting-edge solutions that drive progress and efficiency."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for technology and problem-solving fuels our commitment to delivering exceptional results."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We build strong partnerships with our clients to achieve shared goals and success."
    },
    {
      icon: Briefcase,
      title: "Integrity",
      description: "We operate with transparency, honesty, and a commitment to ethical practices in all our endeavors."
    }
  ];

  const achievements = [
    "Over 250 successful projects delivered",
    "10+ years of industry experience",
    "98% client satisfaction rate",
    "20+ industry awards and recognitions",
    "Certified professionals in various technologies",
    "Global client base across multiple industries"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-6">
              About Synergy Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              For over a decade, we've been at the forefront of technological innovation, helping businesses 
              thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-6">
                Our Mission
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                To empower businesses with innovative and reliable technology solutions that drive 
                growth, efficiency, and success in an ever-evolving digital world.
              </p>
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-2xl border border-blue-500/20">
                <h3 className="text-2xl font-semibold text-blue-400 mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be a leading global partner in digital transformation, recognized for our 
                  expertise, commitment to quality, and the positive impact we make on our clients' businesses.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These fundamental principles guide our work and define our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-105 h-full">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-8">
                Our Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg group-hover:text-white transition-colors duration-300">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=400&fit=crop"
                  alt="Team meeting"
                  className="w-full h-48 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=300&fit=crop"
                  alt="Coding on laptop"
                  className="w-full h-36 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=300&h=300&fit=crop"
                  alt="Web development process"
                  className="w-full h-36 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=400&fit=crop"
                  alt="Cloud infrastructure"
                  className="w-full h-48 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our team of passionate and experienced professionals is dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.experience} of experience</p>
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                  <div className="space-y-1">
                    {member.skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-400 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build the Future Together
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with us to leverage the power of technology and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Work With Us
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;