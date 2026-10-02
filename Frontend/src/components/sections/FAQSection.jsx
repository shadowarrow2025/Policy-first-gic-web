import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { Plus, Minus, Mail, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Exactly 4 focused FAQs as requested
  const displayFaqs = FAQS.slice(0, 4);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAFAF8] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <ScrollReveal animation="fade-right" delay={100}>
          <div className="mb-10 sm:mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2.5 bg-[#041B3B]/10 text-[#041B3B] border border-[#041B3B]/20">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2C2C2A] leading-[1.15]">
              Frequently <br />
              <span className="text-[#E22419]">asked questions</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Grid layout matching height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Exactly 4 FAQ Accordion Cards */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-between gap-3.5">
            {displayFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <ScrollReveal key={idx} animation="fade-up" delay={100 + idx * 50}>
                  <div 
                    className={`bg-white border rounded-2xl transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden ${
                      isOpen 
                        ? 'border-[#041B3B] shadow-sm ring-1 ring-[#041B3B]/20' 
                        : 'border-slate-200/90 hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full p-5 sm:p-6 flex items-center justify-between text-left cursor-pointer focus:outline-none gap-4"
                      aria-expanded={isOpen}
                    >
                      <h3 className="text-base sm:text-lg font-bold text-[#2C2C2A] tracking-tight leading-snug">
                        {faq.question}
                      </h3>

                      {/* Plus / Minus Icon */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-slate-100 text-[#041B3B]' : 'text-slate-400'
                      }`}>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-[#041B3B]" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 text-sm sm:text-base text-[#3D4A44] leading-relaxed font-normal animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Matching Height Support Card ("Do you have more questions?") */}
          <div className="lg:col-span-5 xl:col-span-4 flex">
            <ScrollReveal animation="fade-left" delay={200} className="w-full flex h-full flex-col">
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-8 sm:p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] flex flex-col justify-between items-center w-full h-full min-h-[340px]">
                
                {/* Pure Floating Mail Icon in Dark Blue */}
                <div className="pt-2 flex items-center justify-center">
                  <Mail className="w-12 h-12 text-[#041B3B] stroke-[1.8]" />
                </div>

                {/* Middle Info */}
                <div className="space-y-3 py-6">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C2C2A] tracking-tight leading-snug">
                    Do you have more questions?
                  </h3>
                  <p className="text-sm text-[#3D4A44] leading-relaxed font-normal max-w-xs mx-auto">
                    End-to-end insurance advisory and claim assistance in a single place. Reach out to our certified advisors directly.
                  </p>
                </div>

                {/* Shoot a Direct Mail CTA (Scrolls to Contact Section) */}
                <div className="w-full">
                  <button
                    onClick={scrollToContact}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E22419] hover:bg-[#B91C1C] text-white font-bold text-sm sm:text-base shadow-md shadow-[#E22419]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <span>Shoot a Direct Mail</span>
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
