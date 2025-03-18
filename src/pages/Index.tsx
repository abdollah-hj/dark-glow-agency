
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import NeonButton from '@/components/ui/NeonButton';
import GlassCard from '@/components/ui/GlassCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-page-in">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        
        {/* Stats Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <GlassCard className="py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold mb-2 neon-text-blue animate-pulse-glow">200+</p>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2 neon-text-purple animate-pulse-glow">98%</p>
                  <p className="text-muted-foreground">Client Satisfaction</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2 neon-text-pink animate-pulse-glow">10+</p>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2 neon-text-green animate-pulse-glow">50+</p>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-radial from-neon-blue/20 to-transparent opacity-40 blur-[80px] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <GlassCard className="py-16 px-6 md:px-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to <span className="neon-text-blue">Transform</span> Your Digital Presence?</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                Let's create something extraordinary together. Our team is ready to bring your vision to life.
              </p>
              <NeonButton size="lg" variant="blue">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight size={18} />
                </Link>
              </NeonButton>
            </GlassCard>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
