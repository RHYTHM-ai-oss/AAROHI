import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const categories = [
  { name: 'Luxury Handbags', path: '/shop/bags', image: 'https://picsum.photos/seed/cat-bag/800/1000', count: '45+ Items' },
  { name: 'Elegant Heels', path: '/shop/heels', image: 'https://picsum.photos/seed/cat-heel/800/1000', count: '30+ Items' },
  { name: 'Combo Sets', path: '/shop/combos', image: 'https://picsum.photos/seed/cat-combo/800/1000', count: '12+ Items' }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="space-y-4">
            <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold">Curated for You</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">Explore Our <br /> <span className="italic font-normal text-gray-400">Signature Categories</span></h2>
          </div>
          <Link to="/shop" className="text-xs uppercase tracking-widest font-bold border-b-2 border-primary pb-2 hover:text-accent hover:border-accent transition-all">
            View All Collections
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link key={idx} to={cat.path} className="group relative aspect-[3/4] overflow-hidden bg-gray-100">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-[10px] uppercase tracking-widest mb-2 block font-medium">{cat.count}</span>
                <h3 className="text-white text-2xl font-serif mb-4">{cat.name}</h3>
                <div className="w-12 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
