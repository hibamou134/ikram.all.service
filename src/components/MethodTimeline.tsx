import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, ClipboardList, Zap, ShieldCheck, Smile, ArrowDown, Sparkles } from 'lucide-react';
import { METHOD_STEPS } from '../data/content';

export const MethodTimeline: React.FC = () => {
  const getMethodIcon = (name: string) => {
    switch (name) {
      case 'PhoneCall': return PhoneCall;
      case 'ClipboardList': return ClipboardList;
      case 'Zap': return Zap;
      case 'ShieldCheck': return ShieldCheck;
      case 'Smile': return Smile;
      default: return Sparkles;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-[#0B2E59] to-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-[#E5C158] text-xs sm:text-sm font-bold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Processus Clair & Transparent</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Notre Méthode de Travail en 5 Étapes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            De votre premier appel à la livraison finale, nous suivons un protocole rigoureux pour garantir un résultat irréprochable.
          </p>
        </div>

        {/* Timeline Steps (Responsive horizontal on desktop, vertical on mobile) */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-600 via-[#E5C158] to-emerald-500 rounded-full z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
            {METHOD_STEPS.map((step, idx) => {
              const Icon = getMethodIcon(step.iconName);
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1F5FBF] to-[#0B2E59] border-2 border-[#E5C158]/50 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:border-[#E5C158] transition-all duration-300">
                      <Icon className="w-9 h-9 text-[#E5C158]" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#E5C158] text-[#0B2E59] font-heading font-black text-xs flex items-center justify-center shadow-lg">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Text */}
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-[#E5C158] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Mobile Down Arrow indicator between steps */}
                  {idx < METHOD_STEPS.length - 1 && (
                    <div className="lg:hidden my-4 text-[#E5C158] animate-bounce">
                      <ArrowDown className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
