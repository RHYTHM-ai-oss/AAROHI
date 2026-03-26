import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants';
import { motion } from 'motion/react';

const BrandSnippet: React.FC = () => {
  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square relative z-10"
          >
            <img 
              src="https://picsum.photos/seed/brand-story/800/800" 
              alt="Brand Story" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-gold/30 z-0" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 z-0" />
        </div>

        <div className="lg:w-1/2 space-y-8 text-white">
          <div className="space-y-4">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Beyond Fashion, <br /> <span className="italic font-normal text-gold">A Statement of Power</span></h2>
          </div>
          
          <p className="text-gray-300 text-lg font-light leading-relaxed">
            {BRAND.storyLong}
          </p>

          <div className="pt-6">
            <Link to="/about" className="lux-button bg-white text-primary hover:bg-gold hover:text-white">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSnippet;
