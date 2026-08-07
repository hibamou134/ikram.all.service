import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, UserCheck, MapPin, Zap } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      title: "Nettoyage professionnel",
      subtitle: "Villas, appartements & bureaux",
      icon: Sparkles,
      color: "from-blue-600 to-[#1F5FBF]",
      badge: "100% Qualité"
    },
    {
      title: "Personnel qualifié",
      subtitle: "Femmes de ménage & experts",
      icon: UserCheck,
      color: "from-emerald-600 to-teal-600",
      badge: "Vérifié & Certifié"
    },
    {
      title: "Marrakech et alentours",
      subtitle: "Intervention sur tout le secteur",
      icon: MapPin,
      color: "from-amber-600 to-yellow-600",
      badge: "Proximité"
    },
    {
      title: "Intervention rapide",
      subtitle: "Réponse sous 30 minutes",
      icon: Zap,
      color: "from-indigo-600 to-blue-700",
      badge: "Express 7j/7"
    }
  ];

  return (
    <section className="bg-white py-8 border-y border-slate-200/80 relative z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform shrink-0`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#1F5FBF]">
                      ✔ {stat.title}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 mt-0.5 font-medium">
                    {stat.subtitle}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
