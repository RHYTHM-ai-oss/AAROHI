import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import CategorySection from '../components/CategorySection';
import ProductGrid from '../components/ProductGrid';
import SocialProof from '../components/SocialProof';
import BrandSnippet from '../components/BrandSnippet';
import { motion } from 'motion/react';

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <TrustBar />
      <CategorySection />
      <ProductGrid />
      <BrandSnippet />
      <SocialProof />
      
      {/* Offer Section */}
      <section className="py-24 bg-accent text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 translate-x-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-8">
          <div className="space-y-4">
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Limited Time Offer</span>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight">15% OFF <br /> <span className="italic font-normal text-gold">Your First Purchase</span></h2>
          </div>
          <p className="text-white/80 text-lg max-w-lg mx-auto font-light">
            Join the Aarohi Collection family and elevate your style today. Use code <span className="font-bold text-white tracking-widest">WELCOME15</span> at checkout.
          </p>
          <div className="pt-6">
            <button className="lux-button bg-white text-primary hover:bg-gold hover:text-white">
              Claim Your Discount
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
