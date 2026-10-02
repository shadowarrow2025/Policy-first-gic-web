import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';
import { CONTACT_INFO } from '../../config/contact';

export const ClaimsSupportSection = ({ onOpenClaimModal }) => {
  return (
    <section id="claims" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* Background Graphic Ambient Accent */}
      <div className="absolute -top-24 right-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeader
            badge="Fast Track Claims"
            title="When You Need Us Most, We're Here."
            subtitle="Accidents and hospital emergencies don't wait. Our dedicated Coimbatore claim desk guarantees fast response and zero-friction guidance."
          />
        </ScrollReveal>

        {/* 4-Step Staggered Claim Process Grid (Exact Notch Cutout Design) */}
        <div className="mt-20 mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-6 md:gap-8 items-start">
          
          {/* CARD 1: Aligned Top -> Circular Notch Cutout at Bottom */}
          <ScrollReveal animation="fade-up" delay={150}>
            <div className="relative bg-[#F8FAFC] border border-slate-200/60 rounded-3xl p-8 pb-16 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-lg text-left flex flex-col justify-between min-h-[270px]">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  Report Incident
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  Call our claims officer immediately at {CONTACT_INFO.primaryPhone} or ping us on WhatsApp.
                </p>
              </div>

              {/* Bottom Notch Cutout with Dark Blue Circle 1 */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10">
                <div className="w-11 h-11 rounded-full bg-[#041B3B] text-white font-bold text-lg flex items-center justify-center shadow-md">
                  1
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 2: Shifted Down -> Circular Notch Cutout at Top */}
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="relative bg-[#F8FAFC] border border-slate-200/60 rounded-3xl p-8 pt-14 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl text-left flex flex-col justify-between min-h-[270px] md:mt-10">
              
              {/* Top Notch Cutout with Dark Blue Circle 2 */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10">
                <div className="w-11 h-11 rounded-full bg-[#041B3B] text-white font-bold text-lg flex items-center justify-center shadow-md">
                  2
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  Digital Documents
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  Upload garage estimate or hospital pre-authorization form digitally without physical paperwork.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 3: Aligned Top -> Circular Notch Cutout at Bottom */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="relative bg-[#F8FAFC] border border-slate-200/60 rounded-3xl p-8 pb-16 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl text-left flex flex-col justify-between min-h-[270px]">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  Cashless Approval
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  Direct cashless approval at 10,000+ network garages and hospitals across Tamil Nadu.
                </p>
              </div>

              {/* Bottom Notch Cutout with Dark Blue Circle 3 */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10">
                <div className="w-11 h-11 rounded-full bg-[#041B3B] text-white font-bold text-lg flex items-center justify-center shadow-md">
                  3
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 4: Shifted Down -> Circular Notch Cutout at Top */}
          <ScrollReveal animation="fade-up" delay={300}>
            <div className="relative bg-[#F8FAFC] border border-slate-200/60 rounded-3xl p-8 pt-14 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-xl text-left flex flex-col justify-between min-h-[270px] md:mt-10">
              
              {/* Top Notch Cutout with Dark Blue Circle 4 */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center z-10">
                <div className="w-11 h-11 rounded-full bg-[#041B3B] text-white font-bold text-lg flex items-center justify-center shadow-md">
                  4
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  Fast Settlement
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed font-normal">
                  Your dedicated claims manager ensures your payout or garage bill is settled seamlessly.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Centered Get a Quote Action Button */}
        <div className="mt-14 text-center">
          <ScrollReveal animation="zoom-in" delay={350}>
            <button
              type="button"
              onClick={onOpenClaimModal}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-transparent border-2 border-[#E22419] text-[#E22419] hover:bg-[#E22419] hover:text-white font-bold text-base shadow-xs hover:shadow-lg hover:shadow-[#E22419]/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
            >
              <span>Get a Quote Now</span>
              <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
