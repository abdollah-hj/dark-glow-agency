
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset submitted state after a while
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="animate-page-in">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative neon-grid-bg py-24">
          <div className="absolute top-1/3 -left-24 w-72 h-72 bg-neon-cyan/20 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute bottom-1/3 -right-24 w-72 h-72 bg-neon-pink/20 rounded-full blur-[120px] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="px-3 py-1 rounded-full text-xs font-medium glass inline-block mb-4 border border-white/10">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Start a <span className="neon-text-cyan">Conversation</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or questions about our services? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a <span className="neon-text-blue">Message</span></h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. We're excited to hear about your project!
                </p>
                
                <GlassCard className="mb-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Mail className="text-neon-blue mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-muted-foreground">info@agency.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 mb-6">
                    <Phone className="text-neon-purple mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="text-neon-pink mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">123 Innovation St, Tech City, TC 12345</p>
                    </div>
                  </div>
                </GlassCard>
                
                <div className="aspect-video glass-card overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-purple/20 mix-blend-overlay"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2301&q=80"
                    alt="Office space" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div>
                <GlassCard>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 glass rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 glass rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 glass rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Quote">Project Quote</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Support">Support</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 glass rounded-md focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all duration-300"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                    
                    <NeonButton 
                      type="submit" 
                      variant="cyan" 
                      className="w-full"
                      disabled={isSubmitting || submitted}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : submitted ? (
                        <span className="flex items-center gap-2">
                          <Check size={18} />
                          Sent!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send size={18} />
                          Send Message
                        </span>
                      )}
                    </NeonButton>
                  </form>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked <span className="neon-text-green">Questions</span></h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Find answers to common questions about our services and process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <GlassCard>
                <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
                <p className="text-muted-foreground">
                  Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while more complex projects can take 3-6 months. We'll provide a detailed timeline during the proposal phase.
                </p>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-xl font-semibold mb-3">What is your pricing structure?</h3>
                <p className="text-muted-foreground">
                  We offer customized pricing based on your specific needs and project requirements. We provide detailed proposals outlining all costs upfront, with no hidden fees.
                </p>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-xl font-semibold mb-3">Do you offer ongoing support?</h3>
                <p className="text-muted-foreground">
                  Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally after launch.
                </p>
              </GlassCard>
              
              <GlassCard>
                <h3 className="text-xl font-semibold mb-3">Can you work with existing systems?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We have experience integrating with and enhancing existing platforms and systems. We'll evaluate your current setup and recommend the best approach.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
