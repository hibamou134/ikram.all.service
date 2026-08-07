import React from 'react';
import { Sparkles, Phone, MapPin, Mail, Instagram, MessageCircle, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B2E59] text-white pt-16 pb-8 border-t border-blue-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-blue-900/50">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1F5FBF] to-[#0B2E59] border border-blue-400/30 flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-[#E5C158]" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-wide">
                IKRAM <span className="text-[#E5C158]">ALL SERVICE</span>
              </span>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Entreprise de référence spécialisée dans les services de nettoyage professionnel, la rénovation du marbre et le placement de personnel qualifié à Marrakech et ses alentours.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-600 hover:bg-pink-500 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneFormatted}`}
                className="w-9 h-9 rounded-xl bg-[#1F5FBF] hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-sm"
                aria-label="Téléphone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading font-bold text-lg text-[#E5C158] mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#a-propos" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Nos Services</a></li>
              <li><a href="#personnel" className="hover:text-white transition-colors">Placement Personnel</a></li>
              <li><a href="#pourquoi-nous" className="hover:text-white transition-colors">Pourquoi nous choisir</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Foire aux questions</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services list */}
          <div>
            <h4 className="font-heading font-bold text-lg text-[#E5C158] mb-4">Nos Spécialités</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Nettoyage Général & Grand Ménage</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Nettoyage de Fenêtres & Baies</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Shampouinage Canapé & Tapis</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cristallisation & Ponçage Marbre</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Polissage au Sel & Effet Miroir</a></li>
              <li><a href="#personnel" className="hover:text-white transition-colors">Femme de Ménage & Cuisinière</a></li>
              <li><a href="#personnel" className="hover:text-white transition-colors">Nounou & Garde Malade</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-lg text-[#E5C158] mb-4">Contact & Localisation</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E5C158] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneFormatted}`} className="hover:text-white font-semibold">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E5C158] shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="pt-2 text-xs text-blue-200">
                <span>Horaires : {COMPANY_INFO.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Ikram All Service. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            <span>Conçu avec excellence à Marrakech</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
