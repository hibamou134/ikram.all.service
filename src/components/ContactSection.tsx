import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, MessageCircle, Instagram, MapPin, Mail, Clock, 
  Send, CheckCircle2, Sparkles 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Nettoyage Général',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Format message for WhatsApp redirection as fallback or direct send
    const messageText = `Bonjour Ikram All Service,\n\nNom: ${formData.name}\nTéléphone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`;
    const whatsappLink = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappLink, '_blank');
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-[#1F5FBF] text-xs sm:text-sm font-bold mb-4">
            <Phone className="w-4 h-4 text-[#D4AF37]" />
            <span>Coordonnées & Intervention</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0B2E59] tracking-tight">
            Contactez Ikram All Service
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Notre équipe est à votre écoute 7j/7 pour répondre à toutes vos demandes de nettoyage ou de placement de personnel à Marrakech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Cards: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <a
              href={`tel:${COMPANY_INFO.phoneFormatted}`}
              className="p-6 bg-slate-50 hover:bg-blue-50/60 rounded-3xl border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all duration-200 flex items-center gap-5 group"
              id="contact-card-phone"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0B2E59] text-[#E5C158] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Téléphone Direct</span>
                <p className="text-xl font-extrabold text-[#0B2E59] group-hover:text-[#1F5FBF] transition-colors mt-0.5">
                  {COMPANY_INFO.phone}
                </p>
                <span className="text-xs text-emerald-600 font-semibold">Appel gratuit • Réponse immédiate</span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-emerald-50/80 hover:bg-emerald-100/80 rounded-3xl border border-emerald-200 shadow-sm hover:border-emerald-300 transition-all duration-200 flex items-center gap-5 group"
              id="contact-card-whatsapp"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0">
                <MessageCircle className="w-7 h-7 fill-current" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">WhatsApp Officiel</span>
                <p className="text-xl font-extrabold text-emerald-900 mt-0.5">
                  Envoyer un message
                </p>
                <span className="text-xs text-emerald-700 font-medium">Devis & photos instantanés sur WhatsApp</span>
              </div>
            </a>

            {/* Instagram & Address Info */}
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-700 hover:text-[#1F5FBF] transition-colors"
                id="contact-instagram-link"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Instagram</span>
                  <p className="text-sm font-bold text-slate-900">{COMPANY_INFO.instagramHandle}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 text-slate-700 pt-2 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#1F5FBF] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Zone d'intervention</span>
                  <p className="text-sm font-bold text-slate-900">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-700 pt-2 border-t border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium">Horaires d'ouverture</span>
                  <p className="text-sm font-bold text-slate-900">{COMPANY_INFO.workingHours}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Square Google Map Box */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg flex flex-col justify-between h-full min-h-[480px] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-[#0B2E59] flex items-center gap-2">
                    <MapPin className="w-6 h-6 text-[#1F5FBF]" />
                    <span>Notre Localisation & Zone d'Intervention</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Marrakech et l'ensemble des communes avoisinantes.
                  </p>
                </div>

                <a
                  href={COMPANY_INFO.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0B2E59] hover:bg-[#1F5FBF] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors cursor-pointer shrink-0"
                  id="open-google-maps-btn"
                >
                  <MapPin className="w-4 h-4 text-[#E5C158]" />
                  <span>Ouvrir dans Google Maps</span>
                </a>
              </div>

              {/* Square Embedded Map Container */}
              <div className="w-full flex-1 min-h-[340px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner relative bg-slate-200">
                <iframe
                  title="Google Maps Ikram All Service Marrakech"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.11186716035!2d-8.086300407335688!3d31.634680072048593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sMarrakesh%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[340px]"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                <div className="absolute bottom-3 left-3 right-3 bg-[#0B2E59]/95 backdrop-blur-md text-white text-xs font-semibold px-4 py-2.5 rounded-xl shadow-xl flex items-center justify-between gap-2 border border-blue-400/20">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#E5C158] shrink-0" />
                    <span className="truncate">Interventions : Guéliz, Palmeraie, Targa, Hivernage, Agdal, Victor Hugo, Route de l'Ourika</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
