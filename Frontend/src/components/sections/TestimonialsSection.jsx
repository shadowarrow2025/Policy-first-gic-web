import React from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import { Star } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const TestimonialsSection = () => {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-20 md:py-24 bg-white relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 sm:mb-16">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#041B3B]/10 text-[#041B3B] border border-[#041B3B]/20">
              Customer Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#2C2C2A] leading-tight">
              What our customers are saying..
            </h2>
            <p className="mt-3.5 text-base sm:text-lg text-[#3D4A44] leading-relaxed font-normal">
              Read how Policy First General Insurance helps vehicle owners, families, and businesses safeguard what matters most.
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* SINGLE ROW INFINITE MARQUEE (Right to Left Auto Scroll) */}
      <div className="relative w-full overflow-hidden py-4 group">
        
        {/* Side Gradient Fade Masks for smooth entry & exit */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/90 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/90 to-transparent z-20" />

        {/* Continuous Scrolling Track (Right to Left) */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex gap-6 sm:gap-8 shrink-0 py-2">
            {duplicatedTestimonials.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="w-[330px] sm:w-[380px] shrink-0 bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-2xl border border-slate-100 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden group/card select-none"
              >
                
                {/* TOP WHITE BODY: Large Quote & Review Text */}
                <div className="p-6 sm:p-7 pb-2 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Quotation Mark & Star Ratings */}
                    <div className="flex items-center justify-between mb-3">
                      <span 
                        style={{ color: review.quoteColor || '#00642F' }}
                        className="text-4xl sm:text-5xl font-serif font-black leading-none select-none opacity-90"
                      >
                        “
                      </span>
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Review Comment */}
                    <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal line-clamp-4 min-h-[85px]">
                      {review.comment}
                    </p>
                  </div>

                  {/* Verified Badge */}
                  <div className="mt-4 pt-3 border-t border-slate-100/80">
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${review.badgeClass || 'bg-emerald-50 text-[#00642F]'}`}>
                      ✓ {review.verifiedClaim}
                    </span>
                  </div>
                </div>

                {/* BOTTOM WAVED FOOTER WITH OVERLAPPING AVATAR */}
                <div className="relative w-full overflow-hidden leading-none mt-5">
                  
                  {/* Smooth Curved Wave SVG */}
                  <div className="relative w-full h-12 sm:h-13 overflow-hidden">
                    <svg
                      className="w-full h-full block"
                      viewBox="0 0 500 100"
                      preserveAspectRatio="none"
                      fill={review.waveColor || '#00642F'}
                    >
                      <path d="M0,45 C150,95 350,0 500,55 L500,100 L0,100 Z" />
                    </svg>

                    {/* Centered Overlapping Circular Avatar */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <img
                        src={review.avatarUrl}
                        alt={review.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-4 border-white shadow-md group-hover/card:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Colored Bottom Bar Content */}
                  <div className={`${review.footerBg || 'bg-[#00642F]'} text-white pb-5 pt-1.5 px-4 text-center`}>
                    <h4 className="font-bold text-sm sm:text-base text-white tracking-tight">
                      {review.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-emerald-100/90 font-medium mt-0.5">
                      {review.role} • {review.location}
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
