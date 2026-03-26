import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../types';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group lux-card flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-accent text-white text-[8px] uppercase tracking-widest px-3 py-1 font-bold">New</span>
          )}
          {product.isBestSeller && (
            <span className="bg-gold text-primary text-[8px] uppercase tracking-widest px-3 py-1 font-bold">Best Seller</span>
          )}
          {product.originalPrice && (
            <span className="bg-white text-primary text-[8px] uppercase tracking-widest px-3 py-1 font-bold border border-gray-100">
              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-white/90 backdrop-blur-sm flex space-x-2">
          <button 
            onClick={() => addToCart(product, 1)}
            className="flex-1 bg-primary text-white text-[10px] uppercase tracking-widest font-bold py-3 flex items-center justify-center space-x-2 hover:bg-accent transition-colors"
          >
            <ShoppingBag size={14} />
            <span>Add to Cart</span>
          </button>
          <Link to={`/product/${product.id}`} className="p-3 bg-gray-100 text-primary hover:bg-gray-200 transition-colors">
            <Eye size={14} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-3">
        <div className="flex justify-between items-start">
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">{product.category}</span>
          <div className="flex items-center space-x-1">
            <Star size={10} className="text-gold fill-gold" />
            <span className="text-[10px] font-bold">{product.rating}</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="text-lg font-serif hover:text-accent transition-colors">
          {product.name}
        </Link>

        <div className="mt-auto pt-4 flex items-center space-x-3">
          <span className="text-xl font-bold">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
