import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Shop: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (category && category !== 'all') {
      if (category === 'new') {
        result = result.filter(p => p.isNew);
      } else {
        result = result.filter(p => p.category === category);
      }
    }

    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured / Default
        break;
    }

    return result;
  }, [category, sortBy]);

  const categoryTitle = useMemo(() => {
    if (!category || category === 'all') return 'All Collections';
    if (category === 'new') return 'New Arrivals';
    return category.charAt(0).toUpperCase() + category.slice(1);
  }, [category]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Aarohi Collection</span>
          <h1 className="text-5xl md:text-7xl font-bold">{categoryTitle}</h1>
          <p className="text-gray-500 max-w-lg text-sm font-light">
            Meticulously designed pieces that blend timeless elegance with modern feminine power.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 border-y border-gray-100 mb-12 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold hover:text-accent transition-colors"
            >
              <Filter size={14} />
              <span>Filter</span>
            </button>
            <div className="hidden sm:flex items-center space-x-4">
              <button className="p-2 text-primary"><LayoutGrid size={18} /></button>
              <button className="p-2 text-gray-300 hover:text-primary transition-colors"><List size={18} /></button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Sort By:</span>
            <div className="relative group">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-transparent pr-8 pl-2 py-1 text-[10px] uppercase tracking-widest font-bold focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <ChevronDown size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active Filters / Category Tags */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {['all', 'bags', 'heels', 'combos', 'new'].map((cat) => (
            <Link 
              key={cat}
              to={cat === 'all' ? '/shop' : `/shop/${cat}`}
              className={`px-6 py-2 text-[10px] uppercase tracking-widest font-bold border transition-all ${
                (category === cat || (!category && cat === 'all')) 
                ? 'bg-primary text-white border-primary' 
                : 'bg-white text-gray-400 border-gray-100 hover:border-accent hover:text-accent'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full py-20 text-center space-y-4">
              <p className="text-gray-400 font-serif text-xl italic">No products found in this category.</p>
              <Link to="/shop" className="lux-button inline-block">View All Collections</Link>
            </div>
          )}
        </div>

        {/* Pagination (Simplified) */}
        {filteredProducts.length > 0 && (
          <div className="mt-20 flex justify-center items-center space-x-4">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-100 text-gray-300 cursor-not-allowed"><ChevronLeft size={16} /></button>
            <button className="w-10 h-10 flex items-center justify-center bg-primary text-white font-bold text-xs">1</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-100 text-gray-500 hover:border-primary hover:text-primary transition-colors text-xs">2</button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-100 text-gray-500 hover:border-primary hover:text-primary transition-colors"><ChevronRight size={16} /></button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ChevronLeft: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);

const ChevronRight: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

export default Shop;
