import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/sections/HeroSection';

import { ProductsSection } from './components/sections/ProductsSection';
import { HowItWorksSection } from './components/sections/HowItWorksSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { StatsSection } from './components/sections/StatsSection';
import { CategoryShowcaseSection } from './components/sections/CategoryShowcaseSection';
import { ClaimsSupportSection } from './components/sections/ClaimsSupportSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { AboutUsSection } from './components/sections/AboutUsSection';
import { FAQSection } from './components/sections/FAQSection';
import { PartnersSection } from './components/sections/PartnersSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

import { CONTACT_INFO } from './config/contact';

export function App() {
  const [selectedShowcaseCategory, setSelectedShowcaseCategory] = useState('two-wheeler');

  const handleOpenQuoteModal = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, '')}`;
    }
  };

  const handleQuickSelectCategory = (categoryId) => {
    setSelectedShowcaseCategory(categoryId);
    // Smooth scroll to showcase or quote section
    const showcaseElem = document.getElementById('showcase');
    if (showcaseElem) {
      showcaseElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-[#E22419] selection:text-white">
      {/* 1. Main Navigation Bar */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 3. Hero Section */}
      <HeroSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 4. Insurance Products Cards */}
      <ProductsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 5. How It Works (01-02-03 Simple Process) */}
      <HowItWorksSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 6. Why Choose Trust Insurance */}
      <WhyUsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 7. Trust Statistics */}
      <StatsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 10. Interactive Category Showcase (Hidden as requested) */}
      {/* <CategoryShowcaseSection
        onOpenQuoteModal={handleOpenQuoteModal}
        selectedCategory={selectedShowcaseCategory}
        setSelectedCategory={setSelectedShowcaseCategory}
      /> */}

      {/* 11. Emergency Claims Support */}
      <ClaimsSupportSection onOpenClaimModal={() => handleOpenQuoteModal('car')} />

      {/* 12. Verified Customer Testimonials */}
      <TestimonialsSection />

      {/* 13. About Us */}
      <AboutUsSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 14. Our Partners Section */}
      <PartnersSection />

      {/* 15. Frequently Asked Questions */}
      <FAQSection />

      {/* 16. Contact Us Section */}
      <ContactSection />

      {/* 16. Comprehensive Footer */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />
    </div>
  );
}

export default App;
