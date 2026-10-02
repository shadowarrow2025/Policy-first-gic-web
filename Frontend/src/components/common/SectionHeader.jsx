import React from 'react';

export const SectionHeader = ({
  badge = null,
  title,
  subtitle = null,
  align = 'center', // left | center | right
  dark = false,
  className = ''
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignment[align]} ${className}`}>
      {badge && (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
          dark ? 'bg-red-500/20 text-red-200 border border-red-400/30' : 'bg-[#041B3B]/10 text-[#041B3B] border border-[#041B3B]/20'
        }`}>
          {badge}
        </span>
      )}
      
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${
        dark ? 'text-white' : 'text-[#2C2C2A]'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${
          dark ? 'text-red-100/80' : 'text-[#3D4A44]'
        }`}>
          {subtitle}
        </p>
      )}

      {align === 'center' && (
        <div className="w-16 h-1 bg-[#E22419] rounded-full mt-4 opacity-90" />
      )}
    </div>
  );
};
