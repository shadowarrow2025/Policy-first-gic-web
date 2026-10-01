import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import policyFirstLogo from '../../assets/images/Policy First Green Insurance Emblem.png';
import { CONTACT_INFO } from '../../config/contact';
import { Button } from '../common/Button';

export const Navbar = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Claims', href: '#claims' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Partners', href: '#partners' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'py-1.5 sm:py-2 shadow-md border-b border-slate-200/80' : 'py-2 sm:py-2.5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* Policy First Logo - Enlarged Size */}
          <a href="#hero" className="flex items-center shrink-0 group py-0.5">
            <img
              src={policyFirstLogo}
              alt="Policy First General Insurance"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-[#00642F] hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Get Quote Button: Same Outline Style with Green Brand Colors */}
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => onOpenQuoteModal()}
              className="whitespace-nowrap !border-[#00642F] !text-[#00642F] hover:!bg-[#00642F] hover:!text-white hover:!border-[#00642F] focus:!ring-[#00642F]"
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenQuoteModal()}
              className="sm:hidden !border-[#00642F] !text-[#00642F] hover:!bg-[#00642F] hover:!text-white"
            >
              Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#00642F] hover:bg-emerald-50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#00642F]" /> : <Menu className="w-6 h-6 text-[#00642F]" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-semibold text-[#00642F] hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="text-xs font-bold text-[#00642F] uppercase tracking-wider px-4">
              Direct Contact Lines
            </div>
            <div className="grid grid-cols-1 gap-2 px-2">
              {CONTACT_INFO.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.raw}`}
                  className="flex items-center justify-between p-3 bg-emerald-50/50 rounded-xl text-xs font-semibold text-[#00642F] hover:bg-emerald-100 hover:text-[#32CD32] transition-colors"
                >
                  <span>{phone.label}</span>
                  <span className="font-bold text-[#00642F]">{phone.number}</span>
                </a>
              ))}
            </div>

            <Button
              variant="outline"
              fullWidth
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="!border-[#00642F] !text-[#00642F] hover:!bg-[#00642F] hover:!text-white"
            >
              Get a Free Quote Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
