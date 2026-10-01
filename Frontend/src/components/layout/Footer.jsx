import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../../config/contact';
import { ArrowUp, CheckCircle2 } from 'lucide-react';
import policyFirstLogo from '../../assets/images/Policy First Green Insurance Emblem.png';

export const Footer = ({ onOpenQuoteModal }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#041B3B] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Subscription Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-slate-700/60">
          <div className="max-w-2xl space-y-2">
            <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Stay ahead with the latest insurance insights and expert protection tips. Join thousands of satisfied clients receiving our weekly updates on smarter coverage choices.
            </p>
          </div>

          {/* Newsletter Subscribe CTA Button Only */}
          <div className="shrink-0 w-full sm:w-auto">
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#24E778]/15 text-[#24E778] border border-[#24E778]/30 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleSubscribe}
                className="px-8 py-3.5 rounded-xl bg-[#00642F] hover:bg-[#004e24] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#00642F]/25 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
              >
                Subscribe Now
              </button>
            )}
          </div>
        </div>

        {/* Main 4-Column Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 py-12 border-b border-slate-800">
          
          {/* COLUMN 1: Clean Floating Logo (No Card Box), Brand Story & Social Media */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <img 
                src={policyFirstLogo} 
                alt="Policy First General Insurance"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain" 
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              At Policy First General Insurance, we're more than just an insurance provider - we're your dedicated protection partner. With a foundation built on trust and transparency, we deliver tailored insurance solutions that secure your future.
            </p>

            {/* Social Media SVG Icons */}
            <div className="pt-2 flex items-center gap-3 text-slate-300">
              {/* Instagram */}
              <a href="#hero" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00642F] hover:text-white flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#hero" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00642F] hover:text-white flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#hero" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00642F] hover:text-white flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#hero" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00642F] hover:text-white flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Services / Insurance Products */}
          <div>
            <h4 className="text-base font-bold text-[#24E778] tracking-tight mb-4">
              Insurance Products
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-normal text-slate-300">
              <li>
                <a href="#products" className="hover:text-[#24E778] transition-colors">
                  Two Wheeler Insurance
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#24E778] transition-colors">
                  Car Insurance
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#24E778] transition-colors">
                  Commercial Fleet Insurance
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#24E778] transition-colors">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#24E778] transition-colors">
                  Life Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Company */}
          <div>
            <h4 className="text-base font-bold text-[#24E778] tracking-tight mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-normal text-slate-300">
              <li>
                <a href="#about-us" className="hover:text-[#24E778] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-[#24E778] transition-colors">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#24E778] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#claims" className="hover:text-[#24E778] transition-colors">
                  Claims & Support Desk
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#24E778] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-[#24E778] tracking-tight mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-normal text-slate-300">
              <li>
                <a href="#hero" className="hover:text-[#24E778] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#24E778] transition-colors">
                  Products List
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#24E778] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#24E778] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#24E778] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Designer Attribution Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400 font-normal">
          <p>© 2026 Policy First General Insurance. All rights reserved.</p>
          <p className="text-center sm:text-right text-xs sm:text-sm text-slate-400">
            This Website is Designed & Developed By -{' '}
            <a
              href="https://shadowarrow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#24E778] hover:underline font-bold transition-colors inline-flex items-center gap-1"
            >
              <span>Shadow Arrow</span>
              <span role="img" aria-label="dart">🎯</span>
            </a>
          </p>
        </div>

      </div>

      {/* Floating Green Scroll-to-Top Button (Visible Only Upon Scroll > 400px) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          aria-label="Scroll to Top"
          className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-[#00642F] hover:bg-[#004e24] text-white border border-emerald-500/30 flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer active:scale-95 animate-in fade-in zoom-in-75 duration-200"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}
    </footer>
  );
};
