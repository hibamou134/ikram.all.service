import React from 'react';
import { motion } from 'motion/react';
import { Building2, Home, Landmark, Hotel, Check, Sparkles, MapPin } from 'lucide-react';
import { SECTORS } from '../data/content';

interface SectorsSectionProps {
  onOpenQuoteModal: (sectorTitle?: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="a-propos" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#1F5FBF] text-xs sm:text-sm font-bold mb-4">
            <Building2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Champs d'Action</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2E59] tracking-tight">
            Nos Secteurs d'Intervention à Marrakech
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Une expertise sur mesure adaptée aux spécificités de chaque type d'espace résidentiel, commercial ou touristique.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SECTORS.map((sector, idx) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-56 overflow-hidden bg-slate-200">
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs text-[#E5C158] font-bold uppercase tracking-wider block mb-0.5">
                    {sector.subtitle}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    {sector.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  {sector.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-[#1F5FBF] shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
