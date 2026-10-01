import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

import founderImg from '../../assets/images/Founder-img.png';

export const AboutUsSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="about-us" className="py-20 md:py-28 bg-white border-b border-slate-100 relative overflow-hidden select-none">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Figma Style Visual Container with Backdrop, Founder Avatar, Dots, & Floating Users Card */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <ScrollReveal animation="fade-right" delay={150} className="w-full flex justify-center">
              <div className="relative w-full max-w-[440px] sm:max-w-[480px]">
                
                {/* Scatter Dots Pattern on Top Right */}
                <div className="absolute -top-3 right-6 sm:right-10 opacity-30 pointer-events-none z-0">
                  <svg width="68" height="68" viewBox="0 0 68 68" fill="none">
                    <circle cx="10" cy="10" r="2.5" fill="#2C2C2A" />
                    <circle cx="28" cy="10" r="2.5" fill="#2C2C2A" />
                    <circle cx="46" cy="10" r="2.5" fill="#2C2C2A" />
                    <circle cx="64" cy="10" r="2.5" fill="#2C2C2A" />
                    <circle cx="18" cy="28" r="2.5" fill="#2C2C2A" />
                    <circle cx="36" cy="28" r="2.5" fill="#2C2C2A" />
                    <circle cx="54" cy="28" r="2.5" fill="#2C2C2A" />
                    <circle cx="10" cy="46" r="2.5" fill="#2C2C2A" />
                    <circle cx="28" cy="46" r="2.5" fill="#2C2C2A" />
                    <circle cx="46" cy="46" r="2.5" fill="#2C2C2A" />
                    <circle cx="64" cy="46" r="2.5" fill="#2C2C2A" />
                    <circle cx="28" cy="64" r="2.5" fill="#2C2C2A" />
                    <circle cx="46" cy="64" r="2.5" fill="#2C2C2A" />
                  </svg>
                </div>

                {/* Soft Rounded Backdrop Frame */}
                <div className="absolute inset-x-8 top-10 bottom-0 bg-[#F4F7F5] rounded-3xl sm:rounded-[36px] -z-10 border border-slate-100" />

                {/* Founder Image */}
                <div className="relative z-10 flex justify-center pt-4">
                  <img
                    src={founderImg}
                    alt="Policy First General Insurance Advisor"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                    className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain select-none pointer-events-none drop-shadow-xl"
                  />
                </div>

                {/* Hand-drawn Green Sparkle / Accent Doodle at bottom-left */}
                <div className="absolute bottom-2 left-2 sm:left-4 opacity-75 pointer-events-none z-20">
                  <svg width="36" height="32" viewBox="0 0 36 32" fill="none" stroke="#00642F" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M4 22 L14 12 M18 4 L18 18 M22 22 L32 12" />
                  </svg>
                </div>

                {/* Floating 10k+ Verified Users Card */}
                <div className="absolute -bottom-4 sm:-bottom-6 right-0 sm:right-2 bg-white rounded-2xl p-4 sm:p-5 shadow-[0_12px_35px_rgba(0,0,0,0.12)] border border-slate-100 min-w-[210px] sm:min-w-[230px] z-20 animate-in fade-in duration-300">
                  <div className="text-xs sm:text-sm font-extrabold text-[#2C2C2A] mb-3">
                    10k+ Insured Clients
                  </div>
                  
                  <div className="space-y-2.5">
                    {/* User 1 */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#041B3B] text-white font-bold text-[10px] flex items-center justify-center shrink-0 shadow-xs">
                        SK
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-[#2C2C2A] truncate leading-tight">Suresh Kumar</p>
                        <p className="text-[9px] text-slate-400 truncate leading-tight">Two-Wheeler & Car Cover</p>
                      </div>
                    </div>

                    {/* User 2 */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-[#00642F] text-white font-bold text-[10px] flex items-center justify-center shrink-0 shadow-xs">
                        DN
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-[#2C2C2A] truncate leading-tight">Deepa Natarajan</p>
                        <p className="text-[9px] text-slate-400 truncate leading-tight">Family Health Cover</p>
                      </div>
                    </div>

                    {/* User 3 */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 shadow-xs">
                        SM
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-[#2C2C2A] truncate leading-tight">Sri Murugan Transport</p>
                        <p className="text-[9px] text-slate-400 truncate leading-tight">Commercial Fleet Policy</p>
                      </div>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center">
                    <button 
                      onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : null}
                      className="text-[10px] font-bold text-[#00642F] hover:text-[#0B4C38] flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>See Verified Reviews</span>
                      <span className="text-xs">›</span>
                    </button>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT SIDE: Concise, High-Impact Text Content Matched to Theme Scale */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal animation="fade-left" delay={200}>
              <div className="space-y-3">
                
                {/* Badge in Dark Blue */}
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1 bg-[#041B3B]/10 text-[#041B3B] border border-[#041B3B]/20">
                  About Our Company
                </span>

                {/* Heading Matched to "Our Work Process" scale */}
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2C2C2A] leading-snug">
                  Built on Trust. <br />
                  <span className="text-[#00642F]">Driven by Protection.</span>
                </h2>

                {/* Content Matched to Theme Body Font Size */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg pt-1">
                  Policy First General Insurance is a dedicated insurance advisory firm based in Coimbatore. We help individuals, families, and commercial enterprises choose optimal coverage from India's top 25+ insurers with zero hidden charges and guaranteed 24/7 cashless claim support.
                </p>

                {/* Pill CTA Button (Figma Style) */}
                <div className="pt-4">
                  <button
                    onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : null}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00642F] hover:bg-[#004e24] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#00642F]/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <span>Get Instant Quote</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </button>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
