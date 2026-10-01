import React from 'react';
import { Button } from '../common/Button';
import { CONTACT_INFO } from '../../config/contact';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';

export const FinalCTASection = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#082F61] to-[#041B3B] text-white relative overflow-hidden">
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold text-blue-200 backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Coimbatore's Reliable Insurance Partner</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-tight">
          Protect What Matters Most.
        </h2>

        <p className="text-base sm:text-lg text-blue-100/90 font-medium italic">
          Today • Tomorrow • Always With You
        </p>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Get customized insurance policy options for your Two Wheeler, Car, Commercial fleet, Life, or Family Health in minutes. Zero paperwork delay.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="accent"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            onClick={() => onOpenQuoteModal()}
            className="w-full sm:w-auto shadow-2xl"
          >
            Get a Free Quote
          </Button>

          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base backdrop-blur-md transition-all duration-300"
          >
            <PhoneCall className="w-5 h-5 text-emerald-400" />
            <span>Talk to an Expert</span>
          </a>
        </div>

      </div>
    </section>
  );
};
