
import React from 'react';
import { ArrowRight } from 'lucide-react';
import NeonButton from '../ui/NeonButton';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center neon-grid-bg pt-24 pb-12 overflow-hidden">
      <div className="absolute top-1/3 -left-24 w-72 h-72 bg-neon-blue/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-24 w-72 h-72 bg-neon-purple/20 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-medium glass border border-white/10 animate-pulse-glow">
              Innovative Digital Solutions
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block shimmer-text animate-float">Elevating Brands</span>
            <span className="neon-text-blue">Through Digital Excellence</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10">
            We craft immersive digital experiences that transform ideas into impactful realities. Your vision, our expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <NeonButton size="lg" variant="blue">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight size={18} />
              </Link>
            </NeonButton>
            <NeonButton size="lg" variant="purple" outline>
              <Link to="/about">Learn More</Link>
            </NeonButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
