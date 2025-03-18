
import React from 'react';
import GlassCard from '../ui/GlassCard';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechStart',
    content: 'Working with this agency transformed our digital presence. Their strategic approach and attention to detail exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    position: 'Marketing Director, InnovateCorp',
    content: 'An exceptional team that truly understands how to translate vision into reality. Our new website has increased conversions by 40%.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    position: 'Founder, DesignHub',
    content: 'The level of creativity and technical expertise this team brings is unmatched. They\'ve become an invaluable partner to our business.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute top-1/2 -left-32 w-72 h-72 bg-neon-blue/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute top-1/3 -right-32 w-72 h-72 bg-neon-purple/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="neon-text-purple">Clients</span> Say</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} className="flex flex-col justify-between h-full">
              <div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-neon-blue text-neon-blue" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground">&quot;{testimonial.content}&quot;</p>
              </div>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
