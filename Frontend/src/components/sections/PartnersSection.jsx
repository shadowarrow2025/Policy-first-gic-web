import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ScrollReveal } from '../common/ScrollReveal';

// Import all partner company logos
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
import manipalImg from '../../assets/Companies logo/manipal.png';
import nationalImg from '../../assets/Companies logo/national.png';
import naviImg from '../../assets/Companies logo/navi.png';
import newIndiaImg from '../../assets/Companies logo/new-india.png';
import nivaImg from '../../assets/Companies logo/niva.png';
import orientalImg from '../../assets/Companies logo/oriental.png';
import pnbImg from '../../assets/Companies logo/pnb.png';
import rahejaImg from '../../assets/Companies logo/raheja.png';
import sbiImg from '../../assets/Companies logo/sbi.png';
import sfImg from '../../assets/Companies logo/sf.png';
import shriramImg from '../../assets/Companies logo/shriram.png';
import starImg from '../../assets/Companies logo/star.png';
import tata2Img from '../../assets/Companies logo/tata-2.png';
import tataImg from '../../assets/Companies logo/tata.png';
import unitedIndiaImg from '../../assets/Companies logo/united-india.png';
import universalImg from '../../assets/Companies logo/universal.png';
import zunoImg from '../../assets/Companies logo/zuno.png';
import zurichImg from '../../assets/Companies logo/zurich.png';

const PARTNER_LOGOS = [
  { name: 'Aditya Birla Capital', logo: adityaHealthImg },
  { name: 'Aditya Birla Life', logo: adityaLifeImg },
  { name: 'Bajaj Allianz General', logo: bajajGendralImg },
  { name: 'Bajaj Allianz Life', logo: bajajLifeImg },
  { name: 'Acko Insurance', logo: ackoImg },
  { name: 'Care Health Insurance', logo: careImg },
  { name: 'Chola MS', logo: cholaImg },
  { name: 'Go Digit', logo: digitImg },
  { name: 'HDFC ERGO', logo: hdfcImg },
  { name: 'HDFC Life', logo: hdfcLifeImg },
  { name: 'ICICI Lombard', logo: icicLombardImg },
  { name: 'ICICI Prudential', logo: icicPresidantalImg },
  { name: 'IFFCO Tokio', logo: iffcoImg },
  { name: 'Tokio Marine', logo: tokioImg },
  { name: 'IndusInd Bank Insurance', logo: indusindImg },
  { name: 'Liberty General', logo: libertyImg },
  { name: 'Magma HDI', logo: magmaImg },
  { name: 'ManipalCigna', logo: manipalImg },
  { name: 'National Insurance', logo: nationalImg },
  { name: 'Navi General Insurance', logo: naviImg },
  { name: 'New India Assurance', logo: newIndiaImg },
  { name: 'Niva Bupa', logo: nivaImg },
  { name: 'Oriental Insurance', logo: orientalImg },
  { name: 'PNB MetLife', logo: pnbImg },
  { name: 'Raheja QBE', logo: rahejaImg },
  { name: 'SBI General', logo: sbiImg },
  { name: 'Sundaram Finance', logo: sfImg },
  { name: 'Shriram Insurance', logo: shriramImg },
  { name: 'Star Health Insurance', logo: starImg },
  { name: 'TATA AIG', logo: tataImg },
  { name: 'TATA Capital', logo: tata2Img },
  { name: 'United India Insurance', logo: unitedIndiaImg },
  { name: 'Universal Sompo', logo: universalImg },
  { name: 'Future Generali', logo: generaliImg },
  { name: 'Zuno General Insurance', logo: zunoImg },
  { name: 'Zurich Kotak Insurance', logo: zurichImg }
];

export const PartnersSection = () => {
  return (
    <section id="partners" className="py-20 bg-slate-50/70 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeader
            badge="TRUSTED PARTNERSHIPS"
            title="Our Partners"
            subtitle="We're associated with all major insurance companies"
          />
        </ScrollReveal>

        {/* Partners Logos Grid matching PolicyBazaar Reference Card Layout */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-5">
          {PARTNER_LOGOS.map((partner, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={100 + (idx % 6) * 50}>
              <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-center justify-center h-20 sm:h-24 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-[#082F61]/30 hover:scale-[1.03] transition-all duration-300 group">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  title={partner.name}
                  draggable={false}
                  className="max-h-10 sm:max-h-12 max-w-[85%] object-contain select-none pointer-events-none transition-all duration-300 md:filter md:grayscale md:opacity-70 md:group-hover:grayscale-0 md:group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
