import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND } from '../constants';
import { useCart } from '../context/CartContext';
import Cart from './Cart';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Shop All', path: '/shop' },
    { name: 'Bags', path: '/shop/bags' },
    { name: 'Heels', path: '/shop/heels' },
    { name: 'New Arrivals', path: '/shop/new' },
    { name: 'Our Story', path: '/about' }
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 3).map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs uppercase tracking-widest font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Icons */}
          <div className={`flex items-center space-x-4 md:space-x-6 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}>
            <button className="hidden sm:block p-2 hover:text-accent transition-colors">
              <Search size={20} />
            </button>
            <button className="hidden sm:block p-2 hover:text-accent transition-colors">
              <User size={20} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 relative hover:text-accent transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="text-sm uppercase tracking-widest font-medium py-2 border-b border-gray-50 text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <Cart />
    </>
  );
};

export default Navbar;
