import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#B8860B] text-xs sm:text-sm font-bold mb-4">
            <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            <span>Témoignages & Avis Vérifiés</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2E59] tracking-tight">
            Ce que disent nos Clients à Marrakech
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            La satisfaction de nos clients est notre plus belle carte de visite. Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative">
          <Quote className="absolute top-6 right-8 w-20 h-20 text-blue-200/50 pointer-events-none" />

          <div className="relative z-10">
            {/* Role Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2E59] text-white text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E5C158]" />
              <span>{TESTIMONIALS[activeIdx].roleTag}</span>
              <span className="text-blue-300">•</span>
              <span className="text-slate-200">{TESTIMONIALS[activeIdx].location}</span>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#E5C158] text-[#E5C158]" />
              ))}
            </div>

            {/* Comment */}
            <p className="text-lg sm:text-xl text-slate-800 font-medium italic leading-relaxed mb-6">
              "{TESTIMONIALS[activeIdx].comment}"
            </p>

            {/* Footer details */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/80">
              <div>
                <p className="font-bold text-[#0B2E59] text-sm">
                  Service effectué : <span className="text-[#1F5FBF]">{TESTIMONIALS[activeIdx].serviceUsed}</span>
                </p>
                <p className="text-xs text-slate-500">{TESTIMONIALS[activeIdx].date}</p>
              </div>

              {/* Slider controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white text-[#0B2E59] border border-slate-200 flex items-center justify-center hover:bg-[#0B2E59] hover:text-white transition-colors shadow-sm cursor-pointer"
                  aria-label="Témoignage précédent"
                  id="testimonial-prev-btn"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white text-[#0B2E59] border border-slate-200 flex items-center justify-center hover:bg-[#0B2E59] hover:text-white transition-colors shadow-sm cursor-pointer"
                  aria-label="Témoignage suivant"
                  id="testimonial-next-btn"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small Grid Cards underneath */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-4 rounded-2xl border text-left cursor-pointer transition-all duration-200 ${
                activeIdx === idx
                  ? 'bg-[#0B2E59] text-white border-[#0B2E59] shadow-md scale-105'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <p className="text-xs font-bold mb-1 truncate">{t.roleTag}</p>
              <p className="text-[11px] opacity-80 truncate">{t.serviceUsed}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
