import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { INSURANCE_PRODUCTS } from '../../data/products';
import { Bike, Car, Truck, HeartHandshake, HeartPulse, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

// Import Showcase Category Images
import twoWheelerImg from '../../assets/showcase/Two wheeler.png';
import carImg from '../../assets/showcase/car.png';
import commercialImg from '../../assets/showcase/Commerical.png';
import healthImg from '../../assets/showcase/health.png';
import lifeImg from '../../assets/showcase/life insurance.png';

const ICON_MAP = {
  Bike: Bike,
  Car: Car,
  Truck: Truck,
  ShieldHeart: HeartHandshake,
  HeartPulse: HeartPulse
};

const SHOWCASE_IMAGES = {
  'two-wheeler': twoWheelerImg,
  'car': carImg,
  'commercial': commercialImg,
  'health': healthImg,
  'life': lifeImg
};

export const CategoryShowcaseSection = ({ onOpenQuoteModal, selectedCategory, setSelectedCategory }) => {
  const [activeTab, setActiveTab] = useState(selectedCategory || 'two-wheeler');

  const categoryIds = INSURANCE_PRODUCTS.map(p => p.id);
  const currentIndex = categoryIds.indexOf(activeTab);

  const currentProduct = INSURANCE_PRODUCTS.find(p => p.id === activeTab) || INSURANCE_PRODUCTS[0];
  const currentImage = SHOWCASE_IMAGES[currentProduct.id] || twoWheelerImg;

  const isTwoWheeler = currentProduct.id === 'two-wheeler';
  const needsWaveBg = currentProduct.id === 'health' || currentProduct.id === 'life';

  const handleTabChange = (catId) => {
    setActiveTab(catId);
    if (setSelectedCategory) setSelectedCategory(catId);
  };

  const handlePrevCategory = () => {
    const prevIndex = (currentIndex - 1 + categoryIds.length) % categoryIds.length;
    handleTabChange(categoryIds[prevIndex]);
  };

  const handleNextCategory = () => {
    const nextIndex = (currentIndex + 1) % categoryIds.length;
    handleTabChange(categoryIds[nextIndex]);
  };

  // Auto-swipe category card every 10 seconds (10000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextCategory();
    }, 10000);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section id="showcase" className="py-20 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeader
            badge="Deep Dive Showcase"
            title="Explore Coverage Options by Category"
            subtitle="Click any category below to inspect comprehensive policy benefits, claim settlement specs, and key features."
          />
        </ScrollReveal>

        {/* MOBILE VIEW ONLY: Single Centered Active Category Button with Left & Right Arrows */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="mt-8 flex sm:hidden items-center justify-center gap-6">
            
            {/* Left Arrow Button */}
            <button
              onClick={handlePrevCategory}
              title="Previous Category"
              aria-label="Previous Category"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md text-[#082F61] flex items-center justify-center hover:bg-[#082F61] hover:text-white transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Centered Active Category Icon Button & Label */}
            {(() => {
              const TabIcon = ICON_MAP[currentProduct.iconName] || Bike;
              return (
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-16 h-16 rounded-full bg-white flex items-center justify-center border-2 border-[#082F61] shadow-lg shadow-[#082F61]/15 ring-4 ring-[#082F61]/10 scale-105"
                  >
                    <TabIcon className="w-8 h-8 text-[#082F61]" />
                  </div>
                  <span className="text-xs font-bold tracking-tight text-[#082F61] whitespace-nowrap">
                    {currentProduct.shortTitle || currentProduct.name}
                  </span>
                </div>
              );
            })()}

            {/* Right Arrow Button */}
            <button
              onClick={handleNextCategory}
              title="Next Category"
              aria-label="Next Category"
              className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md text-[#082F61] flex items-center justify-center hover:bg-[#082F61] hover:text-white transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>
        </ScrollReveal>

        {/* DESKTOP/TABLET VIEW ONLY: All 5 Category Navigation Round Buttons */}
        <ScrollReveal animation="fade-up" delay={150}>
          <div className="mt-10 hidden sm:flex items-center justify-center gap-6 sm:gap-10">
            {INSURANCE_PRODUCTS.map((product) => {
              const TabIcon = ICON_MAP[product.iconName] || Bike;
              const isActive = activeTab === product.id;

              return (
                <div key={product.id} className="flex flex-col items-center gap-2.5">
                  <button
                    onClick={() => handleTabChange(product.id)}
                    title={product.name}
                    aria-label={product.name}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center transition-all duration-300 cursor-pointer border-2 ${
                      isActive
                        ? 'border-[#082F61] shadow-lg shadow-[#082F61]/15 scale-105 ring-4 ring-[#082F61]/10'
                        : 'border-slate-200 hover:border-[#082F61]/50 hover:scale-105'
                    }`}
                  >
                    <TabIcon className="w-7 h-7 sm:w-9 sm:h-9 text-[#082F61]" />
                  </button>

                  {/* Category Title Below Round Button */}
                  <span className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                    isActive ? 'text-[#082F61]' : 'text-slate-600'
                  }`}>
                    {product.shortTitle || product.name}
                  </span>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Showcase Detail Panel with Left & Right Navigational Arrows */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="relative mt-12">
            
            {/* Left Navigational Arrow Button (Desktop Side Arrow) */}
            <button
              onClick={handlePrevCategory}
              title="Previous Category"
              aria-label="Previous Category"
              className="hidden sm:flex absolute -left-5 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-200 shadow-xl text-[#082F61] items-center justify-center hover:bg-[#082F61] hover:text-white hover:border-[#082F61] transition-all duration-300 cursor-pointer active:scale-90"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Right Navigational Arrow Button (Desktop Side Arrow) */}
            <button
              onClick={handleNextCategory}
              title="Next Category"
              aria-label="Next Category"
              className="hidden sm:flex absolute -right-5 sm:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white border border-slate-200 shadow-xl text-[#082F61] items-center justify-center hover:bg-[#082F61] hover:text-white hover:border-[#082F61] transition-all duration-300 cursor-pointer active:scale-90"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Main Showcase Card Container */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* LEFT CONTENT ONLY: Title, Specs, Coverage & Action Button */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Header Title & Tagline */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight">{currentProduct.name}</h3>
                    <p className="text-sm font-semibold text-[#082F61] tracking-wide mt-1">{currentProduct.tagline}</p>
                  </div>

                  {/* Overview Text */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {currentProduct.coverageDetails.overview}
                  </p>

                  {/* Clean Metrics Row */}
                  <div className="flex flex-wrap items-center gap-6 sm:gap-10 py-4 border-y border-slate-200/80">
                    {currentProduct.coverageDetails.highlights.map((h, i) => (
                      <div key={i}>
                        <p className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">{h.label}</p>
                        <p className="text-base sm:text-lg font-extrabold text-[#082F61] mt-0.5">{h.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Coverage List Points (Single Vertical Column List) */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      What is Covered in this Policy?
                    </h4>
                    <div className="space-y-2.5">
                      {currentProduct.coverageDetails.includes.map((inc, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                          <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Button Only (Extra Text Removed as requested) */}
                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="lg"
                      icon={ArrowRight}
                      iconPosition="right"
                      onClick={() => onOpenQuoteModal(currentProduct.id)}
                      className="w-full sm:w-auto"
                    >
                      Get {currentProduct.shortTitle} Quote
                    </Button>
                  </div>

                </div>

                {/* RIGHT VISUAL ONLY: Static Image (Wave Animation Removed) */}
                <div className="lg:col-span-5 flex items-center justify-center p-2 relative">
                  
                  {/* Soft Blue Wave Graphic Backdrop specifically for Health & Life insurance */}
                  {needsWaveBg && (
                    <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none overflow-hidden">
                      <div className="w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-200/60 via-sky-100/70 to-blue-50/40 rounded-full blur-3xl" />
                      <svg className="absolute w-[110%] h-[110%] text-blue-100/70 opacity-90 -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.1,73.1,41.8C64.8,54.5,53.8,65.3,40.6,72.7C27.4,80.1,13.7,84,0.1,83.9C-13.6,83.7,-27.1,79.5,-39.8,72.4C-52.4,65.2,-64.1,55.1,-72.4,42.4C-80.7,29.7,-85.5,14.8,-86,-0.3C-86.4,-15.3,-82.5,-30.7,-74.2,-43.4C-65.9,-56,-53.2,-66,-39.5,-73.4C-25.8,-80.9,-12.9,-85.8,1,-87.5C14.9,-89.2,29.8,-87.6,44.7,-76.4Z" transform="translate(100 100)" />
                      </svg>
                    </div>
                  )}

                  <img
                    key={currentProduct.id}
                    src={currentImage}
                    alt={currentProduct.name}
                    draggable="false"
                    className={`w-full h-auto object-contain select-none pointer-events-none transition-all duration-300 drop-shadow-xl ${
                      isTwoWheeler
                        ? 'max-w-[540px] sm:max-w-[620px] scale-110 sm:scale-125'
                        : 'max-w-[460px] sm:max-w-[500px]'
                    }`}
                  />
                </div>

              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
