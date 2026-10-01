import React, { useState } from 'react';
import { PhoneCall, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '../../config/contact';

export const TopBar = () => {
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);

  return (
    <div className="bg-[#041B3B] text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="truncate max-w-xs xl:max-w-md">Pappanaickenpalayam, Coimbatore</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>{CONTACT_INFO.workingHours}</span>
          </div>
        </div>

        {/* Right: Phone Numbers & Email */}
        <div className="flex items-center gap-6">
          {/* Email Link */}
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>{CONTACT_INFO.email}</span>
          </a>

          {/* Multiple Phone Numbers Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
              onMouseEnter={() => setShowPhoneDropdown(true)}
              className="flex items-center gap-1.5 bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30 hover:bg-blue-500/30 transition-all cursor-pointer font-medium"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>Get Free Quote: {CONTACT_INFO.primaryPhone}</span>
              <ChevronDown className="w-3 h-3 text-blue-300 ml-0.5" />
            </button>

            {showPhoneDropdown && (
              <div 
                onMouseLeave={() => setShowPhoneDropdown(false)}
                className="absolute right-0 mt-1 w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
              >
                <div className="px-3 py-1.5 text-[11px] font-bold text-[#082F61] uppercase tracking-wider border-b border-slate-100">
                  Direct Line Contacts
                </div>
                <div className="py-1 space-y-1">
                  {CONTACT_INFO.phones.map((phone, idx) => (
                    <a
                      key={idx}
                      href={`tel:${phone.raw}`}
                      className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-700">{phone.label}</span>
                      <span className="text-xs font-bold text-[#082F61]">{phone.number}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
