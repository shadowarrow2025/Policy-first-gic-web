import React, { useState } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Button } from '../common/Button';
import { INSURANCE_PRODUCTS } from '../../data/products';
import { CheckCircle2, ArrowRight, ShieldCheck, PhoneCall, User, Mail, FileText, Check } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';

export const QuickQuoteSection = ({ initialCategory = 'two-wheeler' }) => {
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(initialCategory);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    registrationNumber: '',
    pincode: '641037'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const selectedProductObj = INSURANCE_PRODUCTS.find(p => p.id === selectedProduct) || INSURANCE_PRODUCTS[0];

  return (
    <section id="quote-calculator" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="Interactive Calculator"
          title="Get the Right Protection in Minutes"
          subtitle="Follow our quick 3-step guided flow to calculate premium estimates and request an instant advisor call back."
        />

        <div className="mt-12 max-w-4xl mx-auto bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-trust">
          
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-200">
            {[
              { num: 1, label: 'Select Insurance' },
              { num: 2, label: 'Enter Details' },
              { num: 3, label: 'Get Quote' }
            ].map((s) => (
              <div key={s.num} className="flex items-center gap-2">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  submitted
                    ? 'bg-emerald-600 text-white'
                    : step === s.num
                    ? 'bg-[#082F61] text-white shadow-md'
                    : step > s.num
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}>
                  {step > s.num || submitted ? <Check className="w-5 h-5" /> : s.num}
                </div>
                <span className={`text-xs sm:text-sm font-semibold hidden sm:inline ${
                  step === s.num ? 'text-[#082F61]' : 'text-slate-500'
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {!submitted ? (
            <form onSubmit={handleNextStep}>
              {/* STEP 1: Select Insurance Category */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h3 className="text-lg font-bold text-slate-900">Step 1: Choose Insurance Category</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {INSURANCE_PRODUCTS.map((p) => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setSelectedProduct(p.id)}
                        className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                          selectedProduct === p.id
                            ? 'bg-[#082F61] text-white border-[#082F61] shadow-md'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-[#082F61]'
                        }`}
                      >
                        <div>
                          <p className="font-bold text-sm">{p.name}</p>
                          <p className={`text-xs mt-1 ${selectedProduct === p.id ? 'text-blue-100' : 'text-slate-500'}`}>
                            {p.shortTitle} Plan
                          </p>
                        </div>
                        {selectedProduct === p.id && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <Button type="button" onClick={() => setStep(2)} icon={ArrowRight} iconPosition="right">
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2: Basic Contact & Vehicle Info */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h3 className="text-lg font-bold text-slate-900">
                    Step 2: Enter Basic Details for <span className="text-[#082F61]">{selectedProductObj.name}</span>
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#082F61]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98434 XXXXX"
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#082F61]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.name@gmail.com"
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#082F61]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Vehicle No / Policy Info (Optional)
                      </label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                        <input
                          type="text"
                          name="registrationNumber"
                          value={formData.registrationNumber}
                          onChange={handleInputChange}
                          placeholder="TN 37 XX XXXX"
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#082F61]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="button" onClick={() => setStep(3)} icon={ArrowRight} iconPosition="right">
                      Review Quote
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: Quote Preview & Submission */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <h3 className="text-lg font-bold text-slate-900">Step 3: Quote Summary & Advisor Request</h3>

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs text-slate-500 font-medium">Category</span>
                      <span className="text-sm font-bold text-[#082F61]">{selectedProductObj.name}</span>
                    </div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <span className="text-xs text-slate-500 font-medium">Customer</span>
                      <span className="text-sm font-semibold text-slate-800">{formData.fullName || 'Valued Customer'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Phone</span>
                      <span className="text-sm font-bold text-emerald-700">{formData.phone || CONTACT_INFO.primaryPhone}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#082F61] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">
                      By submitting, your request will be prioritized by our Coimbatore senior insurance manager. You will receive customized quote comparisons via call/WhatsApp shortly.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                      Back
                    </Button>
                    <Button type="submit" variant="accent" icon={CheckCircle2} iconPosition="left">
                      Submit Quote Request
                    </Button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* SUBMITTED SUCCESS VIEW */
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Quote Request Submitted!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you <strong className="text-slate-900">{formData.fullName || 'there'}</strong>! Our Trust Insurance expert will review your request for <strong>{selectedProductObj.name}</strong> and call you back shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${CONTACT_INFO.primaryPhone}`}
                  className="px-6 py-2.5 rounded-xl bg-[#082F61] text-white text-xs font-bold hover:bg-[#0C438A]"
                >
                  Call Directly: {CONTACT_INFO.primaryPhone}
                </a>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                >
                  Calculate Another Quote
                </Button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
