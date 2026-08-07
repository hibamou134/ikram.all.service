import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, CheckCircle2, MessageCircle, Phone, Sparkles, Send, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Nettoyage Général'
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    category: 'Nettoyage & Grand Ménage',
    specificService: initialService,
    propertyType: 'Villa',
    surfaceArea: 150,
    frequency: 'Ponctuelle',
    district: 'Guéliz / Hivernage',
    fullName: '',
    phone: '',
    date: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      if (!formData.fullName || !formData.phone) {
        alert('Veuillez renseigner votre nom et votre numéro de téléphone.');
        return;
      }
      setSubmitted(true);
    }
  };

  const handleSendWhatsapp = () => {
    const message = `Bonjour Ikram All Service,\n\nDEMANDE DE RENDEZ-VOUS EN LIGNE:\n• Service: ${formData.category} (${formData.specificService})\n• Type de bien: ${formData.propertyType}\n• Surface approx: ${formData.surfaceArea} m²\n• Fréquence: ${formData.frequency}\n• Quartier: ${formData.district}\n\nCLIENT:\n• Nom: ${formData.fullName}\n• Tél: ${formData.phone}\n• Date souhaitée: ${formData.date || 'Dès que possible'}\n• Précisions: ${formData.notes || 'Aucune'}`;

    const link = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-[#0B2E59] text-white p-6 relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1F5FBF] text-[#E5C158] flex items-center justify-center shadow-md">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-white">Demander un Rendez-vous</h3>
                <p className="text-xs text-blue-200">Prise de rendez-vous rapide & directe • Marrakech</p>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Fermer le formulaire de rendez-vous"
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content Body */}
          <div className="p-6 overflow-y-auto flex-1">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-extrabold text-2xl text-[#0B2E59]">
                  Demande préparée avec succès !
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Pour valider votre rendez-vous immédiatement, cliquez ci-dessous pour transmettre votre récapitulatif à notre équipe sur WhatsApp.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleSendWhatsapp}
                    className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                    id="quote-modal-whatsapp-send"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Envoyer sur WhatsApp</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNext} className="space-y-6">
                
                {/* Step indicator */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 pb-3 border-b border-slate-100">
                  <span className={step === 1 ? 'text-[#1F5FBF]' : ''}>1. Choix du service & bien</span>
                  <span className={step === 2 ? 'text-[#1F5FBF]' : ''}>2. Coordonnées & Date</span>
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Catégorie de prestation
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                      >
                        <option value="Nettoyage & Grand Ménage">Nettoyage & Grand Ménage</option>
                        <option value="Rénovation & Cristallisation Marbre">Rénovation & Cristallisation du Marbre</option>
                        <option value="Nettoyage Canapé / Tapis / Matelas">Shampouinage Canapé, Tapis, Matelas, Chaises</option>
                        <option value="Placement Personnel de Maison">Placement Personnel de Maison (Femme de ménage, Cuisinière...)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Type de propriété
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                        >
                          <option value="Villa">Villa de luxe</option>
                          <option value="Appartement">Appartement</option>
                          <option value="Riad">Riad Médina</option>
                          <option value="Bureau / Commerce">Bureau / Local commercial</option>
                          <option value="Airbnb">Location Airbnb / Saisonnière</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Quartier à Marrakech
                        </label>
                        <select
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                        >
                          <option value="Guéliz / Hivernage">Guéliz / Hivernage</option>
                          <option value="Palmeraie">La Palmeraie</option>
                          <option value="Targa / Victor Hugo">Targa / Victor Hugo</option>
                          <option value="Médina">Médina / Kasbah</option>
                          <option value="Agdal / Route de l'Ourika">Agdal / Route de l'Ourika</option>
                          <option value="Route d'Amezmiz / Tahanaout">Route d'Amezmiz</option>
                          <option value="Autre secteur Marrakech">Autre secteur</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Surface approximative (m²)
                        </label>
                        <input
                          type="number"
                          min="20"
                          max="2000"
                          value={formData.surfaceArea}
                          onChange={(e) => setFormData({ ...formData, surfaceArea: Number(e.target.value) })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Fréquence souhaitée
                        </label>
                        <select
                          value={formData.frequency}
                          onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                        >
                          <option value="Intervention Ponctuelle">Intervention Ponctuelle</option>
                          <option value="Hebdomadaire (1x / semaine)">Hebdomadaire (1x par semaine)</option>
                          <option value="Bi-mensuelle (2x / mois)">Bi-mensuelle (2x par mois)</option>
                          <option value="Mensuelle">Abonnement Mensuel</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-[#0B2E59] hover:bg-[#1F5FBF] text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Continuer vers vos coordonnées</span>
                        <ArrowRight className="w-4 h-4 text-[#E5C158]" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Votre nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Youssef Benjelloun"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Numéro de téléphone *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="Ex: 06 53 35 03 04"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Date d'intervention souhaitée
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Précisions complémentaires (facultatif)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Nombre de pièces, état du marbre, tâches spécifiques..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1F5FBF]"
                      />
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                      >
                        Retour
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        id="quote-submit-step2-btn"
                      >
                        <Send className="w-4 h-4" />
                        <span>Obtenir mon estimation</span>
                      </button>
                    </div>
                  </div>
                )}

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
