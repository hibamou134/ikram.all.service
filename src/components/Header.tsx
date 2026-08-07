import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
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
    { name: 'Accueil', href: '#accueil' },
    { name: 'À propos', href: '#a-propos' },
    { name: 'Services', href: '#services' },
    { name: 'Personnel', href: '#personnel' },
    { name: 'Pourquoi nous choisir', href: '#pourquoi-nous' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B2E59]/95 backdrop-blur-md shadow-xl py-3 border-b border-blue-900/50' 
          : 'bg-[#0B2E59] py-4 border-b border-blue-900/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-3 group" id="header-logo-link">
          <div className="w-11 h-11 rounded-xl bg-white/10 border border-blue-400/30 overflow-hidden flex items-center justify-center p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <img src={COMPANY_INFO.logo} alt={COMPANY_INFO.name} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-wide leading-tight group-hover:text-blue-200 transition-colors">
              IKRAM <span className="text-[#E5C158]">ALL SERVICE</span>
            </span>
            <span className="text-[10px] text-blue-200 uppercase tracking-widest font-medium">
              Nettoyage & Personnel • Marrakech
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-slate-100 hover:text-[#E5C158] hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1F5FBF] to-blue-600 hover:from-blue-600 hover:to-[#1F5FBF] text-white text-sm font-semibold rounded-xl shadow-md hover:shadow-blue-500/25 border border-blue-400/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            id="header-rendezvous-btn"
          >
            <Calendar className="w-4 h-4 text-[#E5C158]" />
            <span>Demander un rendez-vous</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white hover:bg-blue-800/50 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B2E59] border-t border-blue-900/60 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-100 hover:text-[#E5C158] hover:bg-blue-900/40 rounded-xl transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
            
            <div className="pt-4 mt-2 border-t border-blue-900/50 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#1F5FBF] text-white font-semibold rounded-xl shadow-lg border border-blue-400/30 active:scale-[0.98] transition-transform"
                id="mobile-menu-rendezvous-btn"
              >
                <Calendar className="w-4 h-4 text-[#E5C158]" />
                <span>Demander un rendez-vous</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
