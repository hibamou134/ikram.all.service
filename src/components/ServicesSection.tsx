import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, Home, Sun, Armchair, Layers, Bed, SquareDot, 
  Gem, Disc, Sparkle, Maximize2, Check, ArrowRight, Calendar, Star 
} from 'lucide-react';
import { SERVICES_LIST } from '../data/content';

interface ServicesSectionProps {
  onOpenQuoteModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  // Map icon strings to Lucide components safely
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles': return Sparkles;
      case 'Home': return Home;
      case 'Sun': return Sun;
      case 'Armchair': return Armchair;
      case 'Layers': return Layers;
      case 'Bed': return Bed;
      case 'SquareDot': return SquareDot;
      case 'Gem': return Gem;
      case 'Disc': return Disc;
      case 'Sparkle': return Sparkle;
      case 'Maximize2': return Maximize2;
      default: return Sparkles;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#1F5FBF] text-xs sm:text-sm font-bold mb-4">
            <Star className="w-4 h-4 text-[#E5C158]" />
            <span>Savoir-Faire & Spécialités</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2E59] tracking-tight">
            Nos Services de Nettoyage & Rénovation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Des prestations haut de gamme exécutées avec du matériel de pointe et des produits éco-responsables à Marrakech.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, idx) => {
            const Icon = getIcon(service.iconName);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group relative"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 bg-[#0B2E59]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-white border border-white/20 uppercase tracking-wider">
                    {service.category === 'marble' ? 'Rénovation Marbre' : service.category === 'specialized' ? 'Shampouinage' : 'Nettoyage Pro'}
                  </div>

                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-[#E5C158] text-[#0B2E59] px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>Populaire</span>
                    </div>
                  )}

                  {/* Icon Badge */}
                  <div className="absolute -bottom-5 right-6 w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#1F5FBF] to-[#0B2E59] text-white flex items-center justify-center shadow-lg border-2 border-white group-hover:rotate-6 transition-transform">
                    <Icon className="w-6 h-6 text-[#E5C158]" />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col justify-between pt-7">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-[#0B2E59] group-hover:text-[#1F5FBF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center text-[#1F5FBF] shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onOpenQuoteModal(service.title)}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#EAF4FF] hover:bg-[#1F5FBF] text-[#1F5FBF] hover:text-white rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 group/btn cursor-pointer"
                      id={`service-rendezvous-btn-${service.id}`}
                    >
                      <Calendar className="w-4 h-4 text-[#1F5FBF] group-hover/btn:text-white transition-colors" />
                      <span>Demander un rendez-vous</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-16 bg-gradient-to-r from-[#0B2E59] to-[#1F5FBF] rounded-3xl p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-400/30">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              Vous avez un besoin spécifique de nettoyage à Marrakech ?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-2xl">
              Nos équipes s'adaptent à toutes les contraintes de surface, de planning et de fréquence.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-8 py-4 bg-[#E5C158] hover:bg-yellow-400 text-[#0B2E59] font-bold rounded-2xl shadow-xl hover:scale-105 transition-all duration-200 shrink-0 cursor-pointer"
            id="services-custom-rendezvous-btn"
          >
            Demander un rendez-vous
          </button>
        </div>
      </div>
    </section>
  );
};
