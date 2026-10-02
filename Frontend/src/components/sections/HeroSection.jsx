import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';
import { ScrollReveal } from '../common/ScrollReveal';
import heroImg from '../../assets/images/hero-img.png';

// Import all partner company logos for the marquee ticker
import generaliImg from '../../assets/Companies logo/Generali.png';
import hdfcImg from '../../assets/Companies logo/HDFC.png';
import iffcoImg from '../../assets/Companies logo/IFFCO.png';
import magmaImg from '../../assets/Companies logo/Magma.png';
import tokioImg from '../../assets/Companies logo/Tokio.png';
import ackoImg from '../../assets/Companies logo/acko.png';
import adityaHealthImg from '../../assets/Companies logo/aditya-health.png';
import adityaLifeImg from '../../assets/Companies logo/aditya-life.png';
import bajajGendralImg from '../../assets/Companies logo/bajaj-gendral.png';
import bajajLifeImg from '../../assets/Companies logo/bajaj-life.png';
import careImg from '../../assets/Companies logo/care.png';
import cholaImg from '../../assets/Companies logo/chola.png';
import digitImg from '../../assets/Companies logo/digit.png';
import hdfcLifeImg from '../../assets/Companies logo/hdfc-life.png';
import icicLombardImg from '../../assets/Companies logo/icic-lombard.png';
import icicPresidantalImg from '../../assets/Companies logo/icic-presidantal.png';
import indusindImg from '../../assets/Companies logo/indusind.png';
import libertyImg from '../../assets/Companies logo/liberty.png';
import magmaImg2 from '../../assets/Companies logo/Magma.png';
import nationalImg from '../../assets/Companies logo/national.png';
import naviImg from '../../assets/Companies logo/navi.png';
import newIndiaImg from '../../assets/Companies logo/new-india.png';
import nivaImg from '../../assets/Companies logo/niva.png';
import orientalImg from '../../assets/Companies logo/oriental.png';
import pnbImg from '../../assets/Companies logo/pnb.png';
import sbiImg from '../../assets/Companies logo/sbi.png';
import starImg from '../../assets/Companies logo/star.png';
import tataImg from '../../assets/Companies logo/tata.png';
import unitedIndiaImg from '../../assets/Companies logo/united-india.png';
import universalImg from '../../assets/Companies logo/universal.png';
import zunoImg from '../../assets/Companies logo/zuno.png';

const PARTNER_LOGOS = [
  { name: 'HDFC ERGO', logo: hdfcImg },
  { name: 'TATA AIG', logo: tataImg },
  { name: 'ICICI Lombard', logo: icicLombardImg },
  { name: 'Bajaj Allianz General', logo: bajajGendralImg },
  { name: 'Star Health Insurance', logo: starImg },
  { name: 'Acko Insurance', logo: ackoImg },
  { name: 'Go Digit', logo: digitImg },
  { name: 'SBI General', logo: sbiImg },
  { name: 'Care Health', logo: careImg },
  { name: 'Niva Bupa', logo: nivaImg },
  { name: 'IFFCO Tokio', logo: iffcoImg },
  { name: 'New India Assurance', logo: newIndiaImg },
  { name: 'United India', logo: unitedIndiaImg },
  { name: 'Oriental Insurance', logo: orientalImg },
  { name: 'National Insurance', logo: nationalImg },
  { name: 'Chola MS', logo: cholaImg },
  { name: 'Aditya Birla Health', logo: adityaHealthImg },
  { name: 'HDFC Life', logo: hdfcLifeImg },
  { name: 'ICICI Prudential', logo: icicPresidantalImg },
  { name: 'Bajaj Allianz Life', logo: bajajLifeImg },
  { name: 'PNB MetLife', logo: pnbImg },
  { name: 'Navi General', logo: naviImg },
  { name: 'Liberty General', logo: libertyImg },
  { name: 'Future Generali', logo: generaliImg },
  { name: 'Zuno Insurance', logo: zunoImg }
];

export const HeroSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="relative bg-white text-slate-800 overflow-hidden pt-4 sm:pt-6">

      {/* Background Soft Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-100/35 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ======= SIDE BY SIDE: Text Left | Graphic & Floating Badges Right ======= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

          {/* LEFT: Text Content (5 cols) */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <ScrollReveal animation="fade-right" delay={100}>

              {/* Main Headline with standard brand font hierarchy */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2C2C2A] leading-[1.18]">
                Drive Today, <br />
                Worry Less with <br />
                <span className="inline-block mt-2 bg-[#E22419] text-white px-3.5 sm:px-4 py-1 rounded-xl text-[0.88em] shadow-md shadow-[#E22419]/20 font-bold">
                  Trusted Car Insurance
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-[#3D4A44] leading-relaxed max-w-lg mx-auto lg:mx-0 mt-3.5 font-medium">
                Complete protection for you, your car and the journey ahead.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#E22419] hover:bg-[#B91C1C] text-white font-bold text-sm sm:text-base shadow-md shadow-[#E22419]/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                <a
                  href={`tel:${CONTACT_INFO.primaryPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#E22419] border-2 border-[#E22419] text-[#E22419] hover:text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  <span>Talk to an Advisor</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: Hero Image (7 cols) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <ScrollReveal animation="fade-left" delay={200} className="w-full relative">
              
              {/* Central Large Car + Shield Illustration */}
              <div className="relative mx-auto w-full max-w-[760px] px-1 sm:px-4 py-2">
                <img
                  src={heroImg}
                  alt="Trusted Car Insurance - Policy First General Insurance"
                  className="w-full h-auto object-contain select-none filter drop-shadow-xl"
                  draggable={false}
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* ======= BOTTOM: Clean Floating Partners Marquee Ticker ======= */}
      <div className="border-t border-slate-100 bg-slate-50 py-7 sm:py-9 relative overflow-hidden group">
        
        {/* Header Label with proper breathing space */}
        <div className="max-w-7xl mx-auto px-4 text-center mb-6 sm:mb-7">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">
            Trusted by India's top insurance providers
          </p>
        </div>

        {/* Side Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none" />

        {/* Infinite Scrolling Track with Pure Clean Logos */}
        <div className="flex overflow-hidden relative">
          <div className="animate-marquee-right flex items-center gap-12 sm:gap-16 lg:gap-20 py-1.5 shrink-0">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center shrink-0 cursor-pointer group/logo transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  title={partner.name}
                  draggable={false}
                  className="h-7 sm:h-9 md:h-10 w-auto max-w-[130px] sm:max-w-[160px] object-contain select-none transition-all duration-300 grayscale-0 md:filter md:grayscale md:opacity-65 md:group-hover:grayscale-0 md:group-hover:opacity-100 group-hover/logo:scale-110 group-hover/logo:!grayscale-0 group-hover/logo:!opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

