import React, { useState } from 'react';
import { User, Mail, Phone, Briefcase, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { services } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
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
        title: "Quote Request Submitted!",
        description: "Thank you for your interest. We will get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-6">
              Request a Quote
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Let us know about your project, and we'll provide you with a customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A simple and transparent process to get your project started.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Submit Request",
                description: "Fill out our quote request form with your project details."
              },
              {
                step: 2,
                title: "Consultation",
                description: "We'll schedule a call to discuss your requirements in detail."
              },
              {
                step: 3,
                title: "Proposal",
                description: "We'll provide you with a detailed proposal and quote for your project."
              },
              {
                step: 4,
                title: "Project Kick-off",
                description: "Once approved, we'll start working on your project right away."
              }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300 transform group-hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent text-center">
                Quote Request Form
              </CardTitle>
              <CardDescription className="text-gray-400 text-center text-lg">
                Please provide as much detail as possible for an accurate quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Your Name *</label>
                    <Input
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Your Email *</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      required
                    />
                  </div>
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
                  <label className="block text-gray-300 font-semibold mb-2">Service of Interest *</label>
                  <Select onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      {services.map((service) => (
                        <SelectItem key={service.id} value={service.name} className="text-white">
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Project Description *</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={6}
                    required
                  />
                </div>
                <div className="flex justify-end pt-8 border-t border-slate-700">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-500 to-teal-600 hover:from-blue-600 hover:to-teal-700"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-teal-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our team is ready to answer any questions you may have.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;