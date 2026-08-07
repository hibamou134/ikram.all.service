import React from 'react';
import { motion } from 'motion/react';
import { 
  UserCheck, Heart, ShieldPlus, ChefHat, Car, Flower2, 
  Check, Calendar, Shield, MessageSquare, Star 
} from 'lucide-react';
import { STAFF_SERVICES, COMPANY_INFO } from '../data/content';
import { StaffItem } from '../types';

interface StaffSectionProps {
  onOpenQuoteModal: (staffRole?: string) => void;
}

export const StaffSection: React.FC<StaffSectionProps> = ({ onOpenQuoteModal }) => {
  const getStaffIcon = (name: string) => {
    switch (name) {
      case 'UserCheck': return UserCheck;
      case 'Heart': return Heart;
      case 'ShieldPlus': return ShieldPlus;
      case 'ChefHat': return ChefHat;
      case 'Car': return Car;
      case 'Flower2': return Flower2;
      default: return UserCheck;
    }
  };

  return (
    <section id="personnel" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0B2E59] text-xs sm:text-sm font-bold mb-4">
            <Shield className="w-4 h-4 text-[#1F5FBF]" />
            <span>Personnel Qualifié & Expérimenté</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2E59] tracking-tight">
            Services de Personnel Qualifié à Marrakech
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Nous sélectionnons rigoureusement votre personnel de maison et de service pour vous assurer tranquillité d'esprit, discrétion et professionnalisme.
          </p>
        </div>

        {/* Staff Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STAFF_SERVICES.map((staff: StaffItem, idx) => {
            const IconComponent = getStaffIcon(staff.iconName);
            return (
              <motion.div
                key={staff.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  {/* Photo & Icon Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative">
                      <img 
                        src={staff.image} 
                        alt={staff.title} 
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-[#0B2E59] text-[#E5C158] flex items-center justify-center shadow-md">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#0B2E59] group-hover:text-[#1F5FBF] transition-colors">
                        {staff.title}
                      </h3>
                      <p className="text-xs text-[#1F5FBF] font-semibold uppercase tracking-wider">
                        {staff.role}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {staff.description}
                  </p>

                  {/* Attributes list */}
                  <div className="space-y-2 pt-3 border-t border-slate-200/60">
                    {staff.attributes.map((attr, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-[#1F5FBF] shrink-0 mt-0.5" />
                        <span>{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onOpenQuoteModal(`Demande de personnel : ${staff.title}`)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0B2E59] hover:bg-[#1F5FBF] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-md cursor-pointer"
                    id={`staff-request-btn-${staff.id}`}
                  >
                    <Calendar className="w-4 h-4 text-[#E5C158]" />
                    <span>Demander un rendez-vous</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security & Guarantee Trust Banner */}
        <div className="mt-16 bg-[#0B2E59] text-white rounded-3xl p-8 border border-blue-900 shadow-2xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-blue-800/60">
          <div className="p-4 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-800/60 text-[#E5C158] flex items-center justify-center mx-auto md:mx-0">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-white font-heading">Dossier Administratif Vérifié</h4>
            <p className="text-xs text-slate-300">Vérification de l'identité, des références antérieures et du dossier complet.</p>
          </div>

          <div className="p-4 space-y-2 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-blue-800/60 text-[#E5C158] flex items-center justify-center mx-auto md:mx-0">
              <Star className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-white font-heading">Remplacement Assuré</h4>
            <p className="text-xs text-slate-300">En cas d'incompatibilité, nous assurons un remplacement rapide sous 48h.</p>
          </div>

          <div className="p-4 space-y-2 md:pl-6">
            <div className="w-10 h-10 rounded-xl bg-blue-800/60 text-[#E5C158] flex items-center justify-center mx-auto md:mx-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-lg text-white font-heading">Suivi Rapproché</h4>
            <p className="text-xs text-slate-300">Un conseiller dédié reste à votre disposition pour s'assurer du bon déroulement.</p>
          </div>
        </div>

      </div>
    </section>
  );
};
