
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';
import { Link } from 'react-router-dom';
import { Users, Target, Zap, Award } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Johnson',
    position: 'CEO & Founder',
    bio: 'Over 15 years of experience in digital strategy and business growth.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    name: 'Jessica Chen',
    position: 'Creative Director',
    bio: 'Award-winning designer with a passion for creating meaningful brand experiences.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    name: 'David Rodriguez',
    position: 'Technical Lead',
    bio: 'Full-stack developer with expertise in building scalable web applications.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    name: 'Sophia Patel',
    position: 'Marketing Strategist',
    bio: 'Data-driven marketing expert with a focus on ROI and customer acquisition.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  }
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries and embrace new technologies and methodologies.',
    icon: <Zap className="text-neon-blue" />,
    color: 'blue'
  },
  {
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we create and deliver.',
    icon: <Award className="text-neon-purple" />,
    color: 'purple'
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients, treating their success as our own.',
    icon: <Users className="text-neon-pink" />,
    color: 'pink'
  },
  {
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes that drive business growth and success.',
    icon: <Target className="text-neon-green" />,
    color: 'green'
  }
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="animate-page-in">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative neon-grid-bg py-24">
          <div className="absolute top-1/3 -left-24 w-72 h-72 bg-neon-purple/20 rounded-full blur-[120px] -z-10"></div>
          <div className="absolute bottom-1/3 -right-24 w-72 h-72 bg-neon-blue/20 rounded-full blur-[120px] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="px-3 py-1 rounded-full text-xs font-medium glass inline-block mb-4 border border-white/10">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We're a Team of <span className="neon-text-purple">Digital Innovators</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2013, we've been at the forefront of digital transformation, helping businesses of all sizes realize their potential in the digital landscape.
              </p>
            </div>
          </div>
        </section>
        
        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our <span className="neon-text-blue">Story</span></h2>
                <p className="text-muted-foreground mb-4">
                  Our journey began with a simple mission: to help businesses succeed in the digital age. What started as a small team of passionate individuals has grown into a full-service digital agency with expertise across various disciplines.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've had the privilege of working with brands across industries, from startups to Fortune 500 companies. Our approach has always been collaborative, innovative, and focused on delivering measurable results.
                </p>
                <p className="text-muted-foreground">
                  Today, we continue to evolve and adapt to the ever-changing digital landscape, staying ahead of trends and technologies to provide our clients with cutting-edge solutions that drive growth and success.
                </p>
              </div>
              <div className="relative">
                <div className="glass-card aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/30 to-neon-purple/30 mix-blend-overlay"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    alt="Team collaboration" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our <span className="neon-text-cyan">Values</span></h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                These core principles guide everything we do and every decision we make.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <GlassCard 
                  key={index} 
                  className="text-center"
                  neonBorder={value.color as any}
                >
                  <div className="p-3 rounded-full inline-block glass mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-24 relative">
          <div className="absolute top-1/2 -right-32 w-72 h-72 bg-neon-pink/10 rounded-full blur-[120px] -z-10"></div>
          
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our <span className="neon-text-pink">Team</span></h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Talented individuals who are passionate about creating exceptional digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <GlassCard key={index} className="text-center overflow-hidden">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-2 border-white/10">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-neon-blue mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <GlassCard className="py-16 px-6 md:px-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Work <span className="neon-text-green">Together</span></h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
                Ready to elevate your digital presence? Reach out to us and let's start a conversation about your project.
              </p>
              <NeonButton size="lg" variant="green">
                <Link to="/contact">Contact Us</Link>
              </NeonButton>
            </GlassCard>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
