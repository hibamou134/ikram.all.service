import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { ServicesSection } from './components/ServicesSection';
import { MarbleBeforeAfter } from './components/MarbleBeforeAfter';
import { StaffSection } from './components/StaffSection';
import { WhyUsSection } from './components/WhyUsSection';
import { SectorsSection } from './components/SectorsSection';
import { MethodTimeline } from './components/MethodTimeline';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { COMPANY_INFO } from './data/content';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedInitialService, setSelectedInitialService] = useState('Nettoyage Général');

  const handleOpenQuoteModal = (serviceName?: string) => {
    const text = serviceName 
      ? `Bonjour Ikram All Service, je souhaite demander un rendez-vous pour : ${serviceName}`
      : `Bonjour Ikram All Service, je souhaite demander un rendez-vous.`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1F5FBF] selection:text-white">
      {/* Top Contact Bar */}
      <TopBar />

      {/* Main Header with Sticky Navigation */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Animated Key Statistics / Badges */}
        <StatsBar />

        {/* Cleaning & Marble Services Grid */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Interactive Marble Before/After Transformation Slider */}
        <MarbleBeforeAfter />

        {/* Housekeeping & Staff Placement Section */}
        <StaffSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Why Choose Us Commitments */}
        <WhyUsSection />

        {/* Intervention Sectors (Villas, Apartments, Airbnb, Riads, Offices) */}
        <SectorsSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5-Step Method Timeline */}
        <MethodTimeline />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Interactive Contact & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Elements */}
      <FloatingWhatsApp />
      <BackToTop />

      {/* Quote Calculator / Devis Modal */}
      <QuoteCalculatorModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedInitialService}
      />
    </div>
  );
}
