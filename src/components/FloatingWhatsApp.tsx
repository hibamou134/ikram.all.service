import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 group">
      {/* Floating Instagram Button */}
      <a
        href={COMPANY_INFO.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:opacity-90 text-white flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        aria-label="Suivre sur Instagram"
        id="floating-instagram-btn"
      >
        <Instagram className="w-6 h-6" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 relative group/wa cursor-pointer"
        aria-label="Contacter sur WhatsApp"
        id="floating-whatsapp-btn"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white animate-pulse" />
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
};

