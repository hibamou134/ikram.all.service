import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredFaqs = FAQ_ITEMS.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#1F5FBF] text-xs sm:text-sm font-bold mb-4">
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0B2E59] tracking-tight">
            Questions Fréquentes
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Retrouvez rapidement les réponses à vos interrogations sur nos prestations de nettoyage et nos services de personnel à Marrakech.
          </p>

          {/* Search Box */}
          <div className="relative mt-6 max-w-md mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher une question..."
              aria-label="Rechercher dans la foire aux questions"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF] shadow-sm transition-all"
            />
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? '' : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors cursor-pointer"
                    id={`faq-btn-${faq.id}`}
                  >
                    <span className="font-heading font-bold text-base sm:text-lg text-[#0B2E59]">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#1F5FBF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#1F5FBF] text-white' : ''}`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-6 sm:px-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">Aucune question ne correspond à votre recherche.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
