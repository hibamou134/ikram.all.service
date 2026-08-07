import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, X, ZoomIn, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes les réalisations' },
    { id: 'marbre', label: 'Rénovation Marbre' },
    { id: 'canapes', label: 'Canapés & Tapis' },
    { id: 'vitres', label: 'Vitres & Baies' },
    { id: 'personnel', label: 'Personnel qualifié' },
    { id: 'riads', label: 'Riads & Villas' },
    { id: 'nettoyage', label: 'Grand Ménage' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#1F5FBF] text-xs sm:text-sm font-bold mb-4">
            <Camera className="w-4 h-4 text-[#D4AF37]" />
            <span>Portfolio en Images</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2E59] tracking-tight">
            Galerie de nos Réalisations à Marrakech
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Découvrez en images la qualité de nos interventions de nettoyage, de restauration du marbre et de nos prestations de personnel de maison.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B2E59] text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightboxImage(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLightboxImage(item);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Agrandir l'image : ${item.title}`}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer bg-slate-900 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-5 h-5 text-[#E5C158]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#E5C158] block mb-1">
                  {item.category.toUpperCase()}
                </span>
                <h4 className="font-heading font-bold text-base text-white leading-tight">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-900 rounded-3xl max-w-3xl w-full overflow-hidden border border-slate-800 shadow-2xl relative"
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Fermer l'image agrandie"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 text-white bg-[#0B2E59]">
                <h3 className="font-heading font-bold text-xl text-white">
                  {lightboxImage.title}
                </h3>
                <p className="text-slate-300 text-sm mt-1">
                  {lightboxImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
