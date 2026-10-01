import React, { useEffect, useRef, useState } from 'react';

export const ScrollReveal = ({
  children,
  animation = 'fade-up', // fade-up | fade-down | fade-left | fade-right | zoom-in
  delay = 0, // delay in ms
  duration = 600, // duration in ms
  threshold = 0.15,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const getAnimationStyles = () => {
    const baseStyle = {
      transitionProperty: 'opacity, transform',
      transitionDuration: `${duration}ms`,
      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: `${delay}ms`
    };

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyle, opacity: 0, transform: 'translateY(40px)' };
        case 'fade-down':
          return { ...baseStyle, opacity: 0, transform: 'translateY(-40px)' };
        case 'fade-left':
          return { ...baseStyle, opacity: 0, transform: 'translateX(40px)' };
        case 'fade-right':
          return { ...baseStyle, opacity: 0, transform: 'translateX(-40px)' };
        case 'zoom-in':
          return { ...baseStyle, opacity: 0, transform: 'scale(0.92)' };
        default:
          return { ...baseStyle, opacity: 0, transform: 'translateY(30px)' };
      }
    }

    return { ...baseStyle, opacity: 1, transform: 'translate(0) scale(1)' };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
};
