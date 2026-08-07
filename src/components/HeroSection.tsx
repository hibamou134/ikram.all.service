import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Calendar, ShieldCheck, Star, MapPin, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import heroImg from '../assets/images/hero_cleaning_team_1785942124579.jpg';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="accueil" className="relative bg-gradient-to-b from-[#0B2E59] via-[#0E386B] to-[#0B2E59] text-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Decorative Glow Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#1F5FBF]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/60 border border-blue-400/30 text-xs sm:text-sm text-blue-200 backdrop-blur-md shadow-inner">
              <Award className="w-4 h-4 text-[#E5C158]" />
              <span className="font-semibold tracking-wide text-[#E5C158]">Leader du Nettoyage à Marrakech</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-200">7j/7</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15]">
              L'excellence au service de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-[#E5C158]">votre propreté</span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Entreprise spécialisée dans les services de nettoyage professionnel et le placement de personnel qualifié à <span className="text-[#E5C158] font-semibold">Marrakech et ses alentours</span>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                id="hero-whatsapp-btn"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Nous contacter sur WhatsApp</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#1F5FBF] to-blue-600 hover:from-blue-600 hover:to-[#1F5FBF] text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-blue-500/30 border border-blue-400/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                id="hero-rendezvous-btn"
              >
                <Calendar className="w-5 h-5 text-[#E5C158]" />
                <span>Demander un rendez-vous</span>
              </button>
            </div>

            {/* Quick Guarantees / Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>Prise de rendez-vous rapide</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Personnel Vérifié</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 text-xs sm:text-sm text-slate-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                <Star className="w-4 h-4 text-[#E5C158] shrink-0 fill-[#E5C158]" />
                <span>Satisfaction 100%</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Illustration Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Card Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Accent Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1F5FBF] via-[#E5C158] to-blue-500 rounded-3xl blur-md opacity-40 group-hover:opacity-60 transition duration-1000"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-400/20 bg-slate-900">
                <img 
                  src={heroImg} 
                  alt="Équipe de nettoyage professionnelle Ikram All Service Marrakech" 
                  className="w-full h-[380px] sm:h-[450px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E59] via-transparent to-transparent opacity-80" />

                {/* Floating Floating Badges over photo */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center pointer-events-none">
                  <div className="bg-[#0B2E59]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-blue-400/30 text-xs font-semibold text-white flex items-center gap-1.5 shadow-lg">
                    <MapPin className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Marrakech & Palmeraie</span>
                  </div>
                  <div className="bg-emerald-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-400/30 text-xs font-bold text-emerald-200 flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Service 7j/7</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0B2E59]/90 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-blue-200 font-medium uppercase tracking-wider">Garantie Qualité</p>
                      <p className="text-sm font-bold text-white font-heading">Équipement Pro & Écologique</p>
                    </div>
                    <div className="flex items-center gap-1 bg-[#1F5FBF] px-2.5 py-1 rounded-lg text-xs font-bold text-white">
                      <span>5.0</span>
                      <Star className="w-3.5 h-3.5 fill-[#E5C158] text-[#E5C158]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
