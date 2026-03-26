import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants';
import { motion } from 'motion/react';
import { ArrowRight, Award, Heart, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Our Journey</span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">The Art of <br /> <span className="italic font-normal text-gray-400">Modern Femininity</span></h1>
            </div>
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              {BRAND.storyLong}
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <span className="block text-4xl font-bold text-accent">2018</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Established</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-100" />
              <div className="text-center">
                <span className="block text-4xl font-bold text-accent">50k+</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Happy Clients</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-100" />
              <div className="text-center">
                <span className="block text-4xl font-bold text-accent">12</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Design Awards</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-gray-100">
              <img 
                src="https://picsum.photos/seed/about-hero/800/1000" 
                alt="Aarohi Founder" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-10 lux-card max-w-xs hidden md:block">
              <p className="text-sm italic text-gray-600 leading-relaxed">
                "We don't just sell bags and heels; we sell the confidence to walk into any room and own it."
              </p>
              <span className="block mt-4 text-[10px] uppercase tracking-widest font-bold">— Aarohi, Founder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-beige/20 py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center space-y-4 mb-20">
            <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-bold">What Drives Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Uncompromising Quality", desc: "We source only the finest leathers and materials, ensuring every piece is built to last.", icon: Award },
              { title: "Empowering Design", desc: "Our designs are inspired by the strength and grace of modern women.", icon: Heart },
              { title: "Ethical Craftsmanship", desc: "We partner with artisans who share our commitment to fair practices and excellence.", icon: Sparkles }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-12 lux-card text-center space-y-6">
                <div className="w-16 h-16 bg-beige/30 rounded-full flex items-center justify-center mx-auto">
                  <value.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-xl font-serif">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-32 text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold">Ready to Elevate Your Style?</h2>
        <p className="text-gray-500 max-w-lg mx-auto text-lg font-light">
          Join thousands of women who have found their signature style with Aarohi Collection.
        </p>
        <div className="pt-8">
          <Link to="/shop" className="lux-button inline-flex items-center space-x-4">
            <span>Explore the Collection</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
