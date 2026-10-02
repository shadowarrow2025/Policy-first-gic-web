import React from 'react';
import { Bike, Car, Truck, HeartHandshake, HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from './Button';

const ICON_MAP = {
  Bike: Bike,
  Car: Car,
  Truck: Truck,
  ShieldHeart: HeartHandshake,
  HeartPulse: HeartPulse
};

export const ProductCard = ({ product, onSelectQuote }) => {
  const IconComponent = ICON_MAP[product.iconName] || ShieldCheck;

  return (
    <div className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(226,36,25,0.14)] hover:border-[#E22419]/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Corner Popular Ribbon */}
      {product.popularBadge && (
        <div className="absolute top-0 right-0 overflow-hidden w-32 h-32 pointer-events-none z-20">
          <div className="absolute transform rotate-45 bg-[#041B3B] text-white text-[10px] font-extrabold uppercase py-1 right-[-34px] top-[22px] w-[140px] text-center shadow-md tracking-wider flex items-center justify-center gap-1 border-b border-white/10">
            <Sparkles className="w-2.5 h-2.5 text-[#E22419]" />
            <span>POPULAR</span>
          </div>
        </div>
      )}

      {/* Top Background Soft Glow Effect */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-red-50/70 rounded-bl-full -mr-8 -mt-8 group-hover:scale-125 group-hover:bg-red-100/80 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Header Icon */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-red-50 text-[#E22419] border border-[#E22419]/15 flex items-center justify-center group-hover:bg-[#E22419] group-hover:text-white group-hover:border-[#E22419] group-hover:scale-105 transition-all duration-300 shadow-sm">
            <IconComponent className="w-7 h-7" />
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-[#2C2C2A] group-hover:text-[#E22419] transition-colors">
          {product.name}
        </h3>
        <p className="text-xs font-bold text-[#E22419] mt-1 mb-3">
          {product.tagline}
        </p>
        <p className="text-sm text-[#3D4A44] line-clamp-2 leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Benefits List */}
        <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
          {product.keyBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-[#E22419] shrink-0 mt-0.5" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-4 relative z-10">
        <Button
          variant="outline"
          fullWidth
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => onSelectQuote(product.id)}
          className="!border-[#E22419] !text-[#E22419] group-hover:!bg-[#E22419] group-hover:!text-white group-hover:!border-[#E22419] transition-all duration-200 shadow-sm"
        >
          Get Quote
        </Button>
      </div>
    </div>
  );
};
