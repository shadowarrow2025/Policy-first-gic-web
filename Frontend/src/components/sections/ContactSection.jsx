import React from 'react';
import { PhoneCall, Headphones, MapPin, Send } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

import contactImg from '../../assets/images/contact-us-img.png';

export const ContactSection = () => {
  const phoneNumber = '+91 88074 02191';

  return (
    <section id="contact" className="py-20 md:py-24 bg-white relative overflow-hidden border-b border-slate-100 select-none">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-50/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Large Family Illustration Image */}
          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center p-2 order-2 lg:order-1 select-none">
            <ScrollReveal animation="fade-right" delay={150} className="w-full flex justify-center">
              <img
                src={contactImg}
                alt="Policy First General Insurance Customer Support"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
                className="w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[620px] xl:max-w-[660px] h-auto object-contain select-none pointer-events-none drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              />
            </ScrollReveal>
          </div>

          {/* RIGHT COLUMN: Header Title, Subtitle & Green-Themed Enquiries Cards */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 order-1 lg:order-2">
            
            <ScrollReveal animation="fade-left" delay={100}>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider mb-2.5 bg-[#041B3B]/10 text-[#041B3B] border border-[#041B3B]/20">
                  Connect With Us
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2C2C2A] leading-tight">
                  Have a question? <br />
                  <span className="text-[#00642F]">Here to help.</span>
                </h2>
                
                {/* Accent Green Line */}
                <div className="w-16 h-1.5 bg-[#00642F] rounded-full mt-4 mb-5" />

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
                  Our friendly customer support team is your extended family. Speak your heart out. They listen with undivided attention to resolve your concerns. Give us a call, request a callback or drop us an email, we're here to help.
                </p>
              </div>
            </ScrollReveal>

            {/* Enquiries Info Cards with Green Theme */}
            <div className="space-y-4 pt-2">
              
              {/* CARD 1: General & Email Enquiries (Send Icon) */}
              <ScrollReveal animation="fade-left" delay={150}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-[#00642F] hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#00642F] flex items-center justify-center shrink-0 border border-emerald-100">
                    <Send className="w-5 h-5 text-[#00642F]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      General Enquiries
                    </span>
                    <a
                      href="mailto:admin@policyfirst.co.in"
                      className="text-base sm:text-lg font-bold text-[#00642F] hover:text-[#0B4C38] transition-colors"
                    >
                      admin@policyfirst.co.in
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* CARD 2: Customer Sales Enquiries (Headphones Icon) */}
              <ScrollReveal animation="fade-left" delay={200}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-[#00642F] hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#00642F] flex items-center justify-center shrink-0 border border-emerald-100">
                    <Headphones className="w-5 h-5 text-[#00642F]" />
                  </div>
                  <div className="w-full">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Customer Sales & Support
                    </span>
                    
                    <div className="pt-1 text-base sm:text-lg font-bold text-[#00642F]">
                      <a
                        href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                        className="hover:text-[#0B4C38] transition-colors inline-flex items-center gap-2"
                      >
                        <PhoneCall className="w-4 h-4 text-[#00642F]" />
                        <span>{phoneNumber}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* CARD 3: Office Address (MapPin Icon) */}
              <ScrollReveal animation="fade-left" delay={250}>
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-[#00642F] hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#00642F] flex items-center justify-center shrink-0 border border-emerald-100">
                    <MapPin className="w-5 h-5 text-[#00642F]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Coimbatore Office Address
                    </span>
                    <p className="text-sm sm:text-base font-medium text-[#2C2C2A] leading-relaxed">
                      Sankar Business Centre, No 96 to 102, Above Federal Bank, Pappanaickenpalayam, Coimbatore - 641037.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
