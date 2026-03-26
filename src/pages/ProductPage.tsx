import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Star, ShieldCheck, Truck, RotateCcw, ShoppingBag, Heart, Share2, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) setActiveImage(0);
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-serif">Product Not Found</h2>
          <Link to="/shop" className="lux-button inline-block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-400 mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight size={10} />
          <Link to={`/shop/${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link>
          <ChevronRight size={10} />
          <span className="text-primary font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-gray-50 relative group">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
              
              {product.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setActiveImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                    className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={() => setActiveImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                    className="p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold">{product.category}</span>
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">{product.name}</h1>
                </div>
                <button className="p-3 bg-gray-50 rounded-full hover:bg-beige/30 transition-colors">
                  <Heart size={20} />
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-gray-200"} />
                  ))}
                </div>
                <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">({product.reviewCount} Reviews)</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <span className="bg-accent/10 text-accent text-[10px] uppercase tracking-widest px-3 py-1 font-bold">
                    Save ${product.originalPrice - product.price}
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600 text-lg font-light leading-relaxed">
              {product.description}
            </p>

            {/* Why you'll love it */}
            <div className="space-y-4 bg-beige/10 p-6 border border-beige/30">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-primary">Why You'll Love It</h4>
              <ul className="space-y-3">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <div className="flex items-center border border-gray-200">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-3 font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
                <div className="text-xs uppercase tracking-widest font-bold text-accent">
                  {product.stock < 10 ? `Only ${product.stock} left in stock!` : 'In Stock'}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => addToCart(product, quantity)}
                  className="flex-1 lux-button flex items-center justify-center space-x-3 py-5"
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </button>
                <button className="flex-1 bg-white border-2 border-primary text-primary font-bold uppercase tracking-widest text-xs py-5 hover:bg-primary hover:text-white transition-all">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Trust Builders */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              <div className="flex flex-col items-center text-center space-y-2">
                <Truck size={20} className="text-gray-400" />
                <span className="text-[8px] uppercase tracking-widest font-bold">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <RotateCcw size={20} className="text-gray-400" />
                <span className="text-[8px] uppercase tracking-widest font-bold">30-Day Returns</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck size={20} className="text-gray-400" />
                <span className="text-[8px] uppercase tracking-widest font-bold">Secure Checkout</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 space-y-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Complete the Look</span>
              <h2 className="text-4xl font-bold">You May Also Like</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sticky Add to Cart (Mobile) */}
      <div className="sticky-atc flex items-center justify-between shadow-2xl">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400 uppercase font-bold">{product.name}</span>
          <span className="text-lg font-bold">${product.price}</span>
        </div>
        <button 
          onClick={() => addToCart(product, 1)}
          className="bg-primary text-white text-[10px] uppercase tracking-widest font-bold px-8 py-4"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductPage;
