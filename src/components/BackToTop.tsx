import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-2xl bg-[#0B2E59] hover:bg-[#1F5FBF] text-white flex items-center justify-center shadow-xl border border-blue-400/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      aria-label="Retour en haut de page"
      id="back-to-top-btn"
    >
      <ArrowUp className="w-5 h-5 text-[#E5C158]" />
    </button>
  );
};
