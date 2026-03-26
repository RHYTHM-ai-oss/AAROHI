import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />

          {/* Panel */}
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingBag size={20} />
                <h2 className="text-xl font-serif">Your Shopping Bag</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-gray-50 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                  <div className="w-20 h-20 bg-beige/30 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-gray-400" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-serif italic">Your bag is empty</p>
                    <p className="text-sm text-gray-400">Discover our latest collections and find your perfect match.</p>
                  </div>
                  <Link 
                    to="/shop" 
                    onClick={() => setIsCartOpen(false)}
                    className="lux-button inline-block"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex space-x-4 group">
                    <div className="w-24 aspect-[3/4] overflow-hidden bg-gray-50 flex-shrink-0">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold uppercase tracking-widest leading-tight">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-accent transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest">{item.category}</p>
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center border border-gray-100">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-xs hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-xs font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-xs hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-bold">${item.price * item.quantity}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-gray-100 space-y-6 bg-gray-50/50">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 uppercase tracking-widest font-medium">Subtotal</span>
                    <span className="font-bold">${totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 uppercase tracking-widest font-medium">Shipping</span>
                    <span className="text-accent uppercase tracking-widest font-bold">Free</span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 flex justify-between">
                    <span className="text-lg font-serif">Total</span>
                    <span className="text-2xl font-bold">${totalPrice}</span>
                  </div>
                </div>

                <button className="w-full lux-button flex items-center justify-center space-x-4 py-5">
                  <span>Checkout Now</span>
                  <ArrowRight size={18} />
                </button>
                
                <p className="text-[10px] text-center text-gray-400 uppercase tracking-widest">
                  Secure Checkout Powered by Aarohi
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
