import React from 'react';

export const Button = ({
  children,
  variant = 'primary', // primary | secondary | outline | ghost
  size = 'md',        // sm | md | lg
  icon: Icon = null,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer shadow-sm';
  
  const variants = {
    primary: 'bg-[#082F61] text-white hover:bg-[#041B3B] focus:ring-[#082F61] shadow-md hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-white text-[#082F61] border border-slate-200 hover:bg-slate-50 focus:ring-[#082F61] hover:border-[#082F61]',
    accent: 'bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500 shadow-md hover:-translate-y-0.5',
    outline: 'bg-transparent text-[#082F61] border-2 border-[#082F61] hover:bg-[#082F61] hover:text-white focus:ring-[#082F61]',
    ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 hover:text-[#082F61]',
    dark: 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold gap-2',
    lg: 'px-7 py-3.5 text-base font-bold gap-2.5'
  };

  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${widthStyle} ${disabledStyle} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />}
    </button>
  );
};
