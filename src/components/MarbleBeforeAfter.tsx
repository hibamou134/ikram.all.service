import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Gem, Sparkles, SlidersHorizontal, CheckCircle2 } from 'lucide-react';
import marbleImg from '../assets/images/marble_crystallization_1785942139928.jpg';

export const MarbleBeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-16 bg-[#0B2E59] text-white relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-400/30 text-[#E5C158] text-xs sm:text-sm font-bold">
              <Gem className="w-4 h-4" />
              <span>Spécialiste Rénovation Marbre</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              Restauration du Marbre & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-[#E5C158]">Effet Miroir</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Le marbre de votre villa ou appartement a perdu son éclat ? Nos experts maîtrisent le ponçage diamanté, le polissage traditionnel au sel et la cristallisation haute vitesse pour lui redonner un reflet miroir digne des plus grands palais de Marrakech.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Ponçage à l'eau sans poussière</h4>
                  <p className="text-xs text-slate-300">Élimine les rayures, effritements et taches profondes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Polissage au sel & Cristallisation</h4>
                  <p className="text-xs text-slate-300">Durcit la pierre et crée une protection hydrofuge durable.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E5C158] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Finition Effet Miroir Spectaculaire</h4>
                  <p className="text-xs text-slate-300">Un reflet cristallin qui sublime vos espaces intérieurs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Before / After Slider */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 rounded-3xl p-4 border border-blue-400/20 shadow-2xl">
              <div className="relative h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none">
                
                {/* AFTER image (Full back layer) */}
                <img
                  src={marbleImg}
                  alt="Marbre cristallisé effet miroir après rénovation"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 right-4 bg-emerald-600/90 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm z-10 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>APRÈS : Cristallisation Effet Miroir</span>
                </div>

                {/* BEFORE image layer (Clipped with clip-path for perfect alignment) */}
                <div
                  className="absolute inset-0 z-10 transition-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <img
                    src={marbleImg}
                    alt="Marbre terne avant rénovation"
                    className="w-full h-full object-cover filter brightness-[0.7] contrast-[0.8] blur-[0.8px]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-4 left-4 bg-slate-900/90 text-slate-200 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                    AVANT : Marbre Terne & Rayé
                  </div>
                </div>

                {/* Slider handle control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Glisser pour comparer Avant et Après"
                />

                {/* Visual Line and Handle Button */}
                <div
                  className="absolute inset-y-0 z-20 pointer-events-none flex items-center justify-center"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-10 h-10 -ml-5 rounded-full bg-[#E5C158] text-[#0B2E59] flex items-center justify-center shadow-2xl border-2 border-white">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                </div>

              </div>

              {/* Bottom Instructions */}
              <div className="mt-3 text-center">
                <p className="text-xs text-slate-400 font-medium">
                  👈 Déplacez le curseur horizontalement pour voir la différence de brillance 👉
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
