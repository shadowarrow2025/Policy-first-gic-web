import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import policyFirstLogo from '../../assets/policyfirstgic.jpeg';
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

          {/* Policy First General Insurance Logo */}
          <a href="#hero" className="flex items-center shrink-0 group py-0.5">
            <img
              src={policyFirstLogo}
              alt="Policy First General Insurance"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-transform group-hover:scale-105 rounded-lg"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-[#2B333B] hover:text-[#C81E27] hover:bg-red-50/60 rounded-lg transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            {/* Get Quote Button: Outline Style with Policy First Brand Red */}
            <Button
              variant="outline"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              onClick={() => onOpenQuoteModal()}
              className="whitespace-nowrap !border-[#C81E27] !text-[#C81E27] hover:!bg-[#C81E27] hover:!text-white hover:!border-[#C81E27] focus:!ring-[#C81E27]"
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
              className="sm:hidden !border-[#C81E27] !text-[#C81E27] hover:!bg-[#C81E27] hover:!text-white"
            >
              Quote
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#2B333B] hover:bg-red-50 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C81E27]" /> : <Menu className="w-6 h-6 text-[#2B333B]" />}
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
                className="block px-4 py-2.5 text-base font-semibold text-[#2B333B] hover:text-[#C81E27] hover:bg-red-50/60 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="text-xs font-bold text-[#C81E27] uppercase tracking-wider px-4">
              Direct Contact Lines
            </div>
            <div className="grid grid-cols-1 gap-2 px-2">
              {CONTACT_INFO.phones.map((phone, idx) => (
                <a
                  key={idx}
                  href={`tel:${phone.raw}`}
                  className="flex items-center justify-between p-3 bg-red-50/50 rounded-xl text-xs font-semibold text-[#2B333B] hover:bg-red-100/70 hover:text-[#C81E27] transition-colors"
                >
                  <span>{phone.label}</span>
                  <span className="font-bold text-[#C81E27]">{phone.number}</span>
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
              className="!border-[#C81E27] !text-[#C81E27] hover:!bg-[#C81E27] hover:!text-white"
            >
              Get a Free Quote Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
