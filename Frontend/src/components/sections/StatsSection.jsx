import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';

export const StatsSection = ({ onOpenQuoteModal }) => {
  const scrollToProducts = () => {
    const productsEl = document.getElementById('products');
    if (productsEl) {
      productsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50">
      
      {/* ======= TOP CURVED WAVE ======= */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-8 sm:h-14 lg:h-18 text-[#00642F]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 C480,80 960,80 1440,0 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* ======= MAIN CURVED BANNER BODY ======= */}
      <section id="track-record" className="relative bg-[#00642F] text-white py-8 sm:py-12 lg:py-16">
        
        {/* Subtle Radial Glow in background */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT: 2x2 Open Stats Grid with Cross Dividers (5 cols) */}
            <div className="lg:col-span-6 xl:col-span-5">
              <ScrollReveal animation="fade-right" delay={100} duration={600}>
                <div className="w-full">
                  
                  {/* Top Row: 2 Items */}
                  <div className="grid grid-cols-2 border-b border-white/30">
                    
                    {/* Stat 1: Happy Customers */}
                    <div className="py-6 sm:py-8 pr-4 sm:pr-8 border-r border-white/30 flex flex-col justify-center text-center sm:text-left group cursor-default">
                      <p className="text-sm sm:text-base font-medium text-emerald-100/90 tracking-wide group-hover:text-white transition-colors">
                        Happy Customers
                      </p>
                      <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-2.5 group-hover:scale-105 transition-transform duration-300">
                        10K+
                      </p>
                    </div>

                    {/* Stat 2: Cities / Partner Garages */}
                    <div className="py-6 sm:py-8 pl-4 sm:pl-8 flex flex-col justify-center text-center sm:text-left group cursor-default">
                      <p className="text-sm sm:text-base font-medium text-emerald-100/90 tracking-wide group-hover:text-white transition-colors">
                        Partner Insurers
                      </p>
                      <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-2.5 group-hover:scale-105 transition-transform duration-300">
                        25+
                      </p>
                    </div>

                  </div>

                  {/* Bottom Row: 2 Items */}
                  <div className="grid grid-cols-2">
                    
                    {/* Stat 3: Insurance Categories */}
                    <div className="py-6 sm:py-8 pr-4 sm:pr-8 border-r border-white/30 flex flex-col justify-center text-center sm:text-left group cursor-default">
                      <p className="text-sm sm:text-base font-medium text-emerald-100/90 tracking-wide group-hover:text-white transition-colors">
                        Insurance Plans
                      </p>
                      <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-2.5 group-hover:scale-105 transition-transform duration-300">
                        5+
                      </p>
                    </div>

                    {/* Stat 4: Claim Settlement Ratio */}
                    <div className="py-6 sm:py-8 pl-4 sm:pl-8 flex flex-col justify-center text-center sm:text-left group cursor-default">
                      <p className="text-sm sm:text-base font-medium text-emerald-100/90 tracking-wide group-hover:text-white transition-colors">
                        Claims Settled
                      </p>
                      <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mt-2.5 group-hover:scale-105 transition-transform duration-300">
                        98%
                      </p>
                    </div>

                  </div>

                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT: Featured Story / Impact Headline & CTAs (7 cols) */}
            <div className="lg:col-span-6 xl:col-span-7 space-y-5 text-center lg:text-left">
              <ScrollReveal animation="fade-left" delay={200} duration={600}>
                
                {/* Eyebrow */}
                <p className="text-xs sm:text-sm font-extrabold text-emerald-300 uppercase tracking-widest">
                  FEATURED TRUST STORY
                </p>

                {/* Big Bold Headline matching brand font typography */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.18] mt-2.5">
                  The most trusted insurance partner in Tamil Nadu.
                </h2>

                {/* Description Paragraph matching template style */}
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal pt-1 max-w-xl mx-auto lg:mx-0">
                  Policy First General Insurance provides tailored vehicle, commercial, and personal health protection with complete transparency. We bring cashless garage network support, instant digital policy issuance, and dedicated claim assistance so you stay protected always.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <button
                    onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white hover:bg-emerald-50 text-[#00642F] font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    GET A QUOTE
                  </button>

                  <button
                    onClick={scrollToProducts}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-lg border-2 border-white text-white hover:bg-white hover:text-[#00642F] font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 cursor-pointer"
                  >
                    OUR PRODUCTS
                  </button>
                </div>

              </ScrollReveal>
            </div>

          </div>
        </div>

      </section>

      {/* ======= BOTTOM CURVED WAVE ======= */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-8 sm:h-14 lg:h-18 text-[#00642F]"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0 L1440,0 L1440,80 C960,0 480,0 0,80 Z" />
        </svg>
      </div>

    </div>
  );
};
