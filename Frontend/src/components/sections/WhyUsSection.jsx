import React, { useState, useRef, useEffect } from 'react';
import { WHY_US_FEATURES } from '../../data/whyUs';
import { Zap, UserCheck, Headphones, Heart, ShieldCheck, FileCheck, Award, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

const ICON_MAP = {
  Zap: Zap,
  UserCheck: UserCheck,
  Headphones: Headphones,
  Heart: Heart,
  ShieldCheck: ShieldCheck,
  FileCheck: FileCheck,
  Award: Award,
  Clock: Clock
};

export const WhyUsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef(0);
  const total = WHY_US_FEATURES.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // 5-Second Auto-play timer (pauses on hover or drag)
  useEffect(() => {
    if (isHovered || isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, isDragging, currentIndex]);

  // Drag & Swipe Handlers
  const handleMouseDown = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.clientX;
    dragOffsetRef.current = 0;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const diff = e.clientX - startXRef.current;
    dragOffsetRef.current = diff;
    setDragOffset(diff);
  };

  const handleMouseUpOrLeave = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const diff = dragOffsetRef.current;
    setDragOffset(0);

    if (diff < -45) {
      handleNext();
    } else if (diff > 45) {
      handlePrev();
    }
  };

  const handleTouchStart = (e) => {
    isDraggingRef.current = true;
    setIsDragging(true);
    startXRef.current = e.touches[0].clientX;
    dragOffsetRef.current = 0;
  };

  const handleTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const diff = e.touches[0].clientX - startXRef.current;
    dragOffsetRef.current = diff;
    setDragOffset(diff);
  };

  // Circular offset distance calculation [-3, -2, -1, 0, 1, 2, 3, 4]
  const getOffset = (index) => {
    let diff = (index - currentIndex) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <section 
      id="why-us" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUpOrLeave();
      }}
      className="pt-20 pb-28 bg-gradient-to-b from-[#DCFCE7]/90 via-[#F0FDF4]/85 to-transparent relative overflow-hidden select-none"
    >
      {/* Atmospheric Smoky Glowing Ambient Mist */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-emerald-300/35 via-teal-200/20 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Multi-layered Organic Smoke Fog Transition at Bottom */}
      <div className="absolute -bottom-6 inset-x-0 h-44 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent blur-lg pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-slate-50 via-slate-50/60 to-transparent pointer-events-none z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#041B3B]/10 text-[#041B3B] border border-[#041B3B]/20 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm backdrop-blur-sm">
              <span>THE TRUST ADVANTAGE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#2C2C2A] leading-tight">
              Insurance Made Personal
            </h2>

            <p className="mt-3.5 text-base sm:text-lg text-[#3D4A44] leading-relaxed max-w-2xl font-medium">
              Tailored Plans, Fast Claims, And Round-The-Clock Care Built To Fit Your Lifestyle And Peace Of Mind.
            </p>
          </div>
        </ScrollReveal>

        {/* 3D Circular Floating Center Stage Container (Wide / Landscape Card Proportions) */}
        <div 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUpOrLeave}
          className="relative w-full h-[360px] sm:h-[390px] lg:h-[410px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        >
          {WHY_US_FEATURES.map((feature, idx) => {
            const IconComponent = ICON_MAP[feature.iconName] || ShieldCheck;
            const offset = getOffset(idx);
            const isCenter = offset === 0;
            const isNear = Math.abs(offset) === 1;
            const isFar = Math.abs(offset) === 2;
            const isHidden = Math.abs(offset) > 2;

            // Step with generous distinct gap between cards
            const stepPx = typeof window !== 'undefined' 
              ? (window.innerWidth < 640 ? 330 : window.innerWidth < 1024 ? 390 : 450)
              : 450;

            const translateX = offset * stepPx + dragOffset;

            // 3D Transforms
            let translateY = 28;
            let scale = 0.88;
            let opacity = 0.35;
            let zIndex = 10;

            if (isCenter) {
              translateY = -18;
              scale = 1.04;
              opacity = 1;
              zIndex = 30;
            } else if (isNear) {
              translateY = 16;
              scale = 0.94;
              opacity = 0.85;
              zIndex = 20;
            } else if (isFar) {
              translateY = 28;
              scale = 0.88;
              opacity = 0.45;
              zIndex = 10;
            } else {
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={idx}
                onClick={() => {
                  if (!isDragging && offset !== 0) {
                    setCurrentIndex(idx);
                  }
                }}
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                  opacity: isHidden ? 0 : opacity,
                  zIndex: zIndex,
                  transition: isDragging ? 'none' : 'all 500ms cubic-bezier(0.2, 1, 0.3, 1)',
                  pointerEvents: isHidden ? 'none' : 'auto'
                }}
                className={`absolute w-[300px] sm:w-[360px] lg:w-[410px] h-[250px] sm:h-[270px] lg:h-[285px] rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center justify-center cursor-pointer ${
                  isCenter
                    ? 'bg-white shadow-[0_20px_50px_rgba(0,100,47,0.14)] border border-[#00642F]/30 ring-2 ring-emerald-500/15'
                    : isNear
                      ? 'bg-white/95 shadow-md border border-emerald-100 hover:opacity-100 hover:scale-[0.96]'
                      : 'bg-white/70 shadow-none border border-slate-200/50'
                }`}
              >
                {/* Circular Icon Badge */}
                <div className={`rounded-full flex items-center justify-center mb-3 sm:mb-4 transition-all duration-300 shadow-sm ${
                  isCenter
                    ? 'w-14 h-14 bg-[#00642F] text-white border-2 border-[#00642F] scale-105 shadow-emerald-900/15'
                    : 'w-12 h-12 bg-[#E6FFE4] text-[#00642F] border border-[#00642F]/20'
                }`}>
                  <IconComponent className={isCenter ? 'w-7 h-7' : 'w-5 h-5'} />
                </div>

                {/* Card Title */}
                <h3 className={`font-bold mb-2 transition-colors ${
                  isCenter
                    ? 'text-xl sm:text-2xl text-[#00642F]'
                    : 'text-base sm:text-lg font-semibold text-[#2C2C2A]'
                }`}>
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className={`leading-relaxed transition-colors max-w-sm ${
                  isCenter
                    ? 'text-xs sm:text-sm text-[#3D4A44] font-medium line-clamp-2'
                    : 'text-xs text-slate-500 line-clamp-2'
                }`}>
                  {feature.description}
                </p>

                {/* Active Indicator Line on Center Card */}
                {isCenter && (
                  <div className="w-10 h-1 bg-[#00642F] rounded-full mt-3 animate-pulse" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-4 relative z-30">
          {/* Left Scroll Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#00642F]/30 bg-white/90 backdrop-blur-sm text-[#00642F] hover:bg-[#041B3B] hover:text-white hover:border-[#041B3B] flex items-center justify-center transition-all duration-200 shadow-md active:scale-90 cursor-pointer"
            aria-label="Previous Advantage"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Scroll Arrow */}
          <button
            type="button"
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#00642F]/30 bg-white/90 backdrop-blur-sm text-[#00642F] hover:bg-[#041B3B] hover:text-white hover:border-[#041B3B] flex items-center justify-center transition-all duration-200 shadow-md active:scale-90 cursor-pointer"
            aria-label="Next Advantage"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
