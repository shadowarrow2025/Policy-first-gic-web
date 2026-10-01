import React from 'react';
import { Bike, Car, Truck, HeartHandshake, HeartPulse, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { INSURANCE_PRODUCTS } from '../../data/products';

const ICON_MAP = {
  Bike: Bike,
  Car: Car,
  Truck: Truck,
  ShieldHeart: HeartHandshake,
  HeartPulse: HeartPulse
};

export const QuickSelectorSection = ({ onSelectCategory }) => {
  return (
    <section className="py-12 bg-white border-b border-slate-100 shadow-sm relative z-20 -mt-8 mx-4 sm:mx-8 max-w-7xl lg:mx-auto rounded-3xl border">
      <div className="px-6 sm:px-10">
        
        <SectionHeader
          badge="Quick Selector"
          title="What Would You Like to Protect?"
          subtitle="Select your insurance type below to start your quick quote calculation"
        />

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {INSURANCE_PRODUCTS.map((product) => {
            const IconComp = ICON_MAP[product.iconName] || Bike;
            
            return (
              <button
                key={product.id}
                onClick={() => onSelectCategory(product.id)}
                className="group relative p-5 bg-slate-50 hover:bg-[#082F61] rounded-2xl border border-slate-200/80 hover:border-[#082F61] transition-all duration-300 flex flex-col items-center text-center cursor-pointer hover:shadow-lg hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-white/20 text-[#082F61] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm mb-3">
                  <IconComp className="w-6 h-6" />
                </div>
                
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-white transition-colors">
                  {product.shortTitle}
                </h4>
                
                <p className="text-[11px] text-slate-500 group-hover:text-blue-100 mt-1 line-clamp-1 transition-colors">
                  {product.name}
                </p>

                <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#082F61] group-hover:text-amber-300 transition-colors">
                  <span>Get Quote</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
