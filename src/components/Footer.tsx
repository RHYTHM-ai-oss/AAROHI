import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Logo isFooter={true} />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            {BRAND.storyShort}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-serif text-lg mb-6">Shop</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/shop/bags" className="hover:text-white transition-colors">Handbags</Link></li>
            <li><Link to="/shop/heels" className="hover:text-white transition-colors">Heels</Link></li>
            <li><Link to="/shop/combos" className="hover:text-white transition-colors">Combo Sets</Link></li>
            <li><Link to="/shop/new" className="hover:text-white transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-serif text-lg mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-serif text-lg mb-6">Join the Journey</h4>
          <p className="text-sm text-gray-400 mb-4">Subscribe to receive exclusive offers and styling tips.</p>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
            />
            <button className="bg-gold text-primary font-bold uppercase tracking-widest text-[10px] py-3 hover:bg-white transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest text-gray-500">
        <p>© 2026 Aarohi Collection. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
