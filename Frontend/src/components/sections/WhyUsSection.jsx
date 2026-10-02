import React, { useState, useRef, useEffect, useCallback } from 'react';
import { WHY_US_FEATURES } from '../../data/whyUs';
import { 
  Users, 
  TrendingUp, 
  Car, 
  Truck, 
  Bike, 
  Headphones, 
  ShieldCheck, 
  Award, 
  UserCheck,
  ArrowRight,
  Shield
} from 'lucide-react';
import { ScrollReveal } from '../common/ScrollReveal';

const ICON_MAP = {
  ShieldUsers: () => (
    <div className="relative inline-flex items-center justify-center">
      <Shield className="w-10 h-10 text-[#E22419] stroke-[1.9] fill-[#E22419]/10" />
      <Users className="w-5 h-5 text-[#E22419] absolute stroke-[2.2]" />
    </div>
  ),
  TrendingUp: () => <TrendingUp className="w-10 h-10 text-[#E22419] stroke-[2.2]" />,
  Car: () => <Car className="w-10 h-10 text-[#E22419] stroke-[2.2]" />,
  Truck: () => <Truck className="w-10 h-10 text-[#E22419] stroke-[2.2]" />,
  Bike: () => <Bike className="w-10 h-10 text-[#E22419] stroke-[2.2]" />,
  Headphones: () => <Headphones className="w-10 h-10 text-[#E22419] stroke-[2.2]" />,
  ShieldCheck: () => <ShieldCheck className="w-10 h-10 text-[#E22419] stroke-[2.2]" />,
  Award: () => <Award className="w-10 h-10 text-[#E22419] stroke-[2.2]" />,
  UserCheck: () => <UserCheck className="w-10 h-10 text-[#E22419] stroke-[2.2]" />
};

export const WhyUsSection = ({ onOpenQuoteModal }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const startXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragOffsetRef = useRef(0);

  const totalPages = 3;
  const cardsPerPage = 3;

  const handleNext = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const handlePrev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // 4.5-Second Auto-play continuous loop (pauses when hovered or dragged)
  useEffect(() => {
    if (isHovered || isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, isDragging, handleNext]);

  // Mouse Drag Handlers
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

    if (diff < -60) {
      handleNext();
    } else if (diff > 60) {
      handlePrev();
    }
  };

  // Touch Swipe Handlers for Mobile / Tablet
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

  const handleCardClick = (category) => {
    if (onOpenQuoteModal) {
      onOpenQuoteModal(category);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Chunk 9 features into exactly 3 pages with 3 cards each
  const pages = [
    WHY_US_FEATURES.slice(0, 3),
    WHY_US_FEATURES.slice(3, 6),
    WHY_US_FEATURES.slice(6, 9)
  ];

  return (
    <section 
      id="why-us" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUpOrLeave();
      }}
      className="py-16 sm:py-20 lg:py-24 bg-[#E22419] text-white relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Matching AssureBharat Clean Title & Subtitle */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Insurance plans tailored for your needs
            </h2>
            <p className="mt-3.5 text-sm sm:text-base lg:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
              Compare, choose, and secure the right coverage with expert-backed guidance.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Viewport Container */}
        <div 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUpOrLeave}
          className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing pb-2"
        >
          {/* Slider Horizontal Track (3 full-width pages) */}
          <div 
            className="flex"
            style={{
              transform: `translateX(calc(-${(currentPage * 100) / totalPages}% + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)',
              width: `${totalPages * 100}%`
            }}
          >
            {pages.map((pageFeatures, pageIdx) => (
              <div 
                key={pageIdx}
                style={{ width: `${100 / totalPages}%` }}
                className="w-full shrink-0 px-2 sm:px-3"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
                  {pageFeatures.map((feature) => {
                    const IconComp = ICON_MAP[feature.iconName] || ShieldCheck;
                    
                    return (
                      <div 
                        key={feature.id}
                        onClick={() => handleCardClick(feature.category)}
                        className="group bg-white rounded-3xl sm:rounded-[28px] p-7 sm:p-8 h-[290px] sm:h-[320px] lg:h-[330px] flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-white/20"
                      >
                        {/* Top Left Icon */}
                        <div className="pt-1 flex items-center">
                          <IconComp />
                        </div>

                        {/* Bottom Content: Title, Description & Learn More */}
                        <div className="mt-auto space-y-2">
                          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#E22419] transition-colors">
                            {feature.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                            {feature.description}
                          </p>

                          <div className="pt-2 flex items-center">
                            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#E22419] group-hover:gap-2.5 transition-all">
                              <span>Learn More</span>
                              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Exactly 3 Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
          {Array.from({ length: totalPages }).map((_, dotIdx) => {
            const isActive = dotIdx === currentPage;
            return (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentPage(dotIdx)}
                aria-label={`Go to page ${dotIdx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'w-7 sm:w-9 bg-white shadow-md' 
                    : 'w-2.5 bg-white/40 hover:bg-white/70'
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
