
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Layers, Code, Paintbrush, LineChart, Globe, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites with cutting-edge technologies that drive results and enhance user experience.',
    icon: <Code className="text-neon-blue" />,
    color: 'blue'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic campaigns that amplify your online presence and drive conversions.',
    icon: <LineChart className="text-neon-purple" />,
    color: 'purple'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and engaging interfaces that captivate users and enhance brand perception.',
    icon: <Paintbrush className="text-neon-pink" />,
    color: 'pink'
  },
  {
    title: 'Brand Strategy',
    description: 'Comprehensive branding solutions that communicate your unique value proposition.',
    icon: <Layers className="text-neon-green" />,
    color: 'green'
  },
  {
    title: 'SEO Optimization',
    description: 'Data-driven tactics to improve visibility and drive organic traffic to your website.',
    icon: <Globe className="text-neon-cyan" />,
    color: 'blue'
  },
  {
    title: 'Technology Consulting',
    description: 'Expert guidance on implementing the right technology solutions for your business.',
    icon: <Cpu className="text-neon-purple" />,
    color: 'purple'
  }
];

const Services = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="neon-text-blue">Services</span></h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard 
              key={index}
              className="relative"
              neonBorder={service.color as any}
            >
              <div className="p-3 mb-4 rounded-full inline-block glass">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
