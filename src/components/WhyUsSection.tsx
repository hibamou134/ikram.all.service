import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, Award, Sparkles, Leaf, Wrench, CheckCircle2, FileCheck, UserCheck, ShieldCheck 
} from 'lucide-react';
import { WHY_US_REASONS } from '../data/content';

export const WhyUsSection: React.FC = () => {
  const getWhyIcon = (name: string) => {
    switch (name) {
      case 'Users': return Users;
      case 'Award': return Award;
      case 'Sparkles': return Sparkles;
      case 'Leaf': return Leaf;
      case 'Wrench': return Wrench;
      case 'CheckCircle2': return CheckCircle2;
      case 'FileCheck': return FileCheck;
      case 'UserCheck': return UserCheck;
      default: return ShieldCheck;
    }
  };

  return (
    <section id="pourquoi-nous" className="py-20 bg-slate-100/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#1F5FBF] text-xs sm:text-sm font-bold mb-4">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>Engagements & Exigence</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2E59] tracking-tight">
            Pourquoi Choisir Ikram All Service ?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Notre réputation s'appuie sur une exigence constante de qualité, des méthodes modernes et le respect absolu de nos engagements à Marrakech.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US_REASONS.map((reason, idx) => {
            const Icon = getWhyIcon(reason.iconName);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF4FF] text-[#1F5FBF] group-hover:bg-[#0B2E59] group-hover:text-[#E5C158] flex items-center justify-center transition-colors shadow-sm mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#0B2E59] mb-2 group-hover:text-[#1F5FBF] transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Garantie Ikram Certified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
