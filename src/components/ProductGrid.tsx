import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const ProductGrid: React.FC = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-accent uppercase tracking-[0.4em] text-[10px] font-bold">Curated Selection</span>
          <h2 className="text-4xl md:text-5xl font-bold">Best Sellers</h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm">
            Discover the pieces our community loves most. Timeless designs that define modern elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/shop" className="lux-button inline-block">
            View All Best Sellers
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
