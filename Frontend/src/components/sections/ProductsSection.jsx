import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { ProductCard } from '../common/ProductCard';
import { INSURANCE_PRODUCTS } from '../../data/products';
import { ScrollReveal } from '../common/ScrollReveal';

export const ProductsSection = ({ onOpenQuoteModal }) => {
  return (
    <section id="products" className="pt-6 pb-16 sm:pt-8 sm:pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up" delay={100}>
          <SectionHeader
            badge="Our Products"
            title="Protection for Every Part of Your Life"
            subtitle="Comprehensive insurance policies engineered to safeguard your vehicles, personal health, and business assets."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSURANCE_PRODUCTS.map((product, idx) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={100 + (idx % 3) * 120}>
              <ProductCard
                product={product}
                onSelectQuote={onOpenQuoteModal}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
