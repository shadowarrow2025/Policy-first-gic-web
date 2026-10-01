import React from 'react';
import { ScrollReveal } from '../common/ScrollReveal';
import { PenTool, UserCheck, ShieldCheck } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    icon: PenTool,
    title: 'Tell us what you need',
    description: 'Select your vehicle, family health, or commercial insurance requirement and share basic details.'
  },
  {
    step: '02',
    icon: UserCheck,
    title: 'Get Free Best Quotes',
    description: 'Compare customized plans from India’s top 25+ insurers with transparent coverage and zero hidden fees.'
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Instant Digital Policy',
    description: 'Complete instant digital policy issuance delivered directly to you with dedicated 24/7 claim assistance.'
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2.5 bg-[#041B3B]/10 text-[#041B3B] border border-[#041B3B]/20">
              Simple 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#2C2C2A]">
              Our Work Process
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
              Getting your vehicle, family health, or business insured shouldn't be complicated. Here is how seamless and fast it is with Policy First.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-STEP PROCESS CONTAINER WITH SPACIOUS LAYOUT */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* CURVED DASHED CONNECTOR ARROW 1 -> 2 (Generous Space, Perfectly Aligned Arrowhead) */}
          <div className="hidden md:block absolute top-2 left-[27%] w-[13%] pointer-events-none z-0">
            <svg viewBox="0 0 120 40" fill="none" className="w-full h-auto text-slate-300 overflow-visible">
              <defs>
                <marker
                  id="arrowhead-1"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto"
                >
                  <path
                    d="M 1 1.5 L 7 5 L 1 8.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>
              <path
                d="M 5 32 Q 58 -4 108 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
                markerEnd="url(#arrowhead-1)"
              />
            </svg>
          </div>

          {/* CURVED DASHED CONNECTOR ARROW 2 -> 3 (Generous Space, Perfectly Aligned Arrowhead) */}
          <div className="hidden md:block absolute top-2 left-[60.5%] w-[13%] pointer-events-none z-0">
            <svg viewBox="0 0 120 40" fill="none" className="w-full h-auto text-slate-300 overflow-visible">
              <defs>
                <marker
                  id="arrowhead-2"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto"
                >
                  <path
                    d="M 1 1.5 L 7 5 L 1 8.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>
              <path
                d="M 5 32 Q 58 -4 108 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="none"
                markerEnd="url(#arrowhead-2)"
              />
            </svg>
          </div>

          {/* 3 Process Items Grid with Spacious Gaps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <ScrollReveal key={idx} animation="fade-up" delay={150 + idx * 100}>
                  <div className="flex flex-col items-center text-center px-2">
                    
                    {/* Floating Icon with Subtle Pastel Watermark Accent */}
                    <div className="relative inline-flex items-center justify-center mb-5">
                      <div className="w-7 h-7 rounded-full bg-emerald-100/70 absolute -top-1 -right-1 -z-10" />
                      <IconComp className="w-8 h-8 sm:w-9 sm:h-9 text-[#00642F] stroke-[1.75]" />
                    </div>

                    {/* Step Title (Matched to ProductCard heading font size) */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2A] tracking-tight mb-2">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[270px] mx-auto font-normal">
                      {step.description}
                    </p>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>

    </section>
  );
};
