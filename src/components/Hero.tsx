import React from 'react';
import { motion } from 'motion/react';
import { BRAND } from '../constants';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/luxury/1920/1080" 
          alt="Luxury Fashion" 
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-2xl space-y-8"
        >
          <div className="space-y-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold"
            >
              Premium Collection 2026
            </motion.span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-[0.9] font-bold">
              {BRAND.taglines[0].split(',')[0]}
              <span className="block italic text-gold font-normal mt-2">
                {BRAND.taglines[0].split(',')[1]}
              </span>
            </h1>
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-lg">
            Elevate your everyday with our meticulously crafted handbags and heels. Designed for the woman who commands the room.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <Link to="/shop" className="lux-button group">
              <span className="relative z-10">Shop the Collection</span>
              <motion.div 
                className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"
              />
            </Link>
            <Link to="/about" className="text-white text-xs uppercase tracking-widest font-bold border-b border-white/30 pb-1 hover:border-gold transition-colors">
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center space-y-2"
      >
        <span className="text-[8px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
