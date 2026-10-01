import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { INSURANCE_PRODUCTS } from '../../data/products';
import { CONTACT_INFO } from '../../config/contact';
import { ShieldCheck, PhoneCall, CheckCircle2, User, Mail, FileText } from 'lucide-react';

export const QuoteModal = ({ isOpen, onClose, initialProduct = 'two-wheeler' }) => {
  const [product, setProduct] = useState(initialProduct);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedProdObj = INSURANCE_PRODUCTS.find(p => p.id === product) || INSURANCE_PRODUCTS[0];

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setSubmitted(false);
        onClose();
      }}
      title="Request Free Insurance Quote"
    >
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs text-slate-600">
            Select your insurance type and share your details to receive an instant premium quote call from our Coimbatore advisor.
          </p>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Insurance Category *
            </label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="w-full px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-[#082F61] focus:outline-none"
            >
              {INSURANCE_PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Anand Kumar"
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#082F61] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Mobile Number *
            </label>
            <div className="relative">
              <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98434 XXXXX"
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#082F61] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="anand@gmail.com"
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#082F61] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              Specific Requirements / Vehicle Info
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="e.g. Looking for Zero Dep cover for my sedan"
              className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-[#082F61] focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" fullWidth size="lg">
              Submit Request Now
            </Button>
          </div>

          <p className="text-[11px] text-slate-500 text-center">
            Or call directly: <strong className="text-[#082F61]">{CONTACT_INFO.primaryPhone}</strong>
          </p>
        </form>
      ) : (
        <div className="text-center py-6 space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900">Request Sent Successfully!</h4>
          <p className="text-xs text-slate-600">
            Our Senior Advisor for <strong>{selectedProdObj.name}</strong> will contact you at <strong>{formData.phone || CONTACT_INFO.primaryPhone}</strong> shortly.
          </p>
          <Button
            variant="secondary"
            fullWidth
            onClick={() => {
              setSubmitted(false);
              onClose();
            }}
          >
            Close Modal
          </Button>
        </div>
      )}
    </Modal>
  );
};
