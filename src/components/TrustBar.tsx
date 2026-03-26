import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Lock } from 'lucide-react';
import { BRAND } from '../constants';

const TrustBar: React.FC = () => {
  const icons = { ShieldCheck, Truck, RotateCcw, Lock };

  return (
    <section className="bg-white border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {BRAND.usps.map((usp, idx) => {
          const Icon = icons[usp.icon as keyof typeof icons];
          return (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
              <div className="p-4 bg-beige/30 rounded-full transition-transform duration-500 group-hover:scale-110">
                <Icon size={24} className="text-accent" />
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] uppercase tracking-widest font-bold">{usp.title}</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">{usp.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBar;
