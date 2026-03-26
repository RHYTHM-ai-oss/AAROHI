import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-beige/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Voices of Elegance</span>
          <h2 className="text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div 
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 relative lux-card flex flex-col items-center text-center space-y-6"
            >
              <Quote className="text-gold/20 absolute top-6 left-6" size={40} />
              
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-beige p-1">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover rounded-full" />
              </div>

              <div className="flex space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{t.comment}"
              </p>

              <div className="pt-4 border-t border-gray-50 w-full">
                <span className="text-xs uppercase tracking-widest font-bold">{t.name}</span>
                <span className="block text-[10px] text-gray-400 uppercase tracking-widest mt-1">Verified Buyer</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
