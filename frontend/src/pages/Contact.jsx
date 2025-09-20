import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 987-TECH", "Call us for a consultation"],
      color: "text-blue-400"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@synergysolutions.com", "Quick response guaranteed"],
      color: "text-green-400"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["456 Tech Park", "Silicon Valley, SV 54321"],
      color: "text-orange-400"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: By Appointment"],
      color: "text-purple-400"
    }
  ];

  const departments = [
    {
      name: "Sales Department",
      email: "sales@synergysolutions.com",
      phone: "(555) 987-1001",
      description: "For new project inquiries and quotes"
    },
    {
      name: "Customer Support",
      email: "support@synergysolutions.com", 
      phone: "(555) 987-1002",
      description: "For existing clients and technical support"
    },
    {
      name: "Careers",
      email: "careers@synergysolutions.com",
      phone: "(555) 987-1003", 
      description: "For job opportunities and internships"
    },
    {
      name: "General Inquiries",
      email: "info@synergysolutions.com",
      phone: "(555) 987-1004",
      description: "For all other questions and information"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're here to help. Reach out to us with your questions, and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Contact Information
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the most convenient way to get in touch with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="group text-center">
                  <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-105 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`${detailIndex === 0 ? 'text-white font-semibold' : 'text-gray-400 text-sm'}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    Fill out the form below and we'll respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 font-semibold mb-2">Full Name *</label>
                        <Input
                          placeholder="Enter your name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 font-semibold mb-2">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="Enter email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-300 font-semibold mb-2">Company Name</label>
                        <Input
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-300 font-semibold mb-2">Phone Number</label>
                        <Input
                          placeholder="(555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">Inquiry Type</label>
                      <Select onValueChange={(value) => handleInputChange('inquiryType', value)}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="general" className="text-white">General Inquiry</SelectItem>
                          <SelectItem value="sales" className="text-white">Sales</SelectItem>
                          <SelectItem value="support" className="text-white">Support</SelectItem>
                          <SelectItem value="careers" className="text-white">Careers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">Subject *</label>
                      <Input
                        placeholder="Enter message subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 font-semibold mb-2">Message *</label>
                      <Textarea
                        placeholder="Enter your message here..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700 text-white py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Location</h3>
                <div className="aspect-w-16 aspect-h-12 bg-slate-700 rounded-xl overflow-hidden mb-6">
                  <div className="w-full h-64 bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-300">Interactive Map Coming Soon</p>
                      <p className="text-gray-400 text-sm">456 Tech Park, Silicon Valley, SV</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">456 Tech Park, Silicon Valley, SV 54321</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Contact Details
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get in touch with the right team for your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-3">{dept.name}</h3>
                <p className="text-gray-400 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{dept.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{dept.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What is your development process?",
                answer: "We follow an agile development process that includes discovery, design, development, testing, and deployment. We work closely with our clients to ensure transparency and collaboration throughout the project."
              },
              {
                question: "How long does a project typically take?",
                answer: "The timeline for a project depends on its scope and complexity. We provide a detailed project timeline in our proposal after the initial consultation."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer various support and maintenance packages to ensure your application remains up-to-date and secure after launch."
              },
              {
                question: "What technologies do you specialize in?",
                answer: "We specialize in a wide range of technologies, including React, Node.js, Python, AWS, and more. We choose the best technology stack for each project based on its specific requirements."
              },
              {
                question: "How do you ensure the quality of your work?",
                answer: "We have a dedicated QA team that performs rigorous testing throughout the development process. We also follow best practices and coding standards to ensure high-quality deliverables."
              },
              {
                question: "What are your pricing models?",
                answer: "We offer flexible pricing models, including fixed-price, time and materials, and dedicated team. We work with our clients to choose the best model for their budget and project needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-blue-500/20">
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. Contact us today for a free consultation.
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

export default Contact;