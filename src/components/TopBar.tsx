import React from 'react';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#B3D9FF] text-[#0B2E59] text-xs sm:text-sm py-2 px-4 border-b border-[#1F5FBF]/30 relative z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start">
          <a 
            href={`tel:${COMPANY_INFO.phoneFormatted}`} 
            className="flex items-center gap-2 text-[#0B2E59] hover:text-[#1F5FBF] transition-colors group font-bold"
            id="topbar-phone-link"
          >
            <span className="p-1 rounded-full bg-[#0B2E59]/10 group-hover:bg-[#0B2E59]/20 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#0B2E59]" />
            </span>
            <span className="font-extrabold tracking-wide">{COMPANY_INFO.phone}</span>
          </a>

          <div className="flex items-center gap-2 text-[#0B2E59] font-semibold">
            <span className="p-1 rounded-full bg-[#0B2E59]/10">
              <MapPin className="w-3.5 h-3.5 text-[#0B2E59]" />
            </span>
            <span>{COMPANY_INFO.location}</span>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};
